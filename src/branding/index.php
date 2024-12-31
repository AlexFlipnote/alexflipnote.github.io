<html>
  <head>
    <?php
      $title = "AlexFlipnote - Branding";
      $description = "Branding assets for AlexFlipnote";
      $path = "/branding";

      require_once("./src/_templates/_head.php");
    ?>
  </head>
  <body class="dark-theme github">
    <section class="container" id="information">
      <div class="box-container" id="branding">
        <h1 class="title emerald-text"><i class="emoji alexwholesome"></i> Branding:</h1>
        <p>
          Releasing my branding materials if you desire to use it.
          Only requirement I have for using this is to give proper
          information/credits about where the image comes from (alexflipnote.dev)
        </p>
        <br/>
        <p>
          <span class="sun-flower-text bold">Note:</span>
          All images listed under are made by <a href="https://twitter.com/ApollyonX69" target="_blank">ApollyonX69</a> and licenced under
          <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a>
        </p>

        <div class="flex-grid colour-margin-top">
          <div class="col-xs-8 secondary-bg">
            <p class="colour-info">
              Since my favourite is <span class="bold">Blue Raspberry</span>, it is therefore my main colour.
              Essentially, it is my branding colour and should be used as the main colour, yes yes.
          </p>
          </div>
          <div class="col-xs-4 col-no-padding">
            <div class="colour full white-text" style="background-color: #14bae4;">
              <span class="name">Blue Raspberry</span>
              <span class="hex">#14bae4</span>
            </div>
          </div>
        </div>

        <?php
          function branding_builder($name, $asset, $formats) {
            $download_links = join(
              "\n",
              array_map(
                function($g) use ($name) {
                  return "<a download=\"{$name}\" href=\"/static/images/branding/{$name}.{$g}\" target=\"_blank\">.{$g}</a>";
                },
                $formats
              )
            );

            return <<<HTML
              <img src="/static/images/branding/{$name}.{$formats[0]}" draggable="false">
              <span class="image-text">{$asset}</span>
              <div class="image-links">{$download_links}</div>
            HTML;
          }
        ?>

        <h2 class="subtitle nephritis-blue-text">Current avatar</h2>
        <p>The official avatar I use under the username <b>AlexFlipnote</b> online</p>
        <div class="flex-grid">
          <div class="col-xs-6 image-preview center-flex">
            <?php echo branding_builder("avatar_full", "Full body", ["png"]) ?>
          </div>
          <div class="col-xs-6 image-preview center-flex">
            <?php echo branding_builder("avatar", "1:1 avatar version", ["png"]) ?>
          </div>
        </div>

        <h2 class="subtitle nephritis-blue-text">Reference sheet</h2>
        <p>Here is the reference sheet for the character associated with the branding <b>AlexFlipnote</b></p>
        <div class="flex-grid">
          <img class="col-xs-12" src="/static/images/branding/sheet.png" draggable="false">
        </div>

        <h2 class="subtitle nephritis-blue-text">xelA (simplified version)</h2>
        <p>The avatar used for xelA, which is a simplified version of the official avatar</p>
        <?php
          $xela_seasons = [
            "xela_winter" => "Winter",
            "xela_spring" => "Spring",
            "xela_summer" => "Summer",
            "xela_autumn" => "Autumn",
            "xela_default" => "Default",
            "xela_halloween" => "Halloween",
            "xela_christmas" => "Christmas",
            "xela_birthday" => "Birthday",
            "xela_easter" => "Easter",
            "xela_newyear" => "New Year",
            "xela_pride" => "Pride",
            "xela_stpatricks" => "St. Patrick's",
            "xela_valentines" => "Valentine's"
          ];

          $chunked_seasons = array_chunk($xela_seasons, 3, true);
          foreach ($chunked_seasons as $season) {
            echo '<div class="flex-grid">';
            foreach ($season as $key => $value) {
              echo "<div class=\"col-xs image-preview center-flex\">";
              echo branding_builder($key, "xelA: {$value}", ["png"]);
              echo "</div>";
            }
            echo "</div>";
          }
        ?>
      </div>
    </section>

    <?php require_once("./src/_templates/_footer.php"); ?>
  </body>
</html>
