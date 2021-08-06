(function($){
     $.fn.hoverTip = function(option){
     	var childObj = this.children(option.child);

     	this.hover(function(){
			childObj.removeClass(option.leaveClass).addClass(option.onClass);
		}, function(){
			activeTimer();
		});
     	
		childObj.hover(function(){
			clearTimeout(timer);
		}, function(){
			activeTimer();
		});

		function activeTimer(){
			timer = setTimeout(function () {
				childObj.removeClass(option.onClass);
			}, 200);
		}
    }
}(jQuery));
