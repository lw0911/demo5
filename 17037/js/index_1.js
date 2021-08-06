var F = true

$(function(){
	var Int = true;
	$(".Z_MenuList").css({display:'block',height:'400px'});
	$(".Z_TypeList").addClass('Z_TypeListhover');
	Int = setInterval(function(){
		$(".Z_MenuList").css({display:'none',height:'0'});
		$(".Z_TypeList").removeClass('Z_TypeListhover');
		},5000)
		
	//clearInterval(Int)
	$("#Z_TypeList").hover(function(){
		clearInterval(Int)
		},function(){
			$(".Z_MenuList").css({display:'none',height:'0'});
			$(".Z_TypeList").removeClass('Z_TypeListhover');
			})
	$('ul.Z_MenuList_ul>li').each(function(This){
		$(this).hover(function(){
			if(parseInt($('header').width())>=1190){
				W=true;
				}else{
					W=false;
					}
				NvW=W?980:530;
			$('.Z_SubList').addClass('box-shadow').css({'display': 'block'}).animate({'width': NvW},0);
			if(F){
				$('.subView').eq(This).css({'display': 'block'}).animate({'width': NvW},0);
				}
			F=false;
			})
		})
	})

 //变美项目下拉
$(function() {
	var bBtn = false;
	var bW=false;
	var navW=0;
	
	$('#Z_TypeList').hover(function() {
		$('.Z_MenuList').queue(function(next) {
			$(this).css({
				'display': 'block',
			});
			next();
		}).animate({
			'height': '+=400px'
		},
		100,
		function() {
			$('ul.Z_MenuList_ul>li').each(function() {
				
				$(this).hover(function() {
					
					$(this).queue(function(next) {
						
						var ins = $(this).index();


						$('.subView').css({
							'width': 0,
							'display': 'none'
						});
						
						function toNavW(){
							if (!bBtn) {
							if(parseInt($('header').width())>=1190){
								bW=true;
							}else{
								bW=false;
							}
							
							navW=bW?980:530;
							
							$('.Z_SubList').addClass('box-shadow');
							$('.Z_SubList').css({
								'display': 'block'
							}).animate({
								'width': navW
							},0);
							$('.subView').eq(ins).css({
								'display': 'block'
								
							}).animate({
								'width': navW
							},
							function() {
								bBtn = true;
							},0);
						} else {
							$('.subView').eq(ins).css({
								'display': 'block'
							}).animate({
								'width': navW
							},
							0);
						}
						}
						toNavW();
						$(document).bind('ready',toNavW);
						$(window).bind('resize',function(){
						    $(document).unbind('ready',toNavW);
							$(document).bind('ready',toNavW);
						});

						next();
					});

				});

			});

		});

	},
	function() {
		$(this).queue(function(next) {
			bBtn = false;
			$(this).find('.Z_MenuList').stop().css({
				'height': 0,
				'display': 'none'
			});
			$('.subView').css({
				'width': 0,
				'display': 'none'
			});
			$('.Z_SubList').removeClass('box-shadow');
			$('.Z_SubList').css({
				'width': 0,
				'display': 'none'
			});

			next();

		});

	});

});
$(document).ready(function(){

  $(".list-item0,#subView0").mouseover(function(){
    $(".list-item0").addClass("alt");
  });
  $(".list-item0,#subView0").mouseout(function(){
    $(".list-item0").removeClass("alt");
  });
  
  
  
  $(".list-item1,#subView1").mouseover(function(){
    $(".list-item1").addClass("alt");
	$(".list-item0 .list-xian").hide();
  });
  $(".list-item1,#subView1").mouseout(function(){
    $(".list-item1").removeClass("alt");
	$(".list-item0 .list-xian").show();
  });
  
  
  
  $(".list-item2,#subView2").mouseover(function(){
    $(".list-item2").addClass("alt");
	$(".list-item1 .list-xian").hide();
  });
  $(".list-item2,#subView2").mouseout(function(){
    $(".list-item2").removeClass("alt");
	$(".list-item1 .list-xian").show();
  });
  
  
  
  $(".list-item3,#subView3").mouseover(function(){
    $(".list-item3").addClass("alt");
	$(".list-item2 .list-xian").hide();
  });
  $(".list-item3,#subView3").mouseout(function(){
    $(".list-item3").removeClass("alt");
	$(".list-item2 .list-xian").show();
  });
  
  
  $(".list-item4,#subView4").mouseover(function(){
    $(".list-item4").addClass("alt");
	$(".list-item3 .list-xian").hide();
  });
  $(".list-item4,#subView4").mouseout(function(){
    $(".list-item4").removeClass("alt");
	$(".list-item3 .list-xian").show();
  });
  
  $(".list-item5,#subView5").mouseover(function(){
    $(".list-item5").addClass("alt");
	$(".list-item4 .list-xian").hide();
  });
  $(".list-item5,#subView5").mouseout(function(){
    $(".list-item5").removeClass("alt");
	$(".list-item4 .list-xian").show();
  });
  
  
  $(".list-item6,#subView6").mouseover(function(){
    $(".list-item6").addClass("alt");
	$(".list-item5 .list-xian").hide();
  });
  $(".list-item6,#subView6").mouseout(function(){
    $(".list-item6").removeClass("alt");
	$(".list-item5 .list-xian").show();
  });
  
  
  
    $(".list-item7,#subView7").mouseover(function(){
    $(".list-item7").addClass("alt");
	$(".list-item6 .list-xian").hide();
  });
  $(".list-item7,#subView7").mouseout(function(){
    $(".list-item7").removeClass("alt");
	$(".list-item6 .list-xian").show();
  });
  
  
    $(".list-item8,#subView8").mouseover(function(){
    $(".list-item8").addClass("alt");
	$(".list-item7 .list-xian").hide();
  });
  $(".list-item8,#subView8").mouseout(function(){
    $(".list-item8").removeClass("alt");
	$(".list-item7 .list-xian").show();
  });
  
  
    $(".list-item9,#subView9").mouseover(function(){
    $(".list-item9").addClass("alt");
	$(".list-item8 .list-xian").hide();
  });
  $(".list-item9,#subView9").mouseout(function(){
    $(".list-item9").removeClass("alt");
	$(".list-item8 .list-xian").show();
  });
  
  
  

});



