window.onload = function() {
  var winerr = document.getElementById('window');
  var spookyvid = document.getElementById('spookyvid');

  function showvideo() {
    winerr.style.display = "none";
    spookyvid.style.visibility = "visible";
    spookyvid.play();
  }

  document.getElementById('spooktime').onclick = function() {
    showvideo();
  }

  document.getElementById('spooktime2').onclick = function() {
    showvideo();
  }
}
