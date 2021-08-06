/*
基于scrollLeft和scrollTop
支持自适应
根据minsize计算child尺寸和滚动距离
支持总数,当前数,标题
支持jquery.easing,jquery.mousewheel
支持导航滚动及方向设定
*/
/*
======示例=====
<style>
body{margin:20px;}
#focus{height:200px;width:500px;position:relative;margin:auto;border:5px solid #ccc;}
.frame{width:100%;height:100%;overflow:hidden;}
.frame .child{height:100%;float:left;}
.nav{position:absolute;width:60px;height:20px;overflow:hidden;left:50%;bottom:5px;margin-left:-31px;border:1px solid #aaa;}
.nav a{float:left;width:20px;height:20px;line-height:20px;font-size:12px;color:#000;text-align:center;background:#f5f5f5;}
.nav a.now{background:#aaa;color:#fff;}
.prev{right:30px;bottom:5px;width:20px;height:20px;line-height:20px;text-align:center;background:#f5f5f5;position:absolute;color:#000;font-size:12px;font-family:Arial;}
.next{right:5px;bottom:5px;width:20px;height:20px;line-height:20px;text-align:center;background:#f5f5f5;position:absolute;color:#000;font-size:12px;font-family:Arial;}
.title{height:30px;line-height:30px;float:left;}
.count{height:30px;line-height:30px;float:right;}
.count b{font-weight:normal;}
.count em{font-style:normal;}
</style>
<div id="focus"><a href="javascript:;" class="prev">&lt;</a><a href="javascript:;" class="next">&gt;</a>
  <div class="frame">
	<div class="child" style="background:#faa;" title="c1"></div>
	<div class="child" style="background:#afa;" title="c2"></div>
	<div class="child" style="background:#aaf;" title="c3"></div>
	<div class="child" style="background:#ffa;" title="c4"></div>
	<div class="child" style="background:#aff;" title="c5"></div>
  </div>
  <div class="nav">
	<a href="javascript:;">1</a>
	<a href="javascript:;">2</a>
	<a href="javascript:;">3</a>
	<a href="javascript:;">4</a>
	<a href="javascript:;">5</a>
  </div>
  <div class="title"></div>
  <div class="count"><b></b>/<em></em></div>
</div>
<script>
$('#focus .frame').mScroll({
		     auto : 1,                   //自动开始
		direction : "h",                 //滚动方向,h横向,v纵向
		    dtype : "left",              //正反方向
		  isfocus : 0,                   //是否作为焦点图
		  minsize : 1,                   //最小数量
		    speed : 500,                 //滚动速度
		   easing : "",                  //缓冲类型
			delay : 5000,                //自动滚动间隔
			  nav : "#focus .nav a",                //导航按钮
        scrollnav : 0,                   //导航滚动
    nav_direction : "h",                 //导航方向,h横向,v纵向
			 prev : "#focus .prev",      //前一个
			 next : "#focus .next",      //后一个
		    index : "#focus .index",     //当前序号
			count : "#focus .count b",   //总数
			title : "#focus .count em",  //标题
			arrow : 1,                   //是否反转
			cycle : 1,                   //是否循环
		mousestop : 1,                   //鼠标划入停止
	   mousewheel : 0                    //开启滚轮事件
});
</script>
===============
*/

