/*

作者注：
	本插件滚动部分仅适用于以下结构：
	<div>
		<ul>
			<li></li>
		</ul>
	</div>


功能：
	实现上、下、左、右滚动，包括间断式滚动和非间断式滚动



参数列表：

boxID:       插件窗口，不能为空；
btn_left:    左边按钮，可为空;
btn_right:   右边按钮，可为空;
btnBox:      底部切换按钮组（默认按钮标签为span），可为空,为空表示没有底部按钮;
Car:         是否需要自动轮播，参数true或false，不能为空;
direction:   滚动方向，left,right,top,botttom,不能为空；
way:         滚动方式，不间断式滚动或者间断式滚动，true为间断式滚动，false为不间断式滚动，不间断式轮播隐藏各个按钮，不能为空；
moveLengh:   移动距离，滚动元素，即li标签的width，padding（上下或左右），border（上下或左右），margin（上下或左右）之和，不能为空;
speed:       滚动速度，间隔轮播下不能为空，非间隔轮播下可为空;
Interval:    滚动间隔时间，不能为空;
number:      窗口显示数目，当滚动元素（即li标签）数量少于或等于窗口显示数目的时候隐藏所有按钮且不滚动，不能为空;

完成于：2016-8-31
作者：马世伟


更新日志：
2016—09-02：  判断是否需要自动轮播；
2016-09-18：  减少两个参数：btnBoxShow，btnPosition;
2016-09-18：  判断滚动方向，上下左右:direction;
2016-09-18：  断滚动方式，不断式滚动或者间隔式滚动.
2016-10-25：  fade隐藏显示方式,属于间断试轮播；
*/

