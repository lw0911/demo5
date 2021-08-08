//侧边导航效果
	function getElementTop(id){
		if(id){
			var actualTop = id.offsetTop;
		　　　　var current = id.offsetParent;
		　　　　while (current !== null){
			　　　　　　actualTop += current.offsetTop;
			　　　　　　current = current.offsetParent;
		　　　　	}
		　　　　		return actualTop;
		}
		};
		function getStyle(id,attr){
			if(id){
				return id.currentStyle?id.currentStyle[attr]:window.getComputedStyle(id,false)[attr];
			}
			};
		function setStyle(id,attrs){
			if(id){
				for(var attr in attrs){
						if(attr == "opacity"){
								id.style[attr] = attrs[attr];
								id.style.filter = "alpha(opacity="+attrs[attr]*100+")";
							}else if(attr == 'z-index'){
									id.style.zIndex = attrs[attr];
								}else{
										id.style[attr] = attrs[attr];
									}
					}
				}
			};
			function scrollH(){
					return document.body.scrollTop|| document.documentElement.scrollTop;
				};
			function docH(){
					return document.documentElement.scrollHeight || document.body.scrollHeight;
				};
			function winH(){
					return  document.documentElement.clientHeight || document.body.clientHeight;
				};
			function getobjHeight(id){
					return getStyle(id,"height");
				};
			var obj = document.getElementById("sideNav");
			var footer = document.getElementById("footer");
			var header = document.getElementById("header");
			var banner  = document.getElementById("banner");
			var objRight  = document.getElementById("contentRight");
			var footerH = parseInt(getobjHeight(footer),10);
			var header = parseInt(getobjHeight(header),10);
			var banner = parseInt(getobjHeight(banner),10);
			var absoluteTop = getElementTop(obj)-header-banner;
			function scrollNav(){
			var objTop =header+banner-98;
			var objHeight = parseInt(getobjHeight(obj),10);
			var objRightHeight = parseInt(getobjHeight(objRight),10);
			var minScrollTop = getElementTop(objRight)+objRightHeight-objHeight;
			console.log(minScrollTop)
			//var bindH =docH() - footerH-winH()-header-banner ;
			//console.log(scrollH()+"  "+docH()+" "+objHeight+"  "+footerH);
					 if(scrollH()> objTop){
							if(typeof document.body.style.maxHeight === "undefined"){
										setStyle(obj,{'position':"absolute",'top':scrollH()+'px'});
								}else if(scrollH() >= minScrollTop){
										setStyle(obj,{'position':"absolute",'top':objRightHeight-objHeight-10+'px'});
								}else{
										setStyle(obj,{'position':"fixed",'top':0});
							}
						}else{
								setStyle(obj,{'position':"absolute",'top':absoluteTop+'px'});
							}
			};
		scrollNav();
	window.onload = window.onscroll = window.onresize = function(){
			scrollNav();
}