(function($) {
	$.fn.mScroll = function(options) {
		var opts = $.extend({},$.fn.mScroll.defaults,options); 
		this.each(function(){
			//初始化
			var f,s,c,n,np,ns,w,ww,h,hh,w1,h1,size,iv,ti,sw=1,idx=0,cm=0;
			f = $(this);
			
			if(f.children().is("ul") && f.children().size()>1 && !f.children().hasClass("child")){
				f.children().addClass("scroll");
			}
			else{
				f.children().wrapAll("<div class='scroll' style='height:100%;'></div>");
			}
			s = f.find(".scroll");
			
			size=s.children().size();
			$(opts.count).text(size);
			
			if(opts.cycle==1 && size>opts.minsize){s.append(s.html());}
			c = s.children();
			
			//初始化导航
			n = $(opts.nav);
			if(opts.scrollnav){
				w1 = n.width()+parseInt(n.css("margin-left"))+parseInt(n.css("margin-right"));
				h1 = n.height();
				np= $(opts.nav).parent();
				n.wrapAll("<div class='scroll' style='height:100%;'></div>");
				ns=np.find(".scroll");
				if(opts.nav_direction=="h"){
					ns.width(n.size()*w1);
					np.stop().animate({scrollLeft:0},100);
				}
				if(opts.nav_direction=="v"){
					ns.height(n.size()*h1);
					np.stop().animate({scrollTop:0},100);
				}
			}
			n.eq(0).addClass("now");
			
			//初始化尺寸
			if(opts.direction=="h"){
				cm=parseInt(c.css("margin-left"))+parseInt(c.css("margin-right"));				
				if(cm==0){
					w = Math.ceil(f.width()/opts.minsize);
					c.css({width:w});					
				}
				else{
					w=c.width()+cm;
				}
				s.css({width:100000});
				ww=c.size()*w;
				f.stop().animate({scrollLeft:0},100);
			}
			if(opts.direction=="v"){
				cm=parseInt(c.css("margin-top"))+parseInt(c.css("margin-bottom"));
				if(cm==0){
					h = Math.ceil(f.height()/opts.minsize);
					c.css({height:h});					
				}
				else{
					h=c.height()+cm;
				}
				s.height(100000);
				hh=c.size()*h;
				f.stop().animate({scrollTop:0},100);
			}
			
			//设置title
			if(opts.cycle==0){opts.auto=0;}
			$(opts.title).text(c.eq(0).attr("title"));
			$(opts.index).text(1);
			
			//焦点图自适应
			$(window).resize(function(){rs();});
			rs();
			setTimeout(function(){rs();},300);
			
			//自适应
			function rs(){
				sw==0;
				clearTimeout(ti);
				if(opts.direction=="h"){
					if(cm==0){
						w = Math.ceil(f.width()/opts.minsize);
						c.css({width:w});					
					}
					else{
						w=c.width()+cm;
					}
				}
				if(opts.direction=="v"){
					if(cm==0){
						h = Math.ceil(f.height()/opts.minsize);
						c.css({height:h});					
					}
					else{
						h=c.height()+cm;
					}
				}
				ww=c.size()*w;
				hh=c.size()*h;
				if(opts.direction=="h"){f.stop().scrollLeft(idx*w);}
				if(opts.direction=="v"){f.stop().scrollTop(idx*h);}
				ti=setTimeout(function(){
					sw==1;
				},500);
			}
			
			if(size>opts.minsize){//判断是否满足数量
			
			//自动开始
			if(opts.auto==1){
				iv = window.setInterval(function(){move(opts.dtype);},opts.delay);
			}
			
			//-------------start-------------//
			//滚动函数
			function move(act){
				if(sw==1){
					sw=0;
					if(opts.direction=="h"){
						if(act=="left"){
							if(opts.cycle!=1){
								if(idx+opts.minsize<size){
									idx++;
									f.animate({scrollLeft:f.scrollLeft()+w},opts.speed,opts.easing,function(){sw=1;});
								}
								else{sw=1;}
							}
							if(opts.cycle==1){	
								if(idx==size-1){idx=0;}
								else{idx++;}
								if(f.scrollLeft()+1>=ww*0.5){f.scrollLeft(0);}								
								f.animate({scrollLeft:f.scrollLeft()+w},opts.speed,opts.easing,function(){sw=1;});
							}
						}
						if(act=="right"){
							if(opts.cycle!=1){
								if(idx>0){
									idx--;
									f.animate({scrollLeft:f.scrollLeft()-w},opts.speed,opts.easing,function(){sw=1;});
								}
								else{sw=1;}
							}
							if(opts.cycle==1){
								if(idx==0){idx=size-1;}
								else{idx--;}
								if(opts.cycle==1 && f.scrollLeft()<=0){f.scrollLeft(ww*0.5);}								
								f.animate({scrollLeft:f.scrollLeft()-w},opts.speed,opts.easing,function(){sw=1;});
							}
						}						
					}
					if(opts.direction=="v"){
						if(act=="left"){
							if(opts.cycle!=1){
								if(idx+opts.minsize<size){
									if(opts)idx++;
									f.animate({scrollTop:f.scrollTop()+h},opts.speed,opts.easing,function(){sw=1;});
								}
								else{sw=1;}
							}
							if(opts.cycle==1){
								if(idx==size-1){idx=0;}
								else{idx++;}
								if(f.scrollTop()+1>=hh*0.5){f.scrollTop(0);}								
								f.animate({scrollTop:f.scrollTop()+h},opts.speed,opts.easing,function(){sw=1;});
							}	
						}
						if(act=="right"){
							if(opts.cycle!=1){
								if(idx>0){
									idx--;
									f.animate({scrollTop:f.scrollTop()-h},opts.speed,opts.easing,function(){sw=1;});
								}
								else{sw=1;}
							}
							if(opts.cycle==1){
								if(idx==0){idx=size-1;}
								else{idx--;}
								if(opts.cycle==1 && f.scrollTop()<=0){f.scrollTop(hh*0.5);}								
								f.animate({scrollTop:f.scrollTop()-h},opts.speed,opts.easing,function(){sw=1;});
							}
						}
					}
					n.removeClass("now");
					n.eq(idx).addClass("now");
					$(opts.title).text(c.eq(idx).attr("title"));
					$(opts.index).text(idx+1);					
					if(opts.scrollnav){autonav();}
				}
			}
			//左右按钮
			if(opts.prev){
				$(opts.prev).hover(function(){sw=1;});
				$(opts.prev).click(function(){
					if(opts.arrow==1){move("right");}
					else{move("left");}
					if(opts.auto){
						clearInterval(iv);
						iv = window.setInterval(function(){move(opts.dtype);},opts.delay);
					}
				});
				
			}
			if(opts.next){
				$(opts.next).hover(function(){sw=1;});
				$(opts.next).click(function(){
					if(opts.arrow==1){move("left");}
					else{move("right");}
					if(opts.auto){
						clearInterval(iv);
						iv = window.setInterval(function(){move(opts.dtype);},opts.delay);
					}
				});
			}
			
			//导航溢出部分滑动显示
			function autonav(){
				if(opts.nav_direction=="h"){					
					if(idx*w1==np.scrollLeft()){
						np.stop().animate({scrollLeft:np.scrollLeft()-w1},opts.speed);
					}
					if((idx+1)*w1==np.scrollLeft()+np.width()){
						np.stop().animate({scrollLeft:np.scrollLeft()+w1},opts.speed);
					}
					if(idx==0){np.stop().animate({scrollLeft:0},opts.speed);}
					if(idx==size-1){np.stop().animate({scrollLeft:size*w1},opts.speed);}
				}
				if(opts.nav_direction=="v"){
					if(idx*h1==np.scrollTop()){
						np.stop().animate({scrollTop:np.scrollTop()-h1},opts.speed);
					}
					if((idx+1)*h1==np.scrollTop()+np.height()){
						np.stop().animate({scrollTop:np.scrollTop()+h1},opts.speed);
					}
					if(idx==0){np.stop().animate({scrollTop:0},opts.speed);}
					if(idx==size-1){np.stop().animate({scrollTop:size*h1},opts.speed);}
				}
			}
			//导航点击
			n.each(function(index, element) {
				$(this).click(function(){
					if(opts.direction=="h"){f.stop().animate({scrollLeft:index*w},opts.speed,opts.easing,function(){sw=1;});}
					if(opts.direction=="v"){f.stop().animate({scrollTop:index*h},opts.speed,opts.easing,function(){sw=1;});}
					idx=index;
					n.removeClass("now");
					n.eq(idx).addClass("now");
					if(opts.scrollnav){autonav();}
					$(opts.title).text(c.eq(idx).attr("alt"));
					if(opts.auto){
						clearInterval(iv);
						iv = window.setInterval(function(){move(opts.dtype);},opts.delay);
					}						
				});
			});
			//鼠标滚轮
			if(opts.mousewheel){
				f.mousewheel(function(event,delta,deltaX,deltaY){
					if(delta<0){
						if(opts.arrow==1){move("left");}
						else{move("right");}
					}
					else{
						if(opts.arrow==1){move("right");}
						else{move("left");}
					}
					event.stopPropagation();
					event.preventDefault();
				});
			}
			//鼠标划入停止
			if(opts.mousestop && !opts.mousewheel){
				f.hover(function(){sw=0},function(){sw=1});
			}
			//-------------end-------------//
			}
		})
	};
	$.fn.mScroll.defaults = {
		     auto : 1,                    //自动开始
		direction : "h",                  //滚动方向,h横向,v纵向
		    dtype : "left",               //正反方向
		  isfocus : 0,                    //是否作为焦点图
		  minsize : 1,                    //最小数量
		    speed : 500,                  //滚动速度
		   easing : "",                   //缓冲类型
			delay : 5000,                 //自动滚动间隔
			  nav : null,                 //导航按钮
        scrollnav : 0,                    //导航滚动
    nav_direction : "h",                  //导航方向,h横向,v纵向
			 prev : null,                 //前一个
			 next : null,                 //后一个
		    index : null,                 //当前序号
			count : null,                 //总数
			title : null,                 //标题
			arrow : 1,                    //是否反转
			cycle : 1,                    //是否循环
		mousestop : 1,                    //鼠标划入停止
	   mousewheel : 0                     //开启滚轮事件
	}
})(jQuery);