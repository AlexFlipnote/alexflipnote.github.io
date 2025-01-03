<html>
  <head>
    <title>404: Page not found</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
    <link href="/static/css/modesta.css" type="text/css" rel="stylesheet">

    <!-- Custom CSS -->
    <style>
      h1 { font-size: 3em; }
      .alexsleepy { height: 128px; width: 128px; }
      .cursor { animation: 1s blink step-end infinite; font-weight: bolder; }
      @keyframes blink {
        from, to { opacity: 0; }
        50% { opacity: 1; }
      }
    </style>
  </head>
  <body class="monospace dark-theme">
    <section class="fullscreen">
      <div class="background"></div>
      <div class="center-object center-text">
        <img src="/static/images/AlexSleepy.png" class="alexsleepy">
        <h1 class="bold no-margin">
          <span class="alizarin-text">404</span>
          <br>
          Page not found<span class="cursor">_</span>
        </h1>
        <div class="buttons">
          <a href="/" class="btn alizarin-bg white-text">Back to home</a>
          <a href="#" class="btn emerald-bg white-text" onclick="window.history.go(-1); return false;">Go one step back</a>
        </div>
      </div>
    </section>
  </body>
</html>
