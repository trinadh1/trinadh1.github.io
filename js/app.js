// $(document).ready(function(){
//   var bars = $('.number-pb').NumberProgressBar({min: 20, max: 100, current: 0, duration: 6000});
//   bars.reach(80, 1000);  //dest is the progress # at which you want to reach
// });

$(document).ready(function(){

  $('#all9').click(function(){
    $('.all').fadeIn(1500);
  });

  $('#psd9').click(function(){
    $('.all').hide();
    $('.psd').fadeIn(2000);
  });

  $('#calci9').click(function(){
    $('.all').hide();
    $('.calci').fadeIn(2000);
  });

  $('#puzzle9').click(function(){
    $('.all').hide();
    $('.puzzle').fadeIn(2000);
  });

  $('#jumbled9').click(function(){
    $('.all').hide();
    $('.jumbled').fadeIn(2000);
  });

  $('#psd1').click(function(){
    bootbox.alert('<img class="img-responsive" src="../images/psd.JPG">');
    
  });

});

// $(document).ready(portfolio);


// }


