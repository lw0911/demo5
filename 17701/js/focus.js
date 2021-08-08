/**
 * Created by Administrator on 2016/3/21.
 */
$(function(){
    $("input[type|='text']").focus(function(){
        $(this).addClass("focus");
        if($(this).val() ==this.defaultValue){
            $(this).val("");
        }
    }).blur(function(){
        $(this).removeClass("focus");
        if ($(this).val() == '') {
            $(this).val(this.defaultValue);
        }
    });
})