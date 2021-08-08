var price=0;
var limit=0;
var begin=1;
var end=0;
var areaId=0;
var ticketType=0;
var left1=0;

//当前服务器日期
var currentDate;
var tickInfo;
var dtNow;

(function(){
	dtNow = getServerDate();
	//dtNow = ''+dtNow.format('yyyy-MM-dd hh:mm:ss');
	var dtNow = dtNow.getFullYear()+'-'+fillZero2(dtNow.getMonth()+1)+'-'+fillZero2(dtNow.getDate())+' '+fillZero2(dtNow.getHours())+':'+fillZero2(dtNow.getMinutes())+':'+fillZero2(dtNow.getSeconds());
	//console.log(dtNow);
	if(dtNow >= '2016-12-14 23:59:59') {
		end=1;
	}
	//LimitInfo();

	bindAreas();
})();

///////////////////////////////////////////////////////
function fillZero2(num) {
	if(num < 10) {
		return '0'+num;
	}
	return ''+num;
}



/**
 * 通用报错函数
 */
function Fail(errInfo) {
	if('undefined' != typeof(errInfo) && null != errInfo && "" != errInfo) {
		alert(errInfo);
	} else {
		alert('非常抱歉，系统繁忙，请稍后再试！');
	}	
	return ;
}
function getServerDate() {
	/*if(typeof(currentDate) !="undefined"&& currentDate){//对于日期来说，无需每次都请求准确的时间
		return;
	}*/
	var httpReQuest = $.ajax({
                             type: "HEAD",
                             url: "http://x5.qq.com",
                             async:false
                   });
	if(typeof(httpReQuest) =="undefined"|| !httpReQuest.getResponseHeader("Date"))
	{
		currentDate = new Date();
	}
	else
	{
		currentDate =new Date(httpReQuest.getResponseHeader("Date"));
	}
	return currentDate;
}

function getDate() {	
	if(typeof(currentDate) =="undefined"|| !currentDate){
		currentDate = new Date();
	}
	//var dateStr=''+currentDate.format('yyyy-MM-dd');
	return currentDate;
}

