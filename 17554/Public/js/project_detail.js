$(function(){
	$(".work .child").mouseover(function(){
		$(".work .child").not($(this)).find(".childHide").stop(false,true).fadeOut(500);
		$(this).find(".childHide").fadeIn(500);
	}).mouseleave(function(){
		$(this).find(".childHide").stop(false,false).fadeOut(500);
	});
});