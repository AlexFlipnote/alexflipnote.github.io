// Spins once clicked, browsers won't play the sound before that, and counts how long you've watched
document.addEventListener("DOMContentLoaded", () => {
  const spin = document.getElementById("click-spin-start")
  const video = document.getElementById("spin-video")
  const time = document.getElementById("spin-time")

  spin.addEventListener("click", () => {
    video.play()
    spin.remove()
    const started = Date.now()

    setInterval(() => {
      let s = (Date.now() - started) / 1000
      let text = ""

      if (s > 86400) text = Math.floor(s / 86400) + "d "; s %= 86400
      if (s > 3600) text += Math.floor(s / 3600) + "h "; s %= 3600
      if (s > 60) text += Math.floor(s / 60) + "m "; s %= 60
      text += s.toFixed(2) + "s"

      time.textContent = text
    }, 10)
  })
})
