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
   
    /*ALL 全局登录与注册input获得焦点的边框特效*/
	$('.loginItem input').focus(function(){
	  $(this).parents('.loginItem').addClass('active');
	})
	
	$('.loginItem input').blur(function(){
	  $(this).parents('.loginItem').removeClass('active')
	})
  
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
  _self.css('text-align','left');
  var parts=_self.parents('form');
  parts.addClass('active');
}
function navserchblurBtn(obj) //失去焦点
{
  var _self=$(obj);
  var parts=_self.parents('form');
  parts.removeClass('active');
}

/* All 找公司-公司转让页面*/
/* 找公司-公司转让页面-城市选择*/
var locationAreaUl='';
locationAreaUl+='<ul class="w100 radius10 clearfix locationAreaUl">'+
'<li class="fl cursor color-blue">东城</li>'+
'<li class="fl cursor">西城</li>'+
'<li class="fl cursor">朝阳</li>'+
'<li class="fl cursor">海淀</li>'+
'<li class="fl cursor">丰台</li>'+
'<li class="fl cursor">石景山</li>'+
'<li class="fl cursor">通州</li>'+
'<li class="fl cursor">昌平</li>'+
'<li class="fl cursor">大兴</li>'+
'<li class="fl cursor">亦庄</li>'+
'<li class="fl cursor">开发区</li>'+
'<li class="fl cursor">顺义</li>'+
'<li class="fl cursor">房山</li>'+
'<li class="fl cursor">门头沟</li>'+
'<li class="fl cursor">平谷</li>'+
'<li class="fl cursor">怀柔</li>'+
'<li class="fl cursor">密云</li>'+
'<li class="fl cursor">延庆</li>'+
'</ul>';

function locationClick(obj,id)
{
  var _self=$(obj);
  _selftext=_self.text();
  console.log(_selftext);
  _self.addClass('active').siblings('a').removeClass('active');
  if(_selftext!='不限')
  {
	$.ajax({
	  type:"POST",
	  url:"ceshi.php",
	  data:{'id':id},
	  dataType: "json",
	  success:function(data)
	  {
	    _self.parents('.gszrLocation').siblings('.locationArea').html('');
        _self.parents('.gszrLocation').siblings('.locationArea').append(locationAreaUl);
	  }
	});
  }
  else  if(_selftext=='不限')
  {
  	_self.parents('.gszrLocation').siblings('.locationArea').html('');
  }
}

/* 找公司-公司转让页面-默认排序/最新/价格 */
function sortClick(obj,id)
{
  var _self=$(obj);
  _self.addClass('active').siblings('li').removeClass('active');
  indexs=_self.index();
  console.log(indexs);
  $('.gszrResource .resourceConts ul').eq(indexs).show().siblings('ul').hide();
}
/* 找公司-公司转让页面-优选/新上 */
function rChoosebtn(obj)
{
  var _self=$(obj);
  chooseIcon=_self.siblings('.chooseIcon');
  if(chooseIcon.hasClass('active'))
  {
    chooseIcon.removeClass('active');
  }
  else
  {
  	chooseIcon.addClass('active');
  }
}

/*All 资源详情页面*/
/*资源详情页面-基本信息tab切换*/
function basicliBtn(obj)
{
  var _self=$(obj);
  _self.addClass('active').siblings('li').removeClass('active');
  li_eq=_self.index();
  li_indexs=_self.parent('ul').siblings('.basicRightul').children('li');
  li_indexs.eq(li_eq).show().siblings('li').hide(); 
}
/*加入对比*/
function comparedidClick(obj,id,companyid)
{
  var _self=$(obj);
  var siblings=_self.siblings('.chooseIcon');
  if(siblings.hasClass('active'))
  {
    siblings.removeClass('active');
  }
  else
  {
  	siblings.addClass('active');
  }
}

