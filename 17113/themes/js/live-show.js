$(function(){
    $(".live-video-img").mouseover(function(){
        $(this).children("div.maskid").hide();
    });
    $(".live-video-img").mouseout(function(){
        $(this).children("div.maskid").show();
    })

});