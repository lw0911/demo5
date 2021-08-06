

(function($){
	$.fn.num3 = function(){
		n1 = $(this).width();
		h1 = $(this).height();

		
		$(this).hover(function(){
			var becurr = "background:#b08257;position:absolute;"
			// top边框
			var divTop ="<div style='"+becurr+"top:-2px;left:-2px;width:0px;height:2px'></div>";

			// right边框
			var divRight ="<div style='"+becurr+"top:-2px;right:-2px;width:2px;height:0px;'></div>";

			// Bottom边框
			var divBottom ="<div style='"+becurr+"bottom:-2px;right:-2px;width:0px;height:2px'></div>";

			// Left边框
			var divLeft ="<div style='"+becurr+"bottom:-2px;left:-2px;width:2px;height:0px;'></div>"; 

			$(this).append(divTop,divRight,divBottom,divLeft);

			$(this).find("div:nth-child(odd)").stop().animate({width:n1+3.5},300);
			$(this).find("div:nth-child(even)").stop().animate({height:h1+3.5},300);
		},function(){
			$(this).find("div:nth-child(odd)").stop().animate({width:0},300);
			$(this).find("div:nth-child(even)").stop().animate({height:0},300);
		})
	}
})(jQuery);


