<div class="box-container highlight-flat no-border-radius" style="margin-bottom: 0;">
  <p class="container light-text no-margin no-padding topbar monospace" style="font-size: 16px;">
    <?php
      $display_path = str_replace('/docs', '', $path);
      if ($display_path !== "") {
        echo <<<HTML
          /<a href="/">home</a>/<a href="/docs">docs</a>{$display_path}.md
        HTML;
      } else {
        echo <<<HTML
          /<a href="/">home</a>/<a href="/docs">docs</a>/index.md
        HTML;
      }
    ?>
  </p>
</div>
