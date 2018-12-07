/* Shapes */
var svgContainer = document.getElementById('svg-container');
var strategyBottomLeft = document.getElementById('svg-container-strategy-bl');

/* $("#button").click(function() { */
lottie.loadAnimation({
  wrapper: svgContainer,
  animType: 'svg',
  loop: true,
  path: 'https://raw.githubusercontent.com/radcatdesign/sexyjungleleaves/master/RADCAT_Strategy_Leaves_TR_Red_v1.json'
});
/*});*/

lottie.loadAnimation({
  wrapper: strategyBottomLeft,
  animType: 'svg',
  loop: true,
  path: 'https://raw.githubusercontent.com/radcatdesign/sexyjungleleaves/master/RADCAT_Strategy_Leaves_BL_Red_v3.json'
});

lottie.setSpeed(1.5);