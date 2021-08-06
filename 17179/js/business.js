$(window).load(function(){
	var cpuoffset = $(".cluster_c2p").offset().top;//第二屏距离顶部偏移距离
	var lastoffset = $(".smart").offset().top;//第五屏距离顶部偏移距离
	var sixoffset = $(".print").offset().top;//第六屏距离顶部偏移距离
	var $btn = $("#list1").find(".svg_box");
	var s = 1;
	$(window).scroll(function(){//屏幕滚动事件
		var thisscrolltop = $(this).scrollTop();//屏幕滚动距离
		if(thisscrolltop > cpuoffset -100){
			if(s == 1){
				s = 2;
				$("#cpu").animate({left:"8px"},500,function(){//第二屏CPU滚动特效
					$("#svg0").animate({width:"344px"},500,function(){//第二屏二级菜单滚动特效
						$btn.show();
					});
				});
			}
		}
		if(thisscrolltop > lastoffset - 100){
			$("#smart_start").animate({top:-2000},2000);//第五屏滚动特效
		}
		if(thisscrolltop > sixoffset - 100){
			$(".print .p-title").addClass('active');//第六屏滚动特效
			$(".print .title-6").addClass('active');
		}
		else{
			$(".print .p-title").removeClass('active');//第六屏滚动特效
			$(".print .title-6").removeClass('active');
			}
	});
	
});

$(function(){
	var $btn = $("#list1").find(".svg_box");
	var $btn_h = $("#svg0").find("g");
	var listwidth = ["583px","673px","605px"];//三级菜单的宽度
	var $last_list = $("#list1 svg").not("#svg0").find("text");
	$('#c2p .stage-1-title').addClass('active');//第一屏特效；
	$('#c2p .stage-2-title').addClass('active');//第一屏特效；
	$btn.hover(function(){
		var dataNUM = $(this).data("num");//获取当前点击按钮的data-num值
		//$('#imgd').addClass('active');
		$btn_h.eq(dataNUM-1).find("text").css({fill:"#fff"});
		$btn_h.eq(dataNUM-1).find("path").css({fill:"rgba(233,84,4,.8)"});
		$("#svg" + dataNUM).animate({width:listwidth[dataNUM-1]},500);//对应的id宽度在500毫秒变为对应的宽度
		$('#imgd' + dataNUM).addClass('active');
	},function(){
		var dataNUM = $(this).data("num");
		$btn_h.eq(dataNUM-1).find("text").css({fill:"#1977be"});
		$btn_h.eq(dataNUM-1).find("path").css({fill:"rgba(255,255,255,.8)"});
		$("#svg" + dataNUM).animate({width:0},500);//对应的id宽度在500毫秒变为0
		$('#imgd' + dataNUM).removeClass('active');
	}).trigger("mouseout");
	$last_list.hover(function(){//鼠标经过菜单时的状态
		$(this).css({fill:"#fff"})//文字变色
				.parent().children("path").css({fill:"rgba(233,84,4,.8)"});//路径填充色改变
	},function(){
		$(this).css({fill:"#1977be"})//文字变色
				.parent().children("path").css({fill:"rgba(255,255,255,.8)"});//路径填充色改变
	}).trigger("mouseout");
	
	//第三屏特效
	var $mask = $("#mask");//遮罩层
	var winwidth = $(window).width();
	var left = (winwidth - 1200)/2;//计算遮罩层偏移距离
	$mask.width(winwidth);
	$mask.css({left:-left});
	
	$(".ecological .ecological_box .ecological_content div").hover(function(){//鼠标经过星球特效
		$(this).css({zIndex:3}).find("ul").show();//当前模块z-index突出，菜单列表显示
		$mask.show();//遮罩显示
	},function(){
		$(this).css({zIndex:1}).find("ul").hide();//当前模块z-index恢复，菜单列表隐藏
		$mask.hide();//遮罩隐藏
	}).trigger("mouseout");
	
	//第五屏切换特效
	$(".smart .smart_btn ul li").mouseover(function(){
		var thisindex = $(this).index();//获取当前鼠标经过元素索引号
		$(this).addClass("cur").siblings().removeClass("cur");//添加class，移除兄弟元素class
		$(".smart .smart_content p").eq(thisindex).show().siblings().hide();//对应内容切换
	});
	//第四屏特效
	var $section4 = $('.section4');
	var NUMBER = 1;
	$section4.mouseover(function(){
		if(NUMBER){
			setTimeout(function(){
				$('.section4').addClass('active');
			},800);
			NUMBER = 0;
		}
	});
	try {
		$section4.ripples({
			resolution: 128,
			dropRadius: 10, //px
			perturbance: 0.04,
		});
	}
	catch (e) {
	}
	 $('.ge-1').hover(
	 function(){
		 $('.ge-1').css('background','url(images/ge-1.png)no-repeat');
		 },
		 function(){
			  $('.ge-1').css('background','none');
		}
	 );
	 $('.ge-2').hover(
	 function(){
		 $('.ge-2').css('background','url(images/ge-2.png)no-repeat');
		 },
		 function(){
			  $('.ge-2').css('background','none');
		}
	 );
	 $('.ge-3').hover(
	 function(){
		 $('.ge-3').css('background','url(images/ge-1.png)no-repeat');
		 },
		 function(){
			  $('.ge-3').css('background','none');
		}
	 );
	  $('.ge-4').hover(
	 function(){
		 $('.ge-4').css('background','url(images/ge-2.png)no-repeat');
		 },
		 function(){
			  $('.ge-4').css('background','none');
		}
	 );
	  $('.ge-5').hover(
	 function(){
		 $('.ge-5').css('background','url(images/ge-5.png)no-repeat');
		 },
		 function(){
			  $('.ge-5').css('background','none');
		}
	 );
	  $('.ge-6').hover(
	 function(){
		 $('.ge-6').css('background','url(images/ge-5.png)no-repeat');
		 },
		 function(){
			  $('.ge-6').css('background','none');
		}
	 );
	  $('.ge-7').hover(
	 function(){
		 $('.ge-7').css('background','url(images/ge-3.png)no-repeat');
		 },
		 function(){
			  $('.ge-7').css('background','none');
		}
	 );

	//内页滚屏事件
	$(window).scroll(function(){		
		//var banner_height=$('#bannerpic').height();
		if($(window).scrollTop()>83){//新闻页等内页向上滑动效果；
		//$(".main").animate({top: -800},3000);
		$('#bannerpic').slideUp('slow');
		}
		else{
			$('#bannerpic').slideDown('slow');
			}
			
	if($(window).scrollTop()>500){//官网首页第一屏取消动画；
			$('#c2p .stage-1-title').removeClass('active');
			$('#c2p .stage-2-title').removeClass('active');
			}
		else{
			$('#c2p .stage-1-title').addClass('active');
			$('#c2p .stage-2-title').addClass('active');
			}
     })		
			

})