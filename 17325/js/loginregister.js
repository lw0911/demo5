/*ALL 全局登录和注册中60天内免登录按钮*/
function freeloginClick(obj)
{
  var _self=$(obj);
  brother=_self.siblings('.chooseIcon');
  if(brother.hasClass('bg'))
  {
    brother.removeClass('bg');
  }
  else
  {
   brother.addClass('bg');
  }  
}
/*
 * 
 * ALL 全局弹出层短信验证码登录Start
 *
 */
var  smsLogin= '<div class="loginWrap dlWrap radius8">' +
    '<p onclick="cancelClick(this)" class="cancelClick cursor"><em class="cancelIcon"></em></p>' +
    '    <h3 class="loginTitle size20">登录</h3>' +
    '    <ul class="loginConts w100">' +
    '      <form action="" method="post" class="dx_dlform" id="dx_dlform">' +
    '      <li class="loginItem w100 clearfix">' +
    '        <label class="fl li_left"><em class="userIcon"></em></label>' +
    '        <div class="fl li_center">' +
    '        <input class="w100" type="text" name="dx_dlphone" id="dx_dlphone" placeholder="输入您的手机号" maxlength="11" autocomplete="off" value="" />' +
    '        </div>' +
    '      </li>' +
    '      <li class="loginItem w100 clearfix">' +
    '        <label class="fl li_left"><em class="writeIcon"></em></label>' +
    '        <div class="fl li_center">' +
    '        <input class="w100" type="text" name="dx_dlimgcode" id="dx_dlimgcode" placeholder="输入验证码" autocomplete="off" value="" />' +
    '        </div>' +
    '        <div class="fr li_right">' +
    '        <span class="genimage"><img src="images/genimage.png" /></span>' +
    '        </div>' +
    '      </li>' +
    '      <li class="loginItem w100 clearfix">' +
    '        <label class="fl li_left"><em class="lockIcon"></em></label>' +
    '        <div class="fl li_center">' +
    '        <input class="w100" type="text" name="dx_dlcode" id="dx_dlcode" placeholder="输入验证码" autocomplete="off" value="" />' +
    '        </div>' +
    '        <div class="fr li_right">' +
    '        <input onclick="dlsendMessage(this)" id="dlsendcodeMessage" class="sendcode radius14 size12 cursor fr" type="button" value="发送验证码" />' +
    '        </div>' +
    '      </li>' +
    '      <div class="w100 clearfix size12 freelogin">' +
    '      <label class="fl cursor" for="freeLogin">' +
    '      <input class="hide" type="checkbox" name="freeLogin" id="freeLogin" value="60天内免登录" onclick="freeloginClick(this)" />' +
    '      <em class="chooseIcon"></em>' +
    '      60天内免登录' +
    '      </label>' +
    '      <a class="fr color-blue" onclick="passwordloginClick(this)">密码登录</a>' +
    '      </div>' +
    '      <input class="loginbutton radius3 size16 cursor" type="button" name="dx_dlBtn" id="dx_dlBtn" value="登录" onclick="dxdlButton(this)" />' +
    '      <div class="w100 clearfix size12 freelogin2">' +
    '      <a class="fl color-blue"></a>' +
    '      <p class="fr">没有账户 , <a onclick="registernowBtn(this)" class="color-blue">现在注册</a></p>' +
    '      </div>' +
    '      <p class="signinWith w100">' +
    '      社交账号登录' +
    '      <span class="icon qqIcon"></span>' +
    '      <span class="icon wechatIcon"></span>' +
    '      </p>' +
    '  </form>' +
    '    </ul>' +
    '  </div>';

function loginClick(obj)
{
$('.dlpopupLayer').append(smsLogin);
}


