//添加数组IndexOf方法
if(!Array.prototype.indexOf) {
	Array.prototype.indexOf = function(elt /*, from*/ ) {
		var len = this.length >>> 0;

		var from = Number(arguments[1]) || 0;
		from = (from < 0) ?
			Math.ceil(from) :
			Math.floor(from);
		if(from < 0)
			from += len;

		for(; from < len; from++) {
			if(from in this && this[from] === elt)
				return from;
		}
		return -1;
	};
}
// grab an element
var myElement = document.querySelector(".headroom");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
var src = "tres/NewWebUI/images/index/";
// initialise
headroom.init();
$(".nav").on({
	mouseenter: function() {
		var index = $(this).index();
		if($(this).hasClass("navAct")) {
			return;
		}
//		$(".header").addClass("headroomShadow");
		$(".navQuick").removeClass("navQuickAct");
		$(".nav").removeClass("navAct");
		$(".nav").find("a").removeClass("act");
		$(".headerDetailBox").fadeIn(200);
		$(".quickTabContentBox").hide();
		$(this).addClass("navAct");
		$(".tab-content" + index).fadeIn(200);
		$(this).find("a").addClass("act")
	}
})
$(".navQuick").on({
	mouseenter: function() {
		if($(this).hasClass("navQuickAct")) {
			return;
		}
		$(".navQuick").removeClass("navQuickAct");
		$(".nav").removeClass("navAct");
		$(".nav").find("a").removeClass("act");
		$(this).addClass("navQuickAct");
		$(".headerDetailBox").fadeIn(200);
		$(".quickTabContentBox").hide();
		$(".tab-content0").fadeIn(200);
	}
})
$(".headBox").on("mouseleave", function(){
	$(".navQuick").removeClass("navQuickAct");
	$(".nav").removeClass("navAct");
	$(".nav").find("a").removeClass("act");
	$(".headerDetailBox").fadeOut(200);
})
$(".inputSearch").on({
	input: function(){
		var that=$(this);
		that.addClass("inputSearchAct");
		$(".headSearchIcon").attr("src",src+"headSearchIconHover.png");
		if(that.val()===""){
			$(".headSearchIcon").attr("src",src+"headSearchIcon.png");
			that.removeClass("inputSearchAct")
		}
	}
})
$(".rigiLast").on({
	mouseenter:function(){
		$(this).find(".startImg").attr("src","../"+src+"qiuHover.png");
	},
	mouseleave:function(){
		$(this).find(".startImg").attr("src","../"+src+"headRigisterIcon.png");
	}
})
$(".inputSearch").on("focus", function() {
	$(".navQuick").removeClass("navAct");
	$(".nav").removeClass("navAct");
	$(".nav").find("a").removeClass("act");
	$(".headerDetailBox").fadeOut(200);
})

$(".menuBtnMbl").on("click",function(){
	var num = $(this).attr("num");
	if(num==0){
		$(".headMblChooseABody").hide();
		$(".headMblChooseBBody").hide();
		$(".arrowRight").show();
		$(".redRight").hide();
		$(".jianIcon").hide();
		$(".jiaIcon").show();
		$(this).attr("src",src+"menuCloseBtn.png");
		$(".headMblChoose").slideDown();
		$(this).attr("num",1);
		$(".headMblSearch").hide();
		$(".headSearchIconMbl").attr("num","0")
		$(".headSearchIconMbl").attr("src",src+"SearchMblIcon.png")
	}else{
		$(".headMblChoose").slideUp();
		$(this).attr("src",src+"menuBtn.png");
		$(this).attr("num",0);
	}
	
})
//执行最近浏览添加的方法
makeCoo();

