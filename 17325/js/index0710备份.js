$(function(){
    //页面滚动特效
     new WOW().init();
    //首页banner切换
    $('.flexslider').flexslider({      
	    animation: "fade", //动画效果  
	    easing: "swing",      
	    animationLoop: true, //是否循环播放  
	    controlNav: true,  
	    directionNav: false,  
	    startAt: 0, // Integer: 开始播放的 slide，从 0 开始计数  
	    slideshow: true, // Boolean: 是否自动播放  
	    slideshowSpeed: 6000, // Integer: ms 滚动间隔时间  
	    animationSpeed: 600, // Integer: ms 动画滚动速度  
	    pauseOnAction: true, // Boolean: 用户操作时停止自动播放  
	    direction: "horizontal", // String: 滚动方向 ["horizontal 横向滚动"|"vertical 竖向滚动"]  
	    prevText:' <img src="../../common/img/prev.png">',           // String: 上一个按钮文字（），  
	    nextText: '<img src="../../common/img/next.png">',           // String: 下一个按钮文字  
     })
   
   /*首页导航移入产品与服务出现的弹层*/
    $('.ItemChilden').mouseenter(function(){
    	$('.itemList').stop(true).slideDown("slow");
    }).mouseleave(function(){
    	$('.itemList').stop(false).slideUp("fast");	
    });
   
   /*首页导航移入个人中心下拉框*/
    $('.headpersonList').mouseenter(function(){
    	$('.headList').stop(true).slideDown("slow");
    }).mouseleave(function(){
    	$('.headList').stop(false).slideUp("fast");	
    });
   
   /*首页浏览器滚动导航定位*/
  $(window).scroll(function(){
   	var _height=$(document).scrollTop();
   	if(_height>200)
   	{
   	  $('.Header').addClass('HeaderFixed');
   	  $('.Header .home_logo').addClass('home_logo2');
   	  $('.Header .home_arrow').addClass('home_arrow2'); 
   	}
   	else 
   	{
   	  $('.Header ').removeClass('HeaderFixed');
   	  $('.Header .home_logo').removeClass('home_logo2');
   	  $('.Header .home_arrow').removeClass('home_arrow2');
   	}
  })
  
  var allHeight=$(window).height();
  console.log(allHeight);
  
})

coverPoint(); 
 $(window).resize(function(){ //浏览器窗口变化 
  coverPoint(); 
});
//让首页banner背景图保持一屏
function coverPoint(){
  $('.flexslider').css("height",$(window).height());
}

/*二级页面主导航搜索按钮事件*/
function navserchBtn(obj)
{
  var _self=$(obj);
  var parts=_self.parents('form');
  parts.addClass('active');
}

/*产品详情页右侧选择公司类型点击事件*/
//function priceSelect(obj)
//{
//var _self=$(obj);
//
//bothalfUl=_self.siblings('.bothalfUl');
//bothalfUl.toggle();
//}
/*产品详情页右侧选择公司类型选择下拉选项*/
//function priceClick(obj)
//{
//var _self=$(obj);
//val1=_self.parent('ul').siblings('.head_input');
//_self.addClass('active').siblings('li').removeClass('active');
//_selftext=_self.text(); 
//val1.val(_selftext);
//_self.parent('ul').slideUp();
//val1.attr('value',val1.val()); 
//}
/*产品详情页 好评率高低下拉框显示与隐藏*/
//function rateliClick(obj)
//{
//var _self=$(obj);
//_self.siblings('.rateList').stop(true,true).toggle();
//}
///*产品详情页 好评率高低进行选择*/
//function rateliBtn(obj)
//{
//var _self=$(obj);
//_selftext=_self.text();
//rateli_input=_self.parent('ul').siblings().find("input[name='rateli_input']");
//rateli_input.val(_selftext);
//rateli_input.attr('value',rateli_input.val());
//_self.parent('ul').slideUp();
//}

