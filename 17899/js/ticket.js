var price=0;
var limit=0;
var begin=1;
var end=0;
var areaId=0;
var ticketType=0;
var left1=0;

//��ǰ����������
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
 * ͨ�ñ�����
 */
function Fail(errInfo) {
	if('undefined' != typeof(errInfo) && null != errInfo && "" != errInfo) {
		alert(errInfo);
	} else {
		alert('�ǳ���Ǹ��ϵͳ��æ�����Ժ����ԣ�');
	}	
	return ;
}
function getServerDate() {
	/*if(typeof(currentDate) !="undefined"&& currentDate){//����������˵������ÿ�ζ�����׼ȷ��ʱ��
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
	//��ʾͣ��
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
				if(arrOpt[i].opt_data_array[j].status * 1 === 0 && arrOpt[i].opt_data_array[j].t.indexOf('(ͣ��)') < 0 )
				{
					arrOpt[i].opt_data_array[j].t += "(ͣ��)";
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
		alert('ϵͳ��æ�����Ժ����ԣ�');
		return;
	}
	//left1=tuan_goods_limit.data.iGoodsLimitNum-tuan_goods_limit.data.freezeNum-tuan_goods_limit.data.usedNum;


	//var _now = getServerDate();
	//var _sNow = _now.getFullYear()+'-'+fillZero(_now.getMonth()+1)+'-'+fillZero(_now.getDate());
	//var _leftNum = 0;
	//var _costNum = tuan_goods_limit.data.freezeNum + tuan_goods_limit.data.usedNum;

	$('#_left').html("���պ�QQ������Ϸ�������Ʊʣ�ࣺ"+tuan_goods_limit.data.goodsLeftNum);

	/*if(160000 <= tuan_goods_limit.data.usedNum) {
		$('#_left').html("��QQ������Ϸ�������Ʊ������");
	} else {
		$('#_left').html("��QQ������Ϸ�������Ʊ��ʣ�ࣺ"+parseInt(160000-tuan_goods_limit.data.freezeNum-tuan_goods_limit.data.usedNum));
	}*/

	//if (left1<=0) {
	//	limit=1;
	//}
}
function BuyTicket(){
	//if(!confirm("ÿ��10��30׼�㿪Ʊ��������~\n30�ţ�����3����\n1�ţ�����3����\n2�ţ�����3����\n3�ţ�����2����\n4�ţ�����2����\n5�ţ�����2����\n6�ţ�����1����")){
	//	return false;
	//}

	//var _now = getServerDate();
	//var _sNow = fillZero(_now.getHours())+':'+fillZero(_now.getMinutes());
	//console.log(_sNow);
	
	//if(_sNow < '10:30') {
	//	alert("ÿ��10��30׼ʱ��Ʊ��������~��");
	//	return;
	//}
	if(ticketType <= 0) {
		alert('��ѡ����Ҫ�������Ʊ��');
		return;
	}

	if(isNaN($('#TicketNum').val()))
	{
		alert('����Ʊ������');
		return;
	}
	if($('#TicketNum').val()>100)
	{
		alert('һ������๺Ʊ100�ţ�');
		return;
	}
	if(begin==0)
	{
		alert('��Ʊδ��ʼ��');
		return;
	}
	if(end==1)
	{
		alert('��Ʊ�ѽ�����');
		return;
	}
	if(limit==1)
	{
		alert('��Ʊ�����꣡');
		return;
	}
	if($("#TicketPresent").val()==''||isNaN($("#TicketPresent").val()))
	{
		alert('����ȷ����д��������Ҫ������ҵ�QQ�ţ�');
		return;
	}
	areaId=$("#userarea1").val();
	if(areaId==0||isNaN($("#userarea1").val()))
	{
		alert('��ѡ����Ҫ������Ʊ�Ĵ��������ô���Ϊ������Ʊ�Ĵ�������');
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
				if(confirm("����ǰ��һ��δ֧�������������"+(i_buy.price/10)+"Q�㣬�Ƿ�֧���ö�����")) {
					price=i_buy.price;
					var sUrl="http://apps.game.qq.com/daoju/v3/api/hx/pay/cpay/mall/pay.php?eventid="+i_buy.pay_eventid+"&biz=mgc&channel=mall&serial="+i_buy.serial+"&amount="+price+"&r="+Math.random();
					FloadJS(sUrl, OrderSucc, Fail);
				}
			}
			else if(i_buy.result==-6361)
			{
				alert('Ʊ�����꣬���������δ֧���Ķ�������ǰ��<a href="http://www.htmlsucai.com" target="_blank">֧��</a>�ɣ�');
			} else if(i_buy.result==-6107) {//δ������ɫ
			  if(areaId == 888) {
				alert("��Ǹ������QQ��δ����ҳ�ι���������ɫ��");
				 //var ss = '����һ�������� <a href="http://www.htmlsucai.com">http://mgc.qq.com</a> ҳ���¼QQ���ٻ���������ƱŶ~';
			  } else {
	            alert("��Ǹ������QQ��δ����ѡ����������Ϸ��ɫ��");
				//var ss = "��Ǹ����ǰ������δ������ɫ�����¼��Ϸ�ͻ��˴�����ɫ��"
			  }
			  //var ss = '����һ�������� <a href="http://www.htmlsucai.com">http://mgc.qq.com</a> ҳ���¼QQ���ٻ���������ƱŶ~';
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
		alert('��¼ʧЧ������ҳ��ע����¼�����µ�¼ҳ�棡');
		return;
	}
	else if(opay.ret==0)
	{
			var sUrl = opay.data.url + "";
             sUrl = sUrl.replace(/&amp;/g, '&');
             fusion2.dialog.buy ({ 
                // ��ѡ���������롰���߼��ۡ�ģʽ��Ӧ��ʹ����Ϸ�ҿ��֧������ʱ�����봫�ò�����ȡֵ�̶�Ϊ��true����        
                // ����֧����������Ҫ����ò����� 
                disturb : true, 				
                // ���롣 ��ʾ������Ʒ��url������url_params�ǵ���Q��ֱ���ӿ�v3/pay/buy_goods����߼��۽ӿ�v3/pay/exchange_goods�ӿڷ��صĲ�����             
                param : sUrl, 
                // ��ѡ����ʾ�Ƿ�ʹ��ɳ����Ի�����Ӧ�÷���ǰ�������ע�͵����С� 
              //  sandboxֵΪ�����͡�true��ʹ�ã� false��ָ������ʹ�á� 
                sandbox : false, 
                //��ѡ��ǰ̨ʹ�õ������ı��������ڻص�ʱʶ����Դ�� 
                context : "context", 
                //��ѡ���û�����ɹ�ʱ�Ļص�����������opt.contextΪ����context����������û�����ɹ����������ص�JS�е�onSuccess�����û��رնԻ���ʱ�ٻص�onClose�� 
                onSuccess : function (opt) { 
					MGC.popFormsShow('gotoWindow');
					//alert('��ϲ��������ɹ�����ǰ��<a href="http://www.htmlsucai.com" target="_blank">�齱</a>�ɣ�');
					//clearCookie();
					//LoginedUserInfo();
						
				}, 
                //��ѡ���û�ȡ������ʱ�Ļص�����������opt.contextΪ����context����������û�����ʧ�ܻ�û�й��򣬹رնԻ���ʱ���Ȼص�onCancel�ٻص�onClose��  
                onCancel : function (opt) { },     
                //��ѡ�������ʵ��Q��ֱ������ʱ�����˷���֪ͨ�ӿڣ�����Ҫʵ�ֱ�����������opt.contextΪ����context���������������ʱ���������ص�onSend��             
                onSend : function(opt) { }, 
                //��ѡ���Ի���ر�ʱ�Ļص���������Ҫ���ڶԻ���رպ����UI����ĵ�����onSuccess��onCancel������Ӧ���߼��Ĵ������������ϡ� 
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
		'ec': "", /*�������� �Զ��� PV����*/

		'biz': 'mgc', /*ҵ�����ƣ�������ҵ����룬��֪��ʱ��daoju*/
		'appid': 1004, /*����ID����Ϸ���Ĺ̶�2010��΢�̵�̶�2002*/
		'channel': "0", /*��pf*/
		'plugid':9200 , /*����ID���̶�*/
		'actid': 28, /*ƽ̨�ID���̶�*/

		'propid': 0, /*�������id*/
		'catid': 0, /*���߷���*/

		'price': 0, /*���߼۸�*/
		'quantity': 0, /*��������*/

		'openid': "", /*openid*/
		'area': "2", /*����ID*/
		'plat': "9", /*ƽ̨ID ��Ӧplat��-1��δ֪ 0��ios 1��andriod 9:pc)*/
		'partition': "", /*С��ID*/
		'roleid': "", /*��ɫID*/

		'ext': ""                    /*��չ��Ϣ*/
	});
});

///////////////////////////////////////////////////////////////////////////////////////
/*  |xGv00|491e4c8cf5eeda0f672d65d3e6320d47 */