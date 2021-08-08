//放大镜
var detail_show = document.querySelector(".detail_show");
var sm_img = document.querySelector(".sm_img");
var see = document.getElementById("see");
var bg_see = document.querySelector(".bg_see");
var img_list = document.querySelector(".img_list").getElementsByTagName("img");
//切换图片
for(var i = 0; i < img_list.length; i++) {
	img_list[i].onclick = function() {
		for(var i = 0; i < img_list.length; i++) {
			img_list[i].parentNode.parentNode.className = ""
		}
		sm_img.children[0].src = bg_see.children[0].src = this.src;
		this.parentNode.parentNode.className = "up"
	}
}
sm_img.onmouseover = function() {
	see.style.display = "";
	bg_see.style.display = "";
}

sm_img.onmouseout = function() {
	see.style.display = "none";
	bg_see.style.display = "none";
}

sm_img.onmousemove = function(e) {
	var ev = e || window.event;
	var scroll = document.documentElement.scrollTop || document.body.scrollTop;
	var endx = ev.clientX - sm_img.offsetLeft - detail_show.offsetLeft - see.offsetWidth / 2;
	var endy = ev.clientY - sm_img.offsetTop - detail_show.offsetTop - see.offsetHeight / 2 + scroll;
	if(endx < 0) {
		endx = 0
	} else if(endx > sm_img.offsetWidth - see.offsetWidth) {
		endx = sm_img.offsetWidth - see.offsetWidth
	}
	if(endy < 0) {
		endy = 0;
	} else if(endy > sm_img.offsetHeight - see.offsetHeight) {
		endy = sm_img.offsetHeight - see.offsetHeight
	}
	see.style.left = endx + "px";
	see.style.top = endy + 'px';
	bg_see.children[0].style.left = endx / (sm_img.offsetWidth - see.offsetWidth) * (bg_see.offsetWidth - bg_see.children[0].offsetWidth) + 'px';
	bg_see.children[0].style.top = endy / (sm_img.offsetHeight - see.offsetHeight) * (bg_see.offsetHeight - bg_see.children[0].offsetHeight) + 'px';

}

//选项卡1
var detail_pro_r_tab = document.querySelector(".detail_pro_r_tab");
var detail_pro_r_tab_list = detail_pro_r_tab.getElementsByTagName('li');

var pro_r_js = document.querySelector(".pro_r_js");
var pro_r_cs = document.querySelector(".pro_r_cs");
var pro_r_pj = document.querySelector(".pro_r_pj");
var pro_r_zx = document.querySelector(".pro_r_zx");
var pro_r_fw = document.querySelector(".pro_r_fw");

for(var i = 0; i < detail_pro_r_tab_list.length; i++) {
	detail_pro_r_tab_list[i].index = i;
	detail_pro_r_tab_list[i].onclick = function() {
		for(var i = 0; i < detail_pro_r_tab_list.length; i++) {
			detail_pro_r_tab_list[i].children[0].className = "";
		}
		if(this.index == 0) {
			pro_r_js.style.display = ""
		} else {
			pro_r_js.style.display = "none"
		}
		if(this.index == 1) {
			pro_r_cs.style.display = ""
		} else {
			pro_r_cs.style.display = "none"
		}
		if(this.index == 2) {
			pro_r_pj.style.display = ""
		} else {
			pro_r_pj.style.display = "none"
		}
		if(this.index == 3) {
			pro_r_zx.style.display = ""
		} else {
			pro_r_zx.style.display = "none"
		}
		if(this.index == 4) {
			pro_r_fw.style.display = ""
		} else {
			pro_r_fw.style.display = "none"
		}
		if(document.documentElement.scrollTop > 703 || document.body.scrollTop > 703) {
			document.documentElement.scrollTop = document.body.scrollTop = 700;
		}

		this.children[0].className = 'on';
	}

}
//评价选项卡
var pro_pjt = document.querySelector(".pro_pjt");
var pro_pjt_list = pro_pjt.getElementsByTagName('li');
var _all = document.querySelector(".all");
var _good = document.querySelector(".good");
var _middle = document.querySelector(".middle");
var _bad = document.querySelector(".bad");
for(var i = 0; i < pro_pjt_list.length; i++) {
	pro_pjt_list[i].index = i;
	pro_pjt_list[i].onclick = function() {
		for(var i = 0; i < pro_pjt_list.length; i++) {
			pro_pjt_list[i].className = "";
		}
		if(this.index == 0) {
			_all.style.display = ""
		} else {
			_all.style.display = "none"
		}
		if(this.index == 1) {
			_good.style.display = ""
		} else {
			_good.style.display = "none"
		}
		if(this.index == 2) {
			_middle.style.display = ""
		} else {
			_middle.style.display = "none"
		}
		if(this.index == 3) {
			_bad.style.display = ""
		} else {
			_bad.style.display = "none"
		}

		this.className = 'on';
	}

}
//商品咨询
var pro_zx = document.querySelector(".pro_zx").children[0];
var zx_con = document.querySelector(".zx_con");
zx_con.children[2].onclick = function() {
	if(zx_con.children[1].value == "") {
		return false;
	}
	var li = document.createElement("li");
	li.innerHTML = '<div class="zx_user"><span>用&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;户：</span><em>' + 'lsj3' + '</em><i>2017-08-18 17:45:00</i></div>' +
		'<dl><dt>咨询内容：</dt><dd><p>' + zx_con.children[1].value + '</p></dd></dl>'
	pro_zx.appendChild(li);
	zx_con.children[1].value = "";
}
//滚动条

