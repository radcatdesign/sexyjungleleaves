/* Shapes */
var blueLeavesTR = document.getElementById('blue-leaves-tr');
var blueLeavesBL = document.getElementById('blue-leaves-bl');
var redLeavesTR = document.getElementById('red-leaves-tr');
var redLeavesBL = document.getElementById('red-leaves-bl');

/* $("#button").click(function() { */
lottie.loadAnimation({
  wrapper: blueLeavesTR,
  animType: 'svg',
  loop: true,
  path: 'https://raw.githubusercontent.com/radcatdesign/sexyjungleleaves/master/RADCAT_Strategy_Leaves_TR_Blue_v1.json'
});
/*});*/

lottie.loadAnimation({
  wrapper: blueLeavesBL,
  animType: 'svg',
  loop: true,
  path: 'https://raw.githubusercontent.com/radcatdesign/sexyjungleleaves/master/RADCAT_Strategy_Leaves_BL_Blue_v1.json'
});

lottie.loadAnimation({
  wrapper: redLeavesTR,
  animType: 'svg',
  loop: true,
  path: 'https://raw.githubusercontent.com/radcatdesign/sexyjungleleaves/master/RADCAT_Strategy_Leaves_TR_Red_v1.json'
});

lottie.loadAnimation({
  wrapper: redLeavesBL,
  animType: 'svg',
  loop: true,
  path: 'https://raw.githubusercontent.com/radcatdesign/sexyjungleleaves/master/RADCAT_Strategy_Leaves_BL_Red_v1.json'
});

lottie.setSpeed(1.5);