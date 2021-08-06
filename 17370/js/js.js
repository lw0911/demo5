$(function(){
    $(".index_nav_ul li").hover(function(){
        $(this).addClass("index_nav_ul_on")
    },function(){
        $(this).removeClass("index_nav_ul_on")
    })

    // index_style3
    var obj1=$(".index_style3_l>ul>li");
    var obj2=$(".index_style3_l_box1")
    obj2.not(":first").hide()
    for(var i=0;i<obj1.length;i++){
        a(obj1.eq(i),obj2.eq(i))
    }
})
var a=function(obj1,obj2){
    obj1.click(function(){
        $(this).addClass("index_style3_l_on").siblings().removeClass("index_style3_l_on");
        obj2.show().siblings().hide();
    })
}