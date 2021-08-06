// JavaScript Document
$(function() {
 
     $(".sbanner img").hover(function(){ 
     	$(this).addClass("sbannerative");
     },function(){ 
     	$(this).removeClass("sbannerative").addClass("suoxiao");
     })

	$(".cont dl").hover(
  function () {
	 $(this).children().stop(false,true);
	 $(this).children(".serBoxOn").fadeIn();
     $(this).children(".pic1").animate({right: -205},400);
     $(this).children(".pic2").animate({left: 28},400);
     $(this).children(".txt1").animate({left: -261},400);
     $(this).children(".txt2").animate({right: 0},400);	 
	 }, 
  function () {
	 $(this).children().stop(false,true);
	 $(this).children(".serBoxOn").fadeOut( );
	 $(this).children(".pic1").animate({right:28},400);
     $(this).children(".pic2").animate({left: -205},400);
     $(this).children(".txt1").animate({left: 0},400);
     $(this).children(".txt2").animate({right: -261},400);	
  }
);
$(".floor_4 .top_menu li").hover(
function(){
	if(!$(this).children().is(":animated")){$(this).children().stop().animate({left:-128},400)} 
	},
	function(){
	 $(this).children().stop().animate({left:0},400) 
	}
)
    LeftXian();
    var newhtml, i,s;
    i = 0;
	s = 0;
    $(".nTab .cont ul").each(function() {
        var xs = parseInt($(this).children("li").css("margin-right").replace('px', ''));
		 
        $(this).width(($(this).children("li").width() + xs) * $(this).children("li").length) 
    });
    /*左移*/
	
function shangfan(){  
	var ulElement =  $(".nTab .cont ul");
	 
	var speed =  1000;
	ulElement.each(function(){
		var lineHeight = -( $(this).children("li").width()+parseInt( $(this).children("li").css("margin-right").replace('px', '')));
		
        $(this).find("li:last").prependTo($(this));
		$(this).css({marginLeft:lineHeight});
		$(this).animate({
                                marginLeft:0
                        },speed,function(){
							   $(this).css({marginLeft:0});
							 
                        });
						})
}


function xiafan(){
	var ulElement = $(".nTab .cont ul");
	var speed =  1000;
		ulElement.each(function(){
			var lineHeight = ( $(this).children("li").width()+parseInt( $(this).children("li").css("margin-right").replace('px', '')));
			$(this).animate({
                                marginLeft:-lineHeight
                        },speed,function(){
                                $(this).css({marginLeft:0});
								$(this).find("li:first").appendTo($(this));
								 
                        });
						})
	 
}

	

    $(".prev").click(function() { shangfan(); });
	$(".next").click(function() { xiafan(); })
})
	
	
function LeftXian(){
	$(window).scroll(function(){
		var jstop = $(".content").offset().top;
		var jstop1 = $(".floor_3").offset().top;
		var jstop2 = $(".case").offset().top;
		var jstop3 = $(".floor_6").offset().top;
		var jstop4 = $(".floor_2").offset().top;
		var newtop =  $(document).scrollTop();
		if(newtop>jstop-220 && newtop<jstop+659){$(".menban").css({"display":"none"})}else{$(".menban").css({"opacity":"0.2","display":"block"})}
		if(newtop>jstop4-300 && newtop<jstop4+100){$(".jiatou").addClass("jiatouy");$(".yuanjiantou").addClass("yuanjiantouy");}else{$(".jiatou").removeClass("jiatouy");$(".yuanjiantou").removeClass("yuanjiantouy");}
		if(newtop-jstop>45){
			$(".xuanfu").css({"display":"block"});
			
			if(newtop>=jstop && newtop<jstop1){
				$(".list").addClass("actives").siblings().removeClass("actives");
				}else{
					if(newtop>=jstop1 && newtop<jstop2){$(".list1").addClass("actives").siblings().removeClass("actives");}
					else{
					if(newtop>=jstop2 && newtop<jstop3){$(".list2").addClass("actives").siblings().removeClass("actives");}
					else{
					$(".list3").addClass("actives").siblings().removeClass("actives");
					$(".list3 .xiantiao").css({"display":"none"});
					}
					}
					}
					$(".xuanfu li").click(function(){$(this).addClass("actives").siblings().removeClass("actives");});
			}else{
				$(".xuanfu").css({"display":"none"});
				}
		})
	
	}	
	
