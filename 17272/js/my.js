// JavaScript Document


$(function(){
	//nav的下拉菜单
	$('#nav>ul>li>ul').hide();
	$('#nav ul li').hover(function(){
		  $(this).children('ul').show();
		  },function(){
			  $(this).children('ul').hide();
			  })
			  
	//banner图片滚动		  
	  $(".slideBox").slide({
		  mainCell:".bd ul",
		  autoPlay:true
	  });
	  
	 //装修套餐下面的页码
	$('.a1').hover(function(){
		$('.a1').css('background','#f9f9f9');
		},function(){
			$('.a1').css('background','none');
			})
	$('.a2').hover(function(){
		$('.a2').css('background','#f9f9f9');
		},function(){
			$('.a2').css('background','none');
			})

	$('.a4').hover(function(){
		$('.a4').css('background','#f9f9f9');
		},function(){
			$('.a4').css('background','none');
			})
	$('.a5').hover(function(){
		$('.a5').css('background','#f9f9f9');
		},function(){
			$('.a5').css('background','none');
			})
			
	//装修预算里面radio后面的字 
	
	
	//装修预算里面提交按钮,获取焦点
	$('.ii').click(function(){
		$('input[name=uname]').trigger('focus');
		})
    //装修预算里面表单 姓名旁边的字
	$('#uname').blur(function(){
		$(this).next('span').remove()
		if($(this).val().length<6){
			$(this).after("<span style=color:red>用户名不能少于6位</span>");
		}
		else if($(this).val().length>12){
			$(this).after("<span style=color:red>用户名不能大于12位</span>");
		}
		else{
			$(this).after("<span style=color:green>正确</span>");
		}
		})
		
	//装修预算里面表单 电话旁边的字	
	$('#tel').blur(function(){
		$(this).next('span').remove()
		var tmp=Number(this.value);
		if($(this).val().length!=11 || !tmp){
			$(this).after("<span style=color:red>电话号码格式不正确</span>");
		}
		
		else{
			$(this).after("<span style=color:green>正确</span>");
		}
		})
	//装修预算 input后面的字
	
		
	
	
	
			
window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"16"},"slide":{"type":"slide","bdImg":"2","bdPos":"left","bdTop":"88"},"selectShare":{"bdContainerClass":null,"bdSelectMiniList":["qzone","tsina","tqq","renren","weixin"]}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];

})
