// Where Alex is, the clocks follow this
const TIME_ZONE = "Europe/Oslo"

const clockFormat = new Intl.DateTimeFormat("en-GB", {
  timeZone: TIME_ZONE, hour: "2-digit", minute: "2-digit", hourCycle: "h23"
})

function tick() {
  const text = clockFormat.format(new Date())
  document.querySelectorAll("[data-clock]").forEach((clock) => { clock.textContent = text })
}

function yearsSince() {
  document.querySelectorAll("[data-years-since]").forEach((el) => {
    const since = new Date(el.dataset.yearsSince).getTime()
    const years = Math.floor((Date.now() - since) / (1000 * 60 * 60 * 24 * 365.25))
    el.textContent = `${years} years`
  })
}

/** Colour swatches copy their HEX when clicked. */
function swatches() {
  document.querySelectorAll("[data-copy]").forEach((button) => {
    const label = button.querySelector(".hex")
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(button.dataset.copy)
        label.textContent = "Copied!"
      } catch {
        label.textContent = button.dataset.copy
      }
      setTimeout(() => { label.textContent = button.dataset.copy }, 1500)
    })
  })
}

document.addEventListener("DOMContentLoaded", () => {
  tick()
  yearsSince()
  swatches()
  setInterval(tick, 1000)
})
