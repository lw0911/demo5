// var _hmt = _hmt || [];
// (function() {
//   var hm = document.createElement("script");
//   hm.src = "//hm.baidu.com/hm.js?f7330b5ee51197a8317461632524c922";
//   var s = document.getElementsByTagName("script")[0]; 
//   s.parentNode.insertBefore(hm, s);
// })();






// $(function(){
// 	$(".ico_all img").hover(function(){
// 	$("#dianjiba").show();
// 	},function(){
// 	$("#dianjiba").hide();
// 	});



// 	$("#cp_two").hover(function(){
// 	$(".cp_two").show();
// 	},function(){
// 	$(".cp_two").hide();
// 	});



// });


function addFavorite() {
	if(document.all) {
		try {
			window.external.addFavorite(window.location.href, document.title);
		} catch (e) {
			alert("您的浏览器不支持加入收藏，请使用Ctrl+D进行添加");
		}
	} else if (window.sidebar) {
		window.sidebar.addPanel(document.title, window.location.href, "");
	}else{
		alert("您的浏览器不支持加入收藏，请使用Ctrl+D进行添加");
	}
}

//弹框
var plusBankBg,showForm1,showForm;

function showCon_0(){
	plusBankBg=$('.plusBankBg');
	showForm=$('.plusBank');
	plusBankBg.show();
	showForm.slideDown();
}


function showCon_1(){
	plusBankBg=$('.plusBankBg');
	showForm1=$('.plusBank1');
	plusBankBg.show();
	showForm1.slideDown();
	if($('.inputFocus1').size()>0){
		$('.inputFocus1').focus();
	}
}
function showCon_2(){
	plusBankBg=$('.plusBankBg');
	showForm1=$('.plusBank2');
	plusBankBg.show();
	showForm1.slideDown();
}
function showCon_3(){  //微信专用弹层
	plusBankBg=$('.plusBankBg');
	showForm1=$('.plusBank3');
	plusBankBg.show();
	showForm1.slideDown();
}
function showCon_4(){ //全局实名认证专用
	plusBankBg=$('.plusBankBg');
	showForm1=$('.real-name');
	plusBankBg.show();
	showForm1.slideDown();
}

function showCon_5(){ //全局实名认证专用
	plusBankBg=$('.plusBankBg');
	showForm1=$('.plusBank5');
	plusBankBg.show();
	showForm1.slideDown();
}

function closeAll_0(){
	plusBankBg=$('.plusBankBg');
	showForm=$('.plusBank');
	plusBankBg.hide();
	showForm.slideUp();
}

function closeAll_1(){
	plusBankBg=$('.plusBankBg');
	showForm1=$('.plusBank1');
	plusBankBg.hide();
	showForm1.slideUp();
}
function closeAll_2(){
	plusBankBg=$('.plusBankBg');
	showForm1=$('.plusBank2');
	plusBankBg.hide();
	showForm1.slideUp();
}
function closeAll_5(){
	plusBankBg=$('.plusBankBg');
	showForm1=$('.plusBank5');
	plusBankBg.hide();
	showForm1.slideUp();
}
function surebank(){
		$('#mybank').hide();
		$('.bankMegTab').show();
		$('#myotherbank').show();
		$('.new-shortcut-1 ul').empty();
		var newmybank=($('.new-shortcut-allbank li.selectli').html());
		var newbankshow= $('#newmyseceltbankshowa ul').append('<li>'+newmybank+'</li><li class=otherbank><a href=#>选择其他银行</a></li>');
		closeAll_5();
	}
function closeAll_3(){ //微信专用弹层
	plusBankBg=$('.plusBankBg');
	showForm1=$('.plusBank3');
	plusBankBg.hide();
	showForm1.slideUp();
}
function closeAll_4(){ //全局实名认证专用
	plusBankBg=$('.plusBankBg');
	showForm1=$('.real-name');
	plusBankBg.hide();
	showForm1.slideUp();
}

$(function($) {
	// 关闭所有弹框 | zhenhua.xi | 20140922
	$("a.fr").each(function(){
		$(this).click(function(){
			closeAll_0();
			closeAll_1();
			closeAll_2();
			closeAll_3();
		});
	});
});

function onMessage(){
	var box_mes=$('.box_mes');
	var right=box_mes.css('width');
	if(right=='0px'){
		$('#maxlengthMsg').html("您还可输入200字");
		/*box_mes.css('display','block').animate({'width':'230px','padding':'15px','border':'#5ca9dc 1px solid'},500).children().fadeIn();*/
		box_mes.css('display','block').animate({'width':'230px','padding':'15px','border':'#5ca9dc 1px solid'},500).children().fadeIn();
	}else{
		//清空反馈框里的内容
		$('#feedbackText').val("");
		//清空msg
		$('#maxlengthMsg').html("");
		box_mes.animate({'width':'0','padding':'0','border':'0'},500).css('display','none').children().fadeOut();
	}
}

//意见反馈
function feedbackSubmit(){
	var feedbackVal = strTrim($('#feedbackText').val());
	if(feedbackVal!="" && feedbackVal.length > 0){
		//保存
		var url = "/index.do?method=feedback";
		$.post(url,{
			"feedbackVal":feedbackVal
		},function(result) {
			if (result == 0) {
				//反馈成功
				$('#maxlengthMsg').html("已经收到您的反馈！");
				$('#feedbackBtn').hide();
				//3秒后自动关闭
				setTimeout("Boxhide()",1000);
			} else {
				//反馈失败
				$('#maxlengthMsg').html("反馈失败，您可继续反馈！");
			}
		});
	}else{
		$('#maxlengthMsg').html("输入不能为空!");
	}
}


function strTrim(str){ //删除左右两端的空格
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

//反馈完成关闭
function Boxhide(){
	var box_mes=$('.box_mes');
	box_mes.animate({'width':'0px','padding':'0','border':'0'},500).children().hide();
	//清空反馈框里的内容
	$('#feedbackText').val("");
	//清空消息
	$('#maxlengthMsg').html("");
}

function change(obj){
	//内容
	var feedbackVal = $('#feedbackText').val();
	var length = 200 - feedbackVal.length;
	$('#maxlengthMsg').html("您还可输入"+length+"字");

}


(function(){
	$(function(){
	//index
	var _dl=$('.header .login dl');
	_dl.hover(function(){
		$(this).children('dt').addClass('hover').children().css('color','#333');
		$(this).children('dd').show();
	},function(){
		$(this).children('dd').hide(10,function(){
			$(this).siblings('dt').removeClass('hover').children().css('color','#fff');
		});
	})

	
	//首页banner下面的三个交互效果
	var oThre=$('.left .mb_10 .li');
	oThre.hover(function(){
		$(this).children('em').css('text-decoration','underline');
	},function(){
		$(this).children('em').css('text-decoration','none');
	})
	var three=$('.left .mb_10 .li i');
	three.hover(function(){
		var _index=$(this).parent().index();
		switch(_index){
			case 0:
				$(this).removeClass('pos1').addClass('pos1a');
			break;
			case 1:
				$(this).removeClass('pos2').addClass('pos2a');
			break;
			case 2:
				$(this).removeClass('pos3').addClass('pos3a');
			break;
			default:;
		}
	})
	
	//nav hover事件
	
	/*var navLi=$('.nav li');
	navLi.hover(function(){
		if($(this).index()==1||$(this).index()==3||$(this).index()==5){
			$(this).addClass('cur_two').children('dl').show();
		}
	},function(){
		if($(this).index()==1||$(this).index()==3||$(this).index()==5){
			$(this).children('dl').hide(10,function(){
				$(this).parent().removeClass('cur_two');
			});
		}
	})*/
	var navLi=$('.nav li');
	navLi.hover(function(){
		if($(this).index()==1){
			$(this).addClass('cur_two').children('dl').show();
		}
	},function(){
		if($(this).index()==1){
			$(this).children('dl').hide(10,function(){
				$(this).parent().removeClass('cur_two');
			});
		}
	})
	
	//得到失去焦点
	$('.module .money,.userName,.input-all').focus(function(){
		$(this).css('background','none').removeClass('gray_border').addClass('blue_border');
	}).blur(function(){
		var Val=$(this).val();
		if(Val==""){
		$(this).removeClass('blue_border').addClass('gray_border').css('background','');
		}else{
			
		$(this).removeClass('blue_border').addClass('gray_border');	
		}
	})
	
	//.input_all,
	/*$('.input-all').focus(function(){
		$(this).css('background','none').removeClass('gray_border').addClass('blue_border');
	}).blur(function(){
		$(this).removeClass('blue_border').addClass('gray_border');
	})*/
	
	$('.userName1').focus(function(){
		$(this).removeClass('gray_border').addClass('blue_border');
	}).blur(function(){
		$(this).removeClass('blue_border').addClass('gray_border');
	})
	
	//倒计时
	try{
		$('.imgLists').jcarousel({
			wrap: 'circular',
			auto: 0,
			scroll:1,
			animation:1500
		});
		
		//
	   function toDouble(num){
			if(num<10){
				return '0'+num;
			}else{
				return ''+num;
			}
		}
	   var oImg=document.getElementById('div1_index').getElementsByTagName('img');
		function GetRTime(){
		   var EndTime= new Date('2014/11/4 23:59:00'); //截止时间3/
		   var NowTime = new Date();
		   var t =EndTime.getTime() - NowTime.getTime();
		   var d=Math.floor(t/1000/60/60/24);
		   var h=Math.floor(t/1000/60/60%24);
		   var m=Math.floor(t/1000/60%60);
		   var s=Math.floor(t/1000%60);
		   var str1=""+toDouble(h)+toDouble(m)+toDouble(s);
		   for(var i=0;i<oImg.length;i++){
				oImg[i].src='images/'+str1.charAt(i)+'.jpg';
		   }
		   
		   
	   }
	   setInterval(GetRTime,1000);
	   GetRTime();
	   
	   //登录轮播
	
	   
	}catch(err){
	}
	
		/*function GetRTimes(date){
		   var EndTime= new Date(date); 
		   var NowTime = new Date();
		   var t =EndTime.getTime() - NowTime.getTime();
		   var d=Math.floor(t/1000/60/60/24);
		   var h=Math.floor(t/1000/60/60%24);
		   var m=Math.floor(t/1000/60%60);
		   var s=Math.floor(t/1000%60);
		   $('.W650 .top span').html('剩余时间 ：'+d+'天'+h+'时'+m+'分'+s+'秒');
		   $('#begin').html('即将开始'+"<span class='white font14 pl20'>("+d+'天'+h+'时'+m+'分'+s+'秒)</span>');
		}
		 
		GetRTimes('2014/10/18 23:00:00');
		setInterval(function(){
			GetRTimes('2014/10/18 23:00:00');
		},1000)*/
		
		
		
	//投标hover事件
	$('.table_index tr:last').find('td').css('border-bottom','none');
	var tabTr=$('.table_index tr:not(:first)');
	tabTr.hover(function(){
		$(this).css('background','#fbfbfb');
	},function(){
		$(this).css('background','none');
	})
	
	//理财中心/////////////////////////////////////////////////
	//金额加减
	try{
		var oPlus=document.getElementById('plus');
		var oJian=document.getElementById('jian');
		var oText=document.getElementsByName('num')[0];
		
		
		oJian.onclick=function(){
			var oFvalue=parseInt(oText.value);
			if(oFvalue>2000){
				if(oFvalue%1000=='0'){
					oFvalue-=1000;
					oText.value=oFvalue;
					this.style.backgroundPosition='-42px -44px';
				}else{
					alert('亲，您输入的数值不是1000的整数倍，请重新输入^_^！')
				}
				
			}else{
				this.style.backgroundPosition='-1px -44px';
			}
		}
		oJian.onmouseover=function(){
			
			this.style.backgroundPosition='-83px -44px';
			
			
		}
		oJian.onmouseout=function(){
			var oFvalue=parseInt(oText.value);
			if(oFvalue<=2000){
				this.style.backgroundPosition='-1px -44px';
			}else{
				this.style.backgroundPosition='-42px -44px';
			}
			
		}
		oPlus.onclick=function(){
			var oFvalue=parseInt(oText.value);
			if(oFvalue<100000){
				if(oFvalue%1000=='0'){
					oFvalue+=1000;
					oText.value=oFvalue;
					oJian.style.backgroundPosition='-42px -44px';
				}else{
					alert('亲，您输入的数值不是1000的整数倍，请重新输入^_^！')
				}
				
			}else{
				this.style.backgroundPosition='-1px -1px';
			}
		}
		oPlus.onmouseover=function(){
			this.style.backgroundPosition='-83px -1px';
		}
		oPlus.onmouseout=function(){
			var oFvalue=parseInt(oText.value);
			if(oFvalue>=100000){
				this.style.backgroundPosition='-1px -1px';
			}else{
				this.style.backgroundPosition='-42px -1px';
			}
			
		}
	}catch(err){
	}
	//selected
		
		$('.tabSelect .topa li').click(function(){
			var oIndex=$(this).index();
			$(this).addClass('cur').siblings().removeClass('cur');
			$('.show-Div .com').eq(oIndex).show().siblings().hide();
		})
		$('.tabSelect .topa li').eq(0).click();
	
		$('.check a img').hover(function(){
			$(this).parent('a').siblings('span').show();
		},function(){
			$(this).parent('a').siblings('span').hide();
		})
		
	
	//在线客服//////////////////////////////////////////////////////////
	//返回顶部
	
	function goTopEx(){
        
        function getScrollTop(){
                return document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;
            }
        function setScrollTop(value){
                document.documentElement.scrollTop?document.documentElement.scrollTop=value:document.body.scrollTop=value;
            }    
        window.onscroll=function(){
			getScrollTop()>0?obj.style.display="block":obj.style.display="none";
			var scrollTop=$(document).scrollTop();
			var wHeight=$(window).height();
			if($('.foot1').size()>0){
				var fTop=$('.foot1').offset().top;
			}
			
			
			
		}
		var obj=document.getElementById("tbar");
        obj.onclick=function(){
            var goTop=setInterval(scrollMove,10);
            function scrollMove(){
                    setScrollTop(getScrollTop()/1.1);
                    if(getScrollTop()<1)clearInterval(goTop);
                }
        }
    }
	//--三国用----
	function goTopEx02(){
        
        function getScrollTop(){
                return document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;
            }
        function setScrollTop(value){
                document.documentElement.scrollTop?document.documentElement.scrollTop=value:document.body.scrollTop=value;
            }    
        window.onscroll=function(){
			//getScrollTop()>0?obj.style.display="block":obj.style.display="none";
			var scrollTop=$(document).scrollTop();
			var wHeight=$(window).height();
						
		}
		var obj=document.getElementById("tbarout");
		var fanhui=document.getElementById("tbar");
        fanhui.onclick=function(){
            var goTop=setInterval(scrollMove,10);
            function scrollMove(){
                    setScrollTop(getScrollTop()/1.1);
                    if(getScrollTop()<1)clearInterval(goTop);
                }
        }
    }
	//--三国end----
	
	
	function toolbar(){
		//+"<a href='javascript:;' class='float-top blue' onClick='onMessage()'>意见反馈</a>"
		//"<a href='javascript:;' class='float-top blue' onClick='onMessage()'>意见反馈</a>"   "<a href='http://o.niwodai.com/' rel='nofollow'  class='float-top blue' target='_blank'>返回旧版</a>"+
		var html = "<div class='floatbox01'>"+"<a href='/daikuan/jiekuan.html' rel='nofollow'  class='float-top blue' target='_blank'>申请借款</a>"+"<a href='javascript:;' rel='nofollow'  class='float-top blue' onClick='onMessage()'>意见反馈</a>"+"<div class='box_mes'><textarea class='textarea' id='feedbackText' maxlength='200' onkeyup='change(this)'></textarea><span id='maxlengthMsg' class='fl'></span><a class='btn btnSize_4 btn_blue fr mt_5' rel='nofollow'  id='feedbackBtn' href='javascript:;' onClick='feedbackSubmit()'>提交</a></div>"+
				"<a id='onlineQQService' rel='nofollow'  class='serving blue'>"+
				"<i></i>在线客服</a>"+
				"<a href='javascript:;' rel='nofollow' class='back-top' rel='nofollow'  id='tbar' style='display:none; z-index:9999'><i></i></a></div>";
		var html2 = "<div class='floatbox02'>"+"<a href='/daikuan/jiekuan.html' rel='nofollow'  class='float-top blue' target='_blank'>申请借款</a>"+"<a href='javascript:;' rel='nofollow'  class='float-top blue' onClick='onMessage()'>意见反馈</a>"+"<div class='box_mes'><textarea class='textarea' id='feedbackText' maxlength='200' onkeyup='change(this)'></textarea><span id='maxlengthMsg' class='fl'></span><a class='btn btnSize_4 btn_blue fr mt_5' rel='nofollow'  id='feedbackBtn' href='javascript:;' onClick='feedbackSubmit()'>提交</a></div>"+
				"<a id='onlineQQService' rel='nofollow'  class='serving blue'>"+
				"<i></i>在线客服</a>"+
				"<a href='javascript:;' rel='nofollow' class='back-top' id='tbar' style='display:none; z-index:9999'><i></i></a></div>";
				
				
				
				
		if($(document.body).hasClass('index_niwo_1000')){
			$('body').append(html2);
		}else{
			$('body').append(html);
		}	
		
	}
	if($(document.body).width() > 1024){
		if($('div.worldClub').size()>0){
			goTopEx02();//--三国活动用到---
			
			
		}else{
			toolbar();
			goTopEx();
		}
		
	}
	
	
	//右border消失
	$('.center .class dd:last').css('border-right','none');
	
	//banner
	
	
		//accound center Start
		// Cookie操作方法只被该模板调用 | zhenhua.xi | 20140903
		function setcookie_common(name, value, expires){
			var expDays = expires;
			var expDate = new Date();
			expDate.setTime(expDate.getTime() + expDays);
			var expString = expires ? "; expires=" + expDate.toGMTString() : "";
			var pathString = ";path=/";
			document.cookie = name + "=" +escape(value) + expString + pathString;
		}
		var oNav=$('.user_nav h4');
		var oLis=oNav.nextAll().children();
		var selectLi=$('.select li');
		var oClose=$('.history .top img');
		var oDl=$('.pl24 dl');
		var oDt=$('.pl24 dl dt');
		var oDd=$('.pl24 dl dd');
		var selectplatform=$('.platform .select li')
		var selectshortcut=$('.new-shortcut li')
		var dialogbank=$('.new-shortcut-allbank li')
		var newselectshortcut=$('.new-shortcut-1 li')
		var newselectshortcut2=$('.new-shortcut-2 li')
		var newselectshortcut3=$('.new-shortcut-3 li')
		var tixianbank=$('#tixianbank li')
		
		var oT;
		oNav.click(function(){
			if($(this).next().css('display')=='block'){
				$(this).next().slideUp();
				$(this).find('i').css('background-position','0 -8px');
				//$(this).parent('h4').siblings('h4').children('i').css('background-position','0 0')
				
			}else{
				$(this).siblings('ul').slideUp();
				$(this).next().slideDown();
				$(this).children('i').css('background-position','0 0');
				$(this).siblings('h4').find('i').css('background-position','0 -8px')
			}
		})
		oLis.click(function(){
			$(this).parent('ul').siblings('h4').children('i').css('background-position','0 -8px');
			$(this).parent('ul').siblings('ul').slideUp();
			$(this).parent('ul').prev('h4').children('i').css('background-position','0 0');
			$(this).parent('ul').siblings('ul').find('li').attr('class','');
			$(this).addClass('active').siblings().removeClass('active');
			// uco：用户点击对象
			var uco = $(this).attr("pdata");
			// ucpo：用户点击父对象
			var ucpo =  $(this).parent('ul').attr("pdata");
			setcookie_common("uco",uco,1000*60*30);
			setcookie_common("ucpo",ucpo,1000*60*30);
		})
		// Cookie操作方法只被该模板调用 | zhenhua.xi | 20140903 | end
	
		// 帮助中心左侧菜单栏 | 区分账户中心左侧菜单栏 | 老样式 | zhenhua.xi | 20140904
		var helpNav = $('.help_nav h4');
		var helpLis = helpNav.next().children();

		helpNav.click(function(){
			if($(this).next().css('display')=='block'){
				$(this).next().slideUp();
				$(this).find('i').css('background-position','0 -8px');
			}else{
				$(this).next().slideDown();
				$(this).find('i').css('background-position','0 0');
			}
		})
		helpLis.click(function(){
			$(this).parent('ul').siblings('ul').find('li').attr('class','');
			$(this).addClass('active').siblings().removeClass('active');
		})		
		//bank select
		
		selectLi.bind('click',function(){//此处图片路劲根据开发改的，可以随意改
				$(this).children('img').attr('src','/2014/images/selected.gif').siblings('input').attr('checked',true)
				.parent().siblings().children('img').attr('src','/2014/images/null.png').siblings('input').attr('checked',false);
				$(this).parents('.other').siblings('.other').find('li').children('img').attr('src','/2014/images/null.png');
			
			$(this).parents('.bankSelect').hide(5,function(){
				oT=$('.main_wrapper');
				if(oT.hasClass('page5')){
					oDl.children('dd').html('请选择<i></i>');
				}else{
					oDl.children('dd').html('选择银行<i></i>');
				}		
			});
			if($(this).children('input').attr('checked')=='checked'){
				var className=$(this).attr('class');
				oDt.attr('class',className);
			}
			
			$("#bank101paymentDetail").hide();
			$("#bank102paymentDetail").hide();
			$("#bank103paymentDetail").hide();
			$("#bank104paymentDetail").hide();
			$("#bank105paymentDetail").hide();
			$("#bank106paymentDetail").hide();
			$("#bank107paymentDetail").hide();
			$("#bank108paymentDetail").hide();
			$("#bank109paymentDetail").hide();
			$("#bank110paymentDetail").hide();
			$("#bank111paymentDetail").hide();
			$("#bank112paymentDetail").hide();
			$("#bank113paymentDetail").hide();
			$("#bank114paymentDetail").hide();
			$("#bank115paymentDetail").hide();
			$("#bank116paymentDetail").hide();
			$("#"+$(this).attr('class')+"paymentDetail").show();
			
			
		})
		
		selectplatform.bind('click',function(){
			$(this).children('img').attr('src','images/selected.gif').siblings('input').attr('checked',true)
				.parent().siblings().children('img').attr('src','images/null.png').siblings('input').attr('checked',false);
				$(this).parents('.other').siblings('.other').find('li').children('img').attr('src','images/null.png');
			})
			
		//老用户已经绑定	
		selectshortcut.bind('click',function(){
				if($(this).hasClass('otherbank')){
						showCon_5();
					}
				else{
					$(this).addClass('selectli').siblings().removeClass('selectli');
					$('.bankMegTab').show();
					}
				  	  }
				)
		//新用户未绑定			
		newselectshortcut.bind('click',function(){
				if($(this).hasClass('otherbank')){
						showCon_5();
					}
				else{
					$(this).addClass('selectli').siblings().removeClass('selectli').hide();
					$('.otherbank').show();
					$('.bankMegTab').show();
					}
				  	 }
				)
				
		//弹出银行
		dialogbank.bind('click',function(){
				$(this).addClass('selectli').siblings().removeClass('selectli')
					}
				)
		//网银支付			
		newselectshortcut3.bind('click',function(){
				$(this).addClass('selectli').siblings().removeClass('selectli');
		})
		newselectshortcut2.bind('click',function(){
				$(this).addClass('selectli').siblings().removeClass('selectli');
				var newselectbank= $(this).children().children().attr('src');
				//alert(newselectbank)
				$('#newbank').attr('src',newselectbank)
		})
		
		tixianbank.bind('click',function(){
				$(this).addClass('selectli').siblings().removeClass('selectli');
				var newselectbank= $(this).children().children().attr('src');
				//alert(newselectbank)
				$('#newbank').attr('src',newselectbank)
		})
		
		oClose.click(function(){
			$(this).parents('.bankSelect').hide();
			var bankNo = "";
		    	//验证银行
		    	if(bankNo==""){
		    		$("input[name=bankRadio]").each(function () {
		        		if($("#"+this.id).attr("checked")=="checked"){
		        			bankNo = $("#"+this.id).val();
		        		}
		        	});
		    	}
		if(bankNo!='on'){
			$('#bank'+bankNo+'paymentDetail').show();
		}
			oT=$('.main_wrapper');
			if(oT.hasClass('page5')){
				oDl.children('dd').html('请选择<i></i>');
			}else{
				oDl.children('dd').html('选择银行<i></i>');
			}			
		})

		
		oDl.click(function(){
			var banS=$('.pl24 .bankSelect')[0];
			if(banS.style.display=='block'){
				$(this).siblings('.bankSelect').hide();
				oT=$('.main_wrapper');
				if(oT.hasClass('page5')){
					$(this).children('dd').html('请选择<i></i>');
				}else{
					$(this).children('dd').html('选择银行<i></i>');
}				
				var bankNo = "";
				//验证银行
				if(bankNo==""){
					$("input[name=bankRadio]").each(function () {
						if($("#"+this.id).attr("checked")=="checked"){
							bankNo = $("#"+this.id).val();
						}
					});
				}
				if(bankNo!='on'){
					$('#bank'+bankNo+'paymentDetail').show();
				}				
				//$(this).siblings('table').show();
			}else{
				$(this).siblings('.bankSelect').show();
				$(this).children('dd').html('收起<i></i>').children('i').css('background','url(/2014/images/jup.png) left top no-repeat');
				$(this).siblings('table').hide();
			}
		})
		

		//点击添加银行弹框
			//var oWinHeight,scrollTop;
			var plus=$('.history .plus');
			var plusBankBg=$('.plusBankBg');
			var showDiv=$('.plusBankBg');
			var showForm=$('.plusBank');
			var confir=$('.module .submit');
			var showForm1=$('.plusBank1');
			var oConfir=$('.confirm_cc');
			var btn_white=$('.bottom .btn_white');
			var closeBank=showForm.find('.plus_c');
			var closeBank1=showForm1.find('.plus_c');
			var closeConfirm=showForm1.find('.close_confirm');
			
			closeConfirm.click(function(){
				$(this).parents('.plusBank1').slideUp().siblings('.plusBankBg').hide(100);
			})
			
			
			plus.click(function(){
				showDiv.show();
				showForm.slideDown();
			})
			btn_white.click(function(){
				showDiv.hide();
				showForm1.slideUp();
			})
			closeBank.click(function(){
				$(this).parents('.plusBank').slideUp().siblings('.plusBankBg').hide(100);
			})
			
			
			confir.click(function(){
				showDiv.show();
				showForm1.slideDown();
			})
			closeBank1.click(function(){
				$(this).parents('.plusBank1').slideUp().siblings('.plusBankBg').hide(100);
			})
			//40%背景满屏
			function changeHeight(){
				oWinHeight=$(document).innerHeight()+'px';
				plusBankBg.css('height',oWinHeight);
			}
			changeHeight();
			window.onresize=function(){
				changeHeight();
			}
			
			//名字焦点
			
			$('.table_2 .back_e4').focus(function(){
				$(this).val('');
			})
		//accound center End
		
		//Safety Center Start
		
		var showNext=$('.showNext');
		showNext.click(function(){
			var $next=$(this).parents('tr').next();
			$next.find('.rightside').children('input').val('');
			$next.find('.error_1').hide();
			$next.find('#bankCardAdd').addClass('none').siblings().removeClass('none');
			$next.find('#changePhoneByOld').addClass('none').siblings().removeClass('none');
			$next.toggleClass('none').siblings('.only').addClass('none');
		})
		
		
		$('.why i').hover(function(){
			$(this).siblings().show();
		},function(){
			$(this).siblings().hide();
		})
		//Safety Center End
		
		//我的特权 Start
		try{
			$('.imglist').jcarousel({
				wrap: 'circular',
				auto: 0,
				scroll:1,
				animation:1000
			});
			$('.btbanner .jcarousel-container .jcarousel-prev').hover(function(){
				$(this).css({'background-position':'54px 0'});
			},function(){
				$(this).css({'background-position':'0 0'});
			})
			$('.btbanner .jcarousel-container .jcarousel-next').hover(function(){
				$(this).css({'background-position':'18px 0'});
			},function(){
				$(this).css({'background-position':'36px 0'});
			});
		}catch(err){}
		
		var _aLis=$('.imglist li');
		_aLis.hover(function(){
			var jcarouselindex=$(this).attr('jcarouselindex');
			if(jcarouselindex%6==0){
				return false;
			}
			$(this).addClass('f7f');
			var oIndex=jcarouselindex%6-1;
			$('.showDiv .showDiv-child').eq(oIndex).show().siblings().hide();	
		},function(){
			$(this).removeClass('f7f');
		})
		_aLis.eq(0).trigger('mouseover');
		_aLis.each(function(){
			var oClass=$(this).children('.w60').attr('class')
			var reg=/[a-z]$/;
			var _boolean=reg.test(oClass);
			if(!_boolean){
				$(this).click(function(){
					$(this).addClass('cur').siblings().removeClass('cur');	
				})
			}
		})
		
		//我的特权 End
		
		//Tab切换
		$('.module .tab_u span').click(function(){
			//var _index=$(this).index();
			$(this).addClass('active').siblings().removeClass('active');
			$('.classc-con .classc-com').eq($(this).index()).show().siblings().hide();
		})
		
		$('.table_2 .textarea').focus(function(){
			$(this).text('');
		})
		
		//
		var perLi=$('.stepCon .percent li');
		perLi.click(function(){
			$(this).addClass('cur').children('img').css('display','block').parent().siblings().removeClass('cur').children('img').css('display','none');
			
		})
		perLi.eq(0).click();
		
		
		$('.stepCon .hover').hover(function(){
			$('.zhekou').show();
		},function(){
			$('.zhekou').hide();
		})
		
		$('.table35 .why').hover(function(){
			$(this).siblings().show();
		},function(){
			//$(this).siblings().hide();
		})
		
		
		
		//激活礼品券
		
		
		$("#sn1").focus();
        //自动跳到下一个输入框  
        $("input[name^='sn']").each(function() {
            $(this).keyup(function(e) {
                e = window.event || e;
                var k = e.keyCode || e.which;
                if (k == 8) {   //8是空格键
                    if ($(this).val().length < 1) {
                        $(this).prev().focus();
                        $(this).prev().focus(function() {
                            var obj = e.srcElement ? e.srcElement: e.target;
                            if (obj.createTextRange) { //IE浏览器
                                var range = obj.createTextRange();
                                range.moveStart("character", 4);
                                range.collapse(true);
                                range.select();
                            }
                        });
                    }
                } else {
                    if ($(this).val().length > 3) {
                        $(this).next().focus();
                    }
                }
            })
        });

        $("input[type='text'][id^='sn']").bind('keyup',
        function() {
            var len = $("#sn1").val().length + $("#sn2").val().length + $("#sn3").val().length + $("#sn4").val().length;
            /*if (len == 16) device_verify();*/
        });
		
		
		//contact
		var a=[ '地址：义乌市稠州北路800号金福源C区717-720室　　联系电话：0579-85138490', 
				'地址：郑州市金水区经三路32号财富广场4号楼1302室　　联系电话：0371-55195698', 
				'地址：天津市和平区新华路1、3、5号 多伦道23、25号 佳木斯道18号12B07室　　联系电话：022-60769032', 
				'地址：福州市鼓楼区五四路159号世界金龙大厦18楼C3、D2　　联系电话：0591-28065538', 
				'地址：武汉市新华路316号良友大厦6楼CD　　联系电话：027-85552165', 
				'地址：沈阳市沈河区中山路355号高登国际大厦806室　　联系电话：024-22818668', 
				'地址：重庆市江北区建新北路36号伊美大厦2302、2303室　　联系电话：023-67096300', 
				'地址：广州市天河区天河路490号壬丰大厦1806号房　　联系电话：020-38834006', 
				'地址：大连市中山区人民路23号虹源大厦2702、2703室　　联系电话：0411-39986918', 
				'地址：合肥市庐阳区濉溪路278号财富广场首座1301室　　联系电话：0551-65776750', 
				'地址：南昌市青云谱区解放西路49号明珠广场H座2205、2206室　　联系电话：0791-88463893', 
				'地址：济南市市中区经四路万达商业广场B座1910、1911室　　联系电话：0531-55700336', 
				'地址：北京市朝阳区建国路93号院8号楼2308、2309室　　联系电话：010-52473373', 
				'地址：深圳市罗湖区嘉宾路与南湖路交汇处北侧深华商业大厦办公1008室　　联系电话：0755-82117671', 
				'地址：南京市中山南路49号南京商茂世纪广场16层A1座　　联系电话：025-66673351', 
				'地址：成都武侯区人民南路四段27号1栋1单元9楼8号、7号　　联系电话：028-85569761', 
				'地址：无锡市崇安区人民中路220号1504、1505室　　联系电话：0510-88570201', 
				'地址：苏州市新区狮山路88号7层715、717室　　联系电话：13584298785' 
			];

		var conLis=$('.content .contact li');
		conLis.click(function(){
			var _index=$(this).index();
			var adres=$('.address');
			adres.show().html(a[_index]);
			$(this).addClass('cur').siblings().removeClass('cur');
		})
		conLis.eq(0).trigger('click');
		//banner点位置
		
		
		
		
		//你我贷对象 Text Xi {
		try{
			function NWD(){
				// 日期控件配置 | foramt | yy-mm-dd | yy/mm/dd
				this.getDatepickerParam = function (foramt){
				return {
						closeText : '关闭',
						prevText : '&#x3c;上月',
						nextText : '下月&#x3e;',
						changeMonth : true,
						changeYear : true,
						yearRange : '-100:+100',
						currentText : '今天',
						monthNames : [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月',
								'九月', '十月', '十一月', '十二月' ],
						monthNamesShort : [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月',
								'九月', '十月', '十一月', '十二月' ],
						dayNames : [ '星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六' ],
						dayNamesShort : [ '周日', '周一', '周二', '周三', '周四', '周五', '周六' ],
						dayNamesMin : [ '日', '一', '二', '三', '四', '五', '六' ],
						weekHeader : '周',
						dateFormat : foramt || "yy-mm-dd",
						firstDay : 1,
						isRTL : false,
						showMonthAfterYear : true,
						yearSuffix : '年'
					};
				};
			}
			var nwd = new NWD(); 
			
		}catch(err){}
		
	});
})()





$(function(){
	(function(){
		
		 ////用户中心首页投资贷款切换-----------
		 $('.tab01 span').click(function(){
			var _index=$(this).index();
			$(this).addClass('active').siblings('span').removeClass('active');
			$('.content').children('.in').eq(_index).show().siblings('.in').hide();
			$('.content .imgout').hide();
			if($(this).html()=='我的借款'){
				$('.tab01 .r').hide();
				$('.iJkr').show();
				$('.iTzr').hide();
				}else{
					$('.tab01 .r').show();
					$('.iTzr').show();
					$('.iJkr').hide();
					};
		})
		$('.tab01 .r div').click(function(){
			$(this).hide().siblings().show();
			$('.content .imgout').slideToggle(500);		
		});
		//-------投资抵用券选-------------------------
		/*(function (D, L,C) {
				L.hide();
				D.toggle(
					function () {
					
						D.parents(".nr").addClass("tan");
						L.show(300).focus();
					},
					function () {
						var F = L.is(':hidden');
						L.hide(300);
						if (F != true) {
							setTimeout(function () {
								D.parents(".nr").removeClass('tan');
							}, 300);
						}
					}
				);
				C.click(function(){
					var F = L.is(':hidden');
						L.hide(300);
						if (F != true) {
							setTimeout(function () {
								D.parents(".nr").removeClass('tan');
							}, 300);
						}
					});
			})($('.xialai'), $('.xiala-kuai'), $('.sq'));*/
			//--投资详情页--输入框-------------
			$(".touzi02").each(function(){
				var thisText=$(this).text();
				$(this).focus(function(){
					if(thisText=='请输入您的留言内容...'){
						$(this).text('').removeClass('fc_9');	
					}else{
						return false;
						}
					}).blur(function(){
						if(thisText==''){
							$(this).text('请输入您的留言内容...').addClass('fc_9');	
						}else{
							return false;
							}	
					})
			});
			//--输入框内提示-------------
			$(".touzi01 .input_1").each(function(){
				 var thisVal=$(this).val();
				 if(thisVal!=""){
				   $(this).siblings("span").hide();
				  }else{
				   $(this).siblings("span").show();
				  }
				 $(this).focus(function(){
				   $(this).siblings("span").hide();
				  }).blur(function(){
					var val=$(this).val();
					if(val!=""){
					 $(this).siblings("span").hide();
					}else{
					 $(this).siblings("span").show();
					} 
				  });
				});	
			//--小图标上的提示弹框----------------------	
			$('.tkOut').hover(function(){
				$(this).children('.tkIn').show();	
			},function(){
				$(this).children('.tkIn').hide();
			});
		//---领礼添加修改地址-----------------
		$('.xugai1').click(function(){
				$('.add_out').slideDown();	
		});
		$('.add_btn').click(function(){
			$('.add_out').slideUp();
		});
		   var $hoverLi=$('.add_0 .line1');
		   $hoverLi.children('a').hide();
		   $hoverLi.live('mouseover',function(){
			  var $clickA=$(this).children('a:first')
				if($(this).attr('class')=='line1'){
					$(this).addClass('bg').children('a').show();
				}else{
					return false;
				}
				$clickA.click(function(){
					$(this).parent().addClass('bg1').children('a').show().siblings('input').attr('checked',true);
					$(this).siblings('.line1').siblings('.line2').slideDown(); 
					$(this).parent('.line1').each(function() {
						$(this).siblings().removeClass('bg1 bg').children('input').attr('checked',false).siblings('a').hide();
                    })
				})
				
			})
			
			
			 $hoverLi.live('mouseout',function(){
				if($(this).attr('class')=='line1 bg'){
						
						$(this).removeClass('bg').children('a').hide()
					}else{
						return false;
						}	
			})
		   
		   
			
			$('.add_0 .add_l').click(function(){
				$(this).addClass('bg1').children('input').attr('checked',true);
				$(this).siblings('.line1').removeClass('bg1 bg').children('input').attr('checked',false).siblings('a').hide();
				$(this).siblings('.line2').slideDown();	
			});
		//--用户中心TAB切换----------------
		function SwapTab(name,title,content,Sub,cur){
		  $(name+' '+title).mousedown(function(){
			  $(this).addClass(cur).siblings().removeClass(cur).parent().siblings('.tab_content').find('.tj_nr01').hide();
			  $(content+' '+Sub).eq($(name+' '+title).index(this)).show().siblings().hide();
		  });
		};
		new SwapTab(".tab_u","span",".tab_content",".nr","active");
		new SwapTab(".tab_y","span",".tab_content",".nr","active"); 
		new SwapTab(".login_tit",".tab_btn",".tab_box",".nr","active");/*全局登录*/
		//理财计划里小问号上的注释-----2014-8-18作废
		$('.tishi_w').hover(function(){
			$(this).parent('a').siblings('.showCon').show();
		},function(){
			$(this).parent('a').siblings('.showCon').hide();
		})
		//--理财计划---修改下的弹框 2014-8-18作废------------
		$('.w250 .xg0').click(function(){
			var tkDiv=$('.w250 .tk').css("display");
			if(tkDiv=="block"){
				$(this).siblings('.tk').slideUp(200);
			}else{
				$(this).siblings('.tk').slideDown(200);
			}
		})
		$('.w250 .tk .xg1').click(function(){
			$(this).parents('.tk').slideUp(200);
		});
		//--理财计划---修改下的弹框 2014-8-18启动------------	
		$('.last .xg0').click(function(){
			var tkDiv=$('.last .tk').css("display");
			if(tkDiv=="block"){
				$(this).siblings('.tk').slideUp(200);
			}else{
				$(this).siblings('.tk').slideDown(200);
			}
		})
		$('.last .tk .xg1').click(function(){
			$(this).parents('.tk').slideUp(200);
		});
		//--消息设置中的隔行换色----------------
		$('.msg_set dd:even').addClass('ddbg');
	//-消息中心-----------
	$('.msg_all li:even').addClass('bg')
		var selectAll=$('.all_0');
		var oBtn=$('.remove0');
		var aLis=$('.msg_all li:gt(0)');
		var _index=aLis.children('.haead').find('span').not('.col_1');
		_index.click(function(){
			var cDiv=$(this).parent().siblings('.content')
			$(this).parent('div').removeClass('aHold')
			if(cDiv.css('display')!='block'){
			$(this).parent().siblings().slideDown().parents('li').siblings().children('.content').slideUp();
			$(this).parent('div').removeClass('aHold')	
			}else{
				$(this).parent().siblings().slideUp();	
			}
		})
		
		selectAll.click(function(){
			$(this).parents('li').siblings().find('.col_1').children().attr('checked',this.checked);
		})	
		oBtn.click(function(){
			var oLis=$(this).parent('.top').siblings('.msg_all').find("li:not('.diyi')");
			for(var i=0;i<oLis.length;i++){
				if(oLis.eq(i).find('input').attr('checked')=='checked'){
					oLis.eq(i).remove();
				}
			}
			
		});
		//---用户中心搜索分类----------------
		$('.a_btn span a:gt(6)').hide();
		$('.a_btn .more').toggle(function(){
			$(this).text('隐藏').siblings().children('a').show()
			
			},function(){
				$(this).text('更多').siblings().children('a:gt(6)').hide();	
			});
		
		$('.a_btn .lei').click(function(){
			$(this).addClass('active').siblings('.lei').removeClass('active');
		});

		$('.tj_btn01').toggle(
		  function () {
			$('.tj_nr01').slideDown();
		  },
		  function () {
			$('.tj_nr01').slideUp();
		  });
		  
		  //---底部SEO用---------------
			(function(){
				var O = $('.lunbo1'),
					H = _H = O.children('li').height(),
					N = O.children('li').length;
					for(var i = 0; i<N-1; i++){
						$(".lunbo1").animate({marginTop: '-'+_H+'px'}, 1000);
						_H = H+_H;
					}
			})();
		//---标详情页表单初始文字---------
			
			function Focus(ele,className){
				$(ele).focus(function(){
					$(this).removeClass(className);
				});
				$(ele).blur(function(){
					
					var txtVal = $(this).val();
					if(txtVal == ""){
						
						$(this).addClass(className);
					};	
				});
			}
			Focus('.inputval1','ibg1');
			Focus('.userName1','user_bg1');
			Focus('.userName2','user_bg2');
			Focus('.yu','user_bg3');
		//----协议选择-------
		$('.xieyi22 .xieyibox').click(function(){
			$(this).siblings('.xieyidown').slideToggle(100);
			$('.xieyidown .close').click(function(){
				$(this).parents('.xieyidown').slideUp(100);
			})
		});
		
		
		//--用户中心新用户提示泡泡------------
		/*$('.bubble_t3 .pp').click(function(){
			$(".bubble_t3").hide();	
		});
		$('.airal').mousemove(function(){
			$(".bubble_t2").show();	
		});
		$('.bubble_t2 .close1').click(function(event) {
			$(".bubble_t2").hide();
		});*/
		
		//--用户中心新用户提示泡泡------------
		$('.yellow_pp .pp').click(function(){
			$(this).parents('.yellow_pp').parent("span").removeAttr("style");
			$(this).parents('.yellow_pp').remove();
			
		});

		//--2014-9-25-头部顶加的新浪和微信泡泡--
		$('.toptk').hover(function(){
			$(this).children('.tk').show()
		},function(){
			$(this).children('.tk').hide()
		});
		//----充值页底下，选择充值方式----------------
		var $aBtn = $('.top_up .modify');
		var $options1 = $('.top_up .way_box :radio');
		$aBtn.click(function(){
			$(this).hide().next('.way_box').show();
		});
		$options1.click(function(){
			$(this).parents('.way_box').removeClass('gray_out').addClass('blue_out').siblings('.way_box').removeClass('blue_out').addClass('gray_out');
		});
		
		//---债权列表筛选
		$(".type .line_1 label").click(function(){
			$(this).parent().siblings('').children('label').removeClass('first');
			$(this).toggleClass('cur');
		})
		$(".type .all").click(function(){
			$(this).parent().siblings().children('label').removeClass('cur')
			$(this).addClass('first');
		});
		//--债权列表筛选的展开收起---
		$('.on_off a').toggle(function(){
			$(this).html('收起'+' <i></i>').attr('class','a_off')
			$(this).parents('.itmo_off').siblings('.on_off_box').slideDown(200);
		},function(){
			$(this).html('展开'+ '<i></i>').attr('class','a_on')
			$(this).parents('.itmo_off').siblings('.on_off_box').slideUp(200);
			
		});
		
		//----债权列表悬停加框--------
		$('.add_bor').hover(
			function () {
				$(this).siblings().addClass('mod_bor_col')
			},
			function () {
				$(this).siblings().removeClass('mod_bor_col')
			}
		);
		//--债权列表上的排序-----
		$('.item_sorting a').toggle(
			function () {
				$(this).siblings('a').removeClass();
				$(this).attr('class','up')
			},
			function () {
				$(this).siblings('a').removeClass();
				$(this).attr('class','down')
			}
		);
		//----债权列表侧边导航------
		$('.item_nav li a').click(function(){
			//alert($(this).parent().siblings().children().html())
			$(this).addClass('cur').parent().siblings().children().removeClass();	
		});

		
		
	})();//------end---------

});

//银行卡分段输出
  $(document).ready(function() {
        $("#i_bank").keyup(function(event) {
        	this.value =this.value.replace(/\s/g,'').replace(/(\d{4})(?=\d)/g,"$1 ");
            var str = $('#i_bank').val();
            $(".j_bank").html(str);
        })
     
        $("#i_bank").focus(function(){
        	$(".touzi01 i").fadeTo(300,1)
            $(".touzi01 i").show();

        }).blur(function(){
            $(".touzi01 i").hide();
        });
    });

//6月19右下角在线客服
$(function(){
    var protocol = document.location.protocol.toLowerCase();
    
	// Adobe | Begin | zhenhua.xi | 20141103
	$("#onlineQQService,#onlineQQService1").click(function(){
		var s = s_gi(s_account);
		s.linkTrackVars = "events";
		s.linkTrackEvents = "event22";
		s.events = "event22"; //在线客服点击事件
		npo.tl(this,'o','zxkfdj');
	});
	// Adobe | End
    //公共右下角在线客服
    var onlineQQService = $("#onlineQQService");
    if(onlineQQService){
    	if(protocol == "https:"){
            onlineQQService.attr("href","http://b.qq.com/webc.htm?new=0&sid=4000817888&eid=218808P8z8p8x8y8K8P8q&o=www.niwodai.com&q=7");
            onlineQQService.attr("target","_blank");
        }else{
            onlineQQService.attr("href","javascript:void(0)");
    		$.getScript("http://wpa.b.qq.com/cgi/wpa.php", function(){
    			BizQQWPA.addCustom({
            	        aty: '0', //指定工号类型,0-自动分流，1-指定工号，2-指定分组
            	        nameAccount: '4000817888', //营销 QQ 号码
            	        selector: 'onlineQQService' //WPA 被放置的元素
            	});
    		});
        }
    }
    
    //解决输入框有值的情况下出现提示语bug
	$(".user_bg1").each(function(){
		var unameVal=$(this).val();
		if(unameVal){
			$(this).removeClass("user_bg1");
		}
	});
	$(".user_bg2").each(function(){
		var unameVal=$(this).val();
		if(unameVal){
			$(this).removeClass("user_bg2");
		}
	});
    
});
 
<!-- WPA Button End -->

$(document).ready(function(){
//banner
//账户中心banner
(function($){$.fn.extend({"banner":function(options){var defaluts={eml:".page,.prev,.next,.title",direction:"lr",mode:"slide",pages:true,btns:true,title:true,autoanimate:true,ease:"easeInOutElastic",cycle:true,cycleType:true,auto:2000,animation:1000};var options=$.extend(defaluts,options);return this.each(function(){var op=options,obj=$(this),objLi=obj.find("li"),objSpan=obj.find(".page span"),lenB=obj.find("li").length,prev=obj.find(".prev"),next=obj.find(".next"),title=obj.find(".title"),f=true;if(op.direction=="ud"&&op.mode=="slide"){var Scr=obj.find("ul");var Scrw=Scr.find("li").outerWidth();var Scrh=Scr.find("li").outerHeight();Scr.find("li").height(Scrh);Scr.height(Scrw*lenB);Scr.height(Scrh)}if(op.direction=="lr"&&op.mode=="slide"){var Scr=obj.find("ul");var Scrw=Scr.find("li").outerWidth();var Scrh=Scr.find("li").outerHeight();Scr.find("li").width(Scrw);Scr.width(Scrw*lenB);Scr.height(Scrh)}obj.find(".cont").text(lenB);var page="<div class='page'>";for(i=1;i<=lenB;i++){page+="<span>"+i+"</span>"}page+="</div>";obj.append(page);var page=obj.find(".page span");page.eq(0).addClass("current");var imgAlt=objLi.eq(0).find("img").attr("alt");obj.find(".alt").text(imgAlt);if(op.pages==false){obj.find(".page").hide()}if(op.btns==false){prev.hide();next.hide()}if(op.title==false){title.hide()}if(op.mode=="slide"){objLi.css({"float":"left"})}else{if(op.mode=="fade"){objLi.css({"position":"absolute","top":0,"left":0,"display":"none"});objLi.eq(0).show()}}if(op.unlimited==true){var n=0;objLi.each(function(){$(this).attr("indexNum",n++)})}if(op.cycle==true&&op.cycleType==true){if(op.direction=="ud"&&op.mode=="slide"){objLi.closest("ul").css({"position":"relative","top":-Scrh});objLi.css({"position":"absolute","left":0,"display":"none","top":Scrh,"z-index":1});objLi.eq(0).css({"display":"block","z-index":5})}else{if(op.direction=="lr"&&op.mode=="slide"){objLi.closest("ul").css({"position":"relative","left":-Scrw});objLi.css({"position":"absolute","top":0,"display":"none","left":Scrw,"z-index":1});objLi.eq(0).css({"display":"block","z-index":5})}}}page.live("mousemove",function(){if(!$(this).hasClass("current")){var curr=page.index(this)+1;imgAlt=objLi.eq(page.index(this)).find("img").attr("alt");obj.find(".curr").text(curr);obj.find(".alt").text(imgAlt);if(op.direction=="ud"&&op.mode=="slide"&&!Scr.is(":animated")){if(op.cycle==true&&op.cycleType==true){var ui=obj.find(".page span.current").index();var ut=$(this).index();if(ut==lenB-1&&ui==0){f=false}else{if(ut==0&&ui==lenB-1){f=true}else{if(ut>ui){f=true}else{f=false}}}if(f){Scr.css("top",-Scrh);Scr.find("li").eq($(this).index()).css({"top":Scrh*2,"display":"block"});Scr.stop(true,true).animate({"top":-Scrh*2},op.animation,op.ease,function(){Scr.css("top",-Scrh);Scr.find("li").eq(ui).hide();Scr.find("li").eq(ui).css({"z-index":1});Scr.find("li").eq(ut).css({"z-index":5,"top":Scrh})})}else{Scr.css("top",-Scrh);Scr.find("li").eq($(this).index()).css({"top":0,"display":"block"});Scr.stop(true,true).animate({"top":0},op.animation,op.ease,function(){Scr.css("top",-Scrh);Scr.find("li").eq(ui).hide();Scr.find("li").eq(ui).css({"z-index":1});Scr.find("li").eq(ut).css({"z-index":5,"top":Scrh})})}}else{Scr.stop(true,true).animate({marginTop:-Scrh*($(this).index())},op.animation,op.ease)}$(this).addClass("current").siblings().removeClass("current")}else{if(op.direction=="lr"&&op.mode=="slide"&&!Scr.is(":animated")){if(op.cycle==true&&op.cycleType==true){var i=obj.find(".page span.current").index();var t=$(this).index();if(t==lenB-1&&i==0){f=false}else{if(t==0&&i==lenB-1){f=true}else{if(t>i){f=true}else{f=false}}}if(f){Scr.css("left",-Scrw);Scr.find("li").eq($(this).index()).css({"left":Scrw*2,"display":"block"});Scr.stop(true,true).animate({"left":-Scrw*2},op.animation,op.ease,function(){Scr.css("left",-Scrw);Scr.find("li").eq(i).hide();Scr.find("li").eq(i).css({"z-index":1});Scr.find("li").eq(t).css({"z-index":5,"left":Scrw})})}else{Scr.css("left",-Scrw);Scr.find("li").eq($(this).index()).css({"left":0,"display":"block"});Scr.stop(true,true).animate({"left":0},op.animation,op.ease,function(){Scr.css("left",-Scrw);Scr.find("li").eq(i).hide();Scr.find("li").eq(i).css({"z-index":1});Scr.find("li").eq(t).css({"z-index":5,"left":Scrw})})}}else{Scr.stop(true,true).animate({marginLeft:-Scrw*($(this).index())},op.animation,op.ease)}$(this).addClass("current").siblings().removeClass("current")}else{if(op.mode=="fade"){if(objLi.eq(page.index(this)).is(":hidden")){objLi.stop(true,true).fadeOut(op.animation).eq(page.removeClass("current").index($(this).addClass("current"))).fadeIn(op.animation)}}}}}});if(op.autoanimate==true){var index=1;var time=setInterval(function(){page.eq(index).mousemove();index++;if(index==lenB){index=0}},op.auto);obj.find(op.eml).hover(function(){clearInterval(time)},function(){index=obj.find(".page span.current").index()+1;if(index==lenB){index=0}time=setInterval(function(){page.eq(index).mousemove();index++;if(index==lenB){index=0}},op.auto)});objLi.hover(function(){clearInterval(time)},function(){index=obj.find(".page span.current").index()+1;if(index==lenB){index=0}time=setInterval(function(){page.eq(index).mousemove();index++;if(index==lenB){index=0}},op.auto)})}prev.mousemove(function(){index=obj.find(".page span.current").index()-1;prev.removeClass("disabled");next.removeClass("disabled");if(op.cycle!=true){if(index==-1||index==0){prev.addClass("disabled")}if(index==-1){return false}}page.eq(index).mousemove()});next.mousemove(function(){prev.removeClass("disabled");next.removeClass("disabled");index=obj.find(".page span.current").index()+1;if(op.cycle!=true){if(index==lenB||index==lenB-1){index=lenB-1;if(index==lenB-1||index==lenB){next.addClass("disabled")}}}else{if(index==lenB){if(op.cycle!=true){index=lenB-1}else{index=0}}}page.eq(index).mousemove()})})}})})(jQuery);
$('.user_banner').banner({
		mode:'fade', //动画方式 fade(渐隐渐现) / slide (左右滑入)
		pages:true,	 //是否需要pages true/false
		btns:true,	//是否需要btns true/false
		title:true,	//是否需要title true/false
		auto:4000,	//停留时间
		animation:1000 //动画时间
	});
	});

	/*! PPmoney-v4.01 2015-06-02 10:25:44 */!function(a,b){function c(a){return J.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}function d(a){if(!sc[a]){var b=G.body,c=J("<"+a+">").appendTo(b),d=c.css("display");c.remove(),("none"===d||""===d)&&(oc||(oc=G.createElement("iframe"),oc.frameBorder=oc.width=oc.height=0),b.appendChild(oc),pc&&oc.createElement||(pc=(oc.contentWindow||oc.contentDocument).document,pc.write((J.support.boxModel?"<!doctype html>":"")+"<html><body>"),pc.close()),c=pc.createElement(a),pc.body.appendChild(c),d=J.css(c,"display"),b.removeChild(oc)),sc[a]=d}return sc[a]}function e(a,b){var c={};return J.each(vc.concat.apply([],vc.slice(0,b)),function(){c[this]=a}),c}function f(){rc=b}function g(){return setTimeout(f,0),rc=J.now()}function h(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function i(){try{return new a.XMLHttpRequest}catch(b){}}function j(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d,e,f,g,h,i,j,k,l=a.dataTypes,m={},n=l.length,o=l[0];for(d=1;n>d;d++){if(1===d)for(e in a.converters)"string"==typeof e&&(m[e.toLowerCase()]=a.converters[e]);if(g=o,o=l[d],"*"===o)o=g;else if("*"!==g&&g!==o){if(h=g+" "+o,i=m[h]||m["* "+o],!i){k=b;for(j in m)if(f=j.split(" "),(f[0]===g||"*"===f[0])&&(k=m[f[1]+" "+o])){j=m[j],j===!0?i=k:k===!0&&(i=j);break}}!i&&!k&&J.error("No conversion from "+h.replace(" "," to ")),i!==!0&&(c=i?i(c):k(j(c)))}}return c}function k(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);for(;"*"===j[0];)j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}return g?(g!==j[0]&&j.unshift(g),d[g]):void 0}function l(a,b,c,d){if(J.isArray(b))J.each(b,function(b,e){c||Sb.test(a)?d(a,e):l(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==J.type(b))d(a,b);else for(var e in b)l(a+"["+e+"]",b[e],c,d)}function m(a,c){var d,e,f=J.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&J.extend(!0,a,e)}function n(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;for(var h,i=a[f],j=0,k=i?i.length:0,l=a===fc;k>j&&(l||!h);j++)h=i[j](c,d,e),"string"==typeof h&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=n(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=n(a,c,d,e,"*",g)),h}function o(a){return function(b,c){if("string"!=typeof b&&(c=b,b="*"),J.isFunction(c))for(var d,e,f,g=b.toLowerCase().split(bc),h=0,i=g.length;i>h;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function p(a,b,c){var d="width"===b?a.offsetWidth:a.offsetHeight,e="width"===b?1:0,f=4;if(d>0){if("border"!==c)for(;f>e;e+=2)c||(d-=parseFloat(J.css(a,"padding"+Ob[e]))||0),"margin"===c?d+=parseFloat(J.css(a,c+Ob[e]))||0:d-=parseFloat(J.css(a,"border"+Ob[e]+"Width"))||0;return d+"px"}if(d=Db(a,b),(0>d||null==d)&&(d=a.style[b]),Kb.test(d))return d;if(d=parseFloat(d)||0,c)for(;f>e;e+=2)d+=parseFloat(J.css(a,"padding"+Ob[e]))||0,"padding"!==c&&(d+=parseFloat(J.css(a,"border"+Ob[e]+"Width"))||0),"margin"===c&&(d+=parseFloat(J.css(a,c+Ob[e]))||0);return d+"px"}function q(a){var b=G.createElement("div");return Cb.appendChild(b),b.innerHTML=a.outerHTML,b.firstChild}function r(a){var b=(a.nodeName||"").toLowerCase();"input"===b?s(a):"script"!==b&&"undefined"!=typeof a.getElementsByTagName&&J.grep(a.getElementsByTagName("input"),s)}function s(a){("checkbox"===a.type||"radio"===a.type)&&(a.defaultChecked=a.checked)}function t(a){return"undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName("*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll("*"):[]}function u(a,b){var c;1===b.nodeType&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),"object"===c?b.outerHTML=a.outerHTML:"input"!==c||"checkbox"!==a.type&&"radio"!==a.type?"option"===c?b.selected=a.defaultSelected:"input"===c||"textarea"===c?b.defaultValue=a.defaultValue:"script"===c&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(J.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function v(a,b){if(1===b.nodeType&&J.hasData(a)){var c,d,e,f=J._data(a),g=J._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)J.event.add(b,c,h[c][d])}g.data&&(g.data=J.extend({},g.data))}}function w(a){return J.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function x(a){var b=ob.split("|"),c=a.createDocumentFragment();if(c.createElement)for(;b.length;)c.createElement(b.pop());return c}function y(a,b,c){if(b=b||0,J.isFunction(b))return J.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return J.grep(a,function(a){return a===b===c});if("string"==typeof b){var d=J.grep(a,function(a){return 1===a.nodeType});if(kb.test(b))return J.filter(b,d,!c);b=J.filter(b,d)}return J.grep(a,function(a){return J.inArray(a,b)>=0===c})}function z(a){return!a||!a.parentNode||11===a.parentNode.nodeType}function A(){return!0}function B(){return!1}function C(a,b,c){var d=b+"defer",e=b+"queue",f=b+"mark",g=J._data(a,d);!(!g||"queue"!==c&&J._data(a,e)||"mark"!==c&&J._data(a,f)||!setTimeout(function(){!J._data(a,e)&&!J._data(a,f)&&(J.removeData(a,d,!0),g.fire())},0))}function D(a){for(var b in a)if(("data"!==b||!J.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function E(a,c,d){if(d===b&&1===a.nodeType){var e="data-"+c.replace(N,"-$1").toLowerCase();if(d=a.getAttribute(e),"string"==typeof d){try{d="true"===d?!0:"false"===d?!1:"null"===d?null:J.isNumeric(d)?+d:M.test(d)?J.parseJSON(d):d}catch(f){}J.data(a,c,d)}else d=b}return d}function F(a){var b,c,d=K[a]={};for(a=a.split(/\s+/),b=0,c=a.length;c>b;b++)d[a[b]]=!0;return d}var G=a.document,H=a.navigator,I=a.location,J=function(){function c(){if(!h.isReady){try{G.documentElement.doScroll("left")}catch(a){return void setTimeout(c,1)}h.ready()}}var d,e,f,g,h=function(a,b){return new h.fn.init(a,b,d)},i=a.jQuery,j=a.$,k=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,l=/\S/,m=/^\s+/,n=/\s+$/,o=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,p=/^[\],:{}\s]*$/,q=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,r=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,s=/(?:^|:|,)(?:\s*\[)+/g,t=/(webkit)[ \/]([\w.]+)/,u=/(opera)(?:.*version)?[ \/]([\w.]+)/,v=/(msie) ([\w.]+)/,w=/(mozilla)(?:.*? rv:([\w.]+))?/,x=/-([a-z]|[0-9])/gi,y=/^-ms-/,z=function(a,b){return(b+"").toUpperCase()},A=H.userAgent,B=Object.prototype.toString,C=Object.prototype.hasOwnProperty,D=Array.prototype.push,E=Array.prototype.slice,F=String.prototype.trim,I=Array.prototype.indexOf,J={};return h.fn=h.prototype={constructor:h,init:function(a,c,d){var e,f,g,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if("body"===a&&!c&&G.body)return this.context=G,this[0]=G.body,this.selector=a,this.length=1,this;if("string"==typeof a){if(e="<"!==a.charAt(0)||">"!==a.charAt(a.length-1)||a.length<3?k.exec(a):[null,a,null],e&&(e[1]||!c)){if(e[1])return c=c instanceof h?c[0]:c,i=c?c.ownerDocument||c:G,g=o.exec(a),g?h.isPlainObject(c)?(a=[G.createElement(g[1])],h.fn.attr.call(a,c,!0)):a=[i.createElement(g[1])]:(g=h.buildFragment([e[1]],[i]),a=(g.cacheable?h.clone(g.fragment):g.fragment).childNodes),h.merge(this,a);if(f=G.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return d.find(a);this.length=1,this[0]=f}return this.context=G,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return h.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),h.makeArray(a,this))},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return E.call(this,0)},get:function(a){return null==a?this.toArray():0>a?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();return h.isArray(a)?D.apply(d,a):h.merge(d,a),d.prevObject=this,d.context=this.context,"find"===b?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return h.each(this,a,b)},ready:function(a){return h.bindReady(),f.add(a),this},eq:function(a){return a=+a,-1===a?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(E.apply(this,arguments),"slice",E.call(arguments).join(","))},map:function(a){return this.pushStack(h.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:D,sort:[].sort,splice:[].splice},h.fn.init.prototype=h.fn,h.extend=h.fn.extend=function(){var a,c,d,e,f,g,i=arguments[0]||{},j=1,k=arguments.length,l=!1;for("boolean"==typeof i&&(l=i,i=arguments[1]||{},j=2),"object"!=typeof i&&!h.isFunction(i)&&(i={}),k===j&&(i=this,--j);k>j;j++)if(null!=(a=arguments[j]))for(c in a)d=i[c],e=a[c],i!==e&&(l&&e&&(h.isPlainObject(e)||(f=h.isArray(e)))?(f?(f=!1,g=d&&h.isArray(d)?d:[]):g=d&&h.isPlainObject(d)?d:{},i[c]=h.extend(l,g,e)):e!==b&&(i[c]=e));return i},h.extend({noConflict:function(b){return a.$===h&&(a.$=j),b&&a.jQuery===h&&(a.jQuery=i),h},isReady:!1,readyWait:1,holdReady:function(a){a?h.readyWait++:h.ready(!0)},ready:function(a){if(a===!0&&!--h.readyWait||a!==!0&&!h.isReady){if(!G.body)return setTimeout(h.ready,1);if(h.isReady=!0,a!==!0&&--h.readyWait>0)return;f.fireWith(G,[h]),h.fn.trigger&&h(G).trigger("ready").off("ready")}},bindReady:function(){if(!f){if(f=h.Callbacks("once memory"),"complete"===G.readyState)return setTimeout(h.ready,1);if(G.addEventListener)G.addEventListener("DOMContentLoaded",g,!1),a.addEventListener("load",h.ready,!1);else if(G.attachEvent){G.attachEvent("onreadystatechange",g),a.attachEvent("onload",h.ready);var b=!1;try{b=null==a.frameElement}catch(d){}G.documentElement.doScroll&&b&&c()}}},isFunction:function(a){return"function"===h.type(a)},isArray:Array.isArray||function(a){return"array"===h.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return null==a?String(a):J[B.call(a)]||"object"},isPlainObject:function(a){if(!a||"object"!==h.type(a)||a.nodeType||h.isWindow(a))return!1;try{if(a.constructor&&!C.call(a,"constructor")&&!C.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||C.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){return"string"==typeof b&&b?(b=h.trim(b),a.JSON&&a.JSON.parse?a.JSON.parse(b):p.test(b.replace(q,"@").replace(r,"]").replace(s,""))?new Function("return "+b)():void h.error("Invalid JSON: "+b)):null},parseXML:function(c){if("string"!=typeof c||!c)return null;var d,e;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&h.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&l.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(y,"ms-").replace(x,z)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var e,f=0,g=a.length,i=g===b||h.isFunction(a);if(d)if(i){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;g>f&&c.apply(a[f++],d)!==!1;);else if(i){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;g>f&&c.call(a[f],f,a[f++])!==!1;);return a},trim:F?function(a){return null==a?"":F.call(a)}:function(a){return null==a?"":(a+"").replace(m,"").replace(n,"")},makeArray:function(a,b){var c=b||[];if(null!=a){var d=h.type(a);null==a.length||"string"===d||"function"===d||"regexp"===d||h.isWindow(a)?D.call(c,a):h.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(I)return I.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if("number"==typeof c.length)for(var f=c.length;f>e;e++)a[d++]=c[e];else for(;c[e]!==b;)a[d++]=c[e++];return a.length=d,a},grep:function(a,b,c){var d,e=[];c=!!c;for(var f=0,g=a.length;g>f;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],i=0,j=a.length,k=a instanceof h||j!==b&&"number"==typeof j&&(j>0&&a[0]&&a[j-1]||0===j||h.isArray(a));if(k)for(;j>i;i++)e=c(a[i],i,d),null!=e&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),null!=e&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){if("string"==typeof c){var d=a[c];c=a,a=d}if(!h.isFunction(a))return b;var e=E.call(arguments,2),f=function(){return a.apply(c,e.concat(E.call(arguments)))};return f.guid=a.guid=a.guid||f.guid||h.guid++,f},access:function(a,c,d,e,f,g,i){var j,k=null==d,l=0,m=a.length;if(d&&"object"==typeof d){for(l in d)h.access(a,c,l,d[l],1,g,e);f=1}else if(e!==b){if(j=i===b&&h.isFunction(e),k&&(j?(j=c,c=function(a,b,c){return j.call(h(a),c)}):(c.call(a,e),c=null)),c)for(;m>l;l++)c(a[l],d,j?e.call(a[l],l,c(a[l],d)):e,i);f=1}return f?a:k?c.call(a):m?c(a[0],d):g},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=t.exec(a)||u.exec(a)||v.exec(a)||a.indexOf("compatible")<0&&w.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}h.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(c,d){return d&&d instanceof h&&!(d instanceof a)&&(d=a(d)),h.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(G);return a},browser:{}}),h.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){J["[object "+b+"]"]=b.toLowerCase()}),e=h.uaMatch(A),e.browser&&(h.browser[e.browser]=!0,h.browser.version=e.version),h.browser.webkit&&(h.browser.safari=!0),l.test(" ")&&(m=/^[\s\xA0]+/,n=/[\s\xA0]+$/),d=h(G),G.addEventListener?g=function(){G.removeEventListener("DOMContentLoaded",g,!1),h.ready()}:G.attachEvent&&(g=function(){"complete"===G.readyState&&(G.detachEvent("onreadystatechange",g),h.ready())}),h}(),K={};J.Callbacks=function(a){a=a?K[a]||F(a):{};var c,d,e,f,g,h,i=[],j=[],k=function(b){var c,d,e,f;for(c=0,d=b.length;d>c;c++)e=b[c],f=J.type(e),"array"===f?k(e):"function"===f&&(!a.unique||!m.has(e))&&i.push(e)},l=function(b,k){for(k=k||[],c=!a.memory||[b,k],d=!0,e=!0,h=f||0,f=0,g=i.length;i&&g>h;h++)if(i[h].apply(b,k)===!1&&a.stopOnFalse){c=!0;break}e=!1,i&&(a.once?c===!0?m.disable():i=[]:j&&j.length&&(c=j.shift(),m.fireWith(c[0],c[1])))},m={add:function(){if(i){var a=i.length;k(arguments),e?g=i.length:c&&c!==!0&&(f=a,l(c[0],c[1]))}return this},remove:function(){if(i)for(var b=arguments,c=0,d=b.length;d>c;c++)for(var f=0;f<i.length&&(b[c]!==i[f]||(e&&g>=f&&(g--,h>=f&&h--),i.splice(f--,1),!a.unique));f++);return this},has:function(a){if(i)for(var b=0,c=i.length;c>b;b++)if(a===i[b])return!0;return!1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,(!c||c===!0)&&m.disable(),this},locked:function(){return!j},fireWith:function(b,d){return j&&(e?a.once||j.push([b,d]):(!a.once||!c)&&l(b,d)),this},fire:function(){return m.fireWith(this,arguments),this},fired:function(){return!!d}};return m};var L=[].slice;J.extend({Deferred:function(a){var b,c=J.Callbacks("once memory"),d=J.Callbacks("once memory"),e=J.Callbacks("memory"),f="pending",g={resolve:c,reject:d,notify:e},h={done:c.add,fail:d.add,progress:e.add,state:function(){return f},isResolved:c.fired,isRejected:d.fired,then:function(a,b,c){return i.done(a).fail(b).progress(c),this},always:function(){return i.done.apply(i,arguments).fail.apply(i,arguments),this},pipe:function(a,b,c){return J.Deferred(function(d){J.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c,e=b[0],f=b[1];i[a](J.isFunction(e)?function(){c=e.apply(this,arguments),c&&J.isFunction(c.promise)?c.promise().then(d.resolve,d.reject,d.notify):d[f+"With"](this===i?d:this,[c])}:d[f])})}).promise()},promise:function(a){if(null==a)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({});for(b in g)i[b]=g[b].fire,i[b+"With"]=g[b].fireWith;return i.done(function(){f="resolved"},d.disable,e.lock).fail(function(){f="rejected"},c.disable,e.lock),a&&a.call(i,i),i},when:function(a){function b(a){return function(b){g[a]=arguments.length>1?L.call(arguments,0):b,i.notifyWith(j,g)}}function c(a){return function(b){d[a]=arguments.length>1?L.call(arguments,0):b,--h||i.resolveWith(i,d)}}var d=L.call(arguments,0),e=0,f=d.length,g=Array(f),h=f,i=1>=f&&a&&J.isFunction(a.promise)?a:J.Deferred(),j=i.promise();if(f>1){for(;f>e;e++)d[e]&&d[e].promise&&J.isFunction(d[e].promise)?d[e].promise().then(c(e),i.reject,b(e)):--h;h||i.resolveWith(i,d)}else i!==a&&i.resolveWith(i,f?[a]:[]);return j}}),J.support=function(){{var b,c,d,e,f,g,h,i,j,k,l,m=G.createElement("div");G.documentElement}if(m.setAttribute("className","t"),m.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",c=m.getElementsByTagName("*"),d=m.getElementsByTagName("a")[0],!c||!c.length||!d)return{};e=G.createElement("select"),f=e.appendChild(G.createElement("option")),g=m.getElementsByTagName("input")[0],b={leadingWhitespace:3===m.firstChild.nodeType,tbody:!m.getElementsByTagName("tbody").length,htmlSerialize:!!m.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:"/a"===d.getAttribute("href"),opacity:/^0.55/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:"on"===g.value,optSelected:f.selected,getSetAttribute:"t"!==m.className,enctype:!!G.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==G.createElement("nav").cloneNode(!0).outerHTML,submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},J.boxModel=b.boxModel="CSS1Compat"===G.compatMode,g.checked=!0,b.noCloneChecked=g.cloneNode(!0).checked,e.disabled=!0,b.optDisabled=!f.disabled;try{delete m.test}catch(n){b.deleteExpando=!1}if(!m.addEventListener&&m.attachEvent&&m.fireEvent&&(m.attachEvent("onclick",function(){b.noCloneEvent=!1}),m.cloneNode(!0).fireEvent("onclick")),g=G.createElement("input"),g.value="t",g.setAttribute("type","radio"),b.radioValue="t"===g.value,g.setAttribute("checked","checked"),g.setAttribute("name","t"),m.appendChild(g),h=G.createDocumentFragment(),h.appendChild(m.lastChild),b.checkClone=h.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=g.checked,h.removeChild(g),h.appendChild(m),m.attachEvent)for(k in{submit:1,change:1,focusin:1})j="on"+k,l=j in m,l||(m.setAttribute(j,"return;"),l="function"==typeof m[j]),b[k+"Bubbles"]=l;return h.removeChild(m),h=e=f=m=g=null,J(function(){var c,d,e,f,g,h,j,k,n,o,p,q,r=G.getElementsByTagName("body")[0];!r||(j=1,q="padding:0;margin:0;border:",o="position:absolute;top:0;left:0;width:1px;height:1px;",p=q+"0;visibility:hidden;",k="style='"+o+q+"5px solid #000;",n="<div "+k+"display:block;'><div style='"+q+"0;display:block;overflow:hidden;'></div></div><table "+k+"' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>",c=G.createElement("div"),c.style.cssText=p+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(c,r.firstChild),m=G.createElement("div"),c.appendChild(m),m.innerHTML="<table><tr><td style='"+q+"0;display:none'></td><td>t</td></tr></table>",i=m.getElementsByTagName("td"),l=0===i[0].offsetHeight,i[0].style.display="",i[1].style.display="none",b.reliableHiddenOffsets=l&&0===i[0].offsetHeight,a.getComputedStyle&&(m.innerHTML="",h=G.createElement("div"),h.style.width="0",h.style.marginRight="0",m.style.width="2px",m.appendChild(h),b.reliableMarginRight=0===(parseInt((a.getComputedStyle(h,null)||{marginRight:0}).marginRight,10)||0)),"undefined"!=typeof m.style.zoom&&(m.innerHTML="",m.style.width=m.style.padding="1px",m.style.border=0,m.style.overflow="hidden",m.style.display="inline",m.style.zoom=1,b.inlineBlockNeedsLayout=3===m.offsetWidth,m.style.display="block",m.style.overflow="visible",m.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=3!==m.offsetWidth),m.style.cssText=o+p,m.innerHTML=n,d=m.firstChild,e=d.firstChild,f=d.nextSibling.firstChild.firstChild,g={doesNotAddBorder:5!==e.offsetTop,doesAddBorderForTableAndCells:5===f.offsetTop},e.style.position="fixed",e.style.top="20px",g.fixedPosition=20===e.offsetTop||15===e.offsetTop,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",g.subtractsBorderForOverflowNotVisible=-5===e.offsetTop,g.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,a.getComputedStyle&&(m.style.marginTop="1%",b.pixelMargin="1%"!==(a.getComputedStyle(m,null)||{marginTop:0}).marginTop),"undefined"!=typeof c.style.zoom&&(c.style.zoom=1),r.removeChild(c),h=m=c=null,J.extend(b,g))}),b}();var M=/^(?:\{.*\}|\[.*\])$/,N=/([A-Z])/g;J.extend({cache:{},uuid:0,expando:"jQuery"+(J.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?J.cache[a[J.expando]]:a[J.expando],!!a&&!D(a)},data:function(a,c,d,e){if(J.acceptData(a)){var f,g,h,i=J.expando,j="string"==typeof c,k=a.nodeType,l=k?J.cache:a,m=k?a[i]:a[i]&&i,n="events"===c;if(!(m&&l[m]&&(n||e||l[m].data)||!j||d!==b))return;return m||(k?a[i]=m=++J.uuid:m=i),l[m]||(l[m]={},k||(l[m].toJSON=J.noop)),("object"==typeof c||"function"==typeof c)&&(e?l[m]=J.extend(l[m],c):l[m].data=J.extend(l[m].data,c)),f=g=l[m],e||(g.data||(g.data={}),g=g.data),d!==b&&(g[J.camelCase(c)]=d),n&&!g[c]?f.events:(j?(h=g[c],null==h&&(h=g[J.camelCase(c)])):h=g,h)}},removeData:function(a,b,c){if(J.acceptData(a)){var d,e,f,g=J.expando,h=a.nodeType,i=h?J.cache:a,j=h?a[g]:g;if(!i[j])return;if(b&&(d=c?i[j]:i[j].data)){J.isArray(b)||(b in d?b=[b]:(b=J.camelCase(b),b=b in d?[b]:b.split(" ")));for(e=0,f=b.length;f>e;e++)delete d[b[e]];if(!(c?D:J.isEmptyObject)(d))return}if(!c&&(delete i[j].data,!D(i[j])))return;J.support.deleteExpando||!i.setInterval?delete i[j]:i[j]=null,h&&(J.support.deleteExpando?delete a[g]:a.removeAttribute?a.removeAttribute(g):a[g]=null)}},_data:function(a,b,c){return J.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=J.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),J.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length&&(k=J.data(i),1===i.nodeType&&!J._data(i,"parsedAttrs"))){for(f=i.attributes,h=f.length;h>j;j++)g=f[j].name,0===g.indexOf("data-")&&(g=J.camelCase(g.substring(5)),E(i,g,k[g]));J._data(i,"parsedAttrs",!0)}return k}return"object"==typeof a?this.each(function(){J.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",J.access(this,function(c){return c===b?(k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=J.data(i,a),k=E(i,a,k)),k===b&&d[1]?this.data(d[0]):k):(d[1]=c,void this.each(function(){var b=J(this);b.triggerHandler("setData"+e,d),J.data(this,a,c),b.triggerHandler("changeData"+e,d)}))},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){J.removeData(this,a)})}}),J.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",J._data(a,b,(J._data(a,b)||0)+1))},_unmark:function(a,b,c){if(a!==!0&&(c=b,b=a,a=!1),b){c=c||"fx";var d=c+"mark",e=a?0:(J._data(b,d)||1)-1;e?J._data(b,d,e):(J.removeData(b,d,!0),C(b,c,"mark"))}},queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=J._data(a,b),c&&(!d||J.isArray(c)?d=J._data(a,b,J.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=J.queue(a,b),d=c.shift(),e={};"inprogress"===d&&(d=c.shift()),d&&("fx"===b&&c.unshift("inprogress"),J._data(a,b+".run",e),d.call(a,function(){J.dequeue(a,b)},e)),c.length||(J.removeData(a,b+"queue "+b+".run",!0),C(a,b,"queue"))}}),J.fn.extend({queue:function(a,c){var d=2;return"string"!=typeof a&&(c=a,a="fx",d--),arguments.length<d?J.queue(this[0],a):c===b?this:this.each(function(){var b=J.queue(this,a,c);"fx"===a&&"inprogress"!==b[0]&&J.dequeue(this,a)})},dequeue:function(a){return this.each(function(){J.dequeue(this,a)})},delay:function(a,b){return a=J.fx?J.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function d(){--i||f.resolveWith(g,[g])}"string"!=typeof a&&(c=a,a=b),a=a||"fx";for(var e,f=J.Deferred(),g=this,h=g.length,i=1,j=a+"defer",k=a+"queue",l=a+"mark";h--;)(e=J.data(g[h],j,b,!0)||(J.data(g[h],k,b,!0)||J.data(g[h],l,b,!0))&&J.data(g[h],j,J.Callbacks("once memory"),!0))&&(i++,e.add(d));return d(),f.promise(c)}});var O,P,Q,R=/[\n\t\r]/g,S=/\s+/,T=/\r/g,U=/^(?:button|input)$/i,V=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea)?$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,Y=J.support.getSetAttribute;J.fn.extend({attr:function(a,b){return J.access(this,J.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){J.removeAttr(this,a)})},prop:function(a,b){return J.access(this,J.prop,a,b,arguments.length>1)},removeProp:function(a){return a=J.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(J.isFunction(a))return this.each(function(b){J(this).addClass(a.call(this,b,this.className))});if(a&&"string"==typeof a)for(b=a.split(S),c=0,d=this.length;d>c;c++)if(e=this[c],1===e.nodeType)if(e.className||1!==b.length){for(f=" "+e.className+" ",g=0,h=b.length;h>g;g++)~f.indexOf(" "+b[g]+" ")||(f+=b[g]+" ");e.className=J.trim(f)}else e.className=a;return this},removeClass:function(a){var c,d,e,f,g,h,i;if(J.isFunction(a))return this.each(function(b){J(this).removeClass(a.call(this,b,this.className))});if(a&&"string"==typeof a||a===b)for(c=(a||"").split(S),d=0,e=this.length;e>d;d++)if(f=this[d],1===f.nodeType&&f.className)if(a){for(g=(" "+f.className+" ").replace(R," "),h=0,i=c.length;i>h;h++)g=g.replace(" "+c[h]+" "," ");f.className=J.trim(g)}else f.className="";return this},toggleClass:function(a,b){var c=typeof a,d="boolean"==typeof b;return this.each(J.isFunction(a)?function(c){J(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c)for(var e,f=0,g=J(this),h=b,i=a.split(S);e=i[f++];)h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e);else("undefined"===c||"boolean"===c)&&(this.className&&J._data(this,"__className__",this.className),this.className=this.className||a===!1?"":J._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(R," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,f=this[0];return arguments.length?(e=J.isFunction(a),this.each(function(d){var f,g=J(this);1===this.nodeType&&(f=e?a.call(this,d,g.val()):a,null==f?f="":"number"==typeof f?f+="":J.isArray(f)&&(f=J.map(f,function(a){return null==a?"":a+""})),c=J.valHooks[this.type]||J.valHooks[this.nodeName.toLowerCase()],c&&"set"in c&&c.set(this,f,"value")!==b||(this.value=f))})):f?(c=J.valHooks[f.type]||J.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,"string"==typeof d?d.replace(T,""):null==d?"":d)):void 0}}),J.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i="select-one"===a.type;if(0>f)return null;for(c=i?f:0,d=i?f+1:h.length;d>c;c++)if(e=h[c],!(!e.selected||(J.support.optDisabled?e.disabled:null!==e.getAttribute("disabled"))||e.parentNode.disabled&&J.nodeName(e.parentNode,"optgroup"))){if(b=J(e).val(),i)return b;g.push(b)}return i&&!g.length&&h.length?J(h[f]).val():g},set:function(a,b){var c=J.makeArray(b);return J(a).find("option").each(function(){this.selected=J.inArray(J(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;return a&&3!==i&&8!==i&&2!==i?e&&c in J.attrFn?J(a)[c](d):"undefined"==typeof a.getAttribute?J.prop(a,c,d):(h=1!==i||!J.isXMLDoc(a),h&&(c=c.toLowerCase(),g=J.attrHooks[c]||(X.test(c)?P:O)),d!==b?null===d?void J.removeAttr(a,c):g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,""+d),d):g&&"get"in g&&h&&null!==(f=g.get(a,c))?f:(f=a.getAttribute(c),null===f?b:f)):void 0},removeAttr:function(a,b){var c,d,e,f,g,h=0;if(b&&1===a.nodeType)for(d=b.toLowerCase().split(S),f=d.length;f>h;h++)e=d[h],e&&(c=J.propFix[e]||e,g=X.test(e),g||J.attr(a,e,""),a.removeAttribute(Y?e:c),g&&c in a&&(a[c]=!1))},attrHooks:{type:{set:function(a,b){if(U.test(a.nodeName)&&a.parentNode)J.error("type property can't be changed");else if(!J.support.radioValue&&"radio"===b&&J.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return O&&J.nodeName(a,"button")?O.get(a,b):b in a?a.value:null},set:function(a,b,c){return O&&J.nodeName(a,"button")?O.set(a,b,c):void(a.value=b)}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;return a&&3!==h&&8!==h&&2!==h?(g=1!==h||!J.isXMLDoc(a),g&&(c=J.propFix[c]||c,f=J.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&null!==(e=f.get(a,c))?e:a[c]):void 0},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):V.test(a.nodeName)||W.test(a.nodeName)&&a.href?0:b}}}}),J.attrHooks.tabindex=J.propHooks.tabIndex,P={get:function(a,c){var d,e=J.prop(a,c);return e===!0||"boolean"!=typeof e&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?J.removeAttr(a,c):(d=J.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},Y||(Q={name:!0,id:!0,coords:!0},O=J.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(Q[c]?""!==d.nodeValue:d.specified)?d.nodeValue:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=G.createAttribute(c),a.setAttributeNode(d)),d.nodeValue=b+""}},J.attrHooks.tabindex.set=O.set,J.each(["width","height"],function(a,b){J.attrHooks[b]=J.extend(J.attrHooks[b],{set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}})}),J.attrHooks.contenteditable={get:O.get,set:function(a,b,c){""===b&&(b="false"),O.set(a,b,c)}}),J.support.hrefNormalized||J.each(["href","src","width","height"],function(a,c){J.attrHooks[c]=J.extend(J.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return null===d?b:d}})}),J.support.style||(J.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),J.support.optSelected||(J.propHooks.selected=J.extend(J.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),J.support.enctype||(J.propFix.enctype="encoding"),J.support.checkOn||J.each(["radio","checkbox"],function(){J.valHooks[this]={get:function(a){return null===a.getAttribute("value")?"on":a.value}}}),J.each(["radio","checkbox"],function(){J.valHooks[this]=J.extend(J.valHooks[this],{set:function(a,b){return J.isArray(b)?a.checked=J.inArray(J(a).val(),b)>=0:void 0}})});var Z=/^(?:textarea|input|select)$/i,$=/^([^\.]*)?(?:\.(.+))?$/,_=/(?:^|\s)hover(\.\S+)?\b/,ab=/^key/,bb=/^(?:mouse|contextmenu)|click/,cb=/^(?:focusinfocus|focusoutblur)$/,db=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,eb=function(a){var b=db.exec(a);
return b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)")),b},fb=function(a,b){var c=a.attributes||{};return!(b[1]&&a.nodeName.toLowerCase()!==b[1]||b[2]&&(c.id||{}).value!==b[2]||b[3]&&!b[3].test((c["class"]||{}).value))},gb=function(a){return J.event.special.hover?a:a.replace(_,"mouseenter$1 mouseleave$1")};J.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q;if(3!==a.nodeType&&8!==a.nodeType&&c&&d&&(g=J._data(a))){for(d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=J.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return"undefined"==typeof J||a&&J.event.triggered===a.type?b:J.event.dispatch.apply(h.elem,arguments)},h.elem=a),c=J.trim(gb(c)).split(" "),j=0;j<c.length;j++)k=$.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),q=J.event.special[l]||{},l=(f?q.delegateType:q.bindType)||l,q=J.event.special[l]||{},n=J.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,quick:f&&eb(f),namespace:m.join(".")},o),p=i[l],p||(p=i[l]=[],p.delegateCount=0,q.setup&&q.setup.call(a,e,m,h)!==!1||(a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h))),q.add&&(q.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?p.splice(p.delegateCount++,0,n):p.push(n),J.event.global[l]=!0;a=null}},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r=J.hasData(a)&&J._data(a);if(r&&(m=r.events)){for(b=J.trim(gb(b||"")).split(" "),f=0;f<b.length;f++)if(g=$.exec(b[f])||[],h=i=g[1],j=g[2],h){for(n=J.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,p=m[h]||[],k=p.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null,l=0;l<p.length;l++)q=p[l],!(!e&&i!==q.origType||c&&c.guid!==q.guid||j&&!j.test(q.namespace)||d&&d!==q.selector&&("**"!==d||!q.selector)||(p.splice(l--,1),q.selector&&p.delegateCount--,!n.remove||!n.remove.call(a,q)));0===p.length&&k!==p.length&&((!n.teardown||n.teardown.call(a,j)===!1)&&J.removeEvent(a,h,r.handle),delete m[h])}else for(h in m)J.event.remove(a,h+b[f],c,d,!0);J.isEmptyObject(m)&&(o=r.handle,o&&(o.elem=null),J.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,f){if(!e||3!==e.nodeType&&8!==e.nodeType){var g,h,i,j,k,l,m,n,o,p,q=c.type||c,r=[];if(cb.test(q+J.event.triggered))return;if(q.indexOf("!")>=0&&(q=q.slice(0,-1),h=!0),q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),(!e||J.event.customEvent[q])&&!J.event.global[q])return;if(c="object"==typeof c?c[J.expando]?c:new J.Event(q,c):new J.Event(q),c.type=q,c.isTrigger=!0,c.exclusive=h,c.namespace=r.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,l=q.indexOf(":")<0?"on"+q:"",!e){g=J.cache;for(i in g)g[i].events&&g[i].events[q]&&J.event.trigger(c,d,g[i].handle.elem,!0);return}if(c.result=b,c.target||(c.target=e),d=null!=d?J.makeArray(d):[],d.unshift(c),m=J.event.special[q]||{},m.trigger&&m.trigger.apply(e,d)===!1)return;if(o=[[e,m.bindType||q]],!f&&!m.noBubble&&!J.isWindow(e)){for(p=m.delegateType||q,j=cb.test(p+q)?e:e.parentNode,k=null;j;j=j.parentNode)o.push([j,p]),k=j;k&&k===e.ownerDocument&&o.push([k.defaultView||k.parentWindow||a,p])}for(i=0;i<o.length&&!c.isPropagationStopped();i++)j=o[i][0],c.type=o[i][1],n=(J._data(j,"events")||{})[c.type]&&J._data(j,"handle"),n&&n.apply(j,d),n=l&&j[l],n&&J.acceptData(j)&&n.apply(j,d)===!1&&c.preventDefault();return c.type=q,!(f||c.isDefaultPrevented()||m._default&&m._default.apply(e.ownerDocument,d)!==!1||"click"===q&&J.nodeName(e,"a")||!J.acceptData(e)||!l||!e[q]||("focus"===q||"blur"===q)&&0===c.target.offsetWidth||J.isWindow(e)||(k=e[l],k&&(e[l]=null),J.event.triggered=q,e[q](),J.event.triggered=b,!k||!(e[l]=k))),c.result}},dispatch:function(c){c=J.event.fix(c||a.event);var d,e,f,g,h,i,j,k,l,m,n=(J._data(this,"events")||{})[c.type]||[],o=n.delegateCount,p=[].slice.call(arguments,0),q=!c.exclusive&&!c.namespace,r=J.event.special[c.type]||{},s=[];if(p[0]=c,c.delegateTarget=this,!r.preDispatch||r.preDispatch.call(this,c)!==!1){if(o&&(!c.button||"click"!==c.type))for(g=J(this),g.context=this.ownerDocument||this,f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0){for(i={},k=[],g[0]=f,d=0;o>d;d++)l=n[d],m=l.selector,i[m]===b&&(i[m]=l.quick?fb(f,l.quick):g.is(m)),i[m]&&k.push(l);k.length&&s.push({elem:f,matches:k})}for(n.length>o&&s.push({elem:this,matches:n.slice(o)}),d=0;d<s.length&&!c.isPropagationStopped();d++)for(j=s[d],c.currentTarget=j.elem,e=0;e<j.matches.length&&!c.isImmediatePropagationStopped();e++)l=j.matches[e],(q||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))&&(c.data=l.data,c.handleObj=l,h=((J.event.special[l.origType]||{}).handle||l.handler).apply(j.elem,p),h!==b&&(c.result=h,h===!1&&(c.preventDefault(),c.stopPropagation())));return r.postDispatch&&r.postDispatch.call(this,c),c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,e,f,g=c.button,h=c.fromElement;return null==a.pageX&&null!=c.clientX&&(d=a.target.ownerDocument||G,e=d.documentElement,f=d.body,a.pageX=c.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=c.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?c.toElement:h),!a.which&&g!==b&&(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[J.expando])return a;var c,d,e=a,f=J.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;for(a=J.Event(e),c=g.length;c;)d=g[--c],a[d]=e[d];return a.target||(a.target=e.srcElement||G),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey),f.filter?f.filter(a,e):a},special:{ready:{setup:J.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){J.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=J.extend(new J.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?J.event.trigger(e,null,b):J.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},J.event.handle=J.event.dispatch,J.removeEvent=G.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},J.Event=function(a,b){return this instanceof J.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?A:B):this.type=a,b&&J.extend(this,b),this.timeStamp=a&&a.timeStamp||J.now(),this[J.expando]=!0,void 0):new J.Event(a,b)},J.Event.prototype={preventDefault:function(){this.isDefaultPrevented=A;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=A;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=A,this.stopPropagation()},isDefaultPrevented:B,isPropagationStopped:B,isImmediatePropagationStopped:B},J.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){J.event.special[a]={delegateType:b,bindType:b,handle:function(a){{var c,d=this,e=a.relatedTarget,f=a.handleObj;f.selector}return(!e||e!==d&&!J.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),J.support.submitBubbles||(J.event.special.submit={setup:function(){return J.nodeName(this,"form")?!1:void J.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=J.nodeName(c,"input")||J.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(J.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&J.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return J.nodeName(this,"form")?!1:void J.event.remove(this,"._submit")}}),J.support.changeBubbles||(J.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(J.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),J.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,J.event.simulate("change",this,a,!0))})),!1):void J.event.add(this,"beforeactivate._change",function(a){var b=a.target;Z.test(b.nodeName)&&!b._change_attached&&(J.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&J.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return J.event.remove(this,"._change"),Z.test(this.nodeName)}}),J.support.focusinBubbles||J.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){J.event.simulate(b,a.target,J.event.fix(a),!0)};J.event.special[b]={setup:function(){0===c++&&G.addEventListener(a,d,!0)},teardown:function(){0===--c&&G.removeEventListener(a,d,!0)}}}),J.fn.extend({on:function(a,c,d,e,f){var g,h;if("object"==typeof a){"string"!=typeof c&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}if(null==d&&null==e?(e=c,d=c=b):null==e&&("string"==typeof c?(e=d,d=b):(e=d,d=c,c=b)),e===!1)e=B;else if(!e)return this;return 1===f&&(g=e,e=function(a){return J().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=J.guid++)),this.each(function(){J.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;return J(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this}if("object"==typeof a){for(var f in a)this.off(f,c,a[f]);return this}return(c===!1||"function"==typeof c)&&(d=c,c=b),d===!1&&(d=B),this.each(function(){J.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return J(this.context).on(a,this.selector,b,c),this},die:function(a,b){return J(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1==arguments.length?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){J.event.trigger(a,b,this)})},triggerHandler:function(a,b){return this[0]?J.event.trigger(a,b,this[0],!0):void 0},toggle:function(a){var b=arguments,c=a.guid||J.guid++,d=0,e=function(c){var e=(J._data(this,"lastToggle"+a.guid)||0)%d;return J._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};for(e.guid=c;d<b.length;)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){J.fn[b]=function(a,c){return null==c&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},J.attrFn&&(J.attrFn[b]=!0),ab.test(b)&&(J.event.fixHooks[b]=J.event.keyHooks),bb.test(b)&&(J.event.fixHooks[b]=J.event.mouseHooks)}),function(){function a(a,b,c,d,f,g){for(var h=0,i=d.length;i>h;h++){var j=d[h];if(j){var k=!1;for(j=j[a];j;){if(j[e]===c){k=d[j.sizset];break}if(1===j.nodeType)if(g||(j[e]=c,j.sizset=h),"string"!=typeof b){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}j=j[a]}d[h]=k}}}function c(a,b,c,d,f,g){for(var h=0,i=d.length;i>h;h++){var j=d[h];if(j){var k=!1;for(j=j[a];j;){if(j[e]===c){k=d[j.sizset];break}if(1===j.nodeType&&!g&&(j[e]=c,j.sizset=h),j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}d[h]=k}}}var d=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e="sizcache"+(Math.random()+"").replace(".",""),f=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){return i=!1,0});var m=function(a,b,c,e){c=c||[],b=b||G;var f=b;if(1!==b.nodeType&&9!==b.nodeType)return[];if(!a||"string"!=typeof a)return c;var h,i,j,k,l,n,q,r,t=!0,u=m.isXML(b),v=[],x=a;do if(d.exec(""),h=d.exec(x),h&&(x=h[3],v.push(h[1]),h[2])){k=h[3];break}while(h);if(v.length>1&&p.exec(a))if(2===v.length&&o.relative[v[0]])i=w(v[0]+v[1],b,e);else for(i=o.relative[v[0]]?[b]:m(v.shift(),b);v.length;)a=v.shift(),o.relative[a]&&(a+=v.shift()),i=w(a,i,e);else if(!e&&v.length>1&&9===b.nodeType&&!u&&o.match.ID.test(v[0])&&!o.match.ID.test(v[v.length-1])&&(l=m.find(v.shift(),b,u),b=l.expr?m.filter(l.expr,l.set)[0]:l.set[0]),b)for(l=e?{expr:v.pop(),set:s(e)}:m.find(v.pop(),1!==v.length||"~"!==v[0]&&"+"!==v[0]||!b.parentNode?b:b.parentNode,u),i=l.expr?m.filter(l.expr,l.set):l.set,v.length>0?j=s(i):t=!1;v.length;)n=v.pop(),q=n,o.relative[n]?q=v.pop():n="",null==q&&(q=b),o.relative[n](j,q,u);else j=v=[];if(j||(j=i),j||m.error(n||a),"[object Array]"===g.call(j))if(t)if(b&&1===b.nodeType)for(r=0;null!=j[r];r++)j[r]&&(j[r]===!0||1===j[r].nodeType&&m.contains(b,j[r]))&&c.push(i[r]);else for(r=0;null!=j[r];r++)j[r]&&1===j[r].nodeType&&c.push(i[r]);else c.push.apply(c,j);else s(j,c);return k&&(m(k,f,c,e),m.uniqueSort(c)),c};m.uniqueSort=function(a){if(u&&(h=i,a.sort(u),h))for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1);return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;f>e;e++)if(h=o.order[e],(g=o.leftMatch[h].exec(a))&&(i=g[1],g.splice(1,1),"\\"!==i.substr(i.length-1)&&(g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c),null!=d))){a=a.replace(o.match[h],"");break}return d||(d="undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName("*"):[]),{set:d,expr:a}},m.filter=function(a,c,d,e){for(var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);a&&c.length;){for(h in o.filter)if(null!=(f=o.leftMatch[h].exec(a))&&f[2]){if(k=o.filter[h],l=f[1],g=!1,f.splice(1,1),"\\"===l.substr(l.length-1))continue;if(s===r&&(r=[]),o.preFilter[h])if(f=o.preFilter[h](f,s,d,r,e,t)){if(f===!0)continue}else g=i=!0;if(f)for(n=0;null!=(j=s[n]);n++)j&&(i=k(j,f,n,s),p=e^i,d&&null!=i?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){if(d||(s=r),a=a.replace(o.match[h],""),!g)return[];break}}if(a===q){if(null!=g)break;m.error(a)}q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(1===d||9===d||11===d){if("string"==typeof a.textContent)return a.textContent;if("string"==typeof a.innerText)return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(3===d||4===d)return a.nodeValue}else for(b=0;c=a[b];b++)8!==c.nodeType&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c="string"==typeof b,d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f,g=0,h=a.length;h>g;g++)if(f=a[g]){for(;(f=f.previousSibling)&&1!==f.nodeType;);a[g]=e||f&&f.nodeName.toLowerCase()===b?f||!1:f===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d="string"==typeof b,e=0,f=a.length;if(d&&!l.test(b)){for(b=b.toLowerCase();f>e;e++)if(c=a[e]){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}else{for(;f>e;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(b,d,e){var g,h=f++,i=a;"string"==typeof d&&!l.test(d)&&(d=d.toLowerCase(),g=d,i=c),i("parentNode",d,h,b,g,e)},"~":function(b,d,e){var g,h=f++,i=a;"string"==typeof d&&!l.test(d)&&(d=d.toLowerCase(),g=d,i=c),i("previousSibling",d,h,b,g,e)}},find:{ID:function(a,b,c){if("undefined"!=typeof b.getElementById&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if("undefined"!=typeof b.getElementsByName){for(var c=[],d=b.getElementsByName(a[1]),e=0,f=d.length;f>e;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return 0===c.length?null:c}},TAG:function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a[1]):void 0}},preFilter:{CLASS:function(a,b,c,d,e,f){if(a=" "+a[1].replace(j,"")+" ",f)return a;for(var g,h=0;null!=(g=b[h]);h++)g&&(e^(g.className&&(" "+g.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(g):c&&(b[h]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if("nth"===a[1]){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even"===a[2]&&"2n"||"odd"===a[2]&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);return a[0]=f++,a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");return!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),"~="===a[2]&&(a[4]=" "+a[4]+" "),a},PSEUDO:function(a,b,c,e,f){if("not"===a[1]){if(!((d.exec(a[3])||"").length>1||/^\w/.test(a[3]))){var g=m.filter(a[3],b,c,!0^f);return c||e.push.apply(e,g),!1}a[3]=m(a[3],null,null,b)}else if(o.match.POS.test(a[0])||o.match.CHILD.test(a[0]))return!0;return a},POS:function(a){return a.unshift(!0),a}},filters:{enabled:function(a){return a.disabled===!1&&"hidden"!==a.type},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return"input"===a.nodeName.toLowerCase()&&"text"===c&&(b===c||null===b)},radio:function(a){return"input"===a.nodeName.toLowerCase()&&"radio"===a.type},checkbox:function(a){return"input"===a.nodeName.toLowerCase()&&"checkbox"===a.type},file:function(a){return"input"===a.nodeName.toLowerCase()&&"file"===a.type},password:function(a){return"input"===a.nodeName.toLowerCase()&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return("input"===b||"button"===b)&&"submit"===a.type},image:function(a){return"input"===a.nodeName.toLowerCase()&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return("input"===b||"button"===b)&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return 0===b},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if("contains"===e)return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if("not"===e){for(var g=b[3],h=0,i=g.length;i>h;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,d,f,g,h,i,j=b[1],k=a;switch(j){case"only":case"first":for(;k=k.previousSibling;)if(1===k.nodeType)return!1;if("first"===j)return!0;k=a;case"last":for(;k=k.nextSibling;)if(1===k.nodeType)return!1;return!0;case"nth":if(c=b[2],d=b[3],1===c&&0===d)return!0;if(f=b[0],g=a.parentNode,g&&(g[e]!==f||!a.nodeIndex)){for(h=0,k=g.firstChild;k;k=k.nextSibling)1===k.nodeType&&(k.nodeIndex=++h);g[e]=f}return i=a.nodeIndex-d,0===c?0===i:i%c===0&&i/c>=0}},ID:function(a,b){return 1===a.nodeType&&a.getAttribute("id")===b},TAG:function(a,b){return"*"===b&&1===a.nodeType||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):null!=a[c]?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return null==d?"!="===f:!f&&m.attr?null!=d:"="===f?e===g:"*="===f?e.indexOf(g)>=0:"~="===f?(" "+e+" ").indexOf(g)>=0:g?"!="===f?e!==g:"^="===f?0===e.indexOf(g):"$="===f?e.substr(e.length-g.length)===g:"|="===f?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];return f?f(a,c,b,d):void 0}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){return a=Array.prototype.slice.call(a,0),b?(b.push.apply(b,a),b):a};try{Array.prototype.slice.call(G.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if("[object Array]"===g.call(a))Array.prototype.push.apply(d,a);else if("number"==typeof a.length)for(var e=a.length;e>c;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;G.documentElement.compareDocumentPosition?u=function(a,b){return a===b?(h=!0,0):a.compareDocumentPosition&&b.compareDocumentPosition?4&a.compareDocumentPosition(b)?-1:1:a.compareDocumentPosition?-1:1}:(u=function(a,b){if(a===b)return h=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;for(;j;)e.unshift(j),j=j.parentNode;for(j=i;j;)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;c>k&&d>k;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;for(var d=a.nextSibling;d;){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=G.createElement("div"),c="script"+(new Date).getTime(),d=G.documentElement;a.innerHTML="<a name='"+c+"'/>",d.insertBefore(a,d.firstChild),G.getElementById(c)&&(o.find.ID=function(a,c,d){if("undefined"!=typeof c.getElementById&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||"undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return 1===a.nodeType&&c&&c.nodeValue===b}),d.removeChild(a),d=a=null}(),function(){var a=G.createElement("div");a.appendChild(G.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if("*"===a[1]){for(var d=[],e=0;c[e];e++)1===c[e].nodeType&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&"undefined"!=typeof a.firstChild.getAttribute&&"#"!==a.firstChild.getAttribute("href")&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),G.querySelectorAll&&function(){var a=m,b=G.createElement("div"),c="__sizzle__";if(b.innerHTML="<p class='TEST'></p>",!b.querySelectorAll||0!==b.querySelectorAll(".TEST").length){m=function(b,d,e,f){if(d=d||G,!f&&!m.isXML(d)){var g=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(g&&(1===d.nodeType||9===d.nodeType)){if(g[1])return s(d.getElementsByTagName(b),e);if(g[2]&&o.find.CLASS&&d.getElementsByClassName)return s(d.getElementsByClassName(g[2]),e)}if(9===d.nodeType){if("body"===b&&d.body)return s([d.body],e);if(g&&g[3]){var h=d.getElementById(g[3]);if(!h||!h.parentNode)return s([],e);if(h.id===g[3])return s([h],e)}try{return s(d.querySelectorAll(b),e)}catch(i){}}else if(1===d.nodeType&&"object"!==d.nodeName.toLowerCase()){var j=d,k=d.getAttribute("id"),l=k||c,n=d.parentNode,p=/^\s*[+~]/.test(b);k?l=l.replace(/'/g,"\\$&"):d.setAttribute("id",l),p&&n&&(d=d.parentNode);try{if(!p||n)return s(d.querySelectorAll("[id='"+l+"'] "+b),e)}catch(q){}finally{k||j.removeAttribute("id")}}}return a(b,d,e,f)};for(var d in a)m[d]=a[d];b=null}}(),function(){var a=G.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var c=!b.call(G.createElement("div"),"div"),d=!1;try{b.call(G.documentElement,"[test!='']:sizzle")}catch(e){d=!0}m.matchesSelector=function(a,e){if(e=e.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']"),!m.isXML(a))try{if(d||!o.match.PSEUDO.test(e)&&!/!=/.test(e)){var f=b.call(a,e);if(f||!c||a.document&&11!==a.document.nodeType)return f}}catch(g){}return m(e,null,null,[a]).length>0}}}(),function(){var a=G.createElement("div");if(a.innerHTML="<div class='test e'></div><div class='test'></div>",a.getElementsByClassName&&0!==a.getElementsByClassName("e").length){if(a.lastChild.className="e",1===a.getElementsByClassName("e").length)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){return"undefined"==typeof b.getElementsByClassName||c?void 0:b.getElementsByClassName(a[1])},a=null}}(),m.contains=G.documentElement.contains?function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:G.documentElement.compareDocumentPosition?function(a,b){return!!(16&a.compareDocumentPosition(b))}:function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?"HTML"!==b.nodeName:!1};var w=function(a,b,c){for(var d,e=[],f="",g=b.nodeType?[b]:b;d=o.match.PSEUDO.exec(a);)f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;i>h;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=J.attr,m.selectors.attrMap={},J.find=m,J.expr=m.selectors,J.expr[":"]=J.expr.filters,J.unique=m.uniqueSort,J.text=m.getText,J.isXMLDoc=m.isXML,J.contains=m.contains}();var hb=/Until$/,ib=/^(?:parents|prevUntil|prevAll)/,jb=/,/,kb=/^.[^:#\[\.,]*$/,lb=Array.prototype.slice,mb=J.expr.match.globalPOS,nb={children:!0,contents:!0,next:!0,prev:!0};J.fn.extend({find:function(a){var b,c,d=this;if("string"!=typeof a)return J(a).filter(function(){for(b=0,c=d.length;c>b;b++)if(J.contains(d[b],this))return!0});var e,f,g,h=this.pushStack("","find",a);for(b=0,c=this.length;c>b;b++)if(e=h.length,J.find(a,this[b],h),b>0)for(f=e;f<h.length;f++)for(g=0;e>g;g++)if(h[g]===h[f]){h.splice(f--,1);break}return h},has:function(a){var b=J(a);return this.filter(function(){for(var a=0,c=b.length;c>a;a++)if(J.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(y(this,a,!1),"not",a)},filter:function(a){return this.pushStack(y(this,a,!0),"filter",a)},is:function(a){return!!a&&("string"==typeof a?mb.test(a)?J(a,this.context).index(this[0])>=0:J.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d,e=[],f=this[0];if(J.isArray(a)){for(var g=1;f&&f.ownerDocument&&f!==b;){for(c=0;c<a.length;c++)J(f).is(a[c])&&e.push({selector:a[c],elem:f,level:g});f=f.parentNode,g++}return e}var h=mb.test(a)||"string"!=typeof a?J(a,b||this.context):0;for(c=0,d=this.length;d>c;c++)for(f=this[c];f;){if(h?h.index(f)>-1:J.find.matchesSelector(f,a)){e.push(f);break}if(f=f.parentNode,!f||!f.ownerDocument||f===b||11===f.nodeType)break}return e=e.length>1?J.unique(e):e,this.pushStack(e,"closest",a)},index:function(a){return a?"string"==typeof a?J.inArray(this[0],J(a)):J.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c="string"==typeof a?J(a,b):J.makeArray(a&&a.nodeType?[a]:a),d=J.merge(this.get(),c);return this.pushStack(z(c[0])||z(d[0])?d:J.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),J.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return J.dir(a,"parentNode")},parentsUntil:function(a,b,c){return J.dir(a,"parentNode",c)},next:function(a){return J.nth(a,2,"nextSibling")},prev:function(a){return J.nth(a,2,"previousSibling")},nextAll:function(a){return J.dir(a,"nextSibling")},prevAll:function(a){return J.dir(a,"previousSibling")},nextUntil:function(a,b,c){return J.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return J.dir(a,"previousSibling",c)},siblings:function(a){return J.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return J.sibling(a.firstChild)},contents:function(a){return J.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:J.makeArray(a.childNodes)}},function(a,b){J.fn[a]=function(c,d){var e=J.map(this,b,c);return hb.test(a)||(d=c),d&&"string"==typeof d&&(e=J.filter(d,e)),e=this.length>1&&!nb[a]?J.unique(e):e,(this.length>1||jb.test(d))&&ib.test(a)&&(e=e.reverse()),this.pushStack(e,a,lb.call(arguments).join(","))}}),J.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),1===b.length?J.find.matchesSelector(b[0],a)?[b[0]]:[]:J.find.matches(a,b)},dir:function(a,c,d){for(var e=[],f=a[c];f&&9!==f.nodeType&&(d===b||1!==f.nodeType||!J(f).is(d));)1===f.nodeType&&e.push(f),f=f[c];return e},nth:function(a,b,c){b=b||1;for(var d=0;a&&(1!==a.nodeType||++d!==b);a=a[c]);return a},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}});var ob="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",pb=/ jQuery\d+="(?:\d+|null)"/g,qb=/^\s+/,rb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,sb=/<([\w:]+)/,tb=/<tbody/i,ub=/<|&#?\w+;/,vb=/<(?:script|style)/i,wb=/<(?:script|object|embed|option|style)/i,xb=new RegExp("<(?:"+ob+")[\\s/>]","i"),yb=/checked\s*(?:[^=]|=\s*.checked.)/i,zb=/\/(java|ecma)script/i,Ab=/^\s*<!(?:\[CDATA\[|\-\-)/,Bb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Cb=x(G);Bb.optgroup=Bb.option,Bb.tbody=Bb.tfoot=Bb.colgroup=Bb.caption=Bb.thead,Bb.th=Bb.td,J.support.htmlSerialize||(Bb._default=[1,"div<div>","</div>"]),J.fn.extend({text:function(a){return J.access(this,function(a){return a===b?J.text(this):this.empty().append((this[0]&&this[0].ownerDocument||G).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(J.isFunction(a))return this.each(function(b){J(this).wrapAll(a.call(this,b))});if(this[0]){var b=J(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstChild&&1===a.firstChild.nodeType;)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(J.isFunction(a)?function(b){J(this).wrapInner(a.call(this,b))}:function(){var b=J(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=J.isFunction(a);
return this.each(function(c){J(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){J.nodeName(this,"body")||J(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){1===this.nodeType&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){1===this.nodeType&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=J.clean(arguments);return a.push.apply(a,this.toArray()),this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);return a.push.apply(a,J.clean(arguments)),a}},remove:function(a,b){for(var c,d=0;null!=(c=this[d]);d++)(!a||J.filter(a,[c]).length)&&(!b&&1===c.nodeType&&(J.cleanData(c.getElementsByTagName("*")),J.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)for(1===a.nodeType&&J.cleanData(a.getElementsByTagName("*"));a.firstChild;)a.removeChild(a.firstChild);return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return J.clone(this,a,b)})},html:function(a){return J.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return 1===c.nodeType?c.innerHTML.replace(pb,""):null;if(!("string"!=typeof a||vb.test(a)||!J.support.leadingWhitespace&&qb.test(a)||Bb[(sb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(rb,"<$1></$2>");try{for(;e>d;d++)c=this[d]||{},1===c.nodeType&&(J.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return this[0]&&this[0].parentNode?J.isFunction(a)?this.each(function(b){var c=J(this),d=c.html();c.replaceWith(a.call(this,b,d))}):("string"!=typeof a&&(a=J(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;J(this).remove(),b?J(b).before(a):J(c).append(a)})):this.length?this.pushStack(J(J.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,f,g,h,i=a[0],j=[];if(!J.support.checkClone&&3===arguments.length&&"string"==typeof i&&yb.test(i))return this.each(function(){J(this).domManip(a,c,d,!0)});if(J.isFunction(i))return this.each(function(e){var f=J(this);a[0]=i.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){if(h=i&&i.parentNode,e=J.support.parentNode&&h&&11===h.nodeType&&h.childNodes.length===this.length?{fragment:h}:J.buildFragment(a,this,j),g=e.fragment,f=1===g.childNodes.length?g=g.firstChild:g.firstChild,f){c=c&&J.nodeName(f,"tr");for(var k=0,l=this.length,m=l-1;l>k;k++)d.call(c?w(this[k],f):this[k],e.cacheable||l>1&&m>k?J.clone(g,!0,!0):g)}j.length&&J.each(j,function(a,b){b.src?J.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):J.globalEval((b.text||b.textContent||b.innerHTML||"").replace(Ab,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),J.buildFragment=function(a,b,c){var d,e,f,g,h=a[0];return b&&b[0]&&(g=b[0].ownerDocument||b[0]),g.createDocumentFragment||(g=G),1===a.length&&"string"==typeof h&&h.length<512&&g===G&&"<"===h.charAt(0)&&!wb.test(h)&&(J.support.checkClone||!yb.test(h))&&(J.support.html5Clone||!xb.test(h))&&(e=!0,f=J.fragments[h],f&&1!==f&&(d=f)),d||(d=g.createDocumentFragment(),J.clean(a,g,d,c)),e&&(J.fragments[h]=f?d:1),{fragment:d,cacheable:e}},J.fragments={},J.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){J.fn[a]=function(c){var d=[],e=J(c),f=1===this.length&&this[0].parentNode;if(f&&11===f.nodeType&&1===f.childNodes.length&&1===e.length)return e[b](this[0]),this;for(var g=0,h=e.length;h>g;g++){var i=(g>0?this.clone(!0):this).get();J(e[g])[b](i),d=d.concat(i)}return this.pushStack(d,a,e.selector)}}),J.extend({clone:function(a,b,c){var d,e,f,g=J.support.html5Clone||J.isXMLDoc(a)||!xb.test("<"+a.nodeName+">")?a.cloneNode(!0):q(a);if(!(J.support.noCloneEvent&&J.support.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||J.isXMLDoc(a)))for(u(a,g),d=t(a),e=t(g),f=0;d[f];++f)e[f]&&u(d[f],e[f]);if(b&&(v(a,g),c))for(d=t(a),e=t(g),f=0;d[f];++f)v(d[f],e[f]);return d=e=null,g},clean:function(a,b,c,d){var e,f,g,h=[];b=b||G,"undefined"==typeof b.createElement&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||G);for(var i,j=0;null!=(i=a[j]);j++)if("number"==typeof i&&(i+=""),i){if("string"==typeof i)if(ub.test(i)){i=i.replace(rb,"<$1></$2>");var k,l=(sb.exec(i)||["",""])[1].toLowerCase(),m=Bb[l]||Bb._default,n=m[0],o=b.createElement("div"),p=Cb.childNodes;for(b===G?Cb.appendChild(o):x(b).appendChild(o),o.innerHTML=m[1]+i+m[2];n--;)o=o.lastChild;if(!J.support.tbody){var q=tb.test(i),s="table"!==l||q?"<table>"!==m[1]||q?[]:o.childNodes:o.firstChild&&o.firstChild.childNodes;for(g=s.length-1;g>=0;--g)J.nodeName(s[g],"tbody")&&!s[g].childNodes.length&&s[g].parentNode.removeChild(s[g])}!J.support.leadingWhitespace&&qb.test(i)&&o.insertBefore(b.createTextNode(qb.exec(i)[0]),o.firstChild),i=o.childNodes,o&&(o.parentNode.removeChild(o),p.length>0&&(k=p[p.length-1],k&&k.parentNode&&k.parentNode.removeChild(k)))}else i=b.createTextNode(i);var t;if(!J.support.appendChecked)if(i[0]&&"number"==typeof(t=i.length))for(g=0;t>g;g++)r(i[g]);else r(i);i.nodeType?h.push(i):h=J.merge(h,i)}if(c)for(e=function(a){return!a.type||zb.test(a.type)},j=0;h[j];j++)if(f=h[j],d&&J.nodeName(f,"script")&&(!f.type||zb.test(f.type)))d.push(f.parentNode?f.parentNode.removeChild(f):f);else{if(1===f.nodeType){var u=J.grep(f.getElementsByTagName("script"),e);h.splice.apply(h,[j+1,0].concat(u))}c.appendChild(f)}return h},cleanData:function(a){for(var b,c,d,e=J.cache,f=J.event.special,g=J.support.deleteExpando,h=0;null!=(d=a[h]);h++)if((!d.nodeName||!J.noData[d.nodeName.toLowerCase()])&&(c=d[J.expando])){if(b=e[c],b&&b.events){for(var i in b.events)f[i]?J.event.remove(d,i):J.removeEvent(d,i,b.handle);b.handle&&(b.handle.elem=null)}g?delete d[J.expando]:d.removeAttribute&&d.removeAttribute(J.expando),delete e[c]}}});var Db,Eb,Fb,Gb=/alpha\([^)]*\)/i,Hb=/opacity=([^)]*)/,Ib=/([A-Z]|^ms)/g,Jb=/^[\-+]?(?:\d*\.)?\d+$/i,Kb=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,Lb=/^([\-+])=([\-+.\de]+)/,Mb=/^margin/,Nb={position:"absolute",visibility:"hidden",display:"block"},Ob=["Top","Right","Bottom","Left"];J.fn.css=function(a,c){return J.access(this,function(a,c,d){return d!==b?J.style(a,c,d):J.css(a,c)},a,c,arguments.length>1)},J.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Db(a,"opacity");return""===c?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":J.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var f,g,h=J.camelCase(c),i=a.style,j=J.cssHooks[h];if(c=J.cssProps[h]||h,d===b)return j&&"get"in j&&(f=j.get(a,!1,e))!==b?f:i[c];if(g=typeof d,"string"===g&&(f=Lb.exec(d))&&(d=+(f[1]+1)*+f[2]+parseFloat(J.css(a,c)),g="number"),null==d||"number"===g&&isNaN(d))return;if("number"===g&&!J.cssNumber[h]&&(d+="px"),!(j&&"set"in j&&(d=j.set(a,d))===b))try{i[c]=d}catch(k){}}},css:function(a,c,d){var e,f;return c=J.camelCase(c),f=J.cssHooks[c],c=J.cssProps[c]||c,"cssFloat"===c&&(c="float"),f&&"get"in f&&(e=f.get(a,!0,d))!==b?e:Db?Db(a,c):void 0},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),J.curCSS=J.css,G.defaultView&&G.defaultView.getComputedStyle&&(Eb=function(a,b){var c,d,e,f,g=a.style;return b=b.replace(Ib,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),""===c&&!J.contains(a.ownerDocument.documentElement,a)&&(c=J.style(a,b))),!J.support.pixelMargin&&e&&Mb.test(b)&&Kb.test(c)&&(f=g.width,g.width=c,c=e.width,g.width=f),c}),G.documentElement.currentStyle&&(Fb=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;return null==f&&g&&(e=g[b])&&(f=e),Kb.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left="fontSize"===b?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d)),""===f?"auto":f}),Db=Eb||Fb,J.each(["height","width"],function(a,b){J.cssHooks[b]={get:function(a,c,d){return c?0!==a.offsetWidth?p(a,b,d):J.swap(a,Nb,function(){return p(a,b,d)}):void 0},set:function(a,b){return Jb.test(b)?b+"px":b}}}),J.support.opacity||(J.cssHooks.opacity={get:function(a,b){return Hb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=J.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,b>=1&&""===J.trim(f.replace(Gb,""))&&(c.removeAttribute("filter"),d&&!d.filter)||(c.filter=Gb.test(f)?f.replace(Gb,e):f+" "+e)}}),J(function(){J.support.reliableMarginRight||(J.cssHooks.marginRight={get:function(a,b){return J.swap(a,{display:"inline-block"},function(){return b?Db(a,"margin-right"):a.style.marginRight})}})}),J.expr&&J.expr.filters&&(J.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return 0===b&&0===c||!J.support.reliableHiddenOffsets&&"none"===(a.style&&a.style.display||J.css(a,"display"))},J.expr.filters.visible=function(a){return!J.expr.filters.hidden(a)}),J.each({margin:"",padding:"",border:"Width"},function(a,b){J.cssHooks[a+b]={expand:function(c){var d,e="string"==typeof c?c.split(" "):[c],f={};for(d=0;4>d;d++)f[a+Ob[d]+b]=e[d]||e[d-2]||e[0];return f}}});var Pb,Qb,Rb=/%20/g,Sb=/\[\]$/,Tb=/\r?\n/g,Ub=/#.*$/,Vb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Wb=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,Xb=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,Yb=/^(?:GET|HEAD)$/,Zb=/^\/\//,$b=/\?/,_b=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,ac=/^(?:select|textarea)/i,bc=/\s+/,cc=/([?&])_=[^&]*/,dc=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,ec=J.fn.load,fc={},gc={},hc=["*/"]+["*"];try{Pb=I.href}catch(ic){Pb=G.createElement("a"),Pb.href="",Pb=Pb.href}Qb=dc.exec(Pb.toLowerCase())||[],J.fn.extend({load:function(a,c,d){if("string"!=typeof a&&ec)return ec.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var f=a.slice(e,a.length);a=a.slice(0,e)}var g="GET";c&&(J.isFunction(c)?(d=c,c=b):"object"==typeof c&&(c=J.param(c,J.ajaxSettings.traditional),g="POST"));var h=this;return J.ajax({url:a,type:g,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),h.html(f?J("<div>").append(c.replace(_b,"")).find(f):c)),d&&h.each(d,[c,b,a])}}),this},serialize:function(){return J.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?J.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ac.test(this.nodeName)||Wb.test(this.type))}).map(function(a,b){var c=J(this).val();return null==c?null:J.isArray(c)?J.map(c,function(a){return{name:b.name,value:a.replace(Tb,"\r\n")}}):{name:b.name,value:c.replace(Tb,"\r\n")}}).get()}}),J.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){J.fn[b]=function(a){return this.on(b,a)}}),J.each(["get","post"],function(a,c){J[c]=function(a,d,e,f){return J.isFunction(d)&&(f=f||e,e=d,d=b),J.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),J.extend({getScript:function(a,c){return J.get(a,b,c,"script")},getJSON:function(a,b,c){return J.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?m(a,J.ajaxSettings):(b=a,a=J.ajaxSettings),m(a,b),a},ajaxSettings:{url:Pb,isLocal:Xb.test(Qb[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":hc},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":J.parseJSON,"text xml":J.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:o(fc),ajaxTransport:o(gc),ajax:function(a,c){function d(a,c,d,g){if(2!==x){x=2,i&&clearTimeout(i),h=b,f=g||"",y.readyState=a>0?4:0;var l,n,o,v,w,z=c,A=d?k(p,y,d):b;if(a>=200&&300>a||304===a)if(p.ifModified&&((v=y.getResponseHeader("Last-Modified"))&&(J.lastModified[e]=v),(w=y.getResponseHeader("Etag"))&&(J.etag[e]=w)),304===a)z="notmodified",l=!0;else try{n=j(p,A),z="success",l=!0}catch(B){z="parsererror",o=B}else o=z,(!z||a)&&(z="error",0>a&&(a=0));y.status=a,y.statusText=""+(c||z),l?s.resolveWith(q,[n,z,y]):s.rejectWith(q,[y,z,o]),y.statusCode(u),u=b,m&&r.trigger("ajax"+(l?"Success":"Error"),[y,p,l?n:o]),t.fireWith(q,[y,z]),m&&(r.trigger("ajaxComplete",[y,p]),--J.active||J.event.trigger("ajaxStop"))}}"object"==typeof a&&(c=a,a=b),c=c||{};var e,f,g,h,i,l,m,o,p=J.ajaxSetup({},c),q=p.context||p,r=q!==p&&(q.nodeType||q instanceof J)?J(q):J.event,s=J.Deferred(),t=J.Callbacks("once memory"),u=p.statusCode||{},v={},w={},x=0,y={readyState:0,setRequestHeader:function(a,b){if(!x){var c=a.toLowerCase();a=w[c]=w[c]||a,v[a]=b}return this},getAllResponseHeaders:function(){return 2===x?f:null},getResponseHeader:function(a){var c;if(2===x){if(!g)for(g={};c=Vb.exec(f);)g[c[1].toLowerCase()]=c[2];c=g[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return x||(p.mimeType=a),this},abort:function(a){return a=a||"abort",h&&h.abort(a),d(0,a),this}};if(s.promise(y),y.success=y.done,y.error=y.fail,y.complete=t.add,y.statusCode=function(a){if(a){var b;if(2>x)for(b in a)u[b]=[u[b],a[b]];else b=a[y.status],y.then(b,b)}return this},p.url=((a||p.url)+"").replace(Ub,"").replace(Zb,Qb[1]+"//"),p.dataTypes=J.trim(p.dataType||"*").toLowerCase().split(bc),null==p.crossDomain&&(l=dc.exec(p.url.toLowerCase()),p.crossDomain=!(!l||l[1]==Qb[1]&&l[2]==Qb[2]&&(l[3]||("http:"===l[1]?80:443))==(Qb[3]||("http:"===Qb[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=J.param(p.data,p.traditional)),n(fc,p,c,y),2===x)return!1;if(m=p.global,p.type=p.type.toUpperCase(),p.hasContent=!Yb.test(p.type),m&&0===J.active++&&J.event.trigger("ajaxStart"),!p.hasContent&&(p.data&&(p.url+=($b.test(p.url)?"&":"?")+p.data,delete p.data),e=p.url,p.cache===!1)){var z=J.now(),A=p.url.replace(cc,"$1_="+z);p.url=A+(A===p.url?($b.test(p.url)?"&":"?")+"_="+z:"")}(p.data&&p.hasContent&&p.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",p.contentType),p.ifModified&&(e=e||p.url,J.lastModified[e]&&y.setRequestHeader("If-Modified-Since",J.lastModified[e]),J.etag[e]&&y.setRequestHeader("If-None-Match",J.etag[e])),y.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+hc+"; q=0.01":""):p.accepts["*"]);for(o in p.headers)y.setRequestHeader(o,p.headers[o]);if(p.beforeSend&&(p.beforeSend.call(q,y,p)===!1||2===x))return y.abort(),!1;for(o in{success:1,error:1,complete:1})y[o](p[o]);if(h=n(gc,p,c,y)){y.readyState=1,m&&r.trigger("ajaxSend",[y,p]),p.async&&p.timeout>0&&(i=setTimeout(function(){y.abort("timeout")},p.timeout));try{x=1,h.send(v,d)}catch(B){if(!(2>x))throw B;d(-1,B)}}else d(-1,"No Transport");return y},param:function(a,c){var d=[],e=function(a,b){b=J.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(c===b&&(c=J.ajaxSettings.traditional),J.isArray(a)||a.jquery&&!J.isPlainObject(a))J.each(a,function(){e(this.name,this.value)});else for(var f in a)l(f,a[f],c,e);return d.join("&").replace(Rb,"+")}}),J.extend({active:0,lastModified:{},etag:{}});var jc=J.now(),kc=/(\=)\?(&|$)|\?\?/i;J.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return J.expando+"_"+jc++}}),J.ajaxPrefilter("json jsonp",function(b,c,d){var e="string"==typeof b.data&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if("jsonp"===b.dataTypes[0]||b.jsonp!==!1&&(kc.test(b.url)||e&&kc.test(b.data))){var f,g=b.jsonpCallback=J.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h=a[g],i=b.url,j=b.data,k="$1"+g+"$2";return b.jsonp!==!1&&(i=i.replace(kc,k),b.url===i&&(e&&(j=j.replace(kc,k)),b.data===j&&(i+=(/\?/.test(i)?"&":"?")+b.jsonp+"="+g))),b.url=i,b.data=j,a[g]=function(a){f=[a]},d.always(function(){a[g]=h,f&&J.isFunction(h)&&a[g](f[0])}),b.converters["script json"]=function(){return f||J.error(g+" was not called"),f[0]},b.dataTypes[0]="json","script"}}),J.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return J.globalEval(a),a}}}),J.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),J.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=G.head||G.getElementsByTagName("head")[0]||G.documentElement;return{send:function(e,f){c=G.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){(e||!c.readyState||/loaded|complete/.test(c.readyState))&&(c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||f(200,"success"))},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var lc,mc=a.ActiveXObject?function(){for(var a in lc)lc[a](0,1)}:!1,nc=0;J.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&i()||h()}:i,function(a){J.extend(J.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(J.ajaxSettings.xhr()),J.support.ajax&&J.ajaxTransport(function(c){if(!c.crossDomain||J.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();if(c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async),c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||4===i.readyState))if(d=b,g&&(i.onreadystatechange=J.noop,mc&&delete lc[g]),e)4!==i.readyState&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}h||!c.isLocal||c.crossDomain?1223===h&&(h=204):h=l.text?200:404}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async&&4!==i.readyState?(g=++nc,mc&&(lc||(lc={},J(a).unload(mc)),lc[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var oc,pc,qc,rc,sc={},tc=/^(?:toggle|show|hide)$/,uc=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,vc=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];J.fn.extend({show:function(a,b,c){var f,g;if(a||0===a)return this.animate(e("show",3),a,b,c);for(var h=0,i=this.length;i>h;h++)f=this[h],f.style&&(g=f.style.display,!J._data(f,"olddisplay")&&"none"===g&&(g=f.style.display=""),(""===g&&"none"===J.css(f,"display")||!J.contains(f.ownerDocument.documentElement,f))&&J._data(f,"olddisplay",d(f.nodeName)));for(h=0;i>h;h++)f=this[h],f.style&&(g=f.style.display,(""===g||"none"===g)&&(f.style.display=J._data(f,"olddisplay")||""));return this},hide:function(a,b,c){if(a||0===a)return this.animate(e("hide",3),a,b,c);for(var d,f,g=0,h=this.length;h>g;g++)d=this[g],d.style&&(f=J.css(d,"display"),"none"!==f&&!J._data(d,"olddisplay")&&J._data(d,"olddisplay",f));for(g=0;h>g;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:J.fn.toggle,toggle:function(a,b,c){var d="boolean"==typeof a;return J.isFunction(a)&&J.isFunction(b)?this._toggle.apply(this,arguments):null==a||d?this.each(function(){var b=d?a:J(this).is(":hidden");J(this)[b?"show":"hide"]()}):this.animate(e("toggle",3),a,b,c),this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,e){function f(){g.queue===!1&&J._mark(this);var b,c,e,f,h,i,j,k,l,m,n,o=J.extend({},g),p=1===this.nodeType,q=p&&J(this).is(":hidden");o.animatedProperties={};for(e in a)if(b=J.camelCase(e),e!==b&&(a[b]=a[e],delete a[e]),(h=J.cssHooks[b])&&"expand"in h){i=h.expand(a[b]),delete a[b];for(e in i)e in a||(a[e]=i[e])}for(b in a){if(c=a[b],J.isArray(c)?(o.animatedProperties[b]=c[1],c=a[b]=c[0]):o.animatedProperties[b]=o.specialEasing&&o.specialEasing[b]||o.easing||"swing","hide"===c&&q||"show"===c&&!q)return o.complete.call(this);p&&("height"===b||"width"===b)&&(o.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],"inline"===J.css(this,"display")&&"none"===J.css(this,"float")&&(J.support.inlineBlockNeedsLayout&&"inline"!==d(this.nodeName)?this.style.zoom=1:this.style.display="inline-block"))}null!=o.overflow&&(this.style.overflow="hidden");for(e in a)f=new J.fx(this,o,e),c=a[e],tc.test(c)?(n=J._data(this,"toggle"+e)||("toggle"===c?q?"show":"hide":0),n?(J._data(this,"toggle"+e,"show"===n?"hide":"show"),f[n]()):f[c]()):(j=uc.exec(c),k=f.cur(),j?(l=parseFloat(j[2]),m=j[3]||(J.cssNumber[e]?"":"px"),"px"!==m&&(J.style(this,e,(l||1)+m),k=(l||1)/f.cur()*k,J.style(this,e,k+m)),j[1]&&(l=("-="===j[1]?-1:1)*l+k),f.custom(k,l,m)):f.custom(k,c,""));return!0}var g=J.speed(b,c,e);return J.isEmptyObject(a)?this.each(g.complete,[!1]):(a=J.extend({},a),g.queue===!1?this.each(f):this.queue(g.queue,f))},stop:function(a,c,d){return"string"!=typeof a&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){function b(a,b,c){var e=b[c];J.removeData(a,c,!0),e.stop(d)}var c,e=!1,f=J.timers,g=J._data(this);if(d||J._unmark(!0,this),null==a)for(c in g)g[c]&&g[c].stop&&c.indexOf(".run")===c.length-4&&b(this,g,c);else g[c=a+".run"]&&g[c].stop&&b(this,g,c);for(c=f.length;c--;)f[c].elem===this&&(null==a||f[c].queue===a)&&(d?f[c](!0):f[c].saveState(),e=!0,f.splice(c,1));(!d||!e)&&J.dequeue(this,a)})}}),J.each({slideDown:e("show",1),slideUp:e("hide",1),slideToggle:e("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){J.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),J.extend({speed:function(a,b,c){var d=a&&"object"==typeof a?J.extend({},a):{complete:c||!c&&b||J.isFunction(a)&&a,duration:a,easing:c&&b||b&&!J.isFunction(b)&&b};return d.duration=J.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in J.fx.speeds?J.fx.speeds[d.duration]:J.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(a){J.isFunction(d.old)&&d.old.call(this),d.queue?J.dequeue(this,d.queue):a!==!1&&J._unmark(this)},d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),J.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(J.fx.step[this.prop]||J.fx.step._default)(this)},cur:function(){if(null!=this.elem[this.prop]&&(!this.elem.style||null==this.elem.style[this.prop]))return this.elem[this.prop];var a,b=J.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?b&&"auto"!==b?b:0:a},custom:function(a,c,d){function e(a){return f.step(a)}var f=this,h=J.fx;this.startTime=rc||g(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(J.cssNumber[this.prop]?"":"px"),e.queue=this.options.queue,e.elem=this.elem,e.saveState=function(){J._data(f.elem,"fxshow"+f.prop)===b&&(f.options.hide?J._data(f.elem,"fxshow"+f.prop,f.start):f.options.show&&J._data(f.elem,"fxshow"+f.prop,f.end))},e()&&J.timers.push(e)&&!qc&&(qc=setInterval(h.tick,h.interval))},show:function(){var a=J._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||J.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom("width"===this.prop||"height"===this.prop?1:0,this.cur()),J(this.elem).show()},hide:function(){this.options.orig[this.prop]=J._data(this.elem,"fxshow"+this.prop)||J.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=rc||g(),f=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(f=!1);if(f){if(null!=i.overflow&&!J.support.shrinkWrapBlocks&&J.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&J(h).hide(),i.hide||i.show)for(b in i.animatedProperties)J.style(h,b,i.orig[b]),J.removeData(h,"fxshow"+b,!0),J.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}return 1/0==i.duration?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=J.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update(),!0}},J.extend(J.fx,{tick:function(){for(var a,b=J.timers,c=0;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||J.fx.stop()},interval:13,stop:function(){clearInterval(qc),qc=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){J.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&null!=a.elem.style[a.prop]?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),J.each(vc.concat.apply([],vc),function(a,b){b.indexOf("margin")&&(J.fx.step[b]=function(a){J.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),J.expr&&J.expr.filters&&(J.expr.filters.animated=function(a){return J.grep(J.timers,function(b){return a===b.elem}).length});var wc,xc=/^t(?:able|d|h)$/i,yc=/^(?:body|html)$/i;wc="getBoundingClientRect"in G.documentElement?function(a,b,d,e){try{e=a.getBoundingClientRect()}catch(f){}if(!e||!J.contains(d,a))return e?{top:e.top,left:e.left}:{top:0,left:0};var g=b.body,h=c(b),i=d.clientTop||g.clientTop||0,j=d.clientLeft||g.clientLeft||0,k=h.pageYOffset||J.support.boxModel&&d.scrollTop||g.scrollTop,l=h.pageXOffset||J.support.boxModel&&d.scrollLeft||g.scrollLeft,m=e.top+k-i,n=e.left+l-j;return{top:m,left:n}}:function(a,b,c){for(var d,e=a.offsetParent,f=a,g=b.body,h=b.defaultView,i=h?h.getComputedStyle(a,null):a.currentStyle,j=a.offsetTop,k=a.offsetLeft;(a=a.parentNode)&&a!==g&&a!==c&&(!J.support.fixedPosition||"fixed"!==i.position);)d=h?h.getComputedStyle(a,null):a.currentStyle,j-=a.scrollTop,k-=a.scrollLeft,a===e&&(j+=a.offsetTop,k+=a.offsetLeft,J.support.doesNotAddBorder&&(!J.support.doesAddBorderForTableAndCells||!xc.test(a.nodeName))&&(j+=parseFloat(d.borderTopWidth)||0,k+=parseFloat(d.borderLeftWidth)||0),f=e,e=a.offsetParent),J.support.subtractsBorderForOverflowNotVisible&&"visible"!==d.overflow&&(j+=parseFloat(d.borderTopWidth)||0,k+=parseFloat(d.borderLeftWidth)||0),i=d;return("relative"===i.position||"static"===i.position)&&(j+=g.offsetTop,k+=g.offsetLeft),J.support.fixedPosition&&"fixed"===i.position&&(j+=Math.max(c.scrollTop,g.scrollTop),k+=Math.max(c.scrollLeft,g.scrollLeft)),{top:j,left:k}},J.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){J.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;return d?c===d.body?J.offset.bodyOffset(c):wc(c,d,d.documentElement):null},J.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return J.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(J.css(a,"marginTop"))||0,c+=parseFloat(J.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=J.css(a,"position");"static"===d&&(a.style.position="relative");var e,f,g=J(a),h=g.offset(),i=J.css(a,"top"),j=J.css(a,"left"),k=("absolute"===d||"fixed"===d)&&J.inArray("auto",[i,j])>-1,l={},m={};k?(m=g.position(),e=m.top,f=m.left):(e=parseFloat(i)||0,f=parseFloat(j)||0),J.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(l.top=b.top-h.top+e),null!=b.left&&(l.left=b.left-h.left+f),"using"in b?b.using.call(a,l):g.css(l)}},J.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=yc.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(J.css(a,"marginTop"))||0,c.left-=parseFloat(J.css(a,"marginLeft"))||0,d.top+=parseFloat(J.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(J.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||G.body;a&&!yc.test(a.nodeName)&&"static"===J.css(a,"position");)a=a.offsetParent;return a})}}),J.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,d){var e=/Y/.test(d);J.fn[a]=function(f){return J.access(this,function(a,f,g){var h=c(a);return g===b?h?d in h?h[d]:J.support.boxModel&&h.document.documentElement[f]||h.document.body[f]:a[f]:void(h?h.scrollTo(e?J(h).scrollLeft():g,e?g:J(h).scrollTop()):a[f]=g)},a,f,arguments.length,null)}}),J.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,f="offset"+a;J.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(J.css(a,c,"padding")):this[c]():null},J.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(J.css(b,c,a?"margin":"border")):this[c]():null},J.fn[c]=function(a){return J.access(this,function(a,c,g){var h,i,j,k;return J.isWindow(a)?(h=a.document,i=h.documentElement[d],J.support.boxModel&&i||h.body&&h.body[d]||i):9===a.nodeType?(h=a.documentElement,h[d]>=h[e]?h[d]:Math.max(a.body[e],h[e],a.body[f],h[f])):g===b?(j=J.css(a,c),k=parseFloat(j),J.isNumeric(k)?k:j):void J(a).css(c,g)},c,a,arguments.length,null)}}),a.jQuery=a.$=J,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return J})}(window);