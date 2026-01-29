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
      "Fashion Report"
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
      "Housing Message"
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
    <div class="title"></div>
    <div class="countdown" id="count-${id}"></div>
    <div id="append-${id}"></div>
    <details>
      <summary>Details</summary>
      <div class="info" id="info-${id}"></div>
      <div class="target" id="target-${id}"></div>
    </details>
  `
  return div
}

/** Logic Handlers **/
function updateHousingLogic(now) {
  const cycleElapsed = (now - HOUSING_PHASES.startTime) % HOUSING_PHASES.totalCycle
  const cycleStart = now - cycleElapsed

  let currentPhase, nextPhase, currentEnd, nextStart

  if (cycleElapsed < HOUSING_PHASES.phases[0].duration) {
    currentPhase = HOUSING_PHASES.phases[0]
    nextPhase = HOUSING_PHASES.phases[1]
    currentEnd = cycleStart + currentPhase.duration
    nextStart = currentEnd
  } else {
    currentPhase = HOUSING_PHASES.phases[1]
    nextPhase = HOUSING_PHASES.phases[0]
    currentEnd = cycleStart + HOUSING_PHASES.totalCycle
    nextStart = currentEnd
  }

  const id = "housing"
  let el = document.getElementById(`timer-${id}`)
  if (!el) {
    el = createTimerElement(id)
    document.getElementById("timers").appendChild(el)
  }

  el.querySelector(".title").innerText = `Housing: ${currentPhase.name}`
  document.getElementById(`count-${id}`).innerText = formatCountdown(currentEnd - now)
  document.getElementById(`target-${id}`).innerHTML = `<strong>Ends at:</strong> ${formatDate(new Date(currentEnd))}`
  document.getElementById(`info-${id}`).innerHTML = currentPhase.info

  const appendEl = document.getElementById(`append-${id}`)
  appendEl.innerHTML = `
    <div class="sub-timer">
      <div class="sub-title">Next: ${nextPhase.name}</div>
      <div style="font-size: 0.8rem">Starts: ${formatDate(new Date(nextStart))}</div>
    </div>
  `
}

function updateStaticTimer(timer, now) {
  let el = document.getElementById(`timer-${timer.id}`)
  if (!el) {
    el = createTimerElement(timer.id)
    document.getElementById("timers").appendChild(el)
    el.querySelector(".title").innerText = timer.name

    // Build the detailed list
    const listHtml = timer.list ? `<ul style="margin: 5px 0; padding-left: 20px;">${timer.list.map(item => `<li>${item}</li>`).join('')}</ul>` : ""
    el.querySelector(".info").innerHTML = `${timer.info}${listHtml}`
  }

  const next = (Math.floor((now - timer.offset) / timer.every) + 1) * timer.every + timer.offset
  document.getElementById(`count-${timer.id}`).innerText = formatCountdown(next - now)
  document.getElementById(`target-${timer.id}`).innerHTML = `<strong>Next at:</strong> ${formatDate(new Date(next))}`
}

function renderAll() {
  const now = Date.now()
  STATIC_TIMERS.forEach(timer => updateStaticTimer(timer, now))
  updateHousingLogic(now)
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
