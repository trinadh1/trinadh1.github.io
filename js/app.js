$(document).ready(function(){
  var bars = $('.number-pb').NumberProgressBar({min: 20, max: 100, current: 0, duration: 6000});
  bars.reach(80, 1000);  //dest is the progress # at which you want to reach
});
