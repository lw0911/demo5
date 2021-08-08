/**
 * Created by Administrator on 2016/3/18.
 */
$(function(){
    slidemenu(".drop-menu-effect");
});
function slidemenu(_this){
    $(_this).each(function(){
        var $this = $(this);
        var theMenu = $this.find(".submenu");
        var tarHeight = theMenu.height();
        theMenu.css({height:0});
        $this.hover(
            function(){
                $(this).addClass("hover_menu");
                theMenu.stop().show().animate({height:tarHeight},400);
            },
            function(){
                $(this).removeClass("hover_menu");
                theMenu.stop().animate({height:0},400,function(){
                    $(this).css({display:"none"});
                });
            }
        );
    });
}