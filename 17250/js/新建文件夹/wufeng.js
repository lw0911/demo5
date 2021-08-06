function wufeng(yusheshijian){
	var zongkuandu = 0;		
	
	$("#wufeng ul li").each(
		function(){
			zongkuandu = zongkuandu + $(this).outerWidth(true);
		}
	);

	
	$("#wufeng ul li").clone().appendTo("#wufeng ul");

	dongdong(yusheshijian);
	function dongdong(yunxingshijian){
		$("#wufeng ul").animate({"left":-zongkuandu},yunxingshijian,"easieLinear",function(){
			$("#wufeng ul").css("left",0);
			dongdong(yusheshijian);
		});
 	}

 	
 	$("#wufeng").mouseenter(
 		function(){
 			$("#wufeng ul").stop();
 		}
 	);

 	
 	$("#wufeng").mouseleave(
 		function(){
 			
 			var yijingzouguodelucheng = - parseInt($("#wufeng ul").css("left"));
 			
 			var fenpeishijian = yusheshijian * (1 - yijingzouguodelucheng / zongkuandu);
 			
 			dongdong(fenpeishijian);
 		}
 	);
}