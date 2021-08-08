/*news*/
function customer(obj1){
	var obj1=obj1;//传入参数
	var obj=new Object;
	obj.nowIndex=0;//banner切换的序号
	obj.banner=obj1.banner;//banner框架
	obj.marginLeft=obj1.marginLeft;
	obj.left=obj1.left;
	screenmun=customerScreenmun;
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
		var contentW=$(".customer").width()+obj.marginLeft;
		if(btnIndex||btnIndex==0){
			obj.nowIndex=btnIndex;
		}else{
			obj.nowIndex==Math.ceil(obj.mun/customerScreenmun)-1?obj.nowIndex=0:obj.nowIndex++;
		}
		$(".customer .contents").stop(true,true).animate({"left":-obj.nowIndex*contentW+"px"},500);
		
		
	}
	return obj;
}
// news over 
var customer=new customer({
	banner:".customer .contents .child",
	marginLeft:customerMarginLeft,
	left:customerLeft,
	screenmun:customerScreenmun
});
//白点被点击
function customerBtnClick(btnIndex){
	if(btnIndex=="-"){
		customer.nowIndex==0?btnIndex=Math.ceil(customer.mun/customerScreenmun)-1:btnIndex=customer.nowIndex-1;
	}else if(btnIndex=="+"){
		customer.nowIndex==Math.ceil(customer.mun/customerScreenmun)-1?btnIndex=0:btnIndex=customer.nowIndex+1;
	}
	customer.bannerDo(btnIndex);
}

$(function(){
	/*news*/
	customer.mun=customer.getMun();
	customer.position();
});


