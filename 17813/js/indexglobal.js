// JavaScript Document
//首页新闻中心选项卡切换
$(document).ready(function(e) {
	var ind=0;
	$(".newssel_nei_op").eq(ind).addClass("on"); 
	$(".newsxxk").hide();
	$(".newsxxk").eq(ind).show();
    $(".newssel_nei_op").click(function(){
		ind=$(this).index();
	    $(this).addClass("on").siblings().removeClass("on");
		$(".newsxxk").hide();
		$(".newsxxk").eq(ind).show();	
	});
});
//首页产品中心选项卡切换
$(document).ready(function(e) {
	var ind=0;
	$(".prosel_nei div").eq(ind).addClass("on");
	$(".proxxk_xun").eq(ind).show();
    var ml=$(".prosel_nei div.on").offset().left;
	var w=$(".prosel_nei div.on").width();
	$(".prosel_xian div").css({"margin-left":ml,"width":w});
	
	$(".prosel_nei div").hover(function(){
	   ml=$(this).offset().left;
	   w=$(this).width();
	   $(".prosel_xian div").css({"margin-left":ml,"width":w}); 	
	},function(){		
		ml=$(".prosel_nei div.on").offset().left;
		w=$(".prosel_nei div.on").width();
		$(".prosel_xian div").css({"margin-left":ml,"width":w});
		
	});
	
	$(".prosel_nei div").click(function(){
	    ind=$(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		
		ml=$(".prosel_nei div.on").offset().left;
		w=$(".prosel_nei div.on").width();
		$(".prosel_xian div").css({"margin-left":ml,"width":w});
		$(".proxxk_xun").hide();
	    $(".proxxk_xun").eq(ind).show();
			
	});
	
	var boxlen=$(".proxxk_xun").length;
	var neilen,maxw,xunml,boxw;
	for(var i=0; i<boxlen; i++){
	   	neilen=$(".proxxk_xun").eq(i).find("a").length;
		maxw=neilen*283;
		$(".proxxk_xun").eq(i).attr({"lenght":neilen,"maxwidth":maxw});
		$(".proxxk_xun").eq(i).find(".pxb_xun").css({"width":maxw});
	}
	
	$(".proxxk_xun_right").click(function(){
		 boxw=parseInt($(this).parents(".proxxk_xun").width())+32;
		 maxw=parseInt($(this).parents(".proxxk_xun").attr("maxwidth"));

	     xunml=parseInt($(this).parents(".proxxk_xun").find(".pxb_xun").css("margin-left"));
		 xunml=xunml-283;
		 
		 if($(this).parents(".proxxk_xun").find(".pxb_xun").width()<boxw){
		     return;	 
		 }
		 
		 
		 if(xunml<(boxw-maxw)){
			xunml=(boxw-maxw);
		  }
		 $(this).parents(".proxxk_xun").find(".pxb_xun").animate({"margin-left":xunml});
	});
	
	
	$(".proxxk_xun_left").click(function(){

	     xunml=parseInt($(this).parents(".proxxk_xun").find(".pxb_xun").css("margin-left"));
		 xunml=xunml+283;
		 if(xunml>=0){
			xunml=0;
		  }
		 $(this).parents(".proxxk_xun").find(".pxb_xun").animate({"margin-left":xunml});
	});
	
});

// JavaScript Document
$(document).ready(function(){	

//首页banner箭头位置
// ban 效果 
var next1 = 0;
var prev2 = 0;
var click_shu = false;
var str="<li class='licurr'></li>"
$(function(){
	var li_width=$("#ban .ban_bj").width();
	// 获取ban 滚动就是 li 的宽度
	$('#ban .ban_bj li').not(':first').css({left:li_width});
	// 获取 li的个数 也就是 发、滚动的次数
	li_shu = $('#ban .ban_bj li').length;
	for(var i=1;i<li_shu;i++){
		str=str+"<li></li>";
	}
	$(".ul_dian").html(str);
	// 自动 滚动 定时器
	movezi = window.setInterval(function(){
		zimove(prev2,next1);
	},5000)
	// 触碰 下面小图（就是触碰停止 自动滚动 离开启动 自动滚动 代码）
	$('#ban ul.ul_dian li').hover(function(){
			clearInterval(movezi)
		},function(){
		movezi = window.setInterval(function(){
			zimove(prev2,next1);
		},5000);
	})/**/
	// 触碰 banner（就是触碰停止 自动滚动 离开启动 自动滚动 代码）
	$('.ban_bj li').hover(function(){
			clearInterval(movezi);
		},function(){
		movezi = window.setInterval(function(){
			zimove(prev2,next1);
		},5000);
	})
	$('.jiantou div').hover(function(){
			clearInterval(movezi);
		},function(){
		movezi = window.setInterval(function(){
			zimove(prev2,next1);	
		},5000);
	})
	$(".jiantou .jiantou_left").click(function(){
		
	if(next1 <=0){
		next1 = li_shu-1;
		prev2 = 0;
	}else{
		prev2 = next1;
		next1 = next1-1;
	}
	moveleft(prev2,next1);	
		
		});
		$("#flexslider").hover(function(){
	$(".jiantou").css("display","inline-block");
	},function(){
	$(".jiantou").hide(10)
		});
	$(".jiantou .jiantou_right").click(function(){
		
	if(next1 >=(li_shu-1)){
		next1 = 0;
		prev2 = li_shu-1;
	}else{
		prev2 = next1;
		next1 = next1+1;
	}
	moveright(prev2,next1);	
		
		});
	// 点击 下面小图 执行的代码
	$('#ban ul.ul_dian li').click(function(){
		// 这个是获取 点击小图标 是第几个 返回的数 bannercurrIndex 就是 prev2
		var bannercurrIndex = $('#ban ul.ul_dian li').index(this);

		// 这个就是  自动滚动 代码
		moveright(next1,bannercurrIndex);
		// 这样 是为了  下面 执行 滚动
		next1 = bannercurrIndex;
	})	
})
//首页向   右   自动移动
function moveright(_prev,_next){
	li_width=$("#ban .ban_bj").width();
	$('#ban .ban_bj li').eq(_next).addClass("on").siblings().removeClass("on");
	$('#ban .ban_bj li').eq(_prev).stop(true,false).animate({left:-li_width},1000,function(){})
	// 小图标 remove add  .Class
	$('#ban ul.ul_dian li').eq(_prev).removeClass('licurr');
	$('#ban ul.ul_dian li').eq(_next).addClass('licurr');
	$('#ban .ban_bj li').eq(_next).css({left:li_width}).stop(true,false).animate({left:0},1000,function(){
		click_shu = false;	
	})
}
//首页向  左   自动移动
function moveleft(_prev,_next){
	li_width=$("#ban .ban_bj").width();
	$('#ban .ban_bj li').eq(_next).addClass("on").siblings().removeClass("on");
	$('#ban .ban_bj li').eq(_prev).stop(true,false).animate({left:li_width},1000,function(){})
	$('#ban ul.ul_dian li').eq(_prev).removeClass('licurr');
	$('#ban ul.ul_dian li').eq(_next).addClass('licurr');
	$('#ban .ban_bj li').eq(_next).css({left:-li_width}).stop(true,false).animate({left:0},1000,function(){
		click_shu = false;	
	})
} 
// 自动移动 实际 执行代码
function zimove(){
	if(next1 >=(li_shu-1)){
		next1 = 0;
		prev2 = li_shu-1;
	}else{
		prev2 = next1;
		next1 = next1+1;
	}
	moveright(prev2,next1);	
}
$(document).ready(function(e) {
	$('.flex_comBtn').hover(function(){
		window.clearInterval(movezi)
	},function(){
		movezi = window.setInterval(function(){
			zimove(prev2,next1);
		},5000)
	})
	});	
})

 
 








