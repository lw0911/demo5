/*更新时间：2016-11-17*/

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
		
		nav_width = 0;
		
		for(i=0;i<li_len;i++){
			nav_width += $("#"+nav+">ul>li").eq(i).outerWidth();
			} 
		var last_pa = $("#"+nav+"").width()-nav_width
		$("#"+nav+">ul>li>a:last").css({"padding-right":li_pa+last_pa*0.5,"padding-left":li_pa+last_pa*0.5})
		if($("#"+nav+">ul").height()>$("#"+nav+">ul>li").height()){
			$("#"+nav+">ul>li>a:last").css({"padding-right":li_pa+last_pa*0.5,"padding-left":li_pa+last_pa*0.5-1})
			}
		
}/*end nav()*/






function mswMove(boxID,btn_left,btn_right,btnBox,Car,direction,way,moveLengh,speed,Interval,number){
				var        _ID   = $("#"+boxID+"");
				var  _btn_left   = $("#"+btn_left+"");
				var _btn_right   = $("#"+btn_right+"");
				var    _btnBox   = $("#"+btnBox+"");
				var        jsq   = 0
				var      timer     ;
				var         cj     ;
				var     no_way   = 0;
				var  no_wayGet   = 0;
				var       fade   = 0;
				var   new_time   = new Date;
				
				var ID_liLen , ID_liheight , cbtmBtn ;
				ID_liLen    = _ID.find("li").length;
				ID_liheight = _ID.find("li").innerHeight();
				
				if(direction == "left" || direction == "right"){
					_ID.find("ul").width(ID_liLen*moveLengh);
					}else if(direction == "top" || direction == "bottom"){
						_ID.find("ul").height(ID_liLen*moveLengh);
						_btnBox.hide()
						}else if(direction == "fade"){
							_ID.find("ul").width(moveLengh).height(ID_liheight);
							_ID.find("li").eq(0).show().siblings().hide();
							_ID.find("li").css({"position":"absolute","left":0,"top":0});
							}
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
				
				
				function Carousel(){
					if(way == false){
						no_way++;
						
						if(direction == "left"){
							_ID.find("ul").css({"left":-no_way});	
							no_wayGet = parseInt(_ID.find("ul").css("left"));
							if(no_wayGet == -moveLengh){
								no_way = 0
								_ID.find("li:first").insertAfter(_ID.find("li:last"));
								_ID.find("ul").css({"left":0});
								}
						}

						if(direction == "right"){
								
							no_wayGet = parseInt(_ID.find("ul").css("left"));
							if(no_wayGet == 0){
								no_way = -moveLengh
								_ID.find("li:last").insertBefore(_ID.find("li:first"));
								_ID.find("ul").css({"left":0});
								}
							_ID.find("ul").css({"left":no_way});
						}
						
						if(direction == "top"){
							_ID.find("ul").css({"top":-no_way});	
							no_wayGet = parseInt(_ID.find("ul").css("top"));
							if(no_wayGet == -moveLengh){
								no_way = 0
								_ID.find("li:first").insertAfter(_ID.find("li:last"));
								_ID.find("ul").css({"top":0});
								}
						}
						
						if(direction == "bottom"){
								
							no_wayGet = parseInt(_ID.find("ul").css("top"));
							if(no_wayGet == 0){
								no_way = -moveLengh
								_ID.find("li:last").insertBefore(_ID.find("li:first"));
								_ID.find("ul").css({"top":0});
								}
							_ID.find("ul").css({"top":no_way});
						}
						
						
						}else if(way == true){

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
							
						}
						
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
							
						}
						
						if(direction == "top"){
							_ID.find("ul").animate({top:-moveLengh},speed,function(){
								_ID.find("li:first").insertAfter(_ID.find("li:last"));
								_ID.find("ul").css({"top":0});
								});	
						}
						
						if(direction == "bottom"){
							_ID.find("li:last").insertBefore(_ID.find("li:first"));
							_ID.find("ul").css({"top":-moveLengh});
							_ID.find("ul").stop().animate({top:0},speed);
								
						}
						if(direction == "fade"){
							
							if(fade<ID_liLen-1){
								fade++;
								}else{fade = 0}
							_ID.find("li").eq(fade).fadeIn(speed).siblings().fadeOut(speed);
							_btnBox.find("span").eq(fade).addClass("cur").siblings().removeClass("cur");
							
						}
					
					}
					}
					
					
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
							if(new Date - new_time>500){
								new_time = new Date;
							
							if(direction == "left" || direction == "right"){
								_ID.find("ul").animate({left:-moveLengh},speed,function(){
									_ID.find("li:first").insertAfter(_ID.find("li:last"));
									_ID.find("ul").css({"left":0});
									});	
								}
							
							
							if(direction == "top" || direction == "bottom"){
								_ID.find("ul").animate({top:-moveLengh},speed,function(){
									_ID.find("li:first").insertAfter(_ID.find("li:last"));
									_ID.find("ul").css({"top":0});
									});	
								}
							if(direction == "fade"){
							
							if(fade>0){
								fade--;
								}else{fade = ID_liLen-1}
									_ID.find("li").stop(true,true).eq(fade).fadeIn(speed).siblings().fadeOut(speed);
									
								}
							if(jsq<ID_liLen-1){
								jsq++;
								_btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
								}else{
									jsq = 0;
									_btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
									};
							
								
								}else{};
							});
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
							if(new Date - new_time>500){
								new_time = new Date;

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
									
								}
							if(jsq>0){
								jsq--;
								_btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
								}else{
									jsq = ID_liLen-1;
									_btnBox.find("span").eq(jsq).addClass("cur").siblings().removeClass("cur");
									};
								}else{};
							});
					
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
							if(new Date - new_time>500){
								new_time = new Date;
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
								}else{};
							});
}//end mswMove()





