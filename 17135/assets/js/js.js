$(function(){

	var thisURL = window.location.pathname;
	$(".ctop_navCon .nav ul li").each(function(){
		//alert(this.href)
		$(this).removeClass("on"); 
		var aUrl=$(this).find("a").attr("href");
		if(aUrl == thisURL){
			$(this).addClass("on"); 
			return false;
		};
		var ProLisU=thisURL.split("/");
		if(ProLisU[1]=="details")
		{
			$(".ctop_navCon .nav ul li:eq(1)").addClass("on");
			return false;
		}
	});

	$(".caboutSon_navCon ul li").each(function(){
		//alert(this.href)
		$(this).removeClass("on"); 
		var aUrl=$(this).find("a").attr("href");
		if(aUrl == thisURL){
			$(this).addClass("on");
			$(".ctop_navCon .nav ul li:eq(4)").addClass("on");  
			return false;
		};
	})


	var ind_on=$(".ctop_navCon .nav ul li.on").index();
	if(ind_on<0)
	{
		ind_on=0;
	}
	nav($(".ctop_navCon .nav_bg"),ind_on);
	
	
	$(".ctop_navCon .nav ul li").hover(function(){
		var ind=$(this).index();
		$(this).find("div.cnavSon").show().animate({"opacity":"1","top":"92px"},200);
		$(this).children("a").css("color","#4db233");
		nav($(".ctop_navCon .nav_bg"),ind);	
	},function(){
		var ind=$(this).index();
		if(ind != ind_on)
		{
			$(this).children("a").css("color","#555");
			nav($(".ctop_navCon .nav_bg"),ind_on);
		}	
		$(this).find("div.cnavSon").animate({"opacity":"0","top":"110px"},200,function(){
			$(this).hide();
		});
	})
	function nav(obj,ind){
		obj.stop().animate({"left":10*(ind+1)+110*ind+"px"},200);
	}

	/*底部 外链*/
	var foot_hf=true;
	$(".cfoot_clCon b.btn").click(function(){
		if(foot_hf)
		{
			$(".cfootclTxt").css("height","auto");
			$(this).html("收起");
			foot_hf=false;
		}
		else
		{
			$(".cfootclTxt").css("height","56px");
			$(this).html("查看更多");
			foot_hf=true;
		}
		
	})

	

	//底部浮动
	var c_tf=true;
	var c_tsz=true;
	   $(".cFootFdBox .fh").click(function(){
	   	  c_tsz=false;
	     $(".cFootFdBox").stop(false,false).animate({"right":"100%","opacity":"0"},500);
	     $(".cFootFdBtn").stop(false,false).animate({"left":"0px","opacity":"1"},500);
	   }); 

	   $(".cFootFdBtn").click(function(){
	    
	     $(".cFootFdBox").stop(false,false).animate({"right":"0","opacity":"1"},500);
	      $(".cFootFdBtn").stop(false,false).animate({"left":"-140px","opacity":"0"},500);
	   });      

	   $(window).scroll(function(){

	     if($(this).scrollTop()>700)
	     {
	       if(c_tf)
	       {
	         c_tf=false;
	          $(".cFootFdBox").stop(false,false).animate({"right":"0px","opacity":"1"},500);
	         $(".cFootFdBtn").stop(false,false).animate({"left":"-140px","opacity":"0"},500);
	       }
	       
	     }
	     else
	     {
	       
	       if(c_tf==false)
	       {
	       	 if(c_tsz)
	       	 {
	       	 	c_tf=true;
	       	 	$(".cFootFdBox").stop(false,false).animate({"right":"0px","opacity":"0"},500);
	       	 	$(".cFootFdBtn").stop(false,false).animate({"left":"0px","opacity":"1"},500);
	       	 }
	         
	       }
	     }
	   })  

	

	//进度条
	$(".clistXq_jd").each(function(){
		jdShow($(this).find("div.jd").width(),$(this).find("i").html(),$(this).find("div.jd_on"),$(this).find("i"));
	});


	$(".cbiao_sl").each(function(){
		$(this).find(".txt ul li").each(function(){
			jdShow($(this).find("div.jd").width(),$(this).find("div.jd i").html(),$(this).find("div.jd_on"),$(this).find("div.jd i"));
		})
	});

	$(".cFina_list4 .cFina_con ul li").each(function(){
		jdShow($(this).find("div.jd").width(),$(this).find("div.jd i").html(),$(this).find("div.jd_on"),$(this).find("div.jd i"));
	});
	// $(".clist_con").on("change",function(){
	// 	alert(11)
	// })
	// $(".clist_con ul li").each(function(){
	// 	alert(111)
	// 	jdShow($(this).find("div.jd").width(),$(this).find("div.jd i").html(),$(this).find("div.jd_on"),$(this).find("div.jd i"));
	// });

	//进度条方法
	function jdShow(widz,num,dom_w,dom_ht){
		//num=Math.floor(num*100)/100;
		dom_w.css("width",num*widz/100+"px");
		dom_ht.html(num+"%");
	}

	//tab 切换
	$(".cfootTxt_con .app_ewm .txt h6").mouseover(function(){

		var ind=$(this).index();
		
		if(ind==0)
		{
			$(this).parent().siblings(".sj").stop().animate({"top":"37px"},300);
		}
		else
		{
			$(this).parent().siblings(".sj").stop().animate({"top":"75px"},300);
		}
		tabShow($(this).parent().siblings(".pic").find("img:eq("+ind+")"),$(this));
		
		
	})

	$(".cnews_box .tit a.tab").hover(function(){
		var ind=$(this).index();
		tabShow($(this).parent().siblings(".con").find(".list:eq("+ind+")"),$(this));
		var mySrc=$(this).attr("href");
		$(this).siblings(".mor").attr("href",mySrc);
	});

	
	$(".clistXq_zlConXh b").hover(function(){
		var ind=$(this).index()-1;
		tabShow($(this).parent().siblings(".clistXq_zlConPicBox").find(".clistXq_zlConPic:eq("+ind+")"),$(this));
	});

	$(".clistXq_zlTit b").click(function(){
		var ind=$(this).index();
		tabShow($(this).parent().siblings(".clistXq_zlCon").find(".clistXq_zlCon_Num:eq("+ind+")"),$(this));
	});

	$("#cswtTit a").click(function(){
		var ind=$(this).index();
		tabShow($("#cswtCon").find(".cswtList:eq("+ind+")"),$(this));
	});

	//tab 切换 方法
	function tabShow(hz,hztit){
		hz.show().siblings().hide();
		hztit.addClass("on").siblings().removeClass("on");
	}


	


	//添加“ ，” 
	$(".money_dh").each(function(){
		num_k($(this).html(),$(this));
	})
	function num_k(num,dom){
		var numArr=num.split(".");
		var numOne=numArr[0];
		var numTwo=numArr[1];
		var j=0;
		var str_num="";
		var mycars = new Array(1,2)
		for(var i=numOne.length-1;i>=0;i--){

			j++;
			if(j%3==0 && i!=0)
			{
				str_num=","+numOne.charAt(i)+str_num;	
			}
			else
			{
				str_num=numOne.charAt(i)+str_num;
			}
			
		}
		if(numTwo)
		{
			dom.html(str_num+"."+numTwo);
		}
		else
		{
			dom.html(str_num);
		}
		
	}


	//我要借款 JS
	$(".cLoanForm_ListTit ul li").click(function(){
		$(this).addClass("on").siblings("li").removeClass("on");
		var ind=$(this).index();
		var indA=ind+1;
		var txt=$(this).find("h6").html();
		$(".cLoanForm_con ul li:eq(0)").find("input").val(txt).attr("tyZy",indA);
		$(".cLoanBan_con ul li:eq("+ind+")").addClass("on").siblings("li").removeClass("on");

	})

	//招聘
	$(".cszpCon .cszpList dl").each(function(){
		$(this).find("dt").click(function(){
			$(this).siblings("dd").slideToggle(500).parent().siblings("dl").find("dd").slideUp(500);
		})
	})

	//问答
	$(".cswtCon dl").each(function(){
		$(this).find("dt").click(function(){
			if($(this).siblings("dd").is(":hidden"))
			{
				$(this).siblings("dd").slideToggle(500).parent().addClass("on").siblings("dl").removeClass("on").find("dd").slideUp(500);
			}	
		})
	});


	//返回顶部
	$(".cSlideBox ul li.top").click(function(){
		$("body,html").stop().animate({"scrollTop":"0"},500);
	})

	

	//导航浮动	
	$(window).scroll(function(){
		if($(this).scrollTop()>45)
		{
			$(".ctop_nav").addClass("on");
		}
		else
		{
			$(".ctop_nav").removeClass("on");	
		}
	});

	

})

