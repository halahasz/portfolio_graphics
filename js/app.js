$(document).ready(function() {
	
	$('.sky').delay(3500).fadeOut(2000);
	$('#hide').delay(3500).fadeIn(2000);
	(function($) {
	
	/*
	* We need to turn it into a function.
	* To apply the changes both on document ready and when we resize the browser.
//	*/
	/**/
	function mediaSize() { 
		/* Set the matchMedia */
		if (window.matchMedia('(orientation: portrait)').matches) {
		/* Changes when we reach the min-width  */
			$('#first').attr('src','img/web.jpg');
			$('#second').attr('src','img/graphics.jpg');
			$('#third').attr('src','img/architecture.jpg');
			$('.icons').hide();
			
		} else {
		/* Reset for CSS changes – Still need a better way to do this! */
			$('#first').attr('src','img/1.jpg');
			$('#second').attr('src','img/2.jpg');
			$('#third').attr('src','img/3.jpg');
		}
	};
	
	/* Call the function */
  mediaSize();
  /* Attach the function to the resize event listener */
	window.addEventListener('resize', mediaSize, false);  
	
})(jQuery);
	
/*	
		$(window).resize(function () {
		var height = $(window).height();
		var width = $(window).width();
		console.log('width is : ' + width);
		console.log('height is : ' + height);

		if (height > width) {
			$('#first').attr('src','img/web.jpg');
			$('#second').attr('src','img/graphics.jpg');
			$('#third').attr('src','img/architecture.jpg');
			$('.icons').hide();
		}
	
		if (height < width) {
			$('#first').attr('src','img/1.jpg');
			$('#first').attr('src','img/2.jpg');
			$('#first').attr('src','img/3.jpg');
		}
	});*/
	
	$('.me').mouseenter(function() {
		$(this).attr('src','img/about me.png');
		$('#logo').attr('src','img/=1.png');
	});

	$('.me').mouseleave(function() {
		$(this).attr('src','img/me.png');
		$('#logo').attr('src','img/=.png')
	});
	
	$('.web').mouseenter(function() {
		$(this).attr('src','img/webdesign.png');
		$('#logo').attr('src','img/=2.png');
	});

	$('.web').mouseleave(function() {
		$(this).attr('src','img/web.png');
		$('#logo').attr('src','img/=.png');
	});
	
	$('#first').mouseenter(function() {
		$('#logo').attr('src','img/=2.png');
		$('.web').attr('src','img/webdesign.png');
	});

	$('#first').mouseleave(function() {
		$('#logo').attr('src','img/=.png');
		$('.web').attr('src','img/web.png');
	});
	
	$('.graph').mouseenter(function() {
		$(this).attr('src','img/graph.png');
		$('#logo').attr('src','img/=3.png');
	});

	$('.graph').mouseleave(function() {
		$(this).attr('src','img/graphics.png');
		$('#logo').attr('src','img/=.png')
	});
	
	$('#second').mouseenter(function() {
		$('#logo').attr('src','img/=3.png');
		$('.graph').attr('src','img/graph.png');
	});

	$('#second').mouseleave(function() {
		$('#logo').attr('src','img/=.png');
		$('.graph').attr('src','img/graphics.png');
	});
	
	$('.arch').mouseenter(function() {
		$(this).attr('src','img/arch.png');
		$('#logo').attr('src','img/=4.png');
	});

	$('.arch').mouseleave(function() {
		$(this).attr('src','img/architecture.png');
		$('#logo').attr('src','img/=.png')
	});
	
	$('#third').mouseenter(function() {
		$('#logo').attr('src','img/=4.png');
		$('.arch').attr('src','img/arch.png');
		 $(this).animate({attr: 'src'}, "slow");
	});

	$('#third').mouseleave(function() {
		$('#logo').attr('src','img/=.png');
		$('.arch').attr('src','img/architecture.png');
	});
	
	


	/*if($('.content img').css('width') == "100%")
	{
		$('#first').attr('src','img/web.jpg');
	}*/

	/*if (window.matchMedia('(orientation: portrait)').matches)
	{
		$('#first').attr('src','img/web.jpg');
	}*/



});