//记录移动端头部底部是否渲染变量
var isMblAct=0
if(isMbl()){
	$(".headPc").hide();
	$(".headMbl").show();
	$(".footerPc").hide();
	$(".footerMbl").show();
	$(".wraper").css("padding-top","0");
	if(isMblAct==0){
		addMblNavList();
		addMblfootList();
		isMblAct=1;
	}
}else{
	$(".headPc").show();
	$(".headMbl").hide();
	$(".footerPc").show();
	$(".footerMbl").hide();
	$(".wraper").css("padding-top","100px")
}
$(window).resize(function(){
	if(isMbl()){
		$(".headPc").hide();
		$(".headMbl").show();
		$(".footerPc").hide();
		$(".footerMbl").show();
		$(".wraper").css("padding-top","0");
		if(isMblAct==0){
			addMblNavList();
			addMblfootList();
			isMblAct=1;
		}
	}else{
		$(".headPc").show();
		$(".headMbl").hide();
		$(".footerPc").show();
		$(".footerMbl").hide();
		$(".wraper").css("padding-top","100px")
	}
})
//添加移动端导航列表
function addMblNavList(){
	var html="";
	var navHead = $(".nav");
	var quickTabContentBox = $(".quickTabContentBox");
	
	for (var a=0,alen=navHead.length;a<alen;a++) {
		var tagA=navHead.eq(a);
		var quickTabContent=quickTabContentBox.eq(a+1).find(".quickTabContent");
		html+='<div class="headMblChooseA">';
		html+=	'<div class="headMblChooseAHead" num="0" >';
		html+=		tagA.find("a").html()+'<img src="/cn/tres/NewWebUI/images/index/jiaIcon.png" class="jiaIcon" />';
		html+=		'<img src="/cn/tres/NewWebUI/images/index/jianIcon.png" class="jianIcon none" />';
		html+=	'</div>';
		html+=	'<div class="headMblChooseABody">';
		html+=		'<div class="headMblChooseAInner">';
		html+=			'<a href="'+tagA.find("a").attr("href")+'">';
		html+=			'<div class="headMblChooseBHeadAdd">去往'+tagA.find("a").html()+'</div>';
		html+=			'</a>';
		html+=		'</div>';
		for(var b=1,blen=quickTabContent.length;b<blen;b++){
			var quickTabInner = quickTabContent.eq(b).find(".quickTabInner");
			var quickTabInnerLi = quickTabInner.find("li");
		html+=		'<div class="headMblChooseAInner">';
		html+=			'<div class="headMblChooseBHead" num="0" >';
		html+=				'<span>'+quickTabInner.find("h3").html()+'</span>';
		html+=				'<img src="/cn/tres/NewWebUI/images/index/arrowRight.png" class="arrowRight" />';
		html+=				'<img src="/cn/tres/NewWebUI/images/index/redArrow.png" class="redRight none"  />';
		html+=			'</div>';
		html+=			'<div class="headMblChooseBBody">';
		
			for(var c=0,clen=quickTabInnerLi.length;c<clen;c++ ){
				var quickTabInnerA = quickTabInnerLi.eq(c).find("a");
				for(var d=0,dlen=quickTabInnerA.length;d<dlen;d++){
		html+=				'<a href="'+quickTabInnerA.eq(d).attr("href")+'">';
		html+=				'<div class="headMblChooseC">'+quickTabInnerA.eq(d).html()+'</div>';
		html+=				'</a>';
				}
			}
		html+=			'</div>';
		html+=		'</div>';
		}
		html+=  '</div>';
		html+='</div>';
	}
	$(".headMblChoose").html(html);
	setTimeout(function(){
		addEvent()
	})
}
function addEvent(){
	$(".headMblChooseC").on("click",function(){
		var that=$(this);
		that.css("background-color","#e60012");
		that.css("color","#fff");
		setTimeout(function(){
			that.css("background-color","#f7f7f7");
			that.css("color","#000");
		},300)
	});
	$(".headMblChooseBHeadAdd").on("click",function(){
		var that=$(this);
		that.css("background-color","#e60012");
		that.css("color","#fff");
		setTimeout(function(){
			that.css("background-color","#f7f7f7");
			that.css("color","#000");
		},300)
	})
	$(".headSearchIconMbl").on("click",function(){
		var num = $(this).attr("num");
		if(num==0){
			$(".headMblChooseABody").hide();
			$(".headMblChooseBBody").hide();
			$(".arrowRight").show();
			$(".redRight").hide();
			$(".jianIcon").hide();
			$(".jiaIcon").show();
			$(".headMblChooseBHead").attr("num",0);
			$(".headMblChooseAHead").attr("num",0);
			$(".headMblChooseBHead").css("color","#000");
			$(".menuBtnMbl").attr("src",src+"menuBtn.png");
			$(".menuBtnMbl").attr("num","0")
			$(".headMblChoose").hide();
			$(this).attr("src",src+"SearchMblIconAct.png");
			$(".headMblSearch").fadeIn();
			$(this).attr("num",1);
		}else{
			$(this).attr("src",src+"SearchMblIcon.png");
			$(".headMblSearch").fadeOut();
			$(this).attr("num",0);
		}
		
	})
	$(".headMblChooseAHead").on("click",function(){
		var num = $(this).attr("num");
		var that = $(this);
		if(num==0){
			var parent=$(this).parent().parent();
			parent.find(".headMblChooseABody").slideUp();
			parent.find(".headMblChooseAHead").attr("num",0);
			parent.find(".headMblChooseAHead").find(".jiaIcon").show();
			parent.find(".headMblChooseAHead").find(".jianIcon").hide();
			that.parent().find(".headMblChooseABody").slideDown();
			that.find(".jiaIcon").attr("src",src+"jiaHoverIcon.png");
			that.css("background-color","#e60012");
			that.css("color","#fff");
			setTimeout(function(){
				that.find(".jiaIcon").attr("src",src+"jiaIcon.png");
				that.find(".jianIcon").show();
				that.find(".jiaIcon").hide();
				that.css("background-color","#fff");
				that.css("color","#000");
			},300)
			that.attr("num",1);
		}else{
			that.parent().find(".headMblChooseABody").slideUp();
			that.find(".jianIcon").attr("src",src+"jianHoverIcon.png");
			that.css("background-color","#e60012");
			that.css("color","#fff");
			setTimeout(function(){
				that.find(".jianIcon").attr("src",src+"jianIcon.png");
				that.find(".jiaIcon").show();
				that.find(".jianIcon").hide();
				that.css("background-color","#fff");
				that.css("color","#000");
			},300)
			that.attr("num",0);
		}
	})
	$(".headMblChooseBHead").on("click",function(){
		var num = $(this).attr("num");
		var that = $(this);
		if(num==0){
			var parent=that.parent().parent();
			parent.find(".headMblChooseBBody").slideUp();
			parent.find(".headMblChooseBHead").attr("num",0);
			parent.find(".headMblChooseBHead").find(".arrowRight").show();
			parent.find(".headMblChooseBHead").find(".redRight").hide();
			parent.find(".headMblChooseBHead").css("color","#000");
			that.find(".arrowRight").hide();
			that.css("color","#e60012");
			that.find(".redRight").show();
			that.parent().find(".headMblChooseBBody").slideDown();
			that.attr("num",1);
		}else{
			that.find(".arrowRight").show();
			that.find(".redRight").hide();
			that.css("color","#000");
			that.parent().find(".headMblChooseBBody").slideUp();
			that.attr("num",0);
		}
	})
}


