<?php
  $URL = "https://alexflipnote.dev";
?>

<title><?php echo $title ?? "default title"; ?></title>

<meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
<meta name="theme-color" content="#14bae4"/>
<link rel="icon" type="image/x-icon" href="/static/images/favicon.ico"></link>
<meta property="og:image" content="/static/images/branding/avatar.png" />

<meta content="<?php echo $title ?? "Title"; ?>" property="og:title"/>
<meta content="<?php echo $description ?? "default description"; ?>" property="og:description"/>
<meta content="<?php echo $description ?? "default description"; ?>" name="description"/>

<meta name="revisit-after" content="2 days"/>
<meta name="keywords" content="<?php echo $keywords ?? "AlexFlipnote, Twitter, Developer, Github"; ?>"/>
<meta property="og:locale" content="en_GB"/>
<link rel="canonical" href="<?php echo "{$URL}{$path}"; ?>" />
<meta property="og:url" content="<?php echo "{$URL}{$path}"; ?>" />
<meta property="og:site_name" content="AlexFlipnote"/>
<meta name="twitter:card" content="summary"/>
<meta name="twitter:site" content="@AlexFlipnote"/>

<!-- CSS -->
<link href="/static/css/modesta.css" type="text/css" rel="stylesheet">
<link href="/static/css/markdown.css" type="text/css" rel="stylesheet">
<link href="/static/css/emojis.css" type="text/css" rel="stylesheet">
<link href="/static/css/custom.css" type="text/css" rel="stylesheet">

<!-- JavaScript -->
<script src="/static/js/main.js" type="text/javascript" charset="utf-8"></script>
