//banner
function banner(obj1){
	var obj1=obj1;//传入参数
	var obj=new Object;
	obj.nowIndex=0;//banner切换的序号
	obj.interval="";//banner切换计时器
	obj.banner=obj1.banner;//banner框架
	obj.btn=obj1.btn;//banner按钮框架
	obj.btnUrl=obj1.btnUrl;//按钮路径
	obj.bool=obj1.bool||true;//判断切换
	obj.btnUrlOn=obj1.btnUrlOn;//按钮被点击路径
	obj.getMun=function(){//获取banner个数
		var mun=$(obj.banner).length-1;
		return mun;
	}
	obj.mun=0;//banner个数
	//添加按钮
	obj.btnAppend=function(){
		$(obj.banner).not($(obj.banner+":eq(0)")).stop(false,true).hide();
		$(obj.banner+":eq(0) .title1").css({"opacity":1});
		$(obj.banner+":eq(0) .title2").css({"opacity":1});
		$(obj.banner+":eq(0) .title3").css({"opacity":1});
		$(obj.banner+":eq(0)").show();
		$(obj.btn).append("<img id='bannerBtn0' onclick='bannerBtnClick(0)' src='"+obj.btnUrlOn+"'>");
		for(var i=1;i<=obj.mun;i++){
			$(this.btn).append("<img id='bannerBtn"+i+"' onclick='bannerBtnClick("+i+")' src='"+obj.btnUrl+"'>");
		}
	}
	//确定哪个为白色
	obj.btnPosition=function(btnIndex){
		$(obj.btn+">img").attr("src",obj.btnUrl);
		$(obj.btn+">img:eq("+btnIndex+")").attr("src",obj.btnUrlOn);
	}
	//切换事件
	obj.bannerDo=function(btnIndex){
		$(obj.banner+":eq("+obj.nowIndex+") .title1").stop(true,true).animate({"opacity":0},1200);
		$(obj.banner+":eq("+obj.nowIndex+") .title2").stop(true,true).delay(200).animate({"opacity":0},1200);
		$(obj.banner+":eq("+obj.nowIndex+") .title3").stop(true,true).delay(400).animate({"opacity":0},1000);
		$(obj.banner+":eq("+obj.nowIndex+")").stop(true,true).delay(600).fadeOut(500);
		
		if(btnIndex||btnIndex==0){
			obj.nowIndex=btnIndex;
		}else{
			obj.nowIndex==obj.mun?obj.nowIndex=0:obj.nowIndex++;
		}
		obj.btnPosition(obj.nowIndex);
		$(obj.banner+":eq("+obj.nowIndex+")").stop(true,true).delay(600).fadeIn(500);
		$(obj.banner+":eq("+obj.nowIndex+") .title1").stop(true,true).delay(800).animate({"opacity":1},1200);
		$(obj.banner+":eq("+obj.nowIndex+") .title2").stop(true,true).delay(1000).animate({"opacity":1},1200);
		$(obj.banner+":eq("+obj.nowIndex+") .title3").stop(true,true).delay(1200).animate({"opacity":1},1000);

	}
	

	return obj;
}
// banner over 
var banner1=new banner({
	banner:".banner .contents .content",
	btn:".bannerNav",
	btnUrl:"/Public/images/index/bannerBtn.jpg",
	btnUrlOn:"/Public/images/index/bannerBtnOn.jpg"
});
//白点被点击
function bannerBtnClick(btnIndex){
	if(btnIndex=="-"){
		banner1.nowIndex==0?btnIndex=banner1.mun:btnIndex=banner1.nowIndex-1;
	}else if(btnIndex=="+"){
		banner1.nowIndex==banner1.mun?btnIndex=0:btnIndex=banner1.nowIndex+1;
	}
	clearInterval(banner1.interval);
	banner1.bannerDo(btnIndex);
	banner1.btnPosition(btnIndex);
	banner1.interval=setInterval(function(){
		banner1.bannerDo(null);
	},3000);
}

