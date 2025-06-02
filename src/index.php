<!DOCTYPE html>
<html lang="en">
  <head>
    <?php
      $title = "AlexFlipnote";
      $description = "My personal homepage";
      $path = "/";

      require_once("./src/_templates/_head.php");
    ?>
  </head>
  <body class="dark-theme github">
    <div class="fullscreen">
      <div class="background" style="background-image: url('/static/images/background.jpg');"></div>
      <div class="center-object">
        <div class="container">
          <section class="me unset">
            <div class="avatar-container">
              <img
                draggable="false"
                class="image-title primary-bg"
                src="/static/images/branding/avatar.png"
                id="discord-avatar"
                alt="AlexFlipnote avatar"
              >
            </div>
            <div class="unset">
              <h1 class="title dropshadow-small">AlexFlipnote</h1>
              <p class="undertitle runescape dropshadow-medium" id="discord-status-loading">
                I do develop stuff, yes yes
              </p>
            </div>
          </section>
          <div class="buttons">
            <a href="https://discord.gg/DpxkY3x" class="btn discord-dropshadow white-text animation hover" target="_blank">Discord</a>
            <a href="mailto:root@alexflipnote.dev" class="btn emerald-dropshadow black-text animation hover">Email</a>
            <a href="https://github.com/AlexFlipnote" class="btn github-dropshadow white-text animation hover" target="_blank">GitHub</a>
            <a href="/branding" class="btn sun-flower-dropshadow black-text animation hover" target="_blank">Branding</a>
            <a href="/playground" class="btn orange-dropshadow black-text animation hover" target="_blank">Playground</a>
            <a href="/docs" class="btn peter-river-dropshadow white-text animation hover" target="_blank">Docs</a>
          </div>
        </div>
      </div>

      <a href="#information">
        <div id="arrow" class="arrow bounce">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 481.32 291.98" class="white-fill">
            <path d="M466.5,15.5L466,15c-19.8-19.8-52-19.8-71.9,0L240.8,168.3L87.2,14.8C67.4-5,35.2-5,15.4,14.8l-0.5,0.5 C-5,35.2-5,67.4,14.8,87.2l186.6,186.6c0.9,1,1.8,2,2.7,3v0c3.8,3.8,8.1,6.9,12.7,9.3c17,9,38.1,7.7,53.9-3.9 c2.2-1.6,4.4-3.4,6.4-5.4L466.5,87.4C486.4,67.6,486.4,35.4,466.5,15.5z"/>
          </svg>
        </div>
      </a>
    </div>

    <section class="container" id="information">

      <div class="box-container">
        <h1 class="title emerald-text"><i class="emoji alexcoffee"></i> Information:</h1>
        <div class="info-container"><p>
          Hello, my name is <span class="emerald-text">Alex</span>, but known as <span class="emerald-text">AlexFlipnote</span> over the internet.
          I'm a Developer that spends time coding scripts and building websites.
          Been coding for around <span class="sun-flower-text" id="years-of-coding">[INSERT TIME HERE, YES]</span> now and still on the road to learn more.
          Current coding languages I know fair enough are <span class="emerald-text">HTML, CSS, SCSS, JavaScript, Python</span> and <span class="emerald-text">SQL</span>.
        </p></div>
      </div>

      <div class="box-container">
        <h1 class="title emerald-text"><i class="emoji aalexnoted"></i> Projects:</h1>
        <div class="info-container">

          <div class="flex-grid">
            <?php
              require_once("./src/_templates/_projects.php");
              foreach ($projects as $project) {
                echo <<<HTML
                  <div class="pinned-container">
                    <div class="box-content">
                      <p class="bold">
                        <svg height="16" viewBox="0 0 16 16" version="1.1" width="16">
                          <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                        </svg>
                        <a href="{$project["url"]}" target="_blank">
                          {$project["name"]}
                        </a>
                      </p>
                      <p>{$project["desc"]}</p>
                    </div>
                  </div>
                HTML;
              }
            ?>
          </div>

        </div>
      </div>

    </section>
    <?php require_once("./src/_templates/_footer.php"); ?>
  </body>
</html>
