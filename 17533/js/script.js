$(function(){ 
	//监听滚动顶部悬浮
	//标示动画是否执行
	var isAnimated = false;
    $(document).scroll(function(e) {
        //this代表window scrollTop()向上滑动的距离
        if($(document).scrollTop() >0){
            $(".top").addClass("fixed");
            $(".backTop").show();
            //如果动画执行过
            if(!isAnimated){
                $(".top").css("top","-80px");//每次要执行动画之前都将top值设为-80px
                $(".top").animate({"top":"0px"},1000);
                isAnimated = true;
            }
        }else{
            isAnimated = false;
            $(".top").removeClass("fixed");
            $(".backTop").hide();
        }
    })
	//地区选择
	$(".header-position .city").click(function(){
		$(".city-list").toggle();
		$(".header-position").toggleClass("bcss");
	})
	$(".header-position ul li a").click(function(){
		$(".city-list").hide();
		$(".header-position").css({"border-radius":"20px"});
	})
	//导航下拉菜单
	$("li.fast-select").has("ul").mouseenter(function(){
        $(this).children("ul").css("display","block");  
        $(this).css({"backgroundColor":"#fff","box-shadow":"-1px -1px 5px #ccc"});
        $("li.fast-select ul").css({"box-shadow":"0px 1px 5px #ccc"});
    }).mouseleave(function () {  
        $(this).children("ul").css({"display":"none"});  
        $(this).css({"backgroundColor":"#fbfbfb","box-shadow":"none"});  
    })
    $("li.two-nav").has("ul").mouseenter(function(){  
        $(this).children("ul").css("display","block");  
        $(this).css({"backgroundColor":"#fff","border":"2px solid #d1d1d1","border-top":"1px solid #d1d1d1","border-right":"0px","box-shadow":"1px 1px 5px #ccc","margin-bottom":"1px"});  
        $("li.two-nav ul").css({"box-shadow":"1px 1px 5px #ccc"});
    }).mouseleave(function () {  
        $(this).children("ul").css("display","none");  
        $(this).css({"backgroundColor":"#fbfbfb","border":"0px solid #d1d1d1","border-bottom":"1px solid #d1d1d1","border-right":"0px","margin-bottom":"0px"});  
    })
	//置頂
	$(".backTop").click(function(){
		window.scroll(0,0);
	})
})  