window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var logoContainer = document.getElementsByClassName('arrow')[0];

  scrollPosition = window.scrollY;
  if (scrollPosition >= 100) logoContainer.classList.add('arrow--scrolled');
  else logoContainer.classList.remove('arrow--scrolled');
});

window.onload = function() {
  var modal = document.getElementById('modal');
  var modaltarget = document.getElementsByClassName('modal')[0];
  var btn = document.getElementById("trigger");
  var span = document.getElementsByClassName("close")[0];
  var fadetime = 575;

  btn.onclick = function() {
    modal.style.display = "block";
    modaltarget.classList.remove('modal--close');
  }

  span.onclick = function() {
    modaltarget.classList.add('modal--close');
    setTimeout(function() {
      modal.style.display = "none";
    }, fadetime);
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modaltarget.classList.add('modal--close');
      setTimeout(function() {
        modal.style.display = "none";
      }, fadetime);
    }
  }
}
