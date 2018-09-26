window.onload = function() {
  var winerr = document.getElementById('window');
  var spookyvid = document.getElementById('spookyvid');
  var spookwindow = document.getElementById('spookwindow');
  var dankmode = document.getElementById('dankmode');
  var drag = document.getElementById("drag");

  var element = document.createElement("source");
  element.type = "video/mp4";

  dragElement(drag, "-titlebar");

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

  document.body.onclick = function (ev) {
    if (ev.target.getAttribute("id") == "window-close") {
      var min = 1;
      var max = 80;

      var clone = drag.cloneNode(true);

      clone.id = drag.id;
      clone.style.top = Math.floor(Math.random() * (max - min + 1)) + min + "%";
      clone.style.left = Math.floor(Math.random() * (max - min + 1)) + min + "%";

      var doot = new Audio('doot.mp3');
      doot.play();

      winerr.appendChild(clone);
      dragElement(clone, null);
    }

    if (ev.target.getAttribute("id") == "spooktime") {
      showvideo();
    }

    if (ev.target.getAttribute("id") == "spooktime2") {
      showvideo();
    }
  };
}
