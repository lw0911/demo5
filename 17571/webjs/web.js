
// JavaScript Document

	//产品详细页之3D模型图
	
	$(function(){
		$(".fanhui").hover(function(){$(this).attr("style","background:#0067ac")},function(){$(this).removeAttr('style')})
		
		$(".big_tu img").attr("src",$(".small_tu dl dd img").eq(0).attr("src"))
		$(".small_tu dl dd").eq(0).addClass("cur")
		k=0;
		if(k==0)
		{
			$(".big_tu span.left02").addClass("cur");
		}		
		len=$(".small_tu dl dd").length;
		
			
		$(".small_tu dl dd").click(function(){
			
	len=$(".small_tu dl dd").length;
			
		k=$(this).index()
		$(".big_tu img").attr("src",$(this).find("img").attr("src"))
		$(this).addClass("cur").siblings().removeClass("cur");
		
		if(0<k<len-1){
			$(".left02").removeClass("cur");
			
			$(".right02").addClass("cur");
		}
		if(k>=len-1){
			$(".left02").removeClass("cur");
			$(".right02").removeClass("cur");
			}
		if(k==0){
			$(".left02").addClass("cur");
			$(".right02").addClass("cur");
		}		
		})
				
	$(".right02").click(function(){
		
			$(".left02").removeClass("cur");
			len=$(".small_tu dl dd").length;
			if(k>=len-1){return false}
			k++;
			
			$(".small_tu dl dd").eq(k).addClass("cur").siblings().removeClass("cur");	
			$(".big_tu img").attr("src",$(".small_tu dl dd").eq(k).find("img").attr("src"));
			if(k<len-1)
			{
				
				$(".right02").addClass("cur");
			}else
			{
				$(".right02").removeClass("cur");
			}
	})
			
		$(".left02").click(function(){
			$(".right02").removeClass("cur");
			if(k<=0){return false}
			k--;
			$(".small_tu dl dd").eq(k).addClass("cur").siblings().removeClass("cur");
			$(".big_tu img").attr("src",$(".small_tu dl dd").eq(k).find("img").attr("src"));
			
			if(k==0){
				$(".left02").addClass("cur");
				$(".right02").addClass("cur");
			}
	})
	
	//产品详细页之轮播图2
	$(function(){
		$(".big_tu02 img").attr("src",$(".small_tu02 dl dd img").eq(0).attr("src"))
		$(".small_tu02 dl dd").eq(0).addClass("cur")
		k02=0;
		if(k02==0)
		{
			$(".big_tu02 span.left03").addClass("cur");
		}		
		len=$(".small_tu02 dl dd").length;	
		$(".small_tu02 dl dd").click(function(){
		k02=$(this).index()
		$(".big_tu02 img").attr("src",$(this).find("img").attr("src"))
		$(this).addClass("cur").siblings().removeClass("cur")
		if(0<k02<len-1){
			$(".left03").removeClass("cur");
			$(".right03").removeClass("cur");
			}
		if(k02>=len-1){
			$(".right03").addClass("cur");
			}
		if(k02==0){
			$(".left03").addClass("cur");
			$(".right03").removeClass("cur");
		}		
		})
				
		$(".right03").click(function(){
			len=$(".small_tu02 dl dd").length;	
			
			$(".left03").removeClass("cur");
			k02++;
			$(".small_tu02 dl dd").eq(k02).addClass("cur").siblings().removeClass("cur");	
			$(".big_tu02 img").attr("src",$(".small_tu02 dl dd").eq(k02).find("img").attr("src"));
			if(k02==len-1)
			{
				$(".right03").addClass("cur");
			}
	})
			
		$(".left03").click(function(){
		$(".right03").removeClass("cur");
		k02--;
		$(".small_tu02 dl dd").eq(k02).addClass("cur").siblings().removeClass("cur");
		$(".big_tu02 img").attr("src",$(".small_tu02 dl dd").eq(k02).find("img").attr("src"));
		
		if(k02==0){
			$(".left03").addClass("cur");
		}
	})
	})	
	
	
	    //关于粤新-公司大事记（年份）之轮播图

		var li_wid=$(".kuangjia_txt_right_year ul li").outerWidth(true)
		var i = 0;
		
		$(".span01").click(function () {
		    var len = $(this).parents(".kuangjia_txt_right_year").find("ul li").length;
		    if (len > 5) {
		        if (!$(".kuangjia_txt_right_year ul").is(":animated")) {
		            if (i > 0) { i-- } else { i = 0 };
		            $(".kuangjia_txt_right_year ul").animate({ "margin-left": -116 * i }, 500);
		        }
		    }
		});
		$(".span02").click(function () {
		    var len = $(this).parents(".kuangjia_txt_right_year").find("ul li").length;
		    if (len > 5) {
		        if (!$(".kuangjia_txt_right_year ul").is(":animated")) {
		            if (i < (len - 6)) { i++ } else { i = len - 6 };
		            $(".kuangjia_txt_right_year ul").animate({ "margin-left": -116 * i }, 500);
		        }
		    }
		});

		
	
	//关于粤新-公司大事记
		$(".big_tu03 p").find("span").text($(".small_tu03 dl dd").eq(0).find("p").text())
		$(function(){
			$(".big_tu03 img").attr("src",$(".small_tu03 dl dd img").eq(0).attr("src"))
			$(".small_tu03 dl dd").eq(0).addClass("cur")
			k03=0;
			if(k03==0)
			{
				$(".big_tu03 span.left06").addClass("cur");
			}
					
			len=$(".small_tu03 dl dd").length;	
			
			$(".small_tu03 dl dd").click(function(){
			k03=$(this).index()
			$(".big_tu03 img").attr("src",$(this).find("img").attr("src"))
			$(this).addClass("cur").siblings().removeClass("cur")
			
			if(0<k03<len-1){
				$(".left06").removeClass("cur");
				$(".right06").removeClass("cur");
				}
			if(k03>=len-1){
				$(".right06").addClass("cur");
				}
			if(k03==0){
				$(".left06").addClass("cur");
				$(".right06").removeClass("cur");
		}	
	    //文本替换
		$(".big_tu03 p").find("span").text($(this).find("p").text())
		})
				
		$(".right06").click(function(){
			$(".left06").removeClass("cur");
			if(k03>=len-1){return false;}
			k03++;
			$(".small_tu03 dl dd").eq(k03).addClass("cur").siblings().removeClass("cur");	
			$(".big_tu03 img").attr("src", $(".small_tu03 dl dd").eq(k03).find("img").attr("src"));
			$(".big_tu03 p").find("span").text($(".small_tu03 dl dd").eq(k03).text())
			if(k03==len-1)
			{
				$(".right06").addClass("cur");
			}
			
		})
			
		$(".left06").click(function(){
			$(".right06").removeClass("cur");
			if(k03<=0){ return false;}
			k03--;
			$(".small_tu03 dl dd").eq(k03).addClass("cur").siblings().removeClass("cur");
			$(".big_tu03 img").attr("src",$(".small_tu03 dl dd").eq(k03).find("img").attr("src"));
			$(".big_tu03 p").find("span").text($(".small_tu03 dl dd").eq(k03).text())
			if(k03==0){
				$(".left06").addClass("cur");
			}
		})
		
	})
	


$(function(){
	
		//产品详细页滚动图
		$('.banner ul').cycle({
		fx : 'scrollHorz',
		speed : 900,
		pager : '.banner .inddot'
		});
		//产品详细页滚动图
		$('.index_banner ul').cycle({
		fx : 'scrollHorz',
		speed : 900,
		pager : '.index_banner .inddot_index'
		});
		
		//产品页船型鼠标移上变颜色
		$(".area_div dl dd").hover(function(){
			var newimg=$(this).find("img").attr("newimg");
			
			
			
			$(this).find("img").attr("src",newimg);
			$(this).find("h4").css("color","#f87d23");
			},function(){
			var oldimg=$(this).find("img").attr("oldimg");
			
			
			$(this).find("img").attr("src",oldimg);
			$(this).find("h4").css("color","#fff")
		});
		
		
		
		
		//产品页底部滚动图
		var li_wid=$(".paid_div ul li").outerWidth(true);
		var scroll_width=$(".paid_div ul li").length*li_wid-$(".paid_div").outerWidth(true);
		$(".left").click(function(){
			if(Math.abs(parseInt($(".paid_div ul").css("margin-left")))<=Math.abs(0))
			{
				$(".product_main_paid a.left img").attr("src","webimgage/product_left.jpg");
				return false;
			}
			
			if($(".paid_div ul").is(":animated")){return false;}
			$(".paid_div ul").animate({"margin-left":"+=310px"},500);
			$(".product_main_paid a.right img").attr("src","webimgage/product_right02.jpg");
			if(Math.abs(parseInt($(".paid_div ul").css("margin-left")))<=Math.abs(350))
			{
				 $(".product_main_paid a.left img").attr("src","webimgage/product_left.jpg");
			}
		});
		$(".right").click(function () {
			if(Math.abs(parseInt($(".paid_div ul ").css("margin-left")))>=Math.abs(scroll_width))
			  {
				  return false;
			  }
			 
			  if($(".paid_div ul").is(":animated")){return false;}
			  
			  $(".paid_div ul").animate({"margin-left":"-=310px"},500);
			 //  alert($(".paid_div ul ").css("margin-left"));
			  if(Math.abs(parseInt($(".paid_div ul ").css("margin-left")))>=Math.abs(scroll_width-li_wid))
			  {
				$(".product_main_paid a.right img").attr("src","webimgage/product_right.jpg");
			  }
			  $(".product_main_paid a.left img").attr("src","webimgage/product_left02.jpg");
		}) ;	
			
		//首页底部最近交付
		//var li_wid=$(".paid_div ul li").outerWidth(true);
//		var scroll_width=$(".paid_div ul li").length*li_wid-$(".paid_div").outerWidth(true);
//		$(".left_index").click(function(){
//			if(Math.abs(parseInt($(".paid_div ul").css("margin-left")))<=Math.abs(0))
//			{
//				$(".product_main_paid_index a img:eq(0)").attr("src","webimgage/index_31.jpg");
//				return false;
//			}
//			
//			if($(".paid_div ul").is(":animated")){return false;}
//			$(".paid_div ul").animate({"margin-left":"+=305px"},500);
//			$(".paid_div a img:eq(1)").attr("src","webimgage/index_33.jpg");
//			if(Math.abs(parseInt($(".paid_div ul").css("margin-left")))<=Math.abs(350))
//			{
//				 $(".product_main_paid_index a img:eq(0)").attr("src","webimgage/index_31.jpg");
//			}
//		});
//		$(".right_index").click(function () {
//			if(Math.abs(parseInt($(".paid_div ul ").css("margin-left")))>=Math.abs(scroll_width))
//			  {
//				  return false;
//			  }
//			 
//			  if($(".paid_div ul").is(":animated")){return false;}
//			  
//			  $(".paid_div ul").animate({"margin-left":"-=305px"},500);
//			 //  alert($(".paid_div ul ").css("margin-left"));
//			  if(Math.abs(parseInt($(".paid_div ul ").css("margin-left")))>=Math.abs(scroll_width-li_wid))
//			  {
//				$(".product_main_paid_index a img:eq(1)").attr("src","webimgage/index_34.jpg");
//			  }
//			  $(".product_main_paid_index a img:eq(0)").attr("src","webimgage/index_32.jpg");
//		}) ;	
})		
		//产品详细页选项卡切换
		$(".server_qiehuan_dd").eq(0).show();
		$(".p_server_qiehuan dl dt span").eq(0).addClass("cur")
		$(".p_server_qiehuan dl dt span").click(function(){
			var index=$(this).index();
			$(".server_qiehuan_dd").hide().eq(index).show();
			$(this).addClass("cur").siblings().removeClass("cur")
		});
		
		//关于粤新之公司荣誉选项卡切换
		$(".server_qiehuan_dd02").eq(0).show();
		$(".p_server_qiehuan02 dl dt span").eq(0).addClass("cur")
		$(".p_server_qiehuan02 dl dt span").click(function(){
			var index=$(this).index();
			$(".server_qiehuan_dd02").hide().eq(index).show();
			$(this).addClass("cur").siblings().removeClass("cur")
		});	
		
		//关于粤新-公司大事记(年份)选项卡切换
		$(".p_content_change").eq(0).show();
		//$(".kuangjia_txt_right_year ul li").eq(0).addClass("cur")
		$(".kuangjia_txt_right_year ul li").click(function(){
			var index=$(this).index();
			$(".p_content_change").hide().eq(index).show();
			$(this).addClass("cur").siblings().removeClass("cur")
		});
})	
			
		

		//关于粤新-董事长致辞
