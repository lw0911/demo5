// JavaScript Document

//右侧浮动导航栏变色代码
$(document).ready(function(e) {
  $(".totop").click(function(){
		 $('body,html').animate({scrollTop:0},1000);
		});
	$(".fix_div a").hover(function(){
		 $(this).css("background-position-x","72px");
		},function(){
		 $(this).css("background-position-x","0px");
		});
});

//内页菜单宽度控制代码
$(document).ready(function(e) {
    var len=$(".bodydiv_menu a").length;
		var awidth=1080/len-1;
		$(".bodydiv_menu a").css("width",awidth);
		
});

//分页居中

$(document).ready(function(e) {
  
	var fenye_w=55*parseFloat($(".fenye a").length)+74;
	var fenye_left=parseFloat($(".fenye").css("margin-left"));
	var l= fenye_left -(fenye_w / 2 );	
	$(".fenye").css({"margin-left":l,"width":fenye_w});
	
});




//移过来
//客服插件
$(document).ready(function(e) {

	
  var top=$(".fix_div").css("top");
	$(window).scroll(function () {
		 if ($(window).scrollTop()>=440) {
			 $(".fix_div").animate({"top":"100px"},200);
			 }
		 else{												 
					$(".fix_div").animate({"top":top},10);
			 }	 
	});
});
//首页重点案例部分
$(document).ready(function(e) {
	  var leng=$(".news_index_nei .news_index_sel").length;
	  var wi=leng*530;
		var wi2=wi-1040;
		var left=parseFloat($(".news_index_nei").css("margin-left"));
		$(".news_index_nei").css("width",wi);
	  
		$(".news_index_l").click(function(){
			   left=left+530;
				 if(left>0){
					   left=left-530;
					 }
				 move(left);
			});
		$(".news_index_r").click(function(){
			   left=left-530;
				 if(left<=-wi2){
					   left=left+530;
					 }
				 move(left);
			});
});
function move(left){
	   $(".news_index_nei").animate({"margin-left":left},500);
	   left=left;
	}
$(document).ready(function(e) {
  var lengths=$(".case_botsel_img").length;
	var width1=lengths*165;
	var width2=width1-831;
	var inde=0;
	var newinde=1;
	var preindex=lengths-1;
	var nexindex=1;
	var lefts=parseFloat($(".case_botsel").css("margin-left"));
	$(".case_botsel").css("width",width1);
	$(".case_box1_nei .case_topsel").css("display","none");
	$(".case_box1_nei .case_topsel").eq(inde).css({"margin-left":"0px","display":"block"});
	$(".case_box1_nei .case_topsel").eq(preindex).css({"margin-left":"-1040px","display":"block"});
	$(".case_box1_nei .case_topsel").eq(nexindex).css({"margin-left":"1040px","display":"block"});
	$(".case_botsel_img").eq(inde).addClass("on");
	
	$(".case_l").click(function(){
		     lefts=lefts+165;
				 if(lefts>0){
					    lefts=lefts-165;
					 }
				 move2(lefts);
		});
		
	$(".case_r").click(function(){
		     lefts=lefts-165;
				 if(lefts<=-width2){
					    lefts=lefts+165;
					 }
				 move2(lefts);
		});
		
	 $(".case_botsel_img").click(function(){
		     $(".case_botsel_img").removeClass("on");
		     $(this).addClass("on");
				 newinde=$(this).index();				 
				 if(inde>newinde){					 
				     onleft(inde,newinde);					 
					 }
				 else if(inde<newinde){
					   onright(inde,newinde);
					 }					 
				inde=newinde;							 
		 });
		 
		 $(".case_botsel_img,.case_topsel,.case_l,.case_r").hover(function(){
			    clearInterval(zidong);
			 },function(){
				  zidong=window.setInterval(function(){			     
							onzidong() 
					 },4000);			    
			 });	 

		function onzidong(){	
		      $(".case_botsel_img:eq("+newinde+")").addClass("on").siblings().removeClass("on");
					$(".case_box1_nei .case_topsel").css("display","none")
					$(".case_box1_nei .case_topsel:eq("+inde+")").css({"margin-left":"0px","display":"block"}).stop(true,false).animate({"margin-left":"-1040px","display":"block"},800);	
					$(".case_box1_nei .case_topsel:eq("+newinde+")").css({"margin-left":"1040px","display":"block"}).stop(true,false).animate({"margin-left":"0px","display":"block"},800);
					if(newinde>=6){												
						 lefts=lefts-165;
						 if(lefts<=-width2){
									lefts=lefts+165;
							 }
						 move2(lefts);						 
						}
					else if(newinde==0){												
						 lefts=0;
						 move2(lefts);						 
						}
					inde=inde+1;
					newinde=newinde+1;
					if(inde>=lengths-1){
						   newinde=0;
							 inde=-1;
						}				
			}
		 zidong=window.setInterval(function(){			     
					onzidong() 
			 },4000);

function onleft(inde,newinde){	
	    $(".case_box1_nei .case_topsel").css("display","none");			
			$(".case_box1_nei .case_topsel:eq("+inde+")").css({"margin-left":"0px","display":"block"}).stop(true,false).animate({"margin-left":"1040px","display":"block"},800);
			$(".case_box1_nei .case_topsel:eq("+newinde+")").css({"margin-left":"-1040px","display":"block"}).stop(true,false).animate({"margin-left":"0px","display":"block"},800);
	}

function onright(inde,newinde){
	    
	    $(".case_box1_nei .case_topsel").css("display","none");	
			$(".case_box1_nei .case_topsel:eq("+inde+")").css({"margin-left":"0px","display":"block"}).stop(true,false).animate({"margin-left":"-1040px","display":"block"},800);
			$(".case_box1_nei .case_topsel:eq("+newinde+")").css({"margin-left":"1040px","display":"block"}).stop(true,false).animate({"margin-left":"0px","display":"block"},800);
			inde=inde+1;
			newinde=newinde+1;
			if(inde==lengths-1){
					 newinde=0;
					 inde=-1;
				}						
}

function move2(lefts){
	  $(".case_botsel").stop(true,false).animate({"margin-left":lefts},500);
		
		lefts=lefts; 
	};
	});