$(function(){
	//带图片轮播
 
	var animate_time=200;//动画时间：0.3秒
	var interval_time=5000;//播放间隔时间：5秒
	var ad_size=jQuery(".ad_small_box ul li").size()-1;//计算广告的数量
	var ad_huandeng_click_i = 0;//初始化
	var heights=395;
	var xiaopic=100;
	//循环函数
	function ad_huandeng_play(){
		
		++ad_huandeng_click_i;
    
		if(ad_huandeng_click_i<=ad_size)
			{jQuery(".ad_small_box ul li").eq(ad_huandeng_click_i).trigger("dblclick");}
		else
			{jQuery(".ad_small_box ul li").eq(0).trigger("dblclick");ad_huandeng_click_i = 0}
	}
	//设置循环时间，自动开始循环
	var ad_huandeng_setInterval = setInterval(ad_huandeng_play,interval_time);
	
	//悬停广告区域时播放停止
	jQuery(".ad_position").hover(function(){clearInterval(ad_huandeng_setInterval);}, function(){ad_huandeng_setInterval = setInterval(ad_huandeng_play,interval_time);});
	
	//小图点击时，开始动画
	jQuery(".ad_small_box ul li").dblclick(function(){ 
		ad_huandeng_click_i=jQuery(".ad_small_box ul li").index(jQuery(this));		
		jQuery(".ad_left_big").animate({"margin-top":ad_huandeng_click_i*-heights},{duration:animate_time,queue:false});//大图上移
		if(ad_huandeng_click_i<ad_size)//当小图最后三张显示出来时，不再上移
			{
				if(ad_huandeng_click_i==0||ad_huandeng_click_i==1)
					{jQuery(".ad_small_box ul").animate({"margin-top":"0px"},{duration:animate_time,queue:false});} 
				else if(ad_huandeng_click_i-3>0){$(".ad_small_box ul").animate({"margin-top":(ad_size-3)*-xiaopic},{duration:animate_time,queue:false});}	
					else{$(".ad_small_box ul").animate({"margin-top":(ad_huandeng_click_i-1)*-xiaopic},{duration:animate_time,queue:false});}
			}		
  
			 $(".ad_small_box ul li").eq(ad_huandeng_click_i).addClass("hover").siblings().removeClass("hover")  
	 
		//jQuery(".ad_small_box ul li").css("opacity","0.5");
		//jQuery(".ad_small_box ul li").eq(ad_huandeng_click_i).css("opacity","1");
		//判断上下按钮是否可点击
		if(ad_huandeng_click_i==0)
			{
				jQuery(".ad_small_box .top_button").addClass("off");
				jQuery(".ad_small_box .bottom_button").removeClass("off");
			}
		else if(ad_huandeng_click_i==ad_size)
			{
				jQuery(".ad_small_box .top_button").removeClass("off");
				jQuery(".ad_small_box .bottom_button").addClass("off");
			}
		else 
			{
				jQuery(".ad_small_box .top_button").removeClass("off");
				jQuery(".ad_small_box .bottom_button").removeClass("off");
			}
	});
	
	//鼠标在小图上悬停时，相关移动
	$(".ad_small_box ul li").mouseover(function(){		
		var small_ad_hover_i = $(".ad_small_box ul li").index($(this));
		var this_ad_top=$(".ad_small_box  .this_ad").css("top");
		$(this).addClass("hover").siblings().removeClass("hover");
		this_ad_top=parseInt(this_ad_top);
		$(".ad_left_big").animate({"margin-top":small_ad_hover_i*-heights},{duration:animate_time,queue:false});if(small_ad_hover_i!=ad_huandeng_click_i);
		 
		ad_huandeng_click_i=small_ad_hover_i;
		//判断上下按钮是否可点击
		if(ad_huandeng_click_i==0)
			{
				$(".ad_small_box ul li").eq(ad_huandeng_click_i).addClass("hover").siblings().removeClass("hover")  ;
			}
		else (ad_huandeng_click_i==ad_size)
			{
				jQuery(".ad_small_box ul li").eq(ad_huandeng_click_i).addClass("hover").siblings().removeClass("hover")  ;
			}
		
		//jQuery(".ad_small_box ul li").css("opacity","0.5");
		//jQuery(".ad_small_box ul li").eq(ad_huandeng_click_i).css("opacity","1");
	});	
	
	//点击向上按钮时
	jQuery(".ad_small_box .top_button").click(function(){
		ad_huandeng_click_i=ad_huandeng_click_i-1;
		if(ad_huandeng_click_i<0)
			{ad_huandeng_click_i=0;}		
		jQuery(".ad_small_box ul li").eq(ad_huandeng_click_i).trigger("dblclick");
	});
	//点击向下按钮时
	jQuery(".ad_small_box .bottom_button").click(function(){
		ad_huandeng_click_i++;//=ad_huandeng_click_i+1;
		if(ad_huandeng_click_i>=ad_size)
			{
				ad_huandeng_click_i=ad_size;
				//jQuery(".ad_small_box ul li").eq(ad_huandeng_click_i).trigger("dblclick");
				//jQuery(".ad_small_box ul").animate({"margin-top":(ad_huandeng_click_i-1)*-xiaopic},{duration:animate_time,queue:false});
			}
		
		jQuery(".ad_small_box ul li").eq(ad_huandeng_click_i).trigger("dblclick");
	});
	jQuery(".ad_small_box ul li").eq(0).trigger("dblclick");
	})
	//解决方案	
$(function(){  var c=0; 
	$("<div class='mb'>").appendTo(".floor_2 .cont dl").css({"position":"absolute","left":"0","top":"0","height":"142px","width":"333px","background":"#000","opacity":"0.3","display":"none"});
	$(".floor_2 .cont dl").hover(function(){$(this).children(".mb").show()},function(){$(this).children(".mb").hide()})
 //模版中心滚动
  
	})
	 