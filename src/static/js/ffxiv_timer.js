const DAY = 24 * 60 * 60 * 1000

const STATIC_TIMERS = [
  {
    id: "weekly",
    name: "Weekly Reset",
    every: 7 * DAY,
    offset: (5 * 24 + 8) * 60 * 60 * 1000,
    info: "On the weekly reset, the following resets:",
    list: [
      "Cap on latest Allagan tomestones",
      "Weekly repeatable quests",
      "Latest Savage raid tier reward eligibility",
      "Latest Alliance Raid reward eligibility",
      "Blue Mage/Masked Carnival Weekly Targets",
      "PvP Weekly Performance",
      "Challenge Log challenges",
      "New Wondrous Tails journal availability",
      "Faux Hollows availability",
      "Custom deliveries allowances/individual allowances",
      "Doman Enclave Reconstruction Effort donations",
      "Adventurer Squadron Priority mission",
      "Fashion Report Theme Reveal"
    ]
  },
  {
    id: "daily",
    name: "Duty/Allied Society Daily Reset",
    every: DAY,
    offset: 15 * 60 * 60 * 1000,
    info: "At this time, the following resets:",
    list: [
      "Allied society daily quest allowances",
      "Duty Roulette daily bonuses",
      "Daily repeatable quests",
      "Frontline Duty Availability",
      "Housing Message",
      "Mini Cactpot"
    ]
  },
  {
    id: "gc",
    name: "Grand Company Daily Reset",
    every: DAY,
    offset: 20 * 60 * 60 * 1000,
    info: "At this time, the following resets:",
    list: [
      "Adventurer Squadron training allowances",
      "Grand Company Supply/Provisioning missions"
    ]
  },
  {
    id: "fashion_judging",
    name: "Fashion Report Judging",
    every: 7 * DAY,
    offset: (1 * 24 + 8) * 60 * 60 * 1000,  // Thursday + 1 day = Friday 08:00 GMT
    info: "At this time, the Masked Rose begins judging:",
    list: [
      "Fashion Report judging begins"
    ]
  },
  {
    id: "gates",
    name: "Gold Saucer GATEs",
    every: 20 * 60 * 1000,
    offset: 0,  // Epoch 00:00 aligns perfectly with xx:00, xx:20, xx:40
    info: "Gold Saucer Active Time Maneuvers begin:",
    list: [
      "GATE registration opens",
      "A random Gold Saucer minigame spawns"
    ]
  },
  {
    id: "jumbo_cactpot_eu",
    name: "Jumbo Cactpot (EU)",
    every: 7 * DAY,
    offset: (2 * 24 + 19) * 60 * 60 * 1000,  // Saturday 19:00 GMT
    small: true,
    info: "The weekly lottery numbers are drawn for Chaos and Light:",
    list: [
      "Jumbo Cactpot drawing",
      "Early bird bonus active for 1 hour"
    ]
  },
  {
    id: "jumbo_cactpot_na",
    name: "Jumbo Cactpot (NA)",
    every: 7 * DAY,
    offset: (3 * 24 + 2) * 60 * 60 * 1000,  // Sunday 02:00 GMT
    small: true,
    info: "The weekly lottery numbers are drawn for Aether, Primal, Crystal, and Dynamis:",
    list: [
      "Jumbo Cactpot drawing",
      "Early bird bonus active for 1 hour"
    ]
  },
  {
    id: "jumbo_cactpot_jp",
    name: "Jumbo Cactpot (JP)",
    every: 7 * DAY,
    offset: (2 * 24 + 12) * 60 * 60 * 1000,  // Saturday 12:00 GMT
    small: true,
    info: "The weekly lottery numbers are drawn for Elemental, Gaia, Mana, and Meteor:",
    list: [
      "Jumbo Cactpot drawing",
      "Early bird bonus active for 1 hour"
    ]
  },
  {
    id: "jumbo_cactpot_oce",
    name: "Jumbo Cactpot (OCE)",
    every: 7 * DAY,
    offset: (2 * 24 + 9) * 60 * 60 * 1000,  // Saturday 09:00 GMT
    small: true,
    info: "The weekly lottery numbers are drawn for Materia:",
    list: [
      "Jumbo Cactpot drawing",
      "Early bird bonus active for 1 hour"
    ]
  }
]

const HOUSING_PHASES = {
  totalCycle: 9 * DAY,
  startTime: 1653577200000,
  phases: [
    { id: "application", name: "Application Period", duration: 5 * DAY, info: "During this time, you may place an entry into the housing lottery." },
    { id: "results", name: "Results Period", duration: 4 * DAY, info: "During this time, you may accept a winning bid." }
  ]
}

/** Helpers **/
const formatCountdown = (ms) => {
  const s = Math.floor(ms / 1000)
  const m = Math.floor(s / 60)
  const h = Math.floor(m / 60)
  const d = Math.floor(h / 24)
  const time = `${String(h % 24).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`
  const days_name = d > 1 ? "days" : "day"
  return d > 0 ? `${d} ${days_name}, ${time}` : time
}

