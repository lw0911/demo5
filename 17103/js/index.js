$(function(){
	//nav
	var wapNav=function(){
//		$(".navBtn").click(function(){
//			$(".navBtn").stop().removeClass("on");
//			$(".submenu").stop().slideUp();
//			$(this).stop().toggleClass("on");
//			$(this).stop().siblings(".submenu").slideToggle()
//		})
		
		var i=0;
		
		$(".muen").click(function(event){
			$(this).toggleClass("on");
			if(i==0){
				$("#nav").stop().animate({"left":'0'});
				i=1;
			}else if(i==1){
				$("#nav").stop().animate({"left":'-200px'});
				i=0;
			}
			event.stopPropagation();
		})
		
		$("body > *").click(function(){
			$("#nav").stop().animate({"left":'-200px'});
			$(".muen").removeClass("on");
			i=0;
		})
//		$(window).scroll(function() {
//			$("#nav").stop().animate({"left":'-200px'});
//			i=0;
//		})
		
		$("#nav").scroll(function(event){
			event.stopPropagation();
		}).click(function(event){
			event.stopPropagation();
		})
		
		
	}
	
	$(".homeDzzxT li").hover(function(){
		$(this).find(".bg").stop().slideDown();
		$(this).find(".bgW").stop().delay(400).fadeIn();
	},function(){
		$(this).find(".bgW").stop().fadeOut();
		$(this).find(".bg").stop().delay(300).slideUp();
		
	})
	
	$(".homeNewsTab a").click(function(){
		var index = $(this).index();
		$(this).addClass("on").siblings("a").removeClass("on");
		$(".homeNewsInner").eq(index).show().siblings(".homeNewsInner").hide();
	})
	
	$(".aboutNav li").click(function(){
		$(this).addClass("on").siblings("li").removeClass("on");
	})
	
	//生产工艺
	$(".productAlList li").hover(function(){
		$(this).find(".bg").stop().fadeIn();
		$(this).find(".writ").stop().animate({"bottom":'15px'});
	},function(){
		$(this).find(".bg").stop().fadeOut();
		$(this).find(".writ").stop().animate({"bottom":'-100px'});
	})
	
	var productAl = function(){
		var sTop=$(window).scrollTop();
		$(".productNext").click(function(){
			var proTabTop = $(this).parents(".productTab").offset().top;
			console.log(proTabTop)
			$('body,html').animate({scrollTop:proTabTop-90},500);
			
		})
		
		$(".navNext ul li").click(function(){
			$(".navNext ul li").removeClass("on");
			$(this).addClass("on");
		})
		$(".navNext ul li").eq(0).click(function(){
			$('body,html').animate({scrollTop:$(".productCx").offset().top-110},500);
		})
		$(".navNext ul li").eq(1).click(function(){
			$('body,html').animate({scrollTop:$(".productGy").offset().top-110},500);
		})
		$(".navNext ul li").eq(2).click(function(){
			$('body,html').animate({scrollTop:$(".productSp").offset().top-110},500);
		})
		$(".navNext ul li").eq(3).click(function(){
			$('body,html').animate({scrollTop:$(".productJg").offset().top-110},500);
		})
		$(".navNext ul li").eq(4).click(function(){
			$('body,html').animate({scrollTop:$(".productCh").offset().top-110},500);
		})
		$(".navNext ul li").eq(5).click(function(){
			$('body,html').animate({scrollTop:$(".productAl").offset().top-110},500);
		})
		
		$(".productYfList li").eq(0).find("a").click(function(){
			$('body,html').animate({scrollTop:$(".productCx").offset().top-110},500);
		})
		$(".productYfList li").eq(1).find("a").click(function(){
			$('body,html').animate({scrollTop:$(".productGy").offset().top-110},500);
		})
		$(".productYfList li").eq(2).find("a").click(function(){
			$('body,html').animate({scrollTop:$(".productSp").offset().top-110},500);
		})
		$(".productYfList li").eq(3).find("a").click(function(){
			$('body,html').animate({scrollTop:$(".productJg").offset().top-110},500);
		})
		$(".productYfList li").eq(4).find("a").click(function(){
			$('body,html').animate({scrollTop:$(".productCh").offset().top-110},500);
		})
		$(".productYfList li").eq(5).find("a").click(function(){
			$('body,html').animate({scrollTop:$(".productAl").offset().top-110},500);
		})
		
	}
	
	
	//常见问题
	$(".issueList li h2").click(function(){
		$(".issueList li h2 span").stop().removeClass("on");
		$(".issueList li .issueInner").stop().slideUp();
		$(this).find("span").stop().addClass("on");
		$(this).siblings(".issueInner").stop().slideDown();
		
	})
	
	//领取样品
	function sampleF(){
		$(".formSure").click(function(){
			var formName,formTel,formAddress,formMail,formReason,formYzm,num
					formName = $("input.formName").val();
					formTel = $("input.formTel").val();
					formAddress = $("input.formAddress").val();
					formMail = $("input.formMail").val();
					formReason = $("input.formReason").val();
					formYzm = $("input.formYzm").val();
					num = 0;
			//姓名验证
			if(formName == null || formName == '' || formName == undefined){
				$(".hint p").fadeIn().text("请输入姓名");
				return false;
			}else{
				$(".hint p").fadeOut();
				num = 1;
			}
			//电话验证
			if(num == 1){
				if(formTel == null || formTel == '' || formTel == undefined){
					$(".hint p").fadeIn().text("请输入电话号码");
					return false;
				}else if(!checkMobile(formTel)){
					$(".hint p").fadeIn().text("请输入正确的电话号码");
					return false;
				}else{
					$(".hint p").fadeOut();
					num = 2;
				}
			}
			//地址验证
			if(num == 2){
				if(formAddress == null || formAddress == '' || formAddress == undefined){
					$(".hint p").fadeIn().text("请输入地址");
					return false;
				}else{
					$(".hint p").fadeOut();
					num = 3;
				}
			}
			//邮箱验证
			if(num == 3){
				if(formMail == null || formMail == '' || formMail == undefined){
					$(".hint p").fadeIn().text("请输入邮箱");
					return false;
				}else if(!checkEmail(formMail)){
					$(".hint p").fadeIn().text("请输入正确的邮箱地址");
					return false;
				}else{
					$(".hint p").fadeOut();
					num = 4;
				}
			}
			//验证码
			if(num == 4){
				if(formYzm == null || formYzm == '' || formYzm == undefined){
					$(".hint p").fadeIn().text("请输入验证码");
					return false;
				}else{
					$(".hint p").fadeOut();
					num = 5;
				}
			}
			
			if(num == 5){
				$('form').submit();
			}else{
				 return false;
			}
			
		})
		
		//重置
		$(".formReturn").click(function(){
			$(this).parents("form").find("input").val("");
			$(this).parents("form").find("textarea").val("")
			$(".hint p").fadeOut();
		})
		
	}
	
	//wap-侧导航
		$(".navBtn").click(function(){
			$(".navBtn").removeClass("on");
			$(".navDown").slideUp();
			$(this).stop().addClass("on");
			$(this).siblings(".navDown").stop().slideDown();
		})
	
	
	//page
	var page=function(){
				$(".page a").click(function(){
					$(this).addClass("active").siblings(".page a").removeClass("active");
					$(this).parent(".page").find("em").removeClass("active");
					$(this).parent(".page").find("i").removeClass("active");
				})
				$(".page em").click(function(){
					$(this).addClass("active").siblings(".page em").removeClass("active");
					$(this).parent(".page").find("i").removeClass("active");
				})
				$(".page i").click(function(){
					$(this).addClass("active").siblings(".page i").removeClass("active");
					$(this).parent(".page").find("em").removeClass("active");
				})
			}
			page();
			
			

/**
 * 检验 用户名格式
 * @param name 用户名
 */
function checkUserName(name){
	var reg = /^[a-zA-Z0-9_]{6,16}$/ ;
	if(name.match(reg)){
		return true; 
	}else{
		return false;
	}
}	
	
/**
 * 验证 手机号
 * @param str
 */
function checkMobile(str) {
	var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[015678]|18[0-9]|14[57])[0-9]{8}$/;
	if(str.match(reg)){
		return true;
	} else{
		return false;
	}
}

/**
 * 验证 邮箱地址
 */
function checkEmail(str){
	reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	if(str.match(reg)){
		return true;
	}
	else{
		return false;
	}
		
}
	
	
	
	
	
	
	
	
	wapNav();
	productAl();
	sampleF();
	
	
	
})