/*1. 发送验证码*/
var dxdl_InterValObj; //timer变量，控制时间  
var dxdl_count = 5; //间隔函数，1秒执行
var dxdl_curCount;//当前剩余秒数
function dlsendMessage(obj)
{
  var _self=$(obj);
  var dx_dlphone=document.getElementById('dx_dlphone').value; //手机号码
  var dx_dlimgcode=document.getElementById('dx_dlimgcode').value; //图片验证码
  if(dx_dlphone=='')
  {
    layerToast('手机号不能为空');  
  }
  else if(!myreg.test(dx_dlphone))
  {
   layerToast('请输入正确的手机号');  
  }
  else if(dx_dlimgcode=='')
  {
    layerToast('请输入验证码');
  }
  else 
  {
    dxdl_curCount=dxdl_count;
    //设置button效果,开始计时
     _self.attr("disabled", "true");  
     _self.addClass('active');
     _self.val(dxdl_curCount + "秒后重发");
     dxdl_InterValObj = window.setInterval(dxdlSetRemainTime, 1000); //启动计时器，1秒执行一次  
      $.ajax({
       type: "POST",
       url:"/index/message/send_sms",
       data:{'dx_dlphone':dx_dlphone,'dx_dlimgcode':dx_dlimgcode},
       "error": function(XMLHttpRequest, textStatus, errorThrown){
          
        },
       success: function(data) {
         layerToast('验证码已发送至你的注册手机');
       }  
     });
  }
  //请求数据
}
function dxdlSetRemainTime() {  
  var dlsendcodeMessage=$('#dlsendcodeMessage');
    if (dxdl_curCount == 0) {
        dlsendcodeMessage.removeClass('active');
        window.clearInterval(dxdl_InterValObj);//停止计时器  
        dlsendcodeMessage.removeAttr("disabled");//启用按钮  
        dlsendcodeMessage.val("发送验证码");
    }  
    else {  
        dxdl_curCount--;
        dlsendcodeMessage.val(dxdl_curCount+"秒后重发");
    }  
}  
/*2. 提交整个表单*/
function dxdlButton(obj)
{
  var _self=$(obj);
  var dx_dlphone=document.getElementById('dx_dlphone').value; //手机号码
  var dx_dlimgcode=document.getElementById('dx_dlimgcode').value; //图片验证码
  var dx_dlcode=document.getElementById('dx_dlcode').value; //短信验证码

  if(dx_dlphone=='')
  {
    layerToast('手机号不能为空');  
  }
  else if(!myreg.test(dx_dlphone))
  {
   layerToast('请输入正确的手机号');  
  }
  else if(dx_dlimgcode=='')
  {
    layerToast('请输入验证码');
  }
  else if(dx_dlcode=='')
  {
    layerToast('验证码不能为空');
  }
  else
  {
    $.ajax({
    	type:"POST",
    	url:"ceshi.php",
    	dataType:"json",
    	data:{'dx_dlphone':dx_dlphone,'dx_dlimgcode':dx_dlimgcode,'dx_dlcode':dx_dlcode},
    	success: function(data){
         //清空弹出层的内容,隐藏弹出层
         $('.dlpopupLayer').html('');
         $('.dlpopupLayer').hide();
      }
    });
  }
}


/*
 * 
 * ALL 全局弹出层密码登录Start
 *
 */