//添加移动端底部导航
function addMblfootList(){
	var html="";
	var footerInnerList = $(".footerPc").find(".footerInner");
	var footerMbl = $(".footerMbl");
	for (var a=0,alen=footerInnerList.length;a<alen-1;a++) {
		var footerInner=footerInnerList.eq(a);
		var footerInnerText=footerInnerList.eq(a).find("a");
		html+='<div class="footerChooseBox">';
		html+=	'<div class="footerChooseHead" num="0" >';
		html+=		'<span>'+footerInner.find("h2").html()+'</span><em>+</em>';
		html+=	'</div>';
		html+=	'<div class="footerChooseBody none" >';
		for(var b=0,blen=footerInnerText.length;b<blen;b++){
		html+=		'<a href="'+footerInnerText.eq(b).attr("href")+'">';
		html+=		'<div class="footerChooseInner">'+footerInnerText.eq(b).html()+'</div>';
		html+=		'</a>';
		}
		html+=	'</div>';
		html+='</div>';
	}
	$(".footerChooseOutBox").html(html);
	$(".footerMblChooseBox").html($(".footerInnerLast").html());
	footerMbl.find(".footerInnerLastBox").html($(".footerInnerLastInnerBox").html());
	setTimeout(function(){
		addFooterEvent()
	})
}
function addFooterEvent(){
	$(".footerChooseBox").find(".footerBtnInner").on("click",function(){
	
		$(this).hide();
		$(this).siblings().show();
	})
	$(".footerChooseBox").find(".footerBtnOut").on("click",function(){
		$(this).hide();
		$(this).siblings().show();
	})
	$(".footerChooseHead").on("click",function(){
		var num = $(this).attr("num");
		var that = $(this);
		if(num=="2"){
			return
		}
		if(num==0){
			$(".footerChooseHead").find("em").css("transform","rotate(0deg)");
			$(".footerChooseBody").slideUp();
			that.parent().find(".footerChooseBody").slideDown();
			that.find("em").css("transform","rotate(45deg)");
			that.attr("num",1);
		}else{
			that.parent().find(".footerChooseBody").slideUp();
			that.find("em").css("transform","rotate(0deg)");
			that.attr("num",0);
		}
	})
	
}

