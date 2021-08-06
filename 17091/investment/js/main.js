//Preloder script
jQuery(window).load(function(){'use strict';
	$(".preloader").remove();
	$("a[data-rel]").prettyPhoto();

	// Slider Height
	//var slideHeight = $(window).height();
	var slideHeight = 609;
	$('#home-carousel .carousel-inner .item, #home-carousel .video-container').css('height',slideHeight);

	$(window).resize(function(){'use strict',
		$('#home-carousel .carousel-inner .item, #home-carousel .video-container').css('height',slideHeight);
	});

});


// User define function
function Scroll() {
	var contentTop      =   [];
	var contentBottom   =   [];
	var winTop      =   $(window).scrollTop();
	var rangeTop    =   200;
	var rangeBottom =   500;
	$('.navbar-collapse').find('.scroll > a').each(function(){
		contentTop.push( $( $(this).attr('href') ).offset().top);
		contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
	})
	$.each( contentTop, function(i){
		if ( winTop > contentTop[i] - rangeTop ){
			$('.navbar-collapse li.scroll')
			.removeClass('active')
			.eq(i).addClass('active');			
		}
	})

};

// Portfolio Single View