var passwordlogin='<div class="loginWrap dlWrap radius8">'+
	'	<p onclick="cancelClick(this)" class="cancelClick cursor"><em class="cancelIcon"></em></p>'+
    '<h3 class="loginTitle size20">登录</h3>'+
    '<ul class="loginConts w100">'+
    '  <li class="loginItem w100 clearfix">'+
    '    <label class="fl li_left"><em class="userIcon"></em></label>'+
    '    <div class="fl li_center">'+
    '    	<input class="w100" type="text" name="mm_dlphone" id="mm_dlphone" placeholder="输入您的手机号" autocomplete="off" value="" />'+
    '    </div>'+
    ' </li>'+
    '  <li class="loginItem w100 clearfix">'+
    '    <label class="fl li_left"><em class="writeIcon"></em></label>'+
    '    <div class="fl li_center">'+
    '    	<input class="w100" type="text" name="mm_dlimgcode" id="mm_dlimgcode" placeholder="输入验证码" autocomplete="off" value="" />'+
    '    </div>'+
    '    <div class="fr li_right">'+
    '    	<span class="genimage"><img src="images/genimage.png" /></span>'+
    '    </div>'+
    '  </li>'+
    '  <li class="loginItem w100 clearfix">'+
    '    <label class="fl li_left"><em class="lockIcon"></em></label>'+
    '    <div class="fl li_center">'+
    '    	<input class="w100" type="text" name="mm_dlpass" id="mm_dlpass" placeholder="输入密码" autocomplete="off" value="" />'+
    '    </div>'+
    '  </li>'+
    '  <div class="w100 clearfix size12 freelogin">'+
    '  	<label class="fl cursor" for="freeLogin1">'+
    '  		<input class="hide" type="checkbox" name="freeLogin1" id="freeLogin1" value="60天内免登录" onclick="freeloginClick(this)" />'+
    '  		<em class="chooseIcon"></em>'+
    '  		60天内免登录'+
    '  	</label>'+
    '  	<a class="fr color-blue" onclick="forgetpasswordClick(this)">忘记密码</a>'+
    '  </div>'+
    '  <input onclick="passdlButton(this)" class="loginbutton radius3 size16 cursor" type="button" name="mm_dlBtn" id="mm_dlBtn" value="登录" />'+
    '  <div class="w100 clearfix size12 freelogin2">'+
    '  	<a onclick="mobilecodeLogin(this)" class="fl color-blue">手机验证码登录</a>'+
    '  	<p class="fr">没有账户 , <a onclick="registernowBtn(this)" class="color-blue">现在注册</a></p>'+
    '  </div>'+
    '  <p class="signinWith w100">'+
    '  	社交账号登录'+
    '  	<span class="icon qqIcon"></span>'+
    '  	<span class="icon wechatIcon"></span>'+
    '  </p>'+
    '</ul>'+
  '</div>';

/*1. 提交表单*/
function passdlButton(obj)
{
  var mm_dlphone=document.getElementById('mm_dlphone').value; //手机号码
  var mm_dlimgcode=document.getElementById('mm_dlimgcode').value; //图片验证码
  var mm_dlpass=document.getElementById('mm_dlpass').value; //密码
  if(mm_dlphone=='')
  {
    layerToast('手机号不能为空');
  }
  else if(!myreg.test(mm_dlphone))
  {
   layerToast('请输入正确的手机号');  
  }
  else if(mm_dlimgcode=='')
  {
    layerToast('请输入验证码');
  }
  else if(mm_dlpass=='')
  {
    layerToast('密码不能为空');
  }
  else
  {
    $.ajax({
    	type:"POST",
    	url:"ceshi.php",
    	dataType:"json",
    	data:{'mm_dlphone':mm_dlimgcode,'mm_dlimgcode':mm_dlimgcode,'mm_dlpass':mm_dlpass},
    	success: function(data){
         //清空弹出层的内容,隐藏弹出层
         $('.dlpopupLayer').html('');
         $('.dlpopupLayer').hide();
      }
    });
  }
}

/*
 * 
 * ALL 全局注册版块 Start
 *
 */