(function($) {
	$.fn.extend({
   //导航效果封装
		nav:function() {
			this.hover(function() {
				$(this).stop().animate({
					'top': -$(this).height() / 2
				},
				300);
			},
			function() {
					$(this).stop().animate({
						'top': 0
					},
					300);
			});
	    },

	}) 
})(jQuery);




//banner效果封装
(function($) {
	$.fn.banner = function(o) {
		$.extend({
			time: 400,
			animStyle: true,
			addclass:addclass
		},
		o || {});
		var iNow = 0;
		var timer = null;
		var oDiv = $(this);
		var oUl = oDiv.children('ul');
		var aLi = $('li', oUl);
		var oneSize = aLi.eq(0).width();
		var animStyle = o.animStyle ? 'left': 'opacity';
		var addclass=o.addclass;
		//alert(oneSize);
		var time = o.time;
		oDiv.css({
			'position': 'relative'
		});
		$('<div class="banner_index"><ul></ul></div>').appendTo(oDiv);
		var bannerIndex = $('.banner_index ul', oDiv);

		aLi.each(function(i) {
			if (animStyle == 'opacity') {
				if ($(this).index() == 0) {
					$(this).css({
						'opacity': 1,
						'z-index':1
					});
				
				} else {
					$(this).css({
						'opacity': 0
					});
					
				}
				$(this).css({
					'position': 'absolute',
					'left': 0,
					'top': 0
				});
			} else {
				oUl.css({
					'width': oneSize * aLi.size(),
					'position': 'absolute',
					'left': 0
				});
			}
			$('<li></li>').appendTo(bannerIndex);
			//console.log(oDiv.width() + '||' + $(this).index() + '||' + oneSize);

		});


		$('li', bannerIndex).css({
			'background-image': 'url(hm_images/banner_index_white.png)',
		});

		$('li', bannerIndex).eq(iNow).css({
			'background-image': 'url(hm_images/banner_index_red.png)'
		});
        			
		aLi.eq(iNow).addClass(addclass);
		
		var _this = aLi;
		function fnNext(iNow) {
			_this.eq(iNow).addClass(addclass).siblings('li').removeClass(addclass);
			
			$('li', bannerIndex).eq(iNow).css({
				'background-image': 'url(hm_images/banner_index_red.png)'
			}).siblings('li').css({
				'background-image': 'url(hm_images/banner_index_white.png)'
			});
			if (!o.animStyle) {
				for (var i = 0; i < _this.length; i++) {
					if (i > iNow) {
						_this.eq(i).stop(true, true).animate({
							'opacity': 0,
							'z-index':0,
						},
						time);
					} else if (i < iNow) {
						_this.eq(i).stop(true, true).animate({
							'opacity': 0,
							'z-index':0,
						},
						time);
					} else {
						_this.eq(i).stop(true, true).animate({

							'opacity': 1,
							'z-index':1,
						},
						time);
					}
				}
			} else {
				oUl.stop().animate({
					'left': -iNow * oneSize
				});
			}

		}

		timer = setInterval(function() {
			if (iNow == _this.length - 1) {
				iNow = 0
			} else {
				iNow++;

			}
			fnNext(iNow);
		},
		7000);

		$('li', bannerIndex).each(function() {

			$(this).mouseover(function() {
				clearInterval(timer);
				iNow = $(this).index();
				fnNext(iNow);				
				
			});
			$(this).mouseout(function() {	
				clearInterval(timer);
				timer = setInterval(function() {
					if (iNow == _this.length - 1) {
						iNow = 0
					} else {
						iNow++;

					}
					fnNext(iNow);
				},
				7000);
			});

		});
	}
})(jQuery);

