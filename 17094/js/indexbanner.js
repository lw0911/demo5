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
		$(obj.banner+":eq(0)").show();
		$(obj.banner+":eq(0) .contentInfo").show();
		$(obj.btn).append("<div class='bannerNavChild on' id='bannerBtn0' onclick='bannerBtnClick(0)' ></div>");
		for(var i=1;i<=obj.mun;i++){
			$(this.btn).append("<div class='bannerNavChild' id='bannerBtn"+i+"' onclick='bannerBtnClick("+i+")' ></div>");
		}
	}
	//确定哪个为白色
	obj.btnPosition=function(btnIndex){
		$(obj.btn+" .bannerNavChild").removeClass("on");
		$(obj.btn+" .bannerNavChild:eq("+btnIndex+")").addClass("on");
	}
	//切换事件
	obj.bannerDo=function(btnIndex){
		$(obj.banner+":eq("+obj.nowIndex+") .contentInfo").stop(true,true).hide();
		$(obj.banner+":eq("+obj.nowIndex+")").stop(true,true).delay(600).fadeOut(500);
		
		if(btnIndex||btnIndex==0){
			obj.nowIndex=btnIndex;
		}else{
			obj.nowIndex==obj.mun?obj.nowIndex=0:obj.nowIndex++;
		}
		obj.btnPosition(obj.nowIndex);
		$(obj.banner+":eq("+obj.nowIndex+")").stop(true,true).delay(600).fadeIn(500);
		$(obj.banner+":eq("+obj.nowIndex+") .contentInfo").stop(true,true).show();

	}
	

	return obj;
}
// banner over 
var banner1=new banner({
	banner:".banner .contents .content",
	btn:".bannerNav",
	btnUrl:"/images/index/bannerBtn.jpg",
	btnUrlOn:"/images/index/bannerBtnOn.jpg"
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
	},10000);
}


$(function(){
	
	/*banner*/
	banner1.mun=banner1.getMun();
	banner1.btnAppend();
	banner1.interval=setInterval(function(){
		banner1.bannerDo(null);
	},10000);
});