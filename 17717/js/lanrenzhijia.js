// 代码提供：脚本之家 www.jb51.net
$(document).ready(function(){
		var len=$(".tu>a").length;
		var i=0;
		var lunhuan;
		var kuan=$(window).width();
		//$(".tu>a").css('width',kuan);
		$(".xu:eq(0)").css('backgroundImage','url(/public/banner/banner11/imagefen.png)');
		$(".xu:eq(0)").css('color','#FFF');

		function huan()
		{	
			$(".xu:eq("+i+")").css('backgroundImage','url(/public/banner/banner11/imagefen.png)');
			$(".xu:eq("+i+")").css('color','#FFF');
			$(".xu:eq("+i+")").siblings().css('backgroundImage','url(/public/banner/banner11/imagehei.png)');
			$(".xu:eq("+i+")").siblings().css('color','#666');
			$(".txt>em:eq("+i+")").siblings("em").hide();
			$(".txt>em:eq("+i+")").show();
			$(".tu>a:eq("+i+")").siblings("a").fadeOut(500);
			$(".tu>a:eq("+i+")").fadeIn(1500);
			i=i+1
			if(i==len)
			{i=0}
		
		}
		lunhuan=setInterval(huan,4500);
		$("#hao").find(".xu").click(function(){
			j=$(this).index();
			$(".xu:eq("+j+")").css('backgroundImage','url(/public/banner/banner11/imagefen.png)');
			$(".xu:eq("+j+")").css('color','#FFF');
			$(".xu:eq("+j+")").siblings().css('backgroundImage','url(/public/banner11/banner/imagehei.png)');
			$(".xu:eq("+j+")").siblings().css('color','#666');
			$(".txt>em:eq("+j+")").siblings("em").hide();
			$(".txt>em:eq("+j+")").show();
			i=j;
			$(".tu>a:eq("+j+")").siblings("a").fadeOut(500);
			$(".tu>a:eq("+j+")").fadeIn(3000);
											  
		})
		
	})

// 代码提供：脚本之家 www.jb51.net