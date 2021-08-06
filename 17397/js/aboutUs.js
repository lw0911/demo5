var boxW = 0;
var aboutUsT = 0;
var developmentHistoryT = 0;
var callMeT = 0;
var CLICK_A_TAG = false;

$(function(){
	boxW = $(".leftMenu").width();
	var	one2 = $(".rightContent").children().eq(0).height()+126+30;
	var	one3 = $(".rightContent").children().eq(1).height()+one2+30;
	var	one4 = $(".rightContent").children().eq(2).height()+one3+30;
	var	one5 = $(".rightContent").children().eq(3).height()+one4+30;
	
	$(window).scroll(function(){
		var win_w = $(window).width();
		var topH = $(document).scrollTop();	//卷入的高度
		
//		console.log(topH);
		
		//定位左侧的菜单的位置处理
		if(topH >= 120){
			$(".leftMenu").css("position","fixed").css("top","120px").css("left",(win_w-1140)/2+"px").width(boxW);
		}else{
			$(".leftMenu").css("position","static");
		}
		
		//判断是否点击了左侧菜单，如果点击了左侧菜单进行一个判断
		if(CLICK_A_TAG && topH < one2){
			CLICK_A_TAG = false;
			return;
		}
		if(topH >= 0){
			$(".leftMenu").children().removeClass("active");
			$(".leftMenu").children().eq(0).addClass("active");
		}
		if(topH >= one2){
			$(".leftMenu").children().removeClass("active");
			$(".leftMenu").children().eq(1).addClass("active");
		}
		if(topH >= one3){
			$(".leftMenu").children().removeClass("active");
			$(".leftMenu").children().eq(2).addClass("active");
		}
		if(topH >= one4){
			$(".leftMenu").children().removeClass("active");
			$(".leftMenu").children().eq(3).addClass("active");
		}
		if(topH >= one5){
			$(".leftMenu").children().removeClass("active");
			$(".leftMenu").children().eq(4).addClass("active");
		}
	});
	
	$(".leftMenu a").click(function(){
		CLICK_A_TAG = true;
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
	});
	
	//如果内容小于330则不显示展开按钮
	var nums = $(".content").find(".one").length;
	for(var i = 0; i < nums; i++){
		if($(".content").find(".one").eq(i).find(".dis").height() < 330){
			$(".content").find(".one").eq(i).find(".dis").siblings(".openMore").hide();
			if(i != (nums-1)){
				$(".content").find(".one").eq(i).css("padding-bottom","32px");
			}else{
				$(".content").find(".one").eq(i).css("padding-bottom","0px");
			}
		}
	}
})

//内容展开功能
function openMore(_this){
	if($(_this).text() == "展开所有内容"){
		$(_this).siblings(".dis").css("max-height","none");
		$(_this).html('收起<span class="glyphicon glyphicon-menu-up"></span>');
	}else{
		$(_this).siblings(".dis").css("max-height","346px");
		$(_this).html('展开所有内容<span class="glyphicon glyphicon-menu-down"></span>');
	}
}
