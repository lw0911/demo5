// JavaScript Document
<!--
//���²��������޸�
try{
var marqueesHeight = 40; //�߶�
var stopscroll     = false;
var scrollElem =   document.getElementById("scrolllayer");
with(scrollElem){
style.width     = 580;//���
style.height    = marqueesHeight;
style.overflow  = 'hidden';
noWrap          = true;
}
scrollElem.onmouseover = new   Function('stopscroll = true');
scrollElem.onmouseout  = new   Function('stopscroll = false');
var preTop     = 0;
var currentTop = 0;
var stoptime   = 0;
var leftElem =   document.getElementById("scrollmessage");
scrollElem.appendChild(leftElem.cloneNode(true));
init_srolltext();
}catch(e) {}
function init_srolltext(){
scrollElem.scrollTop = 0;
setInterval('scrollUp()', 15); //�����ٶ�
}
function scrollUp(){
if(stopscroll) return;
currentTop += 1;
if(currentTop == 41) { //��������
stoptime += 1;
currentTop -= 1;
if(stoptime == 220) { //ͣ��ʱ��
currentTop = 0;
stoptime = 0;
}
}else{
preTop = scrollElem.scrollTop;
scrollElem.scrollTop += 1;
if(preTop == scrollElem.scrollTop){
scrollElem.scrollTop = 0;
scrollElem.scrollTop += 1;
}
}
}
//-->