function mswMove(boxID,btn_left,btn_right,btnBox,Car,direction,way,moveLengh,speed,Interval,number){
				var        _ID   = $("#"+boxID+"");
				var  _btn_left   = $("#"+btn_left+"");
				var _btn_right   = $("#"+btn_right+"");
				var    _btnBox   = $("#"+btnBox+"");
				var        jsq   = 0/*底部按钮切换计数器*/
				var      timer     ;/*轮播时间设置*/
				var         cj     ;/*底部按钮数值差值*/
				var     no_way   = 0;
				var  no_wayGet   = 0;
				var       fade   = 0;

				
				var ID_liLen , ID_liheight , cbtmBtn ;
				ID_liLen    = _ID.find("li").length;
				ID_liheight = _ID.find("li").innerHeight();
				/*判断滚动方向：上下左右*/
				
				if(direction == "left" || direction == "right"){
					_ID.find("ul").width(ID_liLen*moveLengh);
					}else if(direction == "top" || direction == "bottom"){
						_ID.find("ul").height(ID_liLen*moveLengh);
						_btnBox.hide()
						}else if(direction == "fade"){
							_ID.find("ul").width(moveLengh).height(ID_liheight);
							_ID.find("li").eq(0).show().siblings().hide();
							_ID.find("li").css({"position":"absolute","left":0,"top":0});
							}/*banner效果*/
				_btnBox.empty();
				for(i=0;i<ID_liLen;i++){
					_btnBox.append("<span></span>");
					};
				_btnBox.find("span").eq(0).addClass("cur");

				if(way == false){
						_btn_left.hide();
						_btn_right.hide();
						_btnBox.hide();
						}
				
				
				/*自动轮播*/
				function Carousel(){
					if(way == false){/*非间断式滚动*/
						no_way++;
						
						if(direction == "left"){
							_ID.find("ul").css({"left":-no_way});	
							no_wayGet = parseInt(_ID.find("ul").css("left"));/*获取ul的left值*/
							if(no_wayGet == -moveLengh){
								no_way = 0
								_ID.find("li:first").insertAfter(_ID.find("li:last"));
								_ID.find("ul").css({"left":0});
								}
						}/*向左滚动*/

						if(direction == "right"){
								
							no_wayGet = parseInt(_ID.find("ul").css("left"));/*获取ul的right值*/
							if(no_wayGet == 0){
								no_way = -moveLengh
								_ID.find("li:last").insertBefore(_ID.find("li:first"));
								_ID.find("ul").css({"left":0});
								}
							_ID.find("ul").css({"left":no_way});
						}/*向右滚动*/
						
						if(direction == "top"){
							_ID.find("ul").css({"top":-no_way});	
							no_wayGet = parseInt(_ID.find("ul").css("top"));/*获取ul的left值*/
							if(no_wayGet == -moveLengh){
								no_way = 0
								_ID.find("li:first").insertAfter(_ID.find("li:last"));
								_ID.find("ul").css({"top":0});
								}
						}/*向上滚动*/
						
						if(direction == "bottom"){
								
							no_wayGet = parseInt(_ID.find("ul").css("top"));/*获取ul的right值*/
							if(no_wayGet == 0){
								no_way = -moveLengh
								_ID.find("li:last").insertBefore(_ID.find("li:first"));
								_ID.find("ul").css({"top":0});
								}
							_ID.find("ul").css({"top":no_way});
						}/*向下滚动*/
						
						
						}else if(way == true){/*间断式滚动*/

						if(direction == "left"){
							_ID.find("ul").animate({left:-moveLengh},speed,function(){
								_ID.find("li:first").insertAfter(_ID.find("li:last"));
								_ID.find("ul").css({"left":0});
								});	
							if(jsq<ID_liLen-1){
								jsq++;
								_btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
								}else{
									jsq = 0;
									_btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
									}
							
						}/*向左滚动*/
						
						if(direction == "right"){
							_ID.find("li:last").insertBefore(_ID.find("li:first"));
							_ID.find("ul").css({"left":-moveLengh});
							_ID.find("ul").stop().animate({left:0},speed);
							if(jsq>0){
								jsq--;
								_btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
								}else{
									jsq = ID_liLen-1;
									_btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
									}
							
						}/*向右滚动*/
						
						if(direction == "top"){
							_ID.find("ul").animate({top:-moveLengh},speed,function(){
								_ID.find("li:first").insertAfter(_ID.find("li:last"));
								_ID.find("ul").css({"top":0});
								});	
						}/*向上滚动*/
						
						if(direction == "bottom"){
							_ID.find("li:last").insertBefore(_ID.find("li:first"));
							_ID.find("ul").css({"top":-moveLengh});
							_ID.find("ul").stop().animate({top:0},speed);
								
						}/*向下滚动*/
						if(direction == "fade"){
							
							if(fade<ID_liLen-1){
								fade++;
								}else{fade = 0}
							_ID.find("li").eq(fade).fadeIn(speed).siblings().fadeOut(speed);
							_btnBox.find("span").eq(fade).addClass("cur").siblings().removeClass("cur");
							
						}/*banner效果*/
					
					}/*判断滚动方式*/	
					}/*end Carousel*/
					
					/*是否需要自动轮播*/
				if(Car == true){
						/*判断是否需要轮播，滚动总数小余或者等于窗口显示数目*/
					if(ID_liLen>number){
						timer =	setInterval(Carousel,Interval);
						}else{
							clearInterval(timer);
							_btn_left.hide();
							_btn_right.hide();
							_btnBox.hide();
							}
					}else{
						clearInterval(timer);
						}
				_ID.find("li").hover(function(){
					clearInterval(timer);
					},function(){
						if(Car == true){
							if(ID_liLen>number){
								timer =	setInterval(Carousel,Interval);
								}else{
									clearInterval(timer);
									_btn_left.hide();
									_btn_right.hide();
									_btnBox.hide();
									}
							}else{
								clearInterval(timer);
								}
						});
					
				/*click右边按钮*/		
				_btn_right.hover(function(){
					clearInterval(timer);
					},function(){
						if(Car == true){
							if(ID_liLen>number){
								timer =	setInterval(Carousel,Interval);
								}else{
									clearInterval(timer);
									_btn_left.hide();
									_btn_right.hide();
									_btnBox.hide();
									}
							}else{
								clearInterval(timer);
								}
						
						}).click(function(){
							if(direction == "left" || direction == "right"){
								_ID.find("ul").stop(true,true).animate({left:-moveLengh},speed,function(){
									_ID.find("li:first").insertAfter(_ID.find("li:last"));
									_ID.find("ul").css({"left":0});
									});	
								}
							
							
							if(direction == "top" || direction == "bottom"){
								_ID.find("ul").stop(true,true).animate({top:-moveLengh},speed,function(){
									_ID.find("li:first").insertAfter(_ID.find("li:last"));
									_ID.find("ul").css({"top":0});
									});	
								}
							if(direction == "fade"){
							
							if(fade>0){
								fade--;
								}else{fade = ID_liLen-1}
									_ID.find("li").stop(true,true).eq(fade).fadeIn(speed).siblings().fadeOut(speed);
									
								}/*banner效果*/
							if(jsq<ID_liLen-1){
								jsq++;
								_btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
								}else{
									jsq = 0;
									_btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
									};
							
							
							});
				/*click左边按钮*/
				_btn_left.hover(function(){
					clearInterval(timer);
					},function(){
						if(Car == true){
							if(ID_liLen>number){
								timer =	setInterval(Carousel,Interval);
								}else{
									clearInterval(timer);
									_btn_left.hide();
									_btn_right.hide();
									_btnBox.hide();
									}
							}else{
								clearInterval(timer);
								}
						}).click(function(){
							

							if(direction == "left" || direction == "right"){
								_ID.find("li:last").insertBefore(_ID.find("li:first"));
								_ID.find("ul").css({"left":-moveLengh});
								_ID.find("ul").stop().animate({left:0},speed);
								}
							
							if(direction == "top" || direction == "bottom"){
								_ID.find("li:last").insertBefore(_ID.find("li:first"));
								_ID.find("ul").css({"top":-moveLengh});
								_ID.find("ul").stop().animate({top:0},speed);
									
								}
							if(direction == "fade"){
							
							if(fade<ID_liLen-1){
								fade++;
								}else{fade = 0}
									_ID.find("li").stop(true,true).eq(fade).fadeIn(speed).siblings().fadeOut(speed);
									
								}/*banner效果*/
							if(jsq>0){
								jsq--;
								_btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
								}else{
									jsq = ID_liLen-1;
									_btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
									};
								
							});
					
				/*底部按钮*/	
				_btnBox.find("span").hover(function(){
					clearInterval(timer);

					},function(){
						if(Car == true){
							if(ID_liLen>number){
								timer =	setInterval(Carousel,Interval);
								}else{
									clearInterval(timer);
									_btn_left.hide();
									_btn_right.hide();
									_btnBox.hide();
									}
							}else{
								clearInterval(timer);
								}
						}).click(function(){
							cbtmBtn = $(this).index();
							$(this).addClass("cur").siblings().removeClass("cur");
							if(direction == "fade"){
											_ID.find("li").eq(cbtmBtn).fadeIn(speed).siblings().fadeOut(speed);
										}else{
							if(cbtmBtn>jsq){
								cj =cbtmBtn - jsq;
								jsq = cbtmBtn;
								
								_ID.find("ul").stop().animate({left:-moveLengh*cj},speed,function(){
									for(i=0;i<cj;i++){
										_ID.find("ul").css({"left":0})
										_ID.find("li:first").insertAfter(_ID.find("li:last"));
										};
									});
								}else{
									cj = jsq - cbtmBtn;
									jsq = cbtmBtn;
									_ID.find("ul").css({"left":-moveLengh*cj});
									for(i=0;i<cj;i++){
										_ID.find("ul").stop().animate({left:0},speed);
										_ID.find("li:last").insertBefore(_ID.find("li:first"));
										};
									};
									};
							});
			
			
			

					
					
}









