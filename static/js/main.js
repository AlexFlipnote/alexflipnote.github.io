function christmas_light_pos(scroll_y) {
  const clights = document.getElementById("lightrope")
  if (!clights) return

  const scroll_y_limit = 450
  if (scroll_y <= scroll_y_limit) clights.style.margin = `${-150 + (scroll_y / 3.5)}px 0 0 0`
  else clights.style.margin = `${-150 + (scroll_y_limit / 3.5)}px 0 0 0`

  if (scroll_y <= (window.innerHeight - 12)) {
    clights.style.position = "absolute"
    clights.style.top = "inherit"
  } else {
    clights.style.position = "fixed"
    clights.style.margin = "-10px 0 0 0"
    clights.style.top = "0"
  }
}

function calc_years_coding() {
  const timestamp_text = document.getElementById("years-of-coding")
  if (!timestamp_text) return

  const years_since = new Date("2015-08-01").getTime()
  const today = new Date().getTime()
  const years = Math.floor(
    (today - years_since) / (1000 * 60 * 60 * 24 * 365)
  )

  timestamp_text.innerText = `${years} years`
}

function spin_video() {
  const spin = document.getElementById("click-spin-start")
  const video = document.getElementById("spin-video")
  const time = document.getElementById("spin-time")
  if (!spin) return

  spin.addEventListener("click", () => {
    video.play()
    spin.remove()
    const starttime = Date.now()

    window.setInterval(function() {
      let s = (Date.now() - starttime) / 1000
      let str = ""

      if (s > 86400) str = Math.floor(s/86400) + "d "; s %= 86400
      if (s > 3600) str += Math.floor(s/3600) + "h "; s %= 3600
      if (s > 60)str += Math.floor(s/60) + "m "; s %= 60
      str += s.toFixed(2) + "s"

      time.textContent = str
    }, 10)

  })
}

window.addEventListener("scroll", () => {
  // Hide arrow button when scrolling down the page
  const scroll_y = window.scrollY
  const arrow = document.getElementById("arrow")

  if (scroll_y >= 100) arrow.classList.add("arrow--scrolled")
  else arrow.classList.remove("arrow--scrolled")

  christmas_light_pos(scroll_y)
})

document.addEventListener("DOMContentLoaded", async () => {
  // Load essentials (this file)
  calc_years_coding()
  spin_video()
  christmas_light_pos(window.scrollY)

  // ./static/js/discord.js
  paste_discord_info()
  window.setInterval(paste_discord_info, 5000)
})
