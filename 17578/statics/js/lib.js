
jQuery(document).ready(function($) {

      //无动画弹出菜单
        $(".MENU li,.MENU_MY").hover(function(){           
            $(this).addClass("ok");
        },function(){
            $(this).removeClass("ok");
        });
	 
	$('.tt').click(function(){
	$("html,body").animate({scrollTop :0},400);
			return false;
	});
	 
 
      

    // 选项卡 鼠标点击
    $(".TAB_CLICK li").click(function(){
      var tab=$(this).parent(".TAB_CLICK");
      var con=tab.attr("id");
      var on=tab.find("li").index(this);
      $(this).addClass('hover').siblings(tab.find("li")).removeClass('hover');
      $(con).eq(on).show().siblings(con).hide();
    });
    //  鼠标点击 展开
    $('.jz-open .ul-open h3').click(function(event) {
        if($(this).parents('li').siblings('li').hasClass('on')){
            $(this).parents('li').siblings('li').removeClass('on').find('.sub-nav').slideUp();
        }
        $(this).parents('li').toggleClass('on');
        $(this).siblings('.sub-nav').slideToggle();
    });

    //  品牌展开
    $('.imgtxt-roll li .btn').click(function() {
        li=$(this).parents('li');
        if(li.hasClass('ok')){
            li.removeClass('ok');
        }else{
            li.addClass('ok');
        }
    });    


    var timer = null;
     $(".nav .ul-nav li").hover(function() {
         clearTimeout(timer);
         $(this).siblings().removeClass('on');
         $(this).addClass('on');
         $('.menu').slideUp();
         if($(this).index()>0) $('#hd .menu').eq($(this).index()-1).slideDown(200);
     }, function() {
         timer = setTimeout(function() {
             $('.menu').slideUp();
         }, 500);
     });
    
     $(".menu").hover(function() {
         clearTimeout(timer);
     }, function() {
         $('.menu').slideUp();   
     });

     $('.menu').each(function(){
        x=$(this).find('ul').size();
        $(this).find('ul').width((100)/x+'%');
     });

     var wow = new WOW(
       {
         boxClass:     'wow',      // animated element css class (default is wow)
         offset:       300,          // distance to the element when triggering the animation (default is 0)
         mobile:       true,       // trigger animations on mobile devices (default is true)
         live:         true,       // act on asynchronously loaded content (default is true)
         scrollContainer: null // optional scroll container selector, otherwise use window
       }
     );
     wow.init();

//  返回顶部

$('body').append('<a href="#" id="totop"></a>');

$(document).scroll(function() {
                  s=$(document).scrollTop();
                  if(s>300) {
                          $('#totop').fadeIn(300);
                  }
                  else
                  {
                          $('#totop').fadeOut(300);
                  }
        });

        $('#totop').click(function(){
                $("html, body").animate({ scrollTop: 0});
                 return false;
        });    


});