//按钮banner
$(function() {
	//var sWidth = $("#focusindex").width(); //获取焦点图的宽度（显示面积）
	var len = $("#focusindex ul li").length; //获取焦点图个数
	var index = 0;
	var picTimer;
	
	//以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
	var btn = "<div class='btn'>";
	for(var i=0; i < len; i++) {
		btn += "<span></span>";
	}
	btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
	$("#focusindex").append(btn);

	//为小按钮添加鼠标滑入事件，以显示相应的内容
	$("#focusindex .btn span").css("opacity",1).mouseover(function() {
		index = $("#focusindex .btn span").index(this);
		showPics(index);
	}).eq(0).trigger("mouseover");

	//上一页、下一页按钮透明度处理
/*	$("#focusindex").hover(function() {
		$("#focusindex .pre").animate({"left":"10%","opacity":"1"},300);
		$("#focusindex .next").animate({"right":"10%","opacity":"1"},300);
	},function() {
		$("#focusindex .pre").animate({"left":"0%","opacity":"0"},300);
		$("#focusindex .next").animate({"right":"0%","opacity":"0"},300);
	});*/

	//上一页按钮
	$("#focusindex .pre").click(function() {
		index -= 1;
		if(index == -1) {index = len - 1;}
		showPics(index);
	});

	//下一页按钮
	$("#focusindex .next").click(function() {
		index += 1;
		if(index == len) {index = 0;}
		showPics(index);
	});
	
	//IPAI
	$("#focusindex").on("swiperight",function(){
		index -= 1;
		if(index == -1) {index = len - 1;}
		showPics(index);
	});
$("#focusindex").on("swipeleft",function(){
		index += 1;
		if(index == len) {index = 0;}
		showPics(index);
	});


	//本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
	//$("#focusindex ul").css("width",sWidth * (len));
	
	//鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
	$("#focusindex").hover(function() {
		clearInterval(picTimer);
	},function() {
		picTimer = setInterval(function() {
			showPics(index);
			index++;
			if(index == len) {index = 0;}
		},3000); //此4000代表自动播放的间隔，单位：毫秒
	}).trigger("mouseleave");
	
	//显示图片函数，根据接收的index值显示相应的内容
	function showPics(index) { //普通切换
		//var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
		//$("#focusindex ul").stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
		//$("#focusindex .btn span").removeClass("on").eq(index).addClass("on"); //为当前的按钮切换到选中的效果
		$("#focusindex .btn span").stop(true,false).removeClass("on").eq(index).stop(true,false).addClass("on"); //为当前的按钮切换到选中的效果
		$("#focusindex ul li").stop(true,false).animate({"opacity":"0"},1500).css("z-index",0).removeClass("bannerdh").eq(index).stop(true,false).animate({"opacity":"1"},1500).addClass("bannerdh").css("z-index",1); //为当前的按钮切换到选中的效果
	}
});




//手风琴效果
(function($) {
	$.fn.shoufq = function(o) {
		o = $.extend({
			aniBeforeWidth: '0',
			aniAfterWidth: '0'
		},
		o);
		var _this = this;

		var aBW = o.aniBeforeWidth;
		var aAW = o.aniAfterWidth;
		var v = o.aniStyle;
		return _this.each(function() {
			$(this).mouseover(function() {
				$(this).stop().animate({
					width: aAW
				},
				300).siblings().stop().animate({
					width: aBW
				},
				300);
			});
		});
	}
})(jQuery);

