  //选择框
  $("#checked").change(function () {
      if ($('#select1').is(':checked')) {
          $('#lxxdisplay_tel').show(1000);
          $('#lxxdisplay_mail,#lxxdisplay_wenti').hide(1000);         
      }
      if ($('#select2').is(':checked')) {
          $('#lxxdisplay_mail').show(1000);
          $('#lxxdisplay_tel,#lxxdisplay_wenti').hide(1000);
      }
      if ($('#select3').is(':checked')) {
          $('#lxxdisplay_wenti').show(1000);
          $('#lxxdisplay_mail,#lxxdisplay_tel').hide(1000);
      }
  });
  //获取手机短信倒计时
  function showtime(t) {
      document.myform.phone.disabled = true;
      for (i = 1; i <= t; i++) {
          window.setTimeout("update_p(" + i + "," + t + ")", i * 1000);
      }

  }
  function update_p(num, t) {
      if (num == t) {
          document.myform.phone.value = " 重新发送 ";
          document.myform.phone.disabled = false;
      }
      else {
          printnr = t - num;
          document.myform.phone.value = " (" + printnr + ") 秒后重新发送";
      }
  }
  
  //发送短信验证码
  function sendCode7477(url, type) {
	  var phone = '';
	  if (type == 'bind_phone') {
		  phone = $("#phone").val();
		  if (!phone) {
			  $(".send_tip").html('电话号码不能为空').show();
			  return false;
		  }
	  }
	  $(".button_tel").attr("disabled", "true");
	  $(".send_tip").hide();
	  $.ajax({
	  	type:'post',
	  	url:url,
	  	data:{'phone':phone,'type':type},
	  	dataType:'json',
	  	error:function() {
	  		$(".send_tip").html('未知错误').show();
	  	},
	  	success:function(data) {
	  		
	  		if (data.code == 1) {
	  			$(".button_tel").attr("disabled", "true");
	  			var t = 60;
	  			var counttime = setInterval(function() {
	  				$(".button_tel").attr("value", '('+t+')秒后重新发送');
	  				t--;
	  				if (t == 0) {
	  					clearInterval(counttime);
	  					$(".button_tel").attr("value", '点击重新发送');
	  					$(".button_tel").removeAttr("disabled");
	  				}
	  			}, 1000);
	  		}else {
	  			$(".button_tel").removeAttr("disabled");
	  			//$(".send_tip").html(data.msg).show();
	  			$(".send_tip").html("敬请期待").show();
	  		}
	  		
	  	}
	  });
  }
  
  
  //判断填写是否为空
  $('.lxx_ztai li').hover(function () {
      $(this).addClass('hover');
  },
  function () {
      $(this).removeClass('hover');
  })
  //全部任务
  $("#lxx_navs li").eq(0).click(function () {
      $("#lxx_navs li").removeClass('on');
      $(this).addClass('on');
      //$("#tesk_new,#tesk_vip,#tesk_day,#tesk_game").show();	    
      $("#tesk_new,#tesk_day").show();
  })
    //新手任务
  $("#lxx_navs li").eq(1).click(function () {
      $("#lxx_navs li").removeClass('on');
      $(this).addClass('on');
      $("#tesk_new").show();
      $("#tesk_vip,#tesk_day,#tesk_game").hide();
  })
  //VIP任务
  $("#lxx_navs li").eq(2).click(function () {
      $("#lxx_navs li").removeClass('on');
      $(this).addClass('on');
      $("#tesk_vip").show();
      $("#tesk_new,#tesk_day,#tesk_game").hide();
  })
  //日常任务
  $("#lxx_navs li").eq(3).click(function () {
      $("#lxx_navs li").removeClass('on');
      $(this).addClass('on');
      $("#tesk_day").show();
      $("#tesk_new,#tesk_vip,#tesk_game").hide();
  })
  //游戏任务
  $("#lxx_navs li").eq(4).click(function () {
      $("#lxx_navs li").removeClass('on');
      $(this).addClass('on');
      $("#tesk_game").show();
      $("#tesk_new,#tesk_vip,#tesk_day").hide();
  })
  $(function(){
  // 显示头像编辑与隐藏
  $('.user-top-info .user-avatar-edit,.user-avatar').click(function() {
  	$('.user-top-info .user-avatar-wrap').show();
  });
  $('.user-top-info .user-avatar-close').click(function() {
  	$('.user-top-info .user-avatar-wrap').hide();
  });

  // 我的账号 详情展开 收缩
    var $uservipCon = $('.uservip-wrapper .show-content');
    $('.uservip-promise').click(function() {
      if ($uservipCon.is(":visible")) {
        $uservipCon.hide();
        $('.uservip-promise .uservip-promise-show').text('[展开]');
        $('.uservip-promise').removeClass('uservip-promise-focus');
      }else{
        $uservipCon.show();
        $('.uservip-promise .uservip-promise-show').text('[收缩]');
        $('.uservip-promise').addClass('uservip-promise-focus');
      }
    });
    /*
    var $promiseCon = $('.promise-wrapper .show-content');
    $('.promise-info').click(function() {
      if ($promiseCon.is(":visible")) {
        $promiseCon.hide();
        $('.promise-info .promise-info-show').text('[展开]');
        $('.promise-info').removeClass('promise-info-focus');
      }else{
        $promiseCon.show();
        $('.promise-info .promise-info-show').text('[收缩]');
        $('.promise-info').addClass('promise-info-focus');
      }
    });
	*/
    var $myinfoCon = $('.my-info-wrapper .show-content');
    $('.my-info').click(function() {
      if ($myinfoCon.is(":visible")) {
        $myinfoCon.hide();
        $('.my-info .my-info-show').text('[展开]');
        $('.my-info').removeClass('my-info-focus');
      }else{
        $myinfoCon.show();
        $('.my-info .my-info-show').text('[收缩]');
        $('.my-info').addClass('my-info-focus');
      }
    });

  // 积分显示提示框
  $('#user-point-a').hover(function() {
  	$('.user-point-right .user-message-tip').show();
  }, function() {
  	$('.user-point-right .user-message-tip').hide();
  });

  // 平台币显示提示框
  $('.what-coin').hover(function() {
    $('.coin-message-tip').show();
  }, function() {
    $('.coin-message-tip').hide();
  });

  // 我的消息
  $('#user-message-1 .user-mp-checkbox').click(function() {
  	if ($(this).hasClass('checked')) {
  		$(this).removeClass('checked');
  	}else{
  		$(this).addClass('checked');
  	}
  	$('#selectall').removeClass('checked');
  });

  $('#selectall,#forSelectall').click(function() {
  	if ($("#selectall").hasClass('checked')) {
  		$("#selectall").removeClass('checked');
  		$('#user-message-1 .checkbox').removeClass('checked');
  	}else{
  		$("#selectall").addClass('checked');
  		$('#user-message-1 .checkbox').addClass('checked');
  	}
  });

  // 密保问题下拉列表

  var selectMibao = $('.sq-selectmenu').offset();
  if(selectMibao){
    $('.mibao-selectmenu-menu').css({
      'top':selectMibao.top+30,
      'left':selectMibao.left
    });

    $('.sq-selectmenu-input').focus(function(){
      $('.mibao-selectmenu-menu').show().siblings('.sq-selectmenu-menu').hide();
      $('.mibao-question .sq-selectmenu-btn').addClass('sq-selectmenu-btn-focus');
    }).blur(function() {
      $('.mibao-question .sq-selectmenu-btn').removeClass('sq-selectmenu-btn-focus');
    })

    $('.sq-selectmenu-input').click(function(event){
      event.stopImmediatePropagation();
      $('.mibao-selectmenu-menu').show();
    })
    $(document).bind("click",function(){
        $('.mibao-selectmenu-menu').hide();
    })

    $('.mibao-selectmenu-menu li').click(function(){
      var selectLi = $(this).find('a').text();
      $('.mibao-question .sq-selectmenu-input').val(selectLi);
      $(this).find('a').addClass('sq-selectmenu-menu-focus').parent().siblings().children().removeClass();
      $('.mibao-selectmenu-menu').hide();
      return false;
    })
  }



// 经验条
  var progress1 = $('.user-progress-source .progress-source-left').text();
  var allprogress1= $('.user-progress-source .progress-source-right').text();
  if(allprogress1>125000){
	  allprogress1 = 125000;
  }
  if(progress1>125000){
	  allprogress1 = 125000;
  }
  var loadCWidth1 = progress1/allprogress1*100;
  $('.user-progress-groove .user-progress-core-m').width(loadCWidth1+'%');
  if (progress1/allprogress1*100>97.9) {
      $('.user-progress-groove .user-progress-core-m').width(94.4+'%');
  }
    
  var progress2 = $('.uservip-progress-bg .progress-bg-left').text();
  var allprogress2= $('.uservip-progress-bg .progress-bg-right').text();
  if(progress2>125000){
	  progress2 = 125000;
  }
  if(allprogress2>125000){
	  allprogress2 = 125000;
  }
  var loadCWidth2 = progress2/allprogress2*100;
  $('.uservip-progress-bg .uservip-progress-core').width(loadCWidth2+'%');
  if(loadCWidth2>50){
      $('.uservip-progress-bg .uservip-progress-bg-text').css('color','#333');
  }
  
  vipLevel('.uservip-bottom-level1');
  vipLevel('.uservip-bottom-level2');
  vipLevel('.uservip-bottom-level3');
  vipLevel('.uservip-bottom-level4');
  vipLevel('.uservip-bottom-level5');
  vipLevel('.uservip-bottom-level6');
  vipLevel('.uservip-bottom-level7'); 
  
  var progress3 = $('.uservip-promise .uservip-promise-right i').text();
  $('.uservip-promise .progress-core-green').css('width',progress3+'%');
  
  var progress4 = $('.promise-info .uservip-promise-right i').text();
  $('.promise-info .progress-core-green').css('width',progress4+'%');
  if (progress4=='100') {
      $('.promise-info .uservip-promise-right span').text('资料填写完整')
  }

  var progress5 = $('.my-info .uservip-promise-right i').text();
  $('.my-info .progress-core-green').css('width',progress5+'%');
  if (progress5=='100') {
      $('.my-info .uservip-promise-right span').text('资料填写完整')
  }
   

  // 签到yes,no
  $("#global-tip-YN .global-tip-yes").click(function(e){
	  if(e.target == $("#global-tip-YN .global-tip-yes")[0]){
	    alert("你点了链接一！");
	  }
  });
});

