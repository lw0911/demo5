$(function(){
  $(".show").hover(
    function(){
      var a = $(this).children(".ico").attr("class").split(" ");
      $(this).children(".ico").addClass(a[1]+"Hover");
      $(this).children(".none").show();
    },
    function(){
      var a = $(this).children(".ico").attr("class").split(" ");
      $(this).children(".ico").removeClass(a[2]);
      $(this).children(".none").hide();
    }
  );
  /*$(".tools").hover(
    function(){
      $(this).css("background","url(/images/gou.gif) 0 top no-repeat");
    },
    function(){
      $(this).css("background","url(/images/gou.png) 0 top no-repeat");
    }
  );*/
  $(".service").hover(
    function(){
      $(this).siblings(".box").show();
    },
    function(){
      $(this).siblings(".box").hide();
    }
  );
  $(".wx, .qq").hover(
    function(){
      $(this).find(".box").show();
    },
    function(){
      $(this).find(".box").hide();
    }
  );
  $(".backtop a").click(function(){
      $("html,body").animate({scrollTop:0});
  });
  	$(window).scroll(function(){
  	if($(window).scrollTop()>150)
  			{$(".backtop").fadeIn(500)}
  		else
  			{$(".backtop").fadeOut(500)}
  	});
});
$(function(){
if(!placeholderSupport()){   // 判断浏览器是否支持 placeholder
    $('[placeholder]').live("keyup focus",function() {
			
				$(this).parent().children(".form_text").remove();

    }).blur(function() {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
			input.parent().append('<span class="form_text">' + input.attr('placeholder') + '</span>');
        }
    }).blur();
};
$(".form_text").live("focus",function() {
	$(this).parent().children('input').focus();
	$(this).remove();
});
})
function placeholderSupport() {
    return 'placeholder' in document.createElement('input');
}
var WC={};
WC.Core={
  //弹框依赖于jquery.artDialog
  Dialog:function(opt){
    //默认属性
        var def = {
            title:"信息",
            icon:'ok',
            okFn:null,
            btnValue:'确定',
            content:'操作成功'
        };
        //参数覆盖默认属性
        $.extend(def, opt);
        var dialog = art.dialog({
            title: def.title,
            content: def.content,
            icon: 'succeed',
            ok: function(){
                if(typeof def.okFn=="function"){
                    def.okFn();
                    return false;
                }
                myDialog.close();
                return false;
            }
        });
  },
  //关闭弹窗
  DialogClose:function(){

  }
}