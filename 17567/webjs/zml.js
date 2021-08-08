// JavaScript Document
$(function(){
	//20200707
	$(".crWorkWrap .crWorkCon:eq(0)").show();
	$(".crTab a:eq(0)").addClass("cur");
	$(".crTab a").click(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		var aIndex=$(this).index();
		$(".crWorkWrap .crWorkCon:eq("+aIndex+")").show().siblings().hide();
	});
	
	
	//4-9

	$(".star_guestCon dl dd.dd1 ul li").hover(function(){
		$(this).addClass("curr").siblings().removeClass("curr")
	})
	$(".star_guestCon dl dd.dd2 ul li").hover(function(){
		$(this).addClass("curr").siblings().removeClass("curr")
	})

	$(".left_news ul li:lt(3)").addClass("cur");
	$(".star_guestCon dl dd.dd1 ul li").eq(1).addClass("li_1");
	$(".star_guestCon dl dd.dd1 ul li").eq(4).addClass("li_1");
	$(".star_guestCon dl dd.dd1 ul li").eq(3).addClass("li_2");
	$(".star_guestCon dl dd.dd1 ul li").eq(6).addClass("li_2");
	$(".star_guestCon dl dd.dd1 ul li").eq(5).addClass("li_3");
	$(".star_guestCon dl dd.dd1 ul li").eq(8).addClass("li_3");
	
	$(".star_guestCon dl dd.dd2 ul li").eq(1).addClass("li_2");
	$(".star_guestCon dl dd.dd2 ul li").eq(2).addClass("li_1");
	$(".star_guestCon dl dd.dd2 ul li").eq(3).addClass("li_3");
	
	//产品与业务切换
	$(".club_bt span").eq(0).addClass("cur");
	$(".club_con dl").hide();
	$(".club_con dl").eq(0).show();
	$(".club_bt span").click(function(){
		var index=$(this).index();
		$(".club_con dl").hide().eq(index).show();
		$(this).addClass("cur").siblings().removeClass("cur");
	})
	
	
	//微信
	$(".floatNav_con dl dd.dd1").hover(function(){
		$(this).children("p").show();
	},function(){
		$(this).children("p").hide();
	})
	//返回顶部
	$(".floatNav_con ul li").last().click(function(){
		$("body,html").animate({scrollTop:$("body").offset().top},1000)
	})
	$(".index_footer span").click(function(){
		$("body,html").animate({scrollTop:$("body").offset().top},1000)
	})
	
	//首页小图标效果
	$(".index_oneBox dl dt ul li").hover(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
		$(this).children("span").stop(true,true).animate({"top":"-60px"},600)
		$(this).children("em").stop(true,true).animate({"top":"12px"},600)
	},function(){
		$(this).removeClass("cur");
		$(this).children("span").stop(true,true).animate({"top":"12px"},600)
		$(this).children("em").stop(true,true).animate({"top":"55px"},600)
	})
	
	//产品于业务
	$(".proConlist ul li:last()").addClass("curr");
	$(".proConlist ul li").eq(1).addClass("cur");
	//$(".proConlist ul li").find("img").eq(1).attr("src",$(".proConlist ul li").find("img").eq(1).attr("rel"))
	$(".proConlist ul li").hover(function(){
		var img=$(this).find("img");
		var src=img.attr("src");
		var rel=img.attr("rel");
		img.attr({"src":rel,"rel":src});
		
	});
	
	$(".proConlist ul li").hover(function(){
		$(this).addClass("cur").siblings().removeClass("cur");
	},function(){
		$(this).removeClass("cur");
	});
	
	$(".Direct_salesCon ul li:odd").addClass("cur");
	$(".solutionCon dl dd").eq(1).addClass("cur");
	$(".solutionCon dl dd").hover(function(){
		$(this).addClass("cur").siblings().removeClass("cur")
	});
	
	$(".proConlist ul li").click(function(){
		var index=$(this).index();
		$("body,html").animate({"scrollTop":$(".platformCon").eq(index).offset().top})
	});
	
	//陈蕊 begin--人才招聘
	$(".recruitment_contwo dl dt").click(function(){
		if($(this).hasClass("cur")){
			$(".recruitment_contwo dl dt").removeClass("cur");
			$(this).next().stop(true,true).slideUp(500);
		}else{
			$(".recruitment_contwo dl dt").removeClass("cur");
			$(this).addClass("cur");
			$(this).parent().siblings().find("dd").stop(true,true).slideUp(500);
			$(this).next().stop(true,true).slideDown(500);
		}
		
		
	});
	
	//右侧漂浮
	var t=true;
	$(".index_floatNav span").click(function(){
		if(t){
			$(".index_floatNav").stop(true).animate({"right":0},600);
			$(this).addClass("cur");
		}else{
			$(".index_floatNav").stop(true).animate({"right":-60},600);
			$(this).removeClass("cur");
		};
		t=!t;
	})
	
	$(".floatNav_con").height($(window).height());
	$(".floatNav_con ul li").hover(function(){
		$(this).children("a").find("em").animate({right:"60px"},600);
	},function(){
		$(this).children("a").find("em").animate({right:"-130px"},600);
	});
	
	$(".floatNav_con ul li:eq(1)").click(function(){
		$("body,html").animate({"scrollTop":$(".index_us").offset().top},1000);
	})
	$(".floatNav_con ul li:eq(2)").click(function(){
		$("body,html").animate({"scrollTop":$(".index_Star").offset().top},1000);
	})
	$(".floatNav_con ul li:eq(3)").click(function(){
		$("body,html").animate({"scrollTop":$(".index_Idc").offset().top},1000);
	})
	
	
})
//首页banner
var index_banner=function(){
	var resizeing=function(){
		var w=$(window).width();
		var h=w*0.375;
		if(w>=1920){
			$(".index_bannerCon ul li img").css({"width":1920,"height":720});
		}else{
			$(".index_bannerCon ul li img").css({"width":w,"height":h});
			$(".index_bannerCon").css("height",h)
		}
	}
	$(window).resize(function(){
		resizeing();		
	})
	resizeing();
	
	//var ul=$(".index_bannerCon ul");
//	var li=ul.children("li");
//	var win=li.width();
//	var len=li.length;
//	var index=0;
//	li.first().clone().appendTo(ul);
//	
//	
//	var banNext=function(){
//		if(index==len-1){
//			return false;
//		}
//		index++;
//		ul.animate({"left":-win*index},600);
//		//index++;
////		if(index>len){
////			ul.stop(true).animate({"left":-win*index},function(){
////				ul.css("left",0)
////				index=0;
////			},600);
////		}else{
////			ul.animate({"left":-win*index},600);
////		}
//		
//	}
//	var banPrve=function(){
//		if(index==0){
//			return false;
//		}
//		index--;
//		ul.animate({"left":-win*index},600);
//	}
//	
	var w  = $('.index_bannerCon li').width();
	var ul = $('.index_bannerCon ul');
	
	var banNext = function(){
		ul.stop().animate({
			left : -w	
		},600,function(){
			ul.children().first().appendTo(ul);
			ul.css('left',0);	
		});
	}
	
	var banPrve = function(){
		ul.children().last().prependTo(ul)
		ul.css('left',-w);
		ul.stop().animate({
			left : 0
		},600);
	}
	
	var t = null;
	
	var start = function(){
		t = window.setInterval(function(){
			banNext();
		},4000);
	}


	$(".index_bannerCon,.ban_prve,.ban_next").hover(function(){
		clearInterval(t);	
	},function(){
		start();
	});
	start();
	
	$(".ban_prve").click(function(){
		banPrve();
	})
	$(".ban_next").click(function(){
		banNext();
	})
	
	
}
	
