# 0. Installing SCSS {#0-installing-scss}
If you haven't already, you need to install SCSS to take usage of this language.
You can visit [here](https://sass-lang.com/) if you're unsure on how to install it.

# 1. Writing in SCSS {#1-writing-in-scss}
Writing in SCSS is as simple as writing things in CSS, however there are some new differences when it comes to this language. You will notice that SCSS has some more syntaxes included in the language, some of these are as follow:
```scss
/// Variable ///
$primary-colour: #00FF00;


/// Functions ///
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  -ms-border-radius: $radius;
  border-radius: $radius;
}

.box { @include border-radius(10px); }


/// Nesting ///
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}

.box-container {
  display: flex;

  .text { color: #000; }
  &.center { text-align: center; }
}
```

# 2.1 Variables {#2-1-variables}
If you're familiar to coding in other languages like Python, Java, PHP, C# and so on, you will know what variable means.
In a short term, it's a method of defining something inside a document to one specific value, instead of needing to rewrite all of the values you want to change at once.

Here's an example:
```scss
$primary-colour: #00FF00;

.container {
  color: $primary-colour;

  .images {
    background: rgba($primary-colour, 0.5);
    display: block;
    margin: auto 0;
  }
}
```

By using the variable on places that can handle HEX, you will then only need to change one value to change every other.


# 2.2 Nesting {#2-2-nesting}
Nesting might seem complicated as seen from the example above, however it's more simple than you think.
There are multiple ways to do this, and all of them have different benefits.

Here's an example on how a nested SCSS will render in CSS:
```scss
// SCSS
.container {
  background: #000;
  display: block;

  .text {
    color: #fff;
    font-size: 1em;
    padding-left: 3em;
  }

  &:after { content: ' '; }
}
```
```css
/* CSS */
.container {
  background: #000;
  display: block; }

.container .text {
  color: #fff;
  font-size: 1em;
  padding-left: 3em; }

.container:after {
  content: ' '; }
```
As seen from the example, you can see that it does the most annoying part for you in CSS, having class layers.
The `&` symbol helps you to have classes and targets combined like this:
```scss
// SCSS
.test {
  content: '';
  .memes { content: ''; }
  &.world { content: ''; }
  &:after { content: ''; }
}
```
```css
/* CSS */
.test {
  content: ''; }

.test .memes {
  content: ''; }

.test.world {
  content: ''; }

.test:after {
  content: ''; }
```


# 2.3 Functions {#2-3-functions}
If you are coding in different languages, then the word function should sound very familiar for you.
In a short term, SCSS functions help you make things that would possibly be long or complicated, into one simple placement.
A great example for this usage is with the different CSS prefixes like webkit, mozilla and so on. With functions, you could make a simple one like this:
```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  -ms-border-radius: $radius;
  border-radius: $radius;
}

.box { @include border-radius(10px); }
```
Remember that to use these functions, you **always** have to use `@include` to call it.
If you have the function in a different file, you can `@import` it and get it into your working .scss file.


# 2.4 Imports {#2-4-imports}
In SCSS, it's possible to import other SCSS files like one that only has functions inside it, variables or simply normal SCSS.
This is practically useful when you're doing large SCSS projects and need to have a clean way to sort everything in palce.
If you want to have a SCSS file useable within the `@import` you **must** always include a `_` at the name of the file, else it will
think that it's just a normal file and won't bother importing it.

An example of how imports could be useful:

![Image](/posts_assets/{{ page.assetsfolder }}/fc64a3.png)

To give a short example on how import works from the example image, the file named **modesta.scss** acts like the main caller for all the components, inside this file, there are only imports from the other files like this:
```scss
@import 'components/global';
@import 'components/keyframes';
@import 'components/arrow';
@import 'components/buttons';
@import 'components/fullscreen';
@import 'components/grid';
@import 'components/markdown';
@import 'components/modal';
@import 'components/navbar';
@import 'components/objects';
@import 'components/responsive';
```
This will basically get all content from the files it will get, it's all fine if it has normal SCSS inside it and not only functions/variables.
Using this method can make it easier to sort your SCSS (CSS) in an easy way to read and find, making you use less time on trying to find that one class inside a large, 2000+ lines of code.


# 3. Summary {#3-summary}
By now, you might think that SCSS still look a bit complicated, but consider that it does really save you time and sorting, as well as having a nice method of writing CSS in a nested platform. Just keep in mind that websites **can not** read a .scss file at all, that is why you install the [SCSS](https://sass-lang.com/) to render the SCSS into CSS, aka. a useable language for websites.

You won't escape the .css files, however you are at least making it easier to write them with SCSS.

If you want a live example of how SCSS works, you can visit my ModestaCSS work to see my structure here:<br>
[https://github.com/AlexFlipnote/Modesta](https://github.com/AlexFlipnote/Modesta)

Good luck with SCSS, hopefully it was useful!
