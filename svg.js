/* Shapes */
var svgContainer = document.getElementById('svgContainer');

$("#button").click(function() {
lottie.loadAnimation({
  wrapper: svgContainer,
  animType: 'svg',
  loop: false,
  path: 'data.json'
});
});

lottie.setSpeed(1.5);