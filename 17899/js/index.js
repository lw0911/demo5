 var gAreaId=0;
	
	
//购买门票	
function tic(id){      
	ticketType=id;			
	TGDialogS('J_ticket');
}	

	
//礼包夺宝	
/* var gGiftList = {
	"1":"【我和春天有个约会】",
	"2":"【我们一起走】",
	"3":"【让我为你唱首歌】",
	"4":"【挚爱】",
	"5":"【“俞”你同享】",
	"6":"【飞行印章】",
	"7":"【八音盒中型包裹】",
	"8":"【高级扭蛋券包裹】",
	"9":"【高级魔法棒】",
	"10":"【幻彩中型礼盒】"
}; */

/////////////////////////////立即夺宝/////////////////////////////

	
//////////////////////////////////////////

	
/////////////////////////////////////////////////////////////
/**
 * 通用报错函数
 */
function Fail(errInfo) {
	if('undefined' != typeof(errInfo) && null != errInfo && "" != errInfo) {
		//$('#div_msg_fail_content').html('<strong>'+errInfo+'</strong>');
		alert(errInfo);
	} else {
		//$('#div_msg_fail_content').html('<strong>非常抱歉，系统繁忙，请稍后再试！</strong>');
		alert('非常抱歉，系统繁忙，请稍后再试！');
	}	
	//TGDialogS('div_msg_fail');
	return ;
}


