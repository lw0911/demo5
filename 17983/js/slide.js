var Show_Style=3;
var Image_12=new Array();
var Pics="/images/1.jpg|/images/2.jpg";
var Links="";
var Titles="";
var Alts="";
var Apic12=Pics.split('|');
var ALink12=Links.split('|');
var ATitle12=Titles.split('|');
var AAlts12=Alts.split('|');
var Show_Text=0;
for(i=0;i<Apic12.length;i++)
  {
   Image_12.src = Apic12[i]; 
  }



  var FHTML='<div id="js_slide_focus_12" class="slide_focus focus_style3" style="height:630px"><a class="prev"></a><a class="next"></a>';
  
  FHTML+="<div class=\"slide_focus_zdycontent\"><div class=\"banner_com\"><div class=\"bc_com\"><div class=\"bc_c_tit\">专业的翻译服务机构</div><div class=\"bc_c_com\"><span>笔译</span><span>口译</span><span class=\"s3\">特色翻译</span></div></div></div></div>";
  
  FHTML+='<ul class="inner">';
  for(var i=0;i<Apic12.length;i++)
   {
     if(ALink12.length<(i+1) || ALink12[i]=="")
      {
       ALink12[i]="javascript:void(0)";
      }
     if(AAlts12.length<(i+1))
      {
       AAlts12[i]="";
      }
     if(ATitle12.length<(i+1))
      {
       ATitle12[i]="";
      }
    FHTML+='<li><a href="'+ALink12[i]+'" target="_self" title="'+AAlts12[i]+'"><img src="'+Apic12[i]+'">';
    FHTML+='<em>'+ATitle12[i]+'</em>';
    FHTML+='</a></li>';
   }
 FHTML+='</ul>';
 FHTML+='</div>';
 document.write(FHTML);
$(function(){Slide_Focus("js_slide_focus_12",1,5,1920,630,true);});