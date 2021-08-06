/* 代码整理：懒人之家 www.lanrenzhijia.com */
var currentImage;
var currentIndex = -1;
//显示大图(参数index从0开始计数)
function showImage(index){
	//更新当前图片页码
	$(".CounterCurrent").html(index + 1);
	//隐藏或显示向左向右鼠标手势
	var len = $('#OriginalPic img').length;
	if(index == len - 1){
		$("#aNext").hide();
	}else{
		$("#aNext").show();
	}
	if(index == 0){
		$("#aPrev").hide();
	}else{
		$("#aPrev").show();
	}
	//显示大图            
	if(index < $('#OriginalPic img').length){
		var indexImage = $('#OriginalPic p')[index];
		//隐藏当前的图
		if(currentImage){
			if(currentImage != indexImage){
				$(currentImage).css('z-index', 2);	
				$(currentImage).fadeOut(0,function(){
					$(this).css({'display':'none','z-index':1})
				});
			}
		}
		//显示用户选择的图
		$(indexImage).show().css({'opacity': 0.4});
		$(indexImage).animate({opacity:1},{duration:200});
		//更新变量
		currentImage = indexImage;
		currentIndex = index;
		//移除并添加高亮
		$('#ThumbPic img').removeClass('active');
		$($('#ThumbPic img')[index]).addClass('active');                    
	}
}
/* 代码整理：懒人之家 www.lanrenzhijia.com */
//下一张
function ShowNext(){
	var len = $('#OriginalPic img').length;
	var next = currentIndex < (len - 1) ? currentIndex + 1 : 0;
	showImage(next);
}
//上一张
function ShowPrep(){
	var len = $('#OriginalPic img').length;
	var next = currentIndex == 0 ? (len - 1) : currentIndex - 1;
	showImage(next);
}
//下一张事件
$("#aNext").click(function(){
	ShowNext();
	if($(".active").position().left >= 144 * 5){
		$("#btnNext").click();
	}
});
//上一张事件
$("#aPrev").click(function(){
	ShowPrep();
	if($(".active").position().left <= 144 * 5){
		$("#btnPrev").click();
	}
});
//初始化事件
$(".OriginalPicBorder").ready(function(){
	ShowNext();
	//绑定缩略图点击事件
	$('#ThumbPic li').bind('click',function(e){
		var count = $(this).attr('rel');
		showImage(parseInt(count) - 1);
	});
});
/* 代码整理：懒人之家 www.lanrenzhijia.com */