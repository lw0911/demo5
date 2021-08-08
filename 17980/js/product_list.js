//品牌
var menu_box_p = document.querySelector(".menu_box_p");
var menu_box_p_a = menu_box_p.getElementsByTagName('a');

var pro_tp = document.getElementById("pro_tp");
var pro = document.getElementById("pro");
var pro_jg = document.getElementById("pro_jg");
var pro_pp = document.getElementById("pro_pp");

var product_menu_show = document.querySelector(".product_menu_show");
var product_tit_cho = document.querySelector(".product_tit_cho");
var more = document.getElementById("more");
var dcho = document.getElementById("dcho");
var more_flag = false;
var product_more = document.querySelector(".product_more");
var chosed = document.querySelector(".chosed");
var chose_btn = document.querySelector(".chose_btn");
var product_menu_show_a = product_menu_show.children[0].getElementsByTagName('a');
var product_menu_all_a = document.querySelector(".product_menu_all").getElementsByTagName('a');
var product_menu_box = document.querySelector(".product_menu_box");
var product_title = document.querySelector(".product_title");
var pro_pp_a = pro_pp.children[0].getElementsByTagName('a');

for(var i = 1; i < menu_box_p_a.length; i++) {
	menu_box_p_a[i].onclick = function() {
		menu_box_p_a[0].innerHTML = this.innerHTML;
	}
}

for(var i = 0; i < pro_pp_a.length; i++) {
	pro_pp_a[i].onclick = function() {
		menuBox2(this.innerHTML)
	}
}
more.onclick = function() {
	if(more_flag) {
		product_more.style.display = 'none';
		more_flag = false;
	} else {
		product_menu_show.children[0].className = "more_pro";
		product_more.style.display = 'block'
		more_flag = true;
		//单选
		for(var i = 0; i < product_menu_show_a.length; i++) {
			product_menu_show_a[i].onclick = function() {
				menuBox2(this.innerHTML)
			}
		}

	}
}

dcho.onclick = function() {
	product_menu_show.children[0].className = "cho_pro";
	product_more.style.display = 'block';
	chose_btn.style.display = 'block';
	product_tit_cho.style.zIndex = "-1";
	//多选
	for(var i = 0; i < product_menu_show_a.length; i++) {
		product_menu_show_a[i].flag = false;
		product_menu_show_a[i].onclick = function() {
			if(this.className == "choosed") {
				var txt = chosed.querySelector("dd").children;
				this.className = "";
				for(var j = 0; j < txt.length; j++) {
					if(txt[j].innerHTML == this.innerHTML) {
						chosed.querySelector("dd").removeChild(txt[j]);
						return;
					}
				}
			} else {
				this.className = "choosed";
				chosed.style.display = 'block';
				chose_btn.children[0].style.display = "";
				var a = document.createElement('a');
				a.innerHTML = this.innerHTML;
				a.href = "javascript:;";
				chosed.querySelector("dd").appendChild(a);
			}
			if(chosed.querySelector("dd").children.length == 0) {
				chosed.style.display = 'none';
				chose_btn.children[0].style.display = "none";
			} else {
				for(var n = 0; n < chosed.querySelector("dd").children.length; n++) {
					chosed.querySelector("dd").children[n].onclick = function() {
						chosed.querySelector("dd").removeChild(this);
					}
				}
			}

		}
	}
}
chose_btn.children[0].onclick = function() {
	var a = chosed.querySelector("dd").children;
	var txt = "";
	for(var j = a.length - 1; j >= 0; j--) {
		txt = txt + a[j].innerHTML + ",";
	}
	var div = document.createElement("div");
	div.className = "menu_box_p2";
	div.innerHTML = '<span>品牌: </span><a href="javascript:;">' + txt + '</a>';
	product_menu_box.appendChild(div);
	product_title.children[0].children[2].style.display = "none";
	product_more.style.display = 'none';
	more_flag = false;
	var menu_box_p2 = product_menu_box.querySelector(".menu_box_p2");
	menu_box_p2.onclick = function() {
		product_menu_box.removeChild(menu_box_p2);
		product_title.children[0].children[2].style.display = "";
	}
	backToOld()
}
chose_btn.children[1].onclick = function() {
	backToOld()
}

