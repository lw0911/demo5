/**
 * Created by Administrator on 2017/3/7.
 */
$(function () {

    <!--设备切换自动刷新一次============================================增-->
    $("window").resize(function(){
        var width=$(Window).width();
        if(width>768){
            location.reload();
        };
    })
    //<!--超小屏下点击菜单展开-->
    //外层滑入滑出
    var num=false;
    $(".navbar-toggle").on("click",function () {
        if(num){
            $(".mb_nav").slideDown(500);
            num=true;
        }else{
            $(".mb_nav").slideUp(500);
            num=false;
        };
    });
    //子菜单滑入滑出
    function toggle_slide(all,item){
        var fig=true;
        all.on("click",function () {
            if(fig){
                item.slideDown(500);
                fig=false;
            }else{
                item.slideUp(500);
                fig=true;
            };
        });
    }
    toggle_slide($(".mb_hit_01"),$(".mb_ulShow_01"));
    toggle_slide($(".mb_hit_02"),$(".mb_ulShow_02"));
    toggle_slide($(".mb_hit_03"),$(".mb_ulShow_03"));
    toggle_slide($(".mb_hit_04"),$(".mb_ulShow_04"));












});