// JavaScript Document


/*导航条tab切换*/
$(function(){
	$('.nav li').click(function(){
		$(this).addClass('nav_bg').siblings().removeClass('nav_bg');
		$(this).find('a').addClass('nava_bg');
		$(this).siblings('li').find('a').removeClass('nava_bg');
	});
	
});

$(function(){
	$('.paging li').click(function(){
		$(this).addClass('pag_bg').siblings().removeClass('pag_bg');
	});
	$('.paging_re li').click(function(){
		$(this).addClass('pag_bg').siblings().removeClass('pag_bg');
	});
});


/*banner切换*/
$(function(){
	var i=0;
	var timer=null;
	$('.pic').eq(0).show().siblings().hide();
	show()
	showTime()

function show(){
		$('.pic').eq(i).fadeIn(300).siblings().fadeOut(300);
		
	}	
	
function showTime(){
		timer=setInterval(function(){
			i++;
			if(i==3){
				i=0;
			}
			show();
		},3000)		
	}
});

jQuery(".ladyScroll").slide({ mainCell:".dlList", effect:"leftLoop",vis:4, autoPlay:true});
window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdPic":"","bdStyle":"0","bdSize":"16"},"share":{},"image":{"viewList":["qzone","tsina","tqq","renren","weixin"],"viewText":"分享到：","viewSize":"16"},"selectShare":{"bdContainerClass":null,"bdSelectMiniList":["qzone","tsina","tqq","renren","weixin"]}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];










































