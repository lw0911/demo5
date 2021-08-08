

$('.prize-turn').mySimpleTurn({
    speed:500,
    delay:2000,
    many:3,
    cur:0,
    autoPlay:true,
    dis:'y'
});

(function()
{
    var $tel=$('.wind1 .tel');
    var $password=$('.wind1 .password');
    var $pic=$('.wind1 .pic-num');
    var $num=$('.wind1 .tel-num');
    var telWord=$tel.val();
    var passWord=$password.val();
    var picWord=$pic.val();
    var numWord=$num.val();

    $('.wind1 input').focus(function()
    {
        var myval=$(this).val();
        if(myval==telWord||myval==passWord||myval==picWord||myval==numWord)
        {
            $(this).val('')
        }
        if(myval==passWord)
        {
            $(this).attr('type','password');
        }
        $(this).css('border-color','#ffb400');
    }).blur(function()
    {
        origin();
        $(this).css('border-color','#dadada');
    });
    window.originData=function()
    {
        origin();
    }
    function origin()
    {
        if($tel.val()=='')
        {
            $tel.val(telWord);
        }
        if($password.val()=='')
        {
            $password.val(passWord).attr('type','text');
        }
        if($pic.val()=='')
        {
            $pic.val(picWord);
        }
        if($num.val()=='')
        {
            $num.val(numWord);
        }
    }
    $('.p3-2 .hb').click(function()
    {
        $('#hb_rule').show();
    });
    $('.p3-2 .jdk').click(function()
    {
        $('#jdk_rule').show();
    });
    $('.p3-2 .tyj').click(function()
    {
        $('#tyj_rule').show();
    });
    $('.p3-2 .hy').click(function()
    {
        $('#hy_rule').show();
    });

    $('.wind .close').click(function()
    {
        $('.wind').hide();
    });
    $('.wind1 .close').click(function()
    {
        $('.wind1').hide();
    });
    var $getWord2=$('.wind1 .get-word2');
    if($getWord2.is(':hidden')||$getWord2.html()=='')
    {
        $getWord2.hide();
    }else
    {
        $('.wind1 .w-msg').css('padding-top',19);
    }

    var word2=$('.wind2 .tel').val();

    $('.wind2 input').focus(function()
    {
        if($(this).val()==word2)
        {
            $(this).val('');
        }
        $(this).css('border-color','#ffb400');
    }).blur(function()
    {
        if($(this).val()=='')
        {
            $(this).val(word2);
        }
        $(this).css('border-color','#dadada');
    });
    $('.wind2 .close').click(function()
    {
        $('.wind2').hide();
    });
     $('.wind3 .close').click(function()
    {
        $('.wind3').hide();
    });

})();

$('.continue').bind('click',function (){
    $('html,body').animate({ scrollTop: 500 }, 600);
    $('.wind1,.wind2').hide();
});
$(".suspension,.page4 .but").click(function () {
    $('html,body').animate({ scrollTop: 500 }, 600);
});
$(".suspension").hover(function () {
    $(".suspension .ps").show();
},function (){
    $(".suspension .ps").hide();
});

$(window).bind("scroll",
    function () {

        var scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
        if (scrollTop > $(".page2").offset().top - $(window).height() / 2) {
            setTimeout("$('.suspension').stop().animate({right:10},300)", 1);
            $(".suspension").show();
        } else if (scrollTop < $(".page2").offset().top - $(window).height() / 2) {
            setTimeout("$('.suspension').stop().animate({right:-200},300)", 1);
        }
    });

