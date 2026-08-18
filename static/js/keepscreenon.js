let wakeLock = null
let enabled = false

const toggleBtn = document.getElementById("wake-toggle")
const statusText = document.getElementById("status-text")
const statusLabel = document.getElementById("status-label")
const unsupportedEl = document.getElementById("unsupported")

const supported = "wakeLock" in navigator

function updateUI() {
  document.body.classList.toggle("is-on", enabled)
  toggleBtn.classList.toggle("is-on", enabled)
  toggleBtn.setAttribute("aria-pressed", String(enabled))
  statusText.classList.toggle("is-on", enabled)
  statusLabel.textContent = enabled ? "Screen will stay awake" : "Screen can sleep"
}

async function requestWakeLock() {
  try {
    wakeLock = await navigator.wakeLock.request("screen")
  } catch (err) {
    enabled = false
    updateUI()
  }
}

async function setEnabled(next) {
  enabled = next
  updateUI()

  if (enabled) {
    await requestWakeLock()
  } else if (wakeLock) {
    await wakeLock.release()
    wakeLock = null
  }
}

toggleBtn.addEventListener("click", () => setEnabled(!enabled))

document.addEventListener("visibilitychange", () => {
  if (enabled && document.visibilityState === "visible" && (!wakeLock || wakeLock.released)) {
    requestWakeLock()
  }
})

document.addEventListener("DOMContentLoaded", () => {
  if (!supported) {
    toggleBtn.disabled = true
    unsupportedEl.classList.remove("hidden")
    statusLabel.textContent = "Not supported in this browser"
  }
})
