$(function(){
	$(".main .child").mouseover(function(){
		$(".main .child").not($(this)).find(".childHide").stop(false,true).fadeOut(500);
		$(this).find(".childHide").fadeIn(500);
	}).mouseleave(function(){
		$(this).find(".childHide").stop(false,false).fadeOut(500);
	});
	
	
	$(".mainNav .childList").click(function(){
		$(".mainNav .childList").not($(this)).find("ul").slideUp(200);
		$(this).find("ul").slideToggle(200);
		moveMain(".main");
		
	});
});

