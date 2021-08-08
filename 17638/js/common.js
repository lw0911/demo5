    $(function(){

        //---------置顶导航
        $(".nav").clone().appendTo($("body"));
        $(".nav").eq(1).css({position:"fixed",zIndex:"3",display:"none"});
        $(window,document).scroll(function(){
             var s=$("body").scrollTop();
             if(s>100){
                $(".nav").eq(1).slideDown();
             }else{
                $(".nav").eq(1).slideUp();
             }
        });     
        
        // ----------下拉导航
        $(".nav .down").hover(function(){
            $(this).children("ul").slideToggle(20);   
        });
        // ---------------点击搜索框事件
        
        $(".nav .search .search_box").focus(function(){
            $(this).attr({value:""});
        });
        $(".nav .search .search_box").blur(function(){
            $(this).attr({value:"search"});
        });
         // 产品切换

    $(".pro .pro_l").find(".pic_small2").hover(function(){
        $(".pro .white").fadeIn(300);
        $(".pro .gray").fadeOut(300);
    });
    $(".pro .pro_l").find(".pic_small").hover(function(){
        $(".pro .white").fadeOut(300);
        $(".pro .gray").fadeIn(300);
    });

        // 客服
     $(".service li").hover(function(){
        $(".prompt").fadeToggle();
    });
        // 客服弹出框
        $(".Top li").eq(1).hover(function(){
        $(".prompt1").fadeToggle();
        });
        // 返回顶部
        $(window,document).scroll(function(){
            T=$("body","html").scrollTop();
            if (T>500){
                $(".Top").fadeIn();
                
            }else{
                $(".Top").fadeOut();
            }
        });

        $(".Top").click(function(){
            $("body","html").animate({scrollTop:0});
        });

        $(function(){
            $(".footer .bottom .right .wx").hover(function(){
                $(this).next().fadeToggle()
            });
        });
    });
    // 鼠标跟随
 window.onload=function(){
        var flow=document.getElementById("flow");
        document.onmousemove=function(e){
            e=e||window.event;
            flow.style.top=0;
            flow.style.left=e.clientX+"px";
        }
    }