
jQuery(function(){ 

(function(){
	if(!Function.prototype.bind){
		Function.prototype.bind = function(obj){
			var owner = this,args = Array.prototype.slice.call(arguments),callobj = Array.prototype.shift.call(args);
			return function(e){e=e||top.window.event||window.event;owner.apply(callobj,args.concat([e]));};
		};
	}
})();
var banner_tabs = function(id){
	this.ctn = document.getElementById(id);
	this.adLis = null;
	this.btns = null;
	this.animStep = 0.2;//动画速度0.1～0.9
	this.switchSpeed = 2;//自动播放间隔(s)
	this.defOpacity = 1;
	this.tmpOpacity = 1;
	this.crtIndex = 0;
	this.crtLi = null;
	this.adLength = 0;
	this.timerAnim = null;
	this.timerSwitch = null;
	this.init();
};
banner_tabs.prototype = {
	fnAnim:function(toIndex){
		if(this.timerAnim){window.clearTimeout(this.timerAnim);}
		if(this.tmpOpacity <= 0){
			this.crtLi.style.opacity = this.tmpOpacity = this.defOpacity;
			this.crtLi.style.filter = 'Alpha(Opacity=' + this.defOpacity*100 + ')';
			this.crtLi.style.zIndex = 0;
			this.crtIndex = toIndex;
			return;
		}
		this.crtLi.style.opacity = this.tmpOpacity = this.tmpOpacity - this.animStep;
		this.crtLi.style.filter = 'Alpha(Opacity=' + this.tmpOpacity*100 + ')';
		this.timerAnim = window.setTimeout(this.fnAnim.bind(this,toIndex),50);
	},
	fnNextIndex:function(){
		return (this.crtIndex >= this.adLength-1)?0:this.crtIndex+1;
	},
	fnSwitch:function(toIndex){
		if(this.crtIndex==toIndex){return;}
		this.crtLi = this.adLis[this.crtIndex];
		for(var i=0;i<this.adLength;i++){
			this.adLis[i].style.zIndex = 0;
		}
		this.crtLi.style.zIndex = 2;
		this.adLis[toIndex].style.zIndex = 1;
		for(var i=0;i<this.adLength;i++){
			this.btns[i].className = '';
		}
		this.btns[toIndex].className = 'cur'
		this.fnAnim(toIndex);
	},
	fnAutoPlay:function(){
		this.fnSwitch(this.fnNextIndex());
	},
	fnPlay:function(){
		this.timerSwitch = window.setInterval(this.fnAutoPlay.bind(this),this.switchSpeed*1000);
	},
	fnStopPlay:function(){
		window.clearTimeout(this.timerSwitch);
	},
	init:function(){
		this.adLis = this.ctn.getElementsByTagName('li');
		this.btns = this.ctn.getElementsByTagName('cite')[0].getElementsByTagName('span');
		this.adLength = this.adLis.length;
		for(var i=0,l=this.btns.length;i<l;i++){
			with({i:i}){
				this.btns[i].index = i;
				this.btns[i].onclick = this.fnSwitch.bind(this,i);
				this.btns[i].onclick = this.fnSwitch.bind(this,i);
			}
		}
		this.adLis[this.crtIndex].style.zIndex = 2;
		this.fnPlay();
		this.ctn.onmouseover = this.fnStopPlay.bind(this);
		this.ctn.onmouseout = this.fnPlay.bind(this);
	}
};
var player1 = new banner_tabs('banner_tabs');






//小图滚动


	var page = 1;
		var i = 5;
		
		
		//点击向右
		$("span.rightBtn").click(function(){
			var Cparent = $("div.partnerBox");	
			var Ccontent = $("div.partnerBox-in");
			var Cflow = Ccontent.find("div.partnerBox-len");
			var Clen = Cflow.find("li").length;
			var Cwindth = Ccontent.width();
			var CpageOver = Math.ceil( Clen / i )
			if(!Cflow.is(":animated")){
				if( page == CpageOver ){
					Cflow.animate({left:"0px"},"slow");
					page=1;
				}else{
					Cflow.animate({left:"-="+Cwindth/3},"slow");
					page++;
				}
			};
		});
		
		//点击向左
		$("span.leftBtn").click(function(){
			var Cparent = $("div.partnerBox");	
			var Ccontent = $("div.partnerBox-in");
			var Cflow = Ccontent.find("div.partnerBox-len");
			var Clen = Cflow.find("li").length;
			var Cwindth = Ccontent.width();
			var CpageOver = Math.ceil( Clen / i )
			if(!Cflow.is(":animated")){
				if( page == 1 ){
					Cflow.animate({left:"-="+(Cwindth*(CpageOver-1))},"slow");
					page=CpageOver;
				}else{
					Cflow.animate({left:"+="+Cwindth},"slow");					
					page--;
				}
			};
		});










//培训课程

var sWidth = $("#focus").width(); //获取焦点图的宽度（显示面积）
	var len = $("#focus ul li").length; //获取焦点图个数
	var index = 0;
	var picTimer;
	
	//以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
	var btn = "<div class='btnBg'></div><div class='btn'>";
	for(var i=0; i < len; i++) {
		btn += "<span></span>";
	}
	btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
	$("#focus").append(btn);
	$("#focus .btnBg").css("opacity",0.5);

	//为小按钮添加鼠标滑入事件，以显示相应的内容
	$("#focus .btn span").css("opacity",0.4).mouseover(function() {
		index = $("#focus .btn span").index(this);
		showPics(index);
	}).eq(0).trigger("mouseover");

	//上一页、下一页按钮透明度处理
	$("#focus .preNext").css("opacity",0.2).hover(function() {
		$(this).stop(true,false).animate({"opacity":"0.5"},300);
	},function() {
		$(this).stop(true,false).animate({"opacity":"0.2"},300);
	});

	//上一页按钮
	$("#focus .pre").click(function() {
		index -= 1;
		if(index == -1) {index = len - 1;}
		showPics(index);
	});

	//下一页按钮
	$("#focus .next").click(function() {
		index += 1;
		if(index == len) {index = 0;}
		showPics(index);
	});

	//本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
	$("#focus ul").css("width",sWidth * (len));
	
	//鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
	$("#focus").hover(function() {
		clearInterval(picTimer);
	},function() {
		picTimer = setInterval(function() {
			showPics(index);
			index++;
			if(index == len) {index = 0;}
		},4000); //此4000代表自动播放的间隔，单位：毫秒
	}).trigger("mouseleave");
	
	//显示图片函数，根据接收的index值显示相应的内容
	function showPics(index) { //普通切换
		var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
		$("#focus ul").stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
		//$("#focus .btn span").removeClass("on").eq(index).addClass("on"); //为当前的按钮切换到选中的效果
		$("#focus .btn span").stop(true,false).animate({"opacity":"0.4"},300).eq(index).stop(true,false).animate({"opacity":"1"},300); //为当前的按钮切换到选中的效果
	}

//////////////////////我叫mt
	
	
	
// 获取窗口宽度
if (window.innerWidth)
winWidth = window.innerWidth;
else if ((document.body) && (document.body.clientWidth))
winWidth = document.body.clientWidth;
// 获取窗口高度
if (window.innerHeight)
winHeight = window.innerHeight;
else if ((document.body) && (document.body.clientHeight))
winHeight = document.body.clientHeight;
// 通过深入 Document 内部对 body 进行检测，获取窗口大小
if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth)
{
winHeight1 = document.documentElement.clientHeight;
winWidth1 = document.documentElement.clientWidth;
}
// alert(winWidth+"|"+winHeight);
// alert(winWidth1+"|"+winHeight1);
$(".hs_bm").click(function(){


	$("#alert_form_content").addClass('show').removeClass('hide');
	$("body").css({
		 "width":"winWidth",
  			"height":"winHeight",
 				 "overflow":"hidden"
		});



})
$(".alert_eqit").click(function(){
	$("#alert_form_content").addClass('hide').removeClass('show');
	$("body").css({
		 "width":"100%",
  			"height":"100%",
 				 "overflow":"scroll"
		});
	//关闭 重置表单
	$("input[type=reset]").click();
	
})













});



			$(function(){

		
				$('#cp_qh_a1').hover(function(){
					$(this).find('.hsdsbm_gyd').addClass('xxypt_mr_p').removeClass('xxypt_mr');
					$('#aaaa').addClass('show').removeClass('hide').siblings().removeClass('show').addClass('hide');
				},function(){
					$(this).find('.hsdsbm_gyd').addClass('xxypt_mr').removeClass('xxypt_mr_p');
				});
				
				$('#cp_qh_a2').hover(function(){
					$(this).find('.hsdsbm_gyd').addClass('xxypt_mr_p').removeClass('xxypt_mr');
					$('#bbbb').addClass('show').removeClass('hide').siblings().removeClass('show').addClass('hide');
				},function(){
					$(this).find('.hsdsbm_gyd').addClass('xxypt_mr').removeClass('xxypt_mr_p');
				});


				$('#cp_qh_a3').hover(function(){
					$(this).find('.hsdsbm_gyd').addClass('xxypt_mr_p').removeClass('xxypt_mr');
					$('#cccc').addClass('show').removeClass('hide').siblings().removeClass('show').addClass('hide');
				},function(){
					$(this).find('.hsdsbm_gyd').addClass('xxypt_mr').removeClass('xxypt_mr_p');
				});


				$('#cp_qh_a4').hover(function(){
					$(this).find('.hsdsbm_gyd').addClass('xxypt_mr_p').removeClass('xxypt_mr');
					$('#dddd').addClass('show').removeClass('hide').siblings().removeClass('show').addClass('hide');
				},function(){
					$(this).find('.hsdsbm_gyd').addClass('xxypt_mr').removeClass('xxypt_mr_p');
				});



				$('#cp_qh_a5').hover(function(){
					$(this).find('.hsdsbm_gyd').addClass('xxypt_mr_p').removeClass('xxypt_mr');
					$('#eeee').addClass('show').removeClass('hide').siblings().removeClass('show').addClass('hide');
				},function(){
					$(this).find('.hsdsbm_gyd').addClass('xxypt_mr').removeClass('xxypt_mr_p');
				});
			})