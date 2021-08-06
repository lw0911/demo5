// JavaScript Document
$(function(){
	var db = $(".downBox");
	db.each(function(j){
		db.eq(j).find('a').each(function(i){										
			//function a click 开始	
			db.eq(j).find('a').eq(i).click(function(){
						db.eq(j).find("ul").each(function(m){
							if(i == m){
								var ooy = db.eq(j).find("a").eq(m);
								var oox = ooy.offset();								
								var ooc = db.eq(j).find("ul").eq(m);
								ooc.css({"width":ooy.width()+27,"left":oox.left,"top":oox.top+ooy.height()});	
								//alert(oox.left);
								db.eq(j).find("ul").eq(m).show().siblings('ul').hide();
								db.eq(j).siblings().find('ul').hide();
								}															
							//下拉选项选择效果控制
							db.eq(j).find("ul").eq(m).find('li').click(function(){
								//alert($(this).text());
								db.eq(j).find('a').eq(m).children('span').text($(this).text());
								db.eq(j).find('.hiddenIpt').eq(m).val($(this).attr('data-corner'));
								$(this).parents('ul').hide();
								})
							})													
						})
						////function a click 结束
						
			//function a span click start			
			db.eq(j).find('a').eq(i).children('span').click(function(){
				db.eq(j).find("ul").each(function(m){
							if(i == m){
								var ooy = db.eq(j).find("a").eq(m);
								var oox = ooy.offset();								
								var ooc = db.eq(j).find("ul").eq(m);
								ooc.css({"width":ooy.width()+27,"left":oox.left,"top":oox.top+ooy.height()});	
								db.eq(j).find("ul").eq(m).show().siblings('ul').hide();
								db.eq(j).siblings().find('ul').hide();
								}															
							//下拉选项选择效果控制
							db.eq(j).find("ul").eq(m).find('li').click(function(){								
								db.eq(j).find('a').eq(m).children('span').text($(this).text());
								db.eq(j).find('.hiddenIpt').eq(m).val($(this).attr('data-corner'));
								$(this).parents('ul').hide();								
								})
							})		
				})//function a span click over
						
			})
			
			//else click function start
			$('*').click(function(event){				
				if(event.target.className != "f6 xskqy1x0"&&event.target.className != "il"&&event.target.className != "dpan"){
					db.eq(j).find('ul').hide();
					}
				})
				//else click function over	
				
		})//db.eq(j).find('a').each   over
		
	var Searchdb = $(".searchBox");
	Searchdb.each(function(j){
		Searchdb.eq(j).find('a').each(function(i){										
			//function a click 开始	
			Searchdb.eq(j).find('a').eq(i).click(function(){
						Searchdb.eq(j).find("ul").each(function(m){
							if(i == m){
								var ooy = Searchdb.eq(j).find("a").eq(m);
								var oox = ooy.offset();								
								var ooc = Searchdb.eq(j).find("ul").eq(m);
								ooc.css({"width":ooy.width()+27,"left":oox.left,"top":oox.top+ooy.height()});	
								//alert(oox.left);
								Searchdb.eq(j).find("ul").eq(m).show().siblings('ul').hide();
								Searchdb.eq(j).siblings().find('ul').hide();
								}															
							//下拉选项选择效果控制
							Searchdb.eq(j).find("ul").eq(m).find('li').click(function(){
								//alert($(this).text());
								Searchdb.eq(j).find('a').eq(m).children('span').text($(this).text());
								Searchdb.eq(j).find('.hiddenIpt').eq(m).val($(this).attr('data-corner'));
								$(this).parents('ul').hide();
								})
							})													
						})
						////function a click 结束
						
			//function a span click start			
			Searchdb.eq(j).find('a').eq(i).children('span').click(function(){
				Searchdb.eq(j).find("ul").each(function(m){
							if(i == m){
								var ooy = Searchdb.eq(j).find("a").eq(m);
								var oox = ooy.offset();								
								var ooc = Searchdb.eq(j).find("ul").eq(m);
								ooc.css({"width":ooy.width()+27,"left":oox.left,"top":oox.top+ooy.height()});	
								Searchdb.eq(j).find("ul").eq(m).show().siblings('ul').hide();
								Searchdb.eq(j).siblings().find('ul').hide();
								}															
							//下拉选项选择效果控制
							Searchdb.eq(j).find("ul").eq(m).find('li').click(function(){								
								Searchdb.eq(j).find('a').eq(m).children('span').text($(this).text());
								Searchdb.eq(j).find('.hiddenIpt').eq(m).val($(this).attr('data-corner'));
								$(this).parents('ul').hide();								
								})
							})		
				})//function a span click over
						
			})
			
			//else click function start
			$('*').click(function(event){				
				if(event.target.className != "f6 xskqy1x0"&&event.target.className != "il"&&event.target.className != "dpan"){
					Searchdb.eq(j).find('ul').hide();
					}
				})
				//else click function over	
				
		})//Searchdb.eq(j).find('a').each   over
})