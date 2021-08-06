AYS.main.high = {
	data: {
		stages: [],
		current: -1,
		next: -1,
		delay_timeout: 800,
		delay_hander: false,
		auto_play_handler: false,
		auto_play_timeout: 9000
	},

	next: function() {
		AYS.main.high.data.delay_hander = false;
		if (AYS.main.high.data.current == AYS.main.high.data.next) {
			return;
		}
		if (AYS.main.high.data.current >= 0) {
			AYS.main.high.data.stages[AYS.main.high.data.current].outStage(AYS.main.high.data.stages[AYS.main.high.data.next].inStage);
		} else {
			AYS.main.high.data.stages[AYS.main.high.data.next].inStage();
		}
		AYS.main.high.data.current = AYS.main.high.data.next;
	},

	autoplay: function(enable) {
		if (AYS.main.high.data.auto_play_handler) {
			clearInterval(AYS.main.high.data.auto_play_handler);
			AYS.main.high.data.auto_play_handler = false;
		}
		if (enable) {
			AYS.main.high.data.auto_play_handler = setInterval(function() {
				var ls = $("#contain .focus-gallery .switch-high a");
				var index = $("#contain .focus-gallery .switch-high a.current").index();
				ls.eq(index).removeClass('current');
				var next = (index + 1) % ls.size();
				ls.eq(next).addClass('current');
				AYS.main.high.switchTo(next, true);
			}, AYS.main.high.data.auto_play_timeout);
		}
	},

	switchTo: function(index, force) {
		if (AYS.main.high.data.delay_hander) {
			clearTimeout(AYS.main.high.data.delay_hander);
		}
		AYS.main.high.data.next = index;
		if (force) {
			AYS.main.high.next();
		} else {
			AYS.main.high.data.delay_hander = setTimeout(AYS.main.high.next, AYS.main.high.data.delay_timeout);
		}
	},

	init : function(){
		var highBox=$("#contain .focus-gallery"),
		sildeBox=highBox.find("ul li"),
		totalHigh=sildeBox.size(),
		switchHigh=highBox.find(".switch-high"),
		curHigh=oldHigh=0,
		delay=8000,
		t=null,
		isPlay=false;

		if(!$("body").hasClass("home")) return;

		var html = '';
		for(var i=0; i<totalHigh; i++){
			html+="<a><b></b></a>";
		}
		switchHigh.append(html);

		sildeBox.each(function(i,j){
			$(j).css({opacity:0,zIndex:1,display:"none"});
		});

		AYS.main.high.data.stages = [
			AYS.main.high.slide1,
			AYS.main.high.slide2,
			AYS.main.high.slide3,
			AYS.main.high.slide4,
			AYS.main.high.slide5
		];

		for (var i in AYS.main.high.data.stages) {
			AYS.main.high.data.stages[i].init();
		}

		switchHigh.on({
			mouseenter : function(){
				AYS.main.high.autoplay(false);
			},
			mouseleave : function(){
				AYS.main.high.autoplay(true);
			},
			click : function(){
				if($(this).hasClass("current")) return;
				$(this).addClass("current").siblings('.current').removeClass("current");
				AYS.main.high.switchTo($(this).index());
				return false;
			}
		},"a").find("a").first().addClass("current");
		AYS.main.high.switchTo(0, true);
		AYS.main.high.autoplay(true);
	},
	slide1 : {
		timehandle : false,
		stop: function() {
			if(AYS.main.high.slide1.timehandle){
				clearTimeout(AYS.main.high.slide1.timehandle);
				AYS.main.high.slide1.timehandle=false;
			}
		},
		init : function(){
			var ebox=$(".high-slide1");
			ebox.removeClass("instage").addClass("outstage");
		},
		inStage : function(){
			AYS.main.high.slide1.stop();
			var ebox=$(".high-slide1");

			ebox.css({zIndex:10,display:"block"}).animate({opacity:1},800, function() {
				ebox.siblings().css({zIndex:1});
				ebox.removeClass("outstage").addClass("instage");
			});
			
		},
		outStage: function(cb) {
			AYS.main.high.slide1.stop();
			var ebox=$(".high-slide1");

			setTimeout(function(){
				ebox.animate({opacity:0},800);
				ebox.removeClass("instage").addClass("outstage");
				if (cb) cb();
			},1);
			
		}
	},
	slide2 : {
		timehandle : false,
		stop: function() {
			if(AYS.main.high.slide2.timehandle){
				clearTimeout(AYS.main.high.slide2.timehandle);
				AYS.main.high.slide2.timehandle=false;
			}
		},
		init : function(){
			var ebox=$(".high-slide2");
			ebox.removeClass("instage").addClass("outstage");
		},
		inStage : function(){
			AYS.main.high.slide2.stop();
			var ebox=$(".high-slide2");

			ebox.css({zIndex:10,display:"block"}).animate({opacity:1},800, function() {
				ebox.siblings().css({zIndex:1});
				ebox.removeClass("outstage").addClass("instage");
			});
			
		},
		outStage: function(cb) {
			AYS.main.high.slide2.stop();
			var ebox=$(".high-slide2");

			setTimeout(function(){
				ebox.animate({opacity:0},800);
				ebox.removeClass("instage").addClass("outstage");
				if (cb) cb();
			},1);
			
		}
	},
	slide3 : {
		timehandle : false,
		stop: function() {
			if(AYS.main.high.slide3.timehandle){
				clearTimeout(AYS.main.high.slide3.timehandle);
				AYS.main.high.slide3.timehandle=false;
			}
		},
		init : function(){
			var ebox=$(".high-slide3");
			ebox.removeClass("instage").addClass("outstage");
		},
		inStage : function(){
			AYS.main.high.slide3.stop();
			var ebox=$(".high-slide3");

			ebox.css({zIndex:10,display:"block"}).animate({opacity:1},800, function() {
				ebox.siblings().css({zIndex:1});
				ebox.removeClass("outstage").addClass("instage");
			});
			
		},
		outStage: function(cb) {
			AYS.main.high.slide3.stop();
			var ebox=$(".high-slide3");

			setTimeout(function(){
				ebox.animate({opacity:0},800);
				ebox.removeClass("instage").addClass("outstage");
				if (cb) cb();
			},1);
			
		}
	},
	slide4 : {
		timehandle : false,
		stop: function() {
			if(AYS.main.high.slide1.timehandle){
				clearTimeout(AYS.main.high.slide1.timehandle);
				AYS.main.high.slide1.timehandle=false;
			}
		},
		init : function(){
			var ebox=$(".high-slide4");
			ebox.removeClass("instage").addClass("outstage");
		},
		inStage : function(){
			AYS.main.high.slide1.stop();
			var ebox=$(".high-slide4");

			ebox.css({zIndex:10,display:"block"}).animate({opacity:1},800, function() {
				ebox.siblings().css({zIndex:1});
				ebox.removeClass("outstage").addClass("instage");
			});
			
		},
		outStage: function(cb) {
			AYS.main.high.slide1.stop();
			var ebox=$(".high-slide4");

			setTimeout(function(){
				ebox.animate({opacity:0},800);
				ebox.removeClass("instage").addClass("outstage");
				if (cb) cb();
			},1);
			
		}
	},
	slide5 : {
		timehandle : false,
		stop: function() {
			if(AYS.main.high.slide1.timehandle){
				clearTimeout(AYS.main.high.slide1.timehandle);
				AYS.main.high.slide1.timehandle=false;
			}
		},
		init : function(){
			var ebox=$(".high-slide5");
			ebox.removeClass("instage").addClass("outstage");
		},
		inStage : function(){
			AYS.main.high.slide1.stop();
			var ebox=$(".high-slide5");

			ebox.css({zIndex:10,display:"block"}).animate({opacity:1},800, function() {
				ebox.siblings().css({zIndex:1});
				ebox.removeClass("outstage").addClass("instage");
			});
			
		},
		outStage: function(cb) {
			AYS.main.high.slide1.stop();
			var ebox=$(".high-slide5");

			setTimeout(function(){
				ebox.animate({opacity:0},800);
				ebox.removeClass("instage").addClass("outstage");
				if (cb) cb();
			},1);
			
		}
	}
};