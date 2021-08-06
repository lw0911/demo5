$(function() {
	var mainOnNum = 1;
	var timer;
	var topIndex = 1;
	var width = $(window).width();

	function onTimer() {
		if (mainOnNum > 3) {
			mainOnNum = 1;
		} else {
			mainOnNum++;
		}

		$(".yitihua .huadong").eq(mainOnNum-1).trigger("click");
	}

	function changeSceneSelector($num) {
		mainOnNum = $num+1;

		changeScene(mainOnNum);
	}

	function changeScene($num) {
		clearInterval(timer);

		mainOnNum = $num;

		topIndex++;

		switch($num) {
			case 1:
				timer = setInterval(onTimer,7000000);

				$("#scene1").css({"z-index":topIndex});

				motion($num);
			break;
			
			case 2:
				timer = setInterval(onTimer,7000000);

				$("#scene2").css({"z-index":topIndex});

				motion($num);
			break;

			case 3:
				timer = setInterval(onTimer,7000000);

				$("#scene3").css({"z-index":topIndex});

				motion($num);
			break;
		}
	}

	function clearFunctions(){
		$("li").clearQueue();
		$("li").stop();

		$("p").clearQueue();
		$("p").stop();

		$("h2").clearQueue();
		$("h2").stop();

		$("ul").clearQueue();
		$("ul").stop();
	}

	function motion($mc) {
		clearFunctions();

		$("#scene1").stop().css("opacity","0.1");
		$("#scene1 .pointer1").stop().css("left","2000px");
		$("#scene1 .pointer2").stop().css("left","2000px");
		$("#scene1 .pointer3").stop().css("left","2000px");
		$("#scene1 .pointer4").stop().css("left","2000px");
		$("#scene1 .pointer5").stop().css("left","2000px");

		$("#scene2").stop().css("opacity","0.1");
		$("#scene2 h2").stop().css("left","-500px");
		$("#scene2 .pointer1").stop().css("right","-500px");
		$("#scene2 .pointer2").stop().css("right","-500px");
		$("#scene2 .pointer3").stop().css("right","-500px");
		$("#scene2 .pointer4").stop().css("right","-500px");
		$("#scene2 .pointer5").stop().css("right","-500px");

		$("#scene3").stop().css("opacity","0.1");
		$("#scene3 h2").stop().css("right","-500px");
		$("#scene3 .pointer1").stop().css("left","-800px");
		$("#scene3 .pointer2").stop().css("left","-800px");
		$("#scene3 .pointer3").stop().css("left","-800px");
		$("#scene3 .pointer4").stop().css("left","-800px");
		$("#scene3 .pointer5").stop().css("left","-800px");

		if($mc == 1) {
			$("#scene1").animate({"opacity":"1"},{duration:700});
			$("#scene1 .pointer1").delay(500).animate({"left":"0px"},{duration:800, easing:"easeInOutCirc"});
			$("#scene1 .pointer2").delay(900).animate({"left":"138px"},{duration:800, easing:"easeInOutCirc"});
			$("#scene1 .pointer3").delay(1300).animate({"left":"330px"},{duration:800, easing:"easeInOutCirc"});
			$("#scene1 .pointer4").delay(1700).animate({"left":"500px"},{duration:800, easing:"easeInOutCirc"});
			$("#scene1 .pointer5").delay(2100).animate({"left":"689px"},{duration:800, easing:"easeInOutCirc"});
			

		} else if($mc == 2) {
			$("#scene2").animate({"opacity":"1"},{duration:700});
			$("#scene2 h2").animate({"left":"160px"},{duration:1000, easing:"easeInOutCirc"});
			$("#scene2 .pointer1").delay(500).animate({"right":"150px"},{duration:800, easing:"easeInOutCirc"});
			$("#scene2 .pointer2").delay(800).animate({"right":"300px"},{duration:800, easing:"easeInOutCirc"});
			$("#scene2 .pointer3").delay(1100).animate({"right":"300px"},{duration:500, easing:"easeInOutCirc"});
			$("#scene2 .pointer4").delay(1400).animate({"right":"300px"},{duration:500, easing:"easeInOutCirc"});
			$("#scene2 .pointer5").delay(1700).animate({"right":"300px"},{duration:500, easing:"easeInOutCirc"});
		} else {
			$("#scene3").animate({"opacity":"1"},{duration:700});
			$("#scene3 h2").animate({"right":"140px"},{duration:1000, easing:"easeInOutCirc"});
			$("#scene3 .pointer1").delay(500).animate({"left":"140px"},{duration:800, easing:"easeInOutCirc"});
			$("#scene3 .pointer2").delay(800).animate({"left":"320px"},{duration:800, easing:"easeInOutCirc"});
			$("#scene3 .pointer3").delay(1100).animate({"left":"320px"},{duration:500, easing:"easeInOutCirc"});
			$("#scene3 .pointer4").delay(1400).animate({"left":"320px"},{duration:500, easing:"easeInOutCirc"});
			$("#scene3 .pointer5").delay(1700).animate({"left":"315px"},{duration:500, easing:"easeInOutCirc"});
		}
	}

	function init() { 
		var $btns = $(".yitihua .huadong"),
			$motionC = $(".control #btnPlay");

		$btns.bind("click", function() {
			clearInterval(timer);
			timer = setInterval(onTimer,7000000);
			var $this = $(this),
				index = $btns.index($this);
			
			if(window.console) {console.log("clicked : " + mainOnNum);}
			$btns.removeClass("on"); 
			$this.addClass("on");
			
			changeSceneSelector(index);
			return false;
		});

		$motionC.bind("click", function() {
			var $this = $(this);
			if($this.hasClass("on")) {
				$this.text("自动播放");
				$this.attr("title","自动播放");
				$this.removeClass("on");
				clearInterval(timer);
			} else {
				$this.text("自动播放 停止");
				$this.attr("title","自动播放 停止");
				$this.addClass("on");
				clearInterval(timer);
				timer = setInterval(onTimer,7000000);
			}
			return false;
		});

		changeScene(0);
	}

	var goInit = setTimeout(function() {
		init();
	}, 10);

	$(".scene").css("display","block");
	$(".scene").css("left",width);


});

