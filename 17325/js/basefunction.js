/*网站全局公用JS文件*/
/*手机号码正则匹配*/
var myreg=/^(((13[0-9])|(14[0-9]{1})|(17[0-9])|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]))+\d{8})$/;

/*Message全局提醒*/
function MessageShowTip(tip,type)
{
  var $tip=$('#ShowTip');
  if($tip.length==0)
  {
    if(type=='success')  /*成功*/
	    {
	     $tip=$('<div id="ShowTip" class="ShowTip radius4"></div>');  
	    }
    else if(type=='error')  /*失败*/
        {
	     $tip=$('<div id="ShowTip" class="ShowTip error radius4"></div>');  
	    }
    else if(type=='warning') /*警告*/
        {
         $tip=$('<div id="ShowTip" class="ShowTip warning radius4"></div>');  
        }
    else if(type=='default') /*默认*/
        {
         $tip=$('<div id="ShowTip" class="ShowTip default radius4"></div>');  
        }
    $('body').append($tip);
  }
  $tip.stop(true).attr('class','alert alert-'+type).text(tip).css('margin-left', -$tip.outerWidth() / 2).fadeIn(500).delay(500).fadeOut(2000);
}
function showtipSuccess(msg)
{	
	//成功
  MessageShowTip(msg,'success');
}
function showtipError(msg)
{
	//失败
  MessageShowTip(msg,'error');
}
function showtipWarning(msg) 
{
	//错误
  MessageShowTip(msg,'warning');
}


/**
 * All Toast全局 轻提示 
 * */
/**
 * Toast_只显示文本,成功,警告,错误
 * icon: 1对号代表成功, 7叹号代表警告, 2叉号代表错误 ,16loading代表加载中,6笑脸代表点赞
 * */
function layerToast(content,icon)
{
  layer.msg(content, {
  	icon:icon,
    offset: 'c',
    anim:1,
    time:3000
	});
}

/*
 * All  Modal全局对话框Start
*/
/*
 * All  Modal全局对话框__01普通对话框
 *
*/
var ordinaryDialog='';
ordinaryDialog+='<div class="globalModal">'+
  '<div class="modalConts WhiteBg radius4">'+
  	'<p class="title">标题部分</p>'+
  	'<div class="modaltext">'+
  	  '<p>文本部分</p>'+
  	'</div>'+
  	'<div class="w100 allDefine clearfix">'+
  	  '<a class="globalModalBtn bggray" onclick="cancelClick(this)">取消</a>'+
  	  '<a class="globalModalBtn bgblue" onclick="defineClick(this)">确定</a>'+
  	'</div>'+
  '</div>'+
'</div>';
/*
 * All  Modal全局对话框__02无标题对话框
 *
*/
var titleDialog='';
titleDialog+='<div class="globalModal">'+
  '<div class="modalConts WhiteBg radius4">'+
  	'<div class="modaltext">'+
  	  '<p>这是无标题对话框</p>'+
  	'</div>'+
  	'<div class="w100 allDefine clearfix">'+
  	  '<a class="globalModalBtn bggray" onclick="cancelClick(this)">取消</a>'+
  	  '<a class="globalModalBtn bgblue" onclick="defineClick(this)">确定</a>'+
  	'</div>'+
  '</div>'+
'</div>';
/*
 * All  Modal全局对话框__03自定义对话框(三种支付方式)
 *
*/
var customDialog='';
customDialog+='<div class="customDialog">'+
  '<div class="modalConts WhiteBg radius4">'+
  	'<p onclick="cancelClick(this)" class="cancelClick cursor animate"></p>'+
  	'<p class="title">支付</p>'+
  	'<div class="modaltext">'+
  	  '<p>选择支付方式</p>'+
  	'</div>'+
  	'<div class="paymentMethod">'+
  	  '<a class="payment" href="#" target="_blank" title="支付宝"><em class="payment_icon payment_icon1"></em>支付宝</a>'+
  	  '<a class="payment" href="#" target="_blank" title="微信"><em class="payment_icon payment_icon2"></em>微信</a>'+
  	  '<a class="payment" href="#" target="_blank" title="银联"><em class="payment_icon payment_icon3"></em>银联</a>'+
  	'</div>'+
  '</div>'+
