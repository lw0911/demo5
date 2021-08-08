/*商务通统计*/
/*document.write('<div style="display:none"><script language="javascript" src="http://ddt.zoosnet.net/JS/LsJS.aspx?siteid=DDT63807755&float=0&lng=cn"></script></div>');*/
document.write('<div style="display:none"><script language="javascript" src="http://lwt.zoosnet.net/JS/LsJS.aspx?siteid=LWT20918300&float=0&lng=cn"></script></div>');

/*应急处理*/
/*function openZoosUrl()
{
//主站
//var bcl="http://lwt.zoosnet.net/LR/Chatpre.aspx?id=LWT20918300&lng=cn&r="+document.referrer+"&p="+window.location.href;
//口腔
//var bcl="http://ddt.zoosnet.net/LR/Chatpre.aspx?id=DDT63807755&lng=cn&r="+document.referrer+"&p="+window.location.href;
//企业QQ
//var bcl="http://wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzgwMDA4MDExMV81NzM4OV84MDAwODAxMTFfMl8"
//商桥
var bcl="http://p.qiao.baidu.com/im/index?siteid=3094919&ucid=5184272&cp=&cr=&cw="
window.open(bcl);
}*/

/*右侧*/
document.writeln("<link href='css/swt.css' rel='stylesheet' type='text/css' />");
//引用右侧JS
/*document.writeln("<script type=\"text/javascript\" src=\"js/jquery-swt.js\"></script>");*/
document.writeln("<script language=\"javascript\" src=\"js/right_call.js\"></script>");

/************************中间***********************/
/*中间弹出和右下角*/
document.writeln("<div id=\"divM\">");
document.writeln("     <a id=\"divMa\" href=\"javascript:void(0)\" onclick=\"openZoosUrl();return false;\" target=\"_self\" title=\"在线咨询\"></a>");
document.writeln("     <a id=\"divMagb\" href=\"javascript:void(0)\" target=\"_self\" title=\"关闭\"></a>");
document.writeln("</div>");
document.writeln("<div id=\"divM_suoxiao\">");
document.writeln("    	<a id=\"divM_suoxiao_a\" onclick=\"openZoosUrl();return false;\" href=\"javascript:void(0)\" target=\"_self\" title=\"点我咨询\"></a>");
document.writeln("    	<a id=\"divM_suoxiao_b\" href=\"javascript:void(0)\" target=\"_self\" title=\"关闭\"></a>");
document.writeln("</div>");

//中间弹框第一次弹出时间
setTimeout("openM()",15000);//10000
function openM(){
	$("#divM").fadeIn(1000);
}

//执行计划
function openMdivM(){
	$("#divM").fadeIn(1000)
}

$(document).ready(function(){
//如果用户不点击就自动化
	$("#divMagb,#divMa2").click(function(){
		//setTimeout("openMdivM()",5000);//75秒后再次弹出
		$("#divM").animate({'width':'0','height': '0','right': '0%','bottom': '0%','margin-right':'0px','margin-bottom': '0px'},1000);
		//$("#divM").fadeOut(1000).delay(15000).animate({'width':'345px','height': '436px','right': '50%','bottom': '50%','margin-right':'-210px','margin-bottom': '-243px'},1000);
		//setTimeout("$(\"#divM\").css({'width':'708px','height': '458px','right': '40%','bottom': '50%','margin-right':'-172px','margin-bottom': '-218px','display':'none'});",2000);//10000
		//$("#divM_suoxiao").show().animate({right:0,bottom:0},1000).animate({opacity:1},1000).delay(27000).fadeOut(1000).animate({right:-223,bottom:-166,opacity:0});//animate占用了2秒 所以是 75000-2000=73000
	});					
						
//如果用户点击
$("#divM_suoxiao_b").click(function(){
  $("#divM_suoxiao").hide(); 
});	  
			  
});		
/************************中间结束*******************/

/*企业qq*/
//document.writeln('<script charset="utf-8" type="text/javascript" src="http://wpa.b.qq.com/cgi/wpa.php?key=XzgwMDA4MDExMV8xMTUzMl84MDAwODAxMTFf"></script>');
function qiyeqq(){
window.location.href="tencent://message/?Menu=yes&amp;amp;uin=800080111&amp;amp;Service=58&amp;amp;SigT=A7F6FEA02730C9880453DDFD04F4210BA4400A2F27921D7E127D1EA50AAE3958D682A58C7CEB6FF2665A0A5210F110831C7F77CAD8E5F4E3A560BBD395C5A1E4932CFDF50D3B68756444B6FA1A64B356B5087DA556E467E5D3CD2B9DAD7A8653E30382137E107A4C014DC3C4E04D301FD03FC97D9D01C262&amp;amp;SigU=30E5D5233A443AB2BC58E47A4E4B1B4156CB19A464D040F31F645DA10A4E8F225D9CDEF0D913C4785D56E8EDFB1E10881DEDCBFF38ADA8B202244CAF57D903CED6528978B20DE9C1";
}
//setTimeout("qiyeqq()",30000);
//document.writeln("<iframe style=\"display: none;\" src=\"tencent://message/?Menu=yes&amp;amp;uin=800080111&amp;amp;Service=58&amp;amp;SigT=A7F6FEA02730C9880453DDFD04F4210BA4400A2F27921D7E127D1EA50AAE3958D682A58C7CEB6FF2665A0A5210F110831C7F77CAD8E5F4E3A560BBD395C5A1E4932CFDF50D3B68756444B6FA1A64B356B5087DA556E467E5D3CD2B9DAD7A8653E30382137E107A4C014DC3C4E04D301FD03FC97D9D01C262&amp;amp;SigU=30E5D5233A443AB2BC58E47A4E4B1B4156CB19A464D040F31F645DA10A4E8F225D9CDEF0D913C4785D56E8EDFB1E10881DEDCBFF38ADA8B202244CAF57D903CED6528978B20DE9C1\"></iframe>");