var boxW = 0;

$(function(){
	boxW = $(".correlationDynamics").width();
	
	$(window).scroll(function(){
		var win_w = $(window).width();
		var topH = $(document).scrollTop();	//卷入的高度
		
		var screenW = 1140;
		var top = 130;
		if(win_w >= 992 && win_w < 1200){
			screenW = 940;
			top = 100;
		}
		
		//定位左侧的菜单的位置处理
		if(topH >= top){
			$(".correlationDynamics").css("position","fixed").css("top",top+"px").css("right",((win_w-screenW)/2 - 15)+"px").width(boxW);
		}else{
			$(".correlationDynamics").css("position","static");
		}
		
		if(win_w < 768){
			$(".correlationDynamics").css("position","static");
		}
	});
})