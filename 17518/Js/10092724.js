















if(typeof doyoo=='undefined' || !doyoo){
var d_genId=function(){
var id ='',ids='0123456789abcdef';
for(var i=0;i<34;i++){ id+=ids.charAt(Math.floor(Math.random()*16)); } return id;
};

var doyoo={
env:{
secure:false,
mon:'http://m9107.looyu.com/monitor',
chat:'http://looyuoms7713.looyu.com/chat',
file:'http://yun-static.soperson.com/131221',
compId:20003304,
confId:10092724,
workDomain:'',
vId:d_genId(),
lang:'',
fixFlash:0,
fixMobileScale:0,
subComp:0,
_mark:'f1c744ffdc95edd99c654bd10b2db6eede22b69fe94504582777b2e60ff60e24556d231310dd3b6f'
},
chat:{
mobileColor:'',
mobileHeight:80,
mobileChatHintBottom:0,
mobileChatHintMode:0,
mobileChatHintColor:'',
mobileChatHintSize:0,
priorMiniChat:0
}

, monParam:{
index:2,
preferConfig:0,

title:'\u4e2d\u56fd\u77e5\u540d\u4e2d\u5c0f\u578b\u7535\u673a\u751f\u4ea7\u5382\u5bb6-\u529b\u8f89\u7535\u673a\uff01',
text:'<p></p><div style="position:absolute;left:-1000px;top:0px;overflow:hidden;width:1px;height:1px;"><br /></div><div style="position:absolute;left:-1000px;top:0px;overflow:hidden;width:1px;height:1px;">\u529b\u8f89\u7535\u673a18\u5e74\u4e13\u6ce8\u5f00\u53d1\u65e0\u5237\u7535\u673a\u3001\u76f4\u6d41\u7535\u673a\u3001\u6c7d\u8f66\u5ea7\u6905\u7535\u673a\uff0c\u6b22\u8fce\u54a8\u8be2!</div><div style="position:absolute;left:-1000px;top:0px;overflow:hidden;width:1px;height:1px;"><br /></div><div style="position:absolute;left:-1000px;top:0px;overflow:hidden;width:1px;height:1px;">\u529b\u8f89\u7535\u673a18\u5e74\u4e13\u6ce8\u5f00\u53d1\u65e0\u5237\u7535\u673a\u3001\u76f4\u6d41\u7535\u673a\u3001\u6c7d\u8f66\u5ea7\u6905\u7535\u673a\uff0c\u6b22\u8fce\u54a8\u8be2!</div><div style="position:absolute;left:-1000px;top:0px;overflow:hidden;width:1px;height:1px;"><br /></div><div style="position:absolute;left:-1000px;top:0px;overflow:hidden;width:1px;height:1px;">\u529b\u8f89\u7535\u673a18\u5e74\u4e13\u6ce8\u5f00\u53d1\u65e0\u5237\u7535\u673a\u3001\u76f4\u6d41\u7535\u673a\u3001\u6c7d\u8f66\u5ea7\u6905\u7535\u673a\uff0c\u6b22\u8fce\u54a8\u8be2!</div><span style="font-size:medium;"></span><p></p><p><span style="font-size:medium;"><br /></span></p><p><span style="font-size:medium;">\u529b\u8f89\u7535\u673a18\u5e74\u4e13\u6ce8\u5f00\u53d1\u65e0\u5237\u7535\u673a\u3001\u76f4\u6d41\u7535\u673a\u3001</span><span style="color: rgb(153, 0, 0);"><strong><span style="font-size:medium;">\u8f66\u7528\u4e2d\u5c0f\u578b\u7535\u673a</span></strong></span><span style="font-size:medium;">\uff0c\u6b22\u8fce\u54a8\u8be2!</span></p><p><span style="font-size:medium;"><br /></span></p>',
auto:40,
group:'10078095',
start:'00:00',
end:'24:00',
mask:true,
status:true,
fx:3,
mini:1,
pos:0,
offShow:1,
loop:60,
autoHide:0,
hidePanel:0,
miniStyle:'#0680b2',
miniWidth:'340',
miniHeight:'490',
showPhone:0,
monHideStatus:[1,1,1],
monShowOnly:'',
autoDirectChat:-1,
allowMobileDirect:0,
minBallon:1,
chatFollow:1,
backCloseChat:0,
ratio:0
}


, panelParam:{
mobileIcon:'',
mobileIconWidth:0,
mobileIconHeight:0,
category:'win',
preferConfig:0,
position:1,
vertical:140,
horizon:0

,mode:1,
index:4


,height:90


,title:'\u5728\u7ebf\u5ba2\u670d'




,customers:{"mode":"1","groups":[{"mode":1,"phone":0,"name":"\u9ed8\u8ba4\u5206\u7ec4","sms":0,"count":2,"online":1,"active":1,"id":10078095,"customers":[{"offline":0,"busy":0,"name":"John","id":"sale1","status":1},{"offline":0,"busy":0,"name":"Owen","id":"sale4","status":1}]}],"showRobot":0}



}



};

if(typeof talk99Init == 'function'){
talk99Init(doyoo);
}
if(!document.getElementById('doyoo_panel')){
var supportJquery=typeof jQuery!='undefined';
var doyooWrite=function(html){
document.writeln(html);
}

doyooWrite('<div id="doyoo_panel"></div>');


doyooWrite('<div id="doyoo_monitor"></div>');


doyooWrite('<div id="talk99_message"></div>')

doyooWrite('<div id="doyoo_share" style="display:none;"></div>');
doyooWrite('<lin'+'k rel="stylesheet" type="text/css" href="http://yun-static.soperson.com/131221/oms.css?171107"></li'+'nk>');
doyooWrite('<scr'+'ipt type="text/javascript" src="http://yun-static.soperson.com/131221/oms.js?180227" charset="utf-8"></scr'+'ipt>');
}
}
