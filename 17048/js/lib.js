/*js代码(www.jsdaima.com)拒绝滥竽充数，我们只提供精品资源！*/
$(function(){
    /*滚动事件控制开始*/
    var keys = {37: 1, 38: 1, 39: 1, 40: 1};  
  
    function preventDefault(e) {  
      e = e || window.event;  
      if (e.preventDefault)  
          e.preventDefault();  
      e.returnValue = false;    
    }  
      
    function preventDefaultForScrollKeys(e) {  
        if (keys[e.keyCode]) {  
            preventDefault(e);  
            return false;  
        }  
    }  
      
    function disableScroll() {  
      if (window.addEventListener) // older FF  
          window.addEventListener('DOMMouseScroll', preventDefault, false);  
      window.onwheel = preventDefault; // modern standard  
      window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE  
      window.ontouchmove  = preventDefault; // mobile  
      document.onkeydown  = preventDefaultForScrollKeys;  
    }  
      
    function enableScroll() {  
        if (window.removeEventListener)  
            window.removeEventListener('DOMMouseScroll', preventDefault, false);  
        window.onmousewheel = document.onmousewheel = null;   
        window.onwheel = null;   
        window.ontouchmove = null;    
        document.onkeydown = null;    
    }  

    /*滚动事件控制结束*/
    if($(".expert .wp .sub-class a").length){
        var num = 100/parseInt($(".expert .wp .sub-class a").length);
        $(".expert .wp .sub-class a").css('width',num +'%');
    }


    var $root = $('html, body');
    $('.point-tab a').click(function() {
        $('.main').addClass('open');
        $(this).addClass('on').siblings('a').removeClass('on');
        $root.animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 142
        }, 500);
        return false;
    });

    if (typeof($('.point-tab').offset())!='undefined') {
        var offsetTop = $('.point-tab').offset().top;
        var arrOffset = new Array();
        $(window).scroll(function() {
            var _top = offsetTop - $(window).scrollTop() -80;
            if (_top <= 0) {
                $('.main').addClass('open');
            } else {
                $('.main').removeClass('open');
            }
            if ($('.main.open').length == 1) {
                for (var i = 0; i < $('.offset0').length; i++ ) {
                    arrOffset[i] = new Array();
                    arrOffset[i][0] = i;
                    arrOffset[i][1] = Math.abs($('.offset0').eq(i).offset().top - $(window).scrollTop());
                }
                arrOffset.sort(function(a,b){return a[1] - b[1]});
                $('.point-tab a').eq(arrOffset[0][0]).addClass('on').siblings().removeClass('on');
            } else {
                $('.point-tab a').removeClass('on');
            }
        });
    }

    
    
    $('#reg-form').easyform();
    //咨询表单初始化
    var objId = $("#contact_us_div_unique");
    var winH = $(window).height();
    var winW = $(window).width();
    var formH = objId.height();
    var formW = objId.width();
    var formPosT = (winH-formH)/2;
    var formPosL = (winW-formW)/2;

    objId.css({"left":formPosL+"px","top":formPosT+"px"});

    $(".show_contact").click(function(){    
        $("#all_filter_page").show();
        $("#contact_us_div_unique").show();
        disableScroll();
    });

    $("#all_filter_page").click(function(){
        $(this).hide();
        $("#contact_us_div_unique").hide();
        $(".easytip-div-alert").remove();
        enableScroll();
    });
    

})

// 选项卡 鼠标点击
$(".TAB_CLICK li").click(function() {
    var tab = $(this).parent(".TAB_CLICK");
    var con = tab.attr("id");
    var on = tab.find("li").index(this);
    $(this).addClass('on').siblings().removeClass('on');
    $(con).eq(on).addClass('on').show().siblings(con).removeClass('on').hide();
});


$('.company-content .item').hover(function(){
    $(this).addClass('on').parents('li').siblings().find('.item').removeClass('on');
},function(){})

$("#course_submit").click(function () {
    var username = $("input[name='username']").val();
    var phone = $("input[name='phone']").val();
    var qq = $("input[name='qq']").val();
    var ip = $("input[name='ip']").val();

    if(!username){
        alert('请输入您的姓名!');
        return false;
    }

    if(!phone){
        alert('请输入您的手机号码!');
    }

    var reg = /^1[3|4|5|8|7][0-9]\d{8}$/;
    if(phone && !reg.test(phone)){
        alert('不是一个正确的手机号码');
        return false;
    }

    if(!qq){
        alert('请输入您的qq号');
        return false;
    }

    $.ajax({
        url:url,
        type:'post',
        data:{
            username:username,
            phone:phone,
            qq:qq,
            ip:ip,
            domain:window.location.href
        },
        success:function (data) {
            if(data != 2){
                alert('提交成功，等待上课通知');
            }else{
                alert('不能重复提交！');
            }
            window.location.reload();
        }
    })

});
$('.ft-form .close').click(function(){
    $(this).parents('.float-ft').stop(true,true).hide();
})