/*导航自适应*/
/*
<div id="nav">
	<ul>
		<li><a herf="">   </a></li>
	</ul>
</div>

*/

function nav(nav){
						
		var li_width = 0;
		var nav_width = 0;
		var li_pa;
		var li_len   = $("#"+nav+">ul>li").length;
		for(i=0;i<li_len;i++){
			nav_width += $("#"+nav+">ul>li").eq(i).outerWidth();
			} 
		li_pa  =  Math.floor(($("#"+nav+"").width()-nav_width)/li_len*0.5);
		$("#"+nav+">ul>li>a").css({"padding-left":li_pa,"padding-right":li_pa});
		
		/*多余的像素给最后一个*/
		nav_width = 0;
		
		for(i=0;i<li_len;i++){
			nav_width += $("#"+nav+">ul>li").eq(i).outerWidth();
			} 
		var last_pa = $("#"+nav+"").width()-nav_width
		$("#"+nav+">ul>li>a:last").css({"padding-right":li_pa+last_pa*0.5,"padding-left":li_pa+last_pa*0.5})
		if($("#"+nav+">ul").height()>$("#"+nav+">ul>li").height()){
			/*$("#"+nav+">ul>li>a:last").css({"padding-right":li_pa+last_pa*0.5,"padding-left":li_pa+last_pa*0.5-1})*/
			$("#"+nav+">ul").width('102%')
			}
		
}/*end nav()*/



/*弹框获取图片 大图*/
	
