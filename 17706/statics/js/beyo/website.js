// JavaScript Document
var website = {
	tab : function(tabBtn,tabList,tabDiv,tabevent){
		if(!tabBtn)return;
		$(tabBtn).find(tabList).on(tabevent,function(){
			$(this).siblings(tabList).removeClass('active');
			$(this).addClass('active');
			$(tabDiv).hide();
			$(tabDiv).eq($(this).index()).show();
		});
	},
	top : function(){
		$(window).scroll(function(){
			if ($(window).scrollTop()>100){
				$(".top").fadeIn(500);
			}else{
				$(".top").fadeOut(500);
			}
		});
		$(".top").click(function(){
			$('html,body').animate({scrollTop: '0px'}, 500);
		});
	},
	audition : function(obj){
		//window.onload = window.onresize = window.onscroll = function(){		
			//var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			//if(scrollTop > 532){
				//$(obj).css({'position':'fixed','top':50})
			//}else{
				//$(obj).css({'position':'absolute','top':582})
			//}		
		//};
		
	},
	calculator : function(){
		$(".calculator_btn").click(function(){
			$(".calculator_body").hide();
			$(".calculator_submit").show();
		})
		$(".calculator_submit_again").click(function(){
			$(".calculator_body").show();
			$(".calculator_submit").hide();
		})
	},
	provingTel : function(){
		var passengerValid = true;   		 
		if($("#tel").val() == ""||$("#tel").val() == "请输入手机号"){  
			alert("请输入您的手机号码");   
			passengerValid = false;  
			return false;  
		} 
		if(!checkPhone($("#tel").val())){  
			alert("请输入正确格式的电话号码");  
			passengerValid = false;  
			return false;  
		} 
		if($("#name").val() == ""||$("#name").val() == "您贵姓"){  
			alert("请输入您的姓名");  
			passengerValid = false;  
			return false;  
		} 
		// if(passengerValid){
		// 	alert("提交成功，XXX老师会尽快与您联系!") 
		// } 
		function checkPhone(phone){       
			var ab=/(^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$)|(^((\(\d{3}\))|(\d{3}\-))?(1[358]\d{9})$)/;
			if(ab.test(phone) == false){    
				return false;    
			}else{    
				return true;    
			}    
		} 
	},
	inputDefault : function(){
		$("#name").focus(function(){
			if($(this).val() == "您贵姓"){
				$(this).val("");
			}
		});
		$("#name").blur(function(){
			if($(this).val() == ""){
				$(this).val("您贵姓");
			}
		});
		$("#tel").focus(function(){
			if($(this).val() == "请输入手机号"){
				$(this).val("");
			}
		});
		$("#tel").blur(function(){
			if($(this).val() == ""){
				$(this).val("请输入手机号");
			}
		});
	},
	interview : function(obj,num,iw,prev,next){
		var iCur = 0;
		$(prev).attr("onOff",true);
		$(next).attr("onOff",true);
		$(obj).css("width",iw*$(obj).find('li').length + 'px')
		
		$(prev).click(function(){
			if($(this).attr("onOff")){
				$(this).attr("onOff",false);
				$(next).attr("onOff",true);
				var iLeft = -iCur*iw + iw;
				iCur--;
				if( iCur <= 0 ){
					iCur = 0;
				};
				if (iLeft > 0) {
					iLeft = 0;
				}
				$(obj).animate({left:iLeft+"px"},function(){
					$(prev).attr("onOff",true);
				});
			}
		})
		
		$(next).click(function(){
			if($(this).attr("onOff")){
				$(this).attr("onOff",false);
				$(prev).attr("onOff",true);
				var iLeft = -iCur*iw - iw;
				iCur++;
				if( iCur >= ($(obj).width()-iw*num)/iw){
					iCur = ($(obj).width()-iw*num)/iw;
				};
				if (iLeft < iw*num - $(obj).width()) {
					iLeft = iw*num - $(obj).width();
				}
				$(obj).animate({left:iLeft+"px"},function(){
					$(next).attr("onOff",true);
				});
			}
		})
	},
	Checkfeedback: function(){
		var passengerValid = true;  
		if($("#babyname").val() == ""){
			alert("请输入宝宝姓名");  
			$("#babyname").focus();
			passengerValid = false;  
			return false;  
		}
		if($("#babybirthday").val() == ""){
			alert("请选择宝宝出生日期");  
			$("#babybirthday").focus();
			passengerValid = false;  
			return false;  
		}   		 
		if($("#phone").val() == ""){
			alert("请输入家长手机号码");  
			$("#phone").focus();
			passengerValid = false;  
			return false;  
		} 
		if(!checkPhone($("#phone").val())){
			alert("请输入正确格式的手机号码");  
			$("#phone").focus();
			passengerValid = false;  
			return false;  
		} 
		if($("#province").val() == 0){
			alert("请选择所在城市");   
			passengerValid = false;  
			return false;  
		} 
		if($("#nearby").val() == ""){
			alert("请选择附近中心");    
			passengerValid = false;  
			return false;  
		} 
		if(passengerValid){  
			$('#form-00011001').submit();
		} 
		function checkPhone(phone){       
			var ab=/1[3-8]+\d{9}/;
			if(ab.test(phone) == false){    
				return false;    
			}else{    
				return true;    
			}    
		}  
	},
	Checkrecruit: function(){
		var passengerValid = true;  
		if($("#name").val() == ""){
			alert("请输入您的姓名");
			$("#name").focus();
			passengerValid = false;  
			return false;  
		}
		if($("#year").val() == ""){
			alert("请输入您的年龄");
			$("#date").focus();
			passengerValid = false;  
			return false;  
		}   		 
		if($("#tel").val() == "" && $("#mobile").val() == ""){
			alert("联系电话和手机请至少填一个");  
			$("#tel").focus();  
			passengerValid = false;  
			return false;  
		} 
		if(!checkTel($("#tel").val()) && !checkPhone($("#mobile").val())){  
			alert("请输入正确格式的联系电话");  
			$("#tel").focus();  
			passengerValid = false;  
			return false;  
		} 
		if(!checkPhone($("#mobile").val()) && !checkTel($("#tel").val())){  
			alert("请输入正确格式的手机号码");  
			$("#tel").focus();  
			passengerValid = false;  
			return false;  
		}
		if($("#checkEmail").val() == ""){  
			alert("请输入您的电子邮箱");   
			passengerValid = false;  
			return false;  
		} 
		if(!checkEmail($("#email").val())){  
			alert("请输入正确的电子邮箱");   
			passengerValid = false;  
			return false;  
		} 
		if($("#selPro").val() == ""){  
			alert("请选择所在省份");   
			passengerValid = false;  
			return false;  
		} 
		if(passengerValid){  
			$('#myform1').submit();  
		} 
		function checkPhone(phone){       
			var ab=/1[3-8]+\d{9}/;
			if(ab.test(phone) == false){    
				return false;    
			}else{    
				return true;    
			}    
		} 
		function checkTel(phone){       
			var ab=/([0-9]{3,4}-)?[0-9]{7,8}/;
			if(ab.test(phone) == false){    
				return false;    
			}else{    
				return true;    
			}    
		}
		function checkEmail(phone){       
			var ab=/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
			if(ab.test(phone) == false){    
				return false;    
			}else{    
				return true;    
			}    
		}
	},
	auClose : function(btn,obj){
		$(btn).on("click",function(){
			$(obj).hide();
		})
	},
	tabImg : function(obj){
		var m = 0;
		var speed = 0;
		var timer = null;
		
		$("#dis_tabpic dd").each(function(i,elem){
			$(elem).attr("index",i)
			$(elem).click(function(){
				clearTimeout(timer);
				m = $(elem).attr("index")
				mouseTab(3)
			})
		});
		
		$("#dis_tabpic li").eq(0).css({"opacity":1,"zIndex":1})
		$("#dis_tabpic li").eq(0).addClass("cartoon");
		tab()
	
		function tab(){
			clearTimeout(timer);
			timer = setTimeout(function(){
				m++
				if( m == $("#dis_tabpic li").length )m = 0;
				mouseTab(2)

			},6000)
		}
		
		function mouseTab(x){
			
			$("#dis_tabpic li").each(function(i,elem){
				$(elem).css("zIndex",0)
				$("#dis_tabpic dd").removeClass("active");
			});
			$("#dis_tabpic li").eq(m).css("zIndex",x)
			$("#dis_tabpic dd").eq(m).addClass("active");
			
			speed = 0;
			$("#dis_tabpic li").eq(m).animate({opacity:1},function(){
				$("#dis_tabpic li").each(function(i,elem){
					$(elem).css("opacity",0)
					$(elem).removeClass("cartoon");
					$("#dis_tabpic li").eq(m).css("opacity",1)
					$("#dis_tabpic li").eq(m).addClass("cartoon");
				});
				tab()
			});

		}
	},
	screenshot : function(){
		var oDiv = document.getElementById('con_news_tab');
		if(!oDiv)return;
		var oUl = oDiv.getElementsByTagName('ul')[0];
		var aLi = oUl.getElementsByTagName('li');
		if(aLi.length==0)return false;
		var oDl = oDiv.getElementsByTagName('dl')[0];
		var aDd = oDl.getElementsByTagName('dd');
		var screenLeft = document.getElementById('screenshot_left');
		var screenRight = document.getElementById('screenshot_right');
		var m = 0;
		var n = 0
		var speed = 0;
		var q =0;
		var timer = null;
		screenLeft.onOff = true;
		screenRight.onOff = true;
		oDl.innerHTML += oDl.innerHTML;
		
		$('.screenshot_btn').hover(function(){
			clearTimeout(timer);
		},function(){
			tab();
		})
	
		screenLeft.onclick = function(){
			if(!this.onOff)return;
			clearTimeout(timer);
			screenLeft.onOff =  false;
			screenRight.onOff = false;
			if( m == 0 ){
				m = aDd.length/2;
				oDl.style.left =- oDl.offsetWidth/2 + 'px';
			};
			m--
			if(oDl.offsetLeft/160+m<0){
				$(oDl).animate({left: oDl.offsetLeft+160+'px'},300);
			}
			mouseTab()
		}
		screenRight.onclick = function(){
			if(!this.onOff)return;
			clearTimeout(timer);
			screenLeft.onOff =  false;
			screenRight.onOff = false;
			if( m == aDd.length-1 ){
				m = aDd.length/2-1;
				oDl.style.left = -(aLi.length-4)*160 + 'px';
			};
			m++
			if(oDl.offsetLeft/160+m>3){
				$(oDl).animate({left: oDl.offsetLeft-160+'px'},300);
			}
			mouseTab()
		}
		
		for(var j=0; j<aDd.length; j++){
			aDd[j].index = j;
			aDd[j].onclick = function(){
				clearTimeout(timer);
				m = this.index;
				mouseTab()
			}
		}
		
		aLi[0].style.opacity = 1;
		aLi[0].style.filter = 'alpha(opacity=100)';
		aDd[0].className = 'active';
		oDl.style.width = 160*aDd.length+'px';
		tab()
	
		function tab(){
			clearTimeout(timer);
			timer = setTimeout(function(){
				m++
				for(var j=0; j<aLi.length; j++){
					aLi[j].style.zIndex = 0;
				}
				for(var k=0; k<aDd.length; k++){
					aDd[k].className = '';
				}
				if(m>aLi.length-1){
					n = m-aLi.length;
				}else{
					n = m;
				}
				
				aLi[n].style.zIndex = 2;
				aDd[m].className = 'active';
				if(oDl.offsetLeft/160+m>3){
					$(oDl).animate({left: oDl.offsetLeft-160+'px'},600);
				}
				speed = 0;
				doGrow(aLi[n],5,function(){
					for(var j=0; j<aLi.length; j++){
						if(j !== n){
							aLi[j].style.opacity = 0;
							aLi[j].style.filter = 'alpha(opacity=0)';
						}
					}
					if( m == aDd.length-1 ){
						m = aDd.length/2-1;
						oDl.style.left = -(aLi.length-4)*160 + 'px';
						aDd[m].className = 'active';
					};
					tab()
				})	
			},3000)
		}
		
		function mouseTab(){
			if(m>aLi.length-1){
				n = m-aLi.length;
			}else{
				n = m;
			}
			for(var j=0; j<aLi.length; j++){
				aLi[j].style.zIndex = 0;
			}
			for(var k=0; k<aDd.length; k++){
				aDd[k].className = '';
			}
			
			aLi[n].style.zIndex = 3;
			aDd[m].className = 'active';
			speed = 0;
			doGrow(aLi[n],20,function(){
				for(var j=0; j<aLi.length; j++){
					if(j !== n){
						aLi[j].style.opacity = 0;
						aLi[j].style.filter = 'alpha(opacity=0)';
						//tab()
					}
				}
				screenLeft.onOff = true;
				screenRight.onOff = true;
			})
		}
		
		function doGrow(obj,dir,endFn){
			clearInterval(obj.timer);
			obj.timer = setInterval(function (){
				speed += dir;	
				if(speed > 100){
					speed = 100;
				}		
				obj.style.opacity = speed/100;
				obj.style.filter = 'alpha(opacity=' + speed + ')';
				if(speed == 100){
					clearInterval(obj.timer);
					endFn && endFn();
				}	
			}, 50);
		}
	},
	floating : function(){
		$('.floating_close').click(function(){
			$('.floating').hide();
			setTimeout(function(){
				$('.floating').show();
			},30000)
		})
	}
}
function getCity(currProvince){
	//当前 所选择 的 省 
	var currProvincecurrProvince = currProvince; 
	var i,j,k; 
	//清空 城市 下拉选单 
	document.all.nearby.length = 0 ;
	for (i = 0 ;i <cityArray.length;i++){ 
		//得到 当前省 在 城市数组中的位置 
		if(cityArray[i][0]==currProvince){ 
			//得到 当前省 所辖制的 地市 
			tmpcityArray = cityArray[i][1].split("|") 
			for(j=0;j<tmpcityArray.length;j++){ 
				//填充 城市 下拉选单 
				document.all.nearby.options[document.all.nearby.length] = new Option(tmpcityArray[j],tmpcityArray[j]);
			} 
		} 
	}
}
cityArray = new Array(); 
cityArray[0] = new Array("北京","北京延庆（格兰山水）分中心|北京方庄直营店|北京回龙观（东亚尚北）分中心|北京回龙观（龙旗广场）分中心|北京朝阳（常营）分中心|北京顺义（悦港城）分中心|北京顺义（后沙峪）分中心|北京公主坟（海军大院）分中心|北京菜市口（中信城）分中心|北京朝阳立水桥（旭辉奥都）分中心|北京望京（金隅丽港）分中心|北京朝阳区（常营）分中心|北京海淀区（东九楼）分中心|XXX北京通州（果园）分中心|XXX北京朝阳（望京商业中心）直营店"); 
cityArray[1] = new Array("天津","天津和平区（荣业大街）分中心"); 
cityArray[2] = new Array("湖北","湖北武汉(新塘万科)分中心|湖北襄阳（万达广场）分中心|湖北恩施（中大御城瑞丰园）分中心|湖北武汉(哈乐城)分中心"); 
cityArray[3] = new Array("辽宁","辽宁大连（汇达园）分中心|辽宁大连（西岗五四路）分中心|辽宁大连（经济开发区）分中心|辽宁辽阳（中南望京花园）分中心|辽宁大连（大都会购物中心）分中心|辽宁省大连（五一路）分中心|辽宁省大连（金州福佳新天地）分中心"); 
cityArray[4] = new Array("吉林","吉林长春（国商沃尔玛）分中心"); 
cityArray[5] = new Array("陕西","陕西西安（未央区文景路）分中心"); 
cityArray[6] = new Array("河南","河南郑州（金水区曼哈顿）分中心|河南郑州（二七区升龙商业广场）分中心|河南安阳（金龙酒店）分中心|XXX河南新密（青屏苑）分中心"); 
cityArray[7] = new Array("江西","江西南昌（红谷滩万达广场）分中心|江西南昌（东湖樟树林）分中心|XXX江西南昌（江信国际花园）分中心|XXX江西丰城（人和峰会）分中心"); 
cityArray[8] = new Array("河北","河北石家庄（裕华区动漫大厦）分中心|河北张家口（宣化大西街）分中心|河北廊坊（万向城）分中心|河北承德（双桥天山金街）分中心"); 
cityArray[9] = new Array("贵州","贵州贵阳（世纪城）分中心"); 
cityArray[10] = new Array("海南","海南海口市（京华城）分中心|海南三亚（金润阳光购物广场）分中心"); 
cityArray[11] = new Array("宁夏","XXX宁夏银川（高尔夫小区）分中心|宁夏银川（金凤区阅海万家）分中心"); 
cityArray[12] = new Array("四川","四川广元（利州万达广场）分中心"); 
cityArray[13] = new Array("湖南","XXX湖南长沙（顺天黄金海岸大酒店）分中心"); 
cityArray[14] = new Array("新疆","新疆昌吉（海棠天街）分中心|新疆乌鲁木齐（火车头儿童大世界）分中心|新疆乌鲁木齐（康城果岭小区）分中心|XXX新疆博乐（红星路百盛大厦）分中心"); 
cityArray[15] = new Array("云南","云南昆明（北辰财富中心）分中心"); 
cityArray[16] = new Array("山东","山东胶州（香港花园）分中心|山东滨州（东方商业文化街）分中心|山东威海（文化中路）分中心|山东临沂（临沭华诚购物广场）分中心|山东海阳（银河名座）中心|山东淄博（太公路）分中心|山东东营（银座广场）分中心|XXX山东临沂（和谐广场）分中心|XXX山东烟台（莱山）分中心|XXX山东烟台（芝罘区大悦城）分中心|XXX山东济南（阳光幼儿园）分中心"); 
cityArray[17] = new Array("上海","上海松江区（绿地金御广场）分中心|上海浦东(芳华路)分中心"); 
cityArray[18] = new Array("山西","XXX山西忻州（世纪花园）分中心"); 
cityArray[19] = new Array("内蒙","XXX内蒙呼和浩特（成吉思汗大街）分中心|XXX内蒙呼和浩特（如意）分中心"); 



function getTown(currProvince){ 
	//当前 所选择 的 省 
	var currProvincecurrProvince = currProvince; 
	var i,j,k; 
	//清空 城市 下拉选单 
	document.all.selTown.length = 0 ; 
	for (i = 0 ;i <townArray.length;i++){ 
	//得到 当前省 在 城市数组中的位置 
		if(townArray[i][0]==currProvince){ 
		//得到 当前省 所辖制的 地市 
			tmpcityArray = townArray[i][1].split("|") 
			for(j=0;j<tmpcityArray.length;j++){ 
				//填充 城市 下拉选单 
				document.all.selTown.options[document.all.selTown.length] = new Option(tmpcityArray[j],tmpcityArray[j]); 
			} 
		} 
	} 
} 
townArray = new Array(); 
townArray[0] = new Array("北京市","东城|西城|崇文|宣武|朝阳|丰台|石景山|海淀|门头沟|房山|通州|顺义|昌平|大兴|平谷|怀柔|密云|延庆"); 
townArray[1] = new Array("上海市","黄浦|卢湾|徐汇|长宁|静安|普陀|闸北|虹口|杨浦|闵行|宝山|嘉定|浦东|金山|松江|青浦|南汇|奉贤|崇明"); 
townArray[2] = new Array("天津市","和平|东丽|河东|西青|河西|津南|南开|北辰|河北|武清|红挢|塘沽|汉沽|大港|宁河|静海|宝坻|蓟县"); 
townArray[3] = new Array("重庆市","万州|涪陵|渝中|大渡口|江北|沙坪坝|九龙坡|南岸|北碚|万盛|双挢|渝北|巴南|黔江|长寿|綦江|潼南|铜梁 |大足|荣昌|壁山|梁平|城口|丰都|垫江|武隆|忠县|开县|云阳|奉节|巫山|巫溪|石柱|秀山|酉阳|彭水|江津|合川|永川|南川"); 
townArray[4] = new Array("河北省","石家庄|邯郸|邢台|保定|张家口|承德|廊坊|唐山|秦皇岛|沧州|衡水"); 
townArray[5] = new Array("山西省","太原|大同|阳泉|长治|晋城|朔州|吕梁|忻州|晋中|临汾|运城"); 
townArray[6] = new Array("内蒙古自治区","呼和浩特|包头|乌海|赤峰|呼伦贝尔盟|阿拉善盟|哲里木盟|兴安盟|乌兰察布盟|锡林郭勒盟|巴彦淖尔盟|伊克昭盟"); 
townArray[7] = new Array("辽宁省","沈阳|大连|鞍山|抚顺|本溪|丹东|锦州|营口|阜新|辽阳|盘锦|铁岭|朝阳|葫芦岛"); 
townArray[8] = new Array("吉林省","长春|吉林|四平|辽源|通化|白山|松原|白城|延边"); 
townArray[9] = new Array("黑龙江省","哈尔滨|齐齐哈尔|牡丹江|佳木斯|大庆|绥化|鹤岗|鸡西|黑河|双鸭山|伊春|七台河|大兴安岭"); 
townArray[10] = new Array("江苏省","南京|镇江|苏州|南通|扬州|盐城|徐州|连云港|常州|无锡|宿迁|泰州|淮安"); 
townArray[11] = new Array("浙江省","杭州|宁波|温州|嘉兴|湖州|绍兴|金华|衢州|舟山|台州|丽水"); 
townArray[12] = new Array("安徽省","合肥|芜湖|蚌埠|马鞍山|淮北|铜陵|安庆|黄山|滁州|宿州|池州|淮南|巢湖|阜阳|六安|宣城|亳州"); 
townArray[13] = new Array("福建省","福州|厦门|莆田|三明|泉州|漳州|南平|龙岩|宁德"); 
townArray[14] = new Array("江西省","南昌市|景德镇|九江|鹰潭|萍乡|新馀|赣州|吉安|宜春|抚州|上饶"); 
townArray[15] = new Array("山东省","济南|青岛|淄博|枣庄|东营|烟台|潍坊|济宁|泰安|威海|日照|莱芜|临沂|德州|聊城|滨州|菏泽"); 
townArray[16] = new Array("河南省","郑州|开封|洛阳|平顶山|安阳|鹤壁|新乡|焦作|濮阳|许昌|漯河|三门峡|南阳|商丘|信阳|周口|驻马店|济源"); 
townArray[17] = new Array("湖北省","武汉|宜昌|荆州|襄樊|黄石|荆门|黄冈|十堰|恩施|潜江|天门|仙桃|随州|咸宁|孝感|鄂州"); 
townArray[18] = new Array("湖南省","长沙|常德|株洲|湘潭|衡阳|岳阳|邵阳|益阳|娄底|怀化|郴州|永州|湘西|张家界"); 
townArray[19] = new Array("广东省","广州|深圳|珠海|汕头|东莞|中山|佛山|韶关|江门|湛江|茂名|肇庆|惠州|梅州|汕尾|河源|阳江|清远|潮州|揭阳|云浮"); 
townArray[20] = new Array("广西壮族自治区","南宁|柳州|桂林|梧州|北海|防城港|钦州|贵港|玉林|南宁地区|柳州地区|贺州|百色|河池"); 
townArray[21] = new Array("海南省","海口|三亚"); 
townArray[22] = new Array("四川省","成都|绵阳|德阳|自贡|攀枝花|广元|内江|乐山|南充|宜宾|广安|达川|雅安|眉山|甘孜|凉山|泸州"); 
townArray[23] = new Array("贵州省","贵阳|六盘水|遵义|安顺|铜仁|黔西南|毕节|黔东南|黔南"); 
townArray[24] = new Array("云南省","昆明|大理|曲靖|玉溪|昭通|楚雄|红河|文山|思茅|西双版纳|保山|德宏|丽江|怒江|迪庆|临沧"); 
townArray[25] = new Array("西藏自治区","拉萨|日喀则|山南|林芝|昌都|阿里|那曲"); 
townArray[26] = new Array("陕西省","西安|宝鸡|咸阳|铜川|渭南|延安|榆林|汉中|安康|商洛"); 
townArray[27] = new Array("甘肃省","兰州|嘉峪关|金昌|白银|天水|酒泉|张掖|武威|定西|陇南|平凉|庆阳|临夏|甘南"); 
townArray[28] = new Array("宁夏回族自治区","银川|石嘴山|吴忠|固原"); 
townArray[29] = new Array("青海省","西宁|海东|海南|海北|黄南|玉树|果洛|海西"); 
townArray[30] = new Array("新疆维吾尔族自治区","乌鲁木齐|石河子|克拉玛依|伊犁|巴音郭勒|昌吉|克孜勒苏柯尔克孜|博尔塔拉|吐鲁番|哈密|喀什|和田|阿克苏"); 
townArray[31] = new Array("香港特别行政区","香港特别行政区"); 
townArray[32] = new Array("澳门特别行政区","澳门特别行政区"); 
townArray[33] = new Array("台湾省","台北|高雄|台中|台南|屏东|南投|云林|新竹|彰化|苗栗|嘉义|花莲|桃园|宜兰|基隆|台东|金门|马祖|澎湖"); 
townArray[34] = new Array("其它","北美洲|南美洲|亚洲|非洲|欧洲|大洋洲"); 