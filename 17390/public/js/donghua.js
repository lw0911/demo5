// JavaScript Document
//案例
$(window).scroll(function() {	
				
			if ($(window).scrollTop() > 550) {
				$(".productMain ul li:nth-child(1)").attr('id','al1');
				$(".productMain ul li:nth-child(2)").attr('id','al2');
				$(".productMain ul li:nth-child(3)").attr('id','al3');
				$(".productMain ul li:nth-child(4)").attr('id','al4');
				$(".productMain ul li:nth-child(5)").attr('id','al5');
				$(".productMain ul li:nth-child(6)").attr('id','al6');
				$(".productMain ul li:nth-child(7)").attr('id','al7');
				$(".productMain ul li:nth-child(8)").attr('id','al8');
			} else {
				$(".productMain ul li:nth-child(1)").removeAttr('id','al1');
				$(".productMain ul li:nth-child(2)").removeAttr('id','al2');
				$(".productMain ul li:nth-child(3)").removeAttr('id','al3');
				$(".productMain ul li:nth-child(4)").removeAttr('id','al4');
				$(".productMain ul li:nth-child(5)").removeAttr('id','al5');
				$(".productMain ul li:nth-child(6)").removeAttr('id','al6');
				$(".productMain ul li:nth-child(7)").removeAttr('id','al7');
				$(".productMain ul li:nth-child(8)").removeAttr('id','al8');
			}											
});
$(window).scroll(function() {	
				
			if ($(window).scrollTop() > 1550) {
				$(".anliList ul li:nth-child(1)").attr('id','al1');
				$(".anliList ul li:nth-child(2)").attr('id','al2');
				$(".anliList ul li:nth-child(3)").attr('id','al3');
				$(".anliList ul li:nth-child(4)").attr('id','al4');
			} else {
				$(".anliList ul li:nth-child(1)").removeAttr('id','al1');
				$(".anliList ul li:nth-child(2)").removeAttr('id','al2');
				$(".anliList ul li:nth-child(3)").removeAttr('id','al3');
				$(".anliList ul li:nth-child(4)").removeAttr('id','al4');
			}											
});
