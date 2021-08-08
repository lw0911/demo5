$(function () {

	
	/* detailsPicZoom */
	if ($(".proviewbox").length) {
		var page = 0;
		var $ul = $(".ul_prothumb"),$li = $(".ul_prothumb li");
		var $liL = $li.length;
		var $bigShowBox = $(".probigshow");
		var str = '<div class="zoomplepopup"></div><div id="probig_preview" ><img  alt="" /></div>';
		$bigShowBox.append(str);

		var $pre = $("#probig_preview");
		var $preimg = $(".probigshow");
		var $zoom = $(".probigshow .zoomplepopup");
		var $link = $('#a_enlarge').attr('href');
		var $SPage = Math.floor($liL / 4),sLong = $li.width() * 4;
		var sto;

		function btnStyle() {
			if (page == 0) {$('.span_prev').addClass('span_prevb');} else {$('.span_prev').removeClass('span_prevb');}
			if (page == $SPage) {$('.span_next').addClass('span_nextb');} else {$('.span_next').removeClass('span_nextb');}
		};

		if (page < 1){
			var _src = $(".a_probigshow:first").attr("ref");
			$preimg.attr("src", _src);
		}else{
			$preimg.attr("src", $li.find("a").attr("href"));
		}
		btnStyle();

		//$li.overOnlyClass("now");
		$('#a_enlarge').attr('href',$link+'#'+'0');

		$(".span_prev").click(function() {
			if (page > 0) {page--;$(".ul_prothumb").animate({left: "+=" + sLong});};
			btnStyle();
		});
		$(".span_next").click(function() {
			if (page < $SPage) {page++;$(".ul_prothumb").animate({left: "-=" + sLong});};
			btnStyle();
		});
		window.lichange = function (indx) {
			var obj = $li.eq(indx);
			
			
			$preimg.find("img").attr("src",(obj.find("a").attr("href")));
			$preimg.find("a").attr("href",(obj.find("a").attr("href")));
			
			$(".a_probigshow img").attr("src", obj.find("img").attr("longdesc"));
			$('#a_enlarge').attr('href',$link+'#'+indx);
			$li.removeClass('now').eq(indx).addClass('now');
		}
		$li.mouseenter(function() {
			var indx = $li.index($(this));
			sto = setTimeout('lichange('+indx+')',150);
		}).mouseleave(function () {
			clearTimeout(sto);
			})	.click(function() {
			var indx = $li.index($(this));lichange(indx);
			return false;
		});
	};
});

