$(function(){ 

	$(document).ready(function() {
				$(".banner").skitter({/*常用配置*/
				theme:'default',
				animation:'random',/*36种效果，现为随机*/
				label:false,
				numbers_align:'center',
				progressbar:false,
				dots:true,/*为flase是数字，true是圆点*/
				interval: 1000
			});
		});
		$(".caseMore").hover(function(){$(this).textShadow({color:'#b2241a'})},function(){$(this).textShadow({color:'#fff'})});
		$(".pd1").imgLoader();
		$(".vip").imgLoader({smallImg:false});
		$(".detail").imgLoader({isText:true,alignCenter:false});
		checkIE6(1);
		$(".s_cate li").each(function(){
		var obj = $(this);
		var subMenu = obj.children("div");
		if(obj.is(".current")||obj.find(".current").length){
			subMenu.show();
		}
		obj.click(function(){
			if(subMenu.find("a").length){
				obj.siblings().children("div").slideUp();
				subMenu.slideDown();
				obj.addClass("current").siblings().removeClass("current")	
			}			
		})
		obj.children("a").click(function(){
			if(subMenu.find("a").length){
				obj.siblings().children("div").slideUp();
				subMenu.slideDown();
				obj.addClass("current").siblings().removeClass("current")	
				return false;
				
			}			
		})
	});
	$(".ky td").each(function(index, element) {
        $(this).find("div").hover(function(){
			$(this).find(".zz").stop().show()
			},function(){
			$(this).find(".zz").stop().hide()
			})
    });
});