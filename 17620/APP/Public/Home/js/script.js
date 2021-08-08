// JavaScript Document
$(function(){
	
	$('.pro_chnal li:last,.view_nav a:last').css('background','none')
	$('.ask_sel li:last').css('border-right','none')
	
	/*首页头部会员退出*/
	$('.header1 .user').hover(function(){
		
		$(this).find('.user_exit').animate({'top':'40px'},450)
		
		},function(){
			
			$(this).find('.user_exit').animate({'top':'76px'},450)
			
			})
			
	/*内页头部会员退出*/
	$('.header3 .user,.header2 .user').hover(function(){
		
		$(this).find('.user_exit').animate({'top':'14px'},450)
		
		},function(){
			
			$(this).find('.user_exit').animate({'top':'50px'},450)
			
			})		
	
	/*首页头部搜索*/
	$('.serch').hover(function(){
		
		$(this).find('.sub_ser').stop(true,false).show()
		
		},function(){
			
			$(this).find('.sub_ser').stop(true,false).hide()
			
			})	
			
	
	/*导航下拉*/
	$('.nav1>ul>li:last,.nav2>ul>li:last').find('.nav_name').css('background','none')		
	$('.nav1>ul>li').hover(function(){
		
			$(this).addClass('nav_this')
			$(this).children('.sub_nav').stop(true,false).slideDown(0)
		
		},function(){
			
			$(this).removeClass('nav_this')
			$(this).children('.sub_nav').stop(true,false).hide()
			
			
			})
			
	/*内页下拉*/
	$('.header3 .nav2>ul>li:last,.header3 .nav2>ul>li:last').find('.nav_name').css('background','none')		
	$('.header3 .nav2>ul>li').hover(function(){
		
			$(this).addClass('nav_this')
			$(this).children('.sub_nav').stop(true,false).slideDown(0)
		
		},function(){
			
			$(this).removeClass('nav_this')
			$(this).children('.sub_nav').stop(true,false).hide()
			
			
			})		
				
	/*三大栏目*/		
	$('.th_medIcon').click(function(){
		
		$(this).parents('li').find('.th_medPo').show()
		
		})		
		
	$('.th_mdClose').click(function(){
		
		$(this).parents('li').find('.th_medPo').hide()
		
		})	
		
	$('.th_mdClose').click(function(){
		
		$(this).parents('.ener_medTk').hide()
		
		})		
		
	/*job*/
	$('.job_top').click(function(){
		
		var job_child = $(this).parent('li').children('.job_down');
		
		if(job_child.is(":visible")){
			
			$(this).parent('li').removeClass('cur')
			job_child.slideUp(450)
			
			}
			else{
				
				$(this).parent('li').addClass('cur')
				
				job_child.slideDown(450).end().siblings().removeClass('cur').children('.job_down').slideUp(450);
				
				}
		
		})
		
	/*内页置顶*/
	var top_Vcro = function(){
			
			var warp_hg = 170;
			$(window).scroll(function(){
				
				var scroll_top = $(this).scrollTop()
				if(scroll_top>warp_hg){
					
					$('.warp_view').css('position','fixed')
					$('.chnal').css('margin-top','94px')
					
					}
					
					else{
						
						$('.chnal').css('margin-top','0')
						$('.warp_view').css('position','relative')
						
						}
						
				if(scroll_top>=50){
					
					$('#warp.header2').css('position','fixed')
					
					}	
					
					else{
						
						$('#warp.header2').css('position','relative')
						
						}	
				
				})
			
			}
			
		$(window).load(function(){
			
			top_Vcro()
			
			})	
			
	/*服务支持*/
	var $ser_this = $(".ask_sel li")
			 $ser_this.click(function(){
		 	$(this).addClass('cur').siblings().removeClass('cur')
	 	 	var ser_index = $ser_this.index(this);
	 		$(".ssk_show>div").eq(ser_index).show().siblings().hide();
					
		})		
	$('.ssk_show>div').click(function(){
		
		$(this).find('.ask_shlist li a').each(function(){
			
			$('.ask_tk').show()
			if($('.ask_tk').is(':visible')){
				
				$('.ask_tk .com_scroll').tinyscrollbar();	
				
				}
			
			})
		
		})	
		
	$('.ask_tkClose').click(function(){
		
		$('.ask_tk').hide()
		
		})	
		
	/*产品*/
	$('.pro_list li').hover(function(){
		
		$(this).find('.pro_show').animate({'top':'0'},700)
		$(this).find('.pro_poName').hide()
		
		
		},function(){
			
			$(this).find('.pro_show').animate({'top':'390px'},0)
			$(this).find('.pro_poName').show()
			
			})
		
	var $pro_this = $(".pro .news_chnal a")
			 $pro_this.hover(function(){
		 	$(this).addClass('cur').siblings().removeClass('cur')
	 	 	var pro_index = $pro_this.index(this);
	 		$(".pro_selShow>div").eq(pro_index).show().siblings().hide();
					
		})	
		
	/*新能源*/
	$('.pro_box>div').each(function(){
		
		$(this).find('.pro_Bdlist li:last').css('border-bottom','none')
		
		})	
		
	/*案例*/
	$('.case_Alist li').hover(function(){
		
		$(this).find('.case_Apo').animate({'top':'0'},450)
		
		},function(){
			
			$(this).find('.case_Apo').animate({'top':'178px'},0)
			
			})					
	
	/*登录弹框*/
	$('.lg_tkText').focus(function(){
		
		$(this).parent('.lg_tkTbox').addClass('cur')
		
		})	
	
	/*充电柱-城市*/
	$('#ener_2 .ener_ctlist li').hover(function(){
		
		$(this).find('.ener_ctName').animate({'bottom':'0'},450)
		
		},function(){
			
			$(this).find('.ener_ctName').animate({'bottom':'-42px'},450)
			
			})			
			
	/*个性页-公共效果*/
	var ener_scro = function(){
		
		var ener_wd2 = $('.ener_box2').height()
		var ener_wd3 = $('.ener_modList').height()
		var ener_wd4 = $('#ener_4_7').height()
		var ener_wd5 = $('.ener_wdx').height()
		var ener_wd6 = $('#ener_4_8').height()
		var ener_wd7 = $('#ener_4_9').height()
		var svg_wd2 = $('#ener_5_2').height()
		
		$(window).scroll(function(){
			
			var scro_top = $(this).scrollTop();
			
			if(scro_top>=2154+ener_wd2){
				
				$('.ener_elctop').animate({'top':'170px'},800)
				$('.ener_elcleft').animate({'left':'102px'},800)
				$('.ener_elcright').animate({'right':'102px'},800)
				
				}
				
			if(scro_top>=4154+ener_wd2){
				
				$('.ener_how1 .ener_hlist').animate({'bottom':'324px'},800)
				
				}	
				
			if(scro_top>=950){
				
				$('.ener_rzTop').animate({'top':'262px'},800)
				$('.ener_rzDown').animate({'bottom':'270px'},800)
				$('.ener_sbTop').animate({'top':'200px'},800)
				$('.ener_sbList').animate({'bottom':'230px'},800)
				
				}	
				
			if(scro_top>=3950+ener_wd3){
				
				$('.ener_stImg1').fadeOut(600)
				$('.ener_stImg2').fadeIn(600)
				
				}	
				
			if(scro_top>=4950+ener_wd3){
				
				$('.ener_how2 .ener_hlist').animate({'bottom':'324px'},800)
				
				}	
				
			if(scro_top>=770){
				
				$('.pro_d>div').each(function(){
					
					$(this).find('.pro_dchnal').css({'position':'fixed','top':'90px'})
					
					})
				
				}		
				else{
					
					$('.pro_d>div').each(function(){
					
					$(this).find('.pro_dchnal').css({'position':'static','top':'0'})
					
					})
					
					}
					
			if(scro_top>=5950+ener_wd4+ener_wd5){
				
				$('.ener_wdxClist').animate({'bottom':'82px'},800)
				
				}	
				
			if(scro_top>=7950+ener_wd4+ener_wd6+ener_wd7){
				
				$('.ener_curlist').animate({'bottom':'410px'},800)
				
				}	
				
			if(scro_top>=1100){
				
				$('.svg_teMove1').animate({'left':'240px'},800)
				$('.svg_teMove2').animate({'right':'240px'},800)
				
				}	
				
			if(scro_top>=1178+svg_wd2){
				
				$('.svg_gv').animate({'bottom':'146px'},800)
				
				}		
				
			if(scro_top>=2178+svg_wd2){
				
				$('.svg_gdSbox1').animate({'left':'0'},800)
				$('.svg_gdSbox2').animate({'right':'0'},800)
				
				}
				
			if(scro_top>=9178+svg_wd2){
				
				$('.ener_how3 .ener_hlist').animate({'bottom':'324px'},800)
				
				}										
			
			})
			
			
		
		}
		
	$(window).load(function(){
		
		ener_scro()
		
		})		
		
	var $ener_this = $(".ener_mlist li")
			 $ener_this.hover(function(){
		 	$(this).addClass('cur').siblings().removeClass('cur')
	 	 	var ener_index = $ener_this.index(this);
	 		$(".ener_mShow>div").eq(ener_index).show().siblings().hide();
					
		})
		
	/*光伏-模块*/
	$('.ener_modList li').hover(function(){
		
		$(this).find('.ener_modyy').animate({'opacity':'0.2'},600)
		$(this).find('.ener_modInfor').fadeTo(1000,1)
		
		},function(){
			
			$(this).find('.ener_modyy').animate({'opacity':'0.6'},600)
			$(this).find('.ener_modInfor').fadeTo(1000,0)
			
			})	
			
	/*储能-设备*/			
	$('.ener_sbList li').hover(function(){
		
		$(this).find('.ener_sbShow').animate({'top':'0'},450)
		
		},function(){
			
			$(this).find('.ener_sbShow').animate({'top':'380px'},450)
			
			})	
			
	/*产品参数*/
/*	var cs_position = $(function(){
		
		var cs_leng = $('.pro_dr .pro_drtab').length
		$('.pro_dr .pro_drtab').each(function(){
			
			var cs_hg = $(this).height()
			
			
			})
		
		})
		
	$(window).load(function(){
		
		cs_position()
		
		})	*/
		
	var $cs_this = $(".pro_t li")
		$cs_this.click(function(){
			if($(this).hasClass('pro_txx')){
					 
				$(this).parents('.pro_t').addClass('on')
					 
			}
			else{
					 
				$(this).parents('.pro_t').removeClass('on')
					 
		    }
		 	$(this).addClass('cur').siblings().removeClass('cur')
	 	 	var cs_index = $cs_this.index(this);
	 		$(".pro_d>div").eq(cs_index).show().siblings().hide();
					
		})	
		
	$('.pro_dchnal li').click(function(){
		
		$(this).addClass('cur').siblings().removeClass('cur')
		
		})	
		
	$('.pro_dricon ').click(function(){
		
		var $pro_child = $(this).parents('.pro_drtab').find('.pro_drRel')
		if($pro_child.is(':visible')){
			
			$(this).addClass('cur')
			$pro_child.hide()
			
			}
			
			else{
				
				$(this).removeClass('cur')
				$pro_child.show()
				
				}
			
			
		
		})		
	
	/*apf*/
	$('.apt_yy li').hover(function(){
		
		$(this).find('.apt_yyShow').fadeTo(1200,1)
		
		},function(){
			
			$(this).find('.apt_yyShow').fadeTo(1200,0)
			
			})	
	
	var $ener_mathis = $(".ener_maxSel a")
			 $ener_mathis.hover(function(){
		 	$(this).addClass('cur').siblings().removeClass('cur')
	 	 	var ener_maIndex = $ener_mathis.index(this);
	 		$(".ener_maxShow>div").eq(ener_maIndex).show().siblings().hide();
					
		})	
		
	$('.ener_medicon').click(function(){
		
		$('.ener_medTk').show()
		
		})			
	
	var $apf_rlThie = $("#ener_4_9 .news_chnal a")
			 $apf_rlThie.hover(function(){
		 	$(this).addClass('cur').siblings().removeClass('cur')
	 	 	var apf_rlIndex = $apf_rlThie.index(this);
	 		$(".apf_rlShow>div").eq(apf_rlIndex).show().siblings().hide();
					
		})	
	
	var $apf_subThie = $(".sub_apSel a")
			 $apf_subThie.hover(function(){
		 	$(this).addClass('cur').siblings().removeClass('cur')
	 	 	var apf_subIndex = $apf_subThie.index(this);
	 		$(".sub_apShow>div").eq(apf_subIndex).show().siblings().hide();
					
		})			
		
	$('.ener_lneShow li').hover(function(){
		
		$(this).find('.ener_lnpo').fadeTo(600,1)
		
		},function(){
			
			$(this).find('.ener_lnpo').fadeTo(600,0)
			
			})																					
	
	/*公共表单*/
	$('.com_text').focus(function(){
		
		$(this).addClass('cur')
		
		})	
	
	$('.com_text').blur(function(){
		
		$(this).removeClass('cur')
		
		})		
		
	/*底部微信*/
	$('.foot_sh3').hover(function(){
		
		$('.foot_wx').fadeIn(350)
		
		},function(){
			
			$('.foot_wx').fadeOut(350)
			
			})	
		
	/*在线留言*/
	$('.mess,.float_show3 a').click(function(){
		
		$('.yy,.float_onltk1').show()
		
		})		
	
	$('.float_tkclose1').click(function(){
		
		$('.yy,.float_onltk1').hide()
		
		})			
		
	/*地址*/
	$('.address').click(function(){
		
		$('.yy,.float_onltk2').show()
		$('.BMap_Marker.BMap_noprint').trigger('click')
		
		})		
	
	$('.float_tkclose2').click(function(){
		
		$('.yy,.float_onltk2').hide()
		
		})	
		
	/*左侧定位*/
	$('.float_po li').click(function(){
		
		$(this).addClass('cur').siblings().removeClass('cur')
		
		})		
	
	/*右侧浮动*/
	$('.float_show1').hover(function(){
		
		$(this).animate({'right':'0'},450)
		
		},function(){
			
			$(this).animate({'right':'-124px'},450)
			
			})	
			
	$('.float_show3').hover(function(){
		
		$(this).animate({'right':'0'},450)
		
		},function(){
			
			$(this).animate({'right':'-78px'},450)
			
			})			
	
	$('.float_show4').hover(function(){
		
		$(this).find('.float_wx').fadeIn(350)
		
		},function(){
			
			$(this).find('.float_wx').fadeOut(350)
			
			})			
	
						
	
	})