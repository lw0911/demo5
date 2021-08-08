(function($,window){
	//轮播图

	function slider (json){

		var wrap = json && json.wrap;

		var img = json && json.img ||wrap.find('.slide-img');

		var tab = json && json.tab ||wrap.find('.slide-tab');

		var btn = json && json.btn ||wrap.find('.slide-btn');

		var index = json && json.index || 0 ;  //初始显示;

		var indexB = index;							//扩展tab图片按钮

		var dur = json && json.duration || 600; //滚动速度

		var delay = json && json.delay || 3000; //自动播放间隔;

		var tabmode = json && json.tabmode ||'mouseover';//tab按钮;

		var tabOn  = json && json.tabOn ||'slide-tab-on';//tab按钮激活样式;

		var btnmode = json && json.btnmode ||'click';//btn按钮;

		var automode = json && json.automode ||'yes';//自动模式;

		var imgmode = json && json.imgmode ||'left';//轮播模式:left;top;fade;

		var timerAuto ,timerTabDelay,timeS = new Date();

		var imgL = img.first().children().length;

		var tabPosition = json && json.tabPosition ||'center';//tab按钮默认自动水平居中;

		var playL = img.width();

		var movemode;

		if(imgmode == 'top'){

			playL = img.height();

		};

		img.height(img.children().height());//父容器适应自容器的高度

		img.children().css({'position':'absolute','display':'none'});

		img.each(function(){

			$(this).children().eq(index).css('display','block' );

		});

		tab.each(function(){

			if (tabPosition == 'center')

			{	

				$(this).css({'margin-left': -($(this).outerWidth())/2 ,'left' : '50%'});

			};

			$(this).children().eq(index).addClass(tabOn).siblings().removeClass(tabOn);

		});

		

		//监听事件

		eve();

		function eve(){



			function tabRun(event){ 

				event = event || window.event;

				cBubble(event);

				clearTimeout(timerTabDelay);

				var time = (dur+100)- (new Date() - timeS);

				var This = $(this);

				var indexT = $(this).index();

				if(time <= 0){	

				timeS = new Date();

				indexB = index;

				index = This.index();

				play();

				}else if(tabmode != 'click'){

					timerTabDelay = setTimeout(function (){

						timeS = new Date();

						indexB = index;

						index = indexT;

						play();

					},time);

				};

			};

			wrap.bind('mouseover',function(){clearTimeout(timerTabDelay)});



			if (tabmode != 'no')

			{	

				tab.each(function(){

					$(this).children()[tabmode](tabRun);	

				});			

			};



			if (btnmode != 'no')

			{	

				btn.each(function(){

					$(this).children()[btnmode](function(){

						var n = $(this).index();



						if((new Date() - timeS) < (dur+100)){

							return;

						};

						timeS = new Date();

						n = n ? 1: -1;

						indexB = index;

						index += n;

						play();

					})

				});



			};

		};

		//自动播放

		if(automode != 'no'){

			function auto (){

				timerAuto = setInterval(function(){

					if((new Date() - timeS) < (dur+100)){

						return;

					};

					timeS = new Date();

					indexB = index;

					index++;

					play();

				},delay);

			}

			auto(); 

			wrap.bind({

				'mouseenter' : function(){clearInterval(timerAuto)},

				'mouseleave' : function(){auto();}

			});

		};

		//运动事件

		function play (){

			var moveL;

			if (indexB == index){

				return;

			}

			indexB<index ? moveL = playL :  moveL = -playL;

			index < 0 && (index = imgL-1);

			index %= imgL;

			imgPlay(moveL);

			tabmove();
			
		};

		function imgPlay (moveL){

			var animateJson={},animateJsonB={}; 

			if (imgmode=='top' ||imgmode=='left' )

			{	

				animateJson[imgmode] = 0;

				animateJsonB[imgmode] = -moveL+'px';

				img.each(function(){

					$(this).children().eq(index).css(imgmode,moveL+'px').css('display','block');

					$(this).children().eq(index).stop().animate(animateJson,dur);

					$(this).children().eq(indexB).stop().animate(animateJsonB,dur,function(){

						img.each(function(){

							$(this).children().eq(index).css(imgmode,0);

						});

					});

				});

			}else if(imgmode=='fade'){

				img.each(function(){

					$(this).children().eq(index).stop().fadeIn(dur);

					$(this).children().eq(indexB).stop().fadeOut(dur,function(){

						img.each(function(){

							$(this).children().eq(index).css('display','block').siblings().css('display','none');

						});

					});	

				});

			}else if(imgmode =='moveshow'){

				var d = Math.floor(Math.random()*4);

				var moveL;

					switch (d)

					{

						case 0:movemode='top';moveL = img.height();break;

						case 1:movemode='top';moveL = -img.height();break;

						case 2:movemode='left';moveL = img.width();break;

						case 3:movemode='left';moveL = -img.width();break;

					};

					animateJsonB[movemode] = -moveL+'px';

					animateJsonB.opacity = 0;

					animateJsonB.filter= 'alpha(opacity=0)';

				img.each(function(){

					$(this).children().eq(index).css({'left':0,'top':0,'display':'block','opacity':1,'filter':'alpha(opacity=100)','z-index':1});

					$(this).children().eq(indexB).stop().css({'z-index':9}).animate(animateJsonB,dur,function(){

						img.each(function(){

							$(this).children().eq(index).css('display','block').siblings().css('display','none');

						});

					});

					

				});

			}else if(imgmode =='moveshowB'){

				var d = Math.floor(Math.random()*4);

				var moveL;

					switch (d)

					{

						case 0:movemode='top';moveL = img.height();break;

						case 1:movemode='top';moveL = -img.height();break;

						case 2:movemode='left';moveL = img.width();break;

						case 3:movemode='left';moveL = -img.width();break;

					};

					

					animateJsonB[movemode] = -moveL+'px';

					animateJsonB.opacity = 0;

					animateJsonB.filter= 'alpha(opacity=0)';

					img.eq(0).children().eq(index).css({'left':0,'top':0,'display':'block','opacity':1,'filter':'alpha(opacity=100)','z-index':1});

					img.eq(0).children().eq(indexB).stop().css({'z-index':9}).animate(animateJsonB,dur,function(){

						img.each(function(){

							$(this).children().eq(index).css('display','block').siblings().css('display','none');

						});

					

				});

			};

		};

		function tabmove(){

			if (tabmode != 'no')

			{	

				tab.each(function(){

					$(this).children().eq(index).addClass(tabOn).siblings().removeClass(tabOn);

				})

			}

		}

	};
	//阻止冒泡:

	function cBubble(event){

		if (event.stopPropagation) { 

				event.stopPropagation(); 

		}else if (window.event) { 

			window.event.cancelBubble = true; 

		};

	};

	$(function(){
		slider({

			wrap : $('#event .slide-wrap'),

			tabmode : 'click',

		});
	})
})(jQuery,window);