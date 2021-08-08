function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
		if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}}



$(document).ready(function(){
	hit_title("#username", "gray", "black", false);
	hit_title("#old", "gray", "black", false);
	hit_title("#email", "gray", "black", true);
	hit_title("#mobile", "gray", "black", false);
	var adid = getQueryString("adid");
	$("#adid").val(adid);
	$(".submit_form").click(function(){
		var username=$("#username").val();
		if ($.trim(username)=="" || username==$("#username").attr("hit_title")){
			$("#username").css("color", "");
			$("#username").removeClass().addClass("input inputerror");
			$("#username").parent().removeClass().addClass("item inputbgError");
			$("#username").next().attr("src", "/images/landingPage/error.png").attr('style','display:""');
			return;
		}else{
			$("#username").removeClass().addClass("input");
			$("#username").parent().removeClass().addClass("item inputbg");
			$("#username").next().attr("src", "/images/landingPage/yes.png").attr('style','display:""');
		}
		var old=$("#old option:selected").val();
		if ($.trim(old)=="0"){
			$("#old").css("color", "");
			$("#old").parent().parent().removeClass().addClass("item inputbgErrorHid");
			$("#old").parent().next().attr("src", "/images/landingPage/error.png").attr('style','display:"";position:absolute;z-index:10;margin-left:24px;');
			$("#old").attr("style","color:red;");
			return;
		}else{
			$("#old").parent().parent().removeClass().addClass("item Selectbg");
			$("#old").parent().next().attr("src", "/images/landingPage/yes.png").attr('style','display:"";position:absolute;z-index:10;margin-left:24px;');
			$("#old").attr("style","color:black;");
		}
		var email=$("#email").val();
		if (!valid_email(email)){
			$("#email").css("color", "");
			$("#email").removeClass().addClass("input inputerror");
			$("#email").parent().parent().removeClass().addClass("item inputbgError");
			$("#email").parent().next().attr("src", "/images/landingPage/error.png").attr('style','display:""');
			return;
		}else{
			$("#email").removeClass().addClass("input");
			$("#email").parent().parent().removeClass().addClass("item inputbg");
			$("#email").parent().next().attr("src", "/images/landingPage/yes.png").attr('style','display:""');
		}
		var mobile=$("#mobile").val();
		if (!valid_mobile(mobile)){
			$("#mobile").css("color", "");
			$("#mobile").removeClass().addClass("input inputerror");
			$("#mobile").parent().removeClass().addClass("item inputbgError");
			$("#mobile").next().attr("src", "/images/landingPage/error.png").attr('style','display:""');
			return;
		}else{
			$("#mobile").removeClass().addClass("input");
			$("#mobile").parent().removeClass().addClass("item inputbg");
			$("#mobile").next().attr("src", "/images/landingPage/yes.png").attr('style','display:""');
		}

		var city=$("#city").val();
		$("#province").val("");
		for (i = 0; i < where.length; i++) {
			if (city != "" && (where[i].loca.indexOf(city) >= 0 || where[i].locacity.indexOf(city) >= 0))
			{
				$("#province").val(where[i].loca);
				break;
			}
		}
		if ($.trim($("#province").val())==""){
			$("#city").css("color", "");
			$("#city").removeClass().addClass("input inputerror");
			$("#city").parent().removeClass().addClass("item inputbgError");
			$("#city").next().next().attr("src", "/images/landingPage/error.png").attr('style','display:""');
			return;
		}else{
			$("#city").removeClass().addClass("input");
			$("#city").parent().removeClass().addClass("item inputbg");
			$("#city").next().next().attr("src", "/images/landingPage/yes.png").attr('style','display:""');
		}
		$("#register").attr("action","registersubmit.aspx");
		$(".submit_form").attr("style","background:url(/images/landingPage/submit_3.png) no-repeat scroll center;etter-spacing:normal; color:#333");
		$(".submit_form").val("提交中...");
		$(".submit_form").attr("disabled",true);
		$("#register").submit();

	});
	$("#city").blur(function(){
		var city=$("#city").val();
		$("#province").val("");
		for (i = 0; i < where.length; i++) {
			if (city != "" && (where[i].loca.indexOf(city) >= 0 || where[i].locacity.indexOf(city) >= 0))
			{
				$("#province").val(where[i].loca);
				break;
			}
		}

		if ($.trim($("#province").val())==""){
			$("#city").removeClass().addClass("input inputerror");
			$("#city").parent().removeClass().addClass("item inputbgError");
			$("#city").next().next().attr("src", "/images/landingPage/error.png").attr('style','display:""');
			return;
		}else{
			$("#city").css("color", "");
			$("#city").removeClass().addClass("input");
			$("#city").parent().removeClass().addClass("item inputbg");
			$("#city").next().next().attr("src", "/images/landingPage/yes.png").attr('style','display:""');
		}
	});

	function hit_title(inputName, hitColor, color, isparent){
		if ($(inputName).is('select')){
			if ($(inputName + " option:selected").val() == "0"){
				$(inputName).css("color", hitColor).unbind("keyup").parent().css("z-index",0);
			}
			$(inputName).blur(function(){
				var selectvalue=$(inputName + " option:selected").val();
				if ($.trim(selectvalue)=="0"){
					$(inputName).css("color", "");
					//$(inputName).parent().removeClass().addClass("inputSelect inputerror");
					$(inputName).parent().parent().removeClass().addClass("item inputbgErrorHid");
					$(inputName).parent().next().attr("src", "/images/landingPage/error.png").attr('style','display:"";position:absolute;z-index:10;margin-left:24px;');
					$(inputName).attr("style","color:red;");
				}else{
					//$(inputName).parent().removeClass().addClass("inputSelect");
					$(inputName).parent().parent().removeClass().addClass("item Selectbg");
					$(inputName).parent().next().attr("src", "/images/landingPage/yes.png").attr('style','display:"";position:absolute;z-index:10;margin-left:24px;');
					$(inputName).attr("style","color:"+ color +";");
				}
			});
			return;
		}
		var hit_title = $(inputName).attr("hit_title");
		if ($.trim($(inputName).val()) == "" || $.trim($(inputName).val()) == hit_title)
		{
				$(inputName).css("color", hitColor).unbind("keyup").parent().css("z-index",0);
				$(inputName).val(hit_title);
		}
		$(inputName).blur(function(){
			var blur_v = $.trim($(this).val());
			if (blur_v == "")
			{
				$(this).css("color", hitColor).unbind("keyup").parent().css("z-index",0);
				$(this).val(hit_title);
			} else {
				$(this).css("color", color);
			}
			var trimvalue=$(inputName).val();
			var valid = true;
			if (inputName == "#email")
			{
				valid = valid_email(trimvalue);
			}else if (inputName == "#mobile")
			{
				valid = valid_mobile(trimvalue);
			}
			if (!valid ||$.trim(trimvalue)=="" || trimvalue==hit_title){
				$(inputName).css("color", "");
				$(inputName).removeClass().addClass("input inputerror");
				if (isparent){
					$(inputName).parent().parent().removeClass().addClass("item inputbgError");
					$(inputName).parent().next().attr("src", "/images/landingPage/error.png").attr('style','display:""');
				} else {
					$(inputName).parent().removeClass().addClass("item inputbgError");
					$(inputName).next().attr("src", "/images/landingPage/error.png").attr('style','display:""');
				}
				return;
			}else{
				$(inputName).removeClass().addClass("input");
				if (isparent){
					$(inputName).parent().parent().removeClass().addClass("item inputbg");
					$(inputName).parent().next().attr("src", "/images/landingPage/yes.png").attr('style','display:""');
				} else {
					$(inputName).parent().removeClass().addClass("item inputbg");
					$(inputName).next().attr("src", "/images/landingPage/yes.png").attr('style','display:""');
				}
			}
		});
		$(inputName).focus(function(){
			var focus_v = $.trim($(this).val());
			if (focus_v == hit_title)
			{
				$(this).css("color", color).unbind("keyup").parent().css("z-index",0);
				$(this).val("");
			}
		});
	};
});

function valid_email(email) {
	if ($.trim(email) == ""){
		return false;
	}
	var patten = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
	return patten.test(email);
}

function valid_mobile(mobile){
	if ($.trim(mobile) == ""){
		return false;
	}
	var patten = new RegExp(/^1[3|4|5|8][0-9]\d{4,8}$/);
	return patten.test(mobile);
}
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]); return null;
}