//首页图片缩放
$.fn.zoom_img = function(options){
    $t = this;
    if($t.length>1){
        $t.each(function(){
            $(this).zoom_img(options);
        })
        return $t;
    }
    var ops = {
        width:100,
        height:20
    }

    $t.css("position","relative");
     ops = $.extend(ops,options);

    if($t.attr("_width")){
         ops.width = window.parseInt($t.attr("_width"));
         ops.height = window.parseInt( $t.attr("_height"));
    }

     var _left = ops.width/2;
     var _top = ops.height/2;
     var width = $(this).width();
     var height = $(this).height();

     if(width<1){
         var img = new Image()
         img.src = $t.attr("src");
         img.onload = function(){ //图片真实宽高
            width = img.width;
            height = img.height;
         }
    }
     $t.hover(function(){
        var img=$(this);
        img.stop(true).animate({
            width:width+ops.width,
            height:height+ops.height,
            left:-_left,
            top:-_top
        },800);

    },function(){
        $(this).stop(true).animate({
            width:width,
            height:height,
            left:0,
            top:0
        },800);
    });

     return $t;
}

//我是供应商
$(function(){
	var give_ul=$(".givescroll ul");
	var give_li=give_ul.children("li");
	var give_len=give_li.length;
	var give_win=give_li.width();
	//alert(give_win)
	var index=0;
	
	$(".giveNext").click(function(){
		if(index>=give_len-1){return false;}
		index++;
		give_ul.animate({"left":-give_win*index},600)
	})
	
	$(".givePrve").click(function(){
		if(index==0){return false;}
		index--;
		give_ul.animate({"left":-give_win*index},600)
	});
	
});
//5-20
//注册
$(function(){
	$(".reg_list").eq(0).show();
	$(".reg_bt span").eq(0).addClass("cur")
	$(".reg_bt span").click(function(){
		var index=$(this).index();
		$(".reg_list").hide().eq(index).show();
		$(this).addClass("cur").siblings().removeClass("cur")
	})
});

