;(function($){
	$.extend( jQuery.easing,{
		
		easeOutQuart: function (x, t, b, c, d) {
			return -c * ((t=t/d-1)*t*t*t - 1) + b;
		}

		});
	
	$.fn.scrollBar = $.fn.scrollbar = function(option){
		
		
		var self = $(this),
		
			inner = self.children(),
			
			ow = self.outerWidth(),		// 外部宽度
			
			oh = self.outerHeight(),		//外部高度
			
			iw = inner.outerWidth(true),		//内部宽度 包含外边距
			
			ih = inner.outerHeight(true),	// 内部高度
			
			wp = ow / iw,			//外部和内部的宽比
			
			hp = oh / ih,			// 外部和内部的高比
			
			fx = "easeOutQuart";
			
		var set = $.extend($.fn.scrollBar.def,option),
		
			lengthways	=	null,
			lslide	=	null,
			lprecent = 0,
			
			horizontal	=	null,
			hslide = null,
			hprecent = 0,
			
			createLengthways  =  function(){
				
				create(true);
				
			},
			
			createHorizontal  = function(){
				
				create(false);
				
			},
			
			create = function(b){
				
				
				if(b){
					if(hp >= 1) return; //  内容区太小 推出
					
					lengthways = $('<div class="'+set.lengthwaysClass+'"></div>');
					lslide = $('<i class="'+set.lengthwaysClass+'-slide"></i>');
					
					lengthways.append(lslide);
					
					lengthways.css({
						height : oh
					});
					
					lslide.css({
						height :　parseInt(oh * hp)	
					});
				
					
					self.append(lengthways);
					
					lslide.mousedown(function(e){
						
						lslide.data({mousedown : true , top : e.clientY - lslide.offset().top});
						e.stopPropagation();
						e.preventDefault();
						
					});
					
					$(document).mouseup(function(){
						lslide.data({mousedown : false});
					});
					
					var timer1 = null;
					$(document).mousemove(function(e){
						clearTimeout(timer1);
						timer1 = setTimeout(function(){
							if(lslide.data('mousedown')){
								var t = e.clientY - self.offset().top - lslide.data('top');
								if(t < 0) t=0;
								if(t >= self.innerHeight() - lslide.height()){
									 t = self.innerHeight() - lslide.height();
								}
								lslide.css('top',t);
								lprecent = t/(self.outerHeight() - lslide.outerHeight());
								setContentTop(lprecent);
							}
						},100);
						
					});
					
					self.mousewheel(function(e,d){
						lprecent+=0.1*-d;
						if(lprecent <=0){
							lprecent=0;
							stop(e);
						}
						if(lprecent >=1){
							lprecent=1;
							stop(e);
						} 
						var top = (self.innerHeight() - lslide.height())*lprecent;
						lslide.css({top : top});
						setContentTop(lprecent);
						e.stopPropagation();
						e.preventDefault();
					});
					
					
				}else{
					if(wp >= 1) return; //  内容区太小 推出
					
					horizontal = $('<div class="'+set.horizontalClass+'"></div>');
					hslide = $('<i  class="'+set.horizontalClass+'-slide"></i>');
					
					horizontal.append(hslide);
					
					horizontal.css({
						width : ow
					});
					
					hslide.css({
						width :　ow * wp	
					});
					
					self.append(horizontal);
					
					hslide.mousedown(function(e){
						
						hslide.data({mousedown : true , left : e.clientX - hslide.offset().left});
						e.stopPropagation();
						e.preventDefault();
						
					});
					
					$(document).mouseup(function(){
						hslide.data({mousedown : false});
					});
					
					$(document).mousemove(function(e){
						if(hslide.data('mousedown')){
							var l = e.clientX - self.offset().left - hslide.data('left');
							if(l < 0) l=0;
							if(l >= self.innerWidth() - hslide.width()){
								 l = self.innerWidth() - hslide.width();
							}
							hslide.css('left',l);
							
							hprecent = l/(self.innerWidth() - hslide.width());
							
							setContentLeft(hprecent);
							
						}
					});
					
					self.mousewheel(function(e,d){
						hprecent+=0.1*-d;
						if(hprecent <=0){
							 hprecent=0;
							 e.stop(e);
						}
						if(hprecent >=1){
							hprecent=1;
							 e.stop(e);
						} 
						
						var left = (self.innerWidth() - hslide.width())*hprecent;
					
						hslide.css({left : left});
						setContentLeft(hprecent);
						e.stopPropagation();
						e.preventDefault();
					});
					
				}
			},

			stop = function(ev){
				ev.stopPropagation();
				ev.preventDefault();
			},
			
		 	setContentTop = function(percent){
				
					var top = -(ih - self.height())*percent;
					inner.stop(true).animate({marginTop : top},set.speed,fx);
			},
			
			setContentLeft = function(percent){
				
					var left = -(iw - self.width())*percent;
					inner.stop(true).animate({marginLeft : left},set.speed,fx);
			}
		
		switch(set.direction){
			
			case 2:
				createLengthways();
				break;
			
			case 1:

				createHorizontal();
				break;
			case 0:
			
				createLengthways();
				createHorizontal();
				break;
		}
			
		/*// 外部从新初始化
		
		var init = function(){
				ow = self.outerWidth();		// 外部宽度
				oh = self.outerHeight();		//外部高度
				iw = inner.outerWidth(true);		//内部宽度 包含外边距
				ih = inner.outerHeight(true),	// 内部高度
				wp = ow / iw;			//外部和内部的宽比
				hp = oh / ih;			// 外部和内部的高比
				
			if(lengthways){
				lengthways.css({
					height : oh
					
				});
				lslide.css({
					height :　oh * hp
					
					
				});
					
			}
			
			if(horizontal){
				lengthways.css({
					width : ow	
				});
				
				lslide.css({
					width : ow * wp 	
				});
			}
		}
		
		$(window).resize(function(){
			init();
		});*/
		
	}
	
	$.fn.scrollBar.def = {
		speed	 :		100 ,	// 动画延迟 0为不加动画
		direction :  2, // 0:横向纵向都添加滚动条  1：横向滚动条 2：纵向滚动条 
		lengthwaysClass : "ui-lengthways",  // 纵向滚动条类名 
		horizontalClass : "ui-horizontal"	//横向滚动条类名
	}
	
	// console.log(1);	
})(jQuery);