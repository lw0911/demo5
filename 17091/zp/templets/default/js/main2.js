$(function($) {'use strict',


	// Feature Tab Content
	$('.features-nav li').on('click',function(){'use strict',
		$('.features-nav li').removeClass('active');
		$(this).addClass('active');
	});
	$('#community-carousel ul.carousel-indicators li').on('click',function(){'use strict',
		$('.features-nav li').removeClass('active');
		var lists = $('.features-nav li');
		$(lists[$(this).index()]).addClass('active');
	});


	// Coummunity Carousel
	$('#community-carousel').carousel({
		interval: false
	});

	// portfolio filter
$(document).ready(function(){'use strict',
		$portfolio_selectors = $('.portfolio-filter >li>a');
		if($portfolio_selectors!='undefined'){
			$portfolio = $('.portfolio-items');
			$portfolio.isotope({
				itemSelector : '.col-sm-3',
				layoutMode : 'fitRows'
			});
			
			$portfolio_selectors.on('click', function(){
				$portfolio_selectors.removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				$portfolio.isotope({ filter: selector });
				return false;
			});
		}
	});


	// Contact form validation
	var form = $('.contact-form');
	form.submit(function () {'use strict',
		$this = $(this);
		$.post($(this).attr('action'), function(data) {
			$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
		},'json');
		return false;
	});


	// Navigation Scroll
	$(window).scroll(function(event) {
		Scroll();
	});

	$('.navbar-collapse ul li a').click(function() {  
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 79}, 1000);
		return false;
	});

});

//Preloder script
$(document).ready(function(){'use strict';
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

$('#portfolio').on('click','.folio-read-more',function(event){
	event.preventDefault();

	var link = $(this).data('single_url');
	var full_url = '#portfolio-single-wrap',
		parts = full_url.split("#"),
		trgt = parts[1],
		target_top = $("#"+trgt).offset().top;

	$('html, body').animate({scrollTop:target_top}, 1200);
	$('#portfolio-single').slideUp(1000, function(){
		$(this).load(link,function(){
			$(this).slideDown(1000);
		});
	});
});

// Close Portfolio Single View
$('#portfolio-single-wrap').on('click','.close-folio-item',function(){
	var full_url = '#portfolio',
		parts = full_url.split("#"),
		trgt = parts[1],
		target_offset = $("#"+trgt).offset(),
		target_top = target_offset.top;

	$('html, body').animate({scrollTop:target_top}, 1400);

	$("#portfolio-single").slideUp(1000);
});