var zhuce='<div class="loginWrap dlWrap radius8 registeredWrap">' +
'  <p onclick="cancelClick(this)" class="cancelClick cursor"><em class="cancelIcon"></em></p>' +
'      <h3 class="loginTitle size20">注册</h3>' +
'      <ul class="loginConts w100">' +
'        <li class="loginItem w100 clearfix">' +
'          <label class="fl li_left"><em class="userIcon"></em></label>' +
'          <div class="fl li_center">' +
'        <input class="w100" type="text" name="zcphone" id="zcphone" placeholder="输入您的手机号" autocomplete="off" value="" />' +
'          </div>' +
'        </li>' +
'        <li class="loginItem w100 clearfix">' +
'          <label class="fl li_left"><em class="lockIcon"></em></label>' +
'          <div class="fl li_center">' +
'        <input oninput="logincodeClick(this)" class="w100" type="text" name="zccode" id="zccode" placeholder="输入验证码" autocomplete="off" value="" />' +
'          </div>' +
'          <div class="fr li_right">' +
'        <input onclick="zcsendcodeMessage(this)" class="sendcode radius14 size12 cursor fr" id="zcsendcodeMessage" type="button" value="发送验证码" />' +
'        <span class="fr send_success radius14"><em class="correctIcon"></em></span>' +
'          </div>' +
'        </li>' +
'        <p class="hint size18 w100 clearfix">输入验证码即可注册用户</p>' +
'        <div class="w100 size12 xieyi">' +
'        <p class="fl size12 color-gray">输入验证码即代表同意<a href="" class="color-blue">《XXX协议》</a></p>' +
'        <a onclick="loginBtn(this)" class="fr size16 color-blue">登录</a>' +
'        </div>' +
'      </ul>' +
'</div>' +
'<!--注册成功Start-->' +
'<div class="dlWrap radius8 loginWrap registrationSuccess">' +
'  <p onclick="cancelClick(this)" class="cancelClick cursor"><em class="cancelIcon2"></em></p>' +
'      <h3 class="loginTitle loginTitle2 size20">注册成功</h3>' +
'      <p class="size12 registered_text">已为您生成密码和用户名，<em class="color-black2">可在此修改</em></p>' +
'      <ul class="w100 loginConts w100">' +
'      <form action="" method="post">' +
'        <li class="loginItem w100 clearfix loginItem2">' +
'          <label class="fl li_left size14">密   码 : </label>' +
'          <div class="fl li_center radius3">' +
'          <input class="size16 color-black" type="password" name="zcpass" id="zcpass" value="123456" />' +
'          </div>' +
'          <div class="fl li_right">' +
'          <span onclick="viewpassBtn(this)" class="viewpassBtn cursor"><em class="eyeIcon"></em></span>' +
'          <span class="view_img size12">查看密码</span>' +
'          </div>' +
'        </li>' +
'        <li class="loginItem w100 clearfix loginItem2">' +
'          <label class="fl li_left size14">用户名 :</label>' +
'          <div class="fl li_center radius3">' +
'          <input class="size16 color-black" type="text" name="zcusername" id="zcusername" value="wjk19990921" />' +
'          </div>' +
'        </li>' +
'        <input onclick="regsuccButton(this)" type="button" class="loginbutton radius3 size16 cursor loginbutton2" value="确定" />' +
'      </form>' +
'      </ul>' +
'</div>';

/*1. 查看密码*/
function viewpassBtn(obj)
{
  var _self=$(obj);
  var zcpass=document.getElementById('zcpass'); //密码
  var eye=_self.find('.eyeIcon');
  if(eye.hasClass('bg'))
  {
    eye.removeClass('bg');
    zcpass.type='password';
    $('.view_img').show();
  }
  else 
  {
    eye.addClass('bg');
    zcpass.type='text';
    $('.view_img').hide();
  }
}

/*2. 点击发送验证码事件 */
var zc_InterValObj; //timer变量，控制时间  
var zc_count = 10; //间隔函数，1秒执行
var zc_curCount;//当前剩余秒数
function  zcsendcodeMessage(obj)
{
	var _self=$(obj);
  var zcphone=document.getElementById('zcphone').value;
  if(zcphone=='')
  {
    layerToast('手机号不能为空');
  }
  else if(!myreg.test(zcphone))
  {
    layerToast('请输入正确的手机号');
  }
  else
  {
    zc_curCount = zc_count;
    //设置button效果，开始计时  
     _self.attr("disabled", "true");  
     _self.addClass('active');
     _self.val(zc_curCount + "秒后重发");
     zc_InterValObj = window.setInterval(zcSetRemainTime, 1000); //启动计时器，1秒执行一次  
          $.ajax({
           type: "POST",
           url:"ceshi.php",
           data:{phone:zcphone,type:3},
           "error": function(XMLHttpRequest, textStatus, errorThrown){
               
            },
          success: function(data) {
          	layerToast('验证码已发送至你的注册手机');
          }  
        });
  }
}
//timer处理函数  
function zcSetRemainTime() {  
	   var zcsendcodeMessage=document.getElementById('zcsendcodeMessage');
    if (zc_curCount == 0) {
        window.clearInterval(zc_InterValObj);//停止计时器  
        zcsendcodeMessage.disabled=""; //启用按钮 
        $('#zcsendcodeMessage').removeClass('active');
        zcsendcodeMessage.value='获取验证码';
    }  
    else {  
        zc_curCount--;
        zcsendcodeMessage.value=zc_curCount+'秒后重发';
    }  
}  

