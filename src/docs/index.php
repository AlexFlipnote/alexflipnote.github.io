<html lang="en">
  <head>
    <?php
      $title = "AlexFlipnote - Documentations";
      $description = "Documentations that I made for anyone else to use";
      $path = "/docs";

      require_once("./src/_templates/_head.php");
    ?>
  </head>
  <body class="dark-theme github">
    <?php require_once("./src/_templates/_docs_topbar.php"); ?>
    <div class="markdown-jekyll">
      <h1 class="no-margin index-title">
        Documentation homepage
        <br>
        <p class="no-margin undertitle"><?php echo $description; ?></p>
      </h1>
      <ul class="article-list">
        <?php
          $pg_path = "./src/docs";
          $docs_names = array_filter(
            scandir($pg_path),
            fn($item) => is_dir("$pg_path/$item") &&
            $item !== "." && $item !== ".."
          );

          function include_meta($path) {
            ob_start();
            include($path);
            ob_end_clean();

            return [
              'title' => $title ?? 'Untitled',
              'description' => $description ?? '',
              'date' => $date ?? new DateTime('1970-01-01')
            ];
          }

          usort($docs_names, function ($a, $b) use ($pg_path) {
            $meta_a = include_meta("$pg_path/$a/index.php");
            $meta_b = include_meta("$pg_path/$b/index.php");
            return $meta_b['date'] <=> $meta_a['date'];
          });

          $last_month = "";

          foreach ($docs_names as $g) {
            $meta = include_meta("$pg_path/$g/index.php");
            $formatted_month = $meta['date']->format("F Y");

            if ($formatted_month !== $last_month) {
              echo <<<HTML
                <div class="splitletter">
                  <p class="firstletter">{$formatted_month}</p>
                </div>
              HTML;
              $last_month = $formatted_month;
            }

            $id = strtolower(str_replace(' ', '-', $meta['title']));
            $url = "/docs/$g";
            $title = htmlspecialchars($meta['title']);
            $desc = htmlspecialchars($meta['description']);
            $date_str = $meta['date']->format("j F Y");

            echo <<<HTML
              <li class="listing" id="{$id}">
                <div>
                  <a class="sun-flower-text" href="{$url}">{$title}</a>
                  <i style="color: #999;">{$desc} <span style="color: #666;">({$date_str})</span></i>
                </div>
              </li>
            HTML;
          }
        ?>
      </ul>
    </div>
  </body>
</html>
