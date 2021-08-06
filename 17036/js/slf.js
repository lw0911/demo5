$(document).ready(function(){
	var w=$(".about_rig").width();
	var h=$(".about_rig").height();
	//alert(w);
	//alert(h);
	
	$(".about_bg").css({width:w, height:h});
	
	})
	
$(document).ready(function(){
	var h2=$(".p1-1 li .pic").height();
	//alert(w);
	//alert(h);
	
	$(".p1-1 li .word").css({height:h2});
	
	})





	$(document).ready(function(){
		var kv_num = 0;
		function nextKv(){
			$(".control").attr("style","pointer-events:none");
			kv_num++;
			if(kv_num==4){kv_num=0;}
			$(".kv_pic").animate({ left:-596*kv_num},{ easing: 'easeInOutQuad', duration: 500, complete: function(){
				$(".control").attr("style","pointer-events:auto");
			}}); 
			$(".kv_word>ul").stop().animate({ left:-604*kv_num},{ easing: 'easeInOutQuad', duration: 800, complete: function(){}}); 
			$(".kv_dot ul li").removeClass("action").eq(kv_num).addClass("action");
		}
		function prevKv(){
			$(".control").attr("style","pointer-events:none");
			kv_num--;
			if(kv_num==-1){kv_num=3;}
			$(".kv_pic").animate({ left:-596*kv_num},{ easing: 'easeInOutQuad', duration: 500, complete: function(){
				
				$(".control").attr("style","pointer-events:auto");
			}}); 
			$(".kv_word>ul").stop().animate({ left:-604*kv_num},{ easing: 'easeInOutQuad', duration: 800, complete: function(){}}); 
		}
		$(".control .next").on("click",nextKv);
		$(".control .prev").on("click",prevKv);
		// 自动轮播
		setInterval(nextKv,3500);
		
		var top = $(".footer").offset().top;
		if((top+80)<=$(window).height()){
			$(".footer").attr("style","position:fixed; bottom:0;");
		}
	});	
	
	

  window.onload = function()
  {
	  var oBox = document.getElementById('box');
	  var oPrev = getByClass(oBox,'prev')[0];
	  var oNext = getByClass(oBox,'next')[0];
	  var oBigUl = getByClass(oBox,'bigUl')[0];
	  var aLiBig = oBigUl.getElementsByTagName('li');
	  var oNumUl = getByClass(oBox,'numberUl')[0];
	  var aLiNumber = oNumUl.getElementsByTagName('li');
	  var oTextUl = getByClass(oBox,'textUl')[0];
	  var aLiText = oTextUl.getElementsByTagName('li');
	  var nowZindex = 1;
	  var now = 0;
	  function tab()
	  {
		   for(var i=0; i<aLiNumber.length; i++)
			  {
				  aLiNumber[i].className = '';
			  }
			  aLiNumber[now].className = 'night';
			  
		  aLiBig[now].style.zIndex = nowZindex++;
		  aLiBig[now].style.opacity = 0;
		  startMove(aLiBig[now],'opacity',100);
		  for(var i=0; i<aLiText.length; i++)
		  {
			  aLiText[i].style.display = 'none';
		  }
		  aLiText[now].style.display = 'block'
		  
	  }
	  
	  for(var i=0; i<aLiNumber.length; i++)
	  {
		  aLiNumber[i].index = i;
		  aLiNumber[i].onclick = function()
		  {
			 
			  if(this.index==now)return;
			  now = this.index;
			 
			  tab();
		  }
	  }
	  oNext.onmouseover = oPrev.onmouseover = oBigUl.onmouseover = function()
	  {
		  startMove(oPrev,'opacity',100);
		   startMove(oNext,'opacity',100)
	  }
	   oNext.onmouseout = oPrev.onmouseout = oBigUl.onmouseout = function()
	  {
		  startMove(oPrev,'opacity',0);
		  startMove(oNext,'opacity',0)
	  }
	  oPrev.onclick = function()
	  {
		  now--
		  if(now==-1)
		  {
			  now=aLiNumber.length-1;
		  }
		  tab();
	  }
	  
	    oNext.onclick = function()
	  {
		  now++
		  if(now==aLiNumber.length)
		  {
			  now=0;
		  }
		  tab();
	  }
	  
	  var timer = setInterval(oNext.onclick,3000)
	  oBox.onmouseover = function()
	  {
		  clearInterval(timer)
	  }
	  oBox.onmouseout = function()
	  {
		  timer = setInterval(oNext.onclick,3000)//改变速度修改3000 ，例如3000=3秒钟
	  }
  }


	