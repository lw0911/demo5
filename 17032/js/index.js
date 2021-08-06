$(function(){
    //搜索
	$("#search").focus(function() {
		if($(this).val()=="请输入关键字"){
			$(this).val(""); 
		}
		}).blur(function() { 
			if($(this).val() == "") { 
			$(this).val("请输入关键字");
		}
	})
		
	var selectDown=function(){
			$(".selectW").click(function(event){
				$(this).toggleClass("active");
				$(this).find(".selectDown").slideToggle().siblings("span").toggleClass("on");
				event.stopPropagation();
			})
			$(".selectDown ul li").click(function(event){
				$(this).parents(".selectW").removeClass("active");
				$(this).parents(".selectDown").siblings("input").val($(this).text());
				$(this).parents(".selectDown").slideUp().siblings("span").removeClass("on");
				event.stopPropagation();
			})
			$("body").click(function(){
				$(".selectW").removeClass("active");
				$(".selectDown").slideUp();
				$(".selectW span").removeClass("on");
			})
		}
	
	
	//热点主页、科研成果、资源统计、内页tit、学院列表、教师查询、教研信息--切换
	var homeTab=function(){
		$(".homeHotLInner").eq(0).show();
		$(".homeTabCont").eq(1).show();
		$(".sciWrap").eq(1).show();
		$(".resourWrap").eq(0).show()
		$(".unitWrap").eq(0).show()
		
		//热点主页
		$(".homeHotR ul li").click(function(){
			var index=$(this).index();
			
			$(this).addClass("active").siblings("li").removeClass("active");
			$(".homeHotLInner").eq(index).fadeIn().siblings(".homeHotLInner").fadeOut();
		})
		
		$(".homeHead ul li").click(function(){
			var index=$(this).index();
			
			$(this).addClass("on").siblings("li").removeClass("on");
			$(".homeTabCont").eq(index).show().siblings(".homeTabCont").hide();
		})
		
		//科研成果
		$(".sciHead ul li").click(function(){
			var index=$(this).index();
			
			$(this).addClass("on").siblings("li").removeClass("on");
			$(".sciWrap").eq(index).show().siblings(".sciWrap").hide();
		})
		
		//资源统计
		$(".resourTit ul li").click(function(){
			var index=$(this).index();
			
			$(this).addClass("on").siblings("li").removeClass("on");
			$(".resourWrap").eq(index).show().siblings(".resourWrap").hide();
		})
		
		//内页tit
		$(".contTitList li").click(function(){
			$(this).addClass("on").siblings("li").removeClass("on");
		})
		
		//学院列表
		$(".unitXq ul li").click(function(){
			var index=$(this).index();
			
			$(this).addClass("on").siblings("li").removeClass("on");
			$(".unitWrap").eq(index).fadeIn().siblings(".unitWrap").fadeOut();
		})
		
		//教师查询
		$(".teachChoose span").click(function(){
			$(this).addClass("on").siblings("span").removeClass("on");
		})
		
		//教研信息
		$(".infromLeft ul li").click(function(){
			$(this).addClass("on").siblings("li").removeClass("on");
		})
		
		//教研信息
		$(".informHead h3 span").click(function(){
			if($(this).hasClass("")){
				$(this).addClass("active").siblings("span").removeClass("active").removeClass("on");
			}else if($(this).hasClass("active")){
				$(this).addClass("on").removeClass("active");
			}else{
				$(this).addClass("active").removeClass("on");
			}
		})
		
		
		
	}
	
	//学科列表-下拉
	var disDown=function(){
		$(".disListSelect").click(function(event){
			$(this).toggleClass("active").find(".disListSelectDown").slideToggle();
			$(this).parent("li").siblings("li").find(".disListSelect").removeClass("active").find(".disListSelectDown").slideUp();
			event.stopPropagation();
		})
		
		$(".disListSelectDown h3").click(function(event){
			$(this).toggleClass("active").siblings("h3").removeClass("active");
			$(this).next(".disListSelectInnner").slideToggle().siblings(".disListSelectInnner").slideUp();
			event.stopPropagation();
		})
		
		$(".disListSelectInnner p").click(function(){
			$(this).addClass("active").siblings("p").removeClass("active").parent(".disListSelectInnner").siblings(".disListSelectInnner").children("p").removeClass("active");
		})
		
		$("body").click(function(){
			$(".disListSelect").removeClass("active");
			$(".disListSelectDown").slideUp();
		})
	}
	
	
	//字数限定
	var writ=function(){ 
		$(".sciWrap ul li .sciInner h3 a").each(function(){ 
			var text1=$(this).text(); 
			if(text1.length > 25){ 
				var text1=text1.substr(0,24) + "..."; 
				$(this).text(text1); 
			}
		})
		
		$(".informList li h4").each(function(){ 
			var text1=$(this).text(); 
			if(text1.length > 46){ 
				var text1=text1.substr(0,45) + "..."; 
				$(this).text(text1); 
			}
		})
		
		
	}

	//page
	var page=function(){
		$(".page a").click(function(){
			$(this).addClass("active").siblings(".page a").removeClass("active");
			$(this).parent(".page").find("em").removeClass("active");
			$(this).parent(".page").find("i").removeClass("active");
		})
		$(".page em").click(function(){
			$(this).addClass("active").siblings(".page em").removeClass("active");
			$(this).parent(".page").find("i").removeClass("active");
		})
		$(".page i").click(function(){
			$(this).addClass("active").siblings(".page i").removeClass("active");
			$(this).parent(".page").find("em").removeClass("active");
		})
	}
			
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	homeTab();    //热点主页切换
	selectDown();  //搜索
	page();    //page
	disDown();   //学科列表-下拉
	writ();     //限定字数
	 
	
})
