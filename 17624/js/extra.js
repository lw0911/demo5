function pcgzsqh(idname,ispage,ispagenum,time){
	var n=0;
	var cont=$("#"+idname).find("li").length;
	if(ispage!=1){
		$("#"+idname+" .jspage").hide();
	}
	if(ispagenum==1){
		 for(i=0;i<cont;i++){
			$("#"+idname+" .jspage").append("<span>"+(i+1)+"<\/span>");
			}
		}
	else{
	 for(i=0;i<cont;i++){
			$("#"+idname+" .jspage").append("<span><\/span>");
		}
	}
	$("#"+idname+" .jspage span:eq(0)").addClass("cur");
	$("#"+idname+" li:not(:first-child)").hide();
	$("#"+idname+" .jspage span").live("click",function(){
		$(this).addClass("cur").siblings("#"+idname+" .jspage span").removeClass("cur");
		 n=$(this).index();
		$("#"+idname+" li").eq($(this).index()).fadeIn(1000).siblings("#"+idname+" li").fadeOut(500);
		
	})
	$("#"+idname+" .left").live("click",function(){
		
		 var f=$("#"+idname+" .jspage span.cur").index();
		 if(f>0){
		 	$("#"+idname+" li").eq(f-1).fadeIn(1000).siblings("#"+idname+" li").fadeOut(500);
			$("#"+idname+" .jspage span").eq(f-1).addClass("cur").siblings("#"+idname+" .jspage span").removeClass("cur");
		 }
		 else{
			$("#"+idname+" li").eq(cont-1).fadeIn(1000).siblings("#"+idname+" li").fadeOut(500);
			$("#"+idname+" .jspage span").eq(cont-1).addClass("cur").siblings("#"+idname+" .jspage span").removeClass("cur");
		}
	})
	$("#"+idname+" .right").live("click",function(){
		 var f=$("#"+idname+" .jspage span.cur").index();
		 if(f<cont-1){
		 	$("#"+idname+" li").eq(f+1).fadeIn(1000).siblings("#"+idname+" li").fadeOut(500);
			$("#"+idname+" .jspage span").eq(f+1).addClass("cur").siblings("#"+idname+" .jspage span").removeClass("cur");
		 }
		 else{
			$("#"+idname+" li").eq(0).fadeIn(1000).siblings("#"+idname+" li").fadeOut(500);
			$("#"+idname+" .jspage span").eq(0).addClass("cur").siblings("#"+idname+" .jspage span").removeClass("cur");
		}
	})
	var t=setInterval(autoshow,time);
	
	function autoshow(){
		n=n>=(cont-1)?0:++n;
		$("#"+idname+" .jspage span").eq(n).trigger("click");
	}
}
function contentqh(idname,navclass,conclass){
	$("#"+idname+" ."+navclass+" ul li").click(function(){
		$(this).addClass("cur").siblings("#"+idname+" ."+navclass+" ul li").removeClass("cur");
		$("#"+idname+" ."+conclass).eq($(this).index()).show().siblings("#"+idname+" ."+conclass).hide();

	})
}
function textareanr(classname,callbacktext){
	$("."+classname).focus(function(){
		if($(this).val()==callbacktext){
			
			$(this).val("");
		}
	})	
	$("."+classname).blur(function(){
		if($(this).val()==""){
			$(this).val(callbacktext);
		}
	})
	
}
/*左右切换*/
function qhcontrol(controlid,conid,n,page){
	var len=$("#"+conid+" li").length;
	var tt=0;
	if(page){
		var p=Math.ceil(len/n);
		for(i=0;i<p;i++){
			$("#"+controlid+" .jspage").append("<span><\/span>");
		}
		$("#"+controlid+" .jspage span").live("click",function(){
			
			var f=$(this).index();
			var d=$("#"+controlid+" .jspage span.cur").index();
			var left=$("#"+conid).css("margin-left");
			left=left=="auto"?0:left;
			left=parseInt(left);
			
			$("#"+conid).animate({marginLeft:left-(f-d)*n*w},"1000","swing",function(){tt=0;});	
			$(this).addClass("cur").siblings("#"+controlid+" .jspage span").removeClass("cur");
		})
		
	}
	$("#"+controlid+" .jspage span:eq(0)").addClass("cur");
	var margin=parseInt($("#"+conid+" li").css("margin-right"))+parseInt($("#"+conid+" li").css("margin-left"));
	var padding=parseInt($("#"+conid+" li").css("padding-right"))+parseInt($("#"+conid+" li").css("padding-left"));
	var w=$("#"+conid+" li").width()+margin+padding;
	$("#"+conid).css("width",w*len);
	$("#"+controlid+" .left").addClass("leftc");
	var showWidth=$("#"+conid).parent().width();
	if(n>=len||w*len<=showWidth){
		$("#"+controlid+" .left").addClass("leftc");
		$("#"+controlid+" .right").addClass("rightc");
		}
	$("#"+controlid+" .left").click(function(){
		if($("#"+controlid+" .leftc").length<=0&&tt==0){			
			tt=1;
			var left=$("#"+conid).css("margin-left");
			left=left=="auto"?0:left;
			left=parseInt(left);
			$("#"+controlid+" .right").removeClass("rightc");
			$("#"+conid).animate({marginLeft:left+n*w},"1000","swing",function(){tt=0;});
			if(Math.abs(left)<=n*w){
				$("#"+controlid+" .left").addClass("leftc");
			}
			var v=$("#"+controlid+" .jspage span.cur").index();
			if(v==0){
				v=0;	
			}
			else{
				v=v-1;
			}
			$("#"+controlid+" .jspage span").removeClass("cur");
			$("#"+controlid+" .jspage span:eq("+v+")").addClass("cur");
			
		}
	})
	$("#"+controlid+" .right").click(function(){
		if($("#"+controlid+" .rightc").length<=0&&tt==0){
			tt=1;	
			var left=$("#"+conid).css("margin-left");
			left=left=="auto"?0:left;
			left=parseInt(left);
			$("#"+controlid+" .left").removeClass("leftc");
			$("#"+conid).animate({marginLeft:left-n*w},"1000","swing",function(){tt=0;});
			if(Math.abs(left)>=w*len-showWidth-n*w-w/2){
				$("#"+controlid+" .right").addClass("rightc");
			}
		}
		else{
			$("#"+conid).animate({marginLeft:0},"1000","swing",function(){tt=0;});
			$("#"+controlid+" .left").addClass("leftc");
			$("#"+controlid+" .right").removeClass("rightc");
			
		}
		var v=$("#"+controlid+" .jspage span.cur").index();
		if(v==p-1){
			v=0;	
		}
		else{
			v=v+1;
		}
		$("#"+controlid+" .jspage span").removeClass("cur");
		$("#"+controlid+" .jspage span:eq("+v+")").addClass("cur");
	})
	var t=setInterval(autoshow,10000);
	function autoshow(){
        //$("#"+controlid+" .right").trigger("click");
    }
}



