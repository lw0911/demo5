/*news*/
function news(obj1){
	var obj1=obj1;//传入参数
	var obj=new Object;
	obj.nowIndex=0;//banner切换的序号
	obj.banner=obj1.banner;//banner框架
	obj.marginLeft=obj1.marginLeft;
	obj.left=obj1.left;
	screenmun=newsScreenmun;
	obj.getMun=function(){//获取banner个数
		var mun=$(obj.banner).length-1;
		return mun;
	}
	obj.mun=0;//banner个数
	//定位
	obj.position=function(){
		var ii=0;
		for(var i=0;i<=obj.mun;i++){
			$(obj.banner+":eq("+i+")").css({"left":obj.left*i+"px"});
			var dtime=ii*0.2;
			anClasAdd(obj.banner+":eq("+i+")","scaleOpacityShow","1s",dtime+"s","cubic-bezier(0.83, 0.38, 0.15, 0.63)","both");
			if(ii>=2){ii=0;}else{ii++;}
		}
		
		if(newsScreenmun==3){
			$(obj.banner+":eq(0)").show();
			$(obj.banner+":eq(1)").show();
			$(obj.banner+":eq(2)").show();
		}else{
			$(obj.banner+":eq(0)").show();
		}
		
	}
	//切换事件
	obj.bannerDo=function(btnIndex){
		var contentW=$(".news .contents").width()+obj.marginLeft;
		if(btnIndex||btnIndex==0){
			obj.nowIndex=btnIndex;
		}else{
			obj.nowIndex==Math.ceil(obj.mun/newsScreenmun)-1?obj.nowIndex=0:obj.nowIndex++;
		}
		var ii=obj.nowIndex*3;
		var ii1=obj.nowIndex*3+1;
		var ii2=obj.nowIndex*3+2;
		$(".news .content").stop(true,true).animate({"left":-obj.nowIndex*contentW+"px"},500,function(){
			if(newsScreenmun==3){
				$(".news .content .child").not($(".news .content .child:eq("+ii+")")).not($(".news .content .child:eq("+ii1+")")).not($(".news .content .child:eq("+ii2+")")).hide();
			}else{
				$(".news .content .child").not($(".news .content .child:eq("+obj.nowIndex+")")).hide();
			}
			});
		if(newsScreenmun==3){
			$(".news .content .child:eq("+ii+")").stop(true,true).show();
			$(".news .content .child:eq("+ii1+")").stop(true,true).show();
			$(".news .content .child:eq("+ii2+")").stop(true,true).show();
		}else{
			$(".news .content .child:eq("+obj.nowIndex+")").stop(true,true).show();
		}
		
	}
	return obj;
}
// news over 
var news=new news({
	banner:".news .content .child",
	marginLeft:newsMarginLeft,
	left:newsLeft,
	screenmun:newsScreenmun
});
//白点被点击
function newsBtnClick(btnIndex){
	if(btnIndex=="-"){
		news.nowIndex==0?btnIndex=Math.ceil(news.mun/newsScreenmun)-1:btnIndex=news.nowIndex-1;
	}else if(btnIndex=="+"){
		news.nowIndex==Math.ceil(news.mun/newsScreenmun)-1?btnIndex=0:btnIndex=news.nowIndex+1;
	}
	news.bannerDo(btnIndex);
}

$(function(){
	/*news*/
	news.mun=news.getMun();
	news.position();
});


