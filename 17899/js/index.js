 var gAreaId=0;
	
	
//������Ʊ	
function tic(id){      
	ticketType=id;			
	TGDialogS('J_ticket');
}	

	
//����ᱦ	
/* var gGiftList = {
	"1":"���Һʹ����и�Լ�᡿",
	"2":"������һ���ߡ�",
	"3":"������Ϊ�㳪�׸衿",
	"4":"��ֿ����",
	"5":"�����ᡱ��ͬ��",
	"6":"������ӡ�¡�",
	"7":"�����������Ͱ�����",
	"8":"���߼�Ť��ȯ������",
	"9":"���߼�ħ������",
	"10":"���ò�������С�"
}; */

/////////////////////////////�����ᱦ/////////////////////////////

	
//////////////////////////////////////////

	
/////////////////////////////////////////////////////////////
/**
 * ͨ�ñ�����
 */
function Fail(errInfo) {
	if('undefined' != typeof(errInfo) && null != errInfo && "" != errInfo) {
		//$('#div_msg_fail_content').html('<strong>'+errInfo+'</strong>');
		alert(errInfo);
	} else {
		//$('#div_msg_fail_content').html('<strong>�ǳ���Ǹ��ϵͳ��æ�����Ժ����ԣ�</strong>');
		alert('�ǳ���Ǹ��ϵͳ��æ�����Ժ����ԣ�');
	}	
	//TGDialogS('div_msg_fail');
	return ;
}


////////////////////////////�ᱦ֧��/////////////////////////////
//1������HSBuy�������Ӧ�����ˮID����
 //2������󶨴����������ڵ���HSBuyǰ������ID��ֵ��iZone
 milo.ready(function(){
     need("daoju.hx.order",function(order){
         order.init({
             appid:"1003",//Ĭ��1003 PC�ˣ�1001 ���۳�APP��2004 ���ϴ�Խ����
             biz: "mgc",//ҵ��id
             plug_id:"7200",//���id������7200���Ӫ������8300������+��ȯ��
             iActionId:3946,//�id
             _v:'v3',
             hasCenter:0,//����ʾ�ҵĶ������� ��ť
             areaType:2,//����ѡ�����ʽ��1:���۳Ǵ���ѡ���2:miloĬ��ѡ���
             onPaySuccess:null,//֧���ɹ��ص�
             onPayClose:null,//֧������رջص�
             onBuyError:null//�µ�ʧ�ܻص�
         });

		//�����¼���
		$("#buy_btn").click(function(){
			//ʹ��milo����ѡ���areaType:2���Ĺ���ʽ
			var buyNum = $('#input_buy_flowernum').val();
			if(isNaN(buyNum)){
				alert("����д����");
				return;
			}
			if(!(/^[0-9]*[1-9][0-9]*$/.test(buyNum))){
				alert("����д��ȷ�ļ۸�");
				return;
			}
			if(buyNum>2000){
				alert("�����ɹ������ֵ");
				return;
			}

			showDialog.hide();
			$('#input_buy_flowernum').val(1);
			if(gAreaId <= 0) {
				//amsInit(66383, 317981);
				return false;
			}

			//if(gAreaId == 888) {
			//	alert("�ܱ�Ǹ����Ϊ�漰���߷��ţ��ι����������ܲ�������ѡ�����������ɣ�");
			//	return false;
			//}

			order.buy({
				iSeqId: 31290, //��Ӧ�����id
				buynum:buyNum,//ѡ��Ĭ����1
				_ver:"v3",//�汾�ţ��̶�
				iZone:gAreaId//���������д���򲻻���ִ���ѡ�񵯿�
				//lRoleId:gRoleId//��ɫid��ͬiZone
				//roleName:xxx//�����ǰҵ����Ҫ��Ҫ�ͬiZone
			});
		});
	});

 });
 
var iZone=-1;
 
