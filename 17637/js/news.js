// JavaScript Document
<!--新闻列表引用的Js-->
    function news_contentupDiv(div_id) {   
        var div_obj = $("#"+div_id);  
        var windowWidth = document.body.clientWidth;    
		
        var windowHeight = document.body.clientHeight;  
        var news_contentupHeight = div_obj.height();       
        var news_contentupWidth = div_obj.width('left:50%');    
        //添加并显示遮罩层   
        $("<div id='mask'></div>").addClass("mask")   
                                  .width(windowWidth + document.body.scrollWidth)   
                                  .height(windowHeight + document.body.scrollHeight)   
                                  .click(function() {hideDiv(div_id); })   
                                  .appendTo("news_content-div")   
                                  .fadeIn(200);   
        div_obj.css({"position": "absolute"})   
               .animate({left: windowWidth/2+news_contentupWidth/2,right: 0,    
                         top: windowHeight/2+news_contentupHeight/2, top:0, opacity: "show" }, "slow");   
                        
    }    
    function hideDiv(div_id) {   
        $("#mask").remove();   
        $("#" + div_id).animate({right: 0, top: 150, opacity: "hide" }, "slow");  
    }  
<!--隐藏效果-->
$(function(){

    $('.click1').click(function(){
        $('.bg').fadeIn(200);
        $('.news_content').fadeIn(200);
});
$('#close_bg').click(function(){
     $('.bg').fadeOut(200);
    $('.news_content').fadeIut(100,0.4);
	//$('.box').fadeIn(100);
});
});
document.getElementById('news_content').onclick = EX.stop;
var url = '#';
function show(){
var o = document.getElementById('news_content');
o.style.display = "";
setTimeout(function(){EX.addEvent.call(document,'click',hide);});
}
function hide(){
var o = document.getElementById('news_content');
o.style.display = "none";
EX.removeEvent.call(document,'click',hide);
}
