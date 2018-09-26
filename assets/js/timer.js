function addTimer() {
  var starttime = Date.now();
  var timer = document.getElementById('timer');
  var time = document.getElementById('time');
  window.setInterval(function() {
    var s = (Date.now() - starttime)/1000;
    var str = "";
    if (s > 86400) {
      str = Math.floor(s/86400) + "d ";
      s %= 86400;
    }
    if (s > 3600) {
      str += Math.floor(s/3600) + "h ";
      s %= 3600;
    }
    if (s > 60) {
      str += Math.floor(s/60) + "m ";
      s %= 60;
    }
    str += s.toFixed(2) + "s";
    time.textContent = str;
  }, 10);
}