'</div>';
/*
 * All  Modal全局对话框__04异步操作(删除)
 *
*/
var asynchronousOperation='';
asynchronousOperation+='<div class="globalModal">'+
'<div class="modalConts WhiteBg radius4">'+
  '<p class="title">删除确认</p>'+
  '<div class="modaltext">'+
  	'<p>删除后无法恢复</p>'+
  '</div>'+
  '<div class="w100 allDefine clearfix">'+
  	'<a class="globalModalBtn bggray" onclick="cancelClick(this)">取消</a>'+
  	'<a class="globalModalBtn bgblue" onclick="modalDeleteBtn(this)">确定</a>'+
  '</div>'+
 '</div>'+
'</div>';


/*
 * All Spin全局加载中Start
 *
*/
/*All Spin全局加载_按钮加载*/
var buttonLoading='';
buttonLoading+='<div class="buttonLoading radius4">'+
   '<img src="layer/loading-0.gif" />'+
 '</div>';


/*
*  All 全局移除弹出层Start
* 
*/
function cancelClick(obj)
{
  var _globalModal=$('.globalModal'); //Modal全局对话框__普通对话框与无标题对话框
  var _customDialog=$('.customDialog'); //Modal全局对话框__自定义对话框(支付方式)
  var _reserveWrap=$('.reserveWrap'); //预约协商全局弹出框
  var _dlpopupLayer=$('.dlpopupLayer'); //全局注册与登录弹出框
  if(_globalModal.length>0)
  {
  	console.log(_globalModal)
    _globalModal.remove();
  }
  if(_customDialog.length>0)
  {
  	console.log(_customDialog)
    _customDialog.remove();
  }
  if(_reserveWrap.length>0)
  {
  	console.log(_reserveWrap)
    _reserveWrap.remove();
  } 
  if(_dlpopupLayer.length>0)
  {
    console.log(_dlpopupLayer)
    _dlpopupLayer.hide();
  }
}
/*用来测试给body追加弹出层*/
function myClick(obj)
{
	var _self=$(obj);
	layerToast('报错提示');
//	$('body').append(asynchronousOperation);
//_self.append(buttonLoading)
}

/*
* All  全局收藏服务
* 
*/
function collectionBtn(obj,userid,type,productid)
{
	//0代表取消收藏,1代表收藏
  var _self=$(obj);
  child=_self.find('.collectionIcon'); 
  var data={'userid':userid,'type':type,'productid':productid};
  $.ajax({
  	type:"POST",
  	url:"ceshi.php",
  	dataType:"json",
  	data:data,
  	success:function(data)
  	{
  		if(data.code==0)
  		{
  			_self.find('.collectionText').text('收藏服务');
  			_self.find('.collectionIcon').removeClass('bg');
  		}
  		else if(data.code==1)
  		{
  			_self.find('.collectionText').text('取消收藏');
  			_self.find('.collectionIcon').addClass('bg');
  		}
  	}
  });
}




/*
 * All 全局 body滚动条 - 禁用滚动条
 */
function noScroll()
{
  document.body.parentNode.style.overflow = "hidden"; //隐藏且禁用横向纵向两个滚动条
}
function isScroll()
{
  document.body.parentNode.style.overflow = "auto"; //隐藏且禁用横向纵向两个滚动条
}

/*
 *  All 全局预约协商弹出层
 */