$(document).ready(function() {
	//文本框不保存缓存记录
	$("input").attr("autocomplete", "off");
});

  
function vipLevel(vipclass){
    var num = $(vipclass).find('b').text();
    var progressW = $('.uservip-progress-bg').width();
    var res = $('.uservip-progress-bg-text .progress-bg-right').text();
    var loadCWidthVip = (num-16*res/progressW)/res*100;
    $(vipclass).css('left',loadCWidthVip+'%');
  }

   //弹窗通用JS
  function tangchuang(msg, callback){
  	  var htmlstr='<div class="global-tip" id="global-tip"><div class="global-tip-top"><div class="tip-top-left">提示信息</div><a href="javascript:;" class="global-tip-close"></a></div><p class="global-tip-content">'+msg+'</p><a href="javascript:;" class="global-tip-btn">确定</a></div><div class="zhezhao"></div>';
	  $('body').append(htmlstr);
	  
 	   //遮罩高度
   	  $(".zhezhao").height($("body").height());
	  //获取页面高度 
	  var bodyH = $(window).height();
	  var a = 'global-tip';
	  var boxH = $("#"+a+"").height();
	  $("#"+a+"").css("top",(bodyH-boxH)/2);
	  var height1 = $("#"+a+"").css("top");
	  var scrollH = $(window).scrollTop();
	  $("#"+a+"").stop().animate({top: parseInt(height1)+scrollH}, 500);
	  
	  $('.global-tip-close,.global-tip-btn').bind('click', function() {
		  $('.global-tip').remove();
		  $(".zhezhao").remove();
		  if (callback) callback();
	  });
  }
  
  //签到弹窗
  // 弹窗通用JS
  function tangchuang_qd(a,bb){
	var htmlstr='<div class="global-tip-YN" id="global-tip-YN"><div class="global-tip-top-YN"><div class="tip-top-left-YN">'+a+'</div><a href="javascript:;" class="global-tip-close"></a></div><p class="global-tip-contentYN clearfix"><a href="javascript:;" class="global-tip-yes">YES</a><a href="javascript:;" class="global-tip-no">NO</a></p></div><div class="zhezhao"></div>';
    $('body').append(htmlstr);
    
     // 遮罩高度 
      $(".zhezhao").height($("body").height());
     //获取页面高度
    var bodyH = $(window).height();
    var boxH = $("#"+a+"").height();
    $("#"+a+"").css("top",(bodyH-boxH)/2);
    var height1 = $("#"+a+"").css("top");
    var scrollH = $(window).scrollTop();
    $("#"+a+"").stop().animate({top: parseInt(height1)+scrollH}, 500);
    var aa=''
    $('.global-tip-close,.global-tip-no').bind('click', function() {
        $('.zhezhao,.global-tip-YN').remove();
        return false;
    });
    var aa='';
    $('.global-tip-close,.global-tip-yes').bind('click', function() {
        $('.zhezhao,.global-tip-YN').remove();
       return aa=true;
      });
    if(aa==''){
    	bb();
    }
  }
  
  //发送邮件倒计时
  function countdown(sec) {
		$("#resendP").hide();
		$("#reclock").html( sec+'秒后重新发送' ).show();
		var time = setInterval(function(){
			sec--;
			$("#reclock").html( sec+'秒后重新发送' );
			if ( sec < 0 ) {
				clearInterval( time );
				$("#resendP").show();
				$("#reclock").hide();
			}
		}, 1000);
	}

  
  
