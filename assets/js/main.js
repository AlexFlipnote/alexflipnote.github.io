window.addEventListener('scroll', function() {
  if (document.getElementsByClassName('arrow').length > 0) {
    var scrollPosition = window.scrollY;
    var logoContainer = document.getElementsByClassName('arrow')[0];

    scrollPosition = window.scrollY;
    if (scrollPosition >= 100) logoContainer.classList.add('arrow--scrolled');
    else logoContainer.classList.remove('arrow--scrolled');
  }
});
