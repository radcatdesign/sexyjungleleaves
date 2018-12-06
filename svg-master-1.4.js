/* Shapes */
var svgContainer = document.getElementById('svg-container');

/* $("#button").click(function() { */
lottie.loadAnimation({
  wrapper: svgContainer,
  animType: 'svg',
  loop: true,
  path: 'https://raw.githubusercontent.com/radcatdesign/sexyjungleleaves/master/RADCAT_Ramses_Texture-Leaves_2.json'
});
/*});*/

lottie.setSpeed(1.5);