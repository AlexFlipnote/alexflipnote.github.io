const videos = [
  'TklM2-lSby4', 'iPuTYsiLhzA', 'a0uQnWAmf-k', 'NghF4a58YI0', 'boDSEeGt8hg', 'b8HO6hba9ZE',
  'y-wtAYBiO9g', 'MLPkKZS6q9k', 'EW86sEEPsTg', 'K5tVbVu9Mkg', 'JbepN4dKLbU', 'G7RgN9ijwE4', '1Bix44C1EzY',
  'Z8nD8N84Kds', 'SAxpAs1Iaec', 'tKNhPpUR0Pg', 'WvOYHpy4S8s', 'o2TO5atI4rU', 'TPYKwcAyb-o', '5IXQ6f6eMxQ', 'dvyZfa9x3UU'
];

const randomVideo = videos[Math.floor(Math.random()*videos.length)];
const pushVideo = `https://www.youtube.com/embed/${randomVideo}?playlist=${randomVideo}&autoplay=1&loop=1&hd=1`

window.addEventListener("load", function() {
  document.getElementById("videolist").src = pushVideo;
})