;(function(){

	

	//弹出框
	$.fn.TcWin=function(opt){
		var defaults={
			tcCloName:$("#czcClo,.cbgBox"),             //点击关闭 ID
			tcTitName:$(this).find(".czcBoxTit"),       //弹出标题文本总ID 
			tcTitTxt:$(this).find(".czcBoxTit span"),   //弹出标题文本ID    
			tcTxtName:$(this).find(".czcBoxTxt"),       //弹出文本ID    
			tcBgName:$(".cbgBox"),                      //弹出背景
			tcTit:"",                                   //弹出标题文本
			tcTxt:"",                                   //弹出文本
			tcClo:$(this).find(".czcBoxTit i"),         //关闭按钮
			tcDs:false,                                 //自动关闭 开启 true  关闭 false
			tcDsTime:1000,                              //自动关闭时间
			cgSwi:""                                    //是否可以关闭
		}
		var opt=$.extend(defaults,opt);

		this.each(function(){
			_this=$(this);

			//标题文本
			if(opt.tcTit == "")
			{
				opt.tcTitName.hide();
			}
			else
			{
				opt.tcTitTxt.html(opt.tcTit);
			}

			//内容文本
			opt.tcTxtName.html(opt.tcTxt);

			_this.css({"top":"50%","margin-top":_this.height()/2*-1+"px"});
			//显示
			openShow();

			//点击关闭
			opt.tcCloName.bind("click",function(){
				if(opt.cgSwi != "off")
				{
					closeShow();
				}
				
			});

			//自动关闭
			if(opt.tcDs)
			{
				setTimeout(function(){
					closeShow();
				},opt.tcDsTime);
			}

			//关闭方法
			function closeShow(){
				opt.tcBgName.stop().animate({"opacity":"0"},500,function(){
					$(this).hide()
				});
				_this.stop().animate({"opacity":"0"},500,function(){
					$(this).hide();
				    opt.tcTitTxt.html("");
					opt.tcTxtName.html("");
				});
			};

			//弹出方法
			function openShow(){
				opt.tcBgName.show().stop().animate({"opacity":"0.5"},500);
				_this.show().stop().animate({"opacity":"1"},500);
			}

		});

		return this;
	}

	//input验证
	$.fn.InpYz=function(opt){

		var defaults={
			//参数
			inputNum:"",  //input输入框
			passEye:"",  //密码眼睛
			inpSrc:1    //跳转地址判断

		};

		var opt =$.extend(defaults,opt);
	
		this.each(function(){

			var _this=$(this);
			var zxHd=true;
			var cInps=eval(opt.inputNum);
			
			$.each(opt.inputNum,function(n,value){

				var $dom=value;
				//input提示框
				if($dom.next(".ts")[0])
				{
			       cPrompt($dom);
				};

				$dom.blur(function(){

					if(n=="phone")  //登录/忘记密码 手机号码 验证
					{
						if(cPhone(value)){
							var urls = "/login/checkPhone.html";  //服务器页面地址
							var phoneVal = $dom.val();
							var sendData ={"phone":phoneVal,"source":"login"};
							cAjaxPhone(urls,"post",sendData,$dom);
						}
					}
					else if(n=="phoneR")  //注册手机号码 验证
					{
						if(cPhone(value)){
							var urls = "/login/checkPhone.html";  //服务器页面地址
							var phoneVal = $dom.val();
							var sendData ={"phone":phoneVal,"source":"register"};
							cAjaxPhone(urls,"post",sendData,$dom);
						}
					}
					else if(n=="code")  //图片验证码 验证
					{
						if(cCode(value)){

							var urls = "/login/verify.html";
							var YzmVal = $dom.val();
							var sendData ={"captcha":YzmVal};
							cAjaxCode(urls,"post",sendData,$dom);
						};
					}
					else if(n=="ses")  //短信验证码 验证
					{
						cSms(value);
					}
					else if(n=="password")  //登录密码 验证
					{
						cPass(value);
					}
					else if(n=="passwordLog")  //登录密码 验证
					{
						return true;
						//cPass(value);
					}
					// else if(n=="userTjm")  //好友推荐码 验证
					// {
					// 	cTjnum(value);
					// }
					else if(n=="phoneL")  //借款手机号码
					{
						cPhone(value);
					}
					else if(n=="money")  //借款金额
					{
						cMones(value);
					}
					else if(n=="name")  //姓名
					{
						cNames(value);
					}
					else if(n=="address")   //具体地址
					{
						cAir(value,"具体地址");
					}
					else if(n=="data")    //借款期限
					{
						cMones(value,"借款期限");
					}
				});				
			});

			//协议
			if(cInps.userCheck)
			{
				cInps.userCheck.click(function(){
					cGree(cInps.userCheck);
				});
			};

			//input提示
			function cPrompt(dom){
				dom.next(".ts").click(function(){
					$(this).hide();
					dom.focus();
					dom.next(".cw").hide();
				});

				if($.trim(dom.val()) != ""){
					dom.next(".ts").hide();
					var vals=$.trim(dom.val());
					if(zxHd)
					{
						zxHd=false;
						dom.val("");
						dom.val(vals);
					}
				};
				
				dom.blur(function(){
					if($.trim(dom.val()) == ""){
						dom.val("");
						dom.next(".ts").show();
					}
				});
				
				dom.focus(function(){
					dom.next(".ts").hide();
					dom.siblings(".cw").hide();
				});
			};

			//密码眼睛
			if(opt.passEye)
			{
				opt.passEye.click(function(){

					if(cInps.password)
					{
						if(cInps.password.attr("type") == "password")
						{
							$(this).removeClass("on");
							cInps.password.attr("type","text");
						}
						else
						{
							$(this).addClass("on");
							cInps.password.attr("type","password");
						}
					}
					else if(cInps.passwordLog){
						if(cInps.passwordLog.attr("type") == "password")
						{
							$(this).removeClass("on");
							cInps.passwordLog.attr("type","text");
						}
						else
						{
							$(this).addClass("on");
							cInps.passwordLog.attr("type","password");
						}
					}
					
				})
			};


			//点击获取短信
			if(cInps.usrPhoneBtn)
			{
				cInps.usrPhoneBtn.click(function(){
					if($("#dxBtn").attr("switch")=="off")
					{
						return false;
					}
					var zdPd="",phoneVal="",ysbox="";
					if(cInps.phone)
					{

						zdPd="login";
						phoneVal = cInps.phone.val();
						ysbox=cInps.phone;
						if(!cPhone(cInps.phone))
						{
							return false;
						}
					}
					else if(cInps.phoneR)
					{
						zdPd="register";
						phoneVal = cInps.phoneR.val();
						ysbox=cInps.phoneR;
						if(!cPhone(cInps.phoneR))
						{
							return false;
						}
					}





					$.ajax({
						url: "/login/checkPhone.html",  //服务器页面地址
						type:"post",
						data:{"phone":phoneVal,"source":zdPd},
						success:function(d){
							if(d.code == 1)   //成功
							{
								$("#dxBtn").attr("switch","on");
								ysbox.siblings("div.cw").hide();
								cDxS();
								return true;
							}
							else if(d.code == 2)  //失败
							{
								$("#dxBtn").attr("switch","off");
								ysbox.siblings("div.cw").show().find("em").html(d.message);
								return false;	
							}
						},
						dataType:"json",
						error:function(){
							alert("网络异常");  //异常提示
						}	
					});

				});
			}		

			function cDxS(){
				
				
				
				//弹窗
				$(".czcBox").TcWin({
					tcTit:"输入图形验证码",                   //弹出标题文本
					tcTxt:"<div class='yzm'><i class='imgYzm'></i><label for='usrImgYzm'>图像验证码：</label><input id='usrImgYzm' maxlength='4' name='usrImgYzm' type='text'><p class='ts absolute'>请输入图片中的字符，点击图片切换</p><div class='yzmBox absolute'><img src='/captcha.html'></div><div class='cw'><i></i><em>图形验证码输入错误!</em></div></div><h6 class='btn'><a href='javascript:void(0)' id='yzmQd'>确定</a> </h6>",                                 //弹出文本
					tcDs:false,                                //自动关闭 开启 true  关闭 false
					cgSwi:"on"                                    //是否可以关闭
				});

				//切换验证码
				$(".czcBox .yzm img").on("click",function(){
						$(this).attr("src","/captcha.html/?random="+ Math.random())
					});

				//input 提示
				cPrompt($("#usrImgYzm"));

				//图形验证码 验证
				$("#usrImgYzm").bind("input propertychange",function(){
					if($.trim($(this).val()).length>3)
					{
						cCode($(this));
					}
				});

				//确认弹出框验证码
				$("#yzmQd").on("click",function(){
					if(cCode($("#usrImgYzm"))){

						var sourceVal;
						var phoneVal;
						if(cInps.userCheck){
							sourceVal="register";
							phoneVal=cInps.phoneR.val();
						}
						else{
							sourceVal="forget";
							phoneVal=cInps.phone.val();
						}

						var urls = "/login/verify.html";
						var YzmVal = $("#usrImgYzm").val();
						var sendData ={"captcha":YzmVal,"source":sourceVal,"phone":phoneVal};

						$.ajax({
							url:urls,
							type:"post",
							data:sendData,
							success:function(d){
								
								if(d.code == 1)   //成功
								{
									$("#usrImgYzm").siblings("div.cw").hide();
									$(".czcBox").TcWin({
										// 弹出标题文本
										tcTit:"发送成功",
										// 弹出文本
										tcTxt:"<p><img src='/assets/images/dh.png'>验证码已发送到您的手机，注意查收</p>",
										tcDs:true                                      // 自动关闭 开启 true  关闭 false
									})
									$("#dxBtn").attr("switch","off");
									djsCs();
									return true;
								}
								else if(d.code == 2)  //失败
								{
									$("#usrImgYzm").siblings("div.cw").show().find("em").html(d.message);
									return false;	
								}
							},
							dataType:"json",
							error:function(){
								alert("网络异常");  //异常提示
							}	
						});
						
					};
				});
			}
			//登录点击
			if(cInps.submit)
			{
				cInps.submit.click(function(){
					if(cPhone(cInps.phone) && cCode(cInps.code)){
						Csubmit(cInps.phone,cInps.passwordLog,cInps.code);
					}
				});
			}

			//注册点击
			if(cInps.reg)
			{
				
				cInps.reg.click(function(){
					
					if(cPhone(cInps.phoneR) && cSms(cInps.ses) && cPass(cInps.password) && cGree(cInps.userCheck)){
						Creg(cInps.phoneR,cInps.password,cInps.ses,cInps.userTjm);
					}
				})
			}

			//借款点击
			if(cInps.subLoad)
			{
				cInps.subLoad.click(function(){
					if(cNames(cInps.name) && cPhone(cInps.phoneL) && cAir(cInps.address,"具体地址") && cMones(cInps.money) && cAir(cInps.data,"借款期限")){
						var addB=cInps.cityB.val();
						var addM=cInps.cityM.val();
						var addS=cInps.cityS.val();
						var hgOne="-",hgTwo="-";
						if(addB == "北京" || addB == "上海" || addB == "天津" || addB == "重庆")
						{
							addB=addB+"市";
						}
						else{
							addB=addB+"省";
						}

						if(addM == "市辖区" || addM == "县" || addM == "市")
						{
							addM="";
							hgOne="";
						}
						var caddress=addB + hgOne + addM + hgTwo + addS;
						Cloan(cInps.loanType,cInps.name,cInps.phoneL,caddress,cInps.address,cInps.money,cInps.data);
					}
				})
			}

			//忘记密码
			if(cInps.forget)
			{
				cInps.forget.click(function(){
					if(cPhone(cInps.phone) && cSms(cInps.ses) && cPass(cInps.password)){
						Cforget(cInps.phone,cInps.password,cInps.ses);
					}
				})
			}
			

			//手机号码离开焦点验证
			function cPhone(phone){

				var myreg = /^(((13[0-9]{1})|(14[5,7,9]{1})|(17[0,1,3,5,6,7,8]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
				if(phone.val().length!=11 || !myreg.test(phone.val()))
					{
					phone.siblings("div.cw").show().find("em").html("请输入正确的手机号!");
					return false;
				}
				
				else{
					phone.siblings("div.cw").hide()
					return true;
				} 	
			};

			//手机号码是否已经被注册 或 错误
			function cAjaxPhone(urls,type,datas,ysbox){
				$.ajax({
					url:urls,
					type:type,
					data:datas,
					success:function(d){
						if(d.code == 1)   //成功
						{
							$("#dxBtn").attr("switch","on");
							ysbox.siblings("div.cw").hide();
							return true;
						}
						else if(d.code == 2)  //失败
						{
							$("#dxBtn").attr("switch","off");
							ysbox.siblings("div.cw").show().find("em").html(d.message);
							return false;	
						}
					},
					dataType:"json",
					error:function(){
						alert("网络异常");  //异常提示
					}	
				});
			};

			//图形验证码离开焦点验证
			function cCode(code){
				if(code.val().length != 4 || !/^[0-9]+[0-9]*]*$/.test(code.val()))
				{
					code.siblings("div.cw").show().find("em").html("验证码输入有误");
					return false;
				}
				else
				{
					code.siblings("div.cw").hide()
					return true;
				}
			};

			//图形验证码是否正确
			function cAjaxCode(urls,type,datas,ysbox){
				$.ajax({
					url:urls,
					type:type,
					data:datas,
					success:function(d){
						
						if(d.code == 1)   //成功
						{
							ysbox.siblings("div.cw").hide();
							return true;
						}
						else if(d.code == 2)  //失败
						{
							ysbox.siblings("div.cw").show().find("em").html(d.message);
							return false;	
						}
					},
					dataType:"json",
					error:function(){
						alert("网络异常");  //异常提示
					}	
				});
			};

			//短信验证  
			function cSms(num){
				if(num.val().length != 4 || !/^[0-9]+[0-9]*]*$/.test(num.val()))
				{
					num.siblings("div.cw").show().find("em").html("验证码为4位数字组成!");
					return false;
				}
				else
				{

					num.siblings("div.cw").hide();
					return true;
				}
			};

			//验证密码
			function cPass(userPass){  
				var passYz = /^(?=.*?[a-zA-Z])(?=.*?[0-9])[a-zA-Z0-9]{6,20}$/;
				if(passYz.test(userPass.val()) && userPass.val().length == $.trim(userPass.val()).length)
				{
					userPass.siblings("div.cw").hide();
					return true;	
				}
				else
				{
					userPass.siblings("div.cw").show().find("em").html("密码格式错误（6-20位字母和数字组合）!");
					return false;
				}  
			};


			//推荐码验证
			function cTjnum(Tjnum){

				if($.trim(Tjnum.val()).length==0){
					return true;
				}
				else{

					if(Tjnum.val().length != 4 || !/^[0-9]+[0-9]*]*$/.test(Tjnum.val()))
					{
						Tjnum.siblings("div.cw").show().find("em").html("好友推荐码格式错误!");
						return false;
					}
					else
					{
						Tjnum.siblings("div.cw").hide();
						return true;
					}
				}
			};

			//姓名验证
			function cNames(Name){

				var pattern = /^[\u4e00-\u9fa5]+$/;

				if($.trim(Name.val()).length>0 && pattern.test(Name.val())){
					Name.siblings("div.cw").hide();
					return true;
				}
				else
				{
					Name.siblings("div.cw").show().find("em").html("姓名必须是中文！");
					return false;
				}	
			};

			//贷款金额
			function cMones(Mone){
				var reg = /^(([1-9]\d*)|\d)(\.\d{1,2})?$/;//用来验证数字，包括小数的正则

				if($.trim(Mone.val()).length>0 && reg.test(Mone.val())){
					Mone.siblings("div.cw").hide();
					return true;
				}
				else
				{
					Mone.siblings("div.cw").show().find("em").html("必须为纯数字！");
					return false;
				}	
			};
			

			//协议
			function cGree(xyG){

				if(xyG.is(":checked"))
				{
					xyG.siblings("span.red").hide();
					return true;
				}
				else
				{
					xyG.siblings("span.red").show();
					return false;
				}
			};

			//不为空
			function cAir(air,dom){

				if($.trim(air.val().length)>0)
				{
					air.siblings("div.cw").hide();
					return true;
				}
				else
				{
					air.siblings("div.cw").show().find("em").html(dom+"不能为空！");
					return false;
				}
			}

			//短信倒计时
			var tips;
			var ztime=60;
			function djsCs(){

				if(ztime == 60)
				{
					tips=setInterval(djs,1000);	
					cInps.usrPhoneBtn.addClass("on");
				}
				return false;				
			}
			
			function djs(){

				ztime--;
				if(ztime < 0)
				{
					cInps.usrPhoneBtn.removeClass("on")
					ztime=60;
					clearInterval(tips);
					cInps.usrPhoneBtn.html("获取验证码");
					$("#dxBtn").attr("switch","on");
				}
				else
				{
					cInps.usrPhoneBtn.html("（"+ztime+"s）"+"后重新发送");
				}
				
			};
			



			//登录
			function Csubmit(cphone,cpassword,ccode){
				var url="/login.html";
				var cstype="post";
				var phoneVal = cphone.val();
				var passwordVal=hex_md5(cpassword.val());
				var YzmVal=ccode.val();
				var token=$("#token").val();
				datas ={"phone":phoneVal,"password":passwordVal,"captcha":YzmVal,"token":token,"source":"login"}
				$.ajax({
					url:url,
					type:cstype,
					data:datas,
					success:function(d){
						cphone.siblings("div.cw").hide();
						cpassword.siblings("div.cw").hide();
						ccode.siblings("div.cw").hide();
						if(d.code == 1)   //成功
						{	
							
							if(opt.inpSrc == 1)
							{
								location.href='/';
							}
							else if(opt.inpSrc == 2)
							{
								parent.location.reload();
							}								
							
						}
						else if(d.code == 2)  //用户名不存在
						{
							ccode.siblings(".yzmBox").find("img").attr("src","/captcha.html/?random="+ Math.random());
							if(d.options.item == 'phone')
							{
								cphone.siblings("div.cw").show().find("em").html(d.message);
				
							}
							else if(d.options.item == 'password')
							{
								cpassword.siblings("div.cw").show().find("em").html(d.message);
							}
							else if(d.options.item == 'captcha')
							{
								ccode.siblings("div.cw").show().find("em").html(d.message);		
							}	
							return false;
						}
						
					},
					dataType:"json",
					error:function(){
						alert("网络异常");  //异常提示
					}	
				});
			};


			//注册
			function Creg(cphone,cpassword,cses,ctjm){

				var url="/register.html";
				var cstype="post";
				var phoneVal = cphone.val();
				var passwordVal=hex_md5(cpassword.val());
				var phoneYzm=cses.val();       //短信验证码
				var numTjm=ctjm.val();        //好友推荐码
				var token=$("#token").val();
				datas ={"phone":phoneVal,"password":passwordVal,"smscode":phoneYzm,"invite":numTjm,"token":token,"source":"register"}
				$.ajax({
					url:url,
					type:cstype,
					data:datas,
					success:function(d){
						cphone.siblings("div.cw").hide();
						cpassword.siblings("div.cw").hide();
						cses.siblings("div.cw").hide();
						ctjm.siblings("div.cw").hide();
						if(d.code == 1)   //成功
						{


							layer.alert('注册成功！开通华兴银行存管账户', {
							  icon: 1,
							  btn:"马上开通",
							  yes:function(layero,index){
							  	location.href=d.options.url;//跳转地址
							  },
							  cancel: function(){ 
							    location.href=d.options.url2;//跳转地址
							  }
							});
							setTimeout(function(){
								location.href=d.options.url;
							},3000);
							//location.href=d.options.url;
						}
						else if(d.code == 2)  
						{
							if(d.options.item == 'phone')  //手机号已经存在
							{
								cphone.siblings("div.cw").show().find("em").html(d.message);
							}
							else if(d.options.item == 'password')  //密码格式错误
							{
								cpassword.siblings("div.cw").show().find("em").html(d.message);
							}	
							else if(d.options.item == 'phoneNum')  //手机短信错误
							{
								
								cses.siblings("div.cw").show().find("em").html(d.message);
							}
							else if(d.options.item == 'invite')  //好友推荐码错误
							{
								ctjm.siblings("div.cw").show().find("em").html(d.message);
							}
							else if(d.options.item == 'captcha'){
								cses.siblings("div.cw").show().find("em").html(d.message);
							}
							return false;	
						}	
					},
					dataType:"json",
					error:function(){
						alert("网络异常");  //异常提示
					}	
				});
			}



			//忘记密码
			function Cforget(cphone,cpassword,cses){
				var url="/forget.html";
				var cstype="post";
				var phoneVal = cphone.val();
				var passwordVal=hex_md5(cpassword.val());
				var phoneYzm=cses.val();       //短信验证码
				datas ={"phone":phoneVal,"password":passwordVal,"smscode":phoneYzm,"source":"forget"}
				$.ajax({
					url:url,
					type:cstype,
					data:datas,
					success:function(d){
						cphone.siblings("div.cw").hide();
						cpassword.siblings("div.cw").hide();
						cses.siblings("div.cw").hide();
						if(d.code == 1)   //成功
						{
							layer.alert('密码重置成功！', {
							  icon: 1,
							  btn:"马上登陆",
							  yes:function(layero,index){
							  	location.href=d.options.url;//跳转地址
							  }
							});
							setTimeout(function(){
								location.href=d.options.url;
							},3000);
							
						}
						else if(d.code == 2)  
						{
							if(d.options.item == 'phone')  //手机号已经存在
							{
								cphone.siblings("div.cw").show().find("em").html(d.message);
							}
							else if(d.options.item == 'password')  //密码格式错误
							{
								cpassword.siblings("div.cw").show().find("em").html(d.message);
							}	
							else if(d.options.item == 'phoneNum')  //手机短信错误
							{
								
								cses.siblings("div.cw").show().find("em").html(d.message);
							}
							else if(d.options.item == 'captcha'){
								cses.siblings("div.cw").show().find("em").html(d.message);
							}

							return false;	
						}	
					},
					dataType:"json",
					error:function(){
						alert("网络异常");  //异常提示
					}	
				});
			}

			//我要借款
			function Cloan(ctype,cname,cphone,caddress,cjtadd,cmoney,cdate){
				var url="/loan.html";
				var cstype="post";
				var typeVal = ctype.attr("tyZy");  //借款类型
				var nameVal = cname.val();  //借款人姓名
				var phoneVal = cphone.val();//借款人电话
				var addressVal = caddress;//借款人地址
				var jtaddVal = cjtadd.val();    //借款人具体地址
				var moneyVal = cmoney.val(); //借款金额
				var dateVal = cdate.val();   //借款期限
				datas ={"type":typeVal,"name":nameVal,"phone":phoneVal,"area":addressVal,"address":jtaddVal,"money":moneyVal,"date":dateVal}
				$.ajax({
					url:url,
					type:cstype,
					data:datas,
					success:function(d){
						ctype.siblings("div.cw").hide();
						cname.siblings("div.cw").hide();
						cphone.siblings("div.cw").hide();
						cjtadd.siblings("div.cw").hide();
						cmoney.siblings("div.cw").hide();
						cdate.siblings("div.cw").hide();
						if(d.code == 1)   //成功
						{
							layer.alert(d.message,{
								title:"我要借款",
			     				icon: 1,
			     				yes:function(index,layero){
			     					location.href="/";//跳转地址
			     				},
			     				cancel:function(){
			     					location.href="/";//跳转地址
			     				}
			     			});
						}
						else if(d.code == 2)  
						{
							layer.alert('提交失败：'+d.message,{
								title:"错误信息",
			     				icon: 1
			     			});
							return false;	
						}	
					},
					dataType:"json",
					error:function(){
						layer.alert('提交失败：'+d.message,{
								title:"错误信息",
			     				icon: 1
			     			});  //异常提示
					}	
				});
			}

			return _this;
		});

	};
	


	//数字滚动 加 逗号
	$.fn.Cnum=function(options){

		var dft={

			//参数

		}
		var ops=$.extend(dft,options);

		this.each(function(){

			if(dft.Ztf)
			{
				num_k(dft.num,dft.strNum,$(this));//交易总额
			}
			else
			{
				//alert(dft.strNum[0])
				$(this).find("div.szNum_box .szNum_c").each(function(){
					$(this).find(".szNum_list").css({"top":"0px"});
				})
				
				num_gd($(this).attr("znum"),$(this)); //数字滚动
			}
			

			//添加“ ，” 确定位数
			function num_k(num,str_num,element,Ztf){		
				var j=0;
				for(var i=num.length-1;i>=0;i--){
					if(i>0)
					{
						element.children("div.szNum_box").find("div.szNum_c:first").clone().appendTo(element.children("div.szNum_box"));
					}

					j++;

					if(j%3==0 && i!=0)
					{
						str_num=","+num.charAt(i)+str_num;
						element.children("div.szNum_box").find("div.szNum_c:first").clone().appendTo(element.children("div.szNum_box"));
					}
					else
					{
						str_num=num.charAt(i)+str_num;
					}
					
				}
				element.attr("znum",str_num);
				num_gd(str_num,element);
				
			}
			
			//数字滚动
			function num_gd(str_num,elementB){
				
				for(var i=0;i<str_num.length;i++){
					if(str_num.charAt(i) == ",")
					{
						elementB.find("div.szNum_c:eq("+i+") div.szNum_list").stop().animate({"top":-10*22+"px"},1000);
					}
					else
					{
						elementB.find("div.szNum_c:eq("+i+") div.szNum_list").stop().animate({"top":-str_num.charAt(i)*22+"px"},1000);
					}
				}
			}
		})
	}

	//BANNER
	$.fn.CbanShow=function(options){

		var dft={
			//参数
			t:7000, //执行一次动画的时间
			st:300, //一次动画所需要的时间
			con:$("#cban_box ul.list"), //获取ul
			lis:$("#cban_box ul.list li"), //获取 li
			btn:$("#cban_box .chubd") //获取 btn

		}
		var ops=$.extend(dft,options);

		this.each(function(){
			var timmer;
			var i=0;
			var len=dft.lis.length;
			dft.lis.each(function(num,dom){
				var srcLi = dft.lis.eq(num).find("a").attr("href");
				
				var tit=$(this).attr("tit");
				$(this).css("z-index",(num-20)*-1);
				if(num==0)
				{
					dft.btn.append("<a class='on' href="+srcLi+"></a>");
				}
				
				else
				{
					dft.btn.append("<a href="+srcLi+"></a>");
				}

				ops.btn.find("a:eq("+num+")").html(tit);
				
			})

			timmer=setInterval(show,5000);

			dft.btn.find("a").hover(function(){
				clearInterval(timmer);
				i=$(this).index()-1;
				show();
			},function(){
				timmer=setInterval(show,5000);
			})
            
            
			function show(){
				i++;
				if(i>len-1){
					i = 0;
				}
				dft.con.find("li:eq("+i+")").show().stop().animate({"opacity":"1"},500).siblings("li").stop().animate({"opacity":"0"},500,function(){
					$(this).hide();
				})
				dft.btn.find("a:eq("+i+")").addClass("on").siblings("a").removeClass("on");
			}
		})
	}

	//通知公告
	$.fn.TzShow=function(options){
		var dft={
			//参数
			t:"5000",
			st:"500",
			con:$("#tz ul"),
			lis:$("#tz ul li")
		}

		var ops=$.extend(dft,options)

		this.each(function(){

			var i=0;
			var j=true;
			var ban_len=dft.lis.length;
			dft.lis.each(function(){
                $(this).clone().appendTo(dft.con);
            })

			var timmer=setInterval(show,dft.t);
			// $("#c_tg_btn b:last").bind("click",function(){
			// 	clearInterval(timmer);
			// 	show();
			// 	timmer=setInterval(show,dft.t);
			// 	})
			// $("#c_tg_btn b:first").bind("click",function(){
			// 	j=false;
			// 	clearInterval(timmer);
			// 	show();
			// 	timmer=setInterval(show,dft.t);
			// 	})
			$(this).find("#c_tg_txt li").hover(function(){
				clearInterval(timmer);
				},function(){
					timmer=setInterval(show,dft.t);
					})
			function show(){
				if(j)
				{
					i++;
					if(i>ban_len)
					{
						i=1;
						dft.con.css("top","0px");
					}
				}
				else
				{
					i--;
					if(i<=0)
					{
						i=ban_len-1;
						dft.con.css("top",-52*ban_len+"px");
					}
					j=true;
				}

				dft.con.stop().animate({"top":-52*i+"px"},dft.st);
			}
		})
	}


	//图片滚动 点击放大
	$.fn.CpicShow = function(options){

		var dft={
			// con:$()
		}

		var ops=$.extend(dft,options);

		this.each(function(){
			var i=0;
			var j=true;
			var len=dft.lis.length;
			dft.con.css("width",dft.wid*len+"px");

			//划过判断 左右箭头是否显示
			$(this).hover(function(){
				if(len>dft.xsNum)
				{
					dft.left.show().stop().animate({"opacity":"1"},500);
					dft.right.show().stop().animate({"opacity":"1"},500);
				}
			},function(){
				dft.left.stop().animate({"opacity":"0"},500,function(){
					$(this).hide();});
				dft.right.stop().animate({"opacity":"0"},500,function(){
					$(this).hide();});		
			})

			//右点击
			dft.right.click(function(){

				show();
			})

			//左点击
			dft.left.click(function(){
				j=false;
				show();
			})

			//左右移动方法
			function show(){
				if(j)
				{
					i++;
					if(i>len-dft.xsNum)
					{
						i=i-1;
						//alert("已经是最后一个了！")
					}
				}
				else
				{
					i--;
					if(i<0)
					{
						i=0;
						//alert("已经是第一个！")
					}
					j=true;
				}
				dft.con.stop().animate({"left":-i*dft.wid+"px"},500);
			}
			
			//图片点击
			dft.lis.click(function(){

				$(this).addClass("on").siblings("li").removeClass("on");
				var strSrc=$(this).find("img").attr("src");
				var tit=$(this).find("img").attr("alt");
				dft.tcCon.append("<img src="+strSrc+" alt="+tit+" >");
				
				dft.tcCon.find("h6").html(tit);
				csShow(dft.tcCon.find("img"));
				dft.tcBg.show().stop().animate({"opacity":"0.5"},300);
				dft.tcBox.show().stop().animate({"opacity":"1"},500);

			})

			//关闭按钮
			dft.tcBox.click(function(){
				gbShow();
			})
			dft.tcGb.click(function(){
				gbShow();
			})

			//阻止冒泡
			dft.tcCon.click(function(e){e.stopPropagation();});
			function gbShow(){

				dft.tcBox.stop().animate({"opacity":"0"},300,function(){
					$(this).hide();
					$(this).find("img").remove();
					
				});
				dft.tcBg.stop().animate({"opacity":"0"},400,function(){
					$(this).hide();
				});
			}

			//右切换
			dft.tcCon.find(".clistBtn_right").click(function(){
				//alert);

				var indParent=1;
				if($(".clistXq_zlConXh b.on").length>0)
				{
					indParent=$(".clistXq_zlConXh b.on").index()-1;
				}
              
				zyShow(true,indParent);

			});

			//左切换
			dft.tcCon.find(".clistBtn_left").click(function(){
				var indParent=1;
				if($(".clistXq_zlConXh b.on").length>0)
				{
					indParent=$(".clistXq_zlConXh b.on").index()-1;
				}
				 zyShow(false,indParent);
			});

			//左右切换方法
			function zyShow(sf,indParent){
				var ind;
				
				if(indParent==dft.con.parent().index())
				{
					if(sf)
					{
					             
						ind=dft.con.find("li.on").index()+1;
					
						if(ind>=len)
						{
							ind=0;
						}
					}
					else
					{
						ind=dft.con.find("li.on").index()-1;
						if(ind<0)
						{
							ind=len-1;
						}
					}
					
					dft.tcCon.find("img").stop().animate({"opacity":"0.4"},200,function(){
						$(this).remove();
						
						dft.con.find("li:eq("+ind+")").addClass("on").siblings("li").removeClass("on");
						var strSrc=dft.con.find("li:eq("+ind+")").find("img").attr("src");
						var tit=dft.con.find("li:eq("+ind+")").find("img").attr("alt");
						dft.tcCon.append("<img src="+strSrc+" alt="+tit+" >");
						dft.tcCon.find("h6").html(tit);
						csShow(dft.tcCon.find("img"));
					})
				}
				
			}

			//初始化弹出框
			function csShow(cPic){
				var realWidth="";//真实的宽度
				var realHeight="";//真实的高度
				var winWid = $(window).width();
				var winHei = $(window).height();

				cPic.load(function() {
					realWidth=cPic.width();
					realHeight=cPic.height();
					if(realWidth>1100)
					{
						
						realWidth=1100;
						realHeight=cPic.height();
						if(realHeight > winHei-60)
						{
							realHeight=winHei-60;
							cPic.height(realHeight);
							realWidth=cPic.width();
						}
					}
					if(realHeight>winHei-60)
					{
						
						realHeight=winHei-60;
						cPic.height(realHeight);
						realWidth=cPic.width();
					}
					dft.tcCon.width(realWidth);
					dft.tcCon.height(realHeight);
					dft.tcCon.css({"top":"50%","margin-top":-realHeight/2-20+"px"});
				});
				
			}
		})
	}
})(jQuery);



