// JavaScript Document
$(function () {
  $("#recordtable > tbody > tr:odd").addClass("odd-tr");  //表格的隔行变色
});

// tab内容切换
function tab(num){		
	for(var id = 0;id<=2;id++)
	{
		if(id==num)
		{
			document.getElementById("tab_hd"+id).style.display="block";
			document.getElementById("tab"+id).className="bg_block";
		}
		else
		{
			document.getElementById("tab_hd"+id).style.display="none";
			document.getElementById("tab"+id).className="bg_none";
		}
	}
}
