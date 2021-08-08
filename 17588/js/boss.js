// JavaScript Document
//  banenr
$(function(){
	var mySwiper = new Swiper('#swiper-container',{
		pagination: '#bannerpage',
		loop:true,
		paginationClickable: true,
		calculateHeight:true,
		autoplay:3000,
		grabCursor:true,
		onInit:function(s){
			 navmainliw();
		}
	});
	$(window).resize(function(e) {
		mySwiper.reInit();
	});
});

