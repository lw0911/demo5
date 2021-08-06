$(function() {


function play() {
			this.a = -1;
			this.url = ["banner1.jpg","protuctbg.jpg","banner1.jpg"];
			this.font = ["集原料药、中间体及细化学品研发、生产和销售于一体","22.集原料药、中间体及细化学品研发、生产和销售于一体","33.集原料药、中间体及细化学品研发、生产和销售于一体"];
			// this.aurl = ["join.html","star.html","star.html"];
		};
		play.prototype = {
			init:function() {
				if($(".lunbanner .lunbo_font span")[0].className == "animated fadeIn") {
					$(".lunbanner .lunbo_font span").removeClass("fadeIn");
				}else {
					$(".lunbanner .lunbo_font span").addClass("fadeIn");
				}
			},
			Lun:function() {	
				this.init();
				$(".lunbanner .lunbo_font span").text(Play.font[Play.a]);
				// $(".lunbanner .lunbo_a").attr("href",Play.aurl[Play.a]);
				$(".lunbanner .lunbo").css({"background":"url(./images/"+Play.url[Play.a]+") no-repeat center"},"backgroundSize","auto 100%");
				if(Play.a > 1) {
					Play.a = -1;
				}
				Play.a++;
				$(".lun_list ul li").removeClass("foucus_list");
				$(".lun_list ul li").eq(Play.a-1).addClass("foucus_list");
			},
			Inval:function() {
				setInterval(Play.Lun(),2000);
			},
			Click:function() {
				$(".lun_list ul li").click(function() {
					Play.init();
					console.log($(this).index());
					$(".lun_list ul li").removeClass("foucus_list");
					$(".lun_list ul li").eq($(this).index()).addClass("foucus_list");
					Play.a = $(this).index();
					$(".lunbo").css({"background":"url(./images/"+Play.url[Play.a]+") no-repeat center"},"backgroundSize","100%");
					$(".lunbanner .lunbo_font span").text(Play.font[Play.a]);
					// $(".lunbanner .lunbo_a").attr("href",Play.aurl[Play.a]);

				});
			},
			hua:function() {
				// var a = 0;
				// $(".hua_left").click(function() {
				// 	a+=16.66;
				// 	if(a > 50) {
				// 		a = 49.980000000000004;
				// 	}
				// 	$(".huadong_con").css("right",+a+"%");
				// });
				// $(".hua_right").click(function() {
				// 	a-=16.66;
				// 	if(a < 0) {
				// 		a = 0
				// 	}
				// 	$(".huadong_con").css("right",+a+"%");
				// });
				$(".hua_underline input").on("mousemove",function() {
					var a = 33.333;
					var drag = $(".hua_underline input")[0].value;
					var Drag = function () {
							a+=11.111;
							if(a > 66.666) {
								a = 66.666;
							}
							$(".huadong_con").css("right",+a+"%");
					}
					var Drag2 = function() {
						{
							a-=11.111;
							if(a < 0) {
								a = 0
							}
							$(".huadong_con").css("right",+a+"%");
						}
					}
					console.log(drag);
					if(drag < 50) {
						Drag(1);
					}
					if(drag < 39) {
						Drag(1);
					}
					if(drag < 28) {
						Drag(1);
					}
					if(drag > 50) {
						Drag2();
					}
					if(drag > 61) {
						Drag2();
					}
					if(drag > 72) {
						Drag2();
					}
				})
			},
			ewm:function() {
				$(".footer_a").click(function() {
					$(".lafite_ewm").fadeIn(500);
				});
				$(".lafite_ewm span").click(function() {
					$(".lafite_ewm").fadeOut(500);
				});
			}
		}
		var Play = new play()
		Play.Lun();
		Play.Inval();
		setInterval(Play.Inval,5000);
		Play.Click();
		Play.hua();
		Play.ewm();
	});
		AOS.init({
		  offset: 200,
		  duration: 600,
		  easing: 'ease-in-out-quart',
		  delay: 100,
		  once: true,
		});