$(function(){
		var li_wid=$(".paid_div03 ul li").outerWidth(true);
		var scroll_width=$(".paid_div03 ul li").length*li_wid-$(".paid_div03").outerWidth(true);
		$(".left05").click(function(){
			if(Math.abs(parseInt($(".paid_div03 ul").css("margin-left")))<=Math.abs(0))
			{
				$(".product_main_paid03 a.left05 img").attr("src","/webimgage/l_r_03.jpg");
				return false;
			}
			
			if($(".paid_div03 ul").is(":animated")){return false;}
			$(".paid_div03 ul").animate({"margin-left":"+=227px"},500);
			$(".paid_div03 a.right05 img").attr("src","/webimgage/l_r_05.jpg");
			if(Math.abs(parseInt($(".paid_div03 ul").css("margin-left")))<=Math.abs(350))
			{
				 $(".product_main_paid03 a.left05 img").attr("src","/webimgage/l_r_03.jpg");
			}
		}); 
		$(".right05").click(function () {
			if(Math.abs(parseInt($(".paid_div03 ul ").css("margin-left")))>=Math.abs(scroll_width))
			  {
				  return false;
			  }
			 
			  if($(".paid_div03 ul").is(":animated")){return false;}
			  
			  $(".paid_div03 ul").animate({"margin-left":"-=227px"},500);
			 //  alert($(".paid_div ul ").css("margin-left"));
			  if(Math.abs(parseInt($(".paid_div03 ul ").css("margin-left")))>=Math.abs(scroll_width-li_wid))
			  {
				$(".product_main_paid03 a.right05 img").attr("src","/webimgage/l_r_04.jpg");
			  }
			  $(".product_main_paid03 a.left05 img").attr("src","/webimgage/l_r_02.jpg");
		}) ;
		
		//关于粤新之公司荣誉证书弹出框
		$(".zhengshu_tanchu").hide();
		$(".zhengshu_tanchu_div img").attr("src",$(".zhengshu ul li a img").attr("src"))
		var w_hei=$(window).height()
		var w_win=$(window).width()
		var win_img=$(".zhengshu_tanchu_div").height();	
		$(".zhengshu_tanchu").css("height",w_hei)
		$(".zhengshu_tanchu").css({"width":w_win,"text-align":"center"})
		
		//2015-3-10修改
		$(".zhengshu_tanchu_div").css("margin-top",(w_hei-win_img)/2-20)
		//2015-3-10修改
		$(".zhengshu ul li a").click(function(){
			$(".zhengshu_tanchu").fadeIn();
			$(".zhengshu_tanchu_div img").attr("src",$(this).find("img").attr("src"))
			})
		$(".zhengshu_tanchu_div h3 span").click(function(){
			$(".zhengshu_tanchu").fadeOut();
		})
		
		//关于粤新之企业介绍左右内容替换
		$(".introduce dl:nth-child(2n)").addClass("cur");
		
		//关于粤新之企业文化左右内容替换
		$(".kuangjia_txt_right_culture dl:nth-child(2n)").addClass("cur");
		
		//关于粤新之生产基地地图鼠标移上效果
		//$(".base .map01 ul li span").eq(0).show();
		$(".base .map01 ul li p").hover(function () {
		    $(".base .map01 li span").hide();
			$(this).find("span").show();
		})

		//$(".base .map02 ul li span").eq(0).show();
		$(".base .map02 ul li p").hover(function(){
		    //$(this).find("span").show().parents("li").siblings().find("span").hide();
		    $(".base .map02 li span").hide();
		    $(this).find("span").show();
		})
		
		//产学研左右内容替换
		$(".chan_x_y dl:nth-child(2n)").addClass("cur");
		
		//核心竞争力左右内容替换
		$(".industry_chain dl:nth-child(2n-1)").addClass("cur");
		
		
		////核心竞争力-技术研发能力选项卡切换
		//$(".technical_qiehuan_div").eq(0).show();
		//$(".technical .technical_qiehuan span").eq(0).addClass("cur")
		//$(".technical .technical_qiehuan span").click(function(){
		//	var index=$(this).index();
		//	$(".technical_qiehuan_div ").hide().eq(index).show();
		//	$(this).addClass("cur").siblings().removeClass("cur")
		//});
		
		////核心竞争力-技术研发能力左右内容替换
		//$(".technical_qiehuan_hxsb dl:nth-child(2n-1)").addClass("cur");
		
		//研究成果选项卡切换
		$(".yanjiu_cg dl:nth-child(2n)").addClass("cur");
		
		//研究成果选项卡切换
		$(".chuangxin_zd dl:nth-child(2n)").addClass("cur");

		//加入我们-人才培养左右内容替换
		$(".join_us_rcpy dl:nth-child(2n-1)").addClass("cur");
		
		//首页选项卡切换
		$(".index_change").eq(0).show();
		$(".index_lianjie span").eq(0).addClass("cur")
		$(".index_lianjie span").click(function(){
			var index=$(this).index();
			$(".index_change").hide().eq(index).show();
			$(this).addClass("cur").siblings().removeClass("cur")
		});
		
		
		
		//二级菜单
		var len=$(".menu ul li").length;
		$(".daohang .menu ul li").hover(function(){
			var index=$(this).index();
			var win=$(this).width();
			if(index!=0 && index!=1 && index!=6)
			{
				$(this).find(".second_menu_about_yx").css({"left":"auto","right":"0px"})
			}
			else if(index==6){
				$(this).find(".second_menu_about_yx").css({"left":"auto","right":"26px"});
				$(this).find(".second_menu_about_yx:last").css({"left":"auto","right":"0"});		
			}
			else{
				$(this).find(".second_menu_about_yx").css({"left":"0px","right":"0px"})	
			}
			
			$(this).children(".second_menu_about_yx").slideDown().parent().siblings().find(".second_menu_about_yx").hide();
		    
		},function(){
			$(this).children(".second_menu_about_yx").hide()
		})
	   
		$(".area_div dl").each(function() {
            $(this).find("dd:nth-child(4n)").css("padding-right","0");
        });
		
		
})

