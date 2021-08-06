$(function () {
  var n = 0 ;
  $(".down-button").click(function () {
    if(n%2==0){ $(".applyop-ul").css("display","block");
  }else{
    $(".applyop-ul").css("display","none");
  }
  n++;
})

$(".navigation li").hover(function(){
  $(this).siblings(".selected").css("background-image","none");
})
$(".navigation").mouseleave(function(){
  $(".selected").css("background","url(../assets/img/nav_on.jpg) no-repeat left bottom");
});

$(".navigation .selected").mouseenter(function(){
  $(".selected").css("background","url(../assets/img/nav_on.jpg) no-repeat left bottom");
});

$(".logo").click(function () {
  $(location).attr('href', '../home/home.html');
})
})
