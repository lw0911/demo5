window.onload = function () {
	var oBtnLeft = document.getElementById("goleft");
	var oBtnRight = document.getElementById("goright");
	var oDiv = document.getElementById("indexmaindiv");
	var oDiv1 = document.getElementById("maindiv1");
	var oUl = oDiv.getElementsByTagName("ul")[0];
	var aLi = oUl.getElementsByTagName("li");
	var now = -5 * (aLi[0].offsetWidth + 35);
	oUl.style.width = aLi.length * (aLi[0].offsetWidth + 35) + 'px';
	oBtnRight.onclick = function () {
		var n = Math.floor((aLi.length * (aLi[0].offsetWidth + 35) + oUl.offsetLeft) / aLi[0].offsetWidth);

		if (n <= 5) {
			move(oUl, 'left', 0);
		}
		else {
			move(oUl, 'left', oUl.offsetLeft + now);
		}
	}
	oBtnLeft.onclick = function () {
		var now1 = -Math.floor((aLi.length / 5)) * 5 * (aLi[0].offsetWidth + 35);

		if (oUl.offsetLeft >= 0) {
			move(oUl, 'left', now1);
		}
		else {
			move(oUl, 'left', oUl.offsetLeft - now);
		}
	}
	var timer = setInterval(oBtnRight.onclick, 10000);
	oDiv.onmouseover = function () {
		clearInterval(timer);
	}
	oDiv.onmouseout = function () {
		timer = setInterval(oBtnRight.onclick, 10000);
	}

};

function getStyle(obj, name) {
	if (obj.currentStyle) {
		return obj.currentStyle[name];
	}
	else {
		return getComputedStyle(obj, false)[name];
	}
}

function move(obj, attr, iTarget) {
	clearInterval(obj.timer)
	obj.timer = setInterval(function () {
		var cur = 0;
		if (attr == 'opacity') {
			cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
		}
		else {
			cur = parseInt(getStyle(obj, attr));
		}
		var speed = (iTarget - cur) / 6;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if (iTarget == cur) {
			clearInterval(obj.timer);
		}
		else if (attr == 'opacity') {
			obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
			obj.style.opacity = (cur + speed) / 100;
		}
		else {
			obj.style[attr] = cur + speed + 'px';
		}
	}, 30);
}  