$(function() {
	
	
	//菜单效果
	$('.mbox1>ul>li').each(function() {
        $(this).hover(function(){
			$('.mbox1 .move_bg').remove();
			var oDiv=$("<div class='move_bg'></div>");
			oDiv.insertBefore($(this).children('a'));
			var oMove=$(this).find('.move_bg');
			oMove.animate({'left':20},280,function(){
				oMove.animate({'left':0},280);
			})
		},function(){
			$('.mbox1 .move_bg').remove();
		});
    });
	//banner
    //$('.section_banner1_box').banner({time:400,animStyle:false,addclass:'bannerdh'});
	//下拉项目banner
	$('.object_banner1').banner({time:600,animStyle:true});
	$('.object_banner2').banner({time:600,animStyle:true});
	$('.object_banner3').banner({time:600,animStyle:true});
	$('.object_banner4').banner({time:600,animStyle:true});
	$('.object_banner5').banner({time:600,animStyle:true});
	//专家
	$('.focuszjimg').banner({time:400,animStyle:false});
	//专题页
	$('#ztbox1c').banner({time:400,animStyle:false});
	

	
	$('.s4_box1_into').nav();
	
})

$(function(){
	//美丽达人
	function fnNice(){		
		if(parseInt($('.s4_box1').width())>=1200){
			$('.s4_c_in').shoufq({aniBeforeWidth:'222px',aniAfterWidth: '736px'});
		}else{
			$('.s4_c_in').shoufq({aniBeforeWidth:'222px',aniAfterWidth: '736px'});
		}
	}
	fnNice();
	$(window).bind('resize',function(){	
	
		if(parseInt($('.s4_box1').width())>=1200){
			$('.s4_c_in').css({width:222});
			$('.s4_c_in').first().css({width:736});
		}else{
			$('.s4_c_in').css({width:222});
			$('.s4_c_in').first().css({width:736});
		}
		
		fnNice();
	})
	
})

//求美案例

		$(function(){
		$(".qmfdj").click(function(){
			var _this = $(this);//将当前的pimg元素作为_this传入函数
			imgShow("#outerdiv", "#innerdiv", "#bigimg", _this);
		});
	});
	
	
	function imgShow(outerdiv, innerdiv, bigimg, _this){
	var src = _this.attr("src");//获取当前点击的pimg元素中的src属性
	$(bigimg).attr("src", src);//设置#bigimg元素的src属性

        /*获取当前点击图片的真实大小，并显示弹出层及大图*/
	$("<img/>").attr("src", src).load(function(){
		var windowW = $(window).width();//获取当前窗口宽度
		var windowH = $(window).height();//获取当前窗口高度
		var realWidth = this.width;//获取图片真实宽度
		var realHeight = this.height;//获取图片真实高度
		var imgWidth, imgHeight;
		var scale = 0.8;//缩放尺寸，当图片真实宽度和高度大于窗口宽度和高度时进行缩放
		
		if(realHeight>windowH*scale) {//判断图片高度
			imgHeight = windowH*scale;//如大于窗口高度，图片高度进行缩放
			imgWidth = imgHeight/realHeight*realWidth;//等比例缩放宽度
			if(imgWidth>windowW*scale) {//如宽度扔大于窗口宽度
				imgWidth = windowW*scale;//再对宽度进行缩放
			}
		} else if(realWidth>windowW*scale) {//如图片高度合适，判断图片宽度
			imgWidth = windowW*scale;//如大于窗口宽度，图片宽度进行缩放
                        imgHeight = imgWidth/realWidth*realHeight;//等比例缩放高度
		} else {//如果图片真实高度和宽度都符合要求，高宽不变
			imgWidth = realWidth;
			imgHeight = realHeight;
		}
                $(bigimg).css("width",imgWidth);//以最终的宽度对图片缩放
		
		var w = (windowW-imgWidth)/2;//计算图片与窗口左边距
		var h = (windowH-imgHeight)/2;//计算图片与窗口上边距
		$(innerdiv).css({"top":h, "left":w});//设置#innerdiv的top和left属性
		$(outerdiv).fadeIn("fast");//淡入显示#outerdiv及.pimg
	});
	
	$(outerdiv).click(function(){//再次点击淡出消失弹出层
		$(this).fadeOut("fast");
	});
}



