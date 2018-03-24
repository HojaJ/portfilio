$(document).ready(function(){

	$("#myNavbar").on('show.bs.collapse', function() {
	    $('a').click(function() {
	        $("#myNavbar").collapse('hide');
	    });
	});

  $('.navbar').affix({
    offset: {
      top: $('header').height()
    }
  });
  if( window.innerWidth > 768 ){
      $('a').not('[href="#Carousel"]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 70
            }, 1000); // The number here represents the speed of the scroll in milliseconds
            return false;
          }
        }
      });
    
  }else{
        $('a').not('[href="#Carousel"]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000); // The number here represents the speed of the scroll in milliseconds
            return false;
          }
        }
      });
  }
  // ===== Scroll to Top ==== 
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 250) {        // If page is scrolled more than 250px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });


  AOS.init({
    duration: 500,
  });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.collapse a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.collapse ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
