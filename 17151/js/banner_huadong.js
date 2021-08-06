// JavaScript Document
$(document).ready(function(){	

//首页banner箭头位置
	var fenye_w=(parseFloat($(".jiantou").width()));
	var fenye_w1=(parseFloat($("#ban").width()));
	var fenye_left=parseFloat($(".jiantou").css("left"));
  var dian_w=parseFloat($(".ul_dian").width());
	var l= 0.5*fenye_w1-0.5*fenye_w;
	var l2= 0.5*fenye_w1-0.5*dian_w;
	$(".jiantou").css("margin-left",l);
	$(".ul_dian").css("margin-left",l2);
	
	
	// 首页 ban 文字 滚动
var currIndex = 0;
var prevIndex = 0;
var len;
var moveInt;
var _isMoveClick = false;
var distNavLeft;
//首页自动移动
function MoveRightBtn(_prev,_next){
	$('#ban_xia_center li').eq(_prev).stop(true,false).animate({left:-727},500,function(){})
	$('#ban_xia_center li').eq(_next).css({left:$(window).width()}).stop(true,false).animate({left:0},500,function(){
		_isMoveClick = false;	
	})
}
function MoveLeftBtn(_prev,_next){
	$('#ban_xia_center li').eq(_prev).stop(true,false).animate({left:727},500,function(){})/*$(window).width()*/
	$('#ban_xia_center li').eq(_next).css({left:-$(window).width()}).stop(true,false).animate({left:0},500,function(){
		_isMoveClick = false;	
	})
}
function autoMove(){
	if(currIndex >=(len-1)){
		currIndex = 0;
		prevIndex = len-1;
	}else{
		prevIndex = currIndex;
		currIndex = currIndex+1;
	}
	MoveRightBtn(prevIndex,currIndex);	
}
// ban 效果 
var next1 = 0;
var prev2 = 0;
var click_shu = false;
$(function(){
	var li_width=$("#ban .ban_bj").width();
	// 获取ban 滚动就是 li 的宽度
	$('#ban .ban_bj li').not(':first').css({left:li_width});
	// 获取 li的个数 也就是 发、滚动的次数
	li_shu = $('#ban .ban_bj li').length;
	// 自动 滚动 定时器
	movezi = window.setInterval(function(){
		zimove(prev2,next1);
	},7000)
	// 触碰 下面小图（就是触碰停止 自动滚动 离开启动 自动滚动 代码）
	$('#ban ul.ul_dian li').hover(function(){
			clearInterval(movezi)
		},function(){
		movezi = window.setInterval(function(){
			zimove(prev2,next1);
		},7000);
	})/**/
	// 触碰 banner（就是触碰停止 自动滚动 离开启动 自动滚动 代码）
	$('.ban_bj li').hover(function(){
			clearInterval(movezi);
			jiantou_show()
		},function(){
		movezi = window.setInterval(function(){
			zimove(prev2,next1);
			jiantou_hide();
		},7000);
	})
	$('.jiantou div').hover(function(){
			clearInterval(movezi);
			jiantou_show()
		},function(){
		movezi = window.setInterval(function(){
			zimove(prev2,next1);
			jiantou_hide();
		},7000);
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
function jiantou_show(){
	$(".jiantou").show(10)
	}
function jiantou_hide(){
	$(".jiantou").hide(10)	
	}
//首页向   右   自动移动
function moveright(_prev,_next){
	var li_width=$("#ban .ban_bj").width();
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
	var li_width=$("#ban .ban_bj").width();
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
		},7000)
	})
});	
	})

 