
// JavaScript Document
function ShowCon0(n)
{
	for(i=0;i<4;i++)
	{
		var con1 = document.getElementById("con0_"+i);
		con1.style.display="none"; 
	}
		var con2 = document.getElementById("con0_"+n);
		con2.style.display="block";   
		  
	for(i=0;i<4;i++)
	{
		var tab1 = document.getElementById("tab0_"+i);
		tab1.className="";
	}
		var tab2 = document.getElementById("tab0_"+n);
		tab2.className="hoverzj"+n;
		 
}

// JavaScript Document
function ShowCon1(n)
{
	for(i=0;i<4;i++)
	{
		var con1 = document.getElementById("con1_"+i);
		con1.style.display="none"; 
	}
		var con2 = document.getElementById("con1_"+n);
		con2.style.display="block";   
		  
	for(i=0;i<4;i++)
	{
		var tab1 = document.getElementById("tab1_"+i);
		tab1.className="";
	}
		var tab2 = document.getElementById("tab1_"+n);
		tab2.className="hoverpp0";
		 
}
// JavaScript Document
function ShowCon2(n)
{
	for(i=0;i<6;i++)
	{
		var con1 = document.getElementById("con2_"+i);
		con1.style.display="none"; 
	}
		var con2 = document.getElementById("con2_"+n);
		con2.style.display="block";   
		  
	for(i=0;i<6;i++)
	{
		var tab1 = document.getElementById("tab2_"+i);
		tab1.className="";
	}
		var tab2 = document.getElementById("tab2_"+n);
		tab2.className="hoveral";
		 
}




 window.onload = function ()
      {
          var oLi = document.getElementById("tab").getElementsByTagName("a");
          var oUl = document.getElementById("content").getElementsByTagName("em");
          for(var i = 0; i < oLi.length; i++)
          {
              oLi[i].index = i;
              oLi[i].onmouseover = function (){
                  for(var n = 0;n < oLi.length;n++)
                  {
                      oLi[n].className = "";
                      this.className = "current";
                  }
                      for(var n = 0;n <oUl.length;n++)
                      {
                          oUl[n].style.display = "none";
                          oUl[this.index].style.display="block";
                      }
              }
          }
      }