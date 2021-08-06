//顶部说明，切记在js文件里勿加<script>标签，此文件尾部调用。

//=================================================================================================//

//网站主体main调用js代码===========规范代码：尾部调用======================================================================================//
//常用于网站公告栏，所需文件有:common_tail.js,所需代码有：<marquee behavior="scroll" direction="left" scrollamount="5" onmouseout="start();" onmouseover="sto文本</marquee>
//使用方法：直接使用

// <marquee behavior="scroll" direction="left" scrollamount="5" onmouseout="start();" onmouseover="sto文本</marquee> 调用代码

//=================================================================================================//


//=================================================================================================//

//网站主体main调用js代码====================================规范代码：尾部调用========================================================
//常用于图片展示：js向左滚动代码,需要调用的文件有：调用用Tail.js,css调用csslanrentuku.css，调用images文件。主要用到的代码有：<div id="colee_left" style="overflow:hidden;width:730px;"></div>)|,id="colee_left1"|id="colee_left2"|主要用到的图片有：01 02 03 04 05 (.jpg),flashbutton.gif//
//使用方法:（<div id="colee_left" style="overflow:hidden;width:730px;">表格里面的td里面的开始id(td(id="colee_left1")td(id="colee_left2"))结束id</div>）//

var speed=30//速度数值越大速度越慢
var colee_left2=document.getElementById("colee_left2");
var colee_left1=document.getElementById("colee_left1");
var colee_left=document.getElementById("colee_left");
colee_left2.innerHTML=colee_left1.innerHTML
function Marquee3(){
if(colee_left2.offsetWidth-colee_left.scrollLeft<=0)//offsetWidth 是对象的可见宽度
colee_left.scrollLeft-=colee_left1.offsetWidth//scrollWidth 是对象的实际内容的宽，不包边线宽度
else{
colee_left.scrollLeft++
}
}
var MyMar3=setInterval(Marquee3,speed)
colee_left.onmouseover=function() {clearInterval(MyMar3)}
colee_left.onmouseout=function() {MyMar3=setInterval(Marquee3,speed)}

//=================================================================================================//
