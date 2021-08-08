$(function(){
	$(".nav_con_sy").hover(function(){
		$(this).stop().animate({"top":-35})
		},function(){
			$(this).stop().animate({"top":0})
			})
	$("#header").mouseover(function(){
		$(".ab_guanyu_xg").addClass("active5")
		})
	$(window).scroll(function(){
		
		if($(this).scrollTop()>300){
			$(".cpzl_tb_xg").addClass("active0")
			$("#cpzl em").css({"opacity":1})
			}
		if($(this).scrollTop()>1180){
			$(".cpys_bt_xg").addClass("active")
			$("#cpys em").css({"opacity":1})
			}
		if($(this).scrollTop()>1350){
			$(".cpys_con").addClass("active1")
			}
		if($(this).scrollTop()>1700){
			$(".guanyu_tb_xg").addClass("active2")
			$("#guanyu em").css({"opacity":1})
			}
		if($(this).scrollTop()>1800){
			$(".guanyu_c_xg").addClass("active3")
			}
		if($(this).scrollTop()>400){
			$(".cpzl_con_xg").addClass("active4")
			}
		/*if($(this).scrollTop()>80){
			$(".ab_guanyu_xg").addClass("active5")
			}*/
		if($(this).scrollTop()>950){
			$(".dz_khxq_xg").addClass("active9")
			}
		if($(this).scrollTop()>150){
			$(".ab_guanyu_con_xg").addClass("active6")
			}
		if($(this).scrollTop()>600){
			$(".ab_td_xg").addClass("active7")
			}
		if($(this).scrollTop()>850){
			$(".ab_tdt_xg").addClass("active8")
			}
		if($(this).scrollTop()>300){
			$(".zx_con").addClass("active10","active11")
			}
		if($(this).scrollTop()>300){
			$(".zx_con").addClass("active11")
			}
		if($(this).scrollTop()>550){
			$(".zx_con").addClass("active12")
			}
		if($(this).scrollTop()>550){
			$(".zx_con").addClass("active13")
			}
		if($(this).scrollTop()>250){
			$(".lx_con_zi").addClass("active14")
			}
		if($(this).scrollTop()>300){
			$(".lx_con_zi").addClass("active15")
			}
		if($(this).scrollTop()>320){
			$(".lx_con_zi").addClass("active16")
			}
		if($(this).scrollTop()>340){
			$(".lx_con_zi").addClass("active17")
			}
		/*if($(this).scrollTop()>400){
			$(".ss_con_right").addClass("active18")
			}*/
		if($(this).scrollTop()>200){
			$(".dz_zxdz_con").addClass("active19")
			}
		if($(this).scrollTop()>300){
			$(".dz_zxdz_con").addClass("active20")
			}
		if($(this).scrollTop()>400){
			$(".dz_zxdz_con").addClass("active21")
			}
		if($(this).scrollTop()>500){
			$(".dz_zxdz_con").addClass("active22")
			}
		if($(this).scrollTop()>600){
			$(".dz_zxdz_con").addClass("active23")
			}
		})
	$(".cpzl_cp_sf").first().show()
	$(".cpzl_cp_nav li").click(function(){
		var yi=$(this).index()
		$(".cpzl_cp_sf").eq(yi).fadeIn().siblings(".cpzl_cp_sf").fadeOut()
	    })
	$(".zs_nav_tu").first().show()
	$(".zs_nav li").click(function(){
		var er=$(this).index()
		$(".zs_nav_tu").eq(er).fadeIn().siblings(".zs_nav_tu").fadeOut()
		})
	$(".zs_con_tu").first().show()
	$(".zs_nav li").click(function(){
		var er=$(this).index()
		$(".zs_con_tu").eq(er).fadeIn().siblings(".zs_con_tu").fadeOut()
		})
	/*$(".cpzl_cp_nav li a").click(function(){
		$(this).addClass("hover").siblings().removeClass("hover")
		})*/
	$(".logo_r input").focus(function(){
		$(this).css({"color":"#ddd"})
		}).blur(function(){
			$(this).css({"color":"#737272"})
			})
		
})
$(function(){
	var li_h=$(".ss_con_right li").height();
	var length=$(".ss_con_right li").length;
	var i=0;
	var t=setInterval(move,3000);
		function move(){
		i++;
		if(i==length-4){
			i=0;
			}
		$(".ss_con_right_xw").stop().animate({top:-i*li_h})
		}
		$(".ss_con_right").hover(function(){
			clearInterval(t)
			},function(){
				t=setInterval(move,3000)
				})
/*$(".cpzl_cp_nav li").click(function(){
	$(this).find("a").css({opacity:1})
	$(this).find("img").css({"display":"none"})
	$(this).find("span").css({"display":"block"})
	
			})			
$(".cpzl_cp_nav li").hover(function(){
	$(this).find("a").css({opacity:1})
	$(this).find("img").css({"display":"none"})
	$(this).find("span").css({"display":"block"})
	
	},function(){
    $(this).find("a").css({opacity:0.2})
	$(this).find("img").css({"display":"block"})
	$(this).find("span").css({"display":"none"})
		})*/

	$(".cpzl_cp_nav li").click(function(){
		$(this).find("a").addClass("active").parent("li").siblings().find("a").removeClass("active");
		$(this).find("img").addClass("active").parent().parent("li").siblings().find("img").removeClass("active");
		
		$(this).find("span").addClass("active").parent().parent("li").siblings().find("span").removeClass("active");
		
	})
	$(".zs_nav li").click(function(){
		$(this).find("a").addClass("active").parent("li").siblings().find("a").removeClass("active");
		})	
		
    
	/*if($(".cpzl_cp_nav li").click){
	function(){
	$(this).find("a").css({opacity:1})
	$(this).find("img").css({"display":"none"})
	$(this).find("span").css({"display":"block"})
	}}
	else{
		function(){
    $(this).find("a").css({opacity:0.2})
	$(this).find("img").css({"display":"block"})
	$(this).find("span").css({"display":"none"})
		}}
	*/
	
	
	
	
		
})










