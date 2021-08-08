;(function(jQuery){
	$.fn.extend({
		"Scroll" : function(opt){
			opt = $.extend({
				//滚动内容
				con : ".content",
				//滚动条
				scrolldiv : ".Scroll",
				//滚动条按钮
				scrollbtn : "span",
				//方向
				direction : "x",
				//鼠标滚轮速度
				wheelLen : 50,
				//设置自动计算滚动条按钮款或高
				ScrollAuto : true,
				scrollMax:0,
				init:function($warp){},
				warpLen:1000
			}, opt);

			var $thisEach = this;
			this.each(function(){
				var conLen = opt.init($(this));
				var $this = $(this),
				$con = $(opt.con,$this),
				$this_Len = opt.warpLen && opt.warpLen > 0 ? opt.warpLen : (opt.direction == "y" ? $this.height() : $this.width()),
				$scrolldiv = $(opt.scrolldiv,$this),
				$scrollbtn = $(opt.scrollbtn,$scrolldiv),
				ismove = false,
				css_margin = opt.direction == "y" ? "margin-top" : "margin-left",
				//滚动条的长度
				scrollMax=
					!opt.scrollMax || opt.scrollMax == 0 ?
					(opt.direction == "y" ?
						$scrolldiv.height():
						$scrolldiv.width()
					)
					: opt.scrollMax,
				//滚动条按钮长度
				SpanLen = opt.direction == "y" ? $scrollbtn.outerHeight(true) : $scrollbtn.outerWidth(true),
				//设置鼠标按下时鼠标样式
				c = $("<div></div>");

				conLen -= $this_Len;
				//自动计算滚动条按钮
				if(opt.ScrollAuto){
					if(opt.direction == "y")
						$scrollbtn.css("height",scrollMax * $this.outerHeight() / conLen)
					else
						$scrollbtn.css("width",scrollMax * $this.outerWidth() / conLen)
					SpanLen = opt.direction == "y" ?
						$scrollbtn.outerHeight(true) :
						$scrollbtn.outerWidth(true)
				}
				//设置鼠标按下时鼠标
				c.addClass("scroll-div-zhezhao").css({
					"z-index":9999,
					top:0,
					left:0,
					"position":"absolute",
					"width":$(document).width(),
					"height":$(document).height(),
					"cursor":"pointer"
				});
				//滚动条按钮事件
				$scrollbtn.bind({
					"mousedown":function(e){
						e.preventDefault();

						ismove=true;
						c.appendTo($("body"))
					}
				});

				//鼠标滑动事件
				$this.bind("mousewheel",function(e,d){
					e.preventDefault();
					//d==1;//滚动条上滚
					//获取滚动条高度
					var conLeftorTop = Math.abs(parseFloat($con.css(css_margin)));
					//判断滚动条高度是否超过最大高度				
					if(conLeftorTop>conLen)conLeftorTop=conLen;

					//滚动方向 1：上滚，-1：下滚
					if(d==1)
						conLeftorTop-=opt.wheelLen;
					else
						conLeftorTop+=opt.wheelLen;
					
					//判断滚动条高度是否超过最小高度 0 				
					if(conLeftorTop < 0 ) conLeftorTop = 0;
					//判断滚动条高度是否超过最大高度
					if(conLeftorTop > conLen) conLeftorTop = conLen;
					//计算滚动条的位置
					var spanLeft = (scrollMax - SpanLen) * conLeftorTop / conLen;
					
					if(spanLeft < 0) spanLeft = 0;
					
					if(spanLeft > scrollMax-SpanLen)spanLeft = scrollMax - SpanLen;
					//设置滚动条和按钮的位置
					$scrollbtn.css(css_margin, spanLeft);
					//滚动内容
					$con.css(css_margin, -conLeftorTop);
					
				})
				
				$(document).bind({
					//鼠标拖动事件
					"mousemove":function(e){
						
						e.preventDefault();
						if(ismove){
						
							//计算滚动条滚动的位置
							var ml =  (
								opt.direction == "y" ?
									e.pageY - $scrolldiv.offset().top : 
									e.pageX - $scrolldiv.offset().left
								)
								-SpanLen / 2;
								//alert($scrolldiv.offset().left);
								//alert(e.originalEvent.pageX - $scrolldiv.offset().left);
							
							if(ml > scrollMax - SpanLen)
								ml = scrollMax - SpanLen;
							if(ml<0)
								ml = 0;
								
							//console.log(ml);
							//console.log((scrollMax - SpanLen) * conLen);
							console.log(conLen);
							//console.log(SpanLen);
							//console.log(scrollMax);
							
							//设置滚动条按钮和内容的移动距离
							$scrollbtn.css(css_margin,ml);
							$con.css(css_margin,-ml / (scrollMax - SpanLen) * conLen);
						}
					},
					//鼠标松开事件
					"mouseup":function(){
						ismove = false;
						c.remove();
					},
					//鼠标离开事件  暂时无用
					"mouseleave":function(){  
						ismove = false;
						c.remove();
					}
				})
			});
			return $thisEach;
		}
	})
})(jQuery);