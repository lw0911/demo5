function chuantong(jiangeshijian,yundongshijian){
	var nowimg = 0;	

	$("#banner .tuul li").eq(0).clone().appendTo("#banner .tuul");

	var A = $(window).width();

	$("#banner .tuul li").css("width",A);
	$("#banner").css("height", A / 1200 * 480 );
	$(window).resize(
		function(){
			A = $(window).width();	
			$("#banner .tuul li").css("width",A);
			$("#banner").css("height", A / 1200 * 480 );
			huan();
		}
	);

	// ******定时器********
	var timer = setInterval(youanniuyewu,jiangeshijian);

	$("#banner").mouseenter(
		function(){
			clearInterval(timer);
		}
	);

	$("#banner").mouseleave(
		function(){
			clearInterval(timer);
			timer = setInterval(youanniuyewu,jiangeshijian);
		}
	);
	//******定时器*******

	//右按钮的监听：
	$("#banner .anniu .rightbut").click(youanniuyewu);
	function youanniuyewu(){
		if(!$(".tuul").is(":animated")){
			if(nowimg < $("#banner .tuul li").length - 2){
				nowimg = nowimg + 1;
				huan();	
			}else{
				nowimg = 0;
				
				$("#banner .tuul").animate(
					{
						"left":-A * ($("#banner .tuul li").length - 1)
					}
					,yundongshijian
					,function(){
						$("#banner .tuul").css("left",0);
					}
				);
				
				$("#banner .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
			}
		}
	}
	//左按钮的监听：
	$("#banner .anniu .leftbut").click(
		function(){
			if(!$(".tuul").is(":animated")){
				if(nowimg > 0){
					nowimg = nowimg - 1;
					huan();	
				}else{
					nowimg = $("#banner .tuul li").length - 2;
		
					$("#banner .tuul").css("left",-A*($("#banner .tuul li").length - 1));
					$("#banner .tuul").animate(
						{
							"left":-A * ($("#banner .tuul li").length - 2)
						}
					,yundongshijian);
					
					$("#banner .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
				}
			}	
		}
	);

	$("#banner .dianul li").click(
		function(){
			if(!$(".tuul").is(":animated")){
				nowimg = $(this).index();
				huan();
			}
		}
	);

	function huan(){
		
		$("#banner .tuul").animate(
			{
				"left":nowimg * -A
			}
		,yundongshijian);

		$("#banner .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
	}
}