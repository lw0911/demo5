
jQuery.extend({  
    browser: function()   
    {  
        var  
        rwebkit = /(webkit)\/([\w.]+)/,  
        ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/,  
        rmsie = /(msie) ([\w.]+)/,  
        rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/,      
        browser = {},  
        ua = window.navigator.userAgent,  
        browserMatch = uaMatch(ua);  
  
        if (browserMatch.browser) {  
            browser[browserMatch.browser] = true;  
            browser.version = browserMatch.version;  
        }  
        return { browser: browser };  
    },  
});  
  
function uaMatch(ua)   
{  
        ua = ua.toLowerCase();  
  
        var match = rwebkit.exec(ua)  
                    || ropera.exec(ua)  
                    || rmsie.exec(ua)  
                    || ua.indexOf("compatible") < 0 && rmozilla.exec(ua)  
                    || [];  
  
        return {  
            browser : match[1] || "",  
            version : match[2] || "0"  
        };  
}  


if($.browser.msie) {
  var ieVersion = parseInt($.browser.version)
}
var $backtotop=function(){
    if($(this).scrollTop() > 44) {
	  var _bw = 1400,_wt = document.body.clientWidth;
	  $("#backtotop").css('right', ((_wt-_bw)/2)-64);
	  $("#erweipic").css('right', ((_wt-_bw)/2)-0);
	  var st = $(document).scrollTop(), winh = $(window).height();
	  if(ieVersion != 6) {
	 	 $("#backtotop").css('top',(winh/2) - 44);
	  }
	  $("#erweipic").css('top',st+350);
	 $("#backtotop").css({"display": "block"});
    } else {
      $("#backtotop").css({"display": "none"})
    }
};
var __initEvent = function() {
  $(window).bind("resize",$backtotop);
  $(window).bind("scroll", $backtotop);
  $("#totop").bind("click", function(e) {
    e.preventDefault();
    $("html,body").animate({scrollTop:0},500)
  });
  $("#erweima").bind("mouseover",function(){
	  $('#erweipic').css('display','block');
  });
 $("#erweima").bind("mouseout",function(){
	  $('#erweipic').css('display','none');
  });
 }
$(function() {
  if(screen.width >= 1640) {
    (function() {
      __feedCreat();
      __initEvent()
    })()
  }
});
function addFav(){
	var title = document.title.toString();
	var url = window.location.href;
	    try{
    	window.external.AddFavorite(url,title);
    }catch (e) {
		try{
        	window.sidebar.addPanel(title,url, "");   
		}catch(e){
			alert("?????????????????????????????????????????????Ctrl+D???????????????????????????");
		}
	}
}