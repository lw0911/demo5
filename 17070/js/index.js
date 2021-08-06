
  //  banner 轮播
  // $('#js_picList').unslider({
  //     autoplay: true,
  //     dots:true,
  //     delay:5000,
  //     fluid:true,
  //     arrows:true,
  //     prev: '',
  //     next: ''
  // });
  /*修改banner的bug*/
 //  var unslider04 = $('#b04').unslider({
	// 	autoplay: true,
 //        dots:true,
 //        delay:5000,
 //        fluid:false,
 //        arrows:false, 
	// }),
	// data04 = unslider04.data('unslider');
	// $('.unslider-arrow04').click(function() {
 //        var fn = this.className.split(' ')[1];
 //        data04[fn]();
 //    });

 var mySwiper = new Swiper('#b04', {
  autoplay: 5000,
  autoplayDisableOnInteraction : true,
  pagination : '.swiper-pagination',
  paginationClickable :true,
  prevButton:'.swiper-button-prev',
  nextButton:'.swiper-button-next',
  loop : true
 })
 
 

  // 1楼广告
  var nLen = $('#js_oneFloorPic ul > li').length;
  var optsOneFloor = {
      nav: false,
      infinite: true,
      speed:500,
      delay:5000,
      arrows: true,
      prev:'&#xe67c;',
      next:'&#xe667;'
  };
  if(nLen <=1 ){
      optsOneFloor.autoplay = false;
      optsOneFloor.arrows = false;
  }
  //$('#js_oneFloorPic').unslider(optsOneFloor);

  // 今日推荐
  /*$("#recommend_pic").scrollPic({
      scrollItem:".pictureList"
  });*/

//banner 子菜单显示隐藏
var x = 0;
var timer = null;
$(".left_info ul li").hover(function(ev){
    var that = $(this);
    //that.css('background','#fff');
    var menus = that.data('submenu');
	$('.allSubMenu').show();
    $('.SubMenu').hide();
    $('#SubMenu_'+menus).show();
    $('#SubMenu_'+menus).hover(function(){
		
        $('#SubMenu_'+menus).show();
        //that.css('background','#fff');
    },function(e){
        //that.css('background','rgba(255,255,255)');
        $('.SubMenu').hide();
		    $('.allSubMenu').hide();		
    });

    that.find('.left_info_title').css('color','#95c46e');

    var positions = that.position();

    if(500-positions.top < $('#SubMenu_'+menus).height())
    {
        $('#SubMenu_'+menus).css('top',500-$('#SubMenu_'+menus).height());
    }
    else{
        $('#SubMenu_'+menus).css('top',positions.top);
    }

},function(e){
    //$(this).css('background','rgba(255,255,255,0.5)');
    $(this).find('.left_info_title').css('color','#000');
    var that = $(this);
    var menus = that.data('submenu');
    $('#SubMenu_'+menus).hide();
    
      
	
});

//$('.left_info').on('mouseleave',function(){
//	timer = setTimeout(function(){
//		$(".left_info ul li").eq(x).removeClass('active');
//        $(".SubMenu").eq(x).removeClass('MenuHidden');
//	},200)
//});

//$(".allSubMenu").hover(function(){
//	if(timer){clearTimeout(timer);}
//	$(".left_info ul li").eq(x).addClass('active').siblings().removeClass('active');
//},function(){
//	if(timer){clearTimeout(timer);}
//	$(".left_info ul li").eq(x).removeClass('active');
//    $(".SubMenu").eq(x).removeClass('MenuHidden');
//});