ShowPre.prototype = {
	move:function(test){ //婊戝姩鏂规硶
		
		var that = this;
		var pos = this.c*this.w;
		//document.title = (test&&that.timer);
		if(test&&that.timer){
			clearInterval(that.timer);
		};
		//褰撳墠搴忓彿鍥炬爣
		if(that.numIco){ 
			that.numIcoLi.removeClass("on");
			var numC = that.c;
			if(that.loop&&(that.c==(this.l-1))){
				numC= 0;	
			};
			that.numIcoLi.eq(numC).addClass("on");
		};

		this.box.stop();
		this.box.animate({left:-pos},function(){
			if(test&&that.auto){
				that.autoPlay();
			};
			if(that.loop&&that.c==that.maxL){
				that.c = 0;
				that.box.css({left:0})
			};
		});
		if(that.bigBox)return false;
		//璁剧疆澶у浘鍔犺浇搴忓彿
		if(that.loadNumBox){
			var loadC = parseInt(that.c)+1;
				loadC = loadC<10?"0"+loadC:loadC;
				that.loadNumBox.html(loadC);
		};

	},
	loadImg:function(test){ //鍔犺浇澶у浘鏂规硶
		var that = this;
		var _src = this.li.eq(that.loadNum).attr("bsrc"),bigTh3=null,bigTh4=null,bigText=null;
		if(that.li.eq(that.loadNum).attr("data-h")){
			//$("#bigT h3").html(that.li.eq(that.loadNum).attr("data-h"));
			var bigTh3 = $("#bigT h3");
			$("#bigT").hide();
			bigTh3.html("");
		};
		if(that.li.eq(that.loadNum).attr("data-m")){
			//$("#bigT h4").html(that.li.eq(that.loadNum).attr("data-m"));
			var bigTh4 = $("#bigT h4");
			$("#bigT").hide();
				bigTh4.html("");
		};
		if(that.li.eq(that.loadNum).attr("data-text")){
			//$("#bigText").html(that.li.eq(that.loadNum).attr("data-text"));
			var bigText = $("#bigText");
				bigText.html("").hide();
		};
		var img = new Image();
			$(img).hide();
			//loading dom鎿嶄綔(鍒嗛娆″姞杞藉拰鍚庨潰鍔犺浇锛屾牴鎹偣鍑绘搷浣滆缃繍鍔ㄦ柟鍚?)
			if(that.deInit){
				var le = 0;
				that.deInit = false;
				that.bigBox.html("<div class='loading'></div><div class='loading'></div>");
			}else{
				if(test!="pre"){
					var le = -1230;
					that.bigBox.append("<div class='loading'></div>");
				}else{
					var le = 1230;
					that.bigBox.find(".loading").before("<div class='loading'></div>");
					that.bigBox.css({"margin-left":-1230});
					le = 0;
				};				
			};
			that.bigBox.animate({"margin-left":le},function(){
				$(img).bind("load",function(){
					//鍒ゆ柇鍑虹幇鏂瑰悜
					if(test!="pre"){
						var n = 1,oldN = 0;
					}else{
						var n = 0,oldN = 1;
					};
					that.bigBox.find(".loading").eq(n).html(img);
					that.bigBox.find(".loading").eq(oldN).remove();
					that.bigBox.css({"margin-left":0});
					$(this).fadeIn(200,function(){
						if(bigTh3){
							$("#bigT").fadeIn()
							bigTh3.html(that.li.eq(that.loadNum).attr("data-h"));
						};
						if(bigTh4){
							$("#bigT").fadeIn()
							bigTh4.html(that.li.eq(that.loadNum).attr("data-m"));
						};
						if(bigText){
							bigText.html(that.li.eq(that.loadNum).attr("data-text")).fadeIn();
						};
					});
				});
				img.src = _src;
			});
			//娣诲姞褰撳墠鍔犺浇搴忓彿
			that.li.removeClass("on");
			that.li.eq(that.loadNum).addClass("on");
			if(that.loadNumBox){
				var loadC = parseInt(that.loadNum)+1;
					loadC = loadC<10?"0"+loadC:loadC;
					that.loadNumBox.html(loadC);
			};
			
			
	},
	autoPlay:function(){ //鑷姩鎾斁鏂规硶
		var that =this;

		that.timer = setInterval(function(){
			that.c<that.maxL?that.c++:that.c=0;
			that.move();
		},4000);
	}
}

	$(document).ready(function(){
		$('.wx').hover(function(){
			$(this).find('.wx_cont').show();
		},function(){
		$(this).find('.wx_cont').hide();
		});
	});
	$(document).ready(function(){
		$('.rx').hover(function(){
			$(this).find('.rx_cont').show();
		},function(){
		$(this).find('.rx_cont').hide();
		});
	});