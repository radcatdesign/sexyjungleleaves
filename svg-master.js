/* Shapes */
var svgContainer = document.getElementById('svg-container');

/* $("#button").click(function() { */
lottie.loadAnimation({
  wrapper: svgContainer,
  animType: 'svg',
  loop: true,
  path: 'https://cdn2.hubspot.net/hubfs/288519/rad_js/data.json'
});
/*});*/

lottie.setSpeed(1.5);