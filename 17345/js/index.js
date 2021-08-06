
// 
function hans1(a,b,c,d){
	var aDiv=document.getElementById(a);
	var aClass=aDiv.getElementsByClassName(b)[0];
	var BiaoT=aClass.getElementsByTagName(c);
	var NeiR=document.getElementsByClassName(d);
	for(var i=0; i<BiaoT.length; i++){
		BiaoT[i].index=i;
		BiaoT[i].onmouseover=function hans1()
		{
			for(var i=0; i<BiaoT.length; i++){
				BiaoT[i].className='';
				NeiR[i].style.display = 'none';
			}
			this.className='no';
			NeiR[this.index].style.display = 'block';
		}
	}
}

// 点击
function hans2(a,b,c,d){
	var aDiv=document.getElementById(a);
	var aClass=aDiv.getElementsByClassName(b)[0];
	var BiaoT=aClass.getElementsByTagName(c);
	var NeiR=document.getElementsByClassName(d);
	for(var i=0; i<BiaoT.length; i++){
		BiaoT[i].index=i;
		BiaoT[i].onclick=function hans2()
		{
			for(var i=0; i<BiaoT.length; i++){
				BiaoT[i].className='';
				NeiR[i].style.display = 'none';
			}
			this.className='no';
			NeiR[this.index].style.display = 'block';
		}
	}
} 

// 
function anli(a,b) {
	var aUl=document.getElementById(a);
	var aLi=aUl.getElementsByTagName('li')
	for (var i = 0; i < aLi.length; i++) {
		aLi[i].onclick=function anli(){
			for (var i = 0; i < aLi.length; i++) {
				aLi[i].className=''; 
			}
			this.className='no';
		}
	}
	// body...
}


