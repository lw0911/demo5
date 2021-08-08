////$(function(){
////
////	var tophtml="<div id=\"izl_rmenu\" class=\"izl-rmenu\"><a href=\"#\" class=\"btn btn-qq\"></a><div class=\"btn btn-wx\"><img class=\"pic\" src=\"img/weixinma.jpg\" /></div><div class=\"btn btn-phone\"><div class=\"phone\">400-630-0086</div></div><div onclick='btnShow();' class=\"btn btn-jiameng\"><div id='divShow' class=\"jiameng\"><img class=\"pic\" src=\"img/xx.png\"  onclick='btnClose();' style='width:18px;height:18px;float:left;'/><h2>在线留言</h2>姓名：<input type='text'><br/>电话：<input type='text'><br/>地址：<input type='text'><br/><input type='button' value='确定提交' ></div></div><div class=\"btn btn-top\"></div>";
////	$("#top").html(tophtml);
////	//$("#izl_rmenu").each(function(){
//////		$(this).find(".btn-wx").mouseenter(function(){
//////			$(this).find(".pic").fadeIn("fast");
//////		});
//////		$(this).find(".btn-wx").mouseleave(function(){
//////			$(this).find(".pic").fadeOut("fast");
//////		});
//////		$(this).find(".btn-phone").mouseenter(function(){
//////			$(this).find(".phone").fadeIn("fast");
//////		});
//////		$(this).find(".btn-phone").mouseleave(function(){
//////			$(this).find(".phone").fadeOut("fast");
//////		});
//////		//$(this).find(".btn-jiameng").click(function(){
////////			//$(this).find(".jiameng").fadeIn("fast");
////////			//$(".jiameng").show();
////////			$(".jiameng").css("display","block");
////////		});
//////		//$(this).find(".btn-jiameng").mouseleave(function(){
////////			$(this).find(".jiameng").fadeOut("fast");
////////		});
//////		//$("#btnclosed").click(function(){
////////			$(this).find(".jiameng").fadeOut("fast");
////////			});
//////		$(this).find(".btn-top").click(function(){
//////			$("html, body").animate({
//////				"scroll-top":0
//////			},"fast");
//////		});
////	//});
////	//var lastRmenuStatus=false;
//////	$(window).scroll(function(){//bug
//////		var _top=$(window).scrollTop();
//////		if(_top>200){
//////			$("#izl_rmenu").data("expanded",true);
//////		}else{
//////			$("#izl_rmenu").data("expanded",false);
//////		}
//////		if($("#izl_rmenu").data("expanded")!=lastRmenuStatus){
//////			lastRmenuStatus=$("#izl_rmenu").data("expanded");
//////			if(lastRmenuStatus){
//////				$("#izl_rmenu .btn-top").slideDown();
//////			}else{
//////				$("#izl_rmenu .btn-top").slideUp();
//////			}
//////		}
//////	});
////});
////function btnShow(){
////	$("#divShow").css("display","block")
////	}
////function btnClose(){
//////	$(".jiameng").hide();
////$("#divShow").css("display","none");
////alert("bbbb");
//////	event.stopPropagation();
////	//alert("bbbbbb");
////	}
//$(function (){
//	var tophtml="<div id=\"izl_rmenu\" class=\"izl-rmenu\"><a href=\"#\" class=\"btn btn-qq\"></a><div class=\"btn btn-wx\"><img class=\"pic\" src=\"img/weixinma.jpg\" /></div><div class=\"btn btn-phone\"><div class=\"phone\">400-630-0086</div></div><div onclick='btnShow();' class=\"btn btn-jiameng\"><div id='divShow' class=\"jiameng\"><img class=\"pic\" src=\"img/xx.png\"  onclick='btnClose();' style='width:18px;height:18px;float:left;'/><h2>在线留言</h2>姓名：<input type='text'><br/>电话：<input type='text'><br/>地址：<input type='text'><br/><input type='button' value='确定提交' ></div></div><div class=\"btn btn-top\"></div>";
//	$("#top").html(tophtml);	
//	});
//
//function btnShow(){
//	$("#divShow").css("display","block")
//	}
//function btnClose(){
////	$(".jiameng").hide();
//
//alert("aaaaaaaa");
//$("#divShow").css("display","none");
//alert("bbbbb");
//event.preventDefault();
////	event.stopPropagation();
//	//alert("bbbbbb");
//	}
$(function(){

    //var tophtml = "<div id=\"izl_rmenu\" class=\"izl-rmenu\"><a href=\"#\" class=\"btn btn-qq\"></a><div class=\"btn btn-wx\"><img class=\"pic\" src=\"../img/weixinma.jpg\" /></div><div class=\"btn btn-phone\"><div class=\"phone\">400-630-0086</div></div><div class=\"btn btn-jiameng\" onclick='divShow(1)'></div><div id=\"divShow\" class=\"jiameng\" style=\"display: none\"><a onclick=\"divShow(2)\">X</a>姓名：<input id='username' type='text'><br/>电话：<input id='userphone' type='text'><br/>地址：<input id='useradd' type='text'><br/><input onclick='jion_add();' type='button' value='确定提交'></div></div></div><div class=\"btn btn-top\"></div>";
    var tophtml = "<div id=\"izl_rmenu\" class=\"izl-rmenu\"><a target='_blank' href=\"http://wpa.qq.com/msgrd?v=3&amp;uin=1132541819&amp;site=qq&amp;menu=yes\" class=\"btn btn-qq\"></a><div class=\"btn btn-wx\"><img class=\"pic\" src=\"../img/weixinma.jpg\" /></div><div class=\"btn btn-phone\"><div class=\"phone\">400-858-0508</div></div><div class=\"btn btn-top\"></div>";
	  //  var tophtml = "<div id=\"izl_rmenu\" class=\"izl-rmenu\"><a target='_blank' href=\"http://wpa.qq.com/msgrd?v=3&amp;uin=1132541819&amp;site=qq&amp;menu=yes\" class=\"btn btn-qq\"></a><div class=\"btn btn-wx\"><img class=\"pic\" src=\"../img/weixinma.jpg\" /></div><div class=\"btn btn-phone\"><div class=\"phone\">400-630-0086</div></div><div class=\"btn btn-jiameng\" onclick='divShow(1)'></div><div id='divShow' class=\"jiameng\" style=\"display: none\"><img style='float:left;width:18px;height:18px;' src=\"../img/xx.png\" onclick=\"divShow(2)\"><h2>在线留言</h2>姓名：<input id='username' type='text'><br/>电话：<input id='userphone' type='text'><br/>地址：<input id='useradd' type='text'><br/><input onclick='jion_add();' type='button' value='确定提交'></div><div class=\"btn btn-top\"></div>";
	$("#top").html(tophtml);
	$("#izl_rmenu").each(function(){
		$(this).find(".btn-wx").mouseenter(function(){
			$(this).find(".pic").fadeIn("fast");
		});
		$(this).find(".btn-wx").mouseleave(function(){
			$(this).find(".pic").fadeOut("fast");
		});
		$(this).find(".btn-phone").mouseenter(function(){
			$(this).find(".phone").fadeIn("fast");
		});
		$(this).find(".btn-phone").mouseleave(function(){
			$(this).find(".phone").fadeOut("fast");
		});
		//$(this).find(".btn-jiameng").click(function(){
//			$(this).find(".jiameng").fadeIn("fast");
//		});
//		$(this).find(".btn-jiameng").mouseleave(function(){
//			$(this).find(".jiameng").fadeOut("fast");
//		});
		$(this).find(".btn-top").click(function(){
			$("html, body").animate({
				"scroll-top":0
			},"fast");
		});
	});
	var lastRmenuStatus=false;
	$(window).scroll(function(){//bug
		var _top=$(window).scrollTop();
		if(_top>200){
			$("#izl_rmenu").data("expanded",true);
		}else{
			$("#izl_rmenu").data("expanded",false);
		}
		if($("#izl_rmenu").data("expanded")!=lastRmenuStatus){
			lastRmenuStatus=$("#izl_rmenu").data("expanded");
			if(lastRmenuStatus){
				$("#izl_rmenu .btn-top").slideDown();
			}else{
				$("#izl_rmenu .btn-top").slideUp();
			}
		}
	});
});
function divShow(type){
	if(type==1)
	$("#divShow").css("display","block");
	else
	$("#divShow").css("display","none");
	}