$(function(){
    $(".index_logo li").mouseover(function(){
        $(this).find('a').addClass("inh_on");
        $(this).siblings().find("a").removeClass("inh_on");
    })
})
// 表单验证

