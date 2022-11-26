function christmas_light_pos(scroll_y) {
  const clights = document.getElementById("lightrope")
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
  const years_since = new Date("2015-08-01").getTime()
  const today = new Date().getTime()

  const years = Math.floor(
    (today - years_since) / (1000 * 60 * 60 * 24 * 365)
  )

  timestamp_text.innerText = `${years} years`
}

window.addEventListener("scroll", () => {
  // Hide arrow button when scrolling down the page
  const scroll_y = window.scrollY
  const arrow = document.getElementById("arrow")

  if (scroll_y >= 100) {
    arrow.classList.add("arrow--scrolled")
  } else {
    arrow.classList.remove("arrow--scrolled")
  }

  christmas_light_pos(scroll_y)
})

document.addEventListener("DOMContentLoaded", () => {
  // Load essentials
  calc_years_coding()
  christmas_light_pos(window.scrollY)
})
