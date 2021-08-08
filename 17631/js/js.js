//CWJS,公共JS,老唯最后修改时间2013.12
//开关设置
cw_isnoerror=false;cw_isnocopy=false;cw_isnomenu=false;
//容错
window.onerror=function(){if (cw_isnoerror==true){return true;}}
//禁止复制,需要在body中加oncopy="nocopy()"
function nocopy(){if (cw_isnocopy==true){event.returnValue=false;}}
//禁止右键
function nomenuone(){if (cw_isnomenu==true){return false;}}
document.oncontextmenu=nomenuone;
//取ID,读取写入ID内容
function getid(id){return document.getElementById(id)}
function getbody(id){return getid(id).innerHTML;}
function tobody(id,body){getid(id).innerHTML=body;}
//时间+星期
function getdate(){var now=new Date();var ri=now.getDate(),yue=now.getMonth()+1,nian=y2k(now.getFullYear()),weekday=now.getDay(),xqname=["日","一","二","三","四","五","六"];msg1="星期"+xqname[weekday];document.write(nian+"年"+yue+"月"+ri+"日 "+msg1);}function y2k(number){return (number<1000)?number+1900:number;}
//无提示关闭窗口
function cw_close(){window.opener=null;window.open('','_top','');window.close();}
//输出文本
function echo(nr){document.write(nr);}
//提示并跳转:lx=1直接跳转,2父窗口,3自定义
function cwurl(mess,url,lx){
if (mess!=""){var mess2=confirm(mess);}else{mess2=true;}
if (mess2==true){
if (lx==""){location.href=url;}
if (lx=="top"){top.location.href=url;}
if (lx=="actions"){actions.location.href=url;}
}else{return false;}
}
//向左移动
function toleft(demo,demo1,demo2,speed,flag){demo=getid(demo);demo1=getid(demo1);demo2=getid(demo2);demo2.innerHTML=demo1.innerHTML;function Marquee(){if(demo2.offsetWidth-demo.scrollLeft<=0){demo.scrollLeft-=demo1.offsetWidth}else{demo.scrollLeft++}};flag=setInterval(Marquee,speed);demo.onmouseover=function(){clearInterval(flag);};demo.onmouseout=function(){flag=setInterval(Marquee,speed);}}
//flash代码
function writeflashhtml(arg){var parm=[];var _default_version="8,0,24,0";var _default_quality="high";var _default_menu="false";for(i=0;i<arguments.length;i++){parm[i]=arguments[i].split(' ').join('').split('=');for (var j=parm[i].length-1;j>1;j--){parm[i][j-1]+="="+parm[i].pop();};switch (parm[i][0]){case '_version':var _version=parm[i][1];break;case '_swf':var _swf=parm[i][1];break;case '_base':var _base=parm[i][1];break;case '_quality':var _quality=parm[i][1];break;case '_wmode':var _wmode=parm[i][1];break;case '_menu':var _menu=parm[i][1];break;case '_height':var _height=parm[i][1];break;case '_width':var _width=parm[i][1];break;case '_id':var _id=parm[i][1];break;case '_name':var _name=parm[i][1];break;case '_flashvars':var _flashvars=parm[i][1];break;default :;}};var thtml="<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version="+((_version)?_version:_default_version)+"'";if(_width) thtml+=" width='"+_width+"'";if(_height) thtml+=" height='"+_height+"'";if(_id) thtml+=" id='"+_id+"'";if(_name) thtml+=" name='"+_name+"'";thtml+=">";if(_swf) thtml+="<param name='movie' value='"+_swf+"'>";if(_quality) {thtml+="<param name='quality' value='"+_quality+"'>"}else{thtml+="<param name='quality' value ='"+_default_quality+"'>"};if(_menu) {thtml+="<param name='menu' value='"+_menu+"'>"}else{thtml+="<param name='menu' value='"+_default_menu+"'>"};if(_wmode) thtml+="<param name='wmode' value='"+_wmode+"'>";if(_base) thtml+="<param name='base' value='"+_base+"'>";if(_flashvars) thtml+="<param name='flashvars' value='"+_flashvars+"'>";thtml+="<embed pluginspage='http://www.macromedia.com/go/getflashplayer'";if(_width) thtml+=" width='"+_width+"'";if(_height) thtml+=" height='"+_height+"'";if(_id) thtml+=" id='"+_id+"'";if(_name) thtml +=" name='"+_name+"'";thtml+=" type='application/x-shockwave-flash'";if(_swf) thtml+=" src='"+_swf+"'";if(_quality) {thtml+=" quality='"+_quality+"'"}else{thtml+=" quality='"+_default_quality+"'"};if(_menu) {thtml+=" menu='"+_menu+"'"}else{thtml+=" menu='"+_default_menu+"'"};if(_wmode) thtml+=" wmode='"+_wmode+"'";if(_base) thtml+=" base='"+_base+"'";if(_flashvars) thtml+=" flashvars='"+_flashvars+"'";thtml+="></embed></object>";document.write(thtml)}