$(document).ready(function(){
	$(function(){
		var aDiv=$('#banner');
		var oUl=$('#scroll');
		var aLi=oUl.children();
		var n=0;
		var oA=aLi.children();
		
		aLi.mouseenter(function(){
			n=$(this).index();
			aLi.removeClass('active');
			oA.removeClass('colors')
			aLi.eq($(this).index()).addClass('active');
			aDiv.css('background','url(images/header/'+($(this).index()+1)+'.jpg)repeat-x  center top #010101 ')
			oA.eq($(this).index()).addClass('colors');
		})
		
		var timer=setInterval(tick,1500)
		aLi.mouseenter(function(){
			clearInterval(timer);	
		})
		aLi.mouseleave(function(){
			timer=setInterval(tick, 1500)	
		})
			function tick()
			{
				n++;
				if(n == aLi.length)
				{
					n=0;	
				}	
				oA.removeClass('colors')
				oA.eq(n).addClass('colors')
				aLi.eq(n).addClass('active').siblings().removeClass('active');
				aDiv.css('background','url(images/header/'+(n+1)+'.jpg)repeat-x  center top #010101 ')
			}
	});

	$(function(){
		var oSuction=$('#suction');
		var top=oSuction.offset().top;
		$(window).scroll(function(){
			var scrolltop=$(window).scrollTop();
			if( top < scrolltop)
			{
				oSuction.css({'display':'block'});	
			}	
			else
			{
				oSuction.css({'display':'none'});	
			}
		})	
		
	});
	$(function(){
		var oNav=$('#nav');
		var oNav1=$('#nav2')
		var bSign=true;
		oNav.click(function(){
			if(bSign){
				oNav1.css({'display':'block'});
			}
			else
			{
				oNav1.css({'display':'none'});
			}
			bSign=!bSign;
		})
	});
	$(function(){
		var oUpload=$('.upload');
		var oUpload1=$('.upload1')
		oUpload.mouseenter(function(){
			oUpload1.css({'display':'block'})
		})
		oUpload.mouseleave(function(){
			oUpload1.css({'display':'none'})
		})
	});
	$(function(){
		var oMessage=$('#message');
		var oMessage1=$('#message1')
		var bSign=true;
		oMessage.mouseenter(function(){
			oMessage1.css({'display':'block'})
		})
		oMessage.mouseleave(function(){
			oMessage1.css({'display':'none'})
		})
	});
	$(function(){
		var oMessage=$('#copy_m');
		var oMessage1=$('#copy_m1')
		var bSign=true;
		oMessage.mouseenter(function(){
			oMessage1.css({'display':'block'})
		})
		oMessage.mouseleave(function(){
			oMessage1.css({'display':'none'})
		})
	});
	$(function(){
		var oPr=$('#pr');
		var oPr1=$('#pr1')
		oPr.mouseenter(function(){
			oPr1.css({'display':'block'})
		})
		oPr.mouseleave(function(){
			oPr1.css({'display':'none'})
		})
	});
	$(function(){
		var oPr=$('#copy_pr');
		var oPr1=$('#copy_pr1')
		oPr.mouseenter(function(){
			oPr1.css({'display':'block'})
		})
		oPr.mouseleave(function(){
			oPr1.css({'display':'none'})
		})
	});
	$(function(){
		var aBtn=$('#copy_m span')
		var acDiv=$('.ctab div')
		
		aBtn.mouseenter(function(){
			aBtn.removeClass('active');
			acDiv.removeClass('cactive');
			$(this).addClass('active');
			acDiv.eq($(this).index()-1).addClass('cactive')
		})
	});

	$(function(){
		var aBtn=$('#message span')
		var aDiv=$('.tab div')
		
		aBtn.mouseenter(function(){
			aBtn.removeClass('active');
			aDiv.removeClass('active');
			$(this).addClass('active');
			aDiv.eq($(this).index()-1).addClass('active')
		})
	});
	$(function(){
		var oClose=$('.close');
		var oLogin=$('.login_y')
		var oLogin1=$('.login1');
		var oLayer=$('.layer')
		var oEnroll=$('.enroll_y')
		var oEnroll1=$('.enroll1')
		oLogin1.click(function(){
			oLogin.css({'display':'block'});
			oLayer.css({'display':'block'});
		});
		oEnroll1.click(function(){
			oEnroll.css({'display':'block'});
			oLayer.css({'display':'block'});
		});
		oClose.click(function(){
			oLogin.css({'display':'none'});
			oLayer.css({'display':'none'});
			oEnroll.css({'display':'none'});
		});
	});

	$(function(){
		var oClose=$('.close');
		var oCopy_login=$('.copy_login')
		var oCl=$('.copy_l');
		var oLayer=$('.layer')
		var oCe=$('.copy_en')
		var oC_e=$('.copy_e')
		oCl.click(function(){
			oCopy_login.css({'display':'block'});
			oLayer.css({'display':'block'});
		});
		oC_e.click(function(){
			oCe.css({'display':'block'});
			oLayer.css({'display':'block'});
		});
		oClose.click(function(){
			oCopy_login.css({'display':'none'});
			oLayer.css({'display':'none'});
			oCe.css({'display':'none'});
		});
	});
	
	$(function(){
		var oChange=$('.change');
		var oYzm=$('.yzm')
		var n=0;
		oChange.click(function(){
			n++;
			if(n == 7){
				n=1;
			}
			oYzm.css({'background':'url(images/ewm/'+n+'.jpg)'})
		})
		oYzm.click(function(){
			n++;
			if(n == 7){
				n=1;
			}
			oYzm.css({'background':'url(images/ewm/'+n+'.jpg)'})
		});
	});


	// $(function(){
	// 	var aSpan=$('.top_pc1');
	// 	var aP=$('.top_pc2');
	// 	aSpan.each(function(i){
	// 		aSpan.eq(i).mouseenter(function(){
	// 			aP.eq(i).css({'width':'740px','margin-right':'20px','opacity':'1'});
	// 		});
	// 		aSpan.eq(i).mouseleave(function(){
	// 			aP.eq(i).css({'width':'0','margin-right':'0','opacity':'0'});
	// 		});
	// 	});

	// });
	

	

});
