/*
马世伟
2016.4.7

调用方式：
		<script>
               $(function(){
						
					mswContent(“mswContentId”  固定窗口的id , “mswLeftId”  左边按钮的id , “mswRightId”  右边按钮的id ,moveLength   移动距离（li的宽度加上li的间距）,moveTimer  移动时间,setTimer  计时器时间（即隔多久执行一次函数）)
							
				})
         </script>







*/
function mswContent(mswContentId,mswLeftId,mswRightId,moveLength,moveTimer,setTimer){
						$("#"+mswContentId+" ul").css({"left":-moveLength})//将ul初始定位到-moveLength处；原因：排除向右点击时出现闪现出来的情况
						var n = $("#"+mswContentId+" ul li").length;//获取li长度
						$("#"+mswContentId+" ul").css({"width":moveLength*n+"px"});//设置ul的宽度，根据li的宽度和li的间距之和得出，moveLength = li宽度+li单边间距
						function mm(){
							$("#"+mswContentId+" ul").animate({left:-2*moveLength},moveTimer,function(){//每隔moveTimer得时间，向左移动2倍moveLength的距离，原因：初始定位到-moveLength处，所以要移动2倍才能看得出效果
								$("#"+mswContentId+" ul").css({"left":-moveLength});//每一次移动后将UL定位到0
								$("#"+mswContentId+" ul").children("li:first").insertAfter($("#"+mswContentId+" ul").children("li:last"));//每一次向左移动后将第一个li插入到最后一个li的后面，即原第二个变为第一个
							})
							}
						
						var timer = setInterval(mm,setTimer)//定义计时器，即每隔setTimer执行一次mm函数
						
						$("#"+mswLeftId+"").mouseover(function(){
														clearInterval(timer);//终止计时器
													}).mouseleave(function(){
														timer = setInterval(mm,setTimer);
													}).click(function(){
												
														$("#"+mswContentId+" ul").stop().animate({left:-2*moveLength},moveTimer,function(){
														$("#"+mswContentId+" ul").css({"left":-moveLength});
														$("#"+mswContentId+" ul").children("li:first").insertAfter($("#"+mswContentId+" ul").children("li:last"));
												})
							})
						$("#"+mswRightId+"").mouseover(function(){
														clearInterval(timer);
													}).mouseleave(function(){
														timer = setInterval(mm,setTimer);
													}).click(function(){
														$("#"+mswContentId+" ul").stop().animate({left:0},moveTimer,function(){
														$("#"+mswContentId+" ul").children("li:last").insertBefore($("#"+mswContentId+" ul").children("li:first"));
														$("#"+mswContentId+" ul").css({"left":-moveLength});
													})
							})
						$("#"+mswContentId+" ul li").mouseover(function(){
													clearInterval(timer);
												}).mouseleave(function(){
													timer = setInterval(mm,setTimer);
												})
						
						
						
						
						
						
						
						
						
						
						
}