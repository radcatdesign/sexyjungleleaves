/* Shapes */
var svgContainer = document.getElementById('svgContainer');

/* $("#button").click(function() { */
lottie.loadAnimation({
  wrapper: svgContainer,
  animType: 'svg',
  loop: false,
  path: 'https://raw.githubusercontent.com/radcatdesign/sexyjungleleaves/master/data.json'
});
/*});*/

lottie.setSpeed(1.5);