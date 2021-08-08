var setting = {
	view: {
		showLine: false,
		addHoverDom: addHoverDom,
		removeHoverDom: removeHoverDom,
		selectedMulti: false
	},
	edit: {
		enable: true,
		editNameSelectAll: false,
		showRemoveBtn: false,
		showRenameBtn: false
	},
	data: {
		simpleData: {
			enable: true
		}
	},
	callback: {

	}
};

var zNodes = [
				{id: 1,pId: 0,name: "父节点 1",open: true},
				{id: 11,pId: 1,name: "叶子节点 1-1"},
				{id: 12,pId: 1,name: "叶子节点 1-2"}, 
				{id: 13,pId: 1,name: "叶子节点 1-3"}, 
				{id: 2,pId: 0,name: "父节点 2",open: true}, 
				{id: 21,pId: 2,name: "叶子节点 2-1"},
				{id: 22,pId: 2,name: "叶子节点 2-2"}, 
				{id: 23,pId: 2,name: "叶子节点 2-3"}, 
				{id: 3,pId: 0,name: "父节点 3",open: true}, 
				{id: 31,pId: 3,name: "叶子节点 3-1"},
				{id: 32,pId: 3,name: "叶子节点 3-2"},
				{id: 33,pId: 3,name: "叶子节点 3-3"}
			];
function addHoverDom(treeId, treeNode) {
	var sObj = $("#" + treeNode.tId + "_span");
	if(treeNode.editNameFlag || $("#addBtn_" + treeNode.tId).length > 0) return;
	if(treeNode.pId == null) {
		var addStr = "<div class='jg_btn_group' style='position:absolute;right:0px;top:0px;'>" +
			"<span id='add_node' style='line-height:35px;padding:0 6px;float:left;' class='fa fa-plus' id='addBtn_" + treeNode.tId + "' title='添加' onfocus='this.blur();' use='添加部门'></span>" +
			"</div>";
		sObj.after(addStr);
	} else {
		var addStr = "<div class='jg_btn_group'  style='position:absolute;right:0px;top:0px;'>" +
			"<span id='add_node' style='line-height:35px;padding:0 6px;float:left;' class='fa fa-plus' id='addBtn_" + treeNode.tId + "' use='添加部门' title='添加' onfocus='this.blur();'></span>" +
			"<span style='line-height:35px;padding:0 6px;float:left;' class='fa fa-pencil' id='EditDepart' use='修改部门'></span>" +
			"<span style='line-height:35px;padding:0 6px;float:left;'  class='fa fa-trash-o' id='DelDepart' use='删除部门'></span>" +
			"</div>";
		sObj.after(addStr);
	}
};
function removeHoverDom(treeId, treeNode) {
	$('.jg_btn_group').unbind().remove();
};
$(document).ready(function() {
	$.fn.zTree.init($("#zuzhi_jiagou"), setting, zNodes);
});