function HSBuy(iseqid){
     if(iZone==-1){
         D.order.buy({"iSeqId":iseqid,"_ver":"v3"});
        }
     else{
         D.order.buy({"iSeqId":iseqid,"_ver":"v3","iZone":iZone});
     }
 }


////////////////////////////////////////////////////////////////

/* $(function(){
	if('undefined' != typeof(WinnerJs) && null != WinnerJs && "" != WinnerJs) {
		if(WinnerJs.length > 0) {
			var html = "";
			var data = WinnerJs;
			for(var i=0; i< data.length; i++) {
				if(i >= 9) {
					break;
				}         
				html += "<li><span>"+data[i].lWinnerUin+"</span><span>"+data[i].sTreasureName+"</span><span>"+data[i].dtUpdateTime+"</span></li>";
				
			}
			$("#carouselContent").append(html);
			scrollName();
		}
	}

	if('undefined' != typeof(RoundJs) && null != RoundJs && "" != RoundJs) {
		if(RoundJs.length > 0) {
			var data = RoundJs;
			for(var i=0; i< data.length; i++) {
				var treasureId = data[i].iTreasureId;
				if(data[i].iRoundId == '-1') {
					$('#_roundId_'+treasureId).html('�Ѿ�����');
					$('#_hasNum_'+treasureId).html('0');
					$('#_leftNum_'+treasureId).html('0');
					$('#_roundLimit_'+treasureId).html(data[i].round_limit);
				} else {
					$('#_roundId_'+treasureId).html('��ǰ�ִ�:'+data[i].iRoundId);
					$('#_hasNum_'+treasureId).html(data[i].iLimitNum-data[i].iNum);
					$('#_leftNum_'+treasureId).html(data[i].iNum);
					$('#_roundLimit_'+treasureId).html(data[i].round_limit);
				}
				
				var percent = (((data[i].iLimitNum-data[i].iNum)/data[i].iLimitNum).toFixed(2))*100;
				$('#_percent_'+treasureId).attr('style', 'width: '+percent+'%;');
			}
		}
	}

}); */

////////////////////////////////////////////////////////////////////////////////////////



	//��ѯ�Ƿ�󶨵�����
	amsCfg_325836={
		type : "query",
		success : function(bindedInfo){
			//�Ѱ�ʱ����չ����
			gAreaId = bindedInfo.Farea;
		},
		failure : function(){
			//δ��ʱ����չ����
		}
	};
	
	//�ύ�󶨵�����
	amsCfg_325837={
		type : "comit",
		iQueryFlowID:325836,
		service:"x5" 
	};

	//���ã���ѯ�Ƿ��Ѿ���
	milo.ready(function(){
		amsInit(68754, 325836);
		}
	);


