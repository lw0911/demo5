var shop_pro = document.querySelectorAll(".shop_pro");
var allcheck = document.getElementById("allcheck");
var checkall = document.getElementById("checkall");

var shop_car_oder = document.querySelector(".shop_car_oder");
var oder_btn = document.querySelector(".oder_btn");
var all_num = oder_btn.querySelector(".buy_txt").getElementsByTagName("em")[0];
var all_pri = oder_btn.querySelector(".buy_txt").getElementsByTagName("strong")[0];
for(var i = 0;i < shop_pro.length;i++){
	
	shop_pro[i].querySelector(".chk").children[0].index = 
	shop_pro[i].querySelector(".pro_n").children[0].index = 
	shop_pro[i].querySelector(".pro_del").children[0].index = 
	shop_pro[i].querySelector(".pro_num").children[2].index =
	shop_pro[i].querySelector(".pro_num").children[0].index = i;
	
	
	shop_pro[i].querySelector(".pro_num").children[0].onclick = function(){
		if(shop_pro[this.index].querySelector(".pro_num").children[1].value == 1){
			return false
		}
		var pri = parseFloat(shop_pro[this.index].querySelector(".pro_pri").children[0].innerHTML.substring(1));
		var num = shop_pro[this.index].querySelector(".pro_num").children[1].value*1;
		shop_pro[this.index].querySelector(".pro_num").children[1].value = num - 1;
		var al = (num-1) *pri;
		shop_pro[this.index].querySelector(".pro_a").children[0].innerHTML = "￥"+al.toFixed(2);
		getAll();
	}
	
	shop_pro[i].querySelector(".pro_num").children[2].onclick = function(){
		var pri = parseFloat(shop_pro[this.index].querySelector(".pro_pri").children[0].innerHTML.substring(1));
		var num = shop_pro[this.index].querySelector(".pro_num").children[1].value*1;
		shop_pro[this.index].querySelector(".pro_num").children[1].value = num + 1;
		var al = (num+1) *pri;
		shop_pro[this.index].querySelector(".pro_a").children[0].innerHTML = "￥"+al.toFixed(2);
		getAll();
	}
	shop_pro[i].querySelector(".pro_num").children[1].onblur = function(){
		var reg = /^\d+$/;
		if(reg.test(this.value)){
			getAll()
		}else{
			this.value = 1;
			alert("输入错误");
		}
	}
	shop_pro[i].querySelector(".pro_del").children[0].onclick = function(){
		var flag = confirm("确认删除？");
		if(flag){
			shop_car_oder.removeChild(shop_pro[this.index])
		}
	}
	//单选
	shop_pro[i].querySelector(".chk").children[0].onclick = 
	shop_pro[i].querySelector(".pro_n").children[0].onclick = function(){
		if(!this.checked){
			shop_pro[this.index].querySelector(".chk").children[0].checked = 
			shop_pro[this.index].querySelector(".pro_n").children[0].checked = ""
		}else{
			shop_pro[this.index].querySelector(".chk").children[0].checked = 
			shop_pro[this.index].querySelector(".pro_n").children[0].checked = "true"
		}
		getAll()
	}
	
	
	
}
//全选
allcheck.onclick = checkall.onclick= function(){
	if(this.checked){
		allcheck.checked = checkall.checked = true;
		for(var i = 0;i < shop_pro.length;i++){
			var ch = shop_pro[i].getElementsByTagName("input");
			for(var j = 0;j < ch.length;j++){
				ch[j].checked = true
			}
		}
	}else{
		allcheck.checked = checkall.checked = false;
		for(var i = 0;i < shop_pro.length;i++){
			var ch = shop_pro[i].getElementsByTagName("input");
			for(var j = 0;j < ch.length;j++){
				ch[j].checked = false
			}
		}
	}
	getAll()
	
}


getAll()
function getAll(){
	var alnum = 0;
	var alpri = 0;
	for(var i = 0;i < shop_pro.length;i++){
		if(shop_pro[i].querySelector(".pro_n").children[0].checked){
			var num = shop_pro[i].querySelector(".pro_num").children[1].value*1;
			alnum = alnum+num;
			alpri = alpri +shop_pro[i].querySelector(".pro_a").children[0].innerHTML.substring(1)*1
		}
	}
	all_num.innerHTML = alnum;
	all_pri.innerHTML = "￥"+alpri.toFixed(2);
}



















