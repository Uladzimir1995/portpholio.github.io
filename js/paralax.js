$(window).scroll(function(){

  var st = $(this).scrollTop();

  $(".paralax_effect").css({
    "transform" : "translate(0%, -"+ st /20 +"%"
  });




  $(".back_paralax_first").css({
    "transform" : "translate(0%, -"+ st /50 +"%"
  });

  $(".back_paralax_second").css({
    "transform" : "translate(0%, -"+ st /20 +"%"
  });

  $(".back_paralax_thirt").css({
    "transform" : "translate(0%, -"+ st /10 +"%"
  });

  $(".back_paralax_fouth").css({
    "transform" : "translate(0%, -"+ st /3 +"%"
  });

  $(".back_paralax_fives").css({
    "transform" : "translate(0%, -"+ st /20 +"%"
  });

  $(".back_paralax_six").css({
    "transform" : "translate(0%, -"+ st /10 +"%"
  });

  $(".back_paralax_seventh").css({
    "transform" : "translate(0%, -"+ st /3 +"%"
  });





});
