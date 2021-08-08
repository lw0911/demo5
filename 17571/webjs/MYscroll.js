;(function($){
	$.fn.extend({
		"myscroll":function(opt){
			
			var init={
				prev:"",
				next:"",
				scrollbox:"",
				number:""
			}

			var self=this;
			var setting=$.extend(init,opt);
			
			var box=self.find("ul");
			var boxli=self.find("li");
			var boxliwidth=self.find("li").outerWidth(true);
			var next=setting.next;
			var prev=setting.prev;
			var shul=setting.number;
			
			if(boxli.length > shul){
			$(next).click(function(){
				if(box.is(":animated")) {return};
				var boxli=self.find("li");
				box.animate({left:-boxliwidth},500,
					function(){
					box.css({left:0})
					boxli.eq(0).appendTo(box)
				})
			})
			
			$(prev).click(function(){
				if(box.is(":animated")) {return};
				var boxli=self.find("li");
				box.css({left:-boxliwidth});
				boxli.last().prependTo(box);
				box.animate({left:0},500)
			})
			
			
			var auto = setInterval(function(){
				$(next).trigger("click");	
			},3000)
			
			
			$(self).hover(function(){
				clearInterval(auto)
			},function(){
				auto = setInterval(function(){
				$(next).trigger("click");	
				},3000)	
			})
			
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