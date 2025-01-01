<html>
  <head>
    <?php
      $title = "HEX Clock - #000000";
      $description = "The clock that changes the HEX background after 24h clock";
      $path = "/playground/hexclock";

      require_once("./src/_templates/_head.php");
    ?>
    <link href="/static/css/hexclock.css" type="text/css" rel="stylesheet"/>
    <script src="/static/js/hexclock.js" type="text/javascript"></script>
  </head>
  <body id="bg" style="background-color: #000000" class="dark-theme">
    <div class="center-object center-text time-container">
      <h1 id="timetext" class="time no-margin">00:00:00</h1>
      <h1 id="time" class="hex no-margin">#000000</h1>
    </div>
  </body>
</html>
