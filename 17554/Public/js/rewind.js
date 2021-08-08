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
		$(obj.btnDiv).append('<img src="/Public/images/rewind/btnOn.png" onclick="'+obj.btnEvent+'(0)" />');
		for(var i=1;i<=obj.mun;i++){
			$(obj.childDiv+":eq("+i+")").css("right",i*obj.childWidth+"px");
			$(obj.btnDiv).append('<img src="/Public/images/rewind/btn.png" onclick="'+obj.btnEvent+'('+i+')" />');
		}
		$(obj.childDiv).not($(obj.childDiv+":eq("+obj.nowIndex+")")).css("right",obj.childWidth+"px");
		$(obj.childDiv+":eq("+obj.mun+")").css("right",-obj.childWidth+"px");
		$(obj.childDiv+":eq("+obj.nowIndex+")").css("right","0px");
		
	}
	//确定哪个为白色
	obj.btnPosition=function(btnIndex){
		$(obj.btnDiv+">img").attr("src","/Public/images/rewind/btn.png");
		$(obj.btnDiv+">img:eq("+btnIndex+")").attr("src","/Public/images/rewind/btnOn.png");
	}
	//切换事件
	obj.bannerDo=function(btnIndex,direction){
		obj.childWidth=obj.getWidth();
		//$(obj.childDiv+":eq("+obj.nowIndex+")").stop(false,true).animate({"left":"0px"},500);
		var a=direction+obj.childWidth+"px";
		$(obj.childDiv+":eq("+obj.nowIndex+")").stop(false,true).animate({"right":a},500);
		if(btnIndex||btnIndex==0){
			obj.nowIndex=btnIndex;
		}else{
			obj.nowIndex==obj.mun?obj.nowIndex=0:obj.nowIndex++;
		}
		direction=="+"?direction="-":direction="+";
		a=direction+obj.childWidth+"px";
		$(obj.childDiv+":eq("+obj.nowIndex+")").css("right",a);
		$(obj.childDiv+":eq("+obj.nowIndex+")").stop(false,true).animate({"right":"0"},500);
		//$(obj.childsDiv).stop(false,true).animate({"left":"-"+obj.nowIndex*obj.childWidth+"px"},500);
		obj.btnPosition(btnIndex);
	}
	return obj;
}
function mainChild5BtnClick(btnIndex){
	mainChild5.lastIndex=mainChild5.nowIndex;
	if(btnIndex=="-"){
		mainChild5.nowIndex==0?btnIndex=mainChild5.mun:btnIndex=mainChild5.nowIndex-1;
		mainChild5.bannerDo(btnIndex,"-");
		return;
	}else if(btnIndex=="+"){
		mainChild5.nowIndex==mainChild5.mun?btnIndex=0:btnIndex=mainChild5.nowIndex+1;
		mainChild5.bannerDo(btnIndex,"+");
		return;
	}
	if(btnIndex>mainChild5.nowIndex&&btnIndex!=0){
		mainChild5.bannerDo(btnIndex,"+");
	}else if(btnIndex<mainChild5.nowIndex){
		mainChild5.bannerDo(btnIndex,"-");
	}else{
		return;
	}
	
}

var mainChild5=new mainChange({
	btnDiv:"#mainChild5 .navbtns",
	childsDiv:"#mainChild5 .contents",
	childDiv:"#mainChild5 .contents .content",
	btnEvent:"mainChild5BtnClick"
});

$(function(){
	/*mainChild5*/
	mainChild5.mun=mainChild5.getMun();
	mainChild5.childWidth=mainChild5.getWidth();
	mainChild5.btnAppend();
	
	
	$("#mainChild5 .contents").mouseover(function(){
		$(this).find(".leftBtn").animate({"left":"14px"},300);
		$(this).find(".rightBtn").animate({"right":"14px"},300);
	}).mouseleave(function(){
		$(this).find(".leftBtn").animate({"left":"-100px"},300);
		$(this).find(".rightBtn").animate({"right":"-100px"},300);
	});
});



var loghandle = function(event, delta) {
	var scrollTop=$(document).scrollTop();
	return scrollTop+event.deltaY*event.deltaFactor;
};
window.onload=function(){
	var screenHeight=$(window).height();
	var scrolls={};
	var scrollname=['#mainChild1','#mainChild6'];
	var scrollbool=[false,false];
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
			
			$("#mainChild1 .child:eq(0) span").html(0);
			$("#mainChild1 .child:eq(1) span").html(0);
			$("#mainChild1 .child:eq(2) span").html(91);
			var i1=0;
			var i2=0;
			var i3=91;
			setTimeout(function(){
				var child1=setInterval(function(){
					i1=i1+10;
					if(i1>=20)clearInterval(child1);
					$("#mainChild1 .child:eq(0) span").html(i1);
				},12);
				var child2=setInterval(function(){
					++i2;
					if(i2>=7)clearInterval(child2);
					$("#mainChild1 .child:eq(1) span").html(i2);
				},100);
				var child3=setInterval(function(){
					i3=i3-10;
					if(i3<=1)clearInterval(child3);
					$("#mainChild1 .child:eq(2) span").html("0"+i3);
				},12);
			},500);
			
		}
	}else if(scrollTop>=scrolls[1]){
		if(!scrollbool[1]){
			scrollbool[1]=true;
			scrollbool[0]=true;
			
			
			var news=$("#mainChild7 .quan");
			$.each(news,function(i,n){
				var startDtime=0.2;
				var ii=i+1;
				startDtime=0.2+ii*0.2;
				anClasAdd("#mainChild7 .quan:eq("+i+")","scaleOpacityAn",".6s",startDtime+"s","ease-in-out","both");
			});
		}
	}

}