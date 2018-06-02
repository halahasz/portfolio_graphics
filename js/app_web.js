$(document).ready(function() {

	$('.box').backgroundMove({
		movementStrength:'60'
	});


	$(".section:first-child img").mouseenter(function(e) {
		e.preventDefault();
		$(this).show('slow', function() {
			$(this).attr('src','img/dance_1.jpg');
		})
	});

	$(".section:first-child img").mouseleave(function(e) {
		e.preventDefault();
		$(this).show('slow', function() {
			$(this).attr('src','img/dance.jpg');
		})
	});


	$(".section:nth-child(2) img").mouseenter(function(e) {
		e.preventDefault();
		$(this).show('slow', function() {
			$(this).attr('src','img/music_1.jpg');
		})
	});

	$(".section:nth-child(2) img").mouseleave(function(e) {
		e.preventDefault();
		$(this).show('slow', function() {
			$(this).attr('src','img/music.jpg');
		})
	});


	$(".section:nth-child(4) img").mouseenter(function(e) {
		e.preventDefault();
		$(this).show('slow', function() {
			$(this).attr('src','img/pastaio_1.jpg');
		})
	});

	$(".section:nth-child(4) img").mouseleave(function(e) {
		e.preventDefault();
		$(this).show('slow', function() {
			$(this).attr('src','img/pastaio.jpg');
		})
	});


	$(".section:nth-child(3) img").mouseenter(function(e) {
		e.preventDefault();
		$(this).show('slow', function() {
			$(this).attr('src','img/old_1.jpg');
		})
	});

	$(".section:nth-child(3) img").mouseleave(function(e) {
		e.preventDefault();
		$(this).show('slow', function() {
			$(this).attr('src','img/old.jpg');
		})
	});


	$(".section:nth-child(5) img").mouseenter(function(e) {
		e.preventDefault();
		$(this).show('slow', function() {
			$(this).attr('src','img/hand_1.jpg');
		})
	});

	$(".section:nth-child(5) img").mouseleave(function(e) {
		e.preventDefault();
		$(this).show('slow', function() {
			$(this).attr('src','img/hand.jpg');
		})
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
			if (window.matchMedia('(orientation: portrait)').matches) {
				/* Changes when we reach the min-width  */
				$('#man').attr('src','img/manipulations_s.jpg');
				$('#seas').attr('src','img/seasons_s.jpg');
				$('#old').attr('src','img/old_s.jpg');
				$('#pastaio').attr('src','img/pastaio_s.jpg');
				$('#hand').attr('src','img/hand_s.jpg');
				$('.graph, .arch').hide();
				$('#right-arrow, #left-arrow').show();

			} else {
				/* Reset for CSS changes – Still need a better way to do this! */
				$('#man').attr('src','img/manipulations.jpg');
				$('#seas').attr('src','img/seasons.jpg');
				$('#old').attr('src','img/old.jpg');
				$('#pastaio').attr('src','img/pastaio.jpg');
				$('#hand').attr('src','img/hand.jpg');
				$('.graph, .arch').show();
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
		$('.web').attr('src','img/web.png');
	});

	$('.me').mouseleave(function() {
		$(this).attr('src','img/me.png');
		$('#logo').attr('src','img/=2.png');
		$('.web').attr('src','img/webdesign.png');
	});

	$('.web').mouseenter(function() {
		$(this).attr('src','img/webdesign.png');
		$('#logo').attr('src','img/=2.png');
	});

	$('.web').mouseleave(function() {
		$(this).attr('src','img/webdesign.png');
		$('#logo').attr('src','img/=2.png');
	});

	$('.graph').mouseenter(function() {
		$(this).attr('src','img/graph.png');
		$('#logo').attr('src','img/=3.png');
		$('.web').attr('src','img/web.png');
	});

	$('.graph').mouseleave(function() {
		$(this).attr('src','img/graphics.png');
		$('#logo').attr('src','img/=2.png');
		$('.web').attr('src','img/webdesign.png');
	});

	$('.arch').mouseenter(function() {
		$(this).attr('src','img/arch.png');
		$('#logo').attr('src','img/=4.png');
		$('.web').attr('src','img/web.png');
	});

	$('.arch').mouseleave(function() {
		$(this).attr('src','img/architecture.png');
		$('#logo').attr('src','img/=2.png');
		$('.web').attr('src','img/webdesign.png');
	});


});