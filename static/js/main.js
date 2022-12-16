function christmas_light_pos(scroll_y) {
  const clights = document.getElementById("lightrope")
  if (!clights) return

  const scroll_y_limit = 450
  if (scroll_y <= scroll_y_limit) {
    clights.style.margin = `${-150 + (scroll_y / 3.5)}px 0 0 0`
  } else {
    clights.style.margin = `${-150 + (scroll_y_limit / 3.5)}px 0 0 0`
  }

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
    let starttime = Date.now()

    window.setInterval(function() {
      let s = (Date.now() - starttime)/1000
      let str = ""
      if (s > 86400) {
        str = Math.floor(s/86400) + "d "
        s %= 86400
      }

      if (s > 3600) {
        str += Math.floor(s/3600) + "h "
        s %= 3600
      }

      if (s > 60) {
        str += Math.floor(s/60) + "m "
        s %= 60
      }

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

async function paste_discord_info() {
  const discord_loading = document.getElementById("discord-status-loading")
  const discord_avatar = document.getElementById("discord-avatar")
  const discord_status = document.getElementById("discord-status")
  const discord_status_name = document.getElementById("discord-status-name")
  const discord_spotify = document.getElementById("discord-spotify")
  const discord_status_circle = document.getElementById("discord-status-circle")
  const spotify_image = document.getElementById("spotify-image")
  const spotify_title = document.getElementById("spotify-title")
  const spotify_url = document.getElementById("spotify-url")
  if (!discord_avatar) return

  discord_loading.style.display = "none"

  const discord = await new UserInfo("86477779717066752").fetch()
  discord_avatar.src = discord.avatar_url()

  discord_status_circle.style.backgroundColor = `#${discord.status_hex()}`

  if (discord.spotify.title) {
    discord_status.style.display = "none"
    discord_spotify.style.display = "flex"
    spotify_image.src = discord.spotify.image_url
    spotify_title.innerText = `Listening to spotify:\n${discord.spotify.title}`
    spotify_title.style.color = `#${discord.status_hex()}`
    spotify_url.href = discord.spotify.url
  } else {
    discord_spotify.style.display = "none"
    discord_status.style.display = "block"
    discord_status_name.style.color = `#${discord.status_hex()}`
    if (discord.status_text()) {
      discord_status_name.innerText = `${discord.status_text()}`
    } else {
      discord_status_name.innerText = `Not doing anything`
    }
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  // Load essentials
  calc_years_coding()
  spin_video()
  christmas_light_pos(window.scrollY)

  paste_discord_info()
  window.setInterval(paste_discord_info, 5000)
})
