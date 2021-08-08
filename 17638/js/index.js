$(function(){
    //隐藏翻页按钮
  $(".banner .arrows").hide();
    //封闭轮播动画
  var i=0,t;
    
  function move(){
  var w=$(".banner").width();
    if (i==4) { 
               $(".banner .banner1").css({left:0});
               i=1;
              }
    if (i==-1){
      var s=$(".banner .bannerBtn li").size();
          i=2;
          $(".banner .banner1").css({left:-s*w});  
              }
    $(".banner .banner1").stop().animate({left:-i*w},300);
           //分页按钮的处理
      if (i==3){
                $(".banner .bannerBtn li").removeClass("current").eq(0).addClass("current");
                }else{
                $(".banner .bannerBtn li").removeClass("current").eq(i).addClass("current");
                }
          // i变化
                }
      t=setInterval(function(){ 
          i++; 
          move();
       },3000);
  // 鼠标经过时定时停止
    $(".banner").mouseenter(function(){
        clearInterval(t);
        $(".banner .arrows").fadeIn();
    }).mouseleave(function(){
        t=setInterval(function(){ 
          i++; 
          move();  
       },3000);
        $(".banner .arrows").fadeOut();
    });

  // 单击分页按钮，显示相应图片
      $(".banner .bannerBtn li").click(function(){
           var index=$(this).index(); // 0 1 2
           console.log(index);
            $(".banner .banner1").stop().animate({left:-index*1920},600);
            $(".banner .bannerBtn li").removeClass("current").eq(index).addClass("current");

      });

  //单击 “下一页”，“上一页”

   $(".banner .next").click(function(){
       i++;
       move();
       
   });

   $(".banner .prev").click(function(){
      i--;
      move();
      
   });

   // --------------news 样式 
   $(".news .title li").eq(0).addClass("current");
         $(".news .title li").mouseenter(function(){
            var index=$(this).index();

            $(this).addClass("current").siblings().removeClass("current");
            
            $(".news .textBox ul").stop().animate({top:-index*400});
         });
// 轮播循环
  $(".family .family2").children().css(
  {display:"none"});
  $(".family .family2").children().eq(0).fadeIn();
  var b=0;
  setInterval(function(){
    $(".family .family2").children().eq(b).fadeIn().siblings().fadeOut();
      b++;
      if(b==5){
        b=0;
      }
  },2000);
});
      






 













