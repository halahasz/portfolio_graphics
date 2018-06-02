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


	$('.me').mouseenter(function() {
		$(this).attr('src','img/about me.png');
		$('#logo').attr('src','img/=1.png');
	});

	$('.me').mouseleave(function() {
		$(this).attr('src','img/about me.png');
		$('#logo').attr('src','img/=1.png')
	});

	$('.web').mouseenter(function() {
		$(this).attr('src','img/webdesign.png');
		$('#logo').attr('src','img/=2.png');
		$('.me').attr('src','img/me.png');
	});

	$('.web').mouseleave(function() {
		$(this).attr('src','img/web.png');
		$('#logo').attr('src','img/=1.png');
		$('.me').attr('src','img/about me.png');
	});

	$('.graph').mouseenter(function() {
		$(this).attr('src','img/graph.png');
		$('#logo').attr('src','img/=3.png');
		$('.me').attr('src','img/me.png');
	});

	$('.graph').mouseleave(function() {
		$(this).attr('src','img/graphics.png');
		$('#logo').attr('src','img/=1.png');
		$('.me').attr('src','img/about me.png');
	});

	$('.arch').mouseenter(function() {
		$(this).attr('src','img/arch.png');
		$('#logo').attr('src','img/=4.png');
		$('.me').attr('src','img/me.png');
	});

	$('.arch').mouseleave(function() {
		$(this).attr('src','img/architecture.png');
		$('#logo').attr('src','img/=1.png');
		$('.me').attr('src','img/about me.png');
	});

});