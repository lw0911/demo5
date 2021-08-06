jQuery(document).ready(function(){
	var qcloud={};
	$('[_t_nav]').hover(function(){
		var _nav = $(this).attr('_t_nav');
		clearTimeout( qcloud[ _nav + '_timer' ] );
		qcloud[ _nav + '_timer' ] = setTimeout(function(){
		$('[_t_nav]').each(function(){
		$(this)[ _nav == $(this).attr('_t_nav') ? 'addClass':'removeClass' ]('cur');
		});
		$('#'+_nav).stop(true,true).slideDown(200);
		}, 150);
	},function(){
		var _nav = $(this).attr('_t_nav');
		clearTimeout( qcloud[ _nav + '_timer' ] );
		qcloud[ _nav + '_timer' ] = setTimeout(function(){
		$('[_t_nav]').removeClass('cur');
		$('#'+_nav).stop(true,true).slideUp(200);
		}, 150);
	});
});
$.extend({
    isEmpty:function(str){
        if(str===undefined || str==null){
            return true;
        }
        str= $.trim(str);
        if(str==""){
            return true;
        }
        return false;
    },
    
    //获得url参数
    GET:function(param){
        var url=document.URL;
        var paramList=url.split("?")[1];
        if(paramList){
            var arr=paramList.split("&");
            for(var i=0;i<arr.length;i++){
                var arr2=arr[i].split("=");
                if(arr2[0]==param){
                    return arr2[1];
                }
            }
        }
        return false;
    },
});
/*
 *   视频播放
 *  speed:速度，300ms
 */
$.fn.videoPlay = function(options){
    var defaults = {
        speed:300,
        src:""
    }
    var options = $.extend(defaults, options);
    this.each(function(){
        if($.isEmpty(options.src)){
            return;
        }
        var _bj=$('<div class="popVideoBj"></div>').appendTo("body");
        var _pop=$('<div class="popVideo"></div>').appendTo("body");
        var _close=$('<a href="javascript:void(0)" class="popVideoClose"></a>').appendTo("body");
        _pop.append('<video src="'+options.src+'" controls="controls" autoplay="autoplay" width="100%" height="100%"></video>');
        //_pop.append('<iframe src="'+options.src+'?isAutoPlay=true&isShowRelatedVideo=false" ></iframe>');
        _bj.fadeTo(options.speed,0.9);
        _pop.slideDown(options.speed);
        _close.on("click",function(){
            _bj.fadeTo(options.speed,0);
            _pop.slideUp(options.speed,function(){
                _bj.remove();
                _pop.remove();
                _close.remove();
            });
        });
    });
};
    $(document).on("click",".videoPlay",function(){
        var _this=$(this);
        var _src=_this.attr("href");
        _this.videoPlay({src:_src});
        return false;
    });
	//6.23增加
$(".lang").hover(function(){
		$(".lang_list").stop(true,true).slideToggle(300);	
		if($(this).hasClass("current"))
		{
			$(this).removeClass("current");
		}
		else
		{
			$(this).addClass("current");
		}
	});	
	
	/* 7.2增加 */
	
$(".xuanfu_box ul li").hover(function(){
	$(this).children(".xuanfu_left,.xuanfu_dingdan").stop(true,true).animate({right:55,queue:true});
	$(this).children(".xuanfu_left,.xuanfu_dingdan").css("visibility","visible");
  },function(){
	$(this).children(".xuanfu_left,.xuanfu_dingdan").css("visibility","hidden");
	$(this).children(".xuanfu_left,.xuanfu_dingdan").stop(true,true).animate({right:80,queue:true});
});
	
$(".back-top").on("click",function(){
	$("html,body").animate({scrollTop:0});
});

$('.submit-query-order').click(function() {
    var orderNo = $('.query-order-no').val();
    if(!orderNo || $.trim(orderNo).length == 0) {
       $('.query-order-no').css({"border-bottom":"1px solid #ff3300"});
       return false;
    } 
    $.cookie('_annto_last_search_order_number',orderNo,{ path: "/"});
    window.location.href="../query.htm#order";
 });
	
	
	
	
	
	
	
	
	
	
	
	
	