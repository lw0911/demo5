var searchconfig = false;
function Nav()
{
	if(window.navigator.userAgent.indexOf("MSIE")>=1) return 'IE';
	else if(window.navigator.userAgent.indexOf("Firefox")>=1) return 'FF';
	else return "OT";
}
function $Obj(objname)
{
	return document.getElementById(objname);
}
function ShowConfig(em,allgr)
{
	if(searchconfig) location.reload();
	for(var i=1;i<=allgr;i++)
	{
		if(i==em) $Obj('td'+i).style.display = (Nav()=='IE' ? 'block' : 'table');
		else $Obj('td'+i).style.display = 'none';
	}
	$Obj('addvar').style.display = 'none';
}

function ShowHide(objname)
{
	var obj = $Obj(objname);
	if(obj.style.display != "none") obj.style.display = "none";
	else obj.style.display = (Nav()=='IE' ? 'block' : 'table-row');
}

function backSearch()
{
	location.reload();
}
function getSearch()
{
	var searchKeywords = $Obj('keywds').value;
	var myajax = new DedeAjax($Obj('_search'));
	myajax.SendGet('sys_info.php?dopost=search&keywords='+searchKeywords)
	$Obj('_searchback').innerHTML = '<input name="searchbackBtn" type="button" value="返回" id="searchbackBtn" onclick="backSearch()"/>'
	$Obj('_mainsearch').innerHTML = '';
	searchconfig = true;
}
function resetCookieEncode()
{
  jQuery.get("sys_info.php?dopost=make_encode", function(data){
    jQuery("#edit___cfg_cookie_encode").val(data);
  });
}
