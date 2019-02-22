$(document).ready(function(){


var c, currentScrollTop = 0,
       navbar = $('nav');

   $(window).scroll(function () {
      var a = $(window).scrollTop();
      var b = navbar.height();
     
      currentScrollTop = a;
     
      if (c < currentScrollTop && a > b + b) {
        navbar.addClass("scrollUp");
      } else if (c > currentScrollTop && !(a <= b)) {
        navbar.removeClass("scrollUp");
      }
      c = currentScrollTop;
  });


  $('.mobile-menu-icon').click(function(){

$('#mobile-menu-list').toggleClass('d-none d-inline-block');

  });




 $('.thumbnail').mouseover(function(){
  $( this ).addClass( 'hover' );
   $( this ).css('opacity','0.1'); 
  $( this ).css('transition','opacity 0.5s linear'); 
});


 $('.thumbnail').mouseleave(function(){
  $( this ).removeClass( 'hover' );
    $( this ).css('opacity','1'); 
});



$('.whoareya').mouseover(function(){
  $('.title_whoareya').fadeIn();
});

$('.whoareya').mouseleave(function(){
  $('.title_whoareya').fadeOut();
});

$('.sally').mouseover(function(){
  $('.title_sally').fadeIn();
});

$('.sally').mouseleave(function(){
  $('.title_sally').fadeOut();
});


$('.csn').mouseover(function(){
  $('.title_csn').fadeIn();
});

$('.csn').mouseleave(function(){
  $('.title_csn').fadeOut();
});

$('.pause').mouseover(function(){
  $('.title_pause').fadeIn();
});

$('.pause').mouseleave(function(){
  $('.title_pause').fadeOut();
});

$('.nihow').mouseover(function(){
  $('.title_nihow').fadeIn();
});

$('.nihow').mouseleave(function(){
  $('.title_nihow').fadeOut();
});

$('.sketchbook').mouseover(function(){
  $('.title_sketchbook').fadeIn();
});

$('.sketchbook').mouseleave(function(){
  $('.title_sketchbook').fadeOut();
});

$('.dh').mouseover(function(){
  $('.title_dh').fadeIn();
});

$('.dh').mouseleave(function(){
  $('.title_dh').fadeOut();
});

$('.hotpot').mouseover(function(){
  $('.title_hotpot').fadeIn();
});

$('.hotpot').mouseleave(function(){
  $('.title_hotpot').fadeOut();
});


$('.animation').mouseover(function(){
  $('.title_animation').fadeIn();
});

$('.animation').mouseleave(function(){
  $('.title_animation').fadeOut();
});




});