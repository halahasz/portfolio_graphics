$(document).ready(function() {
	
	$('.box').backgroundMove({
		movementStrength:'60'
	});


	$('#pagepiling').pagepiling({
		menu: null,
		direction: 'horizontal',
		verticalCentered: true,
		sectionsColor: [],
		anchors: [],
		scrollingSpeed: 300,
		easing: 'swing',
		loopBottom: true,
		loopTop: true,
		css3: true,
		navigation: {
			'textColor': '#000',
			'bulletsColor': '#000',
			'position': 'right',
			'tooltips': ['section1', 'section2', 'section3', 'section4']
		},
		normalScrollElements: null,
		normalScrollElementTouchThreshold: 5,
		touchSensitivity: 5,
		keyboardScrolling: true,
		sectionSelector: '.section',
		animateAnchor: false,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
	});

	(function($) {

		/*
	* We need to turn it into a function.
	* To apply the changes both on document ready and when we resize the browser.
//	
	/**/
		function mediaSize() { 
			/* Set the matchMedia */
			if (window.matchMedia('(max-width: 568px)').matches) {
				/* Changes when we reach the min-width  */
				$('.man').attr('src','img/manipulations_s.jpg');
				$('.seas').attr('src','img/seasons_s.jpg');
				$('.old').attr('src','img/old_s.jpg');
				$('.pastaio').attr('src','img/pastaio_s.jpg');
				$('.hand').attr('src','img/hand_s.jpg');
				$('.web, .arch').hide();
				$('#right-arrow, #left-arrow').show();

			} else {
				/* Reset for CSS changes – Still need a better way to do this! */
				$('.man').attr('src','img/manipulations.jpg');
				$('.seas').attr('src','img/seasons.jpg');
				$('.old').attr('src','img/old.jpg');
				$('.pastaio').attr('src','img/pastaio.jpg');
				$('.hand').attr('src','img/hand.jpg');
				$('.web, .arch').show();
				$('#right-arrow, #left-arrow').hide();
			}
		};

		/* Call the function */
		mediaSize();
		/* Attach the function to the resize event listener */
		window.addEventListener('resize', mediaSize, false);  

	})(jQuery);

	$('.me').mouseenter(function() {
		$(this).attr('src','img/about me.png');
		$('#logo').attr('src','img/=1.png');
		$('.arch').attr('src','img/architecture.png');
	});

	$('.me').mouseleave(function() {
		$(this).attr('src','img/me.png');
		$('#logo').attr('src','img/=3.png');
		$('.arch').attr('src','img/arch.png');
	});

	$('.web').mouseenter(function() {
		$(this).attr('src','img/webdesign.png');
		$('#logo').attr('src','img/=2.png');
		$('.arch').attr('src','img/architecture.png');
	});

	$('.web').mouseleave(function() {
		$(this).attr('src','img/web.png');
		$('#logo').attr('src','img/=4.png');
		$('.arch').attr('src','img/arch.png');
	});

	$('.graph').mouseenter(function() {
		$(this).attr('src','img/graph.png');
		$('#logo').attr('src','img/=3.png');
		$('.arch').attr('src','img/architecture.png');
	});

	$('.graph').mouseleave(function() {
		$(this).attr('src','img/graphics.png');
		$('#logo').attr('src','img/=4.png');
		$('.arch').attr('src','img/arch.png');
	});

	$('.arch').mouseenter(function() {
		$(this).attr('src','img/arch.png');
		$('#logo').attr('src','img/=4.png');
		
	});

	$('.arch').mouseleave(function() {
		$(this).attr('src','img/arch.png');
		$('#logo').attr('src','img/=4.png');
		
	});

});