function init(obj_1,val_1,obj_2,val_2,obj_3,val_3){
  
  //定义默认数据
  var ar = ["请选择","请选择","请选择"];
  var pindex=0;
  var cindex=0;
  
  //初始化
  $("<option value=''>"+ar[0]+"</option>").appendTo($("#"+obj_1));
  $("<option value=''>"+ar[1]+"</option>").appendTo($("#"+obj_2));
  $("<option value=''>"+ar[2]+"</option>").appendTo($("#"+obj_3));
  
  //初始化obj_1
  for (i=0;i<mp.length;i++){
          if (mp[i]==val_1){
              pindex = i;
              $("<option selected>"+mp[i]+"</option>").appendTo($("#"+obj_1));
          }else{
              $("<option>"+mp[i]+"</option>").appendTo($("#"+obj_1));
              }
      }

  if (pindex!=0){
          for (n=1;n<mc[pindex].length+1;n++){
                  if (mc[pindex][n-1]==val_2){
                      cindex = n;
                      $("<option selected>"+mc[pindex][n-1]+"</option>").appendTo($("#"+obj_2));
                  }else{                      
                      $("<option>"+mc[pindex][n-1]+"</option>").appendTo($("#"+obj_2));
                  }           
              }       
      }

  if (cindex!=0){
          for (m=0;m<mh[pindex][cindex-1].length;m++){
                  if (mh[pindex][cindex-1][m]==val_3){
                          $("<option selected>"+mh[pindex][cindex-1][m]+"</option>").appendTo($("#"+obj_3));
                      }else{                      
                          $("<option>"+mh[pindex][cindex-1][m]+"</option>").appendTo($("#"+obj_3));
                      }   
              }
      }
   
      
  //响应obj_1的change事件  
  $("#"+obj_1).change(function(){
      //获取索引
      pindex = $("#"+obj_1).get(0).selectedIndex;
      //清空c和h
      $("#"+obj_2).empty();
      //重新给c填充内容
      $("<option>"+ar[1]+"</option>").appendTo($("#"+obj_2));
          if (pindex!=0){
              for (k=0;k<mc[pindex-1].length;k++){
                  $("<option>"+mc[pindex-1][k]+"</option>").appendTo($("#"+obj_2));
              }
          }   
      //清空h
      $("#"+obj_3).empty();
      $("<option>"+ar[2]+"</option>").appendTo($("#"+obj_3));
  });
  
  //响应obj_2的change事件  
  $("#"+obj_2).change(function(){
      cindex = $("#"+obj_2).get(0).selectedIndex;
      //清空h
      $("#"+obj_3).empty();
      //重新给h填充内容
      $("<option>"+ar[2]+"</option>").appendTo($("#"+obj_3));
      if (cindex!=0){
          for (j=0;j<mh[pindex-1][cindex-1].length;j++){
              $("<option>"+mh[pindex-1][cindex-1][j]+"</option>").appendTo($("#"+obj_3));
          }
      }
  });
  
} 