function bindAreas() {
	var tempArrOpt = [];
	//显示停机
	var arrOpt = X5ServerSelect.STD_DATA;
	if(arrOpt && arrOpt.length > 0){
		for(var i = 0; i < arrOpt.length; i++)
		{

			for(var j = 0; j < arrOpt[i].opt_data_array.length; j++)
			{
				if(arrOpt[i].opt_data_array[j].display * 1 === 0)
				{
					continue;
				}
				if(arrOpt[i].opt_data_array[j].status * 1 === 0 && arrOpt[i].opt_data_array[j].t.indexOf('(停机)') < 0 )
				{
					arrOpt[i].opt_data_array[j].t += "(停机)";
				}
				var tempObj = {"t":arrOpt[i].opt_data_array[j].t, "v":arrOpt[i].opt_data_array[j].v};
				tempArrOpt.push(tempObj);
			}
		}
	}
	for(var j = 0; j < tempArrOpt.length; j++)
	{
		$("#userarea1").append("<option value='"+tempArrOpt[j].v+"'>"+tempArrOpt[j].t+"</option>");
	}
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
function LimitInfo(){
	var sUrl="http://apps.game.qq.com/cgi-bin/daoju/v3/api/hs/plug_ticket/tuan_goods_limit.cgi?_app_id=1004&_output_fmt=2&_biz_code=mgc&_act_id=28&propid="+ticketType+Math.random();
	FloadJS(sUrl, LimitInfoSucc, Fail);

}

function LimitInfoSucc(){
	if(tuan_goods_limit.result!=0)
	{
		alert('系统繁忙，请稍候再试！');
		return;
	}
	//left1=tuan_goods_limit.data.iGoodsLimitNum-tuan_goods_limit.data.freezeNum-tuan_goods_limit.data.usedNum;


	//var _now = getServerDate();
	//var _sNow = _now.getFullYear()+'-'+fillZero(_now.getMonth()+1)+'-'+fillZero(_now.getDate());
	//var _leftNum = 0;
	//var _costNum = tuan_goods_limit.data.freezeNum + tuan_goods_limit.data.usedNum;

	$('#_left').html("今日含QQ炫舞游戏礼包的门票剩余："+tuan_goods_limit.data.goodsLeftNum);

	/*if(160000 <= tuan_goods_limit.data.usedNum) {
		$('#_left').html("含QQ炫舞游戏礼包的门票已售罄");
	} else {
		$('#_left').html("含QQ炫舞游戏礼包的门票，剩余："+parseInt(160000-tuan_goods_limit.data.freezeNum-tuan_goods_limit.data.usedNum));
	}*/

	//if (left1<=0) {
	//	limit=1;
	//}
}
function BuyTicket(){
	//if(!confirm("每天10：30准点开票。等你呦~\n30号，限量3万张\n1号，限量3万张\n2号，限量3万张\n3号，限量2万张\n4号，限量2万张\n5号，限量2万张\n6号，限量1万张")){
	//	return false;
	//}

	//var _now = getServerDate();
	//var _sNow = fillZero(_now.getHours())+':'+fillZero(_now.getMinutes());
	//console.log(_sNow);
	
	//if(_sNow < '10:30') {
	//	alert("每天10：30准时开票。等你呦~！");
	//	return;
	//}
	if(ticketType <= 0) {
		alert('请选择您要购买的门票！');
		return;
	}

	if(isNaN($('#TicketNum').val()))
	{
		alert('输入票数有误！');
		return;
	}
	if($('#TicketNum').val()>100)
	{
		alert('一次性最多购票100张！');
		return;
	}
	if(begin==0)
	{
		alert('购票未开始！');
		return;
	}
	if(end==1)
	{
		alert('购票已结束！');
		return;
	}
	if(limit==1)
	{
		alert('门票已售完！');
		return;
	}
	if($("#TicketPresent").val()==''||isNaN($("#TicketPresent").val()))
	{
		alert('请正确地填写您或者您要赠送玩家的QQ号！');
		return;
	}
	areaId=$("#userarea1").val();
	if(areaId==0||isNaN($("#userarea1").val()))
	{
		alert('请选择您要激活门票的大区！（该大区为激活门票的大区！）');
		return;
	}

	showDialog.hide();

	var sUrl = "http://apps.game.qq.com/cgi-bin/daoju/v3/hs/i_buy.cgi?_app_id=1004&_plug_id=9200&_biz_code=mgc&_act_id=28&propid="+ticketType+"&buynum="+$('#TicketNum').val()+"&areaid="+areaId+"&r="+Math.random()+"&roleid="+LoginManager.getUserUin()+"&getUid="+$('#TicketPresent').val()+"&rolename=";
	console.log(sUrl);
	FloadJS(sUrl, BuyTicketSucc, Fail);
}

function BuyTicketSucc() {	
	if ('undefined' != typeof(i_buy) && (null != i_buy) )
	{
		if(i_buy.result!=0)
		{
			if(i_buy.result==-6360&&typeof(i_buy.serial) !="undefined")
			{
				if(confirm("您当前有一笔未支付订单，金额是"+(i_buy.price/10)+"Q点，是否支付该订单？")) {
					price=i_buy.price;
					var sUrl="http://apps.game.qq.com/daoju/v3/api/hx/pay/cpay/mall/pay.php?eventid="+i_buy.pay_eventid+"&biz=mgc&channel=mall&serial="+i_buy.serial+"&amount="+price+"&r="+Math.random();
					FloadJS(sUrl, OrderSucc, Fail);
				}
			}
			else if(i_buy.result==-6361)
			{
				alert('票已售完，如果您有尚未支付的订单，请前往<a href="http://www.htmlsucai.com" target="_blank">支付</a>吧！');
			} else if(i_buy.result==-6107) {//未创建角色
			  if(areaId == 888) {
				alert("抱歉，赠送QQ尚未在网页梦工厂创建角色！");
				 //var ss = '还差一步：请在 <a href="http://www.htmlsucai.com">http://mgc.qq.com</a> 页面登录QQ，再回来继续购票哦~';
			  } else {
	            alert("抱歉，赠送QQ尚未在所选大区创建游戏角色！");
				//var ss = "抱歉，当前大区尚未创建角色，请登录游戏客户端创建角色！"
			  }
			  //var ss = '还差一步：请在 <a href="http://www.htmlsucai.com">http://mgc.qq.com</a> 页面登录QQ，再回来继续购票哦~';
			  //newAlert(ss);
            } else {
				alert(i_buy.msg);
				return;
			}
		}
		else{
			price=i_buy.price;
			var sUrl="http://apps.game.qq.com/daoju/v3/api/hx/pay/cpay/mall/pay.php?eventid="+i_buy.eventid+"&biz=mgc&channel=mall&serial="+i_buy.serial+"&amount="+price+"&r="+Math.random();
			FloadJS(sUrl, OrderSucc, Fail);
		}
	}else{
		Fail();
	}
}
function OrderSucc(){
	if(opay.ret==1002)
	{
		alert('登录失效，请于页面注销登录后重新登录页面！');
		return;
	}
	else if(opay.ret==0)
	{
			var sUrl = opay.data.url + "";
             sUrl = sUrl.replace(/&amp;/g, '&');
             fusion2.dialog.buy ({ 
                // 可选。仅当接入“道具寄售”模式的应用使用游戏币快捷支付功能时，必须传该参数。取值固定为“true”。        
                // 其他支付场景不需要传入该参数。 
                disturb : true, 				
                // 必须。 表示购买物品的url参数，url_params是调用Q点直购接口v3/pay/buy_goods或道具寄售接口v3/pay/exchange_goods接口返回的参数。             
                param : sUrl, 
                // 可选。表示是否使用沙箱测试环境。应用发布前，请务必注释掉该行。 
              //  sandbox值为布尔型。true：使用； false或不指定：不使用。 
                sandbox : false, 
                //可选。前台使用的上下文变量，用于回调时识别来源。 
                context : "context", 
                //可选。用户购买成功时的回调方法，其中opt.context为上述context参数。如果用户购买成功，则立即回调JS中的onSuccess，当用户关闭对话框时再回调onClose。 
                onSuccess : function (opt) { 
					MGC.popFormsShow('gotoWindow');
					//alert('恭喜您，购买成功，请前往<a href="http://www.htmlsucai.com" target="_blank">抽奖</a>吧！');
					//clearCookie();
					//LoginedUserInfo();
						
				}, 
                //可选。用户取消购买时的回调方法，其中opt.context为上述context参数。如果用户购买失败或没有购买，关闭对话框时将先回调onCancel再回调onClose。  
                onCancel : function (opt) { },     
                //可选。如果在实现Q点直购功能时调用了发货通知接口，即需要实现本方法，其中opt.context为上述context参数。如果发货超时，则立即回调onSend。             
                onSend : function(opt) { }, 
                //可选。对话框关闭时的回调方法，主要用于对话框关闭后进行UI方面的调整，onSuccess和onCancel则用于应用逻辑的处理，避免过度耦合。 
                onClose : function (opt) { } 
            }); 
	}
	else{
		alert(opay.msg);
		return;
	}
	console.log(opay);
}
EAS.need('mall', function () {
	EAS.mall({
		'ec': "", /*动作类型 自定义 PV不填*/

		'biz': 'mgc', /*业务名称，传互娱业务代码，不知道时传daoju*/
		'appid': 1004, /*渠道ID，游戏中心固定2010，微商店固定2002*/
		'channel': "0", /*传pf*/
		'plugid':9200 , /*场景ID，固定*/
		'actid': 28, /*平台活动ID，固定*/

		'propid': 0, /*道具礼包id*/
		'catid': 0, /*道具分类*/

		'price': 0, /*道具价格*/
		'quantity': 0, /*购买数量*/

		'openid': "", /*openid*/
		'area': "2", /*大区ID*/
		'plat': "9", /*平台ID 对应plat（-1：未知 0：ios 1：andriod 9:pc)*/
		'partition': "", /*小区ID*/
		'roleid': "", /*角色ID*/

		'ext': ""                    /*扩展信息*/
	});
});

///////////////////////////////////////////////////////////////////////////////////////
/*  |xGv00|491e4c8cf5eeda0f672d65d3e6320d47 */