// JavaScript Document
$(function(){
	/*banner��Ч*/
		$(".bannerContainer").hover(function(){
				$(this).find(".btn").fadeIn();
			},function(){$(this).find(".btn").fadeOut()})
		//$(".bannerContainer").slide({ titCell:'.bannerFocus',mainCell:'.bd ul',autoPage:'<span></span>',effect:'fold',delayTime:600,interTime:3000,autoPlay:true,titOnClassName:'active',prevCell:'.preBtn',nextCell:'.nextBtn' });
	/*�����˵���Ч*/
	TouchSlide({ slideCell:"#bannerContainer",titCell:'.bannerFocus',mainCell:'.bd ul',autoPage:'<span></span>',effect:'leftLoop',delayTime:600,interTime:5000,autoPlay:true,titOnClassName:'active',prevCell:'.preBtn',nextCell:'.nextBtn' });
	
	$(".menuWrap ul").slide({type:'menu',titCell:'.nav',targetCell:'.subMenu',effect:"slideDown", delayTime:300, triggerTime:100,titOnClassName:'active',startFun:function(i){			
			var left = $(".menuWrap ul li").width()*i;
			$(".menuWrap ul li").eq(i).find(".subMenu").css({left:-left+'px'});
		}  });
	$(".menuWrap ul li").eq(0).removeClass("active");	
	$(".menuWrap ul li").each(function(index, element) {
        $(this).mouseleave(function(e) {
			e.preventDefault();
            $(this).removeClass("active");
        });
    });	
	/*���ڻ��Ч*/
		$(".activities").slide({ titCell:'.activitiesFocus',mainCell:'ul',autoPage:'<span></span>',effect:'fold',delayTime:600,interTime:3000,autoPlay:true,titOnClassName:'active' });
	
	/*��ҳר����Ч*/
	$(".experts li").each(function(i) {
        $(".experts li").slice(i*6,i*6+6).wrapAll("<ul class='relative clearfix'></ul>");
    });
	$(".expertFocus").slide({titCell:'.expertBtns',mainCell:'.experts',autoPage:'<span></span>',effect:'left',delayTime:600,interTime:5000,autoPlay:false,titOnClassName:'active',prevCell:'.preBtn',nextCell:'.nextBtn'});
	/*ר�Ҵ�ͼ������Ч*/
	$(".expertContainer").slide({titCell:'.experts ul li',mainCell:'.expertsLists',effect:'fold',titOnClassName:'active'});
	/*�����л�*/
	$(".storysContainer").slide({titCell:'.story_focus dl',mainCell:'.storyLists',effect:'fold',titOnClassName:'active'});
	/*��ȫ����*/
	$(".securityCenter").slide({titCell:'.pageNation',mainCell:'.securityLists',autoPage:'<span></span>',effect:'fold',delayTime:600,interTime:5000,autoPlay:true,titOnClassName:'active',prevCell:'.preBtn',nextCell:'.nextBtn'});
	/*������Ŀչ��Ч��*/
	var openFlag = true;
	$(".moreObjects").on("click",function(){
			
			if(openFlag){
					$(this).addClass("active");
					$(".content8").show();
					openFlag = false;
				}else{
					$(this).removeClass("active");
					$(".content8").hide();	
					openFlag = true;
					}
		$(".content8Container").slide({titCell:'.content8Navs span',mainCell:'.content8Lists',effect:'fold',autoPlay:false,delayTime:0,interTime:0,titOnClassName:'active'})
		})
	
	/*Ʒ����Ƶ������Ŵ���*/
	$(".videoBtn").on('click',function(e){
			$(".videoBanner").hide();
			$(".videoBtn").hide();
			//player.playVideo();
				
		});
	/*����Ч��*/
	$(".bottomSearchBtn").on('click',function(e){
			document.bottomSearchForm.submit();
		});
	/*���������л�Ч��*/
	$(".content7").slide({titCell:'.content7Navs span',mainCell:'.content7Lists',effect:'fold',autoPlay:false,delayTime:0,interTime:0,startFun:function(i,c){
			//var width = $(".content7Navs span").width()+14;
			var left = parseInt($(".content7Navs span").eq(i).position().left,10);
			$(".activeBg").animate({left:left})
		}})
	})