var time = null;
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
}
window.onscroll = function() {
	var scroll = document.documentElement.scrollTop || document.body.scrollTop;
	if(scroll > 300) {
		$("gotop").style.display = 'block'
	} else {
		$("gotop").style.display = 'none'
	}

	if(pro_r_js.style.display == "") {
		if(scroll > 703) {
			detail_pro_r_tab.style.position = "fixed";
		} else {
			detail_pro_r_tab.style.position = "relative";
		}
	} else if(pro_r_cs.style.display == "") {
		if(scroll < 703 || scroll > 1400) {
			detail_pro_r_tab.style.position = "relative";
		} else {
			detail_pro_r_tab.style.position = "fixed";
		}
	} else if(pro_r_pj.style.display == "") {
		if(scroll < 703 || scroll > 1000) {
			detail_pro_r_tab.style.position = "relative";
		} else {
			detail_pro_r_tab.style.position = "fixed";
		}
	} else if(pro_r_zx.style.display == "") {
		if(scroll < 703 || scroll > 1200) {
			detail_pro_r_tab.style.position = "relative";
		} else {
			detail_pro_r_tab.style.position = "fixed";
		}
	} else if(pro_r_fw.style.display == "") {
		if(scroll < 703 || scroll > 860) {
			detail_pro_r_tab.style.position = "relative";
		} else {
			detail_pro_r_tab.style.position = "fixed";
		}
	}

}

//城市联动
var adrs_cho = document.querySelector(".adrs_cho");
var adrs_show = document.querySelector(".adrs_show");

var adrs_cho_city = adrs_cho.querySelector(".adrs_cho_city");
var province = document.querySelector(".province");
var city = document.querySelector(".city");
var _area = document.querySelector(".area");
var towns = document.querySelector(".towns");
var adrs_show_em = document.querySelector(".adrs_show").children[0];
//
var adrs_cho_tit = document.querySelector(".adrs_cho_tit");
var adrs_cho_tit_a = adrs_cho_tit.getElementsByTagName("a");
var close_adrs_cho = document.getElementById("close_adrs_cho");


adrs_show.onclick = function(){
	if(adrs_cho.style.display == ""){
		adrs_cho.style.display = "none"
	}else{
		adrs_cho.style.display = ""
	}
}
close_adrs_cho.onclick = function(){
	adrs_cho.style.display = "none"
}
var p = "";
var c = "";
var a = "";
var t = "";
var con = 0;
window.onload = function() {
	changeAdrs();
}
for(var n = 0; n < adrs_cho_tit_a.length; n++) {
	adrs_cho_tit_a[n].index = n;
	adrs_cho_tit_a[n].onclick = function() {
		con = this.index;
		adrsTiOn();
	}
}

function adrsTiOn() {
	//清除样式
	for(var n = 0; n < adrs_cho_tit_a.length; n++) {
		adrs_cho_tit_a[n].className = ""
	}

	if(con == 0) {
		province.style.display = "";
		city.style.display = "none";
		_area.style.display = "none"
		towns.style.display = "none";
	} else if(con == 1) {
		province.style.display = "none";
		city.style.display = "";
		_area.style.display = "none";
		towns.style.display = "none";
	} else if(con == 2) {
		province.style.display = "none";
		city.style.display = "none";
		_area.style.display = "";
		towns.style.display = "none";
	} else if(con == 3) {
		province.style.display = "none";
		city.style.display = "none";
		_area.style.display = "none";
		towns.style.display = "";
	}
	adrs_cho_tit_a[con].className = "on"
}

