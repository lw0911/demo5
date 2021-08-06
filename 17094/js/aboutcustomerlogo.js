/*customerLogo*/
function customerLogo(obj1){
	var obj1=obj1;//传入参数
	var obj=new Object;
	obj.nowIndex=0;//banner切换的序号
	obj.banner=obj1.banner;//banner框架
	obj.marginLeft=obj1.marginLeft;
	obj.left=obj1.left;
	screenmun=customerLogoScreenmun;
	obj.getMun=function(){//获取banner个数
		var mun=$(obj.banner).length-1;
		return mun;
	}
	obj.mun=0;//banner个数
	//定位
	obj.position=function(){
		for(var i=0;i<=obj.mun;i++){
			$(obj.banner+":eq("+i+")").css({"left":obj.left*i+"px"});
		}
	}
	//切换事件
	obj.bannerDo=function(btnIndex){
		var contentW=$(".customerLogo").width()+obj.marginLeft;
		if(btnIndex||btnIndex==0){
			obj.nowIndex=btnIndex;
		}else{
			obj.nowIndex==Math.ceil(obj.mun/customerLogoScreenmun)-1?obj.nowIndex=0:obj.nowIndex++;
		}
		$(".customerLogo .contents").stop(true,true).animate({"left":-obj.nowIndex*contentW+"px"},500);
	}
	return obj;
}
// customerLogo over 
var customerLogo=new customerLogo({
	banner:".customerLogo .contents .child",
	marginLeft:customerLogoMarginLeft,
	left:customerLogoLeft,
	screenmun:customerLogoScreenmun
});
//白点被点击
function customerLogoBtnClick(btnIndex){
	if(btnIndex=="-"){
		customerLogo.nowIndex==0?btnIndex=Math.ceil(customerLogo.mun/customerLogoScreenmun)-1:btnIndex=customerLogo.nowIndex-1;
	}else if(btnIndex=="+"){
		customerLogo.nowIndex==Math.ceil(customerLogo.mun/customerLogoScreenmun)-1?btnIndex=0:btnIndex=customerLogo.nowIndex+1;
	}
	customerLogo.bannerDo(btnIndex);
}

$(function(){
	/*customerLogo*/
	customerLogo.mun=customerLogo.getMun();
	customerLogo.position();
});