/*


结构：
			<div id="tkID" class="tankuang">
                <i class="close"></i>
                <span class="btn01"></span>
                <span class="btn02"></span>
                <div class="imgShow">
                	<ul>
                    	<li>
                            <img src="Skins/Default/Img/Index/case_btu.jpg">
                            <p></p>    
                        </li>
                    </ul>
                    
                </div>
                <div class="imgBox">
                    <ul>
                        
                    </ul>	
                </div>
                
            </div>

样式：
.tankuang { overflow:hidden; width:100%; height:100%; position:fixed; left:0; top:0; background:url(Img/Common/dsz06_tuwen.png) repeat center; z-index:99999999999; display:none}
.tankuang .close{ display:block; position:absolute; right:10px; top:10px; background:url(Img/Common/in_ry_tk_close.png) no-repeat center; width:30px; height:30px; cursor:pointer}
.tankuang span{ display:block; width:28px; height:49px; cursor:pointer; position:absolute; top:36%; z-index:5}
.tankuang .btn01{ left:20px; background:url(Img/Index/fzlcLeft.png) no-repeat center;}
.tankuang .btn02{ right:20px; background:url(Img/Index/fzlcRight.png) no-repeat center;}
.tankuang .imgShow { overflow:hidden; width:100%; height:60%; position:absolute; left:0; top:15%;moz-user-select: -moz-none;
-moz-user-select: none;
-o-user-select:none;
-khtml-user-select:none;
-webkit-user-select:none;
-ms-user-select:none;
user-select:none;}
.tankuang .imgShow ul{ overflow:hidden; position:absolute; height:100%;}
.tankuang .imgShow li{ float:left; text-align:center; height:100%;}
.tankuang .imgShow li img{ display:block; margin:0 auto; height:90%;}
.tankuang .imgShow li p{ font-size:18px; color:#fff; text-align:center;}
.tankuang .imgBox{ overflow:hidden; width:100%; height:80px; position:absolute; left:0; bottom:5%}
.tankuang .imgBox ul{ overflow:hidden; position:absolute; height:100%; padding-right:5px;}
.tankuang .imgBox li{ float:left; height:100%; padding:0 5px; cursor:pointer}
.tankuang .imgBox li img{ display:block; height:70px; padding:5px; background-color:#fff;moz-user-select: -moz-none;
-moz-user-select: none;
-o-user-select:none;
-khtml-user-select:none;
-webkit-user-select:none;
-ms-user-select:none;
user-select:none;}
.tankuang .imgBox li em{ display:none}
.tankuang .imgBox li.cur img{ background:#ff0000 }



*/


