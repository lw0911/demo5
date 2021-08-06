<!--

	//last modified 2012-6-5
	
function resize() {
	//alert(document.documentElement.clientWidth);
	var moreWidth = (1920-document.documentElement.clientWidth)/2;
	if(document.documentElement.clientWidth>=1200&&document.documentElement.clientWidth<=1920)
	{
		$("#mainWindow a img").css("margin-left","-"+moreWidth);
	}
}

	var loaded=0;

//添加代码************************
/*
   var  imgArray1=new Array(4),linkArray1=new Array(4),shoplinkArray1=new Array(4),introArray1=new Array(4),linkArrayID1=new Array(4); 
   var  NumRandom1=(parseInt(Math.random()*10))%2;		
   if(NumRandom1==1){
	    imgArray1[0]="/content/images/home/Christmas.jpg";
		linkArray1[0]="http://www.tp-linkshop.com.cn/";
		shoplinkArray1[0]="http://www.tp-linkshop.com.cn/";
		introArray1[0]="Christmas";
		linkArrayID1[0]="mainWindowLinkOfChristmas";
   }
   else if(NumRandom1==0){
	    imgArray1[0]="/content/images/home/842.jpg";
		linkArray1[0]="product_402.html";
		shoplinkArray1[0]="http://www.tp-linkshop.com.cn/Products/Details/183";
		introArray1[0]="TL-WR842+";
		linkArrayID1[0]="mainWindowLinkOf842";  
   }
*/
//************************添加代码
	var playList={
		//***********************
		//********配置开始*******
		//***********************
		//播放效果的div
		displayDiv:"mainWindow",
		//图片数组
		imgArray:["/content/images/home/842.jpg","/content/images/home/2041new.jpg","/content/images/home/5510.jpg","/content/images/home/961.jpg"],
		//imgArray:sImgArray,
		//链接数组
		linkArray:["product_402.html","product_371.html","product_399.html","product_403.html"],
		//链接ID
        	linkArrayID:["mainWindowLinkOf842","mainWindowLinkOf2041new","mainWindowLinkOf5510","mainWindowLinkOf961"],
        	//商城链接数组
		shoplinkArray:["http://www.tp-linkshop.com.cn/Products/Details/183","http://www.tp-linkshop.com.cn/Products/Details/245","http://www.tp-linkshop.com.cn/Products/Details/158","http://www.tp-linkshop.com.cn/Products/Details/298"],
		//linkArray:allLinkArray,
		//--说明文字
		introArray:["TL-WR842+","TL-WR2041+","TL-WDR5510","TL-TR961 5200L"],
		//introArray:allIntroArray,
		//--每张图片停留时间
		sperateTime:9000,
		//--效果播放时间
		animateTime:1000,
		//***********************
		//********配置结束*******
		//***********************
		focusImgIndex:1,
		blurImgIndex:0,
		mouseFlage:false,
		imgLoaded:function imgLoaded(imgIndex)
		{
			loaded+=1;
			if(loaded==playList.imgArray.length)
			{
				$('#loader').remove();
				//开始播放
				if(loaded!=1)
				{
					/*$('#'+playList.displayDiv+' img').mouseover(function(){
						playList.mouseFlage=true;
						playList.stop();
					});
					$('#'+playList.displayDiv+' img').mouseout(function(){
						if(playList.mouseFlage==true)
						{
							playList.stop();
							playList.mouseFlage=false;
							playList.resume();
						}
					});*/
					$('#'+playList.displayDiv+' img').css("z-index","-1");
					$('#'+playList.displayDiv+' img').eq(playList.blurImgIndex).css("z-index","1");
					playList.inter=setInterval("playOnce()",playList.sperateTime);
				}
			}
		},
		inter:null,
		play:function(){
			$(document).ready(function(){
                $('#knowMore').attr("href",playList.linkArray[0]);
                $('#shopping').attr("href",playList.shoplinkArray[0]);
				var moreWidth ="-"+(1920-document.documentElement.clientWidth)/2+"px";
				for(var imgTmp=0;imgTmp<playList.imgArray.length;imgTmp++)
				{
                    if(playList.linkArray[imgTmp] == "#")
                    {$('#'+playList.displayDiv).append('<a id="'+playList.linkArrayID[imgTmp]+'"  href="'+playList.linkArray[imgTmp]+'"><img title="" class="lbt" src="'+playList.imgArray[imgTmp]+'" onload="playList.imgLoaded('+imgTmp+')" /></a>').end();				
				}else{
					$('#'+playList.displayDiv).append('<a id="'+playList.linkArrayID[imgTmp]+'"  target="_blank"  href="'+playList.linkArray[imgTmp]+'"><img title="" class="lbt" src="'+playList.imgArray[imgTmp]+'" onload="playList.imgLoaded('+imgTmp+')" /></a>').end();	

			
				}
                }
				if(playList.imgArray.length<2||playList.imgArray.length!=playList.linkArray.length)
				{
					$('#'+playList.displayDiv+' img').css

({"position":"absolute","top":"0","left":"0","border":"none","opacity":"1","width":"1920px","height":"auto"});
					if(document.documentElement.clientWidth>=1200&&document.documentElement.clientWidth<=1920)
	{
		$("#mainWindow img").css("margin-left",moreWidth);
		$(".containerIndex").css("width","1200px");
		$("#globalproductList h1").css("left","565px");
	}
	else if(document.documentElement.clientWidth>=900&&document.documentElement.clientWidth<1200)
	{
		$("#mainWindow img").css("margin-left","-360px");
		$(".containerIndex").css("width",document.documentElement.clientWidth+"px");
		$("#globalproductList h1").css("left",565-(1200-document.documentElement.clientWidth)+"px");
	}
	else if(document.documentElement.clientWidth<=900)
	{
		$("#mainWindow img").css("margin-left","-360px");
		$(".containerIndex").css("width","900px");
		$("#globalproductList h1").css("left","265px");
	}
					return;
				}
				$('#'+playList.displayDiv+' img').css

({"position":"absolute","top":"0","left":"0%","border":"none","opacity":"0","width":"1920px","height":"auto"});
				if(document.documentElement.clientWidth>=1200&&document.documentElement.clientWidth<=1920)
	{
		$("#mainWindow img").css("margin-left",moreWidth);
		$(".containerIndex").css("width","1200px");
	}
	else if(document.documentElement.clientWidth>=900&&document.documentElement.clientWidth<1200)
	{
		$("#mainWindow img").css("margin-left","-360px");
		$(".containerIndex").css("width",document.documentElement.clientWidth+"px");
	}
	else if(document.documentElement.clientWidth<=900)
	{
		$("#mainWindow img").css("margin-left","-360px");
		$(".containerIndex").css("width","900px");
	}
				appendIndexTable();
				turnTo();
				$('#'+playList.displayDiv+' img').eq(playList.blurImgIndex).css("opacity","1");
				$('#tr>td').eq(playList.blurImgIndex).addClass('focus');
				//开始播放
				//转移到imgLoaded中
			});	
		},
		stop:function(){
			//$('#'+playList.displayDiv+' img').stop();
			clearInterval(playList.inter);
			playList.inter=null;
		},
		resume:function(){
			$('#'+playList.displayDiv+' img').css("z-index","-1");
			$('#'+playList.displayDiv+' img').eq(playList.blurImgIndex).css("z-index","1");
			playList.inter=setInterval("playOnce()",playList.sperateTime);
		}
	};
	function playOnce()
	{
		$('#'+playList.displayDiv+' img').css("z-index","-1");
		$('#'+playList.displayDiv+' img').eq(playList.focusImgIndex).css("z-index","1");
		$('#'+playList.displayDiv+' img').css("opacity","0");
		$('#tr>td').eq(playList.blurImgIndex).removeClass('focus');
		$('#tr>td').eq(playList.focusImgIndex).addClass('focus');
		$('#'+playList.displayDiv+' img').eq(playList.blurImgIndex).css("opacity","1");
/*
if(playList.focusImgIndex==0)
{
	$('#'+playList.displayDiv+' img').eq(playList.focusImgIndex).attr('src',playList.imgArray[0]).css("opacity","1");
}
else
{*/
	$('#'+playList.displayDiv+' img').eq(playList.focusImgIndex).animate({opacity:1},playList.animateTime,function(){if

(playList.mouseFlage){playList.stop();}});
/*
}
if(playList.blurImgIndex==0)
{
	$('#'+playList.displayDiv+' img').eq(playList.blurImgIndex).css("opacity","0");
}
else
{*/
	$('#'+playList.displayDiv+' img').eq(playList.blurImgIndex).animate({opacity:0},playList.animateTime,function(){if

(playList.mouseFlage){playList.stop();}});
//}

		

        $('#knowMore').attr("href",playList.linkArray[playList.focusImgIndex]);
        $('#shopping').attr("href",playList.shoplinkArray[playList.focusImgIndex]);
		$('#knowMore img').attr("title",playList.introArray[playList.focusImgIndex]);

		if(playList.linkArray[playList.focusImgIndex] == "#")
        	{
            		$('#knowMore,#shopping').css('background','#FFF').css('opacity','0.4');
            		$('#knowMore img,#shopping img').css('opacity','0.15');
        	}
        	else
        	{
            		$('#knowMore,#shopping').css('background','none').css('opacity','1');
            		$('#knowMore img,#shopping img').css('opacity','1');
        	}

		setImgIndex();
	}
	function setImgIndex()
	{
		playList.blurImgIndex=playList.focusImgIndex;
		playList.focusImgIndex+=1;
		if(playList.focusImgIndex>playList.imgArray.length-1){playList.focusImgIndex=0;}
		if(playList.blurImgIndex>playList.imgArray.length-1){playList.blurImgIndex=0;}
	}
	function appendIndexTable()
	{
		$('#'+playList.displayDiv).append('<table id="tbIndex" cellpadding="5" cellspacing="0"><tr id="tr"></tr></table>');
		$('#'+playList.displayDiv+' img').each(function(i){
			$('#tr').append('<td class="blur"><span>'+(i+1)+'</span></td>');
		});
		//$('#tbIndex').css("left",((80-$('#tbIndex td').length*20)+850).toString()+"px");
		$('#tr>td').click(function(){
			if(playList.focusImgIndex==(parseInt($(this).html().substr(6,1)))){return;}
			$('#'+playList.displayDiv+' img').stop();
			clearInterval(playList.inter);
			playList.blurImgIndex=parseInt(playList.focusImgIndex)-1;
			if(playList.blurImgIndex<0){playList.blurImgIndex=playList.imgArray.length-1;}
			playList.focusImgIndex=parseInt($(this).html().substr(6,1))-1;
			//alert(playList.focusImgIndex + " "  + playList.blurImgIndex);
			playOnce();
			playList.inter=setInterval("playOnce()",playList.sperateTime);
			//alert(playList.inter);
		});
	}
	function turnTo()
	{
		$('#turnLeft').click(function(){
			//alert(playList.blurImgIndex + " "  + playList.focusImgIndex);
			$('#'+playList.displayDiv+' img').stop();
			clearInterval(playList.inter);
			playList.blurImgIndex=parseInt(playList.focusImgIndex)-1;
			if(playList.blurImgIndex<0){playList.blurImgIndex=playList.imgArray.length-1;}
			if(playList.blurImgIndex>0){playList.focusImgIndex=playList.blurImgIndex-1} else

{playList.focusImgIndex=playList.imgArray.length-1}
			//alert(playList.blurImgIndex + " "  + playList.focusImgIndex);
			playOnce();
			playList.inter=setInterval("playOnce()",playList.sperateTime);
			//alert(playList.inter);
		});
		$('#turnRight').click(function(){
			//alert(playList.blurImgIndex + " "  + playList.focusImgIndex);
			$('#'+playList.displayDiv+' img').stop();
			clearInterval(playList.inter);
			playList.blurImgIndex=parseInt(playList.focusImgIndex)-1;
			if(playList.blurImgIndex<0){playList.blurImgIndex=playList.imgArray.length-1;}
			if(playList.blurImgIndex<playList.imgArray.length-1){playList.focusImgIndex=playList.blurImgIndex+1} else

{playList.focusImgIndex=0}
			//alert(playList.blurImgIndex + " "  + playList.focusImgIndex);
			playOnce();
			playList.inter=setInterval("playOnce()",playList.sperateTime);
			//alert(playList.inter);
		});
	}
//-->
// JavaScript Document