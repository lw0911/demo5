//文本框默认提示文字
function textFocus(el) {
    if (el.defaultValue == el.value) { el.value = ''; el.style.color = '#333'; }
}
function textBlur(el) {
    if (el.value == '') { el.value = el.defaultValue; el.style.color = '#999'; }
}


//注册页面的提示文字
$(function(){

    //姓名栏失去焦点
    $(".user").blur(function(){
        reg=/^1[3|4|5|8][0-9]\d{4,8}$/i;//验证手机正则(输入前7位至11位)

        if( $(".user").val()==""|| $(".user").val()=="姓名")
        { 
            $(".user").addClass("errorC");
            $(".error0").html("请输入您的姓名");
            $(".error0").css("display","block");
        }
        else
        {
            $(".user").addClass("checkedN");
            $(".user").removeClass("errorC");
            $(".error0").css("display","none");
        }
    });
   //手机号栏失去焦点
    $(".phone").blur(function(){
        reg=/^1[3|4|5|8][0-9]\d{4,8}$/i;//验证手机正则(输入前7位至11位)

        if( $(".phone").val()==""|| $(".phone").val()=="手机号")
        { 
            $(".phone").addClass("errorC");
            $(".error1").html("请输入您的手机号");
            $(".error1").css("display","block");
        }
        else if($(".phone").val().length<11)
        {   
            $(".phone").addClass("errorC");
            $(".error1").html("手机号长度有误！");
            $(".error1").css("display","block");
        }
        else if(!reg.test($(".phone").val()))
        {   
            $(".phone").addClass("errorC");
            $(".error1").html("你确定这是你的手机号!!");
            $(".error1").css("display","block");
        }
        else
        {
            $(".phone").addClass("checkedN");
            $(".phone").removeClass("errorC");
            $(".error1").css("display","none");
        }
    });

    //验证码栏失去焦点
    $(".email").blur(function(){
        reg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if( $(".email").val()=="" || $(".email").val()=="邮箱")
        {
            $(".email").addClass("errorC");
            $(".error2").html("请填写邮箱");
            $(".error2").css("display","block");
        }
        else if($(".email").val().length<6)
        {
            $(".email").addClass("errorC");
            $(".error2").html("邮箱长度有误！");
            $(".error2").css("display","block");
        }
        else if(!reg.test($(".email").val()))
        {
            $(".email").addClass("errorC");
            $(".error2").html("邮箱输入不正确");
            $(".error2").css("display","block");
        }

    });


   //动态密码栏失去焦点
    $(function(){
        $(".intextarea").focus(function(){
            $(this).addClass("focus");
            if($(this).val() =='留言'){
                $(this).val("");
            }
        }).blur(function(){
            $(this).removeClass("focus");
            if ($(this).val() == '') {
                $(this).val(this.defaultValue);
            }
        });
    })



})