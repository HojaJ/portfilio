$(document).ready(function() {
		$('.popup-link').magnificPopup({
			type:'image',
			closeBtnInside: true,
			closeOnContentClick: true,
			tLoading: ''
		});


	var slideout = new Slideout({
        'panel': document.getElementById('main'),
        'menu': document.getElementById('menu'),
        'padding': 260,
        'tolerance': 50,
        'side': 'right'
      });

      document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
        slideout.toggle();
      });
      document.querySelector('.js--slideout-toggle').addEventListener('click', function() {
        slideout.toggle();
      });

      document.querySelector('.menu').addEventListener('click', function(eve) {
        if (eve.target.nodeName === 'A') { slideout.close(); }
      });


	
});	