/*main change*/
function mainChange(obj1){
	var obj1=obj1;//传入参数
	var obj=new Object;
	obj.nowIndex=0;//序号
	obj.lastIndex=0;//序号
	obj.childsDiv=obj1.childsDiv;//父框架
	obj.childDiv=obj1.childDiv;//框架
	obj.btnDiv=obj1.btnDiv;//按钮框架
	obj.btnEvent=obj1.btnEvent;//按钮事件
	obj.getMun=function(){//获取个数
		var mun=$(obj.childDiv).length-1;
		return mun;
	}
	obj.getWidth=function(){//获取框架宽度
	
		var childWidth=$(obj.childDiv).width();
		return childWidth;
	}
	obj.childWidth=0//框架宽度
	obj.mun=0;//个数
	//添加按钮
	obj.btnAppend=function(){
		//$(obj.btnDiv).append('<img src="images/index/pointerIconOn.png" onclick="'+obj.btnEvent+'(0)" />');
		//for(var i=1;i<=obj.mun;i++){
			//$(obj.childDiv+":eq("+i+")").css("left",i*obj.childWidth+"px");
			//$(obj.btnDiv).append('<img src="images/index/pointerIcon.png" onclick="'+obj.btnEvent+'('+i+')" />');
		//}
		$(obj.childDiv).not($(obj.childDiv+":eq("+obj.nowIndex+")")).css("left",-obj.childWidth+"px");
		$(obj.childDiv+":eq("+obj.mun+")").css("left",obj.childWidth+"px");
		$(obj.childDiv+":eq("+obj.nowIndex+")").css("left","0px");
		
	}
	
	//切换事件
	obj.bannerDo=function(btnIndex,direction){
		obj.childWidth=obj.getWidth();
		//$(obj.childDiv+":eq("+obj.nowIndex+")").stop(false,true).animate({"left":"0px"},500);
		direction=="+"?direction="-":direction="+";
		var a=direction+obj.childWidth+"px";
		$(obj.childDiv+":eq("+obj.nowIndex+")").stop(false,true).animate({"left":a},500);
		if(btnIndex||btnIndex==0){
			obj.nowIndex=btnIndex;
		}else{
			obj.nowIndex==obj.mun?obj.nowIndex=0:obj.nowIndex++;
		}
		direction=="+"?direction="-":direction="+";
		a=direction+obj.childWidth+"px";
		$(obj.childDiv+":eq("+obj.nowIndex+")").css("left",a);
		$(obj.childDiv+":eq("+obj.nowIndex+")").stop(false,true).animate({"left":"0"},500);
		//$(obj.childsDiv).stop(false,true).animate({"left":"-"+obj.nowIndex*obj.childWidth+"px"},500);
		
	}
	return obj;
}
function customerBtnClick(btnIndex){
	customer.lastIndex=customer.nowIndex;
	if(btnIndex=="-"){
		customer.nowIndex==0?btnIndex=customer.mun:btnIndex=customer.nowIndex-1;
		customer.bannerDo(btnIndex,"-");
	}else if(btnIndex=="+"){
		customer.nowIndex==customer.mun?btnIndex=0:btnIndex=customer.nowIndex+1;
		customer.bannerDo(btnIndex,"+");
	}
	
	
}

var customer=new mainChange({
	childsDiv:".customer .contentss",
	childDiv:".customer .contentss .content",
	btnEvent:"customerBtnClick"
});


$(function(){
	
	/*banner*/
	banner1.mun=banner1.getMun();
	banner1.btnAppend();
	banner1.interval=setInterval(function(){
		banner1.bannerDo(null);
	},3000);
	
	
	$(".banner").mouseover(function(){
		clearInterval(banner1.interval);
		$(this).find(".bannerBtn.leftBtn").animate({"left":"30px"},300);
		$(this).find(".bannerBtn.rightBtn").animate({"right":"30px"},300);
	}).mouseleave(function(){
		banner1.interval=setInterval(function(){
			banner1.bannerDo(null);
		},3000);
		$(this).find(".bannerBtn.leftBtn").stop(false,true).animate({"left":"-100px"},300);
		$(this).find(".bannerBtn.rightBtn").stop(false,true).animate({"right":"-100px"},300);
	});
	/*customer*/
	customer.mun=customer.getMun();
	customer.childWidth=customer.getWidth();
	customer.btnAppend();
	/*work*/
	$(".work .child").mouseover(function(){
		$(".work .child").not($(this)).find(".childHide").stop(false,true).fadeOut(500);
		$(this).find(".childHide").fadeIn(500);
	}).mouseleave(function(){
		$(this).find(".childHide").stop(false,false).fadeOut(500);
	});
	/*service*/
	$(".service .child").mouseover(function(){
		$(this).find(".childTitle").css("background","#0d6898");
		$(this).find(".titleCh").css("color","#fff");
		$(this).find(".titleEn").css("color","#fff");
	}).mouseleave(function(){
		$(this).find(".childTitle").css("background","#fff");
		$(this).find(".titleCh").css("color","#444");
		$(this).find(".titleEn").css("color","#0d6898");
	});
});


