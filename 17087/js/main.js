 $(function(){
	$(".hgroup a").click(function(){
	  $(this).siblings().removeClass('active');
	  $(this).addClass('active');
	  $('.listss div').removeClass('show');
      $('.listss div').eq($(this).index()).addClass('show');
   })

});