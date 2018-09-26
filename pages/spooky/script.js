window.onload = function() {
  var winerr = document.getElementById('window');
  var spookyvid = document.getElementById('spookyvid');
  var spookwindow = document.getElementById('spookwindow');
  var dankmode = document.getElementById('dankmode');

  var element = document.createElement("source");
  element.type = "video/mp4";

  dragElement(document.getElementById("drag"), "-titlebar");

  function showvideo() {
    if (dankmode.style.display !== "none") {
      element.src = "video.mp4";
    }

    spookyvid.appendChild(element);
    winerr.style.display = "none";
    dankmode.style.display = "none";
    spookwindow.style.display = "block";
    spookyvid.play();
    addTimer();
  }

  document.getElementById('dank').onclick = function() {
    element.src = "video_dank.mp4";
    dankmode.style.display = "none";
  }

  document.getElementById('spooktime').onclick = function() {
    showvideo();
  }

  document.getElementById('spooktime2').onclick = function() {
    showvideo();
  }
}