var allreserveWrap='';
allreserveWrap+='<div class="w100 reserveWrap">'+
	'<!--选择经纪人Start-->'+
	'<div class="chooseBroker">'+
	  '<div class="w100 reserveCaption size12">'+
	  	'<div class="fl left">'+
	  		'<em class="orderIcon"></em>'+
	  		'<select class="score" name="">'+
	  			'<option value="按评分从高到低排序">按评分从高到低排序</option>'+
	  			'<option value="按评分从高到低排序">按评分从高到低排序</option>'+
	  			'<option value="按评分从高到低排序">按评分从高到低排序</option>'+
	  			'<option value="按评分从高到低排序">按评分从高到低排序</option>'+
	  		'</select>'+
	  	'</div>'+
	  	'<p class="fl center">选择经纪人</p>'+
	  	'<p onclick="cancelClick(this)" class="fr right cursor"><em class="close_icon"></em></p>'+
	  '</div>'+
	  '<ul class="w100 clearfix">'+
	  	'<li class="fl">'+
	  	  '<div class="fl li_left">'+
	  	  	'<a href="" class="photo"><img class="radius50" src="images/2.jpg" /></a>'+
	  	  	'<p class="score">评分：<em class="color-red">5.0</em></p>'+
	  	  	'<p class="size12">31人评价</p>'+
	  	  '</div>'+
	  	  '<div class="fr li_right size12">'+
	  	  	'<p class="consultant size16">刘镇（阳光奥美）</p>'+
	  	  	'<p class="color-red price">¥ 7600.00</p>'+
	  	  	'<p class="cost">服务费：¥400.00</p>'+
	  	  	'<p class="cost">地址费：¥400.00</p>'+
	  	  	'<p class="cost">工本费：¥400.00</p>'+
	  	  '</div>'+
	  	  '<a onclick="chooseIt(this)" class="chooseIt size14 animate">选Ta服务</a>'+
	  	'</li>'+
	  	'<li class="fl">'+
	  	  '<div class="fl li_left">'+
	  	  	'<a href="" class="photo"><img class="radius50" src="images/2.jpg" /></a>'+
	  	  	'<p class="score">评分：<em class="color-red">5.0</em></p>'+
	  	  	'<p class="size12">31人评价</p>'+
	  	  '</div>'+
	  	  '<div class="fr li_right size12">'+
	  	  	'<p class="consultant size16">刘镇（阳光奥美）</p>'+
	  	  	'<p class="color-red price">¥ 7600.00</p>'+
	  	  	'<p class="cost">服务费：¥400.00</p>'+
	  	  	'<p class="cost">地址费：¥400.00</p>'+
	  	  	'<p class="cost">工本费：¥400.00</p>'+
	  	  '</div>'+
	  	  '<a onclick="chooseIt(this)" class="chooseIt size14 animate">选Ta服务</a>'+
	  	'</li>'+
	  	'<p onclick="loadMore(this)" class="loadMore w100 clearfix cursor">点击加载更多<em class="downArrow"></em></p>'+
	  '</ul>'+
	'</div>'+
	'<!--输入联系方式Start-->'+
	'<div class="linkBroker WhiteBg">'+
		'<div class="w100 reserveCaption size12">'+
	  	'<div class="fl left">输入联系方式，链接经纪人</div>'+
	  	'<p onclick="cancelClick(this)" class="fr right cursor"><em class="close_icon"></em></p>'+
	  '</div>'+
		'<form class="linkForm" action="" method="post">'+
		  '<div class="w100 clearfix linkItem radius20">'+
		  	'<label class="fl linklabel"><em class="phoneIcon"></em></label>'+
		  	'<input class="fl linkInput size14" type="text" name="linktel" id="linktel" value="" maxlength="11" placeholder="输入您的手机号"  />'+
		  '</div>'+
		  '<div class="w100 clearfix linkItem radius20">'+
		  	'<label class="fl linklabel"><em class="peopleIcon"></em></label>'+
		  	'<input class="fl linkInput size14" type="text" name="linkname" id="linkname" value="" placeholder="输入您的姓名"  />'+
		  '</div>'+
			'<input onclick="linkButton(this)" class="linkButton size14 active" type="button" value="提交" />'+
		'</form>'+
		'<div class="connecting size18">'+
			'<p class="color-blue p1">正在链接经纪人<em class="ellipsis">. . .</em> </p>'+
			'<p class="size14 p2">请稍等 '+
				'<span class="color-red countdown-time">5</span>'+
				'<em class="color-red">s</em>'+
			'</p>'+
			'<p class="jumpClick radius15 color-blue size14">跳过</p>'+
		'</div>'+
	'</div>'+
