$(function(){
	$(".tm07").css("opacity",0.7);
    $t=setInterval('AutoScroll("#notice")',3000)//间隔时间
    $("#notice").hover(function(){clearInterval($t);},function(){$t=setInterval('AutoScroll("#notice")',3000);});
});

function AutoScroll(obj){
    $(obj).find("ul:first").animate({
    	marginTop:"-30px"//行高
    },800,function(){
    	$(this).css({marginTop:"0px"}).find("li:first").appendTo(this);
    });
}