/* 3. 判断验证码是否填对进行下一步 */
function logincodeClick(obj)
{
  var _self=$(obj);
  var zcphone=document.getElementById('zcphone').value;
  if(zcphone=='')
  {
    layerToast('手机号不能为空');
  }
  else if(!myreg.test(zcphone))
  {
    layerToast('请输入正确的手机号');
  }
  else if(_self.val().length==6)
  {
  	  $.ajax({
        type: "POST",
        url:"ceshi.php",
        data:{phone:zcphone,type:3},
        "error": function(XMLHttpRequest, textStatus, errorThrown){
           
        },
        success: function(data) {
        	_self.parents('li').find('.send_success').show();
        	setTimeout(function(){
        		_self.parents('.registeredWrap').hide(); //隐藏注册弹出层
           $('.registrationSuccess').show(); //显示注册成功弹出层
        	},2000)
       }  
      });
  }
}
/*4. 点击注册成功的确定按钮 向后台提交密码与用户名*/
function regsuccButton(obj)
{
  var _self=$(obj);
  var zcpass=document.getElementById('zcpass').value;
  var zcusername=document.getElementById('zcusername').value;
  $.ajax({
    type: "POST",
    url:"ceshi.php",
    data:{zcpass:zcpass,zcusername:zcusername},
    "error": function(XMLHttpRequest, textStatus, errorThrown){
       
    },
    success: function(data) {
     $('.registrationSuccess').remove();
     $('.dlpopupLayer').hide();
   }  
  });
}

/*
 * 
 * ALL 找回密码版块 Start
 *
 */
var Retrievepassword='';
Retrievepassword+='<!--找回密码第一步-->'+
	'<div class="dlWrap radius8 loginWrap retrievePassa">'+
      '<p onclick="cancelClick(this)" class="cancelClick cursor"><em class="cancelIcon2"></em></p>'+
      '<h3 class="loginTitle loginTitle3 size20 color-blue">找回密码</h3>'+
      '<ul class="loginConts w100">'+
        '<li class="loginItem w100 clearfix">'+
          '<label class="fl li_left"><em class="userIcon"></em></label>'+
          '<div class="fl li_center">'+
        	'<input class="w100" type="text" name="retrievephone" id="retrievephone" placeholder="输入您的手机号" maxlength="11" autocomplete="off" value="" />'+
          '</div>'+
        '</li>'+
        '<li class="loginItem w100 clearfix">'+
          '<label class="fl li_left"><em class="lockIcon"></em></label>'+
          '<div class="fl li_center">'+
        	'<input oninput="retrieveCode(this)" class="w100" type="text" name="retrievecode" id="retrievecode" placeholder="输入验证码"  autocomplete="off" value="" />'+
          '</div>'+
          '<div class="fr li_right">'+
        	'<input onclick="retrieveMessage(this)" class="sendcode radius14 size12 cursor fr" id="retrieveMessage" type="button" value="发送验证码" />'+
        	'<span class="fr send_success radius14"><em class="correctIcon"></em></span>'+
          '</div>'+
        '</li>'+
        '<input onclick="retrievebtnNext(this)" class="loginbutton radius3 size16 cursor loginbutton3" type="button" value="下一步" />'+
        '<p class="contactCustomer"><a href="" class="color-blue">联系客服</a></p>'+
      '</ul>'+
	'</div>'+
	'<!--找回密码第二步Start-->'+
	'<div class="dlWrap radius8 loginWrap retrievePassb">'+
	  '<p onclick="cancelClick(this)" class="cancelClick cursor"><em class="cancelIcon2"></em></p>'+
	  '<h3 class="loginTitle size20 color-blue">修改密码</h3>'+
	  '<p class="retrieve_text size12">新密码应不少于6位，且不可与之前设置过的密码重复</p>'+
	  '<ul class="loginConts w100">'+
	    '<li class="loginItem w100 clearfix">'+
	      '<div class="w100 li_center li_center2">'+
	    	'<input class="w100" type="password" name="newPass" id="newPass" placeholder="设置新密码" autocomplete="off" value="" />'+
	      '</div>'+
	    '</li>'+
	    '<li class="loginItem w100 clearfix">'+
	      '<div class="w100 li_center li_center2">'+
	    	'<input class="w100" type="password" name="newPass2" id="newPass2" placeholder="再次输入新密码" autocomplete="off" value="" />'+
	      '</div>'+
	    '</li>'+
	    '<input class="loginbutton radius3 size16 cursor loginbutton3" onclick="newpassButton(this)" type="button" name="newpassButton" id="newpassButton" value="确认修改" />'+
	    '<p class="contactCustomer"><a href="" class="color-blue">联系客服</a></p>'+
	  '</ul>'+
	'</div>'+
	'<!--找回密码第三步Start-->'+
	'<div class="dlWrap radius8 loginWrap retrievePassc">'+
	  '<p onclick="cancelClick(this)" class="cancelClick cursor"><em class="cancelIcon2"></em></p>'+
	  '<h3 class="loginTitle size20 color-blue">密码修改成功</h3>'+
	  '<p class="retrieve_text">请返回登录页面,使用新密码进行登录</p>'+
	  '<input class="loginbutton radius3 size16 cursor returnloginButton" onclick="returnloginButton(this)" type="button" name="returnloginButton" id="returnloginButton" value="返回登录页面" />'+
	'</div>';
	
	