/*
ID:            选取框id
clickElement:  重复项（标签或者类名）
title:         选取框标题
showH:         弹框标题是否显示
tkID:          弹框ID

2016-09-18：获取点击图片列表，在弹出框区域显示小图列表区，切换方式为滚动式全屏切换，不自动轮播。
*/

	
function tankuang(ID,clickElement,title,showH,tkID){
	
	
	
	var  _tkId = $("#"+tkID+"");
	var    _ID = $("#"+ID+"") ;
	var   _cke = $("#"+ID+" "+clickElement+"");
	var _close = $("#"+tkID+"").find(".close");
	var   _len = $("#"+ID+" "+clickElement+"").length;
	var _IDimg , _IDtext , w , m=0 , n = 0 , a=0 , _width , imgNum = 0 , msw = 0 , msw_now = 0 , mfz = 0,mfm = 0;
	
	var w_width = $(window).width();
	_tkId.find(".imgShow").find("li").width(w_width);
	
	if(showH == true){
		_tkId.find("p").show();
		_tkId.find("p").siblings("img").css({"height":"90%"});
		}else if(showH == false){
			_tkId.find("p").hide();
			_tkId.find("p").siblings("img").css({"height":"100%"});
			};

	_close.click(function(){
		_tkId.fadeOut(500);
		_tkId.find(".imgShow").find("ul").css({"left":0});
		_tkId.find(".imgBox").find("ul").css({"left":0,"width":0});
		imgNum = 0;n = 0;w=0;m=0;
		_tkId.find(".imgBox").find("ul").empty();
		_tkId.find(".imgShow").find("ul").empty();
		});
	
		
	
	_cke.click(function(){
		msw_now = $("#"+ID+" "+clickElement+"").index(this);
		imgNum = $("#"+ID+" "+clickElement+"").index(this);
		_tkId.fadeIn(500);
		_tkId.find(".imgBox").find("ul").empty();
		_tkId.find(".imgShow").find("ul").empty();
		for(i=0;i<_len;i++){
			_IDimg = _ID.find(clickElement).eq(i).find("img").attr("src");
			_IDtext = _ID.find(clickElement).eq(i).find(title).text();
			_tkId.find(".imgBox").find("ul").append("<li><img src='"+_IDimg+"'><em>"+_IDtext+"</em></li>");
			_tkId.find(".imgShow").find("ul").append("<li><img src='"+_IDimg+"'><p>"+_IDtext+"</p></li>");
			};
		
		_tkId.find(".imgShow").find("li").width(w_width);
		_tkId.find(".imgShow").find("ul").width(w_width*_len);
		_tkId.find(".imgBox").find("li").eq(0).addClass("cur").siblings().removeClass("cur");
/*		_width = _tkId.find(".imgBox").find("li").innerWidth()+1;
*/		
		var imgBoxUl = 0;
		for(i=0;i<_len;i++){
			imgBoxUl += _tkId.find(".imgBox").find("li").eq(i).innerWidth()+1;
			if(imgBoxUl<w_width){
				m++;
				}
		}
		
		_tkId.find(".imgBox").find("ul").width(imgBoxUl);
		_tkId.find(".imgShow").find("ul").css({"left":-w_width*imgNum})
		_tkId.find(".imgBox").find("li").eq(imgNum).addClass("cur").siblings().removeClass("cur");
		/*m = Math.floor(imgBoxUl/w_width);
		w = Math.floor(_len/m);*/
		_tkId.find(".imgBox").find("li").click(function(){
			imgNum = $(this).index();
			msw = 0;
			for(i=0;i<imgNum-1;i++){
				msw += _tkId.find(".imgBox").find("li").eq(i).innerWidth()+1;
				}
			
			if(msw_now<imgNum && imgNum%(m-1) == 0 ){
					_tkId.find(".imgBox").find("ul").animate({left:-msw});
					
				}
			if(msw_now>imgNum && imgNum%(m-1) == 0 ){
					mfz = imgNum/(m-1)-1;
					mfm = imgNum/(m-1);
					_tkId.find(".imgBox").find("ul").animate({left:-msw*(mfz/mfm)});
				}	
				
			msw_now = imgNum;	
			_tkId.find(".imgShow").find("ul").stop().animate({left:-w_width*imgNum});
			_tkId.find(".imgBox").find("li").eq(imgNum).addClass("cur").siblings().removeClass("cur");
			
			});
		  
	  
		});
		
			
_tkId.find(".btn02").click(function(){
			
		if(imgNum<_len-1){
			
			imgNum++;
			msw = 0;
			a = 0;
			for(i=0;i<imgNum-1;i++){
				msw += _tkId.find(".imgBox").find("li").eq(i).innerWidth()+1;
				
				}
			for(i=0;i<imgNum-2;i++){
				a   += _tkId.find(".imgBox").find("li").eq(i).innerWidth()+1;
				}
			if(msw_now<imgNum && imgNum%(m-1) == 0 ){
					_tkId.find(".imgBox").find("ul").animate({left:-msw});
					
				}
			if(msw_now<imgNum && imgNum%(m-1) == 1){
					_tkId.find(".imgBox").find("ul").animate({left:-a});
					
				}
				
			msw_now = imgNum;
			
			_tkId.find(".imgShow").find("ul").stop().animate({left:-w_width*imgNum});
			_tkId.find(".imgBox").find("li").eq(imgNum).addClass("cur").siblings().removeClass("cur");
			
			}else{
				alert("已经到尽头了");
				imgNum = _len-1;
			}	;
		});
_tkId.find(".btn01").click(function(){
		  if(imgNum>0){
			  imgNum--;
			  msw = 0;
			for(i=0;i<imgNum-1;i++){
				msw += _tkId.find(".imgBox").find("li").eq(i).innerWidth()+1;
				}
			
			if(msw_now>imgNum && imgNum%(m-1) == 0 ){
					mfz = imgNum/(m-1)-1;
					mfm = imgNum/(m-1);
					_tkId.find(".imgBox").find("ul").animate({left:-msw*(mfz/mfm)});
				}	
				
			msw_now = imgNum;
			  
			  _tkId.find(".imgShow").find("ul").stop().animate({left:-w_width*imgNum});
			  _tkId.find(".imgBox").find("li").eq(imgNum).addClass("cur").siblings().removeClass("cur");
			  }else{
				  alert("已经到尽头了");
				  imgNum = 0;
				  };
		  });	
}