//������Ϣ
amsCfg_325850 = {
	'iActivityId' : '68754', // AMS���
	'iFlowId' : '325850', // ���̺�
	'_everyRead' : true,
	'fFlowSubmitEnd': function(res) {
		if(typeof res.jData == "object") { //�����Ѿ��ύ�����ݣ����ҳ��
			need(["biz.provincecityselector", "biz.dialog", "util.form"],function(pcs, Dialog, FormManager){

				Dialog.show({
					id: 'personInfoContent_325850'
				});

				g('personInfoContentBtn_325850').onclick = function(){
					var fillData = FormManager.getAllInputValue('personInfoContent_325850');
					for(var i in fillData) {
						var _val = fillData[i];
						switch(i) {
							case 'sName': {
								if(!_val){alert("��������Ϊ��"); return;}
								if(milo.getByteLength(_val) > 30){alert("�������Ȳ��ܳ���30���ֽڡ�"); return;}
								break;
							}
							case 'sGender':{
								if(!_val){alert("�Ա����ѡ��"); return;}
								break;
							}
							case 'sIdentity':{
								if(!_val){alert("���֤���벻��Ϊ��"); return;}
								if(!milo.isIDCard(_val)){alert("���֤��������"); return;}
								break;
							}
							case 'sMobile':{
								if(!_val){alert("�ֻ����벻��Ϊ��"); return;}
								if(isNaN(_val) || _val.indexOf('.') >= 0){alert("�ֻ��������Ϊ���֡�"); return;}
								if(_val.length > 11){alert("�ֻ����벻�ó���11λ��"); return;}
								break;
							}
							case 'sAddress':{
								if(!_val){alert("��ϸ��ַ����Ϊ��"); return;}
								if(milo.getByteLength(_val) > 100){alert("��ϸ��ַ���ܳ���100���ֽڡ�"); return;}
								break;
							}
							case 'sPostCode':{
								if(!_val){alert("�������벻��Ϊ��"); return;}
								if(milo.getByteLength(_val) > 8){alert("�������벻�ܳ���8���ֽڡ�"); return;}
								if(isNaN(_val) || _val.indexOf('.') >= 0){alert("�����������Ϊ���֡�"); return;}
								break;
							}
							case 'sProvince':{
								if(!_val){alert("��ѡ��ʡ��"); return;}
								break;
							}
							case 'sCity':{
								if(!_val){alert("��ѡ�����"); return;}
								break;
							}
							default : {}	
						}
					}
					amsCfg_325850.sData = fillData;
					amsSubmit(68754,325850);
				}
				g("colseLayer_325850").onclick = function(){
					Dialog.hide();
				}

				if(g("province_"+325850).innerHTML != '') {
					g("province_"+325850).innerHTML = '';
				}
				if(g("city_"+325850).innerHTML != '') {
					g("city_"+325850).innerHTML = '';
				}
				pcs.show({
					provinceId : "province_"+325850,
					cityId : "city_"+325850
				});

				if(res.jData.sProvince != undefined) {
					g('province_325850').value = res.jData.sProvince;
				}
				g('province_325850').onchange();
				if(res.jData.sCity != undefined){
					g('city_325850').value = res.jData.sCity;
				}
				
				delete res.jData.sProvince;
				delete res.jData.sCity;
				FormManager.setAllInputValue (res.jData, 'personInfoContent_325850');
			
				if(typeof res.jData.arrPackageInfo != 'undefined' && res.jData.arrPackageInfo.length > 0) {
					document.getElementById('tr_package_325850').style.display = '';
					var package_id = document.getElementById('package_325850');
					for(var i=0; i<res.jData.arrPackageInfo.length; ++i) {	
						var iPackageId = res.jData.arrPackageInfo[i].iPackageId;
						var sPackageName = res.jData.arrPackageInfo[i].sPackageName;
						package_id.options[i] = new Option(sPackageName, iPackageId + '|' + sPackageName);
					}
				}
			});
			
		} else {
			alert(res.sMsg);	
		}
	}
};
milo.ready(function(){
	milo.addEvent(g('fillPersonInfo_325850'),'click',function(){	
		LoginManager.submitLogin(function(){
			amsCfg_325850.sData = { iShow: 1 };
			amsSubmit(68754,325850);
		});
	});
});



// ���˻񽱼�¼��ʼ��
amsCfg_325835 = {
	'iAMSActivityId' : '68754', // AMS���
	'iLotteryFlowId' : '325835', //  ��ѯ���ֲ������̺�
	'activityId' : '161645', // ģ��ʵ����
	'contentId' : 'getGiftContent_325835', //����ID
	'templateId' : 'getGiftTemplate_325835', //ģ��ID
	'contentPageId' : 'getGiftPageContent_325835',	//��ҳ����ID
	'showContentId' : 'showMyGiftContent_325835' //������ID
};



	//�ύ������AME
	amsCfg_325911 = {
		"iActivityId": 68754, //�id	
		"iFlowId":    325911, //����id
		"fFlowSubmitEnd": function(res){
		 alert("����ʸ�ʣ�ࣺ"+res.sOutValue1+"\n�ᱦ��ʣ��:"+res.sOutValue2);
			return;
		}           
	};





