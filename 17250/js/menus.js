
         $(".nav_menu .nav_menu_item").hover(function(){
            $(this).find('ul').show();
          },function(){
            $(this).children('ul').stop().slideUp('fast');
          } );
        /*$(".nav_menu .nav_menu_item").hover(function(){
            $(this).children('ul').stop().slideDown('fast');
            console.info('down')
          },function(){
              $(this).children('ul').stop().slideUp('fast');
            console.info('up')
          } );*/
            //防止有些浏览器出现异常
           /* $(".nav").mouseleave(function(){
              $(".nav_menu" ).children('ul').stop().slideToggle('fast');
          } )
            $(".nav_submenu").mouseleave(function(){
                $(".nav_menu" ).children('ul').stop().slideUp('fast');
            } ) */

        var select_title=location.pathname+location.search;
         console.info(select_title)
        $(".nav_menu_item" ).each(function(){
            $(this ).find('a' ).each(function(){
                var href=$(this ).attr('href');
                if( href ){
                    //href=href.split('.')[0];
                    //console.info(href)
                    if(select_title.indexOf(href)>0){
                        $(this ).parents('li' ).find('.no_is_sub').addClass('active');
                    }
                }
            })
        })
        $(".nav_submenu-item" ).each(function(){
            $(this ).find('a' ).each(function(){
                var href=$(this ).attr('href');
                if( href ){
                    //href=href.split('.')[0];
                    if(select_title.indexOf(href)>0){
                        $(this ).addClass('active');
                    }
                }
            })
        })
