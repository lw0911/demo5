var nowIndex=1;
var suspend=false;
var classifyid;
var url;
var detailUrl;
function setNowIndex(nowIndex1){
	nowIndex=nowIndex1;
	
}
function setUrl(url1,detailUrl1,classifyid1){
	url=url1;
	detailUrl=detailUrl1;
	classifyid=classifyid1;
}
function assembleUrl(id){
	var assembleUrl=detailUrl;
	assembleUrl+="/news_id/"+id;
	
	if(classifyid){
		assembleUrl+="/classifyid/"+classifyid;
	}
	
	assembleUrl+=".html";
	return assembleUrl;
}
var loghandle = function(event, delta) {
	var scrollTop=$(document).scrollTop();
	return scrollTop+event.deltaY*event.deltaFactor;
};
window.onload=function(){
	$("body").mousewheel(function(event, delta) {
		scrollIndex(loghandle(event, delta));
	});
	$("body").bind("touchmove",function(event, delta) {
		scrollIndex(loghandle(event, delta));
	});
}

function scrollIndex(scrollTop){
	
	screenHeight=$(window).height();
	var scrollTop=scrollTop||$(document).scrollTop();
	scrolls=parseInt($(".contact").offset().top)-screenHeight;

	if(scrollTop>=scrolls){
		if(nowIndex==-1||suspend)return;
		suspend=true;
		$.post(
			url,
			{
				'limitid':nowIndex,
				'classifyid':classifyid
			},
			function(data){
				
				$.each(data,function(i,n){
					
					if(n.status==0&&i==0){
						nowIndex=-1;
						suspend=true;
					}else if(n.status==2&&i==0){
						nowIndex=-1;
						suspend=true;
					}else if(n.status==1&&i==0){
						nowIndex++;
						suspend=false;
					}
					$(".content").append('<div class="child"><div class="childImg"><img src="'+n.imageUrl+'" /></div><div class="childInfo"><p class="datetime">'+n.showtime+'</p><p class="title">'+n.title+'</p><p class="info">'+n.info+'</p><a href="'+assembleUrl(n.news_id)+'"><div class="childBtn"><span>详细信息</span></div></a></div></div>');
					
				});
				cutStrings(300);
				

			}
			
		);
	}
}