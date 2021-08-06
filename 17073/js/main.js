$(".tab li").click(function(){
	 $(this).addClass("active").siblings().removeClass("active");
    var index = $(this).index();
    $(".ta-list").removeClass("show");
    $(".tab"+index).addClass("show");	
});
$(".ke").hover(function(){
	$(".slide .ke p").slideToggle();
});
//回到顶部按钮***********************************************************
(function(){//回到顶部按钮函数
    var clientH = document.documentElement.clientHeight; //获取当前视口高度
    var backTop = $('#go_top');
//  $(window).on('scroll',function(){
//      var osTop=document.documentElement.scrollTop||document.body.scrollTop; //计算的当前高度，兼容IE及其他
//      if (osTop >= clientH/2) {
//          backTop.fadeIn(200);
//          backTop.css('display', 'block');
//      } else {
//          backTop.fadeOut(200);
//      }
//  });
    backTop.click(function(){
        $('body,html').animate({scrollTop:0}, 360);
    })
})();
// JavaScript Document
(function($){
	$.fn.myScroll = function(options){
	//默认配置
	var defaults = {
		speed:40,  //滚动速度,值越大速度越慢
		rowHeight:24 //每行的高度
	};
	
	var opts = $.extend({}, defaults, options),intId = [];
	
	function marquee(obj, step){
	
		obj.find("ul").animate({
			marginTop: '-=1'
		},0,function(){
				var s = Math.abs(parseInt($(this).css("margin-top")));
				if(s >= step){
					$(this).find("li").slice(0, 1).appendTo($(this));
					$(this).css("margin-top", 0);
				}
			});
		}
		
		this.each(function(i){
			var sh = opts["rowHeight"],speed = opts["speed"],_this = $(this);
			intId[i] = setInterval(function(){
				if(_this.find("ul").height()<=_this.height()){
					clearInterval(intId[i]);
				}else{
					marquee(_this, sh);
				}
			}, speed);

			_this.hover(function(){
				clearInterval(intId[i]);
			},function(){
				intId[i] = setInterval(function(){
					if(_this.find("ul").height()<=_this.height()){
						clearInterval(intId[i]);
					}else{
						marquee(_this, sh);
					}
				}, speed);
			});
		
		});

	}

})(jQuery);
