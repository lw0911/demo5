function $(id) {
	return document.getElementById(id);
}

//获取class
function getclass(obj, name) {
	var res = [];
	var all = obj.getElementsByTagName('*');
	for(var i = 0; i < all.length; i++) {
		if(all[i].className.match(name)) {
			res.push(all[i])
		}
	}
	return res;
}

//获取非行内样式
function getStyle(obj, atr) {
	if(obj.currentStyle) {
		return obj.currentStyle[atr]
	} else {
		return getComputedStyle(obj, false)[atr]
	}
}

//事件绑定
function addevent(obj, sj, fn) {
	if(obj.attachEvent) {
		obj.attachEvent("on" + sj, fn)
	} else {
		obj.addEventListener(sj, fn, false)
	}
}

//运动框架
function move(obj, json, fend) {
	
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var flag = true;
		//遍历json中的所有键值对
		for(var attr in json) {
			if(attr == 'opacity') {
				var cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
			} else {
				var cur = parseInt(getStyle(obj, attr));
			}
			var speed = (json[attr] - cur) / 5;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			cur += speed;
			if(attr == 'opacity') {
				obj.style.filter = 'alpha(opacity:' + cur + ')';
				obj.style.opacity = cur / 100;
			} else {
				obj.style[attr] = cur + 'px';
			}
			//所有预设值有一个不满足不给true
			if(cur != json[attr]) {
				flag = false;
			}
		}
		if(flag) {
			clearInterval(obj.timer);
			if(fend) fend();
		}

	}, 30);
}

//选项卡
function tabs(tab, con) {
	var tab = $(tab);
	var con = $(con);
	var tli = tab.getElementsByTagName('li');
	var cli = con.getElementsByTagName('li');
	for(var i = 0; i < tli.length; i++) {
		tli[i].index = i;
		tli[i].onclick = function() {
			for(var i = 0; i < tli.length; i++) {
				tli[i].className = "";
				cli[i].style.display = 'none'
			}
			this.className = "active";
			cli[this.index].style.display = 'block'
		}
	}
}

//回到顶部  滚动条
function goTop(str) {
	var obj = $(str);
	var time = null;
	window.onscroll = function() {
		var scroll = document.documentElement.scrollTop || document.body.scrollTop;
		if(scroll > 300) {
			obj.style.display = 'block'
		} else {
			obj.style.display = 'none'
		}
	}
	obj.onclick = function() {
		clearInterval(time);
		time = setInterval(function() {
			var scroll = document.documentElement.scrollTop || document.body.scrollTop;
			var speed = Math.floor((0 - scroll) / 10);
			document.documentElement.scrollTop = document.body.scrollTop = scroll + speed;
			if(speed == 0) {
				clearInterval(time);
			}
		}, 30);
	}
	addevent(document,'mousewheel',stopTop);
	addevent(document,'DOMMouseScroll',stopTop);
	function stopTop(){
		clearInterval(time);
	}
}

//Cookie
function setCookie(name,value,oDay){
	var day = new Date();
	day.setDate(day.getDate()+oDay);
	document.cookie = name+"="+value+";expires="+day;
}

function getCookie(name){
	var arr = document.cookie.split("; ");
	for(var i = 0;i < arr.length;i++){
		var arr1 = arr[i].split("=");
		if(arr1[0] == name){
			return arr1[1];
		}
	}
	return "";
}

//localStorage