////////////////////////////夺宝支付/////////////////////////////
//1、调用HSBuy，传入对应礼包流水ID即可
 //2、若需绑定大区购买，请在调用HSBuy前将大区ID赋值给iZone
 milo.ready(function(){
     need("daoju.hx.order",function(order){
         order.init({
             appid:"1003",//默认1003 PC端，1001 道聚城APP，2004 掌上穿越火线
             biz: "mgc",//业务id
             plug_id:"7200",//插件id，比如7200（活动营销）、8300（积分+点券）
             iActionId:3946,//活动id
             _v:'v3',
             hasCenter:0,//不显示我的订单中心 按钮
             areaType:2,//大区选择框样式、1:道聚城大区选择框，2:milo默认选择框
             onPaySuccess:null,//支付成功回调
             onPayClose:null,//支付弹层关闭回调
             onBuyError:null//下单失败回调
         });

		//购买事件绑定
		$("#buy_btn").click(function(){
			//使用milo大区选择框（areaType:2）的购买方式
			var buyNum = $('#input_buy_flowernum').val();
			if(isNaN(buyNum)){
				alert("请填写数字");
				return;
			}
			if(!(/^[0-9]*[1-9][0-9]*$/.test(buyNum))){
				alert("请填写正确的价格");
				return;
			}
			if(buyNum>2000){
				alert("超出可购买最大值");
				return;
			}

			showDialog.hide();
			$('#input_buy_flowernum').val(1);
			if(gAreaId <= 0) {
				//amsInit(66383, 317981);
				return false;
			}

			//if(gAreaId == 888) {
			//	alert("很抱歉，因为涉及道具发放，梦工厂大区不能参与活动，请选择其他大区吧！");
			//	return false;
			//}

			order.buy({
				iSeqId: 31290, //对应的礼包id
				buynum:buyNum,//选填默认是1
				_ver:"v3",//版本号，固定
				iZone:gAreaId//该项如果填写了则不会出现大区选择弹框
				//lRoleId:gRoleId//角色id，同iZone
				//roleName:xxx//如果当前业务需要则要填，同iZone
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
					$('#_roundId_'+treasureId).html('已经结束');
					$('#_hasNum_'+treasureId).html('0');
					$('#_leftNum_'+treasureId).html('0');
					$('#_roundLimit_'+treasureId).html(data[i].round_limit);
				} else {
					$('#_roundId_'+treasureId).html('当前轮次:'+data[i].iRoundId);
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



	//查询是否绑定的配置
	amsCfg_325836={
		type : "query",
		success : function(bindedInfo){
			//已绑定时的扩展处理
			gAreaId = bindedInfo.Farea;
		},
		failure : function(){
			//未绑定时的扩展处理
		}
	};
	
	//提交绑定的配置
	amsCfg_325837={
		type : "comit",
		iQueryFlowID:325836,
		service:"x5" 
	};

	//调用，查询是否已经绑定
	milo.ready(function(){
		amsInit(68754, 325836);
		}
	);


//个人信息
amsCfg_325850 = {
	'iActivityId' : '68754', // AMS活动号
	'iFlowId' : '325850', // 流程号
	'_everyRead' : true,
	'fFlowSubmitEnd': function(res) {
		if(typeof res.jData == "object") { //返回已经提交的数据，填充页面
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
								if(!_val){alert("姓名不能为空"); return;}
								if(milo.getByteLength(_val) > 30){alert("姓名长度不能超过30个字节。"); return;}
								break;
							}
							case 'sGender':{
								if(!_val){alert("性别必须选择"); return;}
								break;
							}
							case 'sIdentity':{
								if(!_val){alert("身份证号码不能为空"); return;}
								if(!milo.isIDCard(_val)){alert("身份证号码有误。"); return;}
								break;
							}
							case 'sMobile':{
								if(!_val){alert("手机号码不能为空"); return;}
								if(isNaN(_val) || _val.indexOf('.') >= 0){alert("手机号码必须为数字。"); return;}
								if(_val.length > 11){alert("手机号码不得超过11位。"); return;}
								break;
							}
							case 'sAddress':{
								if(!_val){alert("详细地址不能为空"); return;}
								if(milo.getByteLength(_val) > 100){alert("详细地址不能超过100个字节。"); return;}
								break;
							}
							case 'sPostCode':{
								if(!_val){alert("邮政编码不能为空"); return;}
								if(milo.getByteLength(_val) > 8){alert("邮政编码不能超过8个字节。"); return;}
								if(isNaN(_val) || _val.indexOf('.') >= 0){alert("邮政编码必须为数字。"); return;}
								break;
							}
							case 'sProvince':{
								if(!_val){alert("请选择省份"); return;}
								break;
							}
							case 'sCity':{
								if(!_val){alert("请选择城市"); return;}
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



// 个人获奖记录初始化
amsCfg_325835 = {
	'iAMSActivityId' : '68754', // AMS活动号
	'iLotteryFlowId' : '325835', //  查询获奖轮播的流程号
	'activityId' : '161645', // 模块实例号
	'contentId' : 'getGiftContent_325835', //容器ID
	'templateId' : 'getGiftTemplate_325835', //模板ID
	'contentPageId' : 'getGiftPageContent_325835',	//分页容器ID
	'showContentId' : 'showMyGiftContent_325835' //弹出层ID
};



	//提交请求至AME
	amsCfg_325911 = {
		"iActivityId": 68754, //活动id	
		"iFlowId":    325911, //流程id
		"fFlowSubmitEnd": function(res){
		 alert("礼包资格剩余："+res.sOutValue1+"\n夺宝币剩余:"+res.sOutValue2);
			return;
		}           
	};





///////////////////抽奖

	// 1次荧光棒
	amsCfg_325834 = {
		'iAMSActivityId' : '68754', // AMS活动号
		'activityId' : '161645', // 模块实例号
		'onBeginGetGiftEvent' : function(){
			return 0; // 抽奖前事件，返回0表示成功
		},
		'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
			alert(callbackObj.sMsg);
		},
		'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		
			LotteryManager.alert(callbackObj.sMsg);
		}
	};

	// 5次 荧光棒
	amsCfg_325838 = {
		'iAMSActivityId' : '68754', // AMS活动号
		'activityId' : '161645', // 模块实例号
		'onBeginGetGiftEvent' : function(){
			return 0; // 抽奖前事件，返回0表示成功
		},
		'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
			alert(callbackObj.sMsg);
		},
		'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		
			LotteryManager.alert(callbackObj.sMsg);
		}
	};

	// 10次荧光棒
	amsCfg_325839 = {
		'iAMSActivityId' : '68754', // AMS活动号
		'activityId' : '161645', // 模块实例号
		'onBeginGetGiftEvent' : function(){
			return 0; // 抽奖前事件，返回0表示成功
		},
		'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
			alert(callbackObj.sMsg);
		},
		'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
		
			
			LotteryManager.alert(callbackObj.sMsg);
		}
	};

	// 抽奖领取主功能初始化
	amsCfg_325935 = 	amsCfg_325936 =	amsCfg_325937 = 	amsCfg_325938 = 	amsCfg_325939 ={
		'iAMSActivityId' : '68754', // AMS活动号
		'activityId' : '161645', // 模块实例号
		'onBeginGetGiftEvent' : function(){
			return 0; // 抽奖前事件，返回0表示成功
		},
		'onGetGiftFailureEvent' : function(callbackObj){// 抽奖失败事件
			//alert(callbackObj.sMsg);
			  $("#tab_fail").html(callbackObj.sMsg);
				TGDialogS('pop6');
		},
		'onGetGiftSuccessEvent' : function(callbackObj){// 抽奖成功事件
			var packageLen = callbackObj.iPackageId ? callbackObj.iPackageId.split(',') : '';
			if(packageLen && packageLen.length > 1){
				LotteryManager.alert(callbackObj.sMsg);
				return;
			}
		
			//1：实物
			if((callbackObj.sPackageOtherInfo && callbackObj.sPackageOtherInfo == "RealGood") || callbackObj.sPackageRealFlag == 1){
				/*
				 * 0：虚拟游戏物品
				 * 1：实际物品，需要填写个人收货信息
				 * 2：cdkey
				 */
				TGDialogS('pop5');//LotteryManager.alert("恭喜您获得了 " + callbackObj.sPackageName + " ! 请您准确填写个人信息，官方将有工作人员联系您。");
				return;
			}
			//2：cdkey
			if(callbackObj.sPackageOtherInfo || callbackObj.sPackageCDkey){
				// 新的处理
				if(callbackObj.sPackageCDkey){
					LotteryManager.alert('您获得的cdkey为：' + callbackObj.sPackageCDkey + '<input type="button" value="复制" onclick="ExplorerManager.clipDataToBoard(\''+callbackObj.sPackageCDkey+'\'); alert(\'复制成功。\');">');
					return;
				}else{
					LotteryManager.alert('您获得的cdkey为：' + callbackObj.sPackageOtherInfo + '<input type="button" value="复制" onclick="ExplorerManager.clipDataToBoard(\''+callbackObj.sPackageOtherInfo+'\'); alert(\'复制成功。\');">');
					return;
				}
				
			}
			if(callbackObj.sMsg="很抱歉！您什么都没有抽中"){
				TGDialogS('pop7');
			}
		}
	};

	











/*  |xGv00|5230cbf0e98a2314fbc7c0b239830fd5 */