var timeout         = 500;
var closetimer		= 0;
var ddmenuitem      = 0;

function jsddm_open()
{	
	jsddm_canceltimer();
	jsddm_close();
	ddmenuitem = $(this).addClass("cur");}

function jsddm_close()
{	if(ddmenuitem) ddmenuitem.removeClass("cur");}

function jsddm_timer()
{	closetimer = window.setTimeout(jsddm_close, timeout);}

function jsddm_canceltimer()
{	if(closetimer)
	{	window.clearTimeout(closetimer);
		closetimer = null;}}
var ais=0;
$(document).ready(function()
{	
	$(window).scroll(function() {
		if($(window).scrollTop()>100&&ais==0){
		 	$(".get-tb").hide();
			$(".get-bj").animate({right:"0"},"normal");
		}
	});
	$(".get-tb").click(function(){
		ais=1;
		$(".get-tb").hide();
		$(".get-bj").animate({right:"0"},"normal");
	})
	$(".close").click(function(){
		ais=1;
		$(".get-bj").css("right","9999px");
		$(".get-tb").show();
	})
	var index=$(".nav ul li.cur").index();
	$(".nav ul li").hover(function(){
		if($(this).index()!=index){
			$(this).find(".fir").addClass("cur");	
		}
		$(this).find(".nextstep").show();
	},function(){
		if($(this).index()!=index){
			$(this).find(".fir").removeClass("cur");	
		}
		$(this).find(".nextstep").hide();	
	})
	$(".wx").hover(function(){
		$(".ewm").show();	
	},function(){
		$(".ewm").hide();		
	})
	pcgzsqh("qh01","1","0","10000");
	qhcontrol("gdnav01","gd01","1","0");
	qhcontrol("brand01","bd01","1","0");
	qhcontrol("brand02","bd02","1","0");
	qhcontrol("brand03","bd03","1","0");
	qhcontrol("brand04","bd04","1","0");
	qhcontrol("brand05","bd05","1","0");
	qhcontrol("brand06","bd06","1","0");
	qhcontrol("brand07","bd07","1","0");
	qhcontrol("brand08","bd08","1","0");
	contentqh("brandqh","brand-nav","brand-con");
	contentqh("ebx","ebx-nav","ebx-img");
	qhcontrol("brand001","bd001","1","0");
	qhcontrol("brand002","bd002","1","0");
	qhcontrol("brand003","bd003","1","0");
	qhcontrol("brand004","bd004","1","0");
	qhcontrol("brand005","bd005","1","0");
	qhcontrol("brand006","bd006","1","0");
	qhcontrol("brand007","bd007","1","0");
	qhcontrol("brand008","bd008","1","0");
	contentqh("brandqh01","brand-nav","brand-con");
	qhcontrol("brand09","bd09","5","0");
	qhcontrol("brand10","bd10","5","0");
	$(".order-cat .input").click(function(e){
		$(".input-select").show();	
		e.stoppropagation();
	})
	$(".input-select span").click(function(e){
		$(".input-select").hide();	
		$(".order-cat .input").text($(this).text());
		e.stoppropagation();
	})
	$("body").click(function(e){
		 var target = $(e.target); 
		 if(!(target.is(".nextstep"))){
			$(".nextstep").hide();
		 }
		
	})
	$(".dthover").mouseenter(function(){
		$(this).find(".bg").slideDown();
		$(this).find(".dtinfo").show("slow");
	})
	$(".dthover").mouseleave(function(){
		$(this).find(".bg").slideUp();
		$(this).find(".dtinfo").hide("slow");
	})
	$(".gx-list li").mouseenter(function(){
		$(this).find("i").slideDown();
		
	})
	$(".gx-list li").mouseleave(function(){
		$(this).find("i").hide("slow");
	})
});

