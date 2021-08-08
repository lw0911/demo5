// JavaScript Document //---------------------------------begin class Moving()-------------------------------//
 function Moving()
 { 
  //------------------------------------begin public variable
  //---------------begin about
  this.au = {}
  this.Init ={}
  this.Init.Y = 50;
  this.Init.X = 50;
  this.Init.Width = 500;
  this.Init.Height = 300;
  
  this.Delay = Cnet_floatDelay;
  
  this.Span = {};
  this.Span.XStep = 1;
  this.Span.YStep = 2;
  this.Span.YStepCount = 0;
  
  this.Main = {};
  this.Main.ID = "sqMovingAd";
  this.Main.ClassName = "sqMovingAd";
  var sStr = '<div onclick=closeDiv("sqMovingAd") style="cursor:hand;font-size:18px;">[x]</div>'; 
  
  this.Main.InnerHtml = '<div id="float1">'+Cnet_floatCode+sStr+"</div>";
  //------------------------------------end public variable
  
  //------------------------------------begin private variable
  var Tl = this;
  var pMain = null;
  var moveTime = null;
  //------------------------------------end private variable
  
  //------------------------------------begin public method
  this.Go = fGo;
  //------------------------------------end public method
 
  //------------------------------------begin private method
  function fGo()
  { 
   var EleDiv = document.createElement("div");
    
    var Height = 0;
    var Width = 0;
    
    with(EleDiv)
    {
     id = Tl.Main.ID;
     className = Tl.Main.ClassName;
     innerHTML = Tl.Main.InnerHtml;
	 /******************��������¼� start***********************/
	 onmouseover=function(){ 
		 clearInterval(moveTime);
	 }

	 onmouseout = function(){
		moveTime = setInterval(startGo ,  Tl.Delay); 
	 }

	  /******************��������¼� End***********************/
     style.width = Tl.Init.Width+"px";
     style.height = Tl.Init.Height+"px";
     style.top = Tl.Init.Y+"px";
     style.left = Tl.Init.X+"px";
     if(fCkBrs()==1)
     {
      style.position = "absolute";
     }
     else
     {
      style.position = "fixed";
     }
    } // end with
    
    document.body.appendChild(EleDiv);
    EleDiv = null;
    
    pMain = document.getElementById(Tl.Main.ID);
    
    if(true) //fCkBrs()==2
    {
     moveTime = setInterval(startGo  , Tl.Delay ); 
    } // end if
    
  } // end function fGo
  
  function startGo(){
	var iTemp = 0;
        if(fCkBrs()==2)
        {
         iTemp = 18;
        }          
        else if (fCkBrs()==1)
        {
         iTemp = 1;
        }
        else
        {
         iTemp = 0;
        }       
         
        var iTop = parseInt(pMain.style.top);
        var iLeft = parseInt(pMain.style.left);
        var Width = document.body.clientWidth-Tl.Init.Width-iTemp;
        
        // begin top 
        if(fCkBrs()==1)
        {
         var ScrollTop = document.documentElement.scrollTop;
         iTop = ScrollTop;
         
         if((fGetViewPortSize()[1]-Tl.Init.Height)<Tl.Span.YStepCount)
         {
          Tl.Span.YStep = -Tl.Span.YStep;
         }
         
         if(Tl.Span.YStepCount<0)
         {
          Tl.Span.YStep = Math.abs(Tl.Span.YStep);
         }
         
         Tl.Span.YStepCount += Tl.Span.YStep;
         
         pMain.style.top = (iTop+Tl.Span.YStepCount)+"px";
        } 
        else
        {
         var Height = fGetViewPortSize()[1]-Tl.Init.Height;
         if(iTop>Height)
         {
          Tl.Span.YStep = -Tl.Span.YStep;
         }
         
         if(iTop<0)
         {
           Tl.Span.YStep = Math.abs(Tl.Span.YStep);
         }
          pMain.style.top = (iTop+Tl.Span.YStep)+"px";
        } 
        // end top 
        
        if(iLeft>Width)
        { 
         Tl.Span.XStep = -Tl.Span.XStep;
        }
        if(iLeft<0)
        { 
         Tl.Span.XStep = Math.abs(Tl.Span.XStep);
        }
        
        pMain.style.left = (iLeft+Tl.Span.XStep)+"px";

  }

  function fCkBrs()
  {// shawl.qiu script
   switch (navigator.appName)
   {
    case 'Opera': return 2;
    case 'Netscape': return 3;
    default: return 1;
   }
  } // end function fCkBrs 

  function fGetViewPortSize() 
  {// shawl.qiu script
   var myWidth = 0, myHeight = 0;
   if(typeof(window.innerWidth ) == 'number' ) 
   {//Non-IE
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
   } 
   else if 
   (
    document.documentElement && 
    ( document.documentElement.clientWidth || document.documentElement.clientHeight ) 
    ) 
   {//IE 6
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
   } 
   else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) 
   { //IE 4
    myWidth = document.body.clientWidth;
    myHeight = document.body.clientHeight;
   }
   return [myWidth, myHeight];
  } // end function fGetViewPortSize
  //------------------------------------end private method
 } // shawl.qiu code
 //---------------------------------end class Moving()---------------------------------//
//�ر�
function closeDiv(obj)
{
	document.getElementById(obj).style.display="none";
}


function dodo()
{
   var moving = new Moving();
    moving.Go();
    moving = null;
}
if ( typeof window.onload!='function') 
{ 
    window.onload=function() 
    { 
        dodo();   //ҳ��������ʱ���õĺ��� 
    } 
} 
else 
{ 
    var oldonload=window.onload; 
    window.onload=function() 
    { 
		dodo();    //ҳ��������ʱ���õĺ��� 
        oldonload(); 
        
    } 
}

