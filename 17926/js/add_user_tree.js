var setting = {
	view: {
		dblClickExpand: false,
		showLine: true,
		selectedMulti: false,
		showIcon: true
	},
	edit: {
		enable: true,
		editNameSelectAll: false,
		showRemoveBtn: false,
		showRenameBtn: false
	},
	data: {
		simpleData: {
			enable: true,
			idKey: "id",
			pIdKey: "pId",
			rootPId: "0"
		}
	},
	check: {
		enable: true,
	},
	callback: {
		onCheck: onCheck
	}
};

var zNodes = [{
	id: 1,
	pId: 0,
	name: "人事部",
	open: true
}, {
	id: 11,
	pId: 1,
	name: "张三"
}, {
	id: 12,
	pId: 1,
	name: "黎明"
}, {
	id: 13,
	pId: 1,
	name: "小红"
}, {
	id: 2,
	pId: 0,
	name: "技术部",
	open: true
}, {
	id: 21,
	pId: 2,
	name: "小刚"
}, {
	id: 22,
	pId: 2,
	name: "小雷"
}, {
	id: 23,
	pId: 2,
	name: "小王"
}, {
	id: 3,
	pId: 0,
	name: "财务部",
	open: true
}, {
	id: 31,
	pId: 3,
	name: "小张"
}, {
	id: 32,
	pId: 3,
	name: "小刘"
}, {
	id: 33,
	pId: 3,
	name: "小郑"
}];

function onCheck(e, treeId, treeNode) {

	$(".ztree>li>span.chk").hide();

	if(treeNode.pId > 0) {

		if(treeNode.checked) {
			$(".right_list_ul").append('<li data-id=' + treeNode.id + ' class="li_item_css"><span class="li_text">' + treeNode.name + '</span><span class="item_del_icon" onclick="Delete(' + treeNode.id + ')">x</span></li>');
		} else {
			$(".right_list_ul li").each(function() {
				if($(this).data("id") == treeNode.id) {
					$(this).remove();
				}
			});
		}

	} else {

//		if(treeNode.checked) {
//			$.ajax({
//				url: "/Department/UserData",
//				type: "get",
//				data: {
//					id: treeNode.id,
//					r: Math.random()
//				},
//				async: false,
//				dataType: "json",
//				success: function(data) {
//					if(data != '') {
//						for(var i = 0; i < data.message.length; i++) {
//							$(".right_list_ul").append('<li data-id=' + data.message[i].id + ' class="li_item_css"><span class="li_text">' + data.message[i].trueName + '</span><span class="item_del_icon" onclick="Delete( ' + data.message[i].id + ')">x</span></li>');
//						}
//					}
//				}
//			});
//		}
	}
}

function Delete(id) {
	$(".right_list_ul").find('li[data-id=' + id + ']').remove();
	$('#selected_user_panel').find('#top_' + id).remove();
	var nodes = zTree.getCheckedNodes(true);
	for(var i = 0; i < nodes.length; i++) {
		if(nodes[i].id == id) {
			zTree.checkNode(nodes[i], false, false, true);
		}
	}
}
$(document).ready(function() {
	zTree = $.fn.zTree.init($("#ztree"), setting, zNodes);
	$(".ztree>li>span.chk").hide();
});