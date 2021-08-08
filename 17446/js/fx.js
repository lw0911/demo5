// JavaScript Document


 jQuery(function(){
				  
	var elem =jQuery("#zaixiankefu").get(0);
	elem.style.left = '-132px';
	elem.style.top = '250px';
	position.fixed(elem);
	
	jQuery("#zaixiankefu").mouseover(function(){
		jQuery(this).stop().animate({"left":"0px"},100).css({"z-index":"4"});	
		
	}).mouseleave(function(){
		jQuery(this).stop().animate({"left":"-132px"},100).css({"z-index":"1"});	
		
	});		


	var elem2 =jQuery(".totop").get(0);
	elem2.style.right = '40px';
	elem2.style.top = '350px';
	position.fixed(elem2);
	
	jQuery(".totop").click(function(){
		jQuery("body,html").animate({"scrollTop":"0px"});								
	})
	
	jQuery(window).scroll(function(){
		var windowscrolltop=jQuery(window).scrollTop();
		var documentheight=jQuery(document).height();
		var windowheight=jQuery(window).height();
	
			
		if(windowscrolltop > 600)
		{
			jQuery(".totop").css({"display":"block"});
		}
		else
		{
			jQuery(".totop").css({"display":"none"});
		}
		
	})
	
	
	if(jQuery("#fif").html()!=null)
	{
		jQuery("#fif").html(jQuery("#infonavconts").html());
		
		var documentwidth=jQuery(document).width();
		var documentheight=jQuery(window).height() - jQuery("#fif").outerHeight();
		var headwidth = jQuery(".top").width();
		var thiswidth = Math.ceil((documentwidth - headwidth)/2);
		
		var elem3 =jQuery("#fif").get(0);
		//elem2.style.left = thiswidth+31+'px';
		position.fixed(elem3);
		elem3.style.top = documentheight +'px';
		jQuery("#bottom").css({"height": jQuery("#fif").outerHeight()+"px"});
		

		
		jQuery(window).scroll(function(){
		
			var windowscrolltop=jQuery(window).scrollTop();
			var documentheight=jQuery(document).height();
			var windowheight=jQuery(window).height();
			var maxscrolltop=800;
			
			
			if(windowscrolltop > maxscrolltop)
			{
				jQuery("#fif").css({"display":"block"});
			}
			else
			{
				jQuery("#fif").css({"display":"none"});
			}
		})
	}
	
	
});

//fixed ie6
var position = function(){
      var isIE6 = !-[1,] && !window.XMLHttpRequest,
          html = document.getElementsByTagName('html')[0],
          dd = document.documentElement,
          db = document.body,
          dom = dd || db,
          getScroll = function(win){
              return {
                  left: Math.max(dd.scrollLeft, db.scrollLeft),
                  top: Math.max(dd.scrollTop, db.scrollTop)
                  };
          };
      if (isIE6 && document.body.currentStyle.backgroundAttachment !== 'fixed') {
          html.style.backgroundImage = 'url(about:blank)';
          html.style.backgroundAttachment = 'fixed';
      };
      
      return {
          fixed: isIE6 ? function(elem){
              var style = elem.style,
                  doc = getScroll(),
                  dom = '(document.documentElement || document.body)',
                  left = parseInt(style.left) - doc.left,
                  top = parseInt(style.top) - doc.top;
              this.absolute(elem);
              style.setExpression('left', 'eval(' + dom + '.scrollLeft + ' + left + ') + "px"');
              style.setExpression('top', 'eval(' + dom + '.scrollTop + ' + top + ') + "px"');
          } : function(elem){
              elem.style.position = 'fixed';
          },
          
          absolute: isIE6 ? function(elem){
              var style = elem.style;
              style.position = 'absolute';
              style.removeExpression('left');
              style.removeExpression('top');
          } : function(elem){
           elem.style.position = 'absolute';
          }
      };
  }();

