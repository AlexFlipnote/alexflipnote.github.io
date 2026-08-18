<html>
  <head>
    <?php
      $title = "Keep Screen On";
      $description = "Stop your screen from dimming or locking while this tab is open. No timers, no clicks, just a toggle.";
      $path = "/playground/keepscreenon";
      $keywords = "keep screen on, stay awake, wake lock, no sleep, screen timeout, playground, alexflipnote";

      require_once("./src/_templates/_head.php");
    ?>
    <link href="/static/css/keepscreenon.css" type="text/css" rel="stylesheet"/>
  </head>
  <body class="dark-theme github">
    <h1 class="header">Keep Screen On</h1>

    <main>
      <button id="wake-toggle" class="wake-toggle" type="button" aria-pressed="false" aria-label="Toggle keep screen on">
        <span class="pulse-ring"></span>
        <span class="pulse-ring delay"></span>
        <svg class="eye-icon" viewBox="0 0 100 60" aria-hidden="true">
          <line class="eye-closed" x1="10" y1="30" x2="90" y2="30"/>
          <g class="eye-open">
            <path class="eye-outline" d="M5,30 Q50,2 95,30 Q50,58 5,30 Z"/>
            <circle class="pupil" cx="50" cy="30" r="11"/>
          </g>
        </svg>
      </button>
    </main>

    <div id="status-text" class="status-text">
      <span class="status-dot"></span>
      <span id="status-label">Screen can sleep</span>
    </div>
    <div id="unsupported" class="unsupported hidden">Your browser doesn't support the Wake Lock API, sorry.</div>

    <script src="/static/js/keepscreenon.js" type="text/javascript"></script>
  </body>
</html>