document.onclick = jsddm_close;

$("html,body").animate({ scrollTop:2})
$(window).scroll(function(){
	var scroHs = $(this).scrollTop();
	if(scroHs==0){
	$(".top-nav,.nav").slideDown();
	}else{
	$(".top-nav,.nav").hide()
	}
	if(scroHs<1){
	$(".head1").removeClass("head1_f")
	$(".head1").addClass("head1_t")
	$(".head1 h1 a img,.head1 h1 a b").css("display","none")
	$(".head1_1 ul li span").css("display","block")
	$(".head1_1 ul li").css("padding-right","0px")
	}
	if(scroHs>=2){
	$(".head1").removeClass("head1_t")
	$(".head1 h1").css("display","block")
	$(".head1 h1 a img,.head1 h1 a b").css("display","")
	$(".head1_1 ul li span").css("display","none")
	$(".head1_1 ul li").css("padding-right","25px")
	}
	if(scroHs>2){
	$(".head1").removeClass("head1_t")
	$(".head1").addClass("head1_f")
	$(".head1 h1").css("display","block")
	$(".head1 h1 a img,.head1 h1 a b").css("display","")
	$(".head1_1 ul li span").css("display","none")
	$(".head1_1 ul li").css("padding-right","25px")
	}
	if(scroHs>740){
	$(".R_nav").css("display","block")	
	}else{
	$(".R_nav").css("display","none")
	}
})





