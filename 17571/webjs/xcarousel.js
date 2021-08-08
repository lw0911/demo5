;(function($){
	//待增加功能
	/*
		6.支持鼠标滚轮 需要插件支持
	*/
	$.fn.xcarousel = function(options){

		var def = {
			auto	:	4,			//动画间隔时间 秒 0为不自动播放
			speed	:	500,		//动画持续时间
			direction : 'left',		// left  up
			size	:	1,			//可视区域的个数(使用列表分页时需指定 用于分页)
			scroll	:	1,			//滚动的数目
			easing	:	'swing',	//动画效果
			cycle	:	true,		//是否无缝循环滚动 默认循环 否则到末尾停止
			suffix	:	'-disable',	//必须cycle为false,且指定了前进按钮和后退按钮才起作用。 当滚动到末尾时，会在当前class上追加该类名
			abs		:	false,		//是否绝对定位布局 提供对单个元素位置大小变化的可能
			pause	:	true,		//是否鼠标进入后停止 移开后继续 包含分页按钮和前后按钮在内
			prev	:	'',			//前按钮
			next	:	'',			//后按钮
			pager	:	'',			//分页按钮
			active	:	'cur',		//分页按钮当前状态的className
			distance	:	0,	// 指定元素之间距离，单个(非必要情况，勿提供，程序会自动计算)
			initCallback : $.noop,		//初始化完毕后执行回调函数
			beforeChange : $.noop,		// 跳转之前调用 参数 当前可视区域第一个元素的索引 this指向 c
			afterChange  : $.noop		// 跳转之后调用
		};

		var o = $.extend({},def,options);		// 参数

		var self = this,						//包裹
			r	=	this.children(),
			l	=	r.children(),
			len	=	l.length,					//未复制DOM节点前的长度 真实长度
			pageCount = Math.ceil(len / o.size);	// 每屏幕展示size个，分多少屏
		
		var c = {	
			i		:		0,				//　当前第几个元素　以可视区域第一个为准	

			_init	:	 function(){		// 	初始化
				
				var _this = this;

				// 前进后退按钮
				if(o.prev || o.next){this._usePrevNext();}
				//检查前后按钮是否可用
				if(!o.cycle && o.suffix){
					this._prevNextUseful();
				}

				// 个数不够一屏 退出
				if(len < o.size) return;
				if(len == 1) return;
				
				//循环滚动
				if(o.cycle){
					// 克隆两次 避免滚动个数太多，出现空白
					l.clone().appendTo(r);
					l.clone().appendTo(r);	
				}
				this._cssInit();

				if(o.distance){
					this.distance = o.distance;	// 手动给出的距离
				}else{
					if(o.direction == 'left'){
						this.distance = l.eq(1).position().left - l.eq(0).position().left; // 横向移动的距离 包括内外边距
					}else if(o.direction == 'up'){
						this.distance = l.eq(1).position().top - l.eq(0).position().top;
					}
				}
				// 转化布局
				if(o.abs) {this._useAbs();}
				// 分页
				if(o.pager){this._usePager();}
				// 自动播放
				if(o.auto > 0){this.autoPlay();}
				o.initCallback.call(this,c);	// 初始化完成回调
			},

			_cssInit : function(){
				// css初始化
				self.css({'position':'relative',width:self.width(),height:self.height()});
				if(o.direction == 'left'){
					r.children().css({float:'left',display : 'inline'});
					r.css({width:r.children().length * this.distance });
				}else{
					r.children().css({float : 'none',display : 'block'});
					r.css({height:r.children().length * this.distance });
				}
			},
			// 从置位置，实现无缝滚动
			_afterReset : function(){
				if(this.i >= len){
					this.i = this.i - len;
					if(o.direction == 'left'){
						r.css({left : this.i * -this.distance});
					}else if(o.direction == 'up'){
						r.css({top : this.i * -this.distance});
					}
				}
			},
			//使用绝对定位
			_useAbs	: function(){
				// 将布局转化为绝对定位布局
				r.css({'height' : r.height()});
				r.children().each(function(){
					var w = $(this).width(),
						h = $(this).height(),
						l =	$(this).position().left,
						t = $(this).position().top;
					var str = "width:" + w + ',height:' + h + ',left:' + l + ',top:'+t;
					$(this).attr({'rel':str}).css({'left':l,'top':t});
				});
				r.children().css({'position':'absolute'});
			},
			// 使用列表分页
			_usePager : function(){
				this.pager = o.pager;
				var _this = this;
				if(typeof o.pager == 'string'){
					this.pager = $(o.pager);
				}
				var str = '';
				var cur = Math.floor(this.i / o.size);
				for(var i=0; i<pageCount; i++){
					if(i === cur){
						str += '<a class="'+o.active+'" href="javascript:;">'+(i+1)+'</a>';
					}else{
						str += '<a href="javascript:;">'+(i+1)+'</a>';
					}
				}
				this.pager.html(str);
				this.pager.children('a').click(function(){
					var i = _this.pager.children('a').index(this);
					_this.skip(i*o.size);
					$(this).addClass(o.active).siblings().removeClass(o.active);
				});
			},
			_usePrevNext : function(){
				// 往前按钮
				if(o.prev){
					this.prevBtn = o.prev;
					if(typeof o.prev == 'string'){
						this.prevBtn = $(o.prev);
					}
					this.prevBtn.click(function(){
						if(r.filter(':animated').length < 1){c.prev()};
						
					})
				}
				//往后按钮
				if(o.next){
					this.nextBtn = o.next;
					if(typeof o.next == 'string'){
						this.nextBtn = $(o.next);
					}
					this.nextBtn.click(function(){
						if(r.filter(':animated').length < 1){c.next()};
					})
				}
			},
			// 循环滚动
			_cycle : function(i){
				var _this = this;
				var prev = this.i;
				var next = i;
				if(i<=0){
					i = i + len;
					if(o.direction == 'left'){
						r.css({left : (prev + len)*-this.distance});
					}else if(o.direction == 'up'){
						r.css({top : (prev + len)*-this.distance});
					}
				}
				if(o.direction == 'left'){
					var p = {'left' : -this.distance * i };
				}else if(o.direction == 'up'){
					var p = {'top' : -this.distance * i };
				}
				r.animate(p,o.speed,o.easing,function(){
					_this.i = i;
					//从新调整位置
					_this._afterReset();
					//分页检查
					if(o.pager){
						_this._pageCheck();
					}
					o.afterChange.call(_this,i);
				});
			},
			
			// 非循环滚动 到头部或尾部就停止(大部分手动播放需要此功能)
			_move : function(i){
				var prev = this.i;
				var _this = this;
				if(i > len - o.size){
					i = len - o.size;	
				}
				if(i < 0){i = 0;}
				if(o.direction == 'left'){
					var p = {'left' : -this.distance * i };
				}else if(o.direction == 'up'){
					var p = {'top' : -this.distance * i };
				}
				this.i = i;
				this._prevNextUseful();
				r.animate(p,o.speed,o.easing,function(){
					o.afterChange.call(_this,i);
				});
			},
			// 前后按钮是否可用判断
			_prevNextUseful : function(){
				
				if(!this.prevClass || !this.nextClass){
					if(o.prev && typeof o.prev == 'string'){
						// 将className存储起来
						this.prevClass = o.prev.split(/\s+/g).pop().substr(1);
					}
					if(o.next && typeof o.next == 'string'){
						// 将className存储起来
						this.nextClass = o.next.split(/\s+/g).pop().substr(1);
					}
				}
				if(this.i === 0){
					this.prevBtn.addClass(this.prevClass+o.suffix);
				}else{
					this.prevBtn.removeClass(this.prevClass+o.suffix);
				}
	
				if(this.i==len-o.size){
					this.nextBtn.addClass(this.nextClass+o.suffix);
				}else{
					this.nextBtn.removeClass(this.nextClass+o.suffix);
				}
			},
			
			//动态切换分页状态
			_pageCheck	:	function(){
				var curPage = Math.floor(this.i / o.size);
				this.pager.children('a').eq(curPage).addClass(o.active).siblings().removeClass(o.active);
			},
			next : function(){
				this.skip(this.i + o.scroll);
			},
			
			prev : function(){
				this.skip(this.i - o.scroll);
			},
			
			// 跳跃
			skip : function(i){
				o.beforeChange.call(this,i);
				if(o.cycle){
					this._cycle(i);
				}else{
					this._move(i);	
				}
			},
			autoPlay : function(){
				var _this = this;
				this.stop();
				var autoTime=null;
				this.timer = window.setInterval(function(){
					_this.next();
				},o.auto * 1000);
				if(o.pause){

					$().add(self).add(o.prev).add(o.next).add(this.pager).hover(function(){
						clearTimeout(autoTime);
						_this.stop();
					},function(){
						autoTime = window.setTimeout(function(){
							_this.autoPlay();
						},o.auto * 1000)
					});
				}
			},
			
			stop : function(){
				clearInterval(this.timer);	
			}
		};
		
		c._init();
		return c;
	}

})(jQuery);