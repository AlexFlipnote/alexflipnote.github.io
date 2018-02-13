---
layout: docs
type: docs
permalink: "/docs/install_scss"

title: Installing SCSS
author: AlexFlipnote
---


# 1. Install Ruby
You can download ruby from [https://rubyinstaller.org/](https://rubyinstaller.org/)

If you're on a different environment than Windows, you can check out [https://www.ruby-lang.org/](https://www.ruby-lang.org/en/documentation/installation/)
for more information on installing to Linux

# 2. Install SASS
When you've downloaded and installed **Ruby**, you can then start to install **SASS** to use on your CMD/Terminal
The command to install it is the following: `(sudo) gem install sass`

# 3. Watch the files in SASS with CSS
To compile your SCSS code into CSS, you must use a command line to make the client see the folders of your target.

The command to do such is `sass --watch assets/scss:assets/css`

**Here's an example:**

![ExampleGif](https://i.alexflipnote.xyz/3e93fe.gif)

# 3.5 Generated files
If you're going to post these files on GitHub, I would recommend having a gitignore on the cache files

`File: .gitignore`
```
.sass-cache/
*.css.map
```

# (Optional) 4. Become linter friendly
If you want to be linter friendly, you could always install a Ruby package that you can use for such.

To install, use this command: `(sudo) gem install scss_lint`

After that, you should just use the command **scss-lint** in CMD/Terminal and everything will be done easily for you.
