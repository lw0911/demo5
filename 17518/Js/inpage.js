// JavaScript Document
$(function(){

/*电器*/
	window.onload = function(){
		
		$(".dianqi_banner h3").delay(300).animate({top:0,opacity:1},1000)
		$(".dianqi_banner em").delay(400).animate({top:0,opacity:1},1000)
		$(".dianqi_banner ul").delay(600).animate({top:0,opacity:1},1000)
		
		function imgwen(dl){
			var dl=$("#"+dl+"");
			
			dl.find("dd").fadeIn(300);
			dl.find("h3").animate({left:0},1000);
			dl.find("span").animate({left:0},1000);
			for(var i=0; i<dl.find("p").length;i++){
				dl.find("p").eq(i).delay(100*i+100).animate({left:0},1000);
				}
			dl.find("img").delay(500).animate({left:0},1000);
}
mswMove("spbox","","","",false,"left",true,304,1000,3000,4)
mswMove("list1","","","",true,"left",true,409,1000,3000,3)
mswMove("list2","","","",true,"left",true,409,1000,3000,3)

$(".dianqi_sh .list").eq(1).hide();
				$(".dianqi_sh .menu li").hover(function(){
					$(".dianqi_sh .list").eq($(this).index()).fadeIn().siblings().hide();
					$(this).addClass("cur").siblings().removeClass("cur");
					})


$(".dianqi_sp .spbox li").hover(function(){
					//$(this).find('img').stop().animate({width:'110%',marginLeft:'-5%', marginTop:'-5%'},500);
					$(this).find('i').stop().animate({width:"100%"})
					},function(){
						//$(this).find('img').stop().animate({width:'100%',marginLeft:'0%', marginTop:'0%'},500);
						$(this).find('i').stop().animate({width:"0%"})
						})
						
$(".dianqi_sh .list li").hover(function(){
					$(this).find('img').stop().animate({width:'110%',height:'110%',marginLeft:'-5%', marginTop:'-5%'},500);
					},function(){
						$(this).find('img').stop().animate({width:'100%',height:'100%',marginLeft:'0%', marginTop:'0%'},500);
						})

/*汽车*/

			$(".qc_banner i").animate({left:0},300,function(){
				$(".qc_banner .w").animate({top:0,opacity:1},1000)
				})

			$(".qc_cp .wenbox .list").eq(0).show().siblings().hide();
				$(".qc_cp .xlist:eq(0) i").show();
				function em(){
					$(".qc_cp .xlist em").animate({opacity:0.5}).animate({opacity:1})
					}
				var t = setInterval(em,50);
				
				$(".qc_cp .xlist").hover(function(){
					$(this).addClass("cur").siblings().removeClass("cur");
					$(this).find("i").slideDown();
					$(this).siblings().find("i").hide();
					
					$(".qc_cp .wenbox .list").eq($(this).index()).fadeIn().siblings().hide();
					})


/*公用*/

		$(window).scroll(function(){
			var top = $(window).scrollTop();
			if(top>216){
				$(".dianqi_banner i").css({"position":"fixed","left":0,"top":0,"z-index":0})
				}else{
					$(".dianqi_banner i").css({"position":"absolute","left":0,"top":0,"z-index":0})
					}
			if(top>500){
				$(".dianqi_sp p").animate({top:0,opacity:1},1000)
				$(".dianqi_sp h3").delay(500).animate({top:0,opacity:1},1000,function(){
					$(".dianqi_sp .spbox").animate({opacity:1},1000);
					
					})
				}
			if(top>1000){
				$(".dianqi_sh .menu").animate({left:0},1000);
				$(".dianqi_sh .box").animate({left:0},1000);
				$(".dianqi_sh .more").animate({top:0},1000);
				}
			if(top>1800){
				$(".dianqi_ys em").animate({top:0,opacity:1},1000)
				$(".dianqi_ys h2").delay(200).animate({top:0,opacity:1},1000)
				
				imgwen("dl01")
				}
			if(top>2100){
				imgwen("dl02")
				}
			if(top>2400){
				imgwen("dl03")
				}
			if(top>2700){
				imgwen("dl04")
				}
			if(top>3000){
				imgwen("dl05")
				}
			
			})
		
		
		
		
		
		
		
		}
	
	





})



