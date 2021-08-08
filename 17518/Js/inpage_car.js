// JavaScript Document
$(function(){

	window.onload = function(){


/*汽车*/
		$(".qc_banner .w").css({"opacity":0})
			$(".qc_banner i").delay(500).animate({left:0},300,function(){
						$(".qc_banner .w").animate({top:0,opacity:1},1000)
						})
			

			
			
			$(".qc_cp .wenbox .list").eq(0).show().siblings().hide();
				$(".qc_cp .xlist:eq(0) i").animate({width:'100%'});
				function em(){
					$(".qc_cp .xlist em").animate({opacity:0.5}).animate({opacity:1})
					}
				var t = setInterval(em,50);
				
				$(".qc_cp .xlist").hover(function(){
					$(this).addClass("cur").siblings().removeClass("cur");
					$(this).find("i").animate({width:'100%'},100);
					$(this).siblings().find("i").animate({width:'0'},10);
					
					$(".qc_cp .wenbox .list").eq($(this).index()).fadeIn().siblings().hide();
					})
		function imgwen(dl){
			var dl=$("#"+dl+"");
			
			dl.find("dd").fadeIn(500);
			dl.find("h3").animate({left:0},1000);
			dl.find("span").animate({left:0},1000);
			for(var i=0; i<dl.find("p").length;i++){
				dl.find("p").eq(i).delay(100*i+100).animate({left:0},1000);
				}
			dl.find("img").delay(500).animate({left:0},1000);
			}		
		function imgwen2(dl){
			var dl=$("#"+dl+"");
			
			dl.find("dd").fadeIn(500);
			dl.find("h3").animate({left:0},1000);
			dl.find("span").animate({left:0},1000);
			for(var i=0; i<dl.find("p").length;i++){
				dl.find("p").eq(i).delay(100*i+100).animate({left:0},1000);
				}	
			}		


$(".qc_fa .list").eq(0).show().siblings().hide();
				$(".qc_fa .menu li").hover(function(){
					$(this).addClass("cur").siblings().removeClass("cur");
					$(".qc_fa .list").eq($(this).index()).fadeIn().siblings().hide();
					})
/*公用*/

		$(window).scroll(function(){
			var top = $(window).scrollTop();
			if(top>216){
				$(".qc_banner i").css({"position":"fixed","left":0,"top":0,"z-index":0})
				}else{
					$(".qc_banner i").css({"position":"absolute","left":0,"top":0,"z-index":0})
					}
			if(top>500){
				$(".qc_cp p").animate({top:0,opacity:1})
				$(".qc_cp h2").delay(300).animate({top:0,opacity:1})
				$(".qc_cp .car").delay(500).animate({right:95,top:38},1000,function(){
					$(".qc_cp .caryy").fadeIn(500,function(){
						$(".qc_cp .wenbox").fadeIn();
						$(".qc_cp .cphide").fadeIn();						
						})
					})
				
				}
			if(top>1000){
				$(".qc_ys em").animate({top:0,opacity:1},1000)
				$(".qc_ys h2").delay(300).animate({top:0,opacity:1},1000)
				
				imgwen("dl01")
				}
			if(top>1400){
				
				imgwen("dl02")
				
				}
			if(top>1800){
				imgwen2("dl03")
				$("#dl03 .img01").delay(500).animate({right:10},800,function(){
					$("#dl03 .img02").fadeIn(500)
					$("#dl03 .img03").fadeIn(500)
					});
				}
			if(top>2200){
				imgwen2("dl04")
				$("#dl04 .img04").delay(500).animate({left:50},800,function(){
					$("#dl04 .img05").animate({width:275,height:216},800)
					});
				}
			if(top>2600){
				imgwen2("dl05")
				$("#dl05 .img06").delay(500).animate({left:50},800,function(){
					$("#dl05 .img07").fadeIn(500)
					});
				}
			if(top>3000){
				$(".qc_fa span").animate({top:0,opacity:1})
				$(".qc_fa h2").delay(300).animate({top:0,opacity:1})
				for(var i = 0; i< $(".qc_fa .menu li").length; i++){
					$(".qc_fa .menu li").eq(i).delay(100+100*i).animate({left:0})
					}
				$(".qc_fa .rbox").delay(1000).fadeIn(1000)
				}
			
			})
		}
})
 


