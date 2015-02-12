//========================
//CUSTOM SCROLLBAR
//========================
$("html").niceScroll({
	mousescrollstep: 70,
	cursorcolor: "#000000",
	cursorwidth: "10px",
	cursorborderradius: "10px",
	cursorborder: "none",
	cursoropacitymin: 100
});

//========================
//SMOOTHSCROLL
//========================
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//========================
//NAVBAR
//========================
(function ($) {
  $(document).ready(function(){

    // hide .navbar first
    $(".navbar").hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 40) {
                $('.navbar')
                .removeClass('animated fadeOutUp')
                .addClass('animated fadeInDown')
                .fadeIn();

            } else {
                $('.navbar')
                .removeClass('animated fadeInDown')
                .addClass('animated fadeOutUp')
                .fadeOut();
            }
        });
    });

});
  }(jQuery));

//========================
//icon hover effect
//========================
$('.entry_bt').hover(
       function(){ $(this).addClass('animated pulse') },
       function(){ $(this).removeClass('animated pulse') })