function clickMenu(opts){
    this.$element= $('#'+ opts.id);
    var $li = this.$element.find('.js_tabList');

    if($li.length < 2){
        return false;
    }
    var $content = $('[data-tab_id="'+ opts.id +'"]').find('.js_tabItem');
    $li.eq(0).addClass('active');

    $li.on('click',function(){
        var nIndex = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $content.eq(nIndex).addClass('active').siblings().removeClass('active');
        $(this).attr('active',true).siblings().removeAttr('active');     
    })
    $li.mouseover(function(event) {
      $(this).removeClass('active').siblings().removeClass('active');
      var lists = $(this).data('l');
        var this_width = $(this).css('width');
        var this_left = $(this).position().left+10;
        $(this).siblings('.quebec').css({'left':this_left,'width':this_width});

    });
    $li.mouseleave(function(event) {
        $(this).removeClass('active').siblings().removeClass('active');
        if($(this).attr('active')){
            
        }
        else{
     
          for(var i=0;i<$li.length;i++)
          {
              if($($li[i]).attr('active')){
                 var lists =  $($li[i]).data('l')
                  var this_width = $($li[i]).css('width');
                  var this_left = $($li[i]).position().left+10;
                  $($li[i]).siblings('.quebec').css({'left':this_left,'width':this_width});
              }
          }


        }
    });
}

// $('.js_floor').each(function(index){
// 	new clickMenu({id:'js_tabFloor_' + index});
// })

//右侧导航条高度自动计算
  var height_border=0;
  for(var i=0;i<$('.border_B').length-1;i++)
  {
      height_border = height_border + $($('.border_B')[i]).height();

  }

  $('.border_B').last().find('.border_gray').css({'padding-bottom':'0px','height':(500-height_border-10)})

  /*new clickMenu({id:'js_tabOneFlor'});
  new clickMenu({id:'js_tabTwoFlor'});
  new clickMenu({id:'js_tabThirdFlor'});
  new clickMenu({id:'js_tabThirdFlor'});*/

  // 更新楼层
  	// $(function(){
  	// 	$(window).on('scroll',function(){
  	//         updateFloor();
  	// 	});
  	// 	var updateFloor = (function (){
   //          var $floorNav = $('#index_floor');
   //          var $floorList = $floorNav.find('li');
   //          var nHeight = $floorNav.offset().top-71;
   //          var $floors = $('.js_floor');
   //          return function(){
   //              // 循环判断现在落在哪个楼层
   //              var nScrollTop = $(document).scrollTop();
   //              if(nScrollTop>1334&&nScrollTop<2234)
   //              {
   //                   $floorList.eq(0).addClass('active').siblings().removeClass('active');
   //              }
   //              if(nScrollTop>2234&&nScrollTop<2834)
   //              {
   //                  $floorList.eq(1).addClass('active').siblings().removeClass('active');
   //              }
   //              if(nScrollTop>2834&&nScrollTop<3730)
   //              {
   //                  $floorList.eq(2).addClass('active').siblings().removeClass('active');
   //              }
   //              if(nScrollTop>3730)
   //              {
   //                  $floorList.eq(3).addClass('active').siblings().removeClass('active');
   //              }
   //              /*$floors.each(function(index){
   //                  if(nScrollTop >= $(this).offset().top) {
   //                      var $item = $floorList.eq(index);
   //                      $item.addClass('active').siblings().removeClass('active');
   //                  }
   //              });*/
   //              if(nScrollTop > nHeight){
   //                  $floorNav.addClass('fixed');
   //              } else {
   //                  $floorNav.removeClass('fixed');
   //                  $floorList.removeClass('active')
   //              }
   //          }
  	// 	  })();
  		
  		
  	// });
  	
  	//点击下一张广告
  	function nextAdvert(configId,num,count){
  		num =+ 1;
  		if(num>count){
  			num = count;
  		}
  		for(i=0;i<=count;i++){
  			$("#advert_"+configId+"_"+i).css("display","none");
  		}
  		$("#advert_"+configId+"_"+num).css("display","block");
  	}
  	
  	//点击下一张广告
  	function preAdvert(configId,num,count){
  		num = num - 1;
  		if(num<0){
  			num = 0;
  		}
  		for(i=0;i<=count;i++){
  			$("#advert_"+configId+"_"+i).css("display","none");
  		}
  		$("#advert_"+configId+"_"+num).css("display","block");
  	}

  $(".reg_size").click(function(){
      var d = dialog({
          skin: 'ui-dialog-shj',
          title: ' ',
          fixed: true,
          content: $('#js_reg_size')
      });
      d.showModal();
  });

  $(window).on('scroll',function(){
      if($(document).scrollTop() > 100){
          $('.floatSearch').css('display','block')
      }else{
          $('.floatSearch').css('display','none')
      }

  });

