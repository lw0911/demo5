;(function($){
	$.fn.extend({
		"myscroll":function(opt){
			
			var init={
				prev:"",
				next:"",
				scrollbox:"",
				number:"1",
                auto:false
			}

			var self=this;
			var setting=$.extend(init,opt);
			
			var box=self.find("ul");
			var boxli=self.find("li");
			var boxliwidth=self.find("li").outerWidth(true);
			var next=setting.next;
			var prev=setting.prev;
			var shul=setting.number;
            var autoplay=setting.auto;
            
            var oneL = $(box).find('li').length;
            $(box).css('width', boxliwidth*oneL);
			
			if(boxli.length > shul){
			$(next).click(function(){
				if(box.is(":animated")) {return};
				// var boxliwidth=self.find("li").outerWidth(true);
				// var boxli=self.find("li");
				// box.animate({left:-boxliwidth},600,
				// 	function(){
				// 	box.css({left:0})
				// 	boxli.eq(0).appendTo(box)
				// });
				tNext();
			});
			
			$(prev).click(function(){
				if(box.is(":animated")) {return};
				var boxliwidth=self.find("li").outerWidth(true);
				var boxli=self.find("li");
				box.css({left:-boxliwidth});
				box.animate({left:0},600)
				boxli.last().prependTo(box);
			});
			
			
            if(autoplay){
                var timer = setInterval(function(){
                    // $(next).trigger("click");	
					tNext();
					console.log(1);
                },5000)
                
                
                $(self).hover(function(){
                    clearInterval(timer)
                },function(){
                    timer = setInterval(function(){
                    // $(next).trigger("click");
					tNext();	
                    },5000)	
                })
            }
			
			}
			function tNext(){
				var boxliwidth=self.find("li").outerWidth(true);
				var boxli=self.find("li");
				box.animate({left:-boxliwidth},600,
					function(){
					box.css({left:0})
					boxli.eq(0).appendTo(box)
				});
			}		
			
		}		
	});
	
	
	
	$.fn.extend({
		
		"rol":function(roll){
			
			var fnboxroll = $(this);
			var fnbox = $.extend(
			{
				next:"",
				prev:"",
				fnboxrollcontent:"",
				fnboxrollcontent_child:"",
				num:8
			},roll);
			
			var box = $(fnbox.fnboxrollcontent);
			var boxli = $(fnbox.fnboxrollcontent_child);
			var boxliwidth = $(fnbox.fnboxrollcontent_child).outerWidth(true);
			var next = $(fnbox.next);
			var prev = $(fnbox.prev);
			var i = 0;
			
			
			
			next.click(function(){
			   if(box.is(":animated")){return false}
			   i++;
			   if( i > boxli.length - fnbox.num ){ 
			   	i--; 
			   	return false;
			   }
			   
			   //var mywidth=$(".dashijilist").innerWidth()+fnboxroll.position().left;
			   
			    var mylen=boxli.slice(3,3+i).length;
			    var myprevWidth=0;
				
				for(var j=3;j<3+mylen;j++)
				{
					myprevWidth+=boxli.eq(j).outerWidth(true);
				}

			     box.animate({left:-myprevWidth+"px"})
			})	
			
			prev.click(function(){
			   i--
			   if(i < 0){i = 0;return}
			   if(box.is(":animated")){return false}
			   
			    var mylen=boxli.slice(3,3+i).length;
			    var myprevWidth=0;
				
				for(var j=3;j<3+mylen;j++)
				{
					myprevWidth+=boxli.eq(j).outerWidth(true);
				}

			     box.animate({left:-myprevWidth+"px"})
			})	
			
		}
	});
	
	
	
	$.fn.extend({
		"OptionSlider":function(opt){
			
			var init={
				thisbox:"",        //滚动层
				thisli:"",         //计算圆点个数
				thisdotbox:""     //圆点主层
				
			}

			var self=this;
			var setting=$.extend(init,opt);
			
			var thiswidht = self.width();
			var box=$(setting.thisbox);
			var li=$(setting.thisli);
			var dotbox=$(setting.thisdotbox);
			var newsleng = $(li).length;
			
			
			var dothtml="";
			for(var i=0;i<newsleng;i++){
				dothtml+= "<a href='javascript:;'>"+i+"</a>";
			}
			
			dotbox.append(dothtml);
			
			dotbox.find('a').eq(0).addClass("cur");
			
			dotbox.find('a').live("click",function(){
				var t=$(this).index();
				$(this).addClass("cur").siblings().removeClass("cur");
				box.stop(true).animate({left:-t*thiswidht},500)
			})
			
			
		}		
	});
	
		
})(jQuery);



;(function($){
  $.fn.xuan = function(xuan1){
    var xuank = {
        current : 'cur',
        xianshi : '', //选项卡按钮
        yingc : '' //隐藏的div
    };
   var bingh = $.extend(xuank,xuan1);
   var txn = this;
   txn.click(function(){
      $(this).toggleClass(xuank.current);
      $(this).parent().siblings().find(bingh.xianshi).removeClass(xuank.current);
      $(this).siblings(bingh.yingc).slideToggle();
      $(this).parent().siblings().find(bingh.yingc).slideUp();
   })
   txn.eq(0).trigger('click')
  }
})(jQuery);

