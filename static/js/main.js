function scroll_to(get_id) {
  // Thanks Bowser65 <3
  let id = get_id.replace("#", "")
  const el = document.getElementById(id)
  el.scrollIntoView({behavior: "smooth", inline: "nearest"})
  history.pushState(null, null, `#${id}`)
}

window.addEventListener('scroll', function() {
  // Hide arrow button when scrolling down the page
  var scrollPosition = window.scrollY
  var logoContainer = document.getElementsByClassName('arrow')[0]
  if (scrollPosition >= 100) logoContainer.classList.add('arrow--scrolled')
  else logoContainer.classList.remove('arrow--scrolled')
})

document.addEventListener('DOMContentLoaded', function() {
  // Load the time since I coded
  var years_since = new Date("2015-08-01").getTime()
  var today = new Date().getTime()

  var ms = today - years_since
  var m = Math.floor(ms / 60000)
  var h = Math.floor(m / 60)
  var d = Math.floor(h / 24)
  var y = Math.floor(d / 365)

  document.getElementById("years-of-coding").innerText = y + " years"
})