$(".footerInner").find(".footerBtn").on({
	mouseenter:function(){
		$(this).find(".footerBtnInner").hide();
		$(this).find(".footerBtnOut").show();
	},
	mouseleave:function(){
		$(this).find(".footerBtnInner").show();
		$(this).find(".footerBtnOut").hide();
	}
});
$(".footerBtnOut").on("click",function(){
	$(this).hide();
	$(this).siblings().show();
})

function isMbl(){
	var winWidth="";
	if (window.innerWidth){
		winWidth = window.innerWidth;
	}else if ((document.body) && (document.body.clientWidth)){
		winWidth = document.body.clientWidth;
	}
	if(winWidth>768){
		return false;
	}
	return true;
}
//获取添加cookie，然后渲染dom方法
function makeCoo(){
	var cookieObj = {};
	var user=getCookie('user');
	var arr=[];
	var hasTof=false;
	cookieObj.title=encodeURI(document.title.split("-")[0]);
	cookieObj.path=window.location.href;
	if(user == "" ){
		arr.push(JSON.stringify(cookieObj));
		setCookie('user',arr.join("1-1-1"), 365);
		addDom(arr);
	}
	if(user != ""){
		arr=user.split("1-1-1");
		for(var i in arr){
			var a=strToJson(arr[i]);
			if(a&&a.title==cookieObj.title){
				hasTof=true;	
			}
		};
		if(!hasTof){
			if(arr.length==3){
				arr.shift();
			}
			
			arr.push(JSON.stringify(cookieObj));
			setCookie('user',arr.join("1-1-1"), 365);
		}
		addDom(arr);
	}
	
}
function addDom(arr){
	var html="";
	for(var i in arr){
		var newObj=strToJson(arr[i]);
		if(newObj.title){
			html+='<li><a href="'+newObj.path+'">'+ decodeURI(newObj.title) +'</a></li>'
		}
		
	}
	$(".lately").find("ul").html(html)
	
}
//设置cookie的方法
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toGMTString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}
//获取cookie的方法
function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		if(c.indexOf(name) == 0){
			return c.substring(name.length, c.length);
		} 
	}
	return "";
}
function strToJson(str){  
     var json = (new Function("return " + str))();  
     return json;  
}  



// 移动端添加语言选择
;(function(){
    $('.headMbl').css({'z-index':11});
    // 添加内容
    $('.headMbl .headMblTop').append(
    	'<div class="languageSel">'+
			'<div class="languageBox">'+
				'<span>EN</span>'+
				'<img src="/cn/tres/NewWebUI/images/threeAll/languageArrow.png" />'+
			'</div>'+
			'<ul class="languageList">'+
				'<li>'+
					'<a href="http://www.h3c.com/en/">EN</a>'+
				'</li>'+
				'<li>'+
					'<a href="http://www.h3c.com.hk/">HK</a>'+
				'</li>'+
			'</ul>'+
		'</div>');
    $('.languageBox').click(function(e){
        e.stopPropagation();
        $('.languageList').slideToggle('fast');
        $(".headMblChoose").slideUp();
        $('.menuBtnMbl').attr("src",src+"menuBtn.png");
        $('.menuBtnMbl').attr("num",0);
    })
    $(document).click(function(){
        $('.languageList').slideUp('fast');
    })
})()