$(function(){
	
    //首页底部滚动图
    var li_wid=$(".paid_div02Con ul li").outerWidth(true);
    var scroll_width=$(".paid_div02Con ul li").length*li_wid-$(".paid_div02Con").outerWidth(true);
    $(".left04").click(function(){
        if(Math.abs(parseInt($(".paid_div02Con ul").css("margin-left")))<=Math.abs(0))
        {
            $(".product_main_paid02 a.left04 img:eq(0)").attr("src","/webimgage/product_left.jpg");
            return false;
        }
			
        if($(".paid_div02Con ul").is(":animated")){return false;}
        $(".paid_div02Con ul").animate({"margin-left":"+=343px"},500);
        $(".paid_div02 a.right04 img").attr("src","/webimgage/product_right_02.jpg");
        if(Math.abs(parseInt($(".paid_div02Con ul").css("margin-left")))<=Math.abs(350))
        {
            $(".product_main_paid02 a.left04 img").attr("src","/webimgage/product_left.jpg");
        }
    });
    $(".right04").click(function () {
        if(Math.abs(parseInt($(".paid_div02Con ul ").css("margin-left")))>=Math.abs(scroll_width))
        {
            return false;
        }
			 
        if($(".paid_div02Con ul").is(":animated")){return false;}
			  
        $(".paid_div02Con ul").animate({"margin-left":"-=343px"},500);
        //  alert($(".paid_div ul ").css("margin-left"));
        if(Math.abs(parseInt($(".paid_div02Con ul ").css("margin-left")))>=Math.abs(scroll_width-li_wid))
        {
            $(".product_main_paid02 a.right04 img").attr("src","/webimgage/product_right_.jpg");
        }
        $(".product_main_paid02 a.left04 img").attr("src","/webimgage/product_left02.jpg");
    }) ;
		
    //回到顶部
    $(".footer_div2 p span").click(function () {
        $("html,body").animate({scrollTop:"0px"},1000)	
    })
		
    //产品详细页参数选项卡切换
    $(".change_div_li").eq(0).show();
    $(".p_scroll_txt_div01 ul li img").eq(0).addClass("cur")
    $(".p_scroll_txt_div01 ul li").click(function(){
        var index=$(this).index();
        $(".change_div_li").hide().eq(index).show();
        $(this).addClass("cur").siblings().removeClass("cur");
    });
		
    //微信
    $(".header_top dl dd a.erweima").hover(function(){
        $(this).siblings(".weixin").show();
				
    },function(){
        $(this).siblings(".weixin").hide();
    })
		
    //左边菜单二级border-bottom
    $(".kuangjia_txt_left .speech ul li:last").css("border-bottom","0px #ededed solid")
		
		
		
    //======11-13补=====
    //导航
    $(".daohang .menu ul li:last").css("padding-right","0");
		
    //公司荣誉
    $(".CompanyHonorCon ul li a").hover(function(){
        $(this).parent("li").addClass("cur").siblings().removeClass("cur");
        $(this).find(".lidiv").stop(true,true).fadeIn().parents("li").siblings().find(".lidiv").hide();
    },function(){
        $(this).parent("li").removeClass("cur");
        $(this).find(".lidiv").hide();
    });
		
    //设计建造基地
    $(".Recruitmentlist li").eq(0).addClass("cur");
    $(".RecruitmentContent").eq(0).show();
    $(".Recruitmentlist li h3").click(function(){
        if($(this).next().is(":hidden")){
            $(".RecruitmentContent").slideUp(300);
            $(".Recruitmentlist li").removeClass("cur");
            $(this).parents("li").addClass("cur");
            $(this).next().slideDown(300);
        }else{
            $(this).parents("li").removeClass("cur");
            $(this).next().slideUp(300);
        }
    });
		
    //合作战略伙伴
    $(".StrategicPartnersCon ul li:eq(0),.StrategicPartnersCon ul li:eq(1),.StrategicPartnersCon ul li:eq(2)").css("border-top","0");
		
    $(".SocialRecruitment .search dl:last").css({"width":"auto","margin-right":"0"});
		
    //媒体报道-公司新闻
    $(".news .responsibility dl:first").css("padding-top","0");
		
    //产品综合页
    $(".ProductsBoatCon h4").each(function(index, element) {
        $(this).addClass("boat"+index+"");
    });
    $(".ProductsBoatCon:first").css("border-top","1px #3276a4 solid");
		
    //$(".ProductsBoatCon h4").eq(0).addClass("cur");
    //$(".ProductsBoatBot").eq(0).show();
    $(".ProductsBoatCon h4").click(function(){
        $(this).addClass("cur").parent(".ProductsBoatCon").siblings().find("h4").removeClass("cur");
        $(this).next(".ProductsBoatBot").stop(true,true).slideDown().parent(".ProductsBoatCon").siblings().find(".ProductsBoatBot").hide();
    });
		
		
    //产品-详细
    $(".DetailProCanshuCon").eq(0).show();
    $(".DetailProCanshuspan span").eq(0).addClass("cur");
    $(".DetailProCanshuspan span").click(function(){
        $(this).addClass("cur").siblings().removeClass("cur");
        var index=$(this).index();
        $(".DetailProCanshuCon").hide().eq(index).show();
    });
		
	



    var htmls = $.trim($(".DetailProCanshuConTop").eq(1).html());
    if (htmls == "") {
        $(".DetailProCanshuspan span").eq(1).remove();
    }





    ///*20151231*/
   
    //    //var aId = $(this).attr("id")
    //    var aId = "ph4id48"
    //    $(".product_main .ProductsBoatCon").find("h4").removeClass("cur")
    //    $(".product_main .ProductsBoatCon").find(".ProductsBoatBot").hide();
    //    $(".product_main").find("#" + aId).addClass("cur");
    //    $(".product_main").find("#" + aId).next().show();
    //    $("html, body").animate({
    //        scrollTop: $("#"+aId).offset().top
    //    });



    $(".technical_qiehuan_hxsb dl dd.dd02").parent().find("dt").css("float","right")


























});











	