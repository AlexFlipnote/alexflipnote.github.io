/* List os backgrounds, works with URL as well */
var images = [
  'images/background1.jpg',
  'images/background2.jpg',
  'images/background3.jpg',
  'images/background4.jpg',
  'images/background5.jpg',
  'images/background6.jpg',
  'images/background7.jpg'
]; var background = images[Math.floor(Math.random() * images.length)];

/* Changes background randomly */
$(document).ready(function() {
    $("body").css({
    	"background-image":"url("+background+")",
      "background-position":"fixed",
      "background-repeat":"no-repeat",
      "-webkit-background-size": "cover",
      "-moz-background-size": "cover",
      "-o-background-size": "cover",
      "background-size":"cover"
    });
});

/*
.css({
  'background-image' : 'url('+background+')', 'background-repeat' : 'no-repeat', 'background-size' : 'fill'
});
*/
