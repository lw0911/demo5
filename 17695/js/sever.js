/**
 * Created by Administrator on 15-6-13.
 */
jQuery(document).ready(function($) {
    $(".mp").mouseover(function(){
        $(this).find(".feng").show();
    }).mouseout(function(){
        $(this).find(".feng").hide();

    });
});