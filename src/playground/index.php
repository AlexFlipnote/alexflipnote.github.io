<html lang="en">
  <head>
    <?php
      $title = "AlexFlipnote - playground";
      $description = "Silly projects that I made for fun";
      $path = "/playground";

      require_once("./src/_templates/_head.php");
    ?>
  </head>
  <body class="dark-theme github">
    <div class="container">
      <h1>Playground experiments:</h1>
      <div class="flex-grid">
        <?php
          $pg_path = "./src/playground";
          $playground_names = array_filter(
            scandir($pg_path),
            fn($item) => is_dir("$pg_path/$item") &&
            $item !== "." && $item !== ".."
          );

          foreach ($playground_names as $g) {
            echo <<<HTML
              <div class="col-xs-3">
                <a href="./playground/{$g}">{$g}</a>
              </div>
            HTML;
          }
        ?>
      </div>
    </div>
  </body>
</html>
