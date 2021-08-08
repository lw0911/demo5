// 列表收起展开
$(function(){
    $(".product .category .gray .big").click(function(){
        $(this).siblings().slideToggle();
        $(this).children("i.s1").toggleClass(
            "change"
        ); 
    });
      $(".product .category .gray .big1").click(function(){
        $(this).siblings().slideToggle();
        $(this).children("i.s2").toggleClass(
            "change"
        ); 
    });
});
