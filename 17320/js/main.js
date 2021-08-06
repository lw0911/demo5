//优势
function change(val, obj) {

	obj.style.backgroundColor = "#05dfd2";
	if(val == 'comprehensive') {
		comprehensive.style.display = 'block';
		security.style.display = 'none';
		save.style.display = 'none';
		service.style.display = 'none';
	} else if(val == 'security') {
		comprehensive.style.display = 'none';
		security.style.display = 'block';
		save.style.display = 'none';
		service.style.display = 'none';
	} else if(val == 'save') {
		comprehensive.style.display = 'none';
		security.style.display = 'none';
		save.style.display = 'block';
		service.style.display = 'none';
	} else if(val == 'service') {
		comprehensive.style.display = 'none';
		security.style.display = 'none';
		save.style.display = 'none';
		service.style.display = 'block';
	}
}

function change2(obj) {
	obj.style.backgroundColor = "";
}
//登陆
function fnLogin() {
	var oUname = document.getElementById("uname");
	var oUpass = document.getElementById("upass");
	var oError = document.getElementById("error_box");
	var isNotError = true;

	if(oUname.value.length > 20 || oUname.value.length < 6) {
		oError.innerHTML = "用户名长度必须在6~20位之间";
		isNotError = false;
		return;

	} else if(oUname.value.charCodeAt(0) >= 48 && oUname.value.charCodeAt(0) <= 57) {
		oError.innerHTML = "用户名开头不能为数字";
		isNotError = false;
		return;
	} else {
		for(var i = 0; i < oUname.value.length; i++) {

			if((oUname.value.charCodeAt(i) > 122 || oUname.value.charCodeAt(i) < 97) && (oUname.value.charCodeAt(i) > 57 || oUname.value.charCodeAt(i) < 48)) {
				oError.innerHTML = "用户名只能包含小写字母和数字";
				isNotError = false;
				return;
			}

		}
	}
	if(oUpass.value.length > 20 || oUpass.value.length < 6) {
		oError.innerHTML = "密码长度必须在6~20位之间";
		isNotError = false;
		return;
	}

	oError.innerHTML = "登录成功";
	document.getElementById("fo").submit();
}

//智能云社区
$(function() {
	var i=0;
	$('.newlistcom').eq(0).show();
	$(".communuitynavigation li").click(function() {
		$(this).addClass("cub");
		$(".communuitynavigation li").not($(this)).removeClass("cub");
		$(this).find('.newlistcom').fadeIn(1000);
		$('.newlistcom').not($(this).find('.newlistcom')).hide();

	})

})