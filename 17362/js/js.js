// JavaScript Document
$(function(){
	//汇率下拉
	$(".huilv").hover(function(){
		$(this).find(".huilvXiala").stop(true,true).slideDown();
		},function(){
			$(this).find(".huilvXiala").stop(true,true).slideUp();
			})
			
	//左侧漂浮 返回顶部
	$(".backTop").click(function(){
		$("html,body").animate({scrollTop:0},500);
		})
	//leftPiao
	$(".leftPiao li").hover(function(){
		$(this).find(".leftpiaoText1").stop(true,true).fadeIn();
		$(this).find(".huilvXiala").stop(true,true).fadeIn();
		$(this).find(".ewm").stop(true,true).fadeIn();
		},function(){
			$(this).find(".leftpiaoText1").stop(true,true).hide();
			$(this).find(".huilvXiala").stop(true,true).hide();
			$(this).find(".ewm").stop(true,true).hide();
			})
	//计算器点击显示
	$(".jsq").click(function(){
		$(".jisuanqi").fadeIn();
		})
	$(".close").click(function(){
		$(".jisuanqi").fadeOut();
		})
	//无包裹清单
	$(".qingdan tr:even").addClass("tdBg");	
	//userNav
	$(".userNav dd:eq(1) a").click(function(){
		$(this).attr("href","javascript:;");
		alert("功能暂未开放，敬请期待！")
		})
	//$youji	
	$(".youjiTable:first").show();
	$(".youji a").click(function(){
		$(this).addClass("youjiCur").siblings("a").removeClass("youjiCur");
		var you=$(this).index();
		$(".youjiTable").eq(you).fadeIn().siblings(".youjiTable").hide();
		})
	})
	
	
	//加入收藏 设为首页	
function AddFavorite(sURL, sTitle)
{
    try
    {
        window.external.addFavorite(sURL, sTitle);
    }
    catch (e)
    {
        try
        {
            window.sidebar.addPanel(sTitle, sURL, "");
        }
        catch (e)
        {
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}
//设为首页 <a onclick="SetHome(this,window.location)">设为首页</a>
function SetHome(obj,vrl){
        try{
                obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl);
        }
        catch(e){
                if(window.netscape) {
                        try {
                                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                        }
                        catch (e) {
                                alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
                        }
                        var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
                        prefs.setCharPref('browser.startup.homepage',vrl);
                 }
        }
}