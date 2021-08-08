goTop('gotop');

var u_m_l = document.querySelector(".u_m_l");
var u_m_l_dt = u_m_l.querySelectorAll("dt");
var u_m_l_dd = u_m_l.querySelectorAll("dd");
var menu = document.querySelector(".menu");
var u_m_info = document.querySelector(".u_m_info");
var u_m_adrs = document.querySelector(".u_m_adrs");
var add_new_adr = document.getElementById("add_new_adr");
var add_adrs = document.querySelector(".add_adrs");
var adrs_btn = document.querySelector(".adrs_btn");
var adrs_n = document.querySelector(".adrs_n");
var adrs_list = document.querySelector(".adrs_list");
var adrs = document.querySelector(".adrs");
//收货地址信息
var get_people = document.getElementsByName("get_people")[0];
var get_phone = document.getElementsByName("get_phone")[0];
var get_adr_detail = document.getElementsByName("get_adr_detail")[0];
var _area = document.getElementById("area");
var cmbProvince = document.getElementById("cmbProvince");
var cmbCity = document.getElementById("cmbCity");
var cmbArea = document.getElementById("cmbArea");
//对已有地址操作
var adrs_list_btn = document.querySelectorAll(".adrs_list_btn");
for(var i = 0; i < u_m_l_dt.length; i++) {
	u_m_l_dt[i].children[0].index = i;
	u_m_l_dt[i].children[0].onclick = function() {
		menu.innerHTML = '<dt><a href="index.html">首页</a></dt>';
		for(var i = 0; i < u_m_l_dt.length; i++) {
			u_m_l_dt[i].children[0].className = "";
			u_m_l_dd[i].style.display = "none";
		}
		this.className = "on";
		u_m_l_dd[this.index].style.display = "";

		var dd = document.createElement("dd");
		dd.className = "m_one";
		dd.innerHTML = '<i class="fa fa-angle-right"></i>' + this.innerHTML;
		menu.appendChild(dd);

		var u_m_l_dd_a = u_m_l_dd[this.index].querySelectorAll("a");
		for(var i = 0; i < u_m_l_dd_a.length; i++) {
			u_m_l_dd_a[i].index = i;
			u_m_l_dd_a[i].onclick = function() {
				if(menu.children.length == 3) {
					menu.removeChild(menu.children[2])
				}
				for(var i = 0; i < u_m_l_dd_a.length; i++) {
					u_m_l_dd_a[i].className = ""
				}
				this.className = "don";
				var dd = document.createElement("dd");
				dd.className = "m_two";
				dd.innerHTML = '<i class="fa fa-angle-right"></i>' + this.innerHTML;
				menu.appendChild(dd);
				if(this.index == 0) {
					u_m_info.style.display = "block";
				} else {
					u_m_info.style.display = "none";
				}
				if(this.index == 6) {
					u_m_adrs.style.display = "block";
					if(adrs_list.children.length == 1) {
						adrs_n.style.display = "";
					}
				} else {
					u_m_adrs.style.display = "none"
				}
			}
			u_m_l_dd_a[i].className = "";
			u_m_l_dd_a[0].className = "don";

		}
		var dd = document.createElement("dd");
		dd.className = "m_two";
		dd.innerHTML = '<i class="fa fa-angle-right"></i>' + u_m_l_dd_a[0].innerHTML;
		menu.appendChild(dd);
		if(this.index == 0) {
			u_m_info.style.display = "block";
		}
	}
}
//添加地址
add_new_adr.onclick = function() {
	adrs_n.style.display = "none";
	add_adrs.style.display = "";
	adrs_list.style.display = "none";
}
//取消
adrs_btn.children[1].onclick = function() {
	add_adrs.style.display = "none";
	if(adrs_list.children.length == 0) {
		adrs_n.style.display = "";
	}

	//初始化表单
	adrs_list.style.display = "";
	get_people.value = get_adr_detail.value = get_phone.value = "";
}
//保存地址
var new_save = "";
adrs_btn.children[0].onclick = function() {
	if(adrs_list.children.length - 1 == 10) {
		confirm("最多可以创建10个地址");
		add_adrs.style.display = "none";
		adrs_list.style.display = "";
		get_people.value = get_adr_detail.value = get_phone.value = "";
		return false;
	}
	if(new_save != "") {
		var adrs_list_info = adrs_list.querySelectorAll(".adrs_list_info");
		adrs_list_info[new_save].innerHTML = '<span>' + get_people.value + '</span><em>' + ' (' + get_phone.value + ')' + '</em><strong>' + ' 地址:' + _area.value + ' ' + cmbProvince.value + ' ' + cmbCity.value + ' ' + cmbArea.value + ' ' + get_adr_detail.value + '</strong>';
		new_save = "";
	} else {
		var li = document.createElement("li");
		li.innerHTML = '<div class="adrs_list_info"><span>' + get_people.value + '</span><em>' + ' (' + get_phone.value + ')' + '</em><strong>' + ' 地址:' + _area.value + ' ' + cmbProvince.value + ' ' + cmbCity.value + ' ' + cmbArea.value + ' ' + get_adr_detail.value + '</strong></div>' +
			'<div class="adrs_list_btn"><a href="javascript:;" style="color:#ff5454;border-color:#ff5454">设为常用地址</a><a href="javascript:;">编辑</a><a href="javascript:;">删除</a></div>'
		adrs_list.appendChild(li);
	}
	var pho = /^[0-9]{11}$/;
	if(get_phone.value != "" && pho.test(get_phone.value) && get_people.value != "") {
		
		//
		portAdrs();
		//初始化表单
		add_adrs.style.display = "none";
		adrs_list.style.display = "";
		get_people.value = get_adr_detail.value = get_phone.value = "";
		//修改数据显示
		adrs.innerHTML = adrs_list.children.length - 1;
	}

}

function saved() {

}

//对已有地址操作
function portAdrs() {
	var adrs_list_btn = adrs_list.querySelectorAll(".adrs_list_btn");
	var adrs_list_info = adrs_list.querySelectorAll(".adrs_list_info");
	for(var i = 0; i < adrs_list_btn.length; i++) {
		adrs_list_btn[i].children[1].index = adrs_list_btn[i].children[2].index = i;
		adrs_list_btn[i].children[2].onclick = function() {
			var flag = confirm("是否删除");
			if(flag) {
				adrs_list.removeChild(adrs_list.children[this.index]);
			}
			//修改数据显示
			adrs.innerHTML = adrs_list.children.length - 1;
		}
		adrs_list_btn[i].children[1].onclick = function() {
			adrs_n.style.display = "none";
			add_adrs.style.display = "";
			adrs_list.style.display = "none";
			var info = adrs_list_info[this.index].innerText.split(" ");
			get_people.value = info[0];
			_area.value = info[2].split(":")[1];
			cmbProvince.value = info[3];
			cmbCity.value = info[4];
			cmbArea.value = info[5];
			get_adr_detail.value = info[6];
			get_phone.value = info[1].match(/\d+/);;
			new_save = this.index;

			//			console.log(info)

		}
	}
}
//
portAdrs();

//添加地址
addressInit('area', 'cmbProvince', 'cmbCity', 'cmbArea', '西北地区', '北京', '市辖区', '东城区');