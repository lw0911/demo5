$(document).ready(function(){
  
  $('li.hd_menu_tit').mousemove(function(){
  $(this).find('div.hd_menu_list,div.hd_Shopping_list').show();//you can give it a speed
  });
  $('li.hd_menu_tit').mouseleave(function(){
  $(this).find('div.hd_menu_list,div.hd_Shopping_list').hide();
  });
  
});
$(document).ready(function(){
	$(".clearfix li.list_name, li.hd_Shopping_Cart").hover(function(){
			$(this).addClass("hd_menu_hover");
			$(this).children("ul li.list_name_bg").attr('class','');
		},function(){
			$(this).removeClass("hd_menu_hover");  
			$(this).children("ul li.list_name_bg").attr('class','');
		}
	); 
	$("#nav li.no_sub").hover(function(){
			$(this).addClass("hover1");
		},function(){
			$(this).removeClass("hover1");  
		}
	); 
})
$(document).ready(function(){
$(".picList li").hover(function(){
		$(this).find(".title").show();
	},function(){
		$(this).find(".title").hide();
});
	$("#allSortOuterbox li.name").hover(function(){
												
			$(this).addClass("hover_nav");
												
		},function(){
			$(this).removeClass("hover_nav" );  
		});
		$("div.display ").hover(function(){
		$(this).addClass("hover");
	},function(){
		$(this).removeClass("hover" );  
});	
})
$(document).ready(function(){
$(".Search ").hover(function(){
		$(this).find(".Search_text").show();
	},function(){
		$(this).find(".Search_text").hide();
});
	$("#lists li").hover(function(){
												
			$(this).addClass("hover_nav");
												
		},function(){
			$(this).removeClass("hover_nav" );  
		}
	); 
})
