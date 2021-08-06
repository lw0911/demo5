$(function(){
	$('#owl-demo').owlCarousel({
		items: 1,
		singleItem: true,
		autoPlay: true
	});
});
$(function(){
	$(".edu-title ul li").hover(function(){
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
		$(".edu-tab >ul").removeClass("on");
		$(".edu-tab >ul").eq($(this).index()).addClass("on")
	})
})
$(function(){
	$(".industry-left .edu-title a").click(function(){
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
		$(".industry-liansuo >ul").removeClass("one");
		$(".industry-liansuo >ul").eq($(this).index()).addClass("one")
	})
})
$(function(){
	$(".download-title ul li").hover(function(){
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
		$(".download-tixi ul").removeClass("one");
		$(".download-tixi ul").eq($(this).index()).addClass("one")
	})
})





