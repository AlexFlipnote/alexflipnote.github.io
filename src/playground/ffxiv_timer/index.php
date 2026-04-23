<html>
  <head>
    <?php
      $title = "FFXIV Event & Reset Timers";
      $description = "Track Final Fantasy XIV weekly resets, daily duties, and the 9-day housing lottery cycle in your local timezone.";
      $path = "/playground/ffxiv_timer";
      $keywords = "ffxiv, ffxiv timer, final fantasy xiv, reset timer, event timer, housing lottery, dailies, weeklies, playground, alexflipnote";

      require_once("./src/_templates/_head.php");
    ?>
    <link href="/static/css/ffxiv_timer.css" type="text/css" rel="stylesheet"/>
  </head>
  <body class="dark-theme github">
    <h1 class="header">FFXIV Timers</h1>
    <div class="tz-note">
      Times displayed are based on your browser's timezone.
    </div>

    <main id="timers"></main>

    <dialog id="info-modal">
      <div class="modal-header">
        <h2 id="modal-title" class="title" style="margin: 0;"></h2>
        <button id="modal-close" class="close-btn">&times;</button>
      </div>
      <div id="modal-content" class="modal-body"></div>
    </dialog>

    <script src="/static/js/ffxiv_timer.js" type="text/javascript"></script>
  </body>
</html>
