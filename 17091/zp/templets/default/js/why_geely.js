$(function() {
	// packupHeader();
	var $whyGeely = $("#whyGeely"),
		$viewportCont = $(".viewport-cont"),
		$fixedViewIco = $(".fixed-view-ico a"),
		viewportHeight = $(window).height(),
		VIEWPORT_LEN = $viewportCont.length,	// viewport 的个数
		curIndex = 0,
		canMousewheel = true,
		lazyScroll;
		
	// 滚动到 viewport, target 为滚动到的viewport的索引
	function viewportGo(target) {
		var direction;	// 滚动方向，down 向下滚, up向上滚

		// 判断target是否超出
		target = Math.max(0, Math.min(VIEWPORT_LEN, target));
		// 判断目标viewport和当前的是否是同一个
		if (target == curIndex) {
			return;
		}
		canMousewheel = false;

		if (target == VIEWPORT_LEN) {

			$whyGeely.stop().animate({"scrollTop": "+=295"},  1500, 'easeInOutExpo', function() {

				canMousewheel = true;
			});
			curIndex = VIEWPORT_LEN;
			return;
		}
		if (curIndex == VIEWPORT_LEN && target == VIEWPORT_LEN - 1) {

			$whyGeely.stop().animate({"scrollTop": "-=295"},  1500, 'easeInOutExpo', function() {

				canMousewheel = true;
			});
			curIndex = VIEWPORT_LEN - 1;
			return;
		}

		// 判断whyGeely滚动的方向
		direction = target > curIndex ? "down" : "up";

		// 执行入场出场动画
		if (curIndex != VIEWPORT_LEN) {
			viewportOut(curIndex, direction);	
		}
		viewportIn(target, direction);
		
		//target为当前页面的索引值、可通过判断索引值来添加动画效果、
		
		//if (target > 0) {
			//packupHeader();
		//} else {
			//expansionHeader();
		//}

		// 更新浏览器右侧选中
		setTimeout(function() {
			$fixedViewIco.removeClass("cur").eq(target).addClass("cur");
		}, 400);
		curIndex = target;
	};

	// viewport出去
	function viewportOut(viewportIndex, direction) {
		var viewportMarginTop,
			$viewport = $viewportCont.eq(viewportIndex),
			$children = $viewport.data("children"),
			len = $children.length;

		// 判断whyGeely是向上还是向下滚动 down 向下滚, up向上滚
		//viewportMarginTop = (direction == "down" ? "-" : "+") + "=150";

		//$viewport.stop().animate({"margin-top": viewportMarginTop}, 1100, 'easeInOutExpo');

		// 子元素移动
		$children.each(function() {
			var targetTop = direction == "down" ? -(len - $(this).index())*150 : ($(this).index() + 1)*150;

			$(this).stop().animate({"top": targetTop}, 1100, 'easeInOutExpo', function() {
				$(this).css("top", 0);
			});
		});
	};

	// viewport进来
	function viewportIn(viewportIndex, direction) {
		var viewportMarginTop,
			$viewport = $viewportCont.eq(viewportIndex),
			$children = $viewport.data("children"),
			len = $children.length;

		// 判断whyGeely是向上还是向下滚动 down 向下滚, up向上滚
		if (direction == "down") {
			viewportMarginTop = "-=150";
			viewportInitMarginTop = $viewport.data("defaultMarginTop") + 150;
		} else {
			viewportMarginTop = "+=150";
			viewportInitMarginTop = $viewport.data("defaultMarginTop") - 150;
		};

		// 滚动whyGeely
		$whyGeely.stop().animate({"scrollTop": viewportIndex * viewportHeight},  1500, 'easeInOutExpo');

		// 初始化$viewport 并运动
		$viewport.stop().delay(380).animate({"margin-top": 0}, 1100, 'easeInOutExpo', function() {
			canMousewheel = true;
		});

		// 初始化子元素并运动
		$children.each(function(index) {
			$(this).css("top", function(index) {
				return (direction == "down" ? index * 150 : -index*150);
			}).stop().delay(380).animate({"top": 0}, 1100, 'easeInOutExpo')
		});
	};

	// 鼠标滚动事件
	function fnMousewheel(e) {
		var direction,
			e = e || event;

		if (!canMousewheel) {
			return;
		}
		clearTimeout(lazyScroll);

		// 获取滚轮方向
		if (e.wheelDelta)  {//IE/Opera/Chrome 
			direction = e.wheelDelta;
		} else if (e.detail) {//Firefox 
			direction = e.detail * (-1);
		}

		lazyScroll = setTimeout(function() {
			// 判断滚动方向
			if (direction < 0) {
				viewportGo(curIndex + 1);
			} else {

				viewportGo(curIndex - 1);
			}	
		}, 100);
	}

    // 初始化页面
    var $viewNext = $(".view-next"),
    	$overviewView = $(".overview-view"),
    	$historyView = $(".history-view");

	$(".view-bg").find("img").css("margin", 0);
    function initViewport() {

    	if (viewportHeight < 600) {
    		$viewNext.css("bottom", 5);
    		$overviewView.css("margin-top", -280);
    		$overviewView.find(".about").css("height", 55);
    		$historyView.css("margin-top", -285);
    		$historyView.find(".tab-tl").css({"height": 43, "padding-top": 26})
    	} else {
    		$viewNext.css("bottom", 30);
    		$overviewView.css("margin-top", -310);
    		$overviewView.find(".about").css("height", 90);
    		$historyView.css("margin-top", -300);
    		$historyView.find(".tab-tl").css({"height": 55, "padding-top": 34})
    	}

        $whyGeely.css({"overflow": "hidden", "height": viewportHeight});
        $whyGeely.scrollTop(curIndex*viewportHeight);
        $(".viewport").css("overflow", "hidden");
        $fixedViewIco.eq(curIndex).addClass("cur");
		//imgFull($(".view-bg"));
    }
    
    initViewport();
    // 初始化缓存
    $viewportCont.each(function() { // 保存默认的margin-top，缓存children()
        var defaultMarginTop = parseInt($(this).css("margin-top")),
            $children = $(this).children();

        $(this).data({"defaultMarginTop": defaultMarginTop, "children": $children});
        $children.css({"position": "relative"});
    });


	// 右侧小点绑定点击事件
	$fixedViewIco.on("click", function() {
		var index = $(this).index();

		viewportGo(index);
	});

	// 下一屏按钮添加事件
	$(".view-next").each(function(index) {
		$(this).on("click", function() {
			viewportGo(index+1);
		});
	});

	//绑定滚轮事件
	if ($whyGeely[0].addEventListener) {//ff3.5以下
		$whyGeely[0].addEventListener("DOMMouseScroll", function(e) {
			fnMousewheel(e);
		}, false);
	}
	$whyGeely[0].onmousewheel = function(e) {
		fnMousewheel(e);
	};
	
    // 默认进入页面停留位置
    (function() {
        curIndex = parseInt(location.hash.split("=")[1]) || 0;

        $whyGeely.scrollTop(curIndex*viewportHeight);
        //$fixedViewIco.removeClass("cur").eq(curIndex).addClass("cur");

        if (curIndex > 0) {
            packupHeader();
        }
    })();

    $(".semenu, .foot-menu").on("click", " a", function() {
    	setTimeout(function() {

	    	var target = parseInt(location.hash.split("=")[1]) || 0;

	        if (target != curIndex) {
	            viewportGo(target);
	        }
    	}, 20);
    });

	// 改变窗口大小事件
	$(window).on("resize", function() {

		viewportHeight = $(window).height();
		initViewport();
		//window.location.reload();
	});

	$("#overviewGoNext").on("click", function() {
		viewportGo(1);
	});
});

