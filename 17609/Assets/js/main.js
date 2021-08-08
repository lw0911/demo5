$(function(){
	//幻灯片
	var w_width=$(window).width();
	var w_banner=(1920-w_width)/2;
	$('.hot-event .event-item img').css('margin-left','-'+w_banner+'px');
	$('.banner_s img').css('margin-left','-'+w_banner+'px');
	
	var w1=(w_width-1200)/2;
	$('.hot-event .event-item .des').css('left',w1+'px');
	if(w1<0){
		$('.hot-event .event-item .des').css('left',0+'px');
	}
	//滑动门
	$(".tabBox .tabCont:first").css("display","block");
	$(".tabBox .tabNav li").click(function(){
		$(this).siblings("li").removeClass("now");
		$(this).addClass("now");
		$(this).parents(".tabBox").find(".tabCont").css("display","none");
		var i=$(this).index();
		$(this).parents(".tabBox").find(".tabCont:eq("+i+")").css("display","block");
	});
})