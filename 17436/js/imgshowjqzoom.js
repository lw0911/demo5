function imgShow(imgList,imgShow,number,width,direction){
	var objUl = imgList.find("ul");
	var objLi = imgList.find("li");
	var objCImg = objLi.children("img");
	var objImg = imgShow.find("img");
	var objUp = imgList.prev();
	var objDown = imgList.next();
	if(direction == "margin-left"){
		objUl.width(objLi.length*width*2);
	}else{
		objUl.height(objLi.length*width*2);
	}
	objLi.click(function(){
		proSlideRun(objLi.index(this));
	})
	objUp.click(function(){
		proSlideRun(objLi.index(objUl.children("li.active"))-1);
	})
	objDown.click(function(){
		proSlideRun(objLi.index(objUl.children("li.active"))+1);
	})
	function proSlideRun(n){
		if(n>=objLi.length){n=objLi.length-1;return false;}
		if(n<0){n=0;return false;}
		if(n<=1){
			if(direction == "margin-left"){
				objUl.animate({"margin-left":0},300);	
			}else{
				objUl.animate({"margin-top":0},300);		
			};			
		}else if(n>=objLi.length-(number-1) && objLi.length-(number-1)>0){
			if(direction == "margin-left"){
				objUl.animate({"margin-left":-(objLi.length-number)*width+"px"},300);
			}else{
				objUl.animate({"margin-top":-(objLi.length-number)*width+"px"},300);	
			};
		}else if(objLi.length-(number-1)>0){
			if(direction == "margin-left"){
				objUl.animate({"margin-left":-(n-1)*width+"px"},300);
			}else{
				objUl.animate({"margin-top":-(n-1)*width+"px"},300);	
			};
		}
		objLi.removeClass("active").eq(n).addClass("active");
		objImg.fadeTo(300,0,function(){
			objImg.attr("src","");
			objImg.fadeTo(300,1,function(){
				objImg.attr("src",objLi.eq(n).children("img").attr("data-small"));
				objImg.attr("jqimg",objLi.eq(n).children("img").attr("data-big"));
			});
		})
	};
	proSlideRun(0);
}