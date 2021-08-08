

function banqh(can){
	 var nowimg = 0; 

}
var carousel= $;//.noConflict();
//ban_qh
carousel.fn.banqh = function(can){
	can = carousel.extend({
					box:null,//总框架
					pic:null,//大图框架
					pnum:null,//小图框架
					// prev_btn:null,//小图左箭头
					// next_btn:null,//小图右箭头
					prev:null,//大图左箭头
					next:null,//大图右箭头
					pop_prev:null,//弹出框左箭头
					pop_next:null,//弹出框右箭头
					autoplay:false,//是否自动播放
					interTime:5000,//图片自动切换间隔
					delayTime:800,//切换一张图片时间
					pop_delayTime:800,//弹出框切换一张图片时间
					order:0,//当前显示的图片（从0开始）
					picdire:true,//大图滚动方向（true水平方向滚动）
					mindire:true,//小图滚动方向（true水平方向滚动）
					min_picnum:null,//小图显示数量
					pop_up:false,//大图是否有弹出框
					pop_div:null,//弹出框框架
					pop_pic:null,//弹出框图片框架
					pop_xx:null,//关闭弹出框按钮
					mhc:null//朦灰层
				}, can || {});
	var picnum = carousel(can.pic).find('ul li').length;
	var picw = carousel(can.pic).find('ul li').outerWidth(true);
	var pich = carousel(can.pic).find('ul li').outerHeight(true);
	var poppicw = carousel(can.pop_pic).find('ul li').outerWidth(true);
	var picminnum = carousel(can.pnum).find('ul li').length;
	var picpopnum = carousel(can.pop_pic).find('ul li').length;
	var picminw = carousel(can.pnum).find('ul li').outerWidth(true);
	var picminh = carousel(can.pnum).find('ul li').outerHeight(true);
	var pictime;
	var tpqhnum=0;
	var xtqhnum=0;
	var popnum=0;
	carousel(can.pic).find('ul').width(picnum*picw).height(picnum*pich);
	carousel(can.pnum).find('ul').width(picminnum*picminw).height(picminnum*picminh);
	carousel(can.pop_pic).find('ul').width(picpopnum*poppicw);
	
//点击小图切换大图
	    carousel(can.pnum).find('li').click(function () {
        tpqhnum = xtqhnum = carousel(can.pnum).find('li').index(this);
        show(tpqhnum);
		minshow(xtqhnum);
    }).eq(can.order).trigger("click");
//大图弹出框
if(can.pop_up==true){
	carousel(can.pic).find('ul li').click(function(){
		carousel(can.mhc).height(carousel(document).height()).show();
		carousel(can.pop_div).show();
		popnum = carousel(this).index();
		var gdjl_w=-popnum*poppicw;
		carousel(can.pop_pic).find('ul').css('left',gdjl_w);
		popshow(popnum);
		})
	carousel(can.pop_xx).click(function(){
		carousel(can.mhc).hide();
		carousel(can.pop_div).hide();
	})
}

	if(can.autoplay==true){
//自动播放
		pictime = setInterval(function(){
			show(tpqhnum);
			minshow(tpqhnum)
			tpqhnum++;
			xtqhnum++;
			if(tpqhnum==picnum){tpqhnum=0};	
			if(xtqhnum==picminnum){xtqhnum=0};
					
		},can.interTime);	
		
//鼠标经过停止播放
		carousel(can.box).hover(function(){
			clearInterval(pictime);
		},function(){
			pictime = setInterval(function(){
				show(tpqhnum);
				minshow(tpqhnum)
				tpqhnum++;
				xtqhnum++;
				if(tpqhnum==picnum){tpqhnum=0};	
				if(xtqhnum==picminnum){xtqhnum=0};		
				},can.interTime);			
			});
	}
//小图左右切换			
	// carousel(can.prev_btn).click(function(){
	// 	if(tpqhnum==0){tpqhnum=picnum};
	// 	if(xtqhnum==0){xtqhnum=picnum};
	// 	xtqhnum--;
	// 	tpqhnum--;
	// 	show(tpqhnum);
	// 	minshow(xtqhnum);	
	// 	})
	// carousel(can.next_btn).click(function(){
	// 	if(tpqhnum==picnum-1){tpqhnum=-1};
	// 	if(xtqhnum==picminnum-1){xtqhnum=-1};
	// 	xtqhnum++;
	// 	minshow(xtqhnum)
	// 	tpqhnum++;
	// 	show(tpqhnum);
	// 	})	
//大图左右切换	
	carousel(can.prev).click(function(){
		if(tpqhnum==0){tpqhnum=picnum};
		if(xtqhnum==0){xtqhnum=picnum};
		xtqhnum--;
		tpqhnum--;
		show(tpqhnum);
		minshow(xtqhnum);	
		})
	carousel(can.next).click(function(){
		if(tpqhnum==picnum-1){tpqhnum=-1};
		if(xtqhnum==picminnum-1){xtqhnum=-1};
		xtqhnum++;
		minshow(xtqhnum)
		tpqhnum++;
		show(tpqhnum);
		})
//弹出框图片左右切换	
	carousel(can.pop_prev).click(function(){
		if(popnum==0){popnum=picnum};
		popnum--;
		popshow(popnum);
		})
	carousel(can.pop_next).click(function(){
		if(popnum==picnum-1){popnum=-1};
		popnum++;
		popshow(popnum);
		})			
//小图切换过程
	function minshow(xtqhnum){
		var mingdjl_num =xtqhnum-can.min_picnum+2
		var mingdjl_w=-mingdjl_num*picminw;
		var mingdjl_h=-mingdjl_num*picminh;
		
		if(can.mindire==true){
			carousel(can.pnum).find('ul li').css('float','left');
			if(picminnum>can.min_picnum){
				if(xtqhnum<3){mingdjl_w=0;}
				if(xtqhnum==picminnum-1){mingdjl_w=-(mingdjl_num-1)*picminw;}
				carousel(can.pnum).find('ul').stop().animate({'left':mingdjl_w},can.delayTime);
				}
				
		}else{
			carousel(can.pnum).find('ul li').css('float','none');
			if(picminnum>can.min_picnum){
				if(xtqhnum<3){mingdjl_h=0;}
				if(xtqhnum==picminnum-1){mingdjl_h=-(mingdjl_num-1)*picminh;}
				carousel(can.pnum).find('ul').stop().animate({'top':mingdjl_h},can.delayTime);
				}
			}
		
	}
//大图切换过程
		function show(tpqhnum){
			var gdjl_w=-tpqhnum*picw;
			var gdjl_h=-tpqhnum*pich;
			if(can.picdire==true){
				carousel(can.pic).find('ul li').css('float','left');
				carousel(can.pic).find('ul').stop().animate({'left':gdjl_w},can.delayTime);
				}else{
			carousel(can.pic).find('ul').stop().animate({'top':gdjl_h},can.delayTime);
			}//滚动
			//carousel(can.pic).find('ul li').eq(tpqhnum).fadeIn(can.delayTime).siblings('li').fadeOut(can.delayTime);//淡入淡出
			carousel(can.pnum).find('li').eq(tpqhnum).addClass("on").siblings(this).removeClass("on");
		};
//弹出框图片切换过程
		function popshow(popnum){
			var gdjl_w=-popnum*poppicw;
				carousel(can.pop_pic).find('ul').stop().animate({'left':gdjl_w},can.pop_delayTime);
			//carousel(can.pop_pic).find('ul li').eq(tpqhnum).fadeIn(can.pop_delayTime).siblings('li').fadeOut(can.pop_delayTime);//淡入淡出
		};					
				
}
