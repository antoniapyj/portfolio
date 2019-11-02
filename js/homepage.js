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
if ( $( "#mobile-menu-list" ).is( ":hidden" ) ) {
    $( "#mobile-menu-list" ).slideDown( "fast" );
     $('.mobile-menu-icon').removeClass('fa-bar');
       $('.mobile-menu-icon').addClass('fa-times');

  } else {
    $( "#mobile-menu-list" ).slideUp("fast");
     $('.mobile-menu-icon').removeClass('fa-times');
       $('.mobile-menu-icon').addClass('fa-bar');
  }
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


$('.adiml').mouseover(function(){
  $('.title_adiml').fadeIn();
});

$('.adiml').mouseleave(function(){
  $('.title_adiml').fadeOut();
});

$('.pause').mouseover(function(){
  $('.title_pause').fadeIn();
});

$('.pause').mouseleave(function(){
  $('.title_pause').fadeOut();
});

$('.inktober').mouseover(function(){
  $('.title_inktober').fadeIn();
});

$('.inktober').mouseleave(function(){
  $('.title_inktober').fadeOut();
});

$('.sketchbook').mouseover(function(){
  $('.title_sketchbook').fadeIn();
});

$('.sketchbook').mouseleave(function(){
  $('.title_sketchbook').fadeOut();
});

$('.lj').mouseover(function(){
  $('.title_lj').fadeIn();
});

$('.lj').mouseleave(function(){
  $('.title_lj').fadeOut();
});

$('.vitaminsea').mouseover(function(){
  $('.title_vitaminsea').fadeIn();
});

$('.vitaminsea').mouseleave(function(){
  $('.title_vitaminsea').fadeOut();
});


$('.animation').mouseover(function(){
  $('.title_animation').fadeIn();
});

$('.animation').mouseleave(function(){
  $('.title_animation').fadeOut();
});




});