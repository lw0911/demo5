// JavaScript Document
function Scroll(obj,prev,next,width,auto){
	var slideX = {
		thisUl   : obj.children(),
		thisLi   : obj.children().children(),
		btnLeft  : prev,
		btnRight : next,
		init: function () {
			slideX.thisUl.width(slideX.thisLi.length * width);
			slideX.slideAuto();
			slideX.btnLeft.click(slideX.slideLeft).hover(slideX.slideStop, slideX.slideAuto);
			slideX.btnRight.click(slideX.slideRight).hover(slideX.slideStop, slideX.slideAuto);
			slideX.thisUl.hover(slideX.slideStop, slideX.slideAuto);
		},
		slideLeft: function () {
			slideX.btnLeft.unbind('click', slideX.slideLeft);
			// slideX.thisLi.eq(slideX.thisLi.length - 1).prependTo(slideX.thisUl);
			slideX.thisUl.find('li:last').prependTo(slideX.thisUl);
			slideX.thisUl.css('marginLeft', 0-width);
			slideX.thisUl.animate({ 'marginLeft': [0, 'easeOutQuad']}, 500, function () {
				slideX.btnLeft.bind('click', slideX.slideLeft);
			});
			return false;
		},
		slideRight: function () {
			slideX.btnRight.unbind('click', slideX.slideRight);
			slideX.thisUl.animate({ 'marginLeft': [0-width, 'easeOutQuad']}, 500, function () {
				slideX.thisUl.css('marginLeft', '0');
				//slideX.thisLi.eq(0).appendTo(slideX.thisUl);

				slideX.thisUl.find('li:first').appendTo(slideX.thisUl);


				slideX.btnRight.bind('click', slideX.slideRight);
			});
			return false;
		},
		slideAuto: function () {
			if(auto == 1){
				slideX.intervalId = window.setInterval(slideX.slideRight, 3000);
			}
		},
		slideStop: function () {
			window.clearInterval(slideX.intervalId);
		}
	}

	$(document).ready(function () {
		slideX.init();
	})
}