'</div>';
function reserveClick(obj,userid,type,productid)
{
	var _self=$(obj);
  $('body').append(allreserveWrap);
}

/*
 * All 全局 预约协商选他为我服务
 * */
function chooseIt(obj)
{
  var _self=$(obj);
  $('.chooseBroker').hide(); 
  $('.linkBroker').show();
}
/*
 * All 全局预约协商输入联系人信息验证
 */

function linkButton(obj)  //手机号码验证
{
  var _self=$(obj);
  var userphone=$("input[name='linktel']");  //手机号码
  var username=$("input[name='linkname']");  //联系人名字 
  if(userphone.val()=='' || userphone.val()=='undefined')
  {
    layerToast('请输入您的手机号');
  }
  else if(!myreg.test(userphone.val()))
  {
  	layerToast('请输入正确的手机号',2);
  }
  else if(username.val()=='' || username.val()=='undefined')
  {
    layerToast('请输入您的姓名');
  }
  else 
  {
  	$.ajax({
      type: "POST",
      dataType:'json',
      url:"ceshi.php",
      data:$('.linkForm').serialize(), //提交整个表单
      success: function(data) {
      	layerToast('提交成功!');
      	setTimeout(function(){
      		$('.linkForm').hide();
      		$('.connecting').show();
      	},2000)
      	return false;
      }, 
      error:function()
      {
      	
      }
    });	
  }
}

/*正在链接到经纪人5s倒计时*/
var wait=60;
timeOut();
function timeOut(){
	if(wait==0){
    //倒计时结束
	}
	else
	{
		setTimeout(function(){
			wait--;
			$('.countdown-time').text(wait);
			timeOut();
		},1000)
	}
}

/*
* All  全局 用户评论点赞服务
* 
*/
function praiseBtn(obj,userid,clientid)
{
	//0代表取消点赞,1代表点赞
  var _self=$(obj);
  child=_self.find('.zanIcon'); 
  var data={'userid':userid,'clientid':clientid};
  $.ajax({
  	type:"POST",
  	url:"ceshi.php",
  	dataType:"json",
  	data:data,
  	success:function(data)
  	{
  		if(data.code==0)
  		{
  			_self.find('.zanIcon').removeClass('bg');
  		}
  		else if(data.code==1)
  		{
  			var obj=$(_self).siblings('.number');
		    var num=obj.text();
		    obj.text(parseInt(num)+1);
   
        obj_comment= $(_self).find('.number').text();
		    $(_self).find('.number').text(parseInt(obj_comment)+1);
  			_self.find('.zanIcon').addClass('bg');
  		}
  	}
  });
}

/*ALL 全局问答版块点赞 */
/**
 *06.点赞  (3个:type类型和ID和分点赞和踩)
 * 1为答案点赞  3给资讯点赞
 * wdtype代表类型(0资讯和1是问答)  3代表答案
 * type代表点赞或是踩  1代表点赞 2代表踩
 * ID代表文章或问答的id
 * pubUid为文章发表者的id
 * */