function changeAdrs() {
	for(var i in city_json) {
		var li = document.createElement("li");
		li.innerHTML = '<a href="javascript:;">' + i + '</a>';
		province.children[0].appendChild(li);
	}

	//省
	var province_a = province.getElementsByTagName('a');
	//	console.log(province_a);
	for(var i = 0; i < province_a.length; i++) {
		province_a[i].onclick = function() {
			city.children[0].innerHTML = "";
			_area.children[0].innerHTML = "";
			towns.children[0].innerHTML = "";
			for(var pro in city_json) {
				if(pro == this.innerHTML) {
					for(var cit in city_json[pro]) {
						var li = document.createElement("li");
						li.innerHTML = '<a href="javascript:;">' + cit + '</a>';
						city.children[0].appendChild(li);
					}
				}
			}
			p = this.innerHTML;
			c = "";
			a = "";
			t = "";
			adrs_cho_tit_a[0].innerHTML = p;
			adrs_cho_tit_a[1].style.display = "";
			adrs_show_em.innerHTML = p + " " + c + " " + a + " " + t;

			con = 1;
			adrsTiOn();

			for(var n = con; n < adrs_cho_tit_a.length; n++) {
				adrs_cho_tit_a[n].innerHTML = "请选择...";
			}
			for(var n = con + 1; n < adrs_cho_tit_a.length; n++) {
				adrs_cho_tit_a[n].style.display = "none";
			}
			//市
			var city_a = city.getElementsByTagName('a');
			for(var i = 0; i < city_a.length; i++) {
				city_a[i].onclick = function() {
					_area.children[0].innerHTML = "";
					for(var pro in city_json) {
						if(pro == p) {
							for(var cit in city_json[pro]) {
								if(cit == this.innerHTML) {
									for(var are in city_json[pro][cit]) {
										var li = document.createElement("li");
										li.innerHTML = '<a href="javascript:;">' + are + '</a>';
										_area.children[0].appendChild(li);
									}
								}
							}
						}
					}
					c = this.innerHTML;
					a = "";
					t = "";
					adrs_cho_tit_a[1].innerHTML = c;
					adrs_cho_tit_a[2].style.display = ""
					adrs_show_em.innerHTML = p + " " + c + " " + a + " " + t;

					con = 2;
					adrsTiOn();
					for(var n = con; n < adrs_cho_tit_a.length; n++) {
						adrs_cho_tit_a[n].innerHTML = "请选择...";
					}
					for(var n = con + 1; n < adrs_cho_tit_a.length; n++) {
						adrs_cho_tit_a[n].style.display = "none";
					}
					//地区
					var _area_a = _area.getElementsByTagName("a");
					for(var i = 0; i < _area_a.length; i++) {
						_area_a[i].onclick = function() {
							towns.children[0].innerHTML = "";
							for(var pro in city_json) {
								if(pro == p) {
									for(var cit in city_json[pro]) {
										if(cit == c) {
											for(var are in city_json[pro][cit]) {
												//												console.log(this.innerHTML);
												if(are == this.innerHTML) {
													for(var ton in city_json[pro][cit][are]) {
														var li = document.createElement("li");
														li.innerHTML = '<a href="javascript:;">' + city_json[pro][cit][are][ton] + '</a>';
														towns.children[0].appendChild(li);
													}
												}
											}
										}
									}
								}
							}
							a = this.innerHTML;
							t = "";
							adrs_cho_tit_a[2].innerHTML = a;
							adrs_cho_tit_a[3].style.display = ""
							adrs_show_em.innerHTML = p + " " + c + " " + a + " " + t;

							con = 3;
							adrsTiOn();
							for(var n = 3; n < adrs_cho_tit_a.length; n++) {
								adrs_cho_tit_a[n].innerHTML = "请选择...";
							}
							//县
							var towns_a = towns.getElementsByTagName("a");
							for(var i = 0; i < towns_a.length; i++) {
								towns_a[i].onclick = function() {
									t = this.innerHTML;
									adrs_cho_tit_a[3].innerHTML = t;
									adrs_show_em.innerHTML = p + " " + c + " " + a + " " + t;
								}
							}

						}
					}
				}
			}

		}
	}
}