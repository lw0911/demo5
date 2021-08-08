var nowIndex=1;
var suspend=false;
var serviceid;
var industryid;
var url;
var detailUrl;
//设置加载的第几次 -1停止加载
function setNowIndex(nowIndex1){
	nowIndex=nowIndex1;
}
//设置AJAX连接地址，详细页连接地址
function setUrl(url1,detailUrl1,serviceid1,industryid1){
	url=url1;
	detailUrl=detailUrl1;
	serviceid=serviceid1;
	industryid=industryid1;
}
function assembleUrl(id){
	var assembleUrl=detailUrl;
	assembleUrl+="/project_id/"+id;
	
	if(serviceid){
		assembleUrl+="/serviceid/"+serviceid;
	}
	if(industryid){
		assembleUrl+="/industryid/"+industryid;
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
	scrolls=parseInt($(".linkBtn").offset().top)-screenHeight;
	if(scrollTop>=scrolls){
		if(nowIndex==-1||suspend)return;
		suspend=true;
		$.post(
			url,
			{
				'limitid':nowIndex,
				'serviceid':serviceid,
				'industryid':industryid
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
					
					$(".content").append('<a href="'+assembleUrl(n.project_id)+'"><div class="child"><img class="childImg" src="'+n.imageUrl+'" /><div class="childHide"><div class="childTag"><p>'+n.service+'</p><p>'+n.industry+'</p><div class="childSub"></div></div><div class="childContent"><p class="title">'+n.title+'</p><p class="info">'+n.tag+'</p></div><img class="childPointer" src="/Public/images/project/hidePointer.png"></div></div></a>');
					$(".main .child").mouseover(function(){
						$(".main .child").not($(this)).find(".childHide").stop(false,true).fadeOut(500);
						$(this).find(".childHide").fadeIn(500);
					}).mouseleave(function(){
						$(this).find(".childHide").stop(false,false).fadeOut(500);
					});
				});
				

			}
			
		);
	}
}