function  likeAj(obj,wdtype,type,ID,pubUid){
	//1答案点赞  2答案中评论点赞  3,给资讯点赞  4.给资讯评论点赞
  var zan;
  var user_id = $('#followhide').val();
	// if(!user_id){MaskLayer('LoginBox');return false;}
  var _self = obj;//防止ajax清除数据
	switch(wdtype){
		case 0://资讯
			zan = 3;
			break;
		case 1://问答 评论点赞
			zan = 2;
			break;
		case 3://问答中的答案
			zan = 1;
			break;
		case 4: // 资讯评论点赞
			zan = 4;
			break;
	}
  var data = {'wdtype':zan,'type':type,'ID':ID,'user_id':user_id,'artType':wdtype,'pubUid':pubUid};
  $.ajax({
   type:'POST',
   url:'/index/Tool/userNewDot',
   data: data,
   dataType:"json",
   success: function(data){
	   if(data.code == 0){
		   
		   return false;
	   }else{
		   
		   var obj=$(_self).siblings('.number');
		   var num=obj.text();
		   obj.text(parseInt(num)+1);

		   // 赞评论
        obj_comment= $(_self).find('.number').text();
		    $(_self).find('.number').text(parseInt(obj_comment)+1);
        
		   // 大V文章
		   obj_article_num  = $(_self).parents('li').find('.comNum2 em').html();
       $(_self).parents('li').find('.comNum2 em').html(parseInt(obj_article_num)+1);
		   $(_self).removeAttr('onclick');
		   if(type==1){
			   $(_self).parent('p').find('.zanIcon').addClass('bg');
			  
			   $(_self).siblings('a').children('.zanIcon').addClass('bg');
			   $(_self).removeAttr('onclick');
			   $(_self).siblings('a').removeAttr('onclick');
			   $(_self).parent('p').next('p').find('a').removeAttr('onclick');
		   }
		   else
		   {
			   $(_self).parent('p').find('.zanIcon').addClass('bg');
			   $(_self).siblings('a').children('.zanIcon').addClass('bg');
			   $(_self).removeAttr('onclick');
			   $(_self).siblings('a').removeAttr('onclick');
			   $(_self).parent('p').prev('p').find('a').removeAttr('onclick');
		   }
	   }
   }
  })
}


/* ALL 全局问答版块收藏 
  *type  2代表不感兴趣  1代表收藏
  *aticle_id代表资讯或问答的id
  *artType代表是问答还是资讯  1问题  2 资讯
*/
function nolike(obj,type,aticle_id,artType){
	if(type == 2){
		$(obj).parent().hide(600);
		return false;
	}
  var user_id = $('#followhide').val(); //判断是否登录
	if(user_id == '' || user_id ==undefined){
		MaskLayer('LoginBox');return false;
	}
  $.ajax({
   type:'POST',
   url:'/index/Tool/collector',
   data:{'type':type,'artType':artType,'aticle_id':aticle_id,userid:user_id},//请求参数(不感兴趣类型与用户ID)
   dataType:"json",
   success: function(data){
   	 if(data.code == 0) {
		 ShowFailure(data.message);
   	    return false;
   	  }else{
         if(type == 1){
             var _job =  $(obj).parent('p').find('.number');
             var mu = _job.text();
             if( $(obj).parent('p').find('.shoucangIcon').hasClass('bg')){
                 $(obj).parent('p').find('.shoucangIcon').removeClass('bg');
                 _job.text(parseInt(mu)-1);
             }else{
                 $(obj).parent('p').find('.shoucangIcon').addClass('bg');
                 _job.text(parseInt(mu)+1);
             }

         }else {
             $(obj).parent().hide(600);
         }
   	 }
   }
  })
}

/*ALL 全局关注大V */
function Follow(obj,vid,_type)
{
	
  var user_id = $('#followhide').val();
//	if(user_id == '' || user_id==undefined){//先判断用户是否登录
//		MaskLayer('LoginBox');return false;
//	}
	var _focus = $(obj).attr('_focus');
	if(_type == 2 || _focus == 2){
		var _typ = 2;
	}else{
		var _typ=1;
	}
  $.ajax({
   type:'POST',
   url:'ceshi.php',
   data:{'uid':user_id,'v_id':vid,'_type':_typ},//请求参数(uid是当前访问者的id  v_id是要被关注的用户的id)
   dataType:"json",
   success: function(data){
   	if(data.code == 2)
   	{
		  $(obj).removeClass('').html('关注Ta');
		  $(obj).attr('_focus',1);
   	}
   	else if(data.code ==1)
   	{
   	  $(obj).addClass('active').html('已关注');
		  var te = $(obj).prev().find('em').text();
		  var tc = parseInt(te)+1;
		  $(obj).prev().find('em').text(tc);
		  $(obj).attr('_focus',2);
   	 }
   }
  })
}