/*1. 发送验证码验证*/
var retrieve_InterValObj; //timer变量，控制时间  
var retrieve_count = 5; //间隔函数，1秒执行
var retrieve_curCount;//当前剩余秒数
function retrieveMessage(obj)
{
  var _self=$(obj);
  var retrievephone=document.getElementById('retrievephone').value;
  if(retrievephone=='')
  {
    layerToast('手机号不能为空');
  }
  else if(!myreg.test(retrievephone))
  {
    layerToast('请输入正确的手机号');
  }
  else
  {
    retrieve_curCount = retrieve_count;
    //设置button效果，开始计时  
    _self.attr("disabled", "true");  
    _self.addClass('active');
    _self.val(retrieve_curCount + "秒后重发");
    retrieve_InterValObj = window.setInterval(retrieveSetRemainTime, 1000); //启动计时器，1秒执行一次  
    $.ajax({
     type: "POST",
     url:"ceshi.php",
     data:{retrievephone:retrievephone,type:3},
     "error": function(XMLHttpRequest, textStatus, errorThrown){
        
     },
    success: function(data) {
     layerToast('验证码已发送至你的注册手机');//验证码提示已经发送到手机
     }  
   });
  }
}
//timer处理函数  
function retrieveSetRemainTime() {  
	var retrieveMessage=document.getElementById('retrieveMessage');
    if (retrieve_curCount == 0) {
      window.clearInterval(retrieve_InterValObj);//停止计时器  
      retrieveMessage.disabled="";//启用按钮  
      $('#retrieveMessage').removeClass('active');
      retrieveMessage.value='获取验证码';
    }  
    else {  
      retrieve_curCount--;
      retrieveMessage.value=retrieve_curCount+ "秒后重发";
    }  
} 

/*2. 判断验证码是否填对,填对添加样式,发送数据*/
function retrieveCode(obj)
{
  var _self=$(obj);
  var retrievephone=document.getElementById('retrievephone').value;
  if(retrievephone=='')
  {
    layerToast('手机号不能为空');
  }
  else if(!myreg.test(retrievephone))
  {
    layerToast('请输入正确的手机号');
  }
  else if(_self.val().length==6)
  {
    $.ajax({
     type: "POST",
     url:"ceshi.php",
     data:{retrievephone:retrievephone,type:0},
     "error": function(XMLHttpRequest, textStatus, errorThrown){
        
     },
     success: function(data) {
      _self.parents('li').find('.send_success').show();
     }  
    });
  }
}