const formatDate = (date) => {
  const options = { weekday: 'short', day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false }
  const formatted = date.toLocaleString('en-GB', options).replace(',', '')
  const offset = -date.getTimezoneOffset() / 60
  const gmt = `GMT${offset >= 0 ? '+' : ''}${offset}`
  return `${formatted} ${gmt}`
}

const createTimerElement = (id) => {
  const div = document.createElement("div")
  div.className = "timer"
  div.id = `timer-${id}`
  div.innerHTML = `
    <div class="timer-header">
      <div class="title"></div>
      <button class="info-btn" onclick="openModal('${id}')" title="Details">i</button>
    </div>
    <div class="timer-body">
      <div class="main-col">
        <div class="countdown" id="count-${id}"></div>
        <div class="target" id="target-${id}"></div>
      </div>
      <div class="side-col" id="append-${id}"></div>
    </div>
  `
  return div
}

/** Modal Logic **/
const TIMER_INFOS = {}

function openModal(id) {
  const data = TIMER_INFOS[id]
  if (!data) return

  const dialog = document.getElementById("info-modal")
  document.getElementById("modal-title").innerText = data.title

  let html = `<p>${data.info}</p>`
  if (data.list && data.list.length > 0) {
    html += `<ul>${data.list.map(item => `<li>${item}</li>`).join('')}</ul>`
  }

  document.getElementById("modal-content").innerHTML = html
  dialog.showModal()
}

// Close modal logic
document.addEventListener("DOMContentLoaded", () => {
  const dialog = document.getElementById("info-modal")

  // Close on 'X' button
  document.getElementById("modal-close").addEventListener("click", () => dialog.close())

  // Close when clicking outside the modal box
  dialog.addEventListener("click", (e) => {
    const rect = dialog.getBoundingClientRect()
    if (e.clientY < rect.top || e.clientY > rect.bottom || e.clientX < rect.left || e.clientX > rect.right) {
      dialog.close()
    }
  })
})

/** Logic Handlers **/
function updateHousingLogic(now) {
  const cycleElapsed = (now - HOUSING_PHASES.startTime) % HOUSING_PHASES.totalCycle
  const cycleStart = now - cycleElapsed

  let currentPhase, nextPhase, currentEnd

  if (cycleElapsed < HOUSING_PHASES.phases[0].duration) {
    currentPhase = HOUSING_PHASES.phases[0]
    nextPhase = HOUSING_PHASES.phases[1]
    currentEnd = cycleStart + currentPhase.duration
  } else {
    currentPhase = HOUSING_PHASES.phases[1]
    nextPhase = HOUSING_PHASES.phases[0]
    currentEnd = cycleStart + HOUSING_PHASES.totalCycle
  }

  const id = "housing"

  // Store info for the modal dynamically
  TIMER_INFOS[id] = {
    title: `Housing: ${currentPhase.name}`,
    info: currentPhase.info
  }

  let el = document.getElementById(`timer-${id}`)
  if (!el) {
    el = createTimerElement(id)
    document.getElementById("timers").appendChild(el)
  }

  el.querySelector(".title").innerText = `Housing: ${currentPhase.name}`
  document.getElementById(`count-${id}`).innerText = formatCountdown(currentEnd - now)
  document.getElementById(`target-${id}`).innerHTML = `<strong>Ends at:</strong> ${formatDate(new Date(currentEnd))}`

  // Render the two-column inner layout for housing
  const appendEl = document.getElementById(`append-${id}`)
  appendEl.innerHTML = `
    <div class="sub-title">Next: ${nextPhase.name}</div>
  `
}

function updateStaticTimer(timer, now) {
  let el = document.getElementById(`timer-${timer.id}`)
  if (!el) {
    el = createTimerElement(timer.id)
    if (timer.small) el.classList.add("small")

    document.getElementById("timers").appendChild(el)
    el.querySelector(".title").innerText = timer.name

    // Store info for the modal globally
    TIMER_INFOS[timer.id] = {
      title: timer.name,
      info: timer.info,
      list: timer.list
    }
  }

  const next = (Math.floor((now - timer.offset) / timer.every) + 1) * timer.every + timer.offset
  document.getElementById(`count-${timer.id}`).innerText = formatCountdown(next - now)
  document.getElementById(`target-${timer.id}`).innerHTML = `<strong>Next at:</strong> ${formatDate(new Date(next))}`
}

function renderAll() {
  const now = Date.now()
  updateHousingLogic(now)
  STATIC_TIMERS.forEach(timer => updateStaticTimer(timer, now))
}

let lastTimestamp = -1000
function tick(timestamp) {
  if (timestamp - lastTimestamp >= 1000) {
    renderAll()
    lastTimestamp = timestamp
  }
  requestAnimationFrame(tick)
}

document.addEventListener("DOMContentLoaded", () => {
  renderAll()
  requestAnimationFrame(tick)
})
