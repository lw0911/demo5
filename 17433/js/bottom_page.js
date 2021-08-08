/**
 * Created by Administrator on 2015/6/28.
 */
//页面底部浮动框
document.writeln("<div class=\"page_f_bottom\"><div class='bg'><div class=\"btns\"><a class=\"btn_jgzx\" title=\"价格咨询\" href=\"javascript:void(0);\" onclick=\"swt('价格咨询')\"></a><a class=\"btn_sszx\" title=\"手术咨询\" href=\"javascript:void(0);\" onclick=\"swt('手术咨询')\"></a><a class=\"btn_24zx\" title=\"24小时咨询热线\" href=\"javascript:void(0);\" onclick=\"swt('24小时咨询热线')\"></a><a class=\"btn_dyth\" title=\"当月特惠活动\" href=\"javascript:void(0);\"></a></div></div></div>");
//页面右边浮动框
//document.writeln('<div class="swt-right-index" id="swt-right-index"><ul><li class="swt-right-index1" style="right: 0px;"><a href="javascript:swt(\'咨询\');" class=""></a></li><li class="swt-right-index2" style="right: 0px;"><a href="javascript:swt(\'回电\');" class=""></a></li><li class="swt-right-index3" style="right: 0px;"><a href="javascript:swt(\'QQ\');" class=""></a></li><li class="swt-right-index4" style="right: 0px;"><a href="javascript:swt(\'专车\');" class=""></a></li><li class="swt-right-index5" style="right: 0px;"><a href="javascript:swt(\'地址\');" class=""></a></li><li class="swt-right-index6" style="right: 0px;"><a href="javascript:scroll(0,0);" class=""></a></li></ul></div>');
document.writeln('<div class="swt-right" id="swt-right"><ul><li class="swt-right1"><a href="javascript:swt(\'优惠\');"></a><div class="swt-right-gg"><a href="javascript:swt(\'优惠\');" target="_blank"><img src="/images/float_yh_o.jpg"></a></div></li><li class="swt-right2"><a href="javascript:swt(\'资讯\');"></a></li><li class="swt-right3"><a href="javascript:swt(\'回电\');"></a></li><li class="swt-right4"><a href="javascript:swt(\'QQ\');"></a></li><li class="swt-right5"><a href="javascript:swt(\'地址\');"></a></li><li class="swt-right6"><a href="javascript:scroll(0,0);"></a></li></ul></div>')
//页面左边浮动框
if(
	window.location.href.match("/pifu/")||
	window.location.href.match("/zhuanti/sanbuquban2015.htm")||
	window.location.href.match("/zhuanti/huangheban.htm")||
	window.location.href.match("/zhuanti/jiguangquban.htm")||
	window.location.href.match("/zhuanti/6squanxiaoquban.htm")
){
	document.writeln('<div class="swt-left-gg"><a href="javascript:void(0);" target="_blank"><img src="/2015/swt-left-gg-qb.jpg"/></a></div>');
}
else{
	document.writeln('<div class="swt-left" id="swt-left"><ul><li class="swt-left1"><a class="link" href="/" target="_blank"></a></li><li class="swt-left2" id="swt-left2"><a class="link" href="javascript:swt(\'项目导航\')"></a><div class="swt-left-gg"><h5>项目导航</h5><ul><li><a href="/a/jiatilongxiong/" target="_blank">假体丰胸</a></li><li><a href="/a/shuangyanpi/" target="_blank">双眼皮</a></li><li><a href="/a/kaiyanjiao/" target="_blank">开眼角</a></li><li><a href="/a/jiatilongbi/" target="_blank">假体隆鼻</a></li><li><a href="/a/zhushelongbi/" target="_blank">注射隆鼻</a></li><li><a href="/a/zhusheshoulian/" target="_blank">瘦脸针</a></li><li><a href="javascript:void(0);" target="_blank">美白针</a></li><li><a href="/a/qubanquzhi/" target="_blank">祛斑</a></li><li><a href="/a/qudouquyin/" target="_blank">祛痘</a></li><li><a href="/a/guangzituomao/" target="_blank">脱毛</a></li><li><a href="/a/xizhijianfei/" target="_blank">吸脂</a></li><li><a href="/a/fengtaiyangxue/" target="_blank">丰太阳穴</a></li><li><a href="/a/fengpingguoji/" target="_blank">丰苹果肌</a></li><li><a href="/a/fengxiaba/" target="_blank">丰下巴</a></li><li><a href="/a/fengchunshu/" target="_blank">丰唇</a></li><li><a href="javascript:void(0);" target="_blank">面部提升</a></li><li><a href="/a/fengchunshu/" target="_blank">除鼻唇沟</a></li><li><a href="/a/yuweiwen/" target="_blank">除鱼尾纹</a></li><li><a href="/a/taitouwen/" target="_blank">除抬头纹</a></li><li><a href="/a/meichuanwen/" target="_blank">除川字纹</a></li><li><a href="/a/jingwen/" target="_blank">除颈纹</a></li><li><a href="/a/meizaizao/" target="_blank">纹眉</a></li><li><a href="javascript:void(0);" target="_blank">植发</a></li><li><a href="/a/simizhengxing/" target="_blank">私密整形</a></li><li><a href="/a/bulianglongxiongxiufu/" target="_blank">隆胸修复</a></li></ul></div></li><li class="swt-left3" id="swt-left3"><a class="link" href="javascript:swt()"></a><div class="swt-left-gg"><h5>热门专题</h5><ul><li><a href="/a/xiongbuzhengxing/" target="_blank">魔力沟丰胸</a></li><li><a href="/a/xiongbuzhengxing/" target="_blank">活细胞丰胸</a></li><li><a href="javascript:void(0);" onclick="swt();" target="_blank">灵韵精雕</a></li><li><a href="javascript:void(0);" onclick="swt();" target="_blank">芭比隆鼻</a></li><li><a href="javascript:void(0);" onclick="swt();" target="_blank">6s全效祛斑</a></li><li><a href="javascript:void(0);" onclick="swt();" target="_blank">9天缩毛孔</a></li><li><a href="/a/guangzituomao/" target="_blank">光子脱毛</a></li><li><a href="/a/qudouquyin/" target="_blank">三步祛痘</a></li><li><a href="/a/shuiguangzhushe/" target="_blank">水光注射</a></li><li><a href="/a/PDOdanbaixian/" target="_blank">蛋白线提拉</a></li><li><a href="/a/chaoshengdao/" target="_blank">超声刀</a></li><li><a href="javascript:void(0);" target="_blank">半永久定妆</a></li><li><a href="javascript:void(0);" onclick="swt();" target="_blank">肉毒素瘦脸</a></li><li><a href="javascript:void(0);" onclick="swt();" target="_blank">活细胞焕肤</a></li></ul></div></li><li class="swt-left4" id="swt-left4"><a class="link" href="javascript:void(0);" target="_blank"></a></li><li class="swt-left5"><a class="link" href="/"></a></li></ul></div>');
	
}
document.writeln('<link rel="stylesheet" type="text/css" href="images/page_float.css">');
//document.writeln('<style>.page_f_right{position: fixed;right: 0;top: 200px;}.page_f_right ul li a{display: block;width: 59px;height: 59px;margin-bottom: 1px;}.page_f_right ul .f_right_1 a{background: url("/2015/bg_right_page.png") no-repeat;}.page_f_right ul .f_right_2 a{background: url("/2015/bg_right_page.png") no-repeat 0 -59px;}.page_f_right ul .f_right_3 a{background: url("/2015/bg_right_page.png") no-repeat 0 -119px;}.page_f_right ul .f_right_4 a{background: url("/2015/bg_right_page.png") no-repeat 0 -179px;}.page_f_right ul .f_right_5 a{background: url("/2015/bg_right_page.png") no-repeat 0 -239px;}.page_f_right ul .f_right_6 a{background: url("/2015/bg_right_page.png") no-repeat 0 -299px;}</style>');