/*3. 找回密码第一步提交按钮*/
function retrievebtnNext(obj)
{
  var _self=$(obj);
  var retrievephone=document.getElementById('retrievephone').value;
  var retrievecode=document.getElementById('retrievecode').value;
  if(retrievephone=='')
  {
    layerToast('手机号不能为空');
  }
  else if(!myreg.test(retrievephone))
  {
    layerToast('请输入正确的手机号');
  }
  else if(retrievecode=='')
  {
    layerToast('验证码不能为空');
  }
  else
  {
	  $.ajax({
	     type: "POST",
	     url:"ceshi.php",
	     data:{retrievephone:retrievephone,retrievecode:retrievecode,type:1},
	     "error": function(XMLHttpRequest, textStatus, errorThrown){
	        
	     },
	     success: function(data) {
	      $('.retrievePassa').hide();
	      $('.retrievePassb').show();
	     }  
	    });
  }
}

/*4. 找回密码第二步 提交按钮 ~~ 密码不能少于6位 且两次不能一样 不能为空*/
function newpassButton(obj)
{
  var _self=$(obj);
  var newPass=document.getElementById('newPass').value;
  var newPass2=document.getElementById('newPass2').value;
  var lenght1=document.getElementById('newPass').value.length;
  var lenght2=document.getElementById('newPass2').value.length;
  console.log(lenght1);
  console.log(lenght2);
  if(newPass=='')
  {
    layerToast('请设置新密码');
  }
  else if(lenght1<6)
  {
    layerToast('密码长度不能少于6位');
  }
  else if(lenght2<6)
  {
    layerToast('密码长度不能少于6位');
  }
  else if(newPass2=='')
  {
    layerToast('请再次输入密码');
  }
  else if(newPass!=newPass2)
  {
    layerToast('两次密码不一致');
  }
  else
  {
    $.ajax({
	     type: "POST",
	     url:"ceshi.php",
	     data:{newPass:newPass,newPass2:newPass2},
	     "error": function(XMLHttpRequest, textStatus, errorThrown){
	        
	     },
	     success: function(data) {
	      $('.retrievePassb').hide(); //隐藏第二步
	      $('.retrievePassc').show(); //显示第三步
	     }  
	    });
  }
}
/* 5. 点击返回登录界面按钮*/
function returnloginButton(obj)
{
  var _self=$(obj);
  _self.parents('.retrievePassc').remove();
  $('.dlpopupLayer').append(passwordlogin);  
}


/*ALL 登录 注册 找回密码之间来回切换Start*/

/*1. 导航点击登录按钮- 一般是展示密码登录*/
function loginBtn(obj)
{
  $('.dlpopupLayer').show();
  $('.dlpopupLayer').empty();
  $('.dlpopupLayer').append(passwordlogin);
}
/*2. 手机验证码登录*/
function mobilecodeLogin(obj)
{
	var _self=$(obj);
  $('.dlpopupLayer').empty();
  $('.dlpopupLayer').append(smsLogin);
}
/* 3. 密码登录 */
function passwordloginClick(obj)
{
  var _self=$(obj);
  $('.dlpopupLayer').empty();
  $('.dlpopupLayer').append(passwordlogin);
}
/* 4. 忘记密码*/
function forgetpasswordClick(obj)
{
	var _self=$(obj);
	$('.dlpopupLayer').empty();
	$('.dlpopupLayer').append(Retrievepassword);
}
/*5. 导航注册按钮*/
function registerBtn(obj)
{
  var _self=$(obj);
  $('.dlpopupLayer').show();
  $('.dlpopupLayer').empty();
  $('.dlpopupLayer').append(zhuce);
}
/*5. 点击现在注册按钮*/
function registernowBtn(obj)
{
  var _self=$(obj);
  $('.dlpopupLayer').empty();
  $('.dlpopupLayer').append(zhuce);
}