for(var i = 0; i < product_menu_all_a.length; i++) {
	product_menu_all_a[i].onclick = function() {
		for(var i = 0; i < product_menu_all_a.length; i++) {
			product_menu_all_a[i].className = "";
		}
		this.className = "active";
	}
}
//回复默认样式
function backToOld() {
	for(var i = 0; i < product_menu_all_a.length; i++) {
		product_menu_all_a[i].className = "";
	}
	product_menu_all_a[0].className = "active";
	for(var i = 0; i < product_menu_show_a.length; i++) {
		product_menu_show_a[i].className = ""
	}
	product_tit_cho.style.zIndex = "9";
	product_more.style.display = 'none';
	chose_btn.style.display = 'none';
	chosed.style.display = 'none';
	chose_btn.children[0].style.display = "none";
	chosed.querySelector("dd").innerHTML = "";
}

function menuBox2(txt) {
	var div = document.createElement("div");
	div.className = "menu_box_p2";
	div.innerHTML = '<span>品牌: </span><a href="javascript:;">' + txt + '</a>';
	product_menu_box.appendChild(div);
	product_title.children[0].children[2].style.display = "none";
	product_more.style.display = 'none';
	more_flag = false;
	var menu_box_p2 = product_menu_box.querySelector(".menu_box_p2");
	menu_box_p2.onclick = function() {
		product_menu_box.removeChild(menu_box_p2);
		product_title.children[0].children[2].style.display = "";
	}
}

//价格
var pro_jg_a = pro_jg.getElementsByTagName('a');
for(var i = 0; i < pro_jg_a.length; i++) {
	pro_jg_a[i].onclick = function() {
		menuBox3(this.innerHTML)
	}
}

function menuBox3(txt) {
	var div = document.createElement("div");
	div.className = "menu_box_p3";
	div.innerHTML = '<span>价格: </span><a href="javascript:;">' + txt + '</a>';
	product_menu_box.appendChild(div);
	product_title.children[0].children[3].style.display = "none";
	var menu_box_p3 = product_menu_box.querySelector(".menu_box_p3");
	menu_box_p3.onclick = function() {
		product_menu_box.removeChild(menu_box_p3);
		product_title.children[0].children[3].style.display = "";
	}
}

//排序 默认、销量 、好评、上架时间、价格

var zs_px = document.querySelector(".zs_px");
var zs_px_a = zs_px.getElementsByTagName('a');
for(var i = 1; i < zs_px_a.length; i++) {
	zs_px_a[i].flag = true;
	zs_px_a[i].onclick = function() {
		for(var i = 0; i < zs_px_a.length; i++) {
			if(this.innerHTML != zs_px_a[i].innerHTML) {
				zs_px_a[i].className = "";
				zs_px_a[i].flag = true;
			}
		}
		if(this.flag) {
			this.flag = false;
			this.className = "zson"
		} else {
			this.flag = true;
			this.className = 'zson_n';
		}

	}
	zs_px_a[0].onclick = function() {
		for(var i = 0; i < zs_px_a.length; i++) {
			zs_px_a[i].className = ""
		}
		this.className = "zson"
	}
}
//加载更多
var product_list = document.querySelector(".product_list").children[0];
var get_more = document.querySelector(".product_list").children[1];

var zsr = document.querySelector(".zsr").children[0].children[0];
var pro_list_num = 0;

//console.log(arr2[0].title)		
window.onload = function() {
	loadMore()
}
get_more.onclick = function(){
	loadMore()
}
//console.log(arr2.length)
function loadMore() {
	for(var i = 0; i < 15; i++) {
		if(pro_list_num >= arr2.length){
			return false;
		}
		var li = document.createElement("li");
		li.innerHTML = '<div class="img">' +
			'<a href="detail.html"><img src="' + arr2[pro_list_num].src + '"/></a></div>' +
			'<h5><a href="javascript:;">' + arr2[pro_list_num].title + '</a></h5>' +
			'<p>' + arr2[pro_list_num].si + '</p>' +
			'<h6><span><em>0</em>条评论</span>' +
			'<i><a href="javascript:;" title="关注" class="in"></a>' +
			'<a href="javascript:;" title="对比" class="db"></a>' +
			'<a href="javascript:;" title="加入购物车" class="inc"></a></i></h6>';
		pro_list_num++;
		if((pro_list_num) % 5 == 0) {
			li.className = "nor";
		}
		product_list.appendChild(li);

	}
	zsr.innerHTML = product_list.children.length;
}