var f_title = getclass(document, "f_title");
var f_pro_r = document.querySelectorAll(".f_pro_r");
for(var i = 0; i < f_title.length; i++) {
	f_title[i].getElementsByTagName("a")[0].index =
		f_title[i].getElementsByTagName("a")[1].index = i;

	f_title[i].getElementsByTagName("a")[1].onclick =
		f_title[i].getElementsByTagName("a")[0].onclick = function() {
			f_pro_r[this.index].style.overflow = 'hidden';
			var index = this.index;
			f_title[index].getElementsByTagName("a")[0].className =
				f_title[index].getElementsByTagName("a")[1].className = "";
			this.className = "active";
			move(f_pro_r[index], {
				"width": 0
			}, function() {
				move(f_pro_r[index], {
					"width": 1000
				}, function() {
					f_pro_r[index].style.overflow = '';
				})
			});
		}
}
//
var floor_pos = document.querySelector(".floor_pos");
var floor_pos_a = floor_pos.getElementsByTagName('li');
//回到顶部+楼层定位   重写
;
var time = null;
window.onscroll = function() {
	var scroll = document.documentElement.scrollTop || document.body.scrollTop;
	if(scroll > 300) {
		$("gotop").style.display = 'block'
	} else {
		$("gotop").style.display = 'none'
	}
	if(scroll >= 200) {
		floor_pos.style.display = ""
	} else {
		floor_pos.style.display = "none"
	}
	//楼层判断
	if(scroll >= 325 && scroll < 655) {
		floor_pos_a[0].className = "on"
	} else {
		floor_pos_a[0].className = ""
	}
	if(scroll >= 655 && scroll < 1255) {
		floor_pos_a[1].className = "on"
	} else {
		floor_pos_a[1].className = ""
	}
	if(scroll >= 1255 && scroll < 1860) {
		floor_pos_a[2].className = "on"
	} else {
		floor_pos_a[2].className = ""
	}
	if(scroll >= 1860 && scroll < 2645) {
		floor_pos_a[3].className = "on"
	} else {
		floor_pos_a[3].className = ""
	}
	if(scroll >= 2645 && scroll < 3250) {
		floor_pos_a[4].className = "on"
	} else {
		floor_pos_a[4].className = ""
	}
	if(scroll >= 3250) {
		floor_pos_a[5].className = "on"
	} else {
		floor_pos_a[5].className = ""
	}
}
$("gotop").onclick = function() {
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
addevent(document, 'mousewheel', stopTop);
addevent(document, 'DOMMouseScroll', stopTop);

function stopTop() {
	clearInterval(time);
	clearInterval(timer);
}

for(var i = 0; i < floor_pos_a.length; i++) {
	floor_pos_a[i].index = i;
	floor_pos_a[i].onclick = function() {
		clearInterval(timer);
		if(this.index == 0) {
			goF(325)
		}
		if(this.index == 1) {
			goF(660)
		}
		if(this.index == 2) {
			goF(1260)
		}
		if(this.index == 3) {
			goF(1865)
		}
		if(this.index == 4) {
			goF(2650)
		}
		if(this.index == 5) {
			goF(3255)
		}
	}
}
var timer = null;

function goF(tar) {
	clearInterval(timer);
	timer = setInterval(function() {
		var scroll = document.documentElement.scrollTop || document.body.scrollTop;
		var speed = ((tar - scroll) / 10);
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)
		document.documentElement.scrollTop = document.body.scrollTop = scroll + speed;
		if(speed == 0) {
			clearInterval(timer);
		}
	}, 30);
}