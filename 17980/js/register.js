(function()
{
var tel=document.querySelector('.tel');
var reg=/^1[3578]\d{9}$/;
tel.onfocus=function()
{
	this.value="";
	this.style.border="1px solid green";
	this.className='tel active';
	this.style.background='#F5F5F5'
}
tel.onblur=function()
{
	loop(tel,"手机号码格式错误",reg);
	if(loop(tel,"手机号码格式错误",reg))
	{
		up.style.display='none';
		cover.onmousedown=function(ev)
		{
			var ev=ev||event;
			var disX=ev.clientX-cover.offsetLeft;
			document.onmousemove=function(ev)
			{
				var ev=ev||event;
				 l=ev.clientX-disX;
				 yan1(l)
			}
			document.onmouseup=function(){
				document.onmouseup=null;
				document.onmousemove=null;
			}
			return false
		}	
	}	
}
function loop(obj,str,r)
{
	if(obj.value=="")
	{
		obj.value=str;
		obj.style.color="red";
		obj.style.border="1px solid red";
		obj.className='tel';
		obj.style.background='#FFF';
		return false;
	}else
	{
		if(r.test(obj.value))
		{
			return true;
		}else
		{
			obj.value=str;
			obj.style.color="red";
			obj.style.border="1px solid red";
			obj.className='tel';
			obj.style.background='#FFF';
			return false;
		}
	}	
}
//拖动注册
var login=document.querySelector('.loginbox');
var test=login.querySelector('.test');
var cover=test.querySelector('.cover');
var line=test.querySelector('.line');
var up=test.querySelector('.up');
var green=login.querySelector('.green')
var gSpan=green.querySelector('span');
var gI=green.querySelector('i');
var l=0;
//获取验证码
var yan=document.querySelector('.yan');
var oBtn=yan.querySelector('button');
var next=document.querySelector('.next');
var oInp=yan.querySelector('input');
var flag=false;
var show=document.querySelector('.show');
var timer=null;
var flag1=true;
var form1=document.querySelector('.form1');
	gSpan.onclick=function()
	{
		if(flag)
		{
			if(flag1)
			{
				this.className='span';
				flag1=false;
			}else
			{
				this.className='';
				flag1=true;
				
			}
		}
	}

function yan1(l){
	if(l<0)
	{
		l=0;
	}else if(l>test.offsetWidth-cover.offsetWidth)
	{
		l=test.offsetWidth-cover.offsetWidth;
	}else
	{
		cover.style.left=l+'px';
		line.style.width=l+'px';
		
	}
	
	if(l==(test.offsetWidth-cover.offsetWidth))
	{
		line.innerHTML='验证通过';
		up.style.display='block'
		oBtn.disabled=false;
	}else
	{
		line.innerHTML=''
		oBtn.disabled=true;
	}
}
oBtn.onclick=function(ev)
{
	var ev=ev||event;
	ev.preventDefault();
	oInp.disabled=false;
	flag=true;
	
}
oInp.onfocus=function(){
	this.value='';
}
oInp.onblur=function(){
	
}
next.onclick=function(ev)
{
	var ev=ev||event;
	ev.preventDefault();
	if(!flag1)
	{
		form1.style.display="block"
	}else{

		move(show,{height:'50',opacity:'100'},function()
		{
			timer=setTimeout(function()
			{
				move(show,{height:'0',opacity:'0'})
			},1500)
		})
	}
}	
show.onmouseover=function()
{
	clearTimeout(timer)
}
show.onmouseout=function()
{
	timer=setTimeout(function()
	{
		move(show,{height:'0',opacity:'0'})
	},1500)
}
//打开协议书
var oXieyi=document.querySelectorAll('.xieyi');
var big_wrap=document.querySelector('.big_wrap');
var colse=big_wrap.querySelector('.close');
var xieyi_h4=big_wrap.querySelector('h4');
var  xie=big_wrap.querySelector('.xieyi');
var move_c=big_wrap.querySelector('.move_cover');
oXieyi[0].onclick=oXieyi[1].onclick=function()
{
	var l=0;
	var t=0;
	big_wrap.style.display='block';
	 xieyi_h4.onmousedown=function(ev)
	 {
	 	var ev=ev||event;
	 	move_c.style.display='block';
	 	move_c.style.border='1px dashed #FFF';
	 	var disX=ev.clientX-xie.offsetLeft-xie.offsetWidth/2;
	 	var disY=ev.clientY-xie.offsetTop-xie.offsetHeight/2;
	 	document.onmousemove=function(ev)
	 	{
	 		var ev=ev||event;
	 		l=ev.clientX;
	 		t=ev.clientY;
	 		move_c.style.left=l-disX+'px';
	 		move_c.style.top=t-disY+'px';
	 	}
	 	document.onmouseup=function()
	 	{
	 		move_c.style.display='none';
	 		xie.style.left=l-disX+'px';
	 		xie.style.top=t-disY+'px';
	 		document.onmouseup=null;
	 		document.onmousemove=null;
	 	}
	 	return false
	 }
	colse.onclick=function()
	{
		big_wrap.style.display='none';
	}
}
})()
//进入注册验证界面
var form1=document.querySelector('.form1');
var oUser=form1.querySelector('.username');
var psw=form1.querySelector('.psw');
var psw2 = document.getElementsByName('psw2');
var apsw=form1.querySelector('.apsw');
var user=document.getElementById('user');
var tel=document.getElementById('tel');
var yan=document.getElementById('yan');
var aA=document.getElementById('yanA');
var cover=document.querySelector('.cover');
var timer=null;
var num=6;
var reg=/^[a-zA-Z]\w{1,}$/;
var reg1=/^\w{6,12}$/;
oUser.onfocus=function()
{
	this.value='';
	this.style.color='#000';
	this.style.border='1px solid green'
}
oUser.onblur=function()
{
	userf()
}
psw.onfocus=function()
{
	this.value='';
	this.type='password';
	this.style.color="#000";
	this.style.border='1px solid green'
}
psw.onblur=function()
{
	pswf()
}
apsw.onfocus=function()
{
	this.value='';
	this.style.color='#000';
	this.type='password';
	this.style.border='1px solid green'
}
apsw.onblur=function()
{
	apswf()	
}
function userf()
{
	if(oUser.value=="")
	{
		oUser.style.border='1px solid red';
		oUser.value='你的账户名和登录名';
		return false
	}else
	{
		if(reg.test(oUser.value))
		{
			oUser.style.border="1px solid green";
			return true;
		}else
		{
			oUser.value='请输入字母开头的有效账户';
			oUser.style.border='1px solid red';
			return false;
		}
	}
	
}
function pswf()
{
	if(psw.value=='')
	{
		psw.style.border='1px solid red'
		psw.type='text';
		psw.value="请设定6-12位登录密码";
		return false;
	}else
	{
		if(reg1.test(psw.value))
		{
			psw.style.border="1px solid green";
			psw.type="password";
			return true;
		}else
		{
			psw.type='text';
			psw.value='请设定6-12位登录密码';
			psw.style.border='1px solid red'
			return false;
		}
	}
}
function apswf()
{
	if(apsw.value=='')
	{
		apsw.style.border='1px solid red'
		apsw.type='text';
		apsw.value="请确认密码";
	}else
	{
		if(apsw.value==psw.value)
		{
			apsw.style.border="1px solid green";
			apsw.type="password";
			return true;
		}else
		{
			apsw.type='text';
			apsw.value='请确认密码';
			apsw.style.border='1px solid red'
			return false;
		}
	}
}

function tijiao()
{
	var flag=true; 
	if(pswf()==false)
	{
		flag=false;
	}
	if(apswf()==false)
	{
		flag=false;
	}
	if(userf()==false)
	{
		flag=false;
	}
	return flag;
}
var green=form1.querySelector('.green')
var f1_span=green.querySelector('span');
f1_span.onclick=function()
{
	if(flag1)
	{
		this.className='span';
		flag1=false;
	}else
	{
		this.className='';
		flag1=true;
	}
}
