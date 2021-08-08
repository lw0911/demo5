
var menu = {
	init:function(){
		this.li = $("#navBox2 li");
		this.li.bind("mouseover",function(){
			$(this).addClass("hover");
			//$(this).find(".xiala").slideDown();
		});
		this.li.bind("mouseleave",function(){
			//$(this).find(".xiala").slideUp(250);
			$(this).removeClass("hover");
		});
	}
}


var hdjy4 = {
	init:function(){
		this.li = $("#navBox");
		this.li.bind("mouseover",function(){
			//$(this).addClass("hover");
			$(this).find(".menu_baise").slideDown();
		});
		this.li.bind("mouseleave",function(){
			$(this).find(".menu_baise").slideUp(250);
			//$(this).removeClass("hover");
		});
	}
}


var topc1 = {
	init:function(){
		this.li = $("#navBox3 li");
		this.li.bind("mouseover",function(){
			$(this).addClass("hover");
			//$(this).find(".xiala").slideDown();
		});
		this.li.bind("mouseleave",function(){
			//$(this).find(".xiala").slideUp(250);
			$(this).removeClass("hover");
		});
	}
}


$(function(){
	menu.init();
});


$(function(){
	hdjy4.init();
});

$(function(){
	topc1.init();
});


/*
	o.box:滚动盒子
	o.li:滚动子集
	o.vali:滚动方向
*/

//滚动类
function MoveScroll(o){

	this.box = $("#"+o.box);
	this.li = this.box.find(o.li);
	this.l = this.li.length;
	var that= this;
	/*
	if(o.vali){
		this.vali = o.vali;
		this.box.height(100*this.l+"%");
		this.li.height(100/this.l+"%");
	}else{
		this.box.width(100*this.l+"%");
		this.li.width(100/this.l+"%");
	}
	
	
	var that= this;
	if(o.bp){
		this.bp = $("#"+o.bp);
		this.bp.bind("click",function(){
			that.c>0?that.c--:that.c=that.l-1;
			if(that.timer){
				clearInterval(that.timer);
			}
			that.move(1);
		});
	};
	if(o.bn){
		this.bn = $("#"+o.bn);
		this.bn.bind("click",function(){	
			that.c<that.l-1?that.c++:that.c=0;
			if(that.timer){
				clearInterval(that.timer);
			}
			that.move(1);
		});
	};*/
	
	//间隔时间
	this.t = o.t||5000;
	
	if(o.bnum){
		this.bnum = $("#"+o.bnum);
		var _html = "";
		for(var i =0;i<this.l;i++){
			_html += "<"+o.bnum_tag+" i="+i+"></"+o.bnum_tag+">";
		};
		this.bnum.html(_html);
		this.bnum_li = this.bnum.find(o.bnum_tag);
		this.bnum_li.bind("mouseover",function(){
			if($(this).attr("i")==that.c)return false;
			that.c = $(this).attr("i");
			if(that.timer){
				clearInterval(that.timer);
			}
			that.move(1);
		});		
	}
	//这个是默认显示的位置，默认显示第一个，从0开始算起
	this.c = 0;
	/*	
	this.sImgNext  = null;	
	this.sImgPre  = null;

	if(o.sImgNext){
		this.sImgNext = $("#"+o.sImgNext);
	};
	if(o.sImgPre){
		this.sImgPre = $("#"+o.sImgPre);		
	};*/
	//默认滚动一次
	this.move();

	//判断是否需要自动滚动
	if(o.auto){
		this.autoPlay();
	}
	
}
MoveScroll.prototype={
	move:function(test){
		var that  = this;
		this.li.hide();
		this.li.eq(this.c).fadeIn(function(){
			if(test){
					that.autoPlay();
			};
		});
		/*
		if(this.vali){
			this.box.stop().animate({top:-this.c*100+"%"},function(){
				if(that.sImgNext){
					if(that.c<that.l-1){						
						that.sImgNext.html("<img src='"+that.li.eq(that.c+1).attr("link")+"' />");
					}else{
						that.sImgNext.html("<img src='"+that.li.eq(0).attr("link")+"' />");			
					};
				}
				if(that.sImgPre){
					if(that.c>0){						
						that.sImgPre.html("<img src='"+that.li.eq(that.c-1).attr("link")+"' />");						
					}else{
						that.sImgPre.html("<img src='"+that.li.eq(that.l-1).attr("link")+"' />");										
					};
				}
				if(test){
					that.autoPlay();
				}	
			});		
		}else{
			this.box.stop().animate({left:-this.c*100+"%"},function(){				
				if(that.sImgNext){
					if(that.c<that.l-1){						
						that.sImgNext.html("<img src='"+that.li.eq(that.c+1).attr("link")+"' />");
					}else{
						that.sImgNext.html("<img src='"+that.li.eq(0).attr("link")+"' />");			
					};
				}
				if(that.sImgPre){
					if(that.c>0){						
						that.sImgPre.html("<img src='"+that.li.eq(that.c-1).attr("link")+"' />");						
					}else{
						that.sImgPre.html("<img src='"+that.li.eq(that.l-1).attr("link")+"' />");										
					};
				}
				if(test){
					that.autoPlay();
				};	
			});		
		}
		*/
		
		//如果有小点
		if(this.bnum){
			this.bnum_li.removeClass("on");
			this.bnum_li.eq(this.c).addClass("on");
		}
	},
	autoPlay:function(){
		var that = this;
		//自动播放
		this.timer = setInterval(function(){
			that.c<that.l-1?that.c++:that.c=0;
			that.move();
		},that.t);
	}
}