var loghandle = function(event, delta) {
	var scrollTop=$(document).scrollTop();
	return scrollTop+event.deltaY*event.deltaFactor;
};
window.onload=function(){
	var screenHeight=$(window).height();
	var scrolls={};
	var scrollname=['.about','.work','.customer','.say','.service','.news'];
	var scrollbool=[false,false,false,false,false,false,false,false];
	for(var i=0;i<scrollname.length;i++){
		scrolls[i]=parseInt($(scrollname[i]).offset().top)-screenHeight;
	}
	

  

	
	$("body").mousewheel(function(event, delta) {
		scrollIndex(screenHeight,scrolls,scrollname,scrollbool,loghandle(event, delta));
	});
	/*$("body").bind('mousewheel', function(ev) {
		scrollIndex(screenHeight,scrolls,scrollname,scrollbool);
	});*/

}

function scrollIndex(screenHeight,scrolls,scrollname,scrollbool,scrollTop){
	screenHeight=$(window).height();
	var scrollTop=scrollTop||$(document).scrollTop();
	if(scrollTop>=scrolls[0]&&scrollTop<scrolls[1]){
		if(!scrollbool[0]){
			scrollbool[0]=true;
			
			$(".about .child:eq(0) span").html(0);
			$(".about .child:eq(1) span").html(0);
			$(".about .child:eq(2) span").html(91);
			var i1=0;
			var i2=0;
			var i3=91;
			setTimeout(function(){
				var child1=setInterval(function(){
					i1=i1+1;
					if(i1>=20)clearInterval(child1);
					$(".about .child:eq(0) span").html(i1);
				},12);
				var child2=setInterval(function(){
					++i2;
					if(i2>=7)clearInterval(child2);
					$(".about .child:eq(1) span").html(i2);
				},100);
				var child3=setInterval(function(){
					i3=i3-10;
					if(i3<=01)clearInterval(child3);
					$(".about .child:eq(2) span").html("0"+i3);
				},12);
			},500);
			
		}
	}else if(scrollTop>=scrolls[1]&&scrollTop<scrolls[2]){
		if(!scrollbool[1]){
			scrollbool[0]=true;
			scrollbool[1]=true;
			
		}
	}else if(scrollTop>=scrolls[2]&&scrollTop<scrolls[3]){
		if(!scrollbool[2]){
			scrollbool[0]=true;
			scrollbool[1]=true;
			scrollbool[2]=true;
			
		}
	}else if(scrollTop>=scrolls[3]&&scrollTop<scrolls[4]){
		if(!scrollbool[3]){
			scrollbool[0]=true;
			scrollbool[1]=true;
			scrollbool[2]=true;
			scrollbool[3]=true;
		
		}
	}else if(scrollTop>=scrolls[4]&&scrollTop<scrolls[5]){
		if(!scrollbool[4]){
			scrollbool[0]=true;
			scrollbool[1]=true;
			scrollbool[2]=true;
			scrollbool[3]=true;
			scrollbool[4]=true;
			
		}
	}else if(scrollTop>=scrolls[5]&&scrollTop<scrolls[6]){
		if(!scrollbool[5]){
			scrollbool[0]=true;
			scrollbool[1]=true;
			scrollbool[2]=true;
			scrollbool[3]=true;
			scrollbool[4]=true;
			scrollbool[5]=true;
			
		}
	}else if(scrollTop>=scrolls[6]&&scrollTop<scrolls[7]){
		if(!scrollbool[6]){
			scrollbool[0]=true;
			scrollbool[1]=true;
			scrollbool[2]=true;
			scrollbool[3]=true;
			scrollbool[4]=true;
			scrollbool[5]=true;
			scrollbool[6]=true;
			
		}
	}else if(scrollTop>=scrolls[7]){
		if(!scrollbool[7]){
			scrollbool[0]=true;
			scrollbool[1]=true;
			scrollbool[2]=true;
			scrollbool[3]=true;
			scrollbool[4]=true;
			scrollbool[5]=true;
			scrollbool[6]=true;
			scrollbool[7]=true;
			
			var news=$(".news .quan");
			$.each(news,function(i,n){
				var startDtime=0.2;
				var ii=i+1;
				startDtime=0.2+ii*0.2;
				anClasAdd(".news .quan:eq("+i+")","scaleOpacityAn",".6s",startDtime+"s","ease-in-out","both");
			});
		}
	}

}
$(function(){
	cutStrings(160);
});

/*溢出省略*/
function cutStrings(i1){
	
		var str=$(".news .right .child:eq(0)").find(".info").html();
		str=cutString(str,i1);
		$(".news .right .child:eq(0)").find(".info").html(str);
		str=$(".news .right .child:eq(1)").find(".info").html();
		str=cutString(str,i1);
		$(".news .right .child:eq(1)").find(".info").html(str);
	
}