/*导航下拉*/
$(document).ready(function() {
        $("ul.nav li").hover(function(){
            $(this).addClass("on");

        },function(){
            $(this).removeClass("on");

        });
        $("ul.nav li").hover(function(){
            $(this).parent("ul").siblings("h3").addClass("choice");
        },function(){
            $(this).parent("ul").siblings("h3").removeClass("choice");
        });
        if ($("ul.nav li").find("ul") .html()!="") {
                $("ul.nav li").parent("ul").siblings("h3").append("<span class='sub'></span>");                
            }
});


$(function(){
	
	//初始化加载 现代简约 案例
	$(".case_box").load(htmlData(1));
	
	function htmlData(decorationStyleId){
		$.ajax({
			 type:'post',
			 url:ctx+'/designercase/ajaxHomeDisplaycase',
			 data:{decorationStyleId:decorationStyleId,websiteID:websiteID},
			 error:function(jqXHR, textStatus){
				 console.log(jqXHR);
				 console.log(textStatus);
			 },
			 success : function(data) {
				var dataHtml = [];
				dataHtml.push('<div class="case_left_box">');
				dataHtml.push('<div class="case_left_list case_top">');
				for(var i = 0 ; i< data.listDesignerCase.length;i++){
					if(i==0){
						dataHtml.push('<a href="'+ctx+'/designercase/detail_'+websiteID+'_'+data.listDesignerCase[i].id+'">');
						dataHtml.push('<img src="'+fileRandomFileUrl+data.listDesignerCase[i].homeDisplayPic+'">');
						dataHtml.push('</a>');
						dataHtml.push('<div class="case_tips_box">');
						dataHtml.push('<p style="margin-top: 10px;">');
						dataHtml.push('<span style="font-size: 22px">'+data.listDesignerCase[i].hotName+'</span>');
						dataHtml.push('<span style="font-size: 16px;">'+data.listDesignerCase[i].area+'平方</span>');
						dataHtml.push('<span style="font-size: 16px;">'+data.listDesignerCase[i].price+'万</span>');
						dataHtml.push('</p>');
						dataHtml.push('<p class="case_desc">'+data.listDesignerCase[i].designerCaseIdea+'</p>');
						dataHtml.push('</div>');
						dataHtml.push('</div>');
						dataHtml.push('</div>');
					}
					if(i==1){
						dataHtml.push('<div class="case_right_box">');
						dataHtml.push('<div class="case_right_top_box">');
						dataHtml.push('<div class="case_right_left_box">');
						
						dataHtml.push('<a href="'+ctx+'/designercase/detail_'+websiteID+'_'+data.listDesignerCase[i].id+'">');
						dataHtml.push('<img src="'+fileRandomFileUrl+data.listDesignerCase[i].homeDisplayPic+'">');
						dataHtml.push('</a>');
						dataHtml.push('<div class="case_tips_box_small">');
						dataHtml.push('<span class="case_tips_box_small_span1">'+data.listDesignerCase[i].hotName+'</span>');
						dataHtml.push('<span class="case_tips_box_small_span2">'+data.listDesignerCase[i].area+'平方</span>');
						dataHtml.push('<span class="case_tips_box_small_span2">'+data.listDesignerCase[i].price+'万</span>');
						dataHtml.push('</div>');
						dataHtml.push('</div>');
						if(data.listDesignerCase.length == 2){
							dataHtml.push('</div>');
							dataHtml.push('</div>');
						}
					}
					if(i==2){
						dataHtml.push('<div class="case_right_right_box">');
						dataHtml.push('<div class="case_right_right_top_box">');
						
						dataHtml.push('<a href="'+ctx+'/designercase/detail_'+websiteID+'_'+data.listDesignerCase[i].id+'">');
						dataHtml.push('<img src="'+fileRandomFileUrl+data.listDesignerCase[i].homeDisplayPic+'">');
						dataHtml.push('</a>');
						dataHtml.push('<div class="case_tips_box_small">');
						dataHtml.push('<span class="case_tips_box_small_span1">'+data.listDesignerCase[i].hotName+'</span>');
						dataHtml.push('<span class="case_tips_box_small_span2">'+data.listDesignerCase[i].area+'平方</span>');
						dataHtml.push('<span class="case_tips_box_small_span2">'+data.listDesignerCase[i].price+'万</span>');
						dataHtml.push('</div>');
						dataHtml.push('</div>');
						if(data.listDesignerCase.length == 3){
							dataHtml.push('</div>');
							dataHtml.push('</div>');
							dataHtml.push('</div>');
						}
					}
					if(i==3){
						dataHtml.push('<div class="case_right_right_bottom_box">');
						dataHtml.push('<div class="case_right_right_bottom_left right_bottom_ohver">');
						
						dataHtml.push('<a href="'+ctx+'/designercase/detail_'+websiteID+'_'+data.listDesignerCase[i].id+'">');
						dataHtml.push('<img src="'+fileRandomFileUrl+data.listDesignerCase[i].homeDisplayPic+'">');
						dataHtml.push('</a>');
						dataHtml.push('<div class="case_tips_box_small">');
						dataHtml.push('<span class="case_tips_box_small_span1">'+data.listDesignerCase[i].hotName+'</span>');
						dataHtml.push('<span class="case_tips_box_small_span2">'+data.listDesignerCase[i].area+'平方</span>');
						dataHtml.push('<span class="case_tips_box_small_span2">'+data.listDesignerCase[i].price+'万</span>');
						dataHtml.push('</div>');
						dataHtml.push('</div>');
						if(data.listDesignerCase.length == 4){
							dataHtml.push('</div>');
							dataHtml.push('</div>');
							dataHtml.push('</div>');
							dataHtml.push('</div>');
						}
					}
					if(i==4){
						dataHtml.push('<div class="case_right_right_bottom_right right_bottom_ohver">');
						
						dataHtml.push('<a href="'+ctx+'/designercase/detail_'+websiteID+'_'+data.listDesignerCase[i].id+'">');
						dataHtml.push('<img src="'+fileRandomFileUrl+data.listDesignerCase[i].homeDisplayPic+'">');
						dataHtml.push('</a>');
						dataHtml.push('<div class="case_tips_box_small">');
						dataHtml.push('<span class="case_tips_box_small_span1">'+data.listDesignerCase[i].hotName+'</span>');
						dataHtml.push('<span class="case_tips_box_small_span2">'+data.listDesignerCase[i].area+'平方</span>');
						dataHtml.push('<span class="case_tips_box_small_span2">'+data.listDesignerCase[i].price+'万</span>');
						dataHtml.push('</div>');
						dataHtml.push('</div>');
						
						dataHtml.push('</div>');
						dataHtml.push('</div>');
						dataHtml.push('</div>');
						dataHtml.push('</div>');
					}
					
				}
				
				$(".case_box").html(dataHtml.join(''));
			}
		 });
	}
	
	$(".designercase_decorationStyle_a").bind({
	    'mouseover' : function(){
	        var decorationStyleId = $(this).attr("decorationStyleId");
	        htmlData(decorationStyleId);
	    },
	    'mouseout' : function(){
	        //鼠标划开时的操作
	        //int = 0;
	        //divShow(int);
	    }
	});
	
});
