$(function(){
  var len=$('.slide-ul ul li').length;
  var time=3000;          
  $('.slide-num ol li').hover(function() {
    $('.slide-num ol li').removeClass('ol-active');
    $(this).addClass('ol-active');
    var index=$(this).index('.slide-num ol li');//是num数字里的哪一个，然后给index
    $('.slide-ul ul li').hide();
    $('.slide-ul ul li').eq(index).fadeIn();//把从上面获得的index的值班，给eq，并用浅入浅出效果把隐藏的显示出来
  }, function() {
    
  });
  //自动轮播
  var i=0;
  function autoplay(){
    $('.slide-num ol li').eq(i).trigger('mouseover');
    i++;
    if(i==len){
      i=0;
    }
  }
  setInterval(autoplay,time);

})