$(function(){
    if (document.getElementById('swt-right-index')) {
        $("#swt-right-index ul li").hover(function() {
            $(this).children("a").addClass("swt-hover");
            $(this).stop().animate({
                    right: "100px"
                },
                200);
        },
        function() {
            $(this).animate({
                    right: "0px"
                },
                200,
                function() {
                    $(this).children("a").stop().removeClass("swt-hover");
                });
        });
    }
	if (document.getElementById('swt-right')) {
		$("#swt-right ul li:gt(0)").hover(function() {
			$(this).children("a").addClass("swt-hover");
			$(this).stop().animate({right: "0px"},200);
		},
		function(){
			$(this).animate({right: "-105px"},200,function() {
				$(this).children("a").stop().removeClass("swt-hover");
			});
		});
		$("#swt-right ul li:eq(0)").hover(function () {
			$(this).children(".swt-right-gg").stop().animate({height:"365px",padding:"5px"},200);
		},function() {
			$(this).children(".swt-right-gg").stop().animate({height:"0px",padding:"0px"},200);
		});
	}
	if(document.getElementById('swt-left')){
		$("#swt-left4").hover(function(){
			$(this).children("a").addClass("swt-hover");
			$(this).stop().animate({left: "0px"},200);
		},function(){
			$(this).animate({left: "-105px"},200,function() {
				$(this).children("a").stop().removeClass("swt-hover");
			});
		});
		$("#swt-left2").hover(function(){
			$(this).children(".swt-left-gg").stop().animate({top:(-5-($(this).index()*61))+"px",height:"304px",padding:"5px"},200);
		},function(){
			$(this).children(".swt-left-gg").stop().animate({top:(-5-($(this).index()*61))+"px",height:"0px",padding:"0px"},200);
		});
		$("#swt-left3").hover(function(){
			$(this).children(".swt-left-gg").stop().animate({top:(-5-($(this).index()*61))+"px",height:"304px",padding:"5px"},200);
		},function(){
			$(this).children(".swt-left-gg").stop().animate({top:(-5-($(this).index()*61))+"px",height:"0px",padding:"0px"},200);
		});
		
	}
   
});

//导航条浮动
if($("#scroll_navs").length>0 || $("#scroll_nav").length>0 || $("#scrollNav").length>0 || $("#scroll_navvs").length>0 || window.location.href.match('allstc')){}
else document.writeln('<script type="text/javascript" src="/2015/js/nav_all.js" ></script>');





//左侧招聘
/*document.writeln('<div id="floatzp" style="width:133px; height:82px; overflow: hidden; left: 0px; top: 170px; z-index: 2147483646; position: fixed ! important;">');
document.writeln('  <img src="http://www.csaist.cn/pimg/float/pin_left.gif" border="0" usemap="#Mapfzp">');
document.writeln('  <map name="Mapfzp" id="Mapfzp">');
document.writeln('   <area shape="rect" coords="110,0,140,20" href="javascript:void(0);" onclick="closezp();"  />');
document.writeln('   <area shape="rect" coords="0,0,135,85" href="/zhaopin/" target="_blank" />');
document.writeln('  </map>');
document.writeln('</div>');

function closezp()
{
   document.getElementById("floatzp").style.display='none';
}*/