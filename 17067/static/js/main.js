$(function(){
	$('#owl').owlCarousel({
		items: 1,
		singleItem: true,
		autoPlay: true
	});
	$(".ser-list li").mouseenter(function(){
		var i = $(this).index();
		$(".ser-list li").removeClass("active");
		$(".ser-list li").eq(i).addClass("active");
		$(".ser-intr li").hide();
		$(".ser-intr li").eq(i).show();
	});
});
