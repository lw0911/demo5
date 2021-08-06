function post_http(){
 		$.ajax({
 			url:'/e/tool/score/do.php',
			type:'POST', 
			data:{'enews':'online'},
			success:function(res){
				console.log(res);
			} 
 		});
 	}

 	var time = 10;

 	var open = 1;

 	if(open== 1){
 		setInterval(post_http, time * 60000);
 	}