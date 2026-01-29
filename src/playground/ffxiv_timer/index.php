<html>
  <head>
    <?php
      $title = "FFXIV Event & Reset Timers";
      $description = "Track Final Fantasy XIV weekly resets, daily duties, and the 9-day housing lottery cycle in your local timezone.";
      $path = "/playground/ffxiv_timer";

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
    <script src="/static/js/ffxiv_timer.js" type="text/javascript"></script>
  </body>
</html>
