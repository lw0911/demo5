$(document).ready(function() {
	$("#event").live({
		mouseenter: function() {
	  		$("#lady").stop().animate({left: '15px'}, 400);
	  	},
	  	mouseleave:function(){
	  		$("#lady").stop().animate({left: '0'}, 400);
	  	}
	});
	$("#explore").live({
		mouseenter: function() {
	  		//$("#explore h4").stop().animate({top: '33px'}, 400);
	  		$(this).find("a").css({opacity:0,display:"block"});
			$(this).find("a").stop().animate({height:179,opacity:1},400);
	  	},
	  	mouseleave:function(){
	  		//$("#explore h4").stop().animate({top: '48px'}, 400);
	  		$(this).find("a").stop().animate({opacity:0},300,function(){
				$(this).css({display:"none"});
			});
	  	}
	});
	$("#explore a").live({
		click: function() {
	  		AYS.video($(this).attr("data-video"));
	  		return false;
	  	}
	});
	$("#campaign").live({
		mouseenter: function() {
			$(this).find("a").css({opacity:0,display:"block"});
			$(this).find("a").stop().animate({height:179,opacity:1},400);
	  	},
	  	mouseleave:function(){
	  		$(this).find("a").stop().animate({opacity:0},300,function(){
				$(this).css({display:"none"});
			});
	  	}
	});
	$("#campaign a").live({
		click: function() {
	  		AYS.video($(this).attr("data-video"));
	  		return false;
	  	}
	});
	
	
});