function msw_jzt(ID,btnLeft,btnRight,elment,title,speed,number,pre){
		var       _ID = $('#'+ID+'');
		var  _BtnLeft = $("#"+btnLeft+"");
		var _BtnRight = $("#"+btnRight+"");
		var   _elment = $("#"+ID+" ."+elment+"");
		var       len = $("#"+ID+" ."+elment+"").length;
		var    number = number;
		var     pfnum = (number-1)/2;
		var       jsq = 0;
		var    active = 0;

		
		_ID.width('100%').height('100%').css({'position':'relative','z-index':1});
		_elment.find('img').css({'width':'100%','display':'block'});
		_elment.css({'width':'30%','left':'35%','top':'5%','z-index':0,'position':' absolute'});
		_elment.eq(pfnum).css({'width':''+pre+'%','left':''+(100-pre)/2+'%','top':'0','z-index':number}).addClass("active");
		_elment.find(""+title+"").hide();
		_elment.eq(pfnum).find(""+title+"").show();
		for(i=1,th=pfnum;i<pfnum+1;i++){
			
			_elment.eq(th+i).css({'width':''+(pre-10*i)+'%','left':''+(100-pre)*0.5/pfnum*(pfnum-i)+'%','top':''+7.5*i+'%','z-index':number-i});
			
			_elment.eq(th-i).css({'width':''+(pre-10*i)+'%','left':''+100-(pre-10*i)-(100-pre)*0.5/pfnum*(pfnum-i)+'%','top':''+7.5*i+'%','z-index':number-i});
			
			};
						
		var time = new Date;
	
		_BtnLeft.hover(function(){
				clearInterval(t);
				},function(){
					t = setInterval(car,4000);
					}).click(function(){
			if(new Date-time >500){
			time = new Date;
			$("#"+ID+" ."+elment+":first").animate({width:'30%',left:'35%',top:'5%'}).css({'z-index':0});
			$("#"+ID+" ."+elment+":first").insertAfter($("#"+ID+" ."+elment+":last"));
			$("#"+ID+" ."+elment+"").eq(pfnum).addClass("active").animate({width:''+pre+'%',left:''+(100-pre)/2+'%',top:0}).css({'z-index':number}).find(""+title+"").show();
			$("#"+ID+" ."+elment+"").eq(pfnum).siblings().removeClass("active").find(""+title+"").hide();
			for(i=1,th=pfnum;i<pfnum+1;i++){
			
				$("#"+ID+" ."+elment+"").eq(th+i).animate({width:''+(pre-10*i)+'%',left:''+(100-pre)*0.5/pfnum*(pfnum-i)+'%',top:''+7.5*i+'%'}).css({'z-index':number-i});
				
				$("#"+ID+" ."+elment+"").eq(th-i).animate({width:''+(pre-10*i)+'%',left:''+100-(pre-10*i)-(100-pre)*0.5/pfnum*(pfnum-i)+'%',top:''+7.5*i+'%'}).css({'z-index':number-i});
				};
			for(i=number;i<len-1;i++){
				$("#"+ID+" ."+elment+"").eq(i).animate({width:'0%',left:'50%',top:'50%'}).css({'z-index':0});
				};
				}else{};
			});

		_BtnRight.hover(function(){
				clearInterval(t);
				},function(){
					t = setInterval(car,4000);
					}).click(function(){
			if(new Date-time >500){
			time = new Date;
			$("#"+ID+" ."+elment+":last").animate({width:''+(pre-10*pfnum)+'%',left:''+100-(pre-10*pfnum)+'%',top:''+7.5*pfnum+'%'}).css({'z-index':number-pfnum});
			$("#"+ID+" ."+elment+":last").insertBefore($("#"+ID+" ."+elment+":first"));
			//$("#jzt .list").eq(pfnum).addClass('active');
			$("#"+ID+" ."+elment+"").eq(pfnum).addClass("active").animate({width:''+pre+'%',left:''+(100-pre)/2+'%',top:0}).css({'z-index':number}).find(""+title+"").show();
			$("#"+ID+" ."+elment+"").eq(pfnum).siblings().removeClass("active").find(""+title+"").hide();
			for(i=1,th=pfnum;i<pfnum+1;i++){
			
				$("#"+ID+" ."+elment+"").eq(th+i).animate({width:''+(pre-10*i)+'%',left:''+(100-pre)*0.5/pfnum*(pfnum-i)+'%',top:''+7.5*i+'%'}).css({'z-index':number-i});
				
				$("#"+ID+" ."+elment+"").eq(th-i).animate({width:''+(pre-10*i)+'%',left:''+100-(pre-10*i)-(100-pre)*0.5/pfnum*(pfnum-i)+'%',top:''+7.5*i+'%'}).css({'z-index':number-i});
				
				};
			for(i=number;i<len-1;i++){
				$("#"+ID+" ."+elment+"").eq(i).animate({width:'0%',left:'50%',top:'5%'}).css({'z-index':0});
				};
				};
			});
				
			function car(){
				$("#"+ID+" ."+elment+":first").animate({width:'30%',left:'35%',top:'5%'}).css({'z-index':0});
				$("#"+ID+" ."+elment+":first").insertAfter($("#"+ID+" ."+elment+":last"));
				//$("#jzt .list").eq(2).addClass('active');
				$("#"+ID+" ."+elment+"").eq(pfnum).addClass("active").animate({width:''+pre+'%',left:''+(100-pre)/2+'%',top:0}).css({'z-index':number}).find(""+title+"").show();
				$("#"+ID+" ."+elment+"").eq(pfnum).siblings().removeClass("active").find(""+title+"").hide();
				for(i=1,th=pfnum;i<pfnum+1;i++){
				
					$("#"+ID+" ."+elment+"").eq(th+i).animate({width:''+(pre-10*i)+'%',left:''+(100-pre)*0.5/pfnum*(pfnum-i)+'%',top:''+7.5*i+'%'}).css({'z-index':number-i});
				
				$("#"+ID+" ."+elment+"").eq(th-i).animate({width:''+(pre-10*i)+'%',left:''+100-(pre-10*i)-(100-pre)*0.5/pfnum*(pfnum-i)+'%',top:''+7.5*i+'%'}).css({'z-index':number-i});
					};
				for(i=number;i<len-1;i++){
					$("#"+ID+" ."+elment+"").eq(i).animate({width:'0%',left:'50%',top:'50%'}).css({'z-index':0});
					};
				}
			var t = setInterval(car,speed);
			
			
			
			
		

		
}//jzt end



/*


jiegou:
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

style:
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
		var imgBoxUl = 0;
		for(i=0;i<_len;i++){
			if(imgBoxUl<w_width){
				m++;
				}
				
			imgBoxUl += _tkId.find(".imgBox").find("li").eq(i).innerWidth()+1;
			
		}
		console.log(m);
		_tkId.find(".imgBox").width(w_width-50);
		_tkId.find(".imgBox").find("ul").width(imgBoxUl);
		_tkId.find(".imgShow").find("ul").css({"left":-w_width*imgNum});
		_tkId.find(".imgBox").find("li").eq(imgNum).addClass("cur").siblings().removeClass("cur");
		if(imgNum>m && imgNum != _len-1){
			var h = Math.ceil(imgNum/m);
			_tkId.find(".imgBox").find("ul").css({"left":-(h-1)*w_width});
			}else if(imgNum == _len-1){
				var h = Math.ceil(imgNum/m);
				_tkId.find(".imgBox").find("ul").css({"left":-(h-2)*w_width});
				}
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
				alert("this is last!");
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
				  alert("this is first!");
				  imgNum = 0;
				  };
		  });	
}
//tankuang() end



























