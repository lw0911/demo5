$(function(){
	//ewm
	$(".h-mid .ewm").hover(function(){
		$(this).find(".box").stop().slideDown(600)
	}, function(){
		$(this).find(".box").stop().slideUp(600)
	})
});

function Hover(obj, calssName) {
	obj.hover(function(){
		$(this).addClass(calssName);
	},function(){
		$(this).removeClass(calssName);
	})
}