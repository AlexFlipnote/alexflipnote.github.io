window.addEventListener('scroll', function() {
  // Hide arrow button when scrolling down the page
  var scrollPosition = window.scrollY;
  var logoContainer = document.getElementsByClassName('arrow')[0];
  if (scrollPosition >= 100) logoContainer.classList.add('arrow--scrolled');
  else logoContainer.classList.remove('arrow--scrolled');
});

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
  results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

document.addEventListener('DOMContentLoaded', function() {
  // Load the time since I coded
  var years_since = new Date("2015-08-01").getTime();
  var today = new Date().getTime();

  var ms = today - years_since;
  var m = Math.floor(ms / 60000);
  var h = Math.floor(m / 60);
  var d = Math.floor(h / 24);
  var y = Math.floor(d / 365);

  document.getElementById("years-of-coding").innerText = y + " years";

  if (getParameterByName('old')) {
    document.querySelector('head').innerHTML += '<link href="assets/css/classic.css" type="text/css" rel="stylesheet">';
  }
});
