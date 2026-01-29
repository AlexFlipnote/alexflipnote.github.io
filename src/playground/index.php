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

    <style>
      .playground-item {
        align-items: center;
        background-color: #282828;
        border-radius: .25rem;
        border: 1px solid #303030;
        display: flex;
        filter: drop-shadow(5px 5px 0 #000);
        justify-content: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
        width: 90%;
        color: white;
        font-weight: bold;
        letter-spacing: .1rem;
        transition: filter 0.2s ease-in-out;
      }

      .playground-item:hover {
        filter: drop-shadow(2px 2px 0 #000);
        transition: filter 0.1s ease-in-out;
      }
    </style>

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
                <a class="playground-item" href="/playground/{$g}">{$g}</a>
              </div>
            HTML;
          }
        ?>
      </div>
    </div>
  </body>
</html>
