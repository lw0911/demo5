// JavaScript Document
$(function () {
	$(".Contop .demo01 .ui-lantern-image img,.Contop .demo01 .ui-carousel img").each(function(){
            var src=$(this).attr('src').replace("http://lihui.uoeee.com",'');
            
            $(this).attr({src:src,rel:src})
        
        });
	$('.nav ul li.navli:eq(4),.nav ul li.navli:eq(2),.nav ul li.navli:eq(3)').find('.secondNavCon_02,.secondNavCon_03,.secondNavCon_04,.secondNavCon_05').addClass('marginleft');
	$('.nav ul li.navli:eq(2)').find('.secondNavCon_03').css({'margin-left':'25px'});
	
	//返回顶部
	$(".returnTop").click(function(){
		$("body,html").animate({"scrollTop":"0px"});
	});
	
	//20151205二级修改
	$('.secondNav').width($(window).width())
	$('.subnav-drop li').hover(function(){
		$(this).find('ul:first').stop(true,true).fadeIn()	
	},function(){
		$(this).find('ul:first').stop(true,true).fadeOut()	
	})
	
	$('.secondNavConBtn li').each(function(index, element) {
       if($(this).length>4)
	    $('.secondNavConBtn li:gt(3):lt()')
    });
	
	$('.nav01').find('.secondNavCon_01').addClass('prosecondnav');
	$('.prosecondnav li:first').css({'width':'100%'})
	$('.prosecondnav').siblings('.secondNavCon_02').css({'margin-left':'-10px'})
	
	//input 绑定聚焦事件
	$("input[type=text].headrightctn,input.jobkey").each(function() {
       var _this=$(this);
	   var input_val=_this.val(); 
	   $(_this).live("focus",function(){
	   		var fo_val=$(this).val();
			if(fo_val==input_val)	
			{
				$(this).val("");
			}
	   });
	   $(_this).live("blur",function(){
	   		var bl_val=$(this).val();
			if(bl_val=="")	
			{
				$(this).val(input_val);
			}
	   });
    });	

	//顶部二级
	$('.secondNavCon').eq(0).show();
	$('.nav ul li.navli').each(function (index, element) {
		$(this).hover(function () {
			$(this).find('.secondNav').stop(true, true).slideDown();
		}, function () {
			$(this).find('.secondNav').hide();
		})
	});

	$('.secondNavCon_02').each(function (index, element) {
		$(this).find('li').first().css({ 'width': '100%' })
	});
	$('.nav li.navli:eq(1) .secondNavConBtn').css({'width':'800px'})
	$('.nav li.navli:eq(1) .secondNavConBtn ul:eq(2)').css({'width':'258px'})
	
	$('.nav li.navli:eq(4) .secondNavConBtn').css({'width':'725px'})
	$('.nav li.navli:eq(4) .secondNavConBtn ul:eq(2)').css({'width':'180px'})

	//搜索栏
	$(".header div span").hover(function () {
        $(".header div span input.headrightctn").stop(true,true).show();
    }, function () {
    	$(".header div span input.headrightctn").stop(true, true).hide();
    })
	
	//首页
	$('.picScroll-left3 .bd ul li').hover(function(){
		$(this).find('.BannerHoverCon').stop(true,true).slideDown(500);	
		$('.BannerHoverCur').stop(true,true).fadeIn(500);		
	},function(){
		$(this).find('.BannerHoverCon').stop(false,false).slideUp(500);	
		$('.BannerHoverCur').stop(false,false).fadeOut(500);
	})
	
	$('.inNewsCon ul li').hover(function(){
		$(this).find('.newscur').show();
		$(this).addClass('cur');
	},function(){
		$(this).find('.newscur').hide();
		$(this).removeClass('cur');
	})
	
	$('.inNewsCon ul:eq(0),.inNewsBtn:eq(0)').show();
	
	$('.newsBtn a').click(function(){
		$(this).addClass('cur').siblings().removeClass('cur');
		var index = $(this).index();
		if(index ==0){
			$('.inNewsCon ul:eq(0)').show();
			$('.inNewsCon ul:eq(1)').hide();
			$('.inNewsBtn:eq(0)').show();
			$('.inNewsBtn:eq(1)').hide();	
		}else{
			$('.inNewsCon ul:eq(0)').hide();
			$('.inNewsCon ul:eq(1)').show();
			$('.inNewsBtn:eq(0)').hide();
			$('.inNewsBtn:eq(1)').show();
		}
	})
	
	$('.newsBtn a:eq(0)').addClass('a01');
	
	$('.txtScroll-left .bd li:eq(0),.txtScroll-left .bd li:eq(1)').addClass('Ot');
	$('.txtScroll-left .bd li:eq(2),.txtScroll-left .bd li:eq(3)').addClass('Tf');
	
	$('.inNewsCon ul:first li:eq(0),.inNewsCon ul:first li:eq(2)').addClass('Ot');
	$('.inNewsCon ul:first li:eq(1),.inNewsCon ul:first li:eq(3)').addClass('Tf');
	
	//底部下拉
	//$(".link span").click(function(){
	//	if($(this).siblings(".select").css("display")=="block"){
	//		$(this).siblings(".select").fadeOut();
	//	}else{
	//		$(this).siblings(".select").fadeIn();
	//	}
	//});
	$(".link").mouseenter(function () {
	    $(this).find(".select").show();
	}).mouseleave(function () {
	    $(this).find(".select").hide();
	})
	//产品综合
	$(".product li,.infoList li").hover(function(){
		$(this).children(".more").show();
		$(this).find('.moreall').show();	
	},function(){
		$(this).children(".more").hide();	
		$(this).find('.moreall').hide();	
	});
	
	//产品详情
	$('.prodatali ol li:first').removeClass("cur");	
	$(".prodatali ol li").hover(function(){
		$(this).addClass("cur");
	},function(){
		$(this).removeClass("cur");	
	})
	
	$('.Combinations').show();
	$(".ConMidBtn a").each(function(index, element) {
		$(this).click(function(){
			$(this).addClass("cur").siblings().removeClass("cur");
			$(".ConMidSwitch").children("div").hide();
			$(".ConMidSwitch").children("div").eq(index).show();
		})
    });
	
	$(".feedBack dl.select dd").hover(function(){
		$(this).find('ol').stop(true,true).slideDown(500)
	},function(){
		$(this).find('ol').stop(true,true).slideUp(500)	
	})
	$(".feedBack dl.select dd ol li").click(function(){
		$(this).parent().stop(false,false).slideUp(500);
		$(this).parent().siblings('span').text($(this).text())
	})
	
	$(".feedBack dl.select dd ol li").hover(function(){
		$(this).addClass("cur")	
	},function(){
		$(this).removeClass("cur")		
	})
	
	$(".carLists li").hover(function(){
		$(this).find("a").show();
		$(this).find("span").addClass("cur")
	},function(){
		$(this).find("a").hide();
		$(this).find("span").removeClass("cur")	
	})
	
	$('.carList a.moreall').hover(function(){
		$(this).siblings('dl').find('a').addClass('cur')	
	},function(){
		$(this).siblings('dl').find('a').removeClass('cur')	
	})
	
	//支持&&职业机会
	$('.conSelectCon3').hover(function(){
		$(this).find('span').css({'border-bottom':'none'})
		$(this).find('ol').stop(true,true).slideDown()	
	},function(){
		$(this).find('ol').stop(true,true).slideUp()		
	});
	$('.supportCon li div').hover(function(){
		$(this).find('ol').stop(true,true).slideDown()	
	},function(){
		$(this).find('ol').stop(true,true).slideUp()
	})
	$('.supportCon li div ol li,.conSelectCon ol li').hover(function(){
		$(this).addClass("cur")	
	},function(){
		$(this).removeClass("cur")	
	})
	$(".supportCon li div ol li,.conSelectCon ol li").click(function(){
		$(this).parent().siblings().text($(this).text());
		$(this).parent().siblings().attr("rel", $(this).attr("rel"))
		$(this).parent().stop(true,true).slideUp()	
	})
	$(".support table tr:last td").css({'border':'none'});
	
	$(".contact table.tab01 tr").each(function(index, element) {
        if($(this).index()%2==1){
			$(this).css({'background':'#f8f8f8'})	
		}
    });
	
	$(".contact .welfare:last").css({'margin-right':'0'})
	
	//发展历程
	$('.aboutHistory .rightContent:first').css({'margin-top':'95px'})
	
	//视频
	$(".video ul li").hover(function(){
		$(this).find("a").show();
		$(this).find("em").addClass("cur")	
	},function(){
		$(this).find("a").hide();
		$(this).find("em").removeClass("cur")	
	})
	$(".video ul li a").click(function () {
			$(".videoTc").fadeIn();
			$(".videoTc").css({"height":$("body").height()});
			var filepath = $(this).parent().attr("_video");
			$(".videoCon").html("<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\""
												+ "codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0\" width=\"600\" height=\"340\">"
												+ "<param name=\"movie\" value=\"webimages/flv_player.swf?flv_url=" + filepath + "&btn_color=0xFFFFFF\"> "
												+ "<param name=\"BarColor\" value=\"0xffffff\" />"
												+ "<param name=\"BarTransparent\" value=\"20\" />"
												+ "<param name=\"quality\" value=\"high\"/> "
												+ "<param name=\"allowFullScreen\" value=\"true\" /> "
												+ "<embed src=\"/en/webimages/flv_player.swf?flv_url=" + filepath + "&btn_color=0xFFFFFF\" allowFullScreen=\"true\" quality=\"high\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" type=\"application/x-shockwave-flash\" width=\"600\" height=\"340\"> "
												+ "</embed> "
												+ "</object>");
			
			$(".videoTcWeb").css({ "margin-top":($(window).height()-$(".videoTcWeb").height())/2});		
			
			$(".videoTcWebTit h3").text($(this).parent().text());
			$(".videoTc_close").click(function(){
				$(".videoTc").fadeOut();
				$("#_video_wd").remove();
			});
		});
	
	//职位	
	$('.contact table tr td a.alltr').hover(function(){
		$(this).parent().addClass('cur');
		$(this).parent().siblings('td').addClass('cur');
		$(this).parent().siblings('td').addClass('cur')		
	},function(){
		$(this).parent().removeClass('cur');
		$(this).parent().siblings('td').removeClass('cur')	
	})
	
	$('.contactBtn').attr('href','/en/contact/index.html#feed')
	
	
	$('.productList li').hover(function(){
		$(this).find('.img').css({'border':'1px solid #b4140c'})
	},function(){
		$(this).find('.img').css({'border':'1px solid #e7e7e7'})	
	})
})	


$(function () {


    $(".secondNav li a").each(function () {
        $(this).attr("calss","11111")
        if (!$(this).siblings("ul").find("li").length>0) {
            $(this).css("background", "none")

        }
       
    })

    $('.listTable tr').each(function (index, element) {
        if ($(this).index() % 2 == 0) {
            $(this).addClass('changbg')
        }
    });
    $('.listTable tr:first').siblings().hover(function () {
        $(this).find('td').addClass('listTableHover')
    }, function () {
        $(this).find('td').removeClass('listTableHover')
    })
    $('.listTable tr:first').addClass("bigfont")
})

/*--20151216---*/

$(function () {

    $(".subnav-drop01  ul:first li").each(function () {
        if ($(this).find('ul:last').children('li').length >= 7) {
            $(this).find('ul:last').addClass('a22')
        }
        
    })








})