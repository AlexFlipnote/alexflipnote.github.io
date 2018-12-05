function pad(n) {
  return ("0" + n).slice(-2);
}

function getTime(hex) {
  var now = new Date();
  var hour = pad(now.getHours()),
      minute = pad(now.getMinutes()),
      second = pad(now.getSeconds());

  if (hex == "hex") {
    return hour.toString() + minute.toString() + second.toString();
  } else {
    return hour + ":" + minute + ":" + second;
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  var bg = document.getElementById("bg");
  var time = document.getElementById("time");
  var timetext = document.getElementById("timetext");
  bg.style.backgroundColor = "#000000";

  function timeInHex() {
    bg.style.backgroundColor = "#" + getTime("hex");
    time.innerHTML = "#" + getTime("hex");
    timetext.innerHTML = getTime();
    setTimeout(timeInHex, 100);
  }

  timeInHex();
});
