goTop('gotop');


var nav_menu = getclass(document,'menu')[0];
var nav_list = getclass(nav_menu,'list');
var nav_menu_detail = getclass(document, 'menu_detail');
for(var i = 0; i < nav_list.length; i++) {
	nav_list[i].index = i;
	nav_list[i].onmouseenter = function() {
		for(var i = 0; i < nav_list.length; i++) {
			nav_list[i].className = "list";
			nav_menu_detail[i].style.borderWidth = '0px';
			var _index = i;
			move(nav_menu_detail[_index], {
				"height": 0
			}, function() {
				nav_menu_detail[_index].style.display = "block";
			})
		}
		this.className = "list active";
		var index = this.index;
		nav_menu_detail[index].style.borderWidth = '2px';
		move(nav_menu_detail[index], {
			"height": 400
		}, function() {
			nav_menu_detail[index].style.display = "block";
		})
	}

}
nav_menu.getElementsByTagName('li')[0].onmouseenter = nav_menu.getElementsByTagName('div')[0].onmouseenter=
$("nav").onmouseleave = function() {
	for(var i = 0; i < nav_list.length; i++) {
		nav_list[i].className = "list";
		nav_menu_detail[i].style.borderWidth = '0px';
		var index = i;
		move(nav_menu_detail[index], {
			"height": 0
		}, function() {
			nav_menu_detail[index].style.display = "block";
		})
	}
}