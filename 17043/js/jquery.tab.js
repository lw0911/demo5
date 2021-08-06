(function ($) {
    $.fn.jqtab = function(o){
        var o = jQuery.extend({
            active: 'click'
        }, o);
        
        function tabTo(wrapper,index){
            $('.gm_tabs_head a',wrapper).removeClass('current').eq(index).addClass('current');
			$('.pro_list_more',wrapper).attr("href",$('.gm_tabs_head a',wrapper).eq(index).attr("rel"));
            $('.gm_tabs_content',wrapper).removeClass('current').eq(index).addClass('current');
        }
            
        return this.each(function (index, wrapper){ 
            if(!wrapper._jqtab){
                var theads = $('.gm_tabs_head a',wrapper).each(function(i,a){
                    $(a).attr('tindex',i);
                });
            
                if(o.active == 'hover'){
                    theads.hover(function(){
                        tabTo(wrapper,parseInt($(this).attr('tindex')));
                    },function(){}).click(function(){
                        this.blur();
                        return false;
                    });    
                }else{
                    theads.click(function(){
                        tabTo(wrapper,parseInt($(this).attr('tindex')));
                        this.blur();
                        return false;
                    }); 
                }
            
                
                var tcontents = $('.gm_tabs_content',wrapper).each(function(i,c){
                    $(c).attr('tindex',i);
                });   
                
                var currentIndex = 0;
                if($('.gm_tabs_head a.current',wrapper).length > 1){
                    currentIndex = parseInt($('.gm_tabs_head a.current',wrapper).attr('tindex'));
                }
                
                tabTo(wrapper,currentIndex);
                
                wrapper.tabTo = function(index){
                    tabTo(wrapper,index);
                };
                wrapper._jqtab = true;
            }
        });    
    };
})(jQuery)