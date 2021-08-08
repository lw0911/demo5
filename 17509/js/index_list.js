$(function(){
	
	var handler = $('#tiles li');
	var handler_timer;
	

	
	$(window).load(function(){
		clearTimeout(handler_timer);
		check_handler();
	});
	
	$(window).resize(function(){
		clearTimeout(handler_timer);
		check_handler();
	});
	
	
	function check_handler()
	{
		var windowWidth = $(window).width();
        newOptions = {
        	flexibleWidth: '50%'
        };

      	if (windowWidth < 768 && windowWidth > 320) 
		{
        	newOptions.itemWidth = '320';
			newOptions.flexibleWidth = '100%';
			newOptions.offset = 30;
      	}
		else if (windowWidth < 321)
		{
			newOptions.itemWidth = '240';
			newOptions.flexibleWidth = '100%';
			newOptions.offset = 30;
		}
		else
		{
			newOptions.itemWidth = '320';
			newOptions.flexibleWidth = '50%';
			newOptions.offset = 30;
		}

		handler_timer = setTimeout(function(){
			handler.wookmark(newOptions);
		},1000);
	}
	

	
	
	
	 $('#tiles').imagesLoaded(function(){
		var options = {
				autoResize: true, // This will auto-update the layout when the browser window is resized.
				resizeDelay:320,
				container: $('#tiles'), // Optional, used for some extra CSS styling
				offset: 30, // Optional, the distance between grid items
				outerOffset: 3, // Optional, the distance to the containers border
				itemWidth: '320', // Optional, the width of a grid item
				flexibleWidth: '50%',
				//comparator: comparatorIsStamped,
			};

			handler.wookmark(options);
	 });
	
	function comparatorIsStamped(a, b){
      var $a = $(a), $b = $(b);
      if (!$a.hasClass('stamped-first') && $b.hasClass('stamped-first'))
        return 1;
      if ($a.hasClass('stamped-last') && !$b.hasClass('stamped-last'))
        return 1;
      if (!$a.hasClass('stamped-fourth') && $b.hasClass('stamped-fourth') && $a.index() >= 4)
        return 1;
      return -1;
    }
      
  

	
	
});	