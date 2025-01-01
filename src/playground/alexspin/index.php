<html lang="en">
  <head>
    <?php
      $title = "alexspin";
      $description = "bottom text";
      $path = "/playground/alexspin";

      require_once("./src/_templates/_head.php");
    ?>
  </head>
  <body class="dark-theme github">
    <div class="click-to-start" id="click-spin-start">
      <h2>Click anywhere to start the spin</h2>
    </div>
    <div class="fullscreen">
      <div class="center-object">
        <h1 class="runescape" id="spin-time">0.0s</h1>
        <video loop id="spin-video">
          <source src="/static/videos/alexspin.mp4" type="video/mp4">
        </video>
      </div>
    </div>
  </body>
</html>