///////////////////�齱

	// 1��ӫ���
	amsCfg_325834 = {
		'iAMSActivityId' : '68754', // AMS���
		'activityId' : '161645', // ģ��ʵ����
		'onBeginGetGiftEvent' : function(){
			return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
		},
		'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
			alert(callbackObj.sMsg);
		},
		'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		
			LotteryManager.alert(callbackObj.sMsg);
		}
	};

	// 5�� ӫ���
	amsCfg_325838 = {
		'iAMSActivityId' : '68754', // AMS���
		'activityId' : '161645', // ģ��ʵ����
		'onBeginGetGiftEvent' : function(){
			return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
		},
		'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
			alert(callbackObj.sMsg);
		},
		'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		
			LotteryManager.alert(callbackObj.sMsg);
		}
	};

	// 10��ӫ���
	amsCfg_325839 = {
		'iAMSActivityId' : '68754', // AMS���
		'activityId' : '161645', // ģ��ʵ����
		'onBeginGetGiftEvent' : function(){
			return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
		},
		'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
			alert(callbackObj.sMsg);
		},
		'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
		
			
			LotteryManager.alert(callbackObj.sMsg);
		}
	};

	// �齱��ȡ�����ܳ�ʼ��
	amsCfg_325935 = 	amsCfg_325936 =	amsCfg_325937 = 	amsCfg_325938 = 	amsCfg_325939 ={
		'iAMSActivityId' : '68754', // AMS���
		'activityId' : '161645', // ģ��ʵ����
		'onBeginGetGiftEvent' : function(){
			return 0; // �齱ǰ�¼�������0��ʾ�ɹ�
		},
		'onGetGiftFailureEvent' : function(callbackObj){// �齱ʧ���¼�
			//alert(callbackObj.sMsg);
			  $("#tab_fail").html(callbackObj.sMsg);
				TGDialogS('pop6');
		},
		'onGetGiftSuccessEvent' : function(callbackObj){// �齱�ɹ��¼�
			var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
			if(packageLen && packageLen.length > 1){
				LotteryManager.alert(callbackObj.sMsg);
				return;
			}
		
			//1��ʵ��
			if((callbackObj.sPackageOtherInfo && callbackObj.sPackageOtherInfo == "RealGood") || callbackObj.sPackageRealFlag == 1){
				/*
				 * 0��������Ϸ��Ʒ
				 * 1��ʵ����Ʒ����Ҫ��д�����ջ���Ϣ
				 * 2��cdkey
				 */
				TGDialogS('pop5');//LotteryManager.alert("��ϲ������� " + callbackObj.sPackageName + " ! ����׼ȷ��д������Ϣ���ٷ����й�����Ա��ϵ����");
				return;
			}
			//2��cdkey
			if(callbackObj.sPackageOtherInfo || callbackObj.sPackageCDkey){
				// �µĴ���
				if(callbackObj.sPackageCDkey){
					LotteryManager.alert('����õ�cdkeyΪ��' + callbackObj.sPackageCDkey + '<input type="button" value="����" onclick="ExplorerManager.clipDataToBoard(\''+callbackObj.sPackageCDkey+'\'); alert(\'���Ƴɹ���\');">');
					return;
				}else{
					LotteryManager.alert('����õ�cdkeyΪ��' + callbackObj.sPackageOtherInfo + '<input type="button" value="����" onclick="ExplorerManager.clipDataToBoard(\''+callbackObj.sPackageOtherInfo+'\'); alert(\'���Ƴɹ���\');">');
					return;
				}
				
			}
			if(callbackObj.sMsg="�ܱ�Ǹ����ʲô��û�г���"){
				TGDialogS('pop7');
			}
		}
	};

	











/*  |xGv00|5230cbf0e98a2314fbc7c0b239830fd5 */