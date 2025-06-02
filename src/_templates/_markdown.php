<!DOCTYPE html>
<html lang="en">
  <head>
    <?php
      require_once("./src/_templates/_head.php");
      require_once("./src/_lib/_Parsedown.php");
      require_once("./src/_lib/_ParsedownExtra.php");
    ?>
    <script src="/static/js/countable.min.js"></script>
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        // Give each header a topic
        var headings = document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]");

        for (var i = 0; i < headings.length; i++) {
          headings[i].innerHTML =
            '<a style="color: #fff;" href="#' + headings[i].id + '">' +
              headings[i].innerText +
            '</a>';
        }

        // Give an estimated time on when you're done reading
        var article = document.getElementsByClassName("paper")[0];
        Countable.count(article, function (counter) {
          var wpm = 200;
          var estimatedRaw = counter.words / wpm;
          var minutes = Math.round(estimatedRaw);

          var effectiveTime = (minutes < 1) ? "a couple of secs" : minutes + " min read";
          document.getElementById("reading-time").innerHTML += effectiveTime;
        });
      }, false);
    </script>
  </head>
  <body class="dark-theme github">
    <?php require_once("./src/_templates/_docs_topbar.php"); ?>
    <div class="paper-container">
      <?php
        if ($banner ?? false) {
          echo <<<HTML
            <div class="ribbon secondary custom"></div>
            <style>
              .custom {
                background: url('/static/images/{$path}/{$banner}') !important;
                background-repeat: no-repeat;
                background-size: cover !important;
                background-position: center;
              }
            </style>
          HTML;
        } else {
          echo <<<HTML
            <div class="ribbon secondary"></div>
          HTML;
        }
      ?>
      <div class="paper markdown-jekyll">
        <div class="blog-title text-center">
          <h1 class="no-margin no-padding no-border"><?php echo $title; ?></h1>
          <p class="italic no-margin no-padding no-border"><?php echo $description; ?></p>
        </div>
        <div class="blog-splitter">
          <hr class="blog-split-yes">
          <div class="blog-labels text-center">
            <span class="label secondary">📅 <?php echo $date->format("d M Y"); ?></span>
            <span class="label secondary" id="reading-time">⏱ </span>
            <span class="label secondary">📝 <?php echo $author ?? "Guest"; ?></span>
          </div>
        </div>
        <?php
          $markdown = file_get_contents("./src{$path}/index.md");
          $Parsedown = new ParsedownExtra();
          echo $Parsedown->text($markdown);
        ?>
      </div>
    </div>
    <?php require_once("./src/_templates/_footer.php"); ?>
  </body>
</html>