/******************************************
***										***
***				页面效果				***
***										***
******************************************/
$(function() {
	/*** Geely Overview, Corporate Culture ***/
	//topMove(".overview-view li, .culture-view li");
	
	/*** Production and R & D ***/
	$(".production-cont li").hover(function() {

		$(this).find(".line").stop().animate({width: "100%"}, 300);
	}, function() {

		$(this).find(".line").stop().animate({width: 0}, 300);
	});
	//new Cutover({
	//	ul: ".production-cont ul",
	//	li: "li",
	//	prev: ".production-cont .prev",
	//	next: ".production-cont .next",
	//	pageNum: 4,
	//	moveExtent: $(".production-cont li").outerWidth(true),
	//	speed: 800
	//});

	/*** History ***/
	$(".history-view .tab-cont").each(function() {
		var $wrap = $(this).find(".cont"),
			$ul = $(this).find("ul"),
			$li = $(this).find("li"),
			$prev = $(this).find(".prev"),
			$next = $(this).find(".next"),
			$cur = $(this).find(".cur"),
			$total = $(this).find(".total"),
			len = $li.length,
			width = $li.outerWidth(true),
			max = Math.ceil(len/3),
			canClick = true,
			curIndex = 0;

		// 初始化
		$total.html(max);
		$cur.html(Math.min(1, max));
		$ul.width(width*len);

		// 绑定事件
		$prev.on("click",function() {
			if (!canClick) {
				return;
			}
			canClick = false;
			curIndex = curIndex - 1 <= 0 ? 0 : curIndex - 1;

			$cur.html(Math.min(curIndex + 1, max));
			$wrap.stop().animate({"scrollLeft": "-=" + width*3}, 1000, "easeInOutCubic", function() {
				canClick = true;
			});
		});
		$next.on("click",function() {
			if (!canClick) {
				return;
			}
			canClick = false;
			curIndex = curIndex + 1 >= max ? max : curIndex + 1;

			$cur.html(Math.min(curIndex + 1, max));
			$wrap.stop().animate({"scrollLeft": "+=" + width*3}, 1000, "easeInOutCubic", function() {
				canClick = true;
			});
		});
	});
	var $historyTabTl = $(".history-cont .tab-tl a"),
		$historyTabCont = $(".history-cont .tab-cont");

	$historyTabTl.on("mouseover", function() {
		var index = $(this).index();

		$historyTabTl.removeClass("cur").eq(index).addClass("cur");
		$historyTabCont.css("visibility", "hidden").eq(index).css("visibility", "visible");
	}).triggerHandler("mouseover");

	// 弹出蒙版 
    (function() {
        var $mask = $(".history-mask"),
        	$cont = $mask.find(".history-mask-cont");

        // 初始化蒙版背景
        // $bg.css("top", -top);
        // $bg.height(windowHeight);
        $(".history-cont .cont li").on("click", function() {
        	var id = $(this).data("id"),
        		type = $(this).parents(".tab-cont").data("type");

            $mask.each(function() {

            	if ($(this).data("type") == type) {					
					var slider = $(this).data("slider");
					
	            	slider.options.li.each(function() {
		            	if ($(this).data("id") == id) {
		            		slider.go($(this).index());
		            		return false;
		            	}
		            });
		            $(this).find("li").each(function() {
		            	var $this = $(this);

		            	$(this).find(".txt").height(function() {
		            		var tlHeight = $this.find(".tl").outerHeight();
		            		return 290 - 63 - 24 - tlHeight;
		            	});
		            });

		            $(this).fadeIn();
		            $(".history-cont .btn").hide();
            	};
            });            
        });
        $cont.on("click", function(e) {
        	e.stopPropagation();
        });
        // 关闭蒙版
        $mask.add($mask.find(".g-mask-close")).on("click", function() {
            $mask.fadeOut();
		    $(".history-cont .btn").show();
        });
    })();

    // 蒙版切换
    $(".history-mask").each(function() {

	    $(this).data("slider", new Slider({
	        ul: $(this).find("ul"),
	        li: $(this).find("li"),
	        trigger: $(this).find(".trigger"),
	        prev: $(this).find(".prev"),
	        next: $(this).find(".next"),
	        isAuto: false
	    }));
    });
    $(".history-mask-cont li").each(function() {
    	var $txt = $(this).find(".txt");

    	$(this).find(".up").hover(function() {

    		$txt[0].timer = setInterval(function() {
				$txt[0].scrollTop +=2;
			}, 40);
    	}, function() {
    		clearInterval($txt[0].timer);
    	});
    	$(this).find(".down").hover(function() {

    		$txt[0].timer = setInterval(function() {
				$txt[0].scrollTop -=2;
			}, 40);
    	}, function() {
    		clearInterval($txt[0].timer);
    	});
    });

	/*** Production and R & D ***/

    // 弹出蒙版 
    (function() {
        var $mask = $(".production-mask"),
        	$cont = $mask.find(".production-mask-cont");

        // 初始化蒙版背景
        // $bg.css("top", -top);
        // $bg.height(windowHeight);
        $(".production-cont .cont li").on("click", function() {
        	var id = $(this).data("id");

            productionSlider.options.li.each(function() {
            	if ($(this).data("id") == id) {
            		productionSlider.go($(this).index());
            		return false;
            	}
            });
            $mask.fadeIn();
            $(".production-mask-cont li").each(function() {
            	var $this = $(this);

            	$(this).find(".txt").height(function() {
            		var tlHeight = $this.find(".tl").outerHeight();
            		return 316 - 63 - tlHeight;
            	});
            });
        });
        $cont.on("click", function(e) {
        	e.stopPropagation();
        });
        // 关闭蒙版
        $mask.add($mask.find(".g-mask-close")).on("click", function() {
            $mask.fadeOut();
        });
    })();
    // 蒙版切换
    //var productionSlider = new Slider({
    //   ul: $(".production-mask-cont ul"),
    //    li: $(".production-mask-cont li"),
    //    trigger: $(".production-mask-cont .trigger"),
    //   prev: $(".production-mask-cont .prev"),
    //    next: $(".production-mask-cont .next"),
    //    isAuto: false
    //});
    $(".production-mask-cont li").each(function() {
    	var $txt = $(this).find(".txt");

    	$(this).find(".up").hover(function() {

    		$txt[0].timer = setInterval(function() {
				$txt[0].scrollTop +=2;
			}, 40);
    	}, function() {
    		clearInterval($txt[0].timer);
    	});
    	$(this).find(".down").hover(function() {

    		$txt[0].timer = setInterval(function() {
				$txt[0].scrollTop -=2;
			}, 40);
    	}, function() {
    		clearInterval($txt[0].timer);
    	});
    });
});