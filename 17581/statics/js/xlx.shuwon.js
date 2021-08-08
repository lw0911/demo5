var xlx = {
	init: function() {
		switch(jsFun) {
			case 'home':
				xlx.homePage();
				break;
			case 'service':
				xlx.servicePage();
				break;
			case 'brandCenter':
				xlx.brandCenterPage();
				break;
			case 'joinUs':
				xlx.joinUsPage();
				break;
			case 'custom':
				xlx.customPage();
				break;
		}
	},
	homePage: function() {
		if((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)) {
			//			ProductDisplay_ifIE();
			
		} else {
			ProductDisplay_elseIE();
			
		};

		function ProductDisplay_elseIE() {
			//图片悬浮动画
			//动画分四段
			function move1() {
				var x = 1,
					y = 1,
					x2 = 200,
					y2 = 100;
				var timer = setInterval(function() {
					if(x < 51) {
						x++;
						y++;
						x2--;
						y2--;
					} else {
						move2();
						clearInterval(timer)
					}
					var transform = 'translateX(' + x + 'px) translateY(' + y + 'px)'
					$(".tracker").css({
						transform: transform
					})
					$("line").attr({
						x2: x2
					});
					$("line").attr({
						y2: y2
					})
				}, 70)
			}

			function move2() {
				var x = 51,
					y = 51,
					x2 = 150,
					y2 = 50;
				var timer = setInterval(function() {
					if(x < 101) {
						x++;
						y--;
						x2--;
						y2++;
					} else {
						move3()
						clearInterval(timer)
					}
					var transform = 'translateX(' + x + 'px) translateY(' + y + 'px)'
					$(".tracker").css({
						transform: transform
					})
					$("line").attr({
						x2: x2
					});
					$("line").attr({
						y2: y2
					})
				}, 70)
			}

			function move3() {
				var x = 101,
					y = 1,
					x2 = 100,
					y2 = 100;
				var timer = setInterval(function() {
					if(x > 50) {
						x--;
						y--;
						x2++;
						y2++;
					} else {
						move4()
						clearInterval(timer)
					}
					var transform = 'translateX(' + x + 'px) translateY(' + y + 'px)'
					$(".tracker").css({
						transform: transform
					})
					$("line").attr({
						x2: x2
					});
					$("line").attr({
						y2: y2
					})
				}, 70)
			}

			function move4() {
				var x = 51,
					y = -50,
					x2 = 150,
					y2 = 150;
				var timer = setInterval(function() {
					if(x > 0) {
						x--;
						y++;
						x2++;
						y2--;
					} else {
						move1()
						clearInterval(timer)
					}
					var transform = 'translateX(' + x + 'px) translateY(' + y + 'px)'
					$(".tracker").css({
						transform: transform
					})
					$("line").attr({
						x2: x2
					});
					$("line").attr({
						y2: y2
					})
				}, 70)
			}
			$(window).load(bannerShow);
			/*banner的进场动画*/
			function bannerShow() {
				$(".shade").addClass("show");
				bannerSlide();
			}
			//banner
			function bannerSlide() {
				var bannerSwiper = new Swiper('.banner', {
					prevButton: '.banner-page .b_l',
					nextButton: '.banner-page .b_r',
					pagination: '.banner-pages',
					paginationClickable: true,
					speed: 2000,
					autoplay: 7000,
					onSlideChangeStart: function(swiper) {
						var i = swiper.activeIndex + 1;
						$(".banner .swiper-slide").removeClass("cur");
						$(".banner-page .page-now").html(i);
						$(".banner .tracker").removeClass("show");
					},
					onSlideChangeEnd: function(swiper) {
						if(bannerSwiper.autoplaying == true) { //是不是自动播放
							$(".banner .swiper-slide-active").addClass("cur");
						}
						//漂浮球进场
						$(".banner .tracker").addClass("show");
					},
					onAutoplayStop: function(swiper) {
						$(".banner .swiper-slide-active").removeClass("cur");
					},
				});
				//页码
				var page_all = $('.banner ul li').size();
				$(".banner-page .page-all").html(page_all);
				//进度条
				$(".banner .swiper-slide-active").addClass("cur");
				//第一个banner文字的进场动画
				$(".banner .banner-text .text-box1").addClass("anim");
				//漂浮球开始
				if(_w > 1024) {
					$(".banner .swiper-slide").addClass("swiper-no-swiping");
					//判断自动播放
					$(".banner .banner-text,.banner .tracker").hover(function() {
						bannerSwiper.stopAutoplay();
						$(".banner .swiper-slide").removeClass("cur");
					}, function() {
						bannerSwiper.startAutoplay();
						$(".banner .swiper-slide").addClass("cur");
					});
					move1();
					//圈圈鼠标移动上去，图片出现
					$(".pointer").hover(function() {
							$(".pointer .product-bubble").fadeIn("slow")
						}, function() {
							$(".pointer .product-bubble").fadeOut("slow")
						})
						//漂浮球进场
					setTimeout(function() {
						$(".banner .tracker").addClass("show");
					}, 1500);
				}
			}
		}
	},
	servicePage: function() {
		//页面跳转后，判断滚动位置
		$(window).load(function(){
			var scroll_to = location.hash;
			if(scroll_to != "") {
				scroll_to = scroll_to.substr(1);
			
				scroll_to = ".main" + scroll_to;
				var scroll_distance = $(scroll_to).offset().top - 70;
			
				$("body,html").animate({
					scrollTop: scroll_distance
				}, 1000);
			} else {

			}
		})
		//服务流程
		$(".service-center .main1-bottom .img-box img").eq($(".service-center .list ul li.active").index()).fadeIn().siblings().fadeOut();
		$(".service-center .list ul li").mouseover(function() {
			$(this).addClass("active").siblings().removeClass("active");
			var i = $(this).index();
			$(".service-center .main1-bottom .img-box img").eq(i).fadeIn().siblings().fadeOut();
		})
			//问题反馈
			//表单验证
		verifyForm();

		//联系我们 map
		
		var map = new BMap.Map("map");
		map.setMapStyle({
			style: 'normal',
		});
		map.centerAndZoom(points[0][0], 15);
		var myIcon = new BMap.Icon("images/dian.png"/*tpa=http://r060.mobanvip.com/statics/js/images/dian.png*/, new BMap.Size(51, 81)); //自定义标注
		map.enableDragging(); //允许拖动
		map.disableScrollWheelZoom(); //禁止滚轮缩放
		if(_w<=1024){
			map.disableDragging(); //禁止拖动
		}
		//自定义函数添加点
		function addMarker(point, i) {
			var marker = new BMap.Marker(point, { // 创建标注
				//				icon: myIcon
			});
			map.addOverlay(marker); // 将标注添加到地图中   
			marker.setAnimation(BMAP_ANIMATION_BOUNCE); //添加标注动画
		}
		for(var i = 0; i < points.length; i++) {
			for(var j = 0; j < points[i].length; j++) {
				addMarker(points[i][j], i);
			}
		}
		var navigationControl = new BMap.NavigationControl({
			// 靠左上角位置
			anchor: BMAP_ANCHOR_TOP_LEFT,
			// LARGE类型
			type: BMAP_NAVIGATION_CONTROL_LARGE,
			// 启用显示定位
			enableGeolocation: true
		});
		// 添加定位控件
		map.addControl(navigationControl);

		// 定位判断
		map.addControl(geolocationControl);
		var geolocationControl = new BMap.GeolocationControl();
		geolocationControl.addEventListener("locationSuccess", function(e) {
			// 定位成功事件
			var address = '';
			address += e.addressComponent.province;
			address += e.addressComponent.city;
			address += e.addressComponent.district;
			address += e.addressComponent.street;
			address += e.addressComponent.streetNumber;
			alert("当前定位地址为：" + address);
		});
		geolocationControl.addEventListener("locationError", function(e) {
			// 定位失败事件
			alert(e.message);
		});
	},
	//品牌中心
	brandCenterPage: function() {
		//页面跳转后，判断滚动位置
		$(window).load(function(){
			var scroll_to = location.hash;
			if(scroll_to != "") {
				scroll_to = parseInt(scroll_to.substr(1));
	
				scroll_to = ".box" + scroll_to;
				var scroll_distance = $(scroll_to).offset().top - 70;
			
				$("body,html").animate({
					scrollTop: scroll_distance
				}, 1000);
			} else {	
			}
			
		})
		var mySwiper = new Swiper('.swiper-container', {
			speed: 1000,
			// 如果需要前进后退按钮
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
		})
	},
	joinUsPage: function() {
		//页面跳转后，判断滚动位置
		$(window).load(function(){
			var scroll_to = location.hash;
			if(scroll_to != "") {
				scroll_to = scroll_to.substr(1);
				scroll_to = ".box" + scroll_to;
				var scroll_distance = $(scroll_to).offset().top-70;
				$("body,html").animate({
					scrollTop: scroll_distance
				}, 1000);
				$(".banner-in .banner-mask .tabs-btn a:last-of-type").addClass("active").siblings().removeClass("active");
			} else {
				
			}
		})
		$(".banner-in .banner-mask .tabs-btn a").click(function(){
			window.location.reload();
		})
		verifyForm()
			//		提交表单
		$(".joinus-main .apply-to form .sub-btn").click(function(e) {

		})
	},
	customPage: function() {
		verifyForm()
			//提交表单
		$(".joinus-main .apply-to form .sub-btn").click(function() {

		})
	},
}

$(function() {
	$("head").append('<link href="../../favicon.ico"/*tpa=http://r060.mobanvip.com/favicon.ico*/ rel="shortcut icon">');
	jsFun = $("#JS").attr('page');
	Starting_F();
	xlx.init();
	//	$(window).resize(function() {
	//		Starting_F();
	//	})
})

function Starting_F() {
	//$("header").html("").load("http://r060.mobanvip.com/statics/js/header.html",header_load);
	//$("footer").html("").load("http://r060.mobanvip.com/statics/js/footer.html");
	
	_h = $(window).height();
	_w = $(window).width();
	$(".allScreen").css("height", _h);

	//IEtips
	//if IE
	$(".IEtips .brn_off").click(function() {
			$(".IEtips").slideUp();
		})
		//shade
	if(jsFun != "home") {
		$(window).load(function() {
			$(".shade").addClass("show");
		});
	}
	
//	加载完成执行
	header_load()
	function header_load(){
		//nav点击改变
		$("header").on("click", "#navToggle", function(e) {
			$(this).toggleClass("expanded");
			$("header").toggleClass("navOpen");
			if($("header").hasClass("navOpen")) {
				canScroll = true;
			} else {
				canScroll = false;
			}
			e.stopPropagation(); //阻止冒泡 
		})
		if(_w > 767) {
			$("header").on("click", function() {
				if($("header").hasClass("navOpen")) {
					$("#navToggle").toggleClass("expanded");
					$("header").toggleClass("navOpen");
					canScroll = false;
				}
			});
		}
		//nav滚动改变
		function headerChange() {
			if(_w > 1204) {
				var scroll_top = $(window).scrollTop();
				if(jsFun == "home") {
					var banner_h = $(".banner").height();
				} else {
					var banner_h = $(".banner-in").height();
				}
				var header_h = $("header").height();
				if(scroll_top > banner_h - header_h - 10) {
					$("header").addClass("toTop");
				} else {
					$("header").removeClass("toTop");
				}
			} else {
				$("header").addClass("toTop");
			}
		}
		headerChange();
		$(window).scroll(headerChange);
		//导航指向不可滑动
		var canScroll = false;
		var scrollTop_num = 0
		$(window).scroll(function() {
			if(canScroll == true) {
				$(window).scrollTop(scrollTop_num);
			} else {
				scrollTop_num = $(window).scrollTop();
			}
		});
		$(function(){
			//导航点击切换刷新页面
			if(_w < 768) {
				$("http://r060.mobanvip.com/statics/js/header .nav .nav-ul1 a.a1").attr("href", "javascript:void(0);");
				$("header").on("click",".nav .nav-ul1 li a",function(){
					$(this).parent("li").addClass("cur").siblings().removeClass("cur");
				})
			} else {
				$("header").on("click",".nav .nav-ul1 li a",function(){
					window.location.reload();
				});
			}
		})
		
	}
	//置顶
	$("footer").on("click",".zhiding",function() {
		var scroll_offset = $(".zhidingUP").offset();
		$("body,html").animate({
			scrollTop: scroll_offset.top
		}, 600);
	})
	
	//弹出框
	if(_w<=1024){
		$(".show-list .go_shop img").attr("src","images/go-shop1.png"/*tpa=http://r060.mobanvip.com/statics/js/images/go-shop1.png*/);
	}
}

//表单验证验证
function verifyForm() {
	//姓名
	$("#user").blur(function() {
		var names = /^[\u4E00-\u9FA5]{2,5}$/; //验证规则
		var str = $.trim($("#user").val());
		var r = str.match(names);
		if(str == "") {
			$(this).siblings(".btn_Prompt").removeClass("error Correct");
			$(this).siblings(".btn_Prompt").addClass("empty");
			$(this).parent().addClass("err")
			$(".text-user").html("姓名不能为空")
		} else {
			if(r != null) {
				$(this).siblings(".btn_Prompt").removeClass("error empty");
				$(this).siblings(".btn_Prompt").addClass("Correct");
				$(this).parent().removeClass("err");
				$(".text-user").html("");
			} else {
				$(this).siblings(".btn_Prompt").removeClass("empty Correct");
				$(this).siblings(".btn_Prompt").addClass("error");
				$(this).parent().addClass("err")
				$(".text-user").html("姓名输入错误");
			}
		}
	});

	//电话
	$("#phone").blur(function() {
		var phone = /^(13|15|18|14|17)[0-9]{9}$/; //验证规则
		var FixedPhones = "^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$"
		var str = $.trim($("#phone").val());
		var r = str.match(phone);
		var rf = str.match(FixedPhones);
		if(str == "") {
			$(this).siblings(".btn_Prompt").removeClass("error Correct");
			$(this).siblings(".btn_Prompt").addClass("empty");
			$(this).parent().addClass("err")
			$(".text-phone").html("联系方式不能为空")
		} else {
			if((r != null) || (rf != null)) {
				$(this).siblings(".btn_Prompt").removeClass("error empty");
				$(this).siblings(".btn_Prompt").addClass("Correct");
				$(this).parent().removeClass("err");
				$(".text-phone").html("");
			} else {
				$(this).siblings(".btn_Prompt").removeClass("empty Correct");
				$(this).siblings(".btn_Prompt").addClass("error");
				$(this).parent().addClass("err")
				$(".text-phone").html("请输入正确的手机号码/座机号码");
			}
		}
	});
	//store
	$("#store").blur(function() {
		var str = $.trim($("#store").val());
		if(str == "") {
			$(this).siblings(".btn_Prompt").removeClass("error Correct");
			$(this).siblings(".btn_Prompt").addClass("empty");
			$(this).parent().addClass("err");
			$(".text-store").html("所购店名不能为空")
		} else {
			$(this).siblings(".btn_Prompt").removeClass("error empty");
			$(this).siblings(".btn_Prompt").addClass("Correct");
			$(this).parent().removeClass("err");
			$(".text-store").html("");
		}
	});
	//time
	$("#time").blur(function() {
		var str = $.trim($("#time").val());
		if(str == "") {
			$(this).siblings(".btn_Prompt").removeClass("error Correct");
			$(this).siblings(".btn_Prompt").addClass("empty");
			$(this).parent().addClass("err");
			$(".text-time").html("购买时间不能为空")
		} else {
			$(this).siblings(".btn_Prompt").removeClass("error empty");
			$(this).siblings(".btn_Prompt").addClass("Correct");
			$(this).parent().removeClass("err");
			$(".text-time").html("");
		}
	});
	//txts
	$("#txts").blur(function() {
		var str = $.trim($("#txts").val());
		if(str == "") {
			$(this).siblings(".btn_Prompt").removeClass("error Correct");
			$(this).siblings(".btn_Prompt").addClass("empty");
			$(this).parent().addClass("err");
			$(".text-txts").html("保修内容不能为空")
		} else {
			$(this).siblings(".btn_Prompt").removeClass("error empty");
			$(this).siblings(".btn_Prompt").addClass("Correct");
			$(this).parent().removeClass("err");
			$(".text-txts").html("");
		}
	});
	//email
	$("#email").blur(function() {
		var email = "^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$"
		var str = $("#email").val();
		str = $.trim(str);
		var r = str.match(email);
		if(str == "") {
			$(this).siblings(".btn_Prompt").removeClass("error Correct");
			$(this).siblings(".btn_Prompt").addClass("empty");
			$(this).parent().addClass("err")
			$(".text-email").html("邮箱不能为空")
		} else {
			if(r != null) {
				$(this).siblings(".btn_Prompt").removeClass("error empty");
				$(this).siblings(".btn_Prompt").addClass("Correct");
				$(this).parent().removeClass("err");
				$(".text-email").html("");
			} else {
				$(this).siblings(".btn_Prompt").removeClass("empty Correct");
				$(this).siblings(".btn_Prompt").addClass("error");
				$(this).parent().addClass("err")
				$(".text-email").html("请输入正确的邮箱");
			}
		}
	})
	//select验证 地区和意向
	function isSelect(me){
		if($(me).val() == "default"){
		
			$(me).parents(".input-box").addClass("err");
			$(me).parent().siblings(".btn_Prompt").removeClass("error Correct");
			$(me).parent().siblings(".btn_Prompt").addClass("empty");
			$(me).parents(".input-box").find(".err-text").html("请选择地区")
		}else{
		
			$(me).parents(".input-box").removeClass("err");
			$(me).parent().siblings(".btn_Prompt").removeClass("error empty");
			$(me).parent().siblings(".btn_Prompt").addClass("Correct");
			$(me).parents(".input-box").find(".err-text").html("")
		}
	}
	$("#province").change(function(){
		var me = this;
		isSelect(me);
	});
	$("#agency").change(function(){
		var me = this;
		isSelect(me);
	});
	$(".submit-btn").click(function(){
		var me1 = $("#province");
		isSelect(me1);
		var me2 = $("#agency");
		isSelect(me2);
	});
	//地址
	$("#address").blur(function(){
		var str = $("#address").val();
		str = $.trim(str);
		if(str == ""){
			$(this).siblings(".btn_Prompt").removeClass("error Correct");
			$(this).siblings(".btn_Prompt").addClass("empty");
			$(this).parent().addClass("err");
			$(".text-address").html("请输入地址")
		} else {
			$(this).siblings(".btn_Prompt").removeClass("error empty");
			$(this).siblings(".btn_Prompt").addClass("Correct");
			$(this).parent().removeClass("err");
			$(".text-address").html("");
		}
	});
}