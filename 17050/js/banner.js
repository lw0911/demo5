
//banner
$(function(){
	var timer,timer01;
	var n=0;
	$(".banner ul").width(1920*($(".banner ul img").length));
	function run(){
		$(".banner ul").animate({marginLeft:-1920},1000,
			function(){
			$(".banner ul li:last").after($(".banner ul li:first"))
			$(".banner ul").css("margin-left",0)
		})
	}	
	function run01(){
		if(n<$(".banner ul img").length-1){
		    n=n+1;
		    $(".banner ol li").eq(n).addClass("cur")
		    $(".banner ol li").eq(n).siblings().removeClass("cur")
		}else{
			    n=0;
			    $(".banner ol li").eq(n).addClass("cur")
		        $(".banner ol li").eq(n).siblings().removeClass("cur")
			}
		}
	$(".banner_left").click(
	   function(){
		   $(".banner ul").animate({marginLeft:-1920},1000,
		   function(){
			   $(".banner ul li:last").after($(".banner ul li:first"))
			   $(".banner ul").css({marginLeft:0})
			   })
		   if(n<$(".banner ul img").length-1){
			    n=n+1;
			    $(".banner ol li").eq(n).addClass("cur")
			    $(".banner ol li").eq(n).siblings().removeClass("cur")
			}else{
				    n=0;
				    $(".banner ol li").eq(n).addClass("cur")
			        $(".banner ol li").eq(n).siblings().removeClass("cur")
				}
		   }
	)
	$(".banner_right").click(
	   function(){
		  $(".banner ul li:first").before($(".banner ul li:last"))
		  $(".banner ul").css("margin-left",-1920)  
		  $(".banner ul").animate({marginLeft:0},1000) 
		  if(n==0){
			    n=$(".banner ul li").length-1;
			    $(".banner ol li").eq(n).addClass("cur")
			    $(".banner ol li").eq(n).siblings().removeClass("cur")
			}else{
				    n--;
				    $(".banner ol li").eq(n).addClass("cur")
			        $(".banner ol li").eq(n).siblings().removeClass("cur")
				}
	   }
	)
	$(".banner_right").hover(
		function(){
			clearInterval(timer)
			clearInterval(timer01)
		}
	).mouseleave(
		function(){
			timer=setInterval(run,5000)
			timer01=setInterval(run01,5000)
		}
	)
	$(".banner_left").hover(
		function(){
			clearInterval(timer)
			clearInterval(timer01)
		}
	).mouseleave(
		function(){
			timer=setInterval(run,5000)
			timer01=setInterval(run01,5000)
		}
	)
	timer01=setInterval(run01,5000)
	if ($(".banner ul img").length==1) {
		clearInterval(timer)
		$(".banner ol li").hide().first().show()
		$(".banner_btn").hide()
	}else{
		timer=setInterval(run,5000)
	}
})