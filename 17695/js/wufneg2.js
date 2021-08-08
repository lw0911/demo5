/**
 * Created by Administrator on 15-6-10.
 */
$(document).ready(function(){
    $(".index-link").imgscroll({
        speed: 40,    //图片滚动速度
        amount: 0,    //图片滚动过渡时间
        width: 1,     //图片滚动步数
        dir: "left"   // "left" 或 "up" 向左或向上滚动
    });
});