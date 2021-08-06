
// JavaScript Document
/*
function tcdivover(id){
	var div=document.getElementById(id);
	div.style.borderColor="red";
	}
function tcdivout(id){
	var div=document.getElementById(id);
	div.style.borderColor="#fff";
	}*/
function centerdhdiv(){
	document.getElementById("righttit").style.display="none";
	document.getElementById("dhrighttit").style.display="block";
	}
function centerdhdivout(){
	
	document.getElementById("righttit").style.display="block";
	document.getElementById("dhrighttit").style.display="none";
	}
/*
	当鼠标悬停在当前div的时候 启用样式
*/	
function bomdivOver(){
	var divimg=document.getElementById("bomshowimg");
	//divimg.className="imgshow";
	}
function cleartext(id){
	 var text=document.getElementById(id);
	 text.value="";
	}