function cuntdownShow(box,house,min,second){

	var mytime=box.attr("mytime");
    var time_start = new Date().getTime(); //设定当前时间
    var time_end =  new Date(mytime).getTime(); //设定目标时间
    // 计算时间差 
    var time_distance = time_end - time_start; 
    if(time_distance<0)
    {
    	// day.html("00"); 
	    house.html("00"); 
	    min.html("00"); 
	    second.html("00");
	    box.remove();
	    return; 
    }
    // 天
    // var int_day = Math.floor(time_distance/86400000) 
    // time_distance -= int_day * 86400000; 
    // 时
    var int_hour = Math.floor(time_distance/3600000) 
    time_distance -= int_hour * 3600000; 
    // 分
    var int_minute = Math.floor(time_distance/60000) 
    time_distance -= int_minute * 60000; 
    // 秒 
    var int_second = Math.floor(time_distance/1000) 
    // 时分秒为单数时、前面加零 
    // if(int_day < 10){ 
    // 	if(int_day<0)
    // 	{
    // 		return;
    // 	}
    // 	else
    // 	{
    // 		int_day = "0" + int_day; 
    // 	}
    // } 
    if(int_hour < 10){ 
        int_hour = "0" + int_hour; 
    } 
    if(int_minute < 10){ 
        int_minute = "0" + int_minute; 
    } 
    if(int_second < 10){
        int_second = "0" + int_second; 
    } 
    // 显示时间 
    // day.html(int_day); 
    house.html(int_hour); 
    min.html(int_minute); 
    second.html(int_second); 

};


/*
 *运营报告列表
 */
$(function(){

	var uls = $(".oper-con ul");
	$(".oper-con-titbox a").click(function(){
		var ind = $(this).index();
		$(this).addClass("on").siblings("a").removeClass("on");
		uls.each(function(index,ele){
			if(ind == index)
			{
				$(this).show();
			}
			else
			{
				$(this).hide();
			}
		})
	})

});