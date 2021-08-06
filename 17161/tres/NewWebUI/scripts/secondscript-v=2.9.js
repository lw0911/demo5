//;(function(){
//    // 选择当前栏目选中状态
//    var twoTitArr = [
//        //产品技术 
//        ['Enterprise_product','smart-product','software','H3Cloud','Big_Data','Router','Switches','Wlan','Security','New_network','H3C_Soft','Servers','Storage','IoT','Integrated_system','Magic','Smart_central','Smart_Home','ComwareV5','ComwareV7','H3Cloud_OS','Green_OS'],
//        // 解决方案
//        ['Technology_solution','Industry_solution','SMB_solution','Big_net','Big_data','Big_security','Cloud_calculation','Operational','Finance','Govermment','Higher_Education','Energy','Electricity','Traffic','Big_Medical','Manufacturing','TV_Solution','Media.html','GovermmentSMB','Big_MedicalSMB','cctv','Business_Chain','small business','smart_teaching','WiNet','Hotel','netbar'],
//        // 技术咨询服务
//        ['top_level_planning','IT_application','Date_center','The_top_design','IT_strategic_planning','Industrial_innovation','Industry_consultancy','Architecture_design','Plan_implementation','Data_center_consulting','Data_center_design','Data_center_implementation','Data_center_validation_and_operation'],
//        // 产品支持与服务
//        ['Technical_service_products','Document','Policy_dynamics','onlie_service','Basic_services','Application_management_and_testing_services','Integration_architecture_services','U-center_intelligent_operation_plan','software_Download','Document_Center','PorductMaintanInfo','Service_Notice','Service_policy','Service_News','Channel_Service','Terms_of_service','Product_Periods'],
//        // 新华三
//        ['Training'],
//        // 合作伙伴
//        ['Become_partners','has_become_partners','partner_resource_centre','Technology_and_product_alliance','Join_H3C','Technic_Service_Attestation','Partner_PreSales_Authentication','Channel_policy','Business_SMB_Area','New_IT_alliance','Cloud_alliance','Big data_alliance','security_alliance'],
//        // 关于我们
//        ['company_dynamic','contact_H3C','company_info','Company_Introduce','Messagefrompresident','Management','Company_history','Focus_Moment','Company_culture','Company_video','Company_News','Media_Broadcast','Company_Event','Headquarters','Office','Media_Contact','Feedback','ProAnn']
//    ];
//    var text_url = window.location.href;
//    for(var i in twoTitArr){
//        for(var j in twoTitArr[i]){
//            if(text_url.indexOf(twoTitArr[i][j]) !== -1){
//                $('.headPc .navBox .nav').eq(i).find('a').addClass('acthover');
//            }
//        }
//    }
//})()
;(function(){
    // 添加类名
    if($('.secondDiv .SMBsolutionList').length > 0 && $('html,body').width() > 768){
        for (var i=0;i<$('.SMBsolutionList li').length;i++) {
            if((i+1)%2 == 0){
                $('.SMBsolutionList li').eq(i).addClass('SMB_fff');
            } else {
                $('.SMBsolutionList li').eq(i).addClass('SMB_f5f');
            }
        } 
    }
})()
;(function(){
    // 限制字数
    function lengthCile(obj,num){
        obj.each(function(i,e){
            $(e).css({height:'auto','max-height':'none'});
            if($(e).text().length > num){
                $(e).text($(e).text().slice(0,num)+'...');
            }
        })
    }
    lengthCile($('#newsWrap .proJouConListTextp'),60);//新闻资讯
    lengthCile($('.secondDiv .secondSolveConListText p'), 60);// 成功案例
    lengthCile($('#Operational.secondDiv .techSolveConListText p'), 60);// 成功案例
    lengthCile($('.secondDiv .indSoluListText'), 60);// 企业级产品产品分类字数限制
    lengthCile($('#top_level_planning .serviceLevelConImgp'), 60);// 服务产品分类字数限制
    lengthCile($('.become_partners.secondDiv .secondSolveConListText h6'), 30);// 渠道新闻字数限制
    lengthCile($('#BaseSearch .searchResultList li .searchResultListTex'), 150);// 搜索页面描述字数限制
    lengthCile($('#Focus_Moment .focusListBox li .focusListBoxH6'), 120);// 搜索页面描述字数限制
    lengthCile($('#Company_history .hist_boxListBox .histDot'), 100);// 发展历程字数限制
    // 模板页面部分字数限制
    lengthCile($('#SetTemplate #succWrapPC .techSolveConListText p,#SetTemplate  .technicalSolve:not(.newSloveBox) .techSolveConListText p'), 60);// 解决方案\成功案例组件
    lengthCile($('#SetTemplate #succWrapH5 .techH5SuccText p,#SetTemplate .techH5Succ.succTechH5:not(.newSloveBox) .techH5SuccText p'), 60);// 解决方案\成功案例组件
    lengthCile($('.newSloveBox .techSolveConListText p'),180);
    // 添加限制字数
    lengthCile($('#Operational .techH5SuccCon .swiper-slide .techH5SuccText p'), 120);
})()
;(function(){
    $('#crumbs a,.solutionGoList a').on({
        mouseenter:function(){
            $(this).addClass('fontRedA');
        },
        mouseleave:function(){
            $(this).removeClass('fontRedA');
        }
    })
    // pc端查看全部样式改变
    $('.secondGoMore.gotoFontred,#SetTemplate .SMBsolutionListGo').each(function(i,e){
        $(e).on({
            mouseenter:function(){
                $(e).addClass('fontRed');
                $(e).find("img").attr("src","/cn/tres/NewWebUI/images/solution/proJouConListTextGoHover.png");
            },
            mouseleave:function(){
                $(e).removeClass('fontRed');
                $(e).find("img").attr("src","/cn/tres/NewWebUI/images/solution/proJouConListTextGo.png");
            }
        })
    })
    $('#newsWrap li,.techapplicConList li,#New_IT_alliance .SMBsolutionListGo').on({
        mouseenter:function(){
            $(this).find('.gotoFontred').addClass('fontRed');
            $(this).find('.gotoFontred').find("img").attr("src","/cn/tres/NewWebUI/images/solution/proJouConListTextGoHover.png");
        },
        mouseleave:function(){
            $(this).find('.gotoFontred').removeClass('fontRed');
            $(this).find('.gotoFontred').find("img").attr("src","/cn/tres/NewWebUI/images/solution/proJouConListTextGo.png");
        }
    })
})()
// 搜索页面js
;(function(){
    if (window.navigator.userAgent.indexOf("MSIE")>=1) {
        $('input:radio').css({'border':0});
    }
    $('.secondDiv .extListMore .extListMoreIcon').click(function(){
        var list = $(this).parent().next('.extListMoreList');
        if($(this).attr('data-drap') == 'false'){
            list.css({height:'auto'});
            $(this).attr('data-drap','true');
            $(this).find('.moreIconadd').hide();
            $(this).find('.moreIconslice').show();
            $(this).find('span').text('显示头5条...');
        } else if($(this).attr('data-drap') == 'true') {
            list.css({height:'165px'});
            $(this).attr('data-drap','false');
            $(this).find('.moreIconadd').show();
            $(this).find('.moreIconslice').hide();
            $(this).find('span').text('显示更多...');
        }
    })
    $('.secondDiv #txtSearch').focus(function(){
        $('.secondDiv .searchdrapList').slideToggle('fast');
    }).blur(function(){
        $('.secondDiv .searchdrapList').slideToggle('fast');
    })
    $('.secondDiv .searchdrapList').delegate('li','click',function(){
        $('.secondDiv #txtSearch').val($(this).text())
    })
    // 高级搜索效果代码
    $('.secondDiv .inputTextBox .cheseInputChn').click(function(){
        if($(this).attr('data-input') == 0){
            $('.secondDiv .cheseListOne').show();
            $('.secondDiv .cheseListTwo').hide();
        } else if($(this).attr('data-input') == 1) {
            $('.secondDiv .cheseListOne').hide();
            $('.secondDiv .cheseListTwo').show();
        }
    })
    $('.secondDiv .extListMoreIcon').on({
        mouseenter:function(e){
            $(this).addClass('redactive');
            $(this).find(".moreIconadd").attr("src","/cn/tres/NewWebUI/images/secondAll/searchextListmporeaddhover.png");
            $(this).find(".moreIconslice").attr("src","/cn/tres/NewWebUI/images/secondAll/searchextListmporeaslichover.png");
        },
        mouseleave:function(e){
            $(this).removeClass('redactive');
            $(this).find(".moreIconadd").attr("src","/cn/tres/NewWebUI/images/secondAll/searchextListmporeadd.png");
            $(this).find(".moreIconslice").attr("src","/cn/tres/NewWebUI/images/secondAll/searchextListmporeaslic.png");
        }
    })
})()
// 二级页面整体js包围函数
var secondscriptsJS = function(){
    // 判断ie8条件
    var ie8Falg = false;//默认不是ie8
    if($('body').hasClass('ie8')){
        ie8Falg = true;
    }
    if($('#newsWrap').length>0){
        $('#newsWrap .proJouConList li').each(function(i,e){
            if((i+1)%2 !== 0){
                $(e).css({'margin-right':'5%'})
            }
        })
    }
    // 判断高度变化公共函数
    function isliHight(father, boy){
        $(father).find(boy).css({height: 'auto'});
        var heightarr = [],lastHeight = $(father).find(boy).eq(0).height();
        $(father).find(boy).each(function(i,e){
            var _height = $(e).height();
            heightarr.push(_height);
        })
        for(var i = 1; i < heightarr.length; i ++){
            if(heightarr[i] > lastHeight){
                lastHeight = heightarr[i];
            }
        }
        $(father).find(boy).css({height:lastHeight + 4 + 'px'});
    }
    $('.protechSolveGoMore.gotoFontred,.secondGoMore.gotoFontred').each(function(i,e){
        $(e).on({
            mouseenter:function(){
                $(e).addClass('fontRed');
                $(e).find("img").attr("src","/cn/tres/NewWebUI/images/solution/proJouConListTextGoHover.png");
            },
            mouseleave:function(){
                $(e).removeClass('fontRed');
                $(e).find("img").attr("src","/cn/tres/NewWebUI/images/solution/proJouConListTextGo.png");
            }
        })
    })
    $('.become_partners.secondDiv ul.shandowHoverall li').each(function(i,e){
        $(e).on({
            mouseenter:function(){
                $(e).find('.more').css('color','#e60213');
                $(e).find(".more").find('img').attr("src","/cn/tres/NewWebUI/images/solution/proJouConListTextGoHover.png");
            },
            mouseleave:function(){
                $(e).find('.more').css('color','#333');
                  $(e).find(".more").find('img').attr("src","/cn/tres/NewWebUI/images/solution/proJouConListTextGo.png");
            }
        })
    })
    $('.SMBsolutionList li').on({
        mouseenter:function(){
            $(this).find('.SMBsolutionListGo').addClass('fontRed');
            $(this).find('.SMBsolutionListGo').find("img").attr("src","/cn/tres/NewWebUI/images/solution/proJouConListTextGoHover.png");
        },
        mouseleave:function(){
            $(this).find('.SMBsolutionListGo').removeClass('fontRed');
            $(this).find('.SMBsolutionListGo').find("img").attr("src","/cn/tres/NewWebUI/images/solution/proJouConListTextGo.png");
        }
    })
    $('.SMBsolutionList li .SMBsolutionListGo a').on('touchend',function(){
        $(this).find("img").attr("src","/cn/tres/NewWebUI/images/solution/proJouConListTextGoHover.png");
    })
    // 图文消息合并js函数
    // 行业解决方案函数
    function industry_solution(){
        var timer;
        if(!ie8Falg){
             var swiperSolve = new Swiper('.swiper-containerSolu',{
                    grabCursor: true,
                    pagination: '.industrySoluConH5Btn',
                    paginationClickable: true
            });
        }
        var setHeight = function(){
            if($('html,body').width() > 768){
                isliHight('.secondSolveConList','li');//成功案例PC端高度调节
            }else{
                ismobilefalg = false;
                $('.secondSolveConList li').css({height:'auto'});
            }
            isliHight('.industrySoluList','li');//行业解决方案高度调节
            isliHight('.industrySoluConH5Box','.indSoluListText');//行业解决方案高度调节
            isliHight('.industrySoluConH5Box','.swiper-slide');
            clearTimeout(timer);
        }
        timer = setTimeout(setHeight,200);
        if(!ie8Falg){
            window.addEventListener("resize", function() {
                clearTimeout(timer);
                timer = setTimeout(setHeight,200);
                swiperSolve.onResize();
            }, false);
        } else {
            window.onresize = function(){
                clearTimeout(timer);
                timer = setTimeout(setHeight,200);
            }
        }
    }
    // SMB解决方案
    function SMB_solution(){
        // 公共js，图文形式引用
        ;(function(){
            var timer,isPCfalg = false,lengthfalg = true;
            var swiperSolve;
            $('.SMBsolutionList li').length>6?'':lengthfalg=false;
            var setHeight = function(){
                if($('html,body').width() > 768){
                    if($('#newsWrap').length>0){
                        isliHight('#newsWrap .proJouConList','li:eq(0),li:eq(1)');
                        isliHight('#newsWrap .protechH5EnterList','li:eq(2),li:eq(3)');
                    }
                    if(isPCfalg){
                        $('.SMBsolutionList').removeClass('swiper-wrapper').attr('style','');
                        $('.SMBsolutionList li').removeClass('swiper-slide').css({width:'100%'});
                        if(!ie8Falg){
                            swiperSolve.destroy();
                            swiperSolve = null;
                        }
                        ulHeight();
                        lengthfalg?isdrag():'';
                        lengthfalg?$('.SMBsolutionList li').css({height:'232px'}):$('.SMBsolutionList li').css({height:'auto'});
                    }
                    isPCfalg = false;
                }else{
                    if($('#newsWrap').length>0){
                        $('#newsWrap .proJouConList li').css({height: 'auto'});
                    }
                    if(!isPCfalg){
                        $('.SMBsolutionList').addClass('swiper-wrapper');
                        $('.SMBsolutionList li').addClass('swiper-slide').removeClass('SMB_fff').removeClass('SMB_f5f');
                        if(!ie8Falg){
                            swiperSolve = new Swiper('.swiper-containerSMB',{
                                    grabCursor: true,
                                    pagination: '.SMBsolutionH5Btn',
                                    paginationClickable: true
                            }); 
                        }
                        $('.SMBsolutionList').css({height:'auto'});
                    }
                    isPCfalg = true;
                    isliHight('.SMBsolutionList','li');//SMB解决方案高度调节
                }
                // 个别单独添加内容
                isliHight('.secondSolveConList','li');//成功案例PC端高度调节
                clearTimeout(timer);
            }
            timer = setTimeout(setHeight,200);
            if(!ie8Falg){
                window.addEventListener("resize", function() {
                    clearTimeout(timer);
                    timer = setTimeout(setHeight,200);
                }, false);
            } else {
                window.onresize = function(){
                    clearTimeout(timer);
                    timer = setTimeout(setHeight,200);
                }
            }
            // 设置ul高度
            var openFlag = false;
            function ulHeight(){
                for (var i=0;i<$('.SMBsolutionList li').length;i++) {
                    if((i+1)%2 == 0){
                        $('.SMBsolutionList li').eq(i).addClass('SMB_fff');
                    } else {
                        $('.SMBsolutionList li').eq(i).addClass('SMB_f5f');
                    }
                } 
                lengthfalg?$('.SMBsolutionList').css({height:'936px'}):'';
            }
            if($('html,body').width() > 768){
                setTimeout(ulHeight, 300);
            }
            // 记录原状态
            function isdrag(){
                if(!openFlag){   
                    $('.SMBsolutionList').css({height: '936px'});
                    $('.SMBListopen span').text('展开更多');
                    $('.openGo').show();
                    $('.closeGo').hide();
                } else {
                    $('.SMBsolutionList').css({height:'auto'});
                    $('.SMBListopen span').text('点击收起');
                    $('.openGo').hide();
                    $('.closeGo').show();
                }
            }
            $('.SMBListopen').click(function(){
                if(!openFlag){   
                    openFlag = true;
                    $('.SMBsolutionList').css({height:'auto'});
                    $('.SMBListopen span').text('点击收起');
                    $('.openGo').hide();
                    $('.closeGo').show();
                } else {
                    openFlag = false;
                    $('.SMBsolutionList').css({height: '936px'});
                    $('.SMBListopen span').text('展开更多');
                    $('.openGo').show();
                    $('.closeGo').hide();
                }
            })
        })()
    }
    // 新顶层IT规划
    function top_level_planning(){
        var timer,isPCgoto= false;
        function setHeight(){
            clearTimeout(setHeight);
            isliHight('.serviceLevelConList','li');
            isliHight('.secondSolveConList','li');//成功案例PC端高度调节
            isliHight('.secondSolveConList li','h6');
            if($('html,body').width() < 768 && !isPCgoto){
                for(var i=0; i < $('.secondDiv.onlie_service .serviceLevelConList li').length; i ++){
                    if(i%2 == 0){
                        $('.secondDiv.onlie_service .serviceLevelConList li').eq(i).css({'margin-right':'2.856%'});
                    }
                }
                isPCgoto = true;
            } else if($('html,body').width() > 768) {
                $('.secondDiv.onlie_service .serviceLevelConList li').css({'margin-right':'0'});
                isPCgoto = false;
            }
        }
        setTimeout(setHeight,200);
        if(!ie8Falg){
            window.addEventListener("resize", function() {
                clearTimeout(timer);
                timer = setTimeout(setHeight,200);
            }, false);
        } else {
            window.onresize = function(){
                clearTimeout(timer);
                timer = setTimeout(setHeight,200);
            }
        }
    }
    // 新一代数据中心
    function Date_center(){
        var timer;
        function setHeight(){
            isliHight('.secondSolveConList','li');//成功案例PC端高度调节
            clearTimeout(setHeight);
        }
        setTimeout(setHeight,200);
        if(!ie8Falg){
            // 新一代数据swiper
            var mySwiperH5Data = new Swiper('#Date_center .swiper-containerDataH5',{
                grabCursor: true,
                paginationClickable: true,
                nextButton: '#Date_center .swiper-button-next',
                prevButton: '#Date_center .swiper-button-prev'
            })
            window.addEventListener("resize", function() {
                clearTimeout(timer);
                timer = setTimeout(setHeight,200);
                mySwiperH5Data.onResize();
            }, false);
        } else {
            window.onresize = function(){
                clearTimeout(timer);
                timer = setTimeout(setHeight,200);
            }
        }
    }
    // 文档与软件下载函数
    function Document(){
        // 添加数据
        var oneArrr = [];//控制第一列显示数据
        var twoArrr = [];//控制第二列显示数据
        var threeArrr = [];//控制第三列显示数据
        for(var i = 0; i < $('.kerwordList li').length; i ++){
            if((i+1)%4 == 0){
                $('.kerwordList li').eq(i).css({'margin-right':0});
            }
        }
        $('.kerwordList li').click(function(){
            $('.searchDocumentInput').val($(this).text())
        })
        $('.documentWrapNav li').eq(2).css({float:'right'});
        //点击切换的时候不断的请求数据
        // 添加一级数据
        //for(var i = 0; i < 20; i ++){
        //    oneArrr.push('云计算'+i)
        //}
        //// 添加二级数据
        //for(var i = 0; i < 20; i ++){
        //    twoArrr.push('二级云计算'+i)
        //}
        //// 添加三级数据
        //for(var i = 0; i < 20; i ++){
        //    threeArrr.push({name:'三级云计算'+i,href:'#'})
        //}
        var actnum = 0,actTwo = 0,actThr = 0;
        //选择一级栏目 请求二级三级数据
        $('.documentWrapNav li').click(function(){
            if($(this).index() == 2){
                $('.documentWrapCon').hide();
                $('.documentWrapSearch').show();
            } else {
                actnum = 0;
                actTwo = 0;
                actThr = 0;
                $('.documentWrapCon').show();
                $('.documentWrapSearch').hide();
                actnum = $(this).index();
                dataChange(actnum);
                //dataTwoChange(actTwo);
            }
            $('.documentWrapNav li').removeClass('active');
            $(this).addClass('active');
        })
        // 点击一级下二级栏目 请求三级数据
        //$('.WrapConBoxone').delegate('li','click',function(){
        //    actTwo = $(this).index();
        //    dataTwoChange(actTwo);
        //})
        //// 点击三级栏目请求四级数据
        //$('.WrapConBoxtwo').delegate('li','click',function(){
        //    actThr = $(this).index();
        //    dataThreChange(actThr);
        //})
        // 修改数据函数
        function dataChange(index){ 
            $('.documentWrapList').empty();
            if (index == 0) {
                getNextLayerCategory(33538, 3); getNextLayerCategory(33589, 4);
            }
            else if (index == 1) {
                getNextLayerCategory(33539, 3); getNextLayerCategory(33690, 4);
            }
            //var datali = '';
            //for(var i in oneArrr){
            //    datali += '<li title="'+oneArrr[i]+'">'+oneArrr[i]+'<img src="/cn/tres/NewWebUI/images/secondAll/documentlistbg.png" class="listgoto" /></li>'
            //}
            //$('.WrapConBoxone ul').append(datali);
        }
        //function dataTwoChange(index){ 
        //    $('.WrapConBoxtwo ul,.WrapConBoxthr ul').empty();
        //    var datali = '';
        //    for(var i in twoArrr){
        //        datali += '<li title="'+twoArrr[i]+'">'+twoArrr[i]+'<img src="/cn/tres/NewWebUI/images/secondAll/documentlistbg.png" class="listgoto" /></li>'
        //    }
        //    $('.WrapConBoxtwo ul').append(datali);
        //    $('.WrapConBoxone ul li').removeClass('hoveract');
        //    $('.WrapConBoxone ul li').eq(actTwo).addClass('hoveract');
        //}
        //function dataThreChange(index){ 
        //    $('.WrapConBoxthr ul').empty();
        //    var datali = '';
        //    for(var i in threeArrr){
        //        datali += '<li title="'+threeArrr[i].name+'"><a href="'+threeArrr[i].href+'">'+threeArrr[i].name+'</a></li>'
        //    }
        //    $('.WrapConBoxthr ul').append(datali);
        //    $('.WrapConBoxtwo ul li').removeClass('hoveract');
        //    $('.WrapConBoxtwo ul li').eq(actThr).addClass('hoveract');
        //}
        //dataChange(actnum)
        //dataTwoChange(actTwo);
        getNextLayerCategory(33538, 3);
        getNextLayerCategory(33589, 4);
    }
    // 合作伙伴资源中心
    function partner_resource_centre(){
        var timer,clickfalg = false;
        if($('html,body').width() < 768){
            for (var i=0;i<$('.SMBsolutionList li').length;i++) {
                if((i+1)%2 == 0){
                    $('.SMBsolutionList li').eq(i).addClass('SMB_fff');
                } else {
                    $('.SMBsolutionList li').eq(i).addClass('SMB_f5f');
                }
            }
        }
        var setHeight = function(){
            if($('html,body').width() < 768){
                if(!clickfalg){
                    $('.company_info .SMBsolutionList').css({height:$('.company_info .SMBsolutionList li').eq(0).height()+$('.company_info .SMBsolutionList li').eq(1).height()+$('.company_info .SMBsolutionList li').eq(2).height()+55+'px'})
                } else {
                    $('.company_info .SMBsolutionList').css({height:'auto'});
                }
            } else {
                $('.company_info .SMBsolutionList').css({height:'auto'});
            }
            isliHight('.company_info .proVidConList','li')
        }
        setTimeout(setHeight,200);
        if(!ie8Falg){
            // 视频swiper
            var mySwiperH5Vid = new Swiper('.secondDiv.company_info .swiper-containerVidH5',{
			    grabCursor: true,
			    paginationClickable: true,
			   	pagination: '.secondDiv.company_info .protechH5VidBtnBox'
			})
            window.addEventListener("resize", function() {
                clearTimeout(timer);
                timer = setTimeout(setHeight,200);
                if($('.secondDiv.company_info .swiper-containerVidH5').length > 0){
                    mySwiperH5Vid.onResize();
                }
            }, false);
        } else {
            window.onresize = function(){
                clearTimeout(timer);
                timer = setTimeout(setHeight,200);
            }
        }
        $('.H5seeMore').click(function(){
            if(clickfalg){
                $('.company_info .SMBsolutionList').css({height:$('.company_info .SMBsolutionList li').eq(0).height()+$('.company_info .SMBsolutionList li').eq(1).height()+$('.company_info .SMBsolutionList li').eq(2).height()+55+'px'});
                $('.company_info .H5seeMore span').find('img').attr('src','/cn/tres/NewWebUI/images/secondAll/openListmore.png');
                $('.company_info .H5seeMore span span').text('展开更多');
                clickfalg = false;
            } else {
                $('.company_info .SMBsolutionList').css({height:'auto'});
                $('.company_info .H5seeMore span').find('img').attr('src','/cn/tres/NewWebUI/images/secondAll/closeListmore.png');
                $('.company_info .H5seeMore span span').text('点击收起');
                clickfalg = true;
            }
        })
    }
    // 判断执行
    var classNameArr = ['#industry_solution','#SMB_solution','#technology_solution','#top_level_planning','#Date_center','#IT_application','#software','#smart-product','#Enterprise_product','#Document','#partner_resource_centre'];
    var jsFunctionArr = [industry_solution,SMB_solution,SMB_solution,top_level_planning,Date_center,SMB_solution,SMB_solution,SMB_solution,industry_solution,Document,partner_resource_centre];
    for(i = 0; i < classNameArr.length; i ++){
        if($(classNameArr[i]).length > 0){
            jsFunctionArr[i]();
        }
    }
}
// 三级页面相关js
;(function(){
    // 办事处js
    $('.officeNav li').click(function(){
        $('.officeNav li').removeClass('officeAct');
        $(this).addClass('officeAct');
        $('.officeNav li').find('i').show();
        $(this).prev().find('i').hide();
        $(this).find('i').hide();
        ulShow($(this).index());
    })
    // 切换列表
    function ulShow(index){
        $('.officeListCon .officeListUl').removeClass('offlisUlShow');
        $('.officeListCon .officeListUl').eq(index).addClass('offlisUlShow');
        $('.pageNumber.officeListUl').removeClass('offlisUlShow');
        $('.pageNumber.officeListUl').eq(index).addClass('offlisUlShow');
    }
    // 公司总部判断显示地图
    function BJmap(){
        var map = new BMap.Map("BJmap");   
        map.centerAndZoom(new BMap.Point(116.482102,39.998058), 20);
        map.enableInertialDragging();
        map.enableScrollWheelZoom(true);     
        var pt = new BMap.Point(116.482102,39.998058);
        var myIcon = new BMap.Icon("/cn/tres/NewWebUI/images/threeAll/markers_xhr.png", new BMap.Size(19,24));
        var marker = new BMap.Marker(pt,{icon:myIcon}); 
        map.addOverlay(marker);

        var map1 = new BMap.Map("HZmap");   
        map1.centerAndZoom(new BMap.Point(120.204266,30.190154), 20);  
        map.enableInertialDragging();
        map1.enableScrollWheelZoom(true);     
        var pt1 = new BMap.Point(120.204266,30.190154);
        var marker1 = new BMap.Marker(pt1,{icon:myIcon});
        map1.addOverlay(marker1);             
    }
    if($('#Headquarters').length > 0){
        BJmap();
    }
})()
// 三级页面控制高度js
var threeScriptJs = function(){
    $('#SetTemplate #newsWrap .proJouConList li:last').addClass('journBoxact');
    var ie8Falg = false,timer;//默认不是ie8
    if($('body').hasClass('ie8')){
        ie8Falg = true;
    }
    if($('#newsWrap').length>0){
        $('#newsWrap .proJouConList li').each(function(i,e){
            if((i+1)%2 !== 0){
                $(e).css({'margin-right':'5%'})
            }
        })
    }
    var numTxtlength = 0;
    // 判断高度变化公共函数
    function isliHight(father, boy){
        $(father).find(boy).css({height: 'auto'});
        var heightarr = [],lastHeight = $(father).find(boy).eq(0).height();
        $(father).find(boy).each(function(i,e){
            var _height = $(e).height();
            heightarr.push(_height);
        })
        for(var i = 1; i < heightarr.length; i ++){
            if(heightarr[i] > lastHeight){
                lastHeight = heightarr[i];
            }
        }
        $(father).find(boy).css({height:lastHeight + 4 + 'px'});
    }
    function setHeight(){
        if($('#Focus_Moment').length > 0){
            isliHight('#Focus_Moment .focusListBox','li');
        }
        if($('#Company_culture').length > 0){
            isliHight('#succWrapH5 .techH5SuccCon','.swiper-slide');
        }
        if($('#Management').length > 0){
            isliHight('#Management .TeamMemberList:eq(0)','li:eq(2),li:eq(3)');
        }
        if($('#Storage').length > 0){
            isliHight('#Storage .summaryConPclist','li');
            isliHight('#Storage .Swiper-summaryCon','li');
            isliHight('#Storage .storgSuccessC .SuccessWrapList','li a');
            isliHight('#Storage .storgSuccessC .SuccH5','li');
            isliHight('#Storage .storgSuccessCNav .navList','li');
            if(!ie8Falg){
                swiperJR.onResize();
                swiperYL.onResize();
                swiperWL.onResize();
                swiperWH.onResize();
                swiperZF.onResize();
            }
        }
        // 发展历程部分
        if($('#Company_history').length > 0){
            if($('body,html').width() > 768){
                boxHeight();
            } else {
                $('#Company_history.threeDiv .history_box:last-child').find('.hist_box').css({height:'0'});
                $('.hist_boxList.histAct').parent('.hist_box').css({height:'auto'});
                boxHeight();
            }
        }
        // comwareV7部分JS
        if($('#ComwareV7').length > 0){
            comware7H();
        }
        //DDQ部分展开样式 在PC端始终展开
        if ($('#DDQApprove').length > 0) {
            if($('body,html').width() > 768){
                $('#DDQApprove.threeDiv .ApproveBoxList,#DDQApprove.threeDiv .corruptionCo,#DDQApprove.threeDiv .MediaList').show();
                $('#DDQApprove.threeDiv .canClick .ClassOneList').show();//公司联络方式中内容在pc展开
            }
        }
        //认证代理商
        if($('#RegisterDealer').length > 0){
            isliHight('#RegisterDealer .swiper-navlist','li');
            isliHight('#RegisterDealer .AuthenNavList','li');
            if($('body,html').width() > 768){
                $('#RegisterDealer.threeDiv .companyWrap').show();
                $('#RegisterDealer.threeDiv .liaisonWrap').show();
                $('#RegisterDealer.threeDiv .canClick .ClassOneList').show();//公司联络方式中内容在pc展开
                $('#RegisterDealer.threeDiv .canClick .uploadOneList').show();//公司联络方式中内容在pc展开
                $('#RegisterDealer.threeDiv .uploadWrap').show();
                $('#RegisterDealer.threeDiv .ExpandWrap').show();
            }
        }
        //运营商
        if($('#Operational').length > 0){
            isliHight('#Operational .techSolveCon','li');
            isliHight('#Operational .techH5SuccConBox','.swiper-slide');
        }
        //合作伙伴专区
        if($('#AgentServiceStarQuer').length > 0){
            isliHight('#AgentServiceStarQuer .obtlistTit','li');
            isliHight('#AgentServiceStarQuer .obtlistCon','li');
            isliHight('#AgentServiceStarQuer .AgentListUl','li');
            isliHight('#AgentServiceStarQuer .navBoxList','li');
            isliHight('#AgentServiceStarQuer .AuthenNavList','li');
            isliHight('#AgentServiceStarQuer .AuthenNavList','li');
            if($('body,html').width() > 768){
                $('#AgentServiceStarQuer.threeDiv .canClick .ClassOneList').show();
                $('#AgentServiceStarQuer.threeDiv .ApproveH2Border .companyWrap').show();
                $('#AgentServiceStarQuer.threeDiv .baseInfoWrap').show();
                $('#AgentServiceStarQuer.threeDiv .uploadWrap').show();
                $('#AgentServiceStarQuer.threeDiv .uploadOneList').show();
            }
        }
        // 渠道政策
        if($('#ProAnn.Channel_policy').length > 0){
            // 导航高度控制
            isliHight('#ProAnn.Channel_policy .officeConBox .officeNav','li');
        }
        // 大模板页面
        if ($('#SetTemplate').length > 0) {
            isliHight('#SetTemplate .swiper_SetSlove','.swiper-slide');
            isliHight('#SetTemplate .ListNavList li','span');
            if($('html').width() > 768){
                isliHight('#SetTemplate .serversCon .applicationMainOutTextBox','ul');
            } else {
                $('#SetTemplate .serversCon .applicationMainOutTextBox ul').css({height:'auto'});
            }
            isliHight('#SetTemplate .technicalSolve:eq(0):not(.newSloveBox) .techSolveConList','li');
            isliHight('#SetTemplate .technicalSolve:eq(1):not(.newSloveBox) .techSolveConList','li');
            isliHight('#SetTemplate .technicalSolve:eq(2):not(.newSloveBox) .techSolveConList','li');
            isliHight('#SetTemplate .technicalSolve:eq(3):not(.newSloveBox) .techSolveConList','li');
            isliHight('#SetTemplate .technicalSolve:eq(4):not(.newSloveBox) .techSolveConList','li');
            isliHight('#SetTemplate .technicalSolve:eq(5):not(.newSloveBox) .techSolveConList','li');
            isliHight('#SetTemplate .technicalSolve:eq(6):not(.newSloveBox) .techSolveConList','li');
            isliHight('#SetTemplate .technicalSolve:eq(7):not(.newSloveBox) .techSolveConList','li');
            isliHight('#SetTemplate .technicalSolve:eq(8):not(.newSloveBox) .techSolveConList','li');
            isliHight('#SetTemplate .technicalSolve:eq(9):not(.newSloveBox) .techSolveConList','li');
            isliHight('#SetTemplate .SDNProtech .techH5Succ','.succSysBox');
            numTxtlength = 0;
            $('.serversConTextBox p').each(function(i,ev){
                numTxtlength += Number($(ev).height() + 36);
            })
            if((numTxtlength-36) < 216) {
                $('.serverClick').hide();
            } else {
                $('.serverClick').show();
            }
        }
        // 管理团队
        if ($('#Management').length > 0) {
            isliHight('#Management .TeamMemberList','li');
        }
        // 运营商专刊部分底部对齐
        if ($('.serversCon.Operational').length > 0) {
            isliHight('.serversCon.Operational .secondWrapBox .secondWrapBoxAdd_2 .OperationalLastTextBox','h2');
            isliHight('.serversCon.Operational .secondWrapBox .secondWrapBoxAdd_2 .OperationalLastTextBox','p');
        }
    }
    timer = setTimeout(setHeight,200);
    var swiperJR,swiperYL,swiperWL,swiperWH,swiperZF;
    if(!ie8Falg){
        //切换部分
        swiperYL = new Swiper('.swiper-YL',{
            grabCursor: true,
            pagination: '.SuccesYLBtn',
            paginationClickable: true
        }); 
        swiperJR = new Swiper('.swiper-JR',{
            grabCursor: true,
            pagination: '.SuccesJRBtn',
            paginationClickable: true
        }); 
        swiperWL = new Swiper('.swiper-WL',{
            grabCursor: true,
            pagination: '.SuccesWLBtn',
            paginationClickable: true
        }); 
        swiperWH = new Swiper('.swiper-WH',{
            grabCursor: true,
            pagination: '.SuccesWHBtn',
            paginationClickable: true
        }); 
        swiperZF = new Swiper('.swiper-ZF',{
            grabCursor: true,
            pagination: '.SuccesZFBtn',
            paginationClickable: true
        }); 
    }
    
    $('.storgSuccessCNav .navList li').click(function(){
        $('.storgSuccessCNav .navList li').removeClass('active');
        $(this).addClass('active');
        $('.storgSuccessWrap .storgSuccesW').removeClass('active');
        $('.storgSuccessWrap .storgSuccesW').eq($(this).index()).addClass('active');
        if(!ie8Falg){
            swiperJR.onResize();
            swiperYL.onResize();
            swiperWL.onResize();
            swiperWH.onResize();
            swiperZF.onResize();
            swiperJR.update();
            swiperYL.update();
            swiperWL.update();
            swiperWH.update();
            swiperZF.update();
        }
    })
    if(!ie8Falg){
        // 无线
        if($('#Wlan').length > 0){
            var swiperResoce = new Swiper('.SetTemplateSwiper',{
                grabCursor: true,
                pagination: '.proSer_Btn',
                paginationClickable: true
            });
        }
        // 品牌理念部分js
        if($('.swiper-culture').length > 0){
            var length_swpcul = $('.swiper-culture .swiper-slide').length;
            var swiperCulture = new Swiper('.swiper-culture',{
                grabCursor: true,
                pagination: '.Company_culturebtn',
                paginationClickable: true
            });
            function cultrueFun(){
                if(swiperCulture.activeIndex == length_swpcul-1){
                    swiperCulture.slideTo(0);
                } else {
                    swiperCulture.slideNext();
                }
            }
            var tIme;
            if(length_swpcul > 1){
                tIme = setInterval(cultrueFun,3000);
                $('.secondBanner .swiper-culture').on({
                    mouseenter:function(){
                        clearInterval(tIme);
                    },
                    mouseleave:function(){
                        tIme = setInterval(cultrueFun,3000);
                    }
                })
                $('.secondBanner .swiper-culture').on({
                    touchstart:function(){
                        clearInterval(tIme);
                    },
                    touchend:function(){
                        tIme = setInterval(cultrueFun,3000);
                    }
                })
            } else {
                $('.secondDiv.threeDiv .Company_culturebtn').hide();
            }
        }
        if($('#Company_culture').length > 0){
            var swiperCultureSucc = new Swiper('.swiper-containerSuccH5',{
                grabCursor: true,
                pagination: '.techH5SuccBtnbox',
                paginationClickable: true
            }); 
        }
        if($('#Storage').length > 0){
            //栏目概述移动端部分滑动
            var swiperSummary = new Swiper('.Swiper-summaryCon',{
                grabCursor: true,
                pagination: '.summaryEnterBtn',
                paginationClickable: true
            }); 
            //推荐产品
            var swiperProducts = new Swiper('.swiper-sumProductsC',{
                grabCursor: true,
                pagination: '.ProducEnterBtn',
                paginationClickable: true
            }); 
            //相关视频
            var swiperProducts = new Swiper('.swiper-containerVidH5',{
                grabCursor: true,
                pagination: '.protechH5VidBtn',
                paginationClickable: true
            });
        }
        if($('#RegisterDealer').length > 0){
            //认证代理
            var swiperNavlist = new Swiper('.swiper-navlist',{
                grabCursor: true,
                pagination: '.SuccesNavlist',
                paginationClickable: true
            });
        }
        window.addEventListener("resize", function() {
            clearTimeout(timer);
            timer = setTimeout(setHeight,200);
        }, false);
    } else {
        if($('.swiper-culture').length > 0){
            var length_swpcul = $('.swiper-culture .swiper-slide').length;
            $('body.ie8 .secondDiv.threeDiv .swiper-wrapper').css({width:length_swpcul*100+'%'})
            $('body.ie8 .secondDiv.threeDiv .swiper-wrapper .swiper-slide').css({width:(100/length_swpcul)+'%'})
            var swiperNumber= 1;
            function swiperSlide(){
                if(swiperNumber < length_swpcul){
                    $('.secondBanner .swiper-wrapper').animate({left:-100*swiperNumber+'%'},300,'linear');
                    swiperNumber += 1;
                } else {
                    $('.secondBanner .swiper-wrapper').animate({left:0},300,'linear');
                    swiperNumber = 1;
                }
                $('.Company_culturebtn span').removeClass('swiper-pagination-bullet-active');
                $('.Company_culturebtn span').eq(swiperNumber-1).addClass('swiper-pagination-bullet-active');
            }
            var ie8Swiper;
            if(length_swpcul > 1){
                for(var i = 0; i < length_swpcul-2; i++){
                    $('.Company_culturebtn').append('<span></span>');
                }
                ie8Swiper = setInterval(swiperSlide, 3000);
                $('.secondBanner .swiper-culture').on({
                    mouseenter:function(){
                        clearInterval(ie8Swiper);
                    },
                    mouseleave:function(){
                        ie8Swiper = setInterval(swiperSlide, 3000);
                    }
                })
            } else {
                $('.secondDiv.threeDiv .Company_culturebtn').hide();
            }
            $('.Company_culturebtn span').click(function(){
                $('.Company_culturebtn span').removeClass('swiper-pagination-bullet-active');
                $(this).addClass('swiper-pagination-bullet-active');
                swiperNumber = $(this).index();
                $('.secondBanner .swiper-wrapper').animate({left:-100*swiperNumber+'%'},300,'linear');
            })
        }
        window.onresize = function(){
            clearTimeout(timer);
            timer = setTimeout(setHeight,200);
        }
    }
    // 发展历程部分控制
    function boxHeight(){
        for(var i = 0; i < $('#Company_history .hist_box').length; i ++){
            var height_this = 0;
            if($('#Company_history .hist_box').eq(i).find('.hist_boxList').is(":visible")){
                if($('#Company_history .hist_box').eq(i).find('.hist_boxList').find('li').length > 1){
                    if($('body,html').width() > 768){
                        height_this += ($('#Company_history .hist_box').eq(i).find('.hist_boxList').find('li').length/2) * 570;
                    } else {
                        height_this += $('#Company_history .hist_box').eq(i).find('.hist_boxList').find('li').length*450;
                    }
                } else {
                    height_this += 440;
                }
            } else {
                if(i == $('#Company_history .hist_box').length - 1){
                    $('body,html').width()>768?height_this = 100:height_this = 0;
                } else {
                    $('body,html').width()>768?height_this = 120:height_this = 80;
                }
            }
            $('#Company_history .hist_box').eq(i).css({height:height_this + 'px'});
        }
    }
    $('#Company_history .development .hist_box_time').each(function(i,ev){
        $(ev).on('click',function(){
            $('#Company_history .hist_box_time').removeClass('timeAct');
            $(this).addClass('timeAct');
            $('#Company_history .hist_boxList').removeClass('histAct');
            $('#Company_history .hist_boxList').eq(i).addClass('histAct');
            boxHeight();
        })
    })
    // 品牌理念部分滑动样式
    if($('#Company_culture').length > 0){
        $('.SenRespon li').each(function(i,e){
            $(e).click(function(){
                $('#Company_culture .SenResponBox').hide();
                $('#Company_culture .SenResponBox').eq(i).show();
            })
        })
        $('#Company_culture .SenRespoClose').click(function(){
            $(this).parents('.SenResponBox').hide();
        })
    }
    // 媒体联络部分操作
    $('#Media_Contact .MediaListBoxinput .textInput,#Media_Contact .MediaListBoxinput #textArea').focus(function(){
        $(this).next('.inputErr').hide();
    }).blur(function(){
        if($(this).val() == '' || $(this).val().length == 0) {
            $(this).next('.inputErr').show();
        }
    })
    
    // ComwareV7 展开控制
    function comware7H(){
        if(!ComwareV7falg){
            var firstPH = $('#ComwareV7 .ComwareV7ConTxt .MsoNormal').eq(0).height();
            $('#ComwareV7 .ComwareV7ConTxt').css({height:firstPH});
        }
    }
    var ComwareV7falg = false;
    $('#ComwareV7 .ComwareV7Gomore>span').click(function(){
        if(!ComwareV7falg){
            $('#ComwareV7 .ComwareV7ConTxt').css({height:'auto'});
            $('#ComwareV7 .godownImg').hide();
            $('#ComwareV7 .goupImg').show();
            $('#ComwareV7 .ComwareV7Gomore span span').text('点击收起');
            ComwareV7falg = true;
        } else {
            $('#ComwareV7 .godownImg').show();
            $('#ComwareV7 .goupImg').hide();
            $('#ComwareV7 .ComwareV7Gomore span span').text('展开更多');
            ComwareV7falg = false;
            comware7H();
        }
    })
}
;(function(){
    //服务器部分JS
    var serversFalg = false;
    $('#Servers .serverClikBtn').click(function(){
        if (!serversFalg) {
            $('#Servers .serverClick').addClass('activeC').find('.serverClikBtn span').text('点击收起');
            $('#Servers .serversConText .serversConTextBox').css({height:'auto',overflow:'visible'})
        } else {
            $('#Servers .serverClick').removeClass('activeC').find('.serverClikBtn span').text('展开更多');;
            $('#Servers .serversConText .serversConTextBox').css({height:'250px',overflow:'hidden'})
        }
        serversFalg = !serversFalg;
    })
    $('#Servers #newsWrap .proJouConList li').each(function(i){
        i<=1?
            $('#Servers #newsWrap .proJouConList li').eq(i).addClass('borderPC')
            : '';
    })
    $('#Operational #newsWrap .proJouConList li').each(function(i){
        i<=1?
            $('#Operational #newsWrap .proJouConList li').eq(i).addClass('borderPC')
            : '';
    })
    // 大模板页面新闻添加类名
    $('#SetTemplate #newsWrap .proJouConList li').each(function(i){
        i<=1?
            $('#SetTemplate #newsWrap .proJouConList li').eq(i).addClass('borderPC')
            : '';
    })
    //视频播放
    $('#Servers .serversConImg').click(function(){
        var videourl=$(this).attr('data-url');
        var videoimgurl=$(this).find('.videoBack').attr('src');
        $('#Servers #VideoPlay').show();
        $('#Servers .posterimg').show();
        var _width=$('#Servers  .videoBox').width();
        var _height=_width*0.6;
        $('#Servers #VideoPlay .videoBox .posterimg').attr('src',videoimgurl);
        thePlayer = jwplayer('videoall').setup({  
            flashplayer: '/cn/tres/NewWebUI/scripts/vender/player.swf',  
            file: videourl, 
            image: videoimgurl, 
            width: _width,  
            height: _height,  
            control: false,
            controlbar: 'bottom', 
            dock: false  
        });  
        $('#Servers #videoall').css('background-color','none')
        
        $('#Servers .posterimg').hide();
    })
    $('#VideoPlay .closevideo').click(function(){
        $('#Servers #VideoPlay').hide();
        $('#Servers #VideoPlay .videoBox video').attr('src','');
        $('#Servers #VideoPlay .videoBox .posterimg').attr('src','');
    })
})()
;(function(){
    //设置单独奇偶样式 发展历程部分
    $('#Company_history .hist_box .hist_boxList').each(function(i,ev){
        for(var i = 0; i < $(ev).find('li').length; i ++){
            if (i%2 == 0) {
                $(ev).find('li').eq(i).addClass('numberO');
            } else {
                $(ev).find('li').eq(i).addClass('numberQ');
            }
        }
    })
    //下载按钮滑动样式
    $('#Terms_of_service .gotoDown,#Company_culture .understandBox,#Servers .classListGoTo,#Technic_Service_Attestation .standardList li,#Technic_Service_Attestation .AttestatBox').on({
        mouseenter:function(){
            $(this).find('a').addClass('fontRed');
            $(this).find('a').find("img").attr("src","/cn/tres/NewWebUI/images/threeAll/liaojieArrowhover.png");
        },
        mouseleave:function(){
            $(this).find('a').removeClass('fontRed');
            $(this).find('a').find("img").attr("src","/cn/tres/NewWebUI/images/threeAll/liaojieArrow.png");
        }
    })
})()
;(function(){
    // 表单部分（DDQ）移动端点击展开收缩
    var DDQfalg = [false, false, false];
    $('#DDQApprove .clickInput .DDQApproveBox').each(function(i,ev){
        $(ev).find('.ApproveH2 span').on('click',function(){
            if($('body,html').width() < 768){
                $(this).find('img').removeClass('detailsShow');
                DDQfalg[i]?
                    $(this).find('img').eq(0).addClass('detailsShow')
                    :
                    $(this).find('img').eq(1).addClass('detailsShow');
                DDQfalg[i] = !DDQfalg[i];
                $(ev).find('.ApproveBoxList').slideToggle('fast');
            }
        })
    })
    // 反复声明展开
    var corruptFalg = false;
    $('.anti-corruption .ApproveH2 span').click(function(){
        if($('body,html').width() < 768){
            $(this).find('img').removeClass('detailsShow');
            corruptFalg?
                $(this).find('img').eq(0).addClass('detailsShow')
                :
                $(this).find('img').eq(1).addClass('detailsShow');
                corruptFalg = !corruptFalg;
            $('.anti-corruption .corruptionCo').slideToggle('fast');
        }
    })
    var falgArr = [false,false,false,false,false,false,false,false,false];
    $('#DDQApprove .ApproveBoxList .canClick').each(function(i,ev){
        falgArr[i]?'':falgArr[i]=false;
        $(ev).find('.ClassOneName span').click(function(){
            if($('body,html').width() > 768){return};
            $(this).find('img').removeClass('detailsShow');
            falgArr[i]?
                $(this).find('img').eq(0).addClass('detailsShow')
                :
                $(this).find('img').eq(1).addClass('detailsShow');
            falgArr[i] = !falgArr[i];
            $(this).parents('.canClick').find('.ClassOneList').slideToggle('fast');
        })
    })
    // 提交人部分展开
    var submitterFalg = false;
    $('#DDQApprove .submitter .ApproveH2 span').click(function(){
        if($('body,html').width() < 768){
            $(this).find('img').removeClass('detailsShow');
            submitterFalg?
                $(this).find('img').eq(0).addClass('detailsShow')
                :
                $(this).find('img').eq(1).addClass('detailsShow');
                submitterFalg = !submitterFalg;
            $('#DDQApprove .submitter .MediaList').slideToggle('fast');
        }
    })
})()
;(function(){
    //星级服务页面JS
    $('.standardList li').each(function(i,ev){
        i%2==0?
            $(ev).addClass('standardF5')
            :
            $(ev).addClass('standardFF');
    })
})()
;(function(){
    //认证代理模块javascript
    $('#RegisterDealer .AuthenNavList li').each(function(i,ev){
        (i+1)%3==0?
            $(ev).addClass('NavListMargin')
            : '';
    })
    //贵公司基本情况点击效果
    var companyFalg = false;
    $('#RegisterDealer .companyBtn .ApproveH2 span').click(function(){
        if($('body,html').width() > 768){return};
        $(this).find('img').removeClass('detailsShow');
        companyFalg?
            $(this).find('img').eq(0).addClass('detailsShow')
            :
            $(this).find('img').eq(1).addClass('detailsShow');
        companyFalg = !companyFalg;
        $('#RegisterDealer.threeDiv .companyWrap').slideToggle();
    })
    //贵公司联络方式点击效果
    var liaisonFalg = false;
    $('#RegisterDealer .liaisonBtn .ApproveH2 span').click(function(){
        if($('body,html').width() > 768){return};
        $(this).find('img').removeClass('detailsShow');
        liaisonFalg?
            $(this).find('img').eq(0).addClass('detailsShow')
            :
            $(this).find('img').eq(1).addClass('detailsShow');
        liaisonFalg = !liaisonFalg;
        $('#RegisterDealer.threeDiv .liaisonWrap').slideToggle();
    })
    //贵公司联络方式具体内容点击效果
    // 定义控制各部分开关数组(以canClick作为标识) 顺序 法人代表-总经理-销售负责人-销售负责人-商务负责人-技服负责人-订单通知单接收人-H3C日常联络人
    var falgArr = [false,false,false,false,false,false,false,false];
    $('#RegisterDealer .liaisonWrap .canClick').each(function(i,ev){
        falgArr[i]?'':falgArr[i]=false;
        $(ev).find('.ClassOneName span').click(function(){
            if($('body,html').width() > 768){return};
            $(this).find('img').removeClass('detailsShow');
            falgArr[i]?
                $(this).find('img').eq(0).addClass('detailsShow')
                :
                $(this).find('img').eq(1).addClass('detailsShow');
            falgArr[i] = !falgArr[i];
            $(this).parents('.canClick').find('.ClassOneList').slideToggle('fast');
        })
    })
    //上传部分具体内容点击效果
    //贵公司联络方式点击效果
    var uploadFalg = false;
    $('#RegisterDealer .uploadBtn .ApproveH2 span').click(function(){
        if($('body,html').width() > 768){return};
        $(this).find('img').removeClass('detailsShow');
        uploadFalg?
            $(this).find('img').eq(0).addClass('detailsShow')
            :
            $(this).find('img').eq(1).addClass('detailsShow');
        uploadFalg = !uploadFalg;
        $('#RegisterDealer.threeDiv .uploadWrap').slideToggle();
    })
    // 定义控制各部分开关数组(以canClick作为标识) 顺序 
    var falgupload = [false,false,false,false,false,false,false];
    $('#RegisterDealer .uploadWrap .canClick').each(function(i,ev){
        falgupload[i]?'':falgupload[i]=false;
        $(ev).find('.uploadOneName span').click(function(){
            if($('body,html').width() > 768){return};
            $(this).find('img').removeClass('detailsShow');
            falgupload[i]?
                $(this).find('img').eq(0).addClass('detailsShow')
                :
                $(this).find('img').eq(1).addClass('detailsShow');
            falgupload[i] = !falgupload[i];
            $(this).parents('.canClick').find('.uploadOneList').slideToggle('fast');
        })
    })
    //拓展人点击效果
    var ExpandFalg = false;
    $('#RegisterDealer .ExpandBtn .ApproveH2 span').click(function(){
        if($('body,html').width() > 768){return};
        $(this).find('img').removeClass('detailsShow');
        ExpandFalg?
            $(this).find('img').eq(0).addClass('detailsShow')
            :
            $(this).find('img').eq(1).addClass('detailsShow');
        ExpandFalg = !ExpandFalg;
        $('#RegisterDealer.threeDiv .ExpandWrap').slideToggle();
    })
})()

;(function(){
    //技术服务产品部分JS
    //技术服务产品视频播放
    var ie8Falg = false;//默认不是ie8
    if($('body').hasClass('ie8')){
        ie8Falg = true;
    }
   	var len = $(".applicationMenuList").length;
   	var html = "";
    for(var i=0;i<len;i++){
    	var textBox=$(".applicationMainOutGrey").eq(i).find(".applicationMainOutTextBox");
    html+='<div class="mblMenuListBox">'
	html+=	'<div class="mblMenuListHead" act=0>'
	html+=		$(".applicationMenuList").eq(i).html()
	html+=		'<img src="/cn/tres/NewWebUI/images/secondAll/closeListmoreGrey.png" class="closeListmoreGrey isGrey" />'
	html+=		'<img src="/cn/tres/NewWebUI/images/secondAll/closeListmoreWhite.png" class="closeListmoreGrey isWhite" />'
	html+=	'</div>'
	html+=	'<div class="mblMenuListBody">'
		for(var a=0,alen=textBox.length;a<alen;a++){
			var li=textBox.eq(a).find("li");
	html+=		'<div class="mblMenuListInner">'
	html+=			'<h2>'+textBox.eq(a).find("h2").html()+'</h2>'
	html+=			'<ul>'
			for(var b=0,blen=li.length;b<blen;b++){
	html+=				'<li>'+li.eq(b).html()+'</li>'		
			}
	html+=			'</ul>'
	html+=		'</div>'		
		}
	html+=	'</div>'
	html+='</div>'
    }
    $(".mblMenuListOutBox").html(html);
    
	var chtml="";
	var applicationMainOutInner=$(".applicationMainOutInner");
	for(var c =0 ,clen=applicationMainOutInner.length;c<clen;c++){
			var inner=applicationMainOutInner.eq(c);
	chtml+=	'<div class="swiper-slide">'
	chtml+=		'<div class="applicationMblTextBox clearfix">'
	chtml+=			'<a href="'+inner.find("a").attr("href")+'"><img src="'+inner.find("img").attr("src")+'"/>'
	chtml+=			'<h2>'+inner.find("h2").html()+'</h2>'
	chtml+=			'<p>'+inner.find("p").html()+'</p></a>'
	chtml+=		'</div>'
	chtml+=	'</div>'	
	}
	$("#applicationMainMbl").find(".swiper-wrapper").html(chtml);
    lengthCile($('#Operational.threeDiv .OperationalLastTextBox p'),145);
    $('#Operational .serversConImg,#IT_application .serversConImg,#Wlan .serversConImg').click(function(){
        var videourl=$(this).attr('data-url');
        var videoimgurl=$(this).find('.videoBack').attr('src');
        $('.secondDiv #VideoPlay').show();
        $('.secondDiv .posterimg').show();
        var _width=$('.secondDiv  .videoBox').width();
        var _height=_width*0.6;
        $('.secondDiv #VideoPlay .videoBox .posterimg').attr('src',videoimgurl);
        thePlayer = jwplayer('videoall').setup({  
            flashplayer: '/cn/tres/NewWebUI/scripts/vender/player.swf',  
            file: videourl, 
            image: videoimgurl, 
            width: _width,  
            height: _height,  
            control: false,
            controlbar: 'bottom', 
            dock: false  
        });  
        $('.secondDiv #videoall').css('background-color','none')
        
        $('.secondDiv .posterimg').hide();
    })
    $('#VideoPlay .closevideo').click(function(){
        $('.secondDiv #VideoPlay').hide();
        $('.secondDiv #VideoPlay .videoBox video').attr('src','');
        $('.secondDiv #VideoPlay .videoBox .posterimg').attr('src','');
    })
    var swiper_01,swiper_02,swiper_03,swiper_04,swiper_05,swiper_06,swiper_07,swiper_08;
    if(!ie8Falg){
        // 视频swiper
        var mySwiperH5Vid = new Swiper('.protechH5Video01 .swiper-containerVidH5',{
		    grabCursor: true,
		    paginationClickable: true,
		   	pagination: '.protechH5Video01 .protechH5VidBtnBox'
		})
        var applicationMainMblBtn = new Swiper('.protechH5Video02 .swiper-containerVidH5',{
		    grabCursor: true,
		    autoHeight:true,
		    paginationClickable: true,
		   	pagination: '.protechH5Video02 .protechH5VidBtnBox'
		})
        swiper_01 = new Swiper('.swiper_01',{
            grabCursor: true,
            pagination: '.techH5SuccBtn_01',
            paginationClickable: true
        }); 
        swiper_02 = new Swiper('.swiper_02',{
            grabCursor: true,
            pagination: '.techH5SuccBtn_02',
            paginationClickable: true
        }); 
        swiper_03 = new Swiper('.swiper_03',{
            grabCursor: true,
            pagination: '.techH5SuccBtn_03',
            paginationClickable: true
        }); 
        swiper_04 = new Swiper('.swiper_04',{
            grabCursor: true,
            pagination: '.techH5SuccBtn_04',
            paginationClickable: true
        }); 
        swiper_05 = new Swiper('.swiper_05',{
            grabCursor: true,
            pagination: '.techH5SuccBtn_05',
            paginationClickable: true
        }); 
        swiper_06 = new Swiper('.swiper_06',{
            grabCursor: true,
            pagination: '.techH5SuccBtn_06',
            paginationClickable: true
        }); 
        swiper_07 = new Swiper('.swiper_07',{
            grabCursor: true,
            pagination: '.techH5SuccBtn_07',
            paginationClickable: true
        }); 
        swiper_08 = new Swiper('.swiper_08',{
            grabCursor: true,
            pagination: '.techH5SuccBtn_08',
            paginationClickable: true
        }); 
    }
    $("#IT_application .applicationMenuList").on("mouseenter",function(){
    	var i=$(this).index()+1;
    	$(".applicationMainOut").hide();
    	$('#content_'+i).show();
    	$("#IT_application .applicationMenuList").removeClass("applicationMenuListAct");
    	$(this).addClass("applicationMenuListAct");
    	$(".applicationMenu").addClass("applicationMenuAct")
    	waterfall('content_'+i,'applicationMainOutTextBox');
    })
    $("#IT_application .protechVideoCon").on("mouseleave",function(){
    	$(".applicationMenu").removeClass("applicationMenuAct");
    	$("#IT_application .applicationMenuList").removeClass("applicationMenuListAct");
    	$(".applicationMainOut").hide();
    	$('#content_0').show();
    })
    //运营商tab切换
    $("#Operational .OperationalTabHead_4").on("click",function(){
    	var index=$(this).index();
    	$(".OperationalTabHead_4").removeClass("OperationalTabHeadAct");
    	$(".OperationalTabBody_4").removeClass("OperationalTabBodyAct")
    	$(this).addClass("OperationalTabHeadAct");
        $(".OperationalTabBody_4").eq(index).addClass("OperationalTabBodyAct");

        $('.technicalSolve .techSolveCon').removeClass('active');
        $('.technicalSolve').each(function(i,ev){
            $('.technicalSolve').eq(i).find('.techSolveCon').eq(index).addClass('active');
        })
        $('.techH5Succ .techH5SuccConBox').removeClass('active');
        $('.techH5Succ').each(function(i,ev){
            $('.techH5Succ').eq(i).find('.techH5SuccConBox').eq(index).addClass('active');
        })
        if(!ie8Falg){
            swiper_01.onResize?swiper_01.onResize():'';
            swiper_02.onResize?swiper_02.onResize():'';
            swiper_03.onResize?swiper_03.onResize():'';
            swiper_04.onResize?swiper_04.onResize():'';
            swiper_05.onResize?swiper_05.onResize():'';
            swiper_06.onResize?swiper_06.onResize():'';
            swiper_07.onResize?swiper_07.onResize():'';
            swiper_08.onResize?swiper_08.onResize():'';

            swiper_01.update?swiper_01.update():'';
            swiper_02.update?swiper_02.update():'';
            swiper_03.update?swiper_03.update():'';
            swiper_04.update?swiper_04.update():'';
            swiper_05.update?swiper_05.update():'';
            swiper_06.update?swiper_06.update():'';
            swiper_07.update?swiper_07.update():'';
            swiper_08.update?swiper_08.update():'';
        }
    })
    //移动端产品分类
    $("#IT_application .mblMenuListHead").on("click",function(){
    	var act=$(this).attr("act");
    	if(act==0){
    		$("#IT_application .mblMenuListBody").slideUp();
    		$(this).parent().find(".mblMenuListBody").slideDown();
    		$("#IT_application .mblMenuListHead").attr("act",0);
    		$("#IT_application .mblMenuListHead").removeClass("mblMenuListHeadAct");
    		$(this).attr("act",1);
    		$(this).addClass("mblMenuListHeadAct");
    	}
    	if(act==1){
    		$(this).parent().find(".mblMenuListBody").slideUp();
    		$(this).removeClass("mblMenuListHeadAct");
    		$(this).attr("act",0);
    	}
    })
    var oldText;
    if(isPc()){
//  	$('#Operational .serversConTextBox p').html(oldText)	
	}else{
		oldText=lengthCile($('#Operational .serversConTextBox p'),100);
	}
    //点击展开更多
    $(".serversConTextBot").on("click",function(){
    	var act = $(this).attr("act");
    	if(act==0){
    		$(this).addClass("zhanClickAct");
    		$(this).find("span").html("点击收起");
    		$(this).attr("act",1);
            $(".serversConTextBox").addClass("serversConTextBoxAct");
            $(".PorductMaintanInfo_p").addClass("PorductMaintanInfo_pAct");
            $('.maintanBoxCon').css({height:'auto'});
    		// $(".PorductMaintanInfo_img").css("display","block");
    		if(oldText){
    			$('#Operational .serversConTextBox p').html(oldText)
    		}
    		
    	}else{
    		$(this).removeClass("zhanClickAct");
    		$(this).find("span").html("展开更多");
    		$(this).attr("act",0);
            $(".serversConTextBox").removeClass("serversConTextBoxAct");
            $(".PorductMaintanInfo_p").removeClass("PorductMaintanInfo_pAct");
            $('.maintanBoxCon').css({height:'20px'});
    		// $(".PorductMaintanInfo_img").css("display","none");
    		if(oldText){
    			lengthCile($('#Operational .serversConTextBox p'),100);
    		}
    	}
    	
    })
    $("#Wlan .serversConTextBot").off('click');
    $("#Wlan .serversConTextBot").on('click',function(){
        var act = $(this).attr("act");
    	if(act==0){
    		$(this).addClass("zhanClickAct");
    		$(this).find("span").html("点击收起");
    		$(this).attr("act",1);
            $(".serversConTextBox").addClass("serversConTextBoxAct");
            $(".PorductMaintanInfo_p").addClass("PorductMaintanInfo_pAct");
            $('#Wlan.threeDiv .serversConText .serversConTextBox').css({height:'auto','overflow':'visible'});
    		if(oldText){
    			$('#Operational .serversConTextBox p').html(oldText)
    		}
    		
    	}else{
    		$(this).removeClass("zhanClickAct");
    		$(this).find("span").html("展开更多");
    		$(this).attr("act",0);
            $(".serversConTextBox").removeClass("serversConTextBoxAct");
            $(".PorductMaintanInfo_p").removeClass("PorductMaintanInfo_pAct");
            $('#Wlan.threeDiv .serversConText .serversConTextBox').css({height:'250px','overflow':'hidden'});
    		if(oldText){
    			lengthCile($('#Operational .serversConTextBox p'),100);
    		}
    	}
    })
    $(window).resize(function(){
        if(isPc()){
            $('#Operational .serversConTextBox p').html(oldText);
            $('.serversConTextBot').find("span").html("点击展开");
            $('.serversConTextBot').attr("act",0);
        }else{
            oldText=lengthCile($('#Operational .serversConTextBox p'),100);
        }
        if(!ie8Falg && $('#Operational').length > 0){
            swiper_01.onResize ? swiper_01.onResize() : '';
            swiper_02.onResize ? swiper_02.onResize() : '';
            swiper_03.onResize ? swiper_03.onResize() : '';
            swiper_04.onResize ? swiper_04.onResize() : '';
            swiper_05.onResize ? swiper_05.onResize() : '';
            swiper_06.onResize ? swiper_06.onResize() : '';
            swiper_07.onResize ? swiper_07.onResize() : '';
            swiper_08.onResize ? swiper_08.onResize() : '';
        }
    	
    })
    // 限制字数
    function lengthCile(obj,num){
    	var oldText;
        obj.each(function(i,e){
            $(e).css({height:'auto','max-height':'none'});
            if($(e).text().length > num){
            	oldText=$(e).text();
                $(e).text($(e).text().slice(0,num)+'...');
            }
        })
        return oldText;
    }
    function waterfall(parentID,childClass){
        var oParent=document.getElementById(parentID);
        var arrBox=getClassObj(parentID,childClass);// getClassObj()获取子class的数组
        var iBoxW=arrBox[0].offsetWidth;// 获取瀑布流块的宽度
        var num=2 ;//计算窗口能容纳几列
        oParent.style.width='100%';//设置父级宽度
        var arrBoxH=[];//数组，用于存储每列中的所有块框相加的高度
        for(var i=0;i<arrBox.length;i++){//遍历数组瀑布流 块
            var boxH=arrBox[i].offsetHeight;//获取当前块的高度
            if(i<num){
                arrBox[i].style.cssText="";//防止用户改变窗口大小，到时样式出错
                arrBoxH[i]=boxH; //第一行中的num个块box 先添加进数组arrBoxH
            }else{
                var minH=Math.min.apply(null,arrBoxH);//获取数组arrBoxH中的最小值minH
                var minHIndex=getminHIndex(arrBoxH,minH);//遍历数组获取最小值minH的索引
                arrBox[i].style.position='absolute';//设置绝对位移
                arrBox[i].style.top=minH+'px';
                arrBox[i].style.left=minHIndex*iBoxW+'px';//也可以直接获取arrBox[minHIndex].offsetLeft
                arrBoxH[minHIndex]+=arrBox[i].offsetHeight;//添加后，更新最小列高
            }
        }
    }
    //获取子class的数组
    function getClassObj(parentID,childClass){
        var oParent=document.getElementById(parentID);
        var allChildObj=oParent.getElementsByTagName('*');//获取父级下的所有子集
        var childObj=[];
        for (var i=0;i<allChildObj.length;i++) {
            if (allChildObj[i].className==childClass){
                childObj.push(allChildObj[i]);
            }
        };
        return childObj;
    }
    //获取数组最小值的索引
    function getminHIndex(arr,minH){
        for(var i in arr){
            if(arr[i]==minH){
                return i;
            }
        }
    }
    function isPc(){
		var winWidth="";
		if (window.innerWidth){
			winWidth = window.innerWidth;
		}else if ((document.body) && (document.body.clientWidth)){
			winWidth = document.body.clientWidth;
		}
		if(winWidth>768){
			return true;
		}
		return false;
	}
})()
;(function(){
    //合作伙伴查询页面
    $('.chanceInput input').focus(function(){
        if ($(this).parent().index() == 0) {
            $('.serversChan').hide();
        } else if($(this).parent().index() == 1) {
            $('.serversChan').show();
        }
    })
})()
;(function(){
    //表单部分左侧导航部分
    $('#AgentServiceStarQuer .AgentSerLeft .canClick.active').find('.SerListCon').slideDown('fast');
    $('#AgentServiceStarQuer .AgentSerLeft .SerListCon li.active').find('.threeNav').slideDown('fast');
    $('#AgentServiceStarQuer .AgentSerLeft .canClick').each(function(i,ev){
        $(ev).find('.SerListTit').on('click',function(){
            $('#AgentServiceStarQuer .AgentSerLeft .canClick').not($(ev)).removeClass('active');
            $('#AgentServiceStarQuer .AgentSerLeft .canClick').not($(ev)).find('.SerListCon').slideUp('fast');
            $(ev).find('.SerListCon').slideToggle('fast');
            $(ev).hasClass('active')?$(ev).removeClass('active'):$(ev).addClass('active');
        })
    })
    //二级栏目点击效果
    $('#AgentServiceStarQuer .AgentSerLeft .SerListCon li.threeClick').each(function(i,ev){
        $(ev).find('.threeClickTit').on('click',function(){
            $('#AgentServiceStarQuer .AgentSerLeft .SerListCon li.threeClick').not($(ev)).removeClass('active');
            $('#AgentServiceStarQuer .AgentSerLeft .SerListCon li.threeClick').not($(ev)).find('.threeNav').slideUp('fast');
            $(ev).find('.threeNav').slideToggle('fast');
            $(ev).hasClass('active')?$(ev).removeClass('active'):$(ev).addClass('active');
        })
    })
    //代理商认证结果切换部分
    $('#AgentServiceStarQuer .obtNavBox .navBoxList li').click(function(){
        var thisNum = $(this).index();
        $('#AgentServiceStarQuer .obtNavBox .navBoxList li').removeClass('backRed');
        $('#AgentServiceStarQuer .obtNavBox .navBoxList li').eq(thisNum).addClass('backRed');
        $('#AgentServiceStarQuer .BoxConList .BoxConBox').removeClass('active');
        $('#AgentServiceStarQuer .BoxConList .BoxConBox').eq(thisNum).addClass('active');
    })
    //基本信息控制开关
    var baseInfofalg = false;
    $('#AgentServiceStarQuer .companyBtn').click(function(){
        if($('body,html').width() > 768){return};
        $(this).find('img').removeClass('detailsShow');
        baseInfofalg?
            $(this).find('img').eq(0).addClass('detailsShow')
            :
            $(this).find('img').eq(1).addClass('detailsShow');
        baseInfofalg = !baseInfofalg;
        $('.companyWrap').slideToggle('fast');
    })
    // 定义控制各部分开关数组(以canClick作为标识) 顺序 
    var falguploadBase = [false,false,false,false,false,false,false,false];
    $('#AgentServiceStarQuer .liaisonWrap .canClick').each(function(i,ev){
        falguploadBase[i]?'':falguploadBase[i]=false;
        $(ev).find('.ClassOneName span').click(function(){
            if($('body,html').width() > 768){return};
            $(this).find('img').removeClass('detailsShow');
            falguploadBase[i]?
                $(this).find('img').eq(0).addClass('detailsShow')
                :
                $(this).find('img').eq(1).addClass('detailsShow');
                falguploadBase[i] = !falguploadBase[i];
            $(this).parents('.canClick').find('.ClassOneList').slideToggle('fast');
        })
    })
    //控制业绩合并申请基本信息
    var agentOaBtn_01Falg = false;
    $('#AgentServiceStarQuer .agentOaBtn_01').click(function(){
        if($('body,html').width() > 768){return};
        $(this).find('img').removeClass('detailsShow');
        agentOaBtn_01Falg?
            $(this).find('img').eq(0).addClass('detailsShow')
            :
            $(this).find('img').eq(1).addClass('detailsShow');
            agentOaBtn_01Falg = !agentOaBtn_01Falg;
        $('.baseInfoWrap').slideToggle('fast');
    })
    var agentOaBtn_02Falg = false;
    $('#AgentServiceStarQuer .agentOaBtn_02').click(function(){
        if($('body,html').width() > 768){return};
        $(this).find('img').removeClass('detailsShow');
        agentOaBtn_02Falg?
            $(this).find('img').eq(0).addClass('detailsShow')
            :
            $(this).find('img').eq(1).addClass('detailsShow');
            agentOaBtn_02Falg = !agentOaBtn_02Falg;
        $('.uploadWrap').slideToggle('fast');
    })
    // 定义控制各部分开关数组(以canClick作为标识) 顺序 
    var uploadBaseCon = [false,false,false,false];
    $('#AgentServiceStarQuer .uploadWrap .canClick').each(function(i,ev){
        uploadBaseCon[i]?'':uploadBaseCon[i]=false;
        $(ev).find('.uploadOneName span').click(function(){
            if($('body,html').width() > 768){return};
            $(this).find('img').removeClass('detailsShow');
            uploadBaseCon[i]?
                $(this).find('img').eq(0).addClass('detailsShow')
                :
                $(this).find('img').eq(1).addClass('detailsShow');
                uploadBaseCon[i] = !uploadBaseCon[i];
            $(this).parents('.canClick').find('.uploadOneList').slideToggle('fast');
        })
    })
})()
;(function(){
    $('#centerValidation #newsWrap .proJouConList li').each(function(i){
        i<=1?
            $('#centerValidation #newsWrap .proJouConList li').eq(i).addClass('borderPC')
            : '';
    })
    //无线
   //全系列产品tab切换
    $("#Wlan .OperationalTabHead_4").on("click",function(){
    	var index=$(this).index();
    	$(".OperationalTabHead_4").removeClass("OperationalTabHeadAct");
    	$(".OperationalTabBody_4").removeClass("OperationalTabBodyAct")
    	$(this).addClass("OperationalTabHeadAct");
        $(".OperationalTabBody_4").eq(index).addClass("OperationalTabBodyAct");
    })
    $("#Wlan .OperationalTabBody_4").eq(3).addClass("OperationalTabBodyShort")
    lengthCile($('#Wlan.threeDiv .OperationalTabRightInner h2'),32);
    //全系列左侧点击删选
    $(".OperationalTabLeft").find("li").on("click",function(){
    	$(this).parent().find("li").removeClass("chooseWlanLiAct");
    	$(this).addClass("chooseWlanLiAct");
    })
    if(isPc()){
    		lengthCile($('#Wlan.threeDiv .OperationalTabRightInner h2'),32);
    	}else{
       		lengthCile($('#Wlan.threeDiv .OperationalTabRightInner h2'),25);
    	}
    	
    $(window).resize(function(){
		if(isPc()){
    		lengthCile($('#Wlan.threeDiv .OperationalTabRightInner h2'),32);
    	}else{
       		lengthCile($('#Wlan.threeDiv .OperationalTabRightInner h2'),25);
    	}
    	
    })
    //文档中心pc和mbl的切换
    	$(".addBox").eq($(".PorductMaintanInfo_searchLineAct").attr("num")).html($(".PorductMaintanInfo_searchBodyBox").html())
    	//数据中心验证与运行
	  	new Swiper('.centerValidation_Swiper',{
	        grabCursor: true,
	        pagination: '.swiper-pagination'
	    }); 
    
    
    function isPc(){
		var winWidth="";
		if (window.innerWidth){
			winWidth = window.innerWidth;
		}else if ((document.body) && (document.body.clientWidth)){
			winWidth = document.body.clientWidth;
		}
		if(winWidth>768){
			return true;
		}
		return false;
	}
    
    
    // 限制字数
    function lengthCile(obj,num){
    	var oldText;
        obj.each(function(i,e){
            $(e).css({height:'auto','max-height':'none'});
            if($(e).text().length > num){
            	oldText=$(e).text();
                $(e).text($(e).text().slice(0,num)+'...');
            }
        })
    }
})()
;(function(){
    $('#Management .TeamMemberList li').each(function(i,ev){
        i%5==0?
            $(ev).css({'margin-left':'0'})
            :
            '';
    })
    // 管理团队部分点击控制
    if($('#Management').length > 0){
        $('.headBox').css({'background':'#fff','z-index':'999'});
    }
    var thisHeight;
    $('#Management .manaClick').click(function(){
        $('.detailsImg img').attr('src',$(this).find('.thisIsImg').attr('src'));
        $('.nameBox').text($(this).find('.thisIsName').text());
        $('.positionBox').text($(this).find('.thisIsPosition').text());
        $('.ViewDetailsTxt').html($(this).find('.ViewDetails').html());
        $('#Management .ViewDetailsBox').show();
        thisHeight = $('body').scrollTop();
        $('html,body').css({height:'100%','overflow':'hidden'});
    })
    $('#Management .ViewDetailsClose').click(function(){
        $('#Management .ViewDetailsBox').hide();
        $('html,body').css({height:'auto','overflow':'auto'});
        $('body').scrollTop(thisHeight);
    })
    // 模板解决方案第二种样式
    $('#SetTemplate .techSolveConTwo li').each(function(i,ev){
        if(i%3 == 0){
            $(ev).css({'margin-left':'0'})
        }
        if(i >= 3){
            $(ev).css({'margin-bottom':'0'})
        }
    })
    // 大模板页面控制背景色
    $('#SetTemplate .Parityback').each(function(i,ev){
        i%2==0?
            $('#SetTemplate .Parityback').eq(i).addClass('ParityWhite')
            :
            $('#SetTemplate .Parityback').eq(i).addClass('ParityBlack');
    })
    // 大模板展开全部控制
    var SetTemplateFalg = false;
    $('#SetTemplate .serverClikBtn').click(function(){
        if (!SetTemplateFalg) {
            $('#SetTemplate .serverClick').addClass('activeC').find('.serverClikBtn span').text('点击收起');
            $('#SetTemplate .serversConText .serversConTextBox').css({'max-height':'9999px',overflow:'visible'})
        } else {
            $('#SetTemplate .serverClick').removeClass('activeC').find('.serverClikBtn span').text('展开更多');;
            $('#SetTemplate .serversConText .serversConTextBox').css({'max-height':'250px',overflow:'hidden'})
        }
        SetTemplateFalg = !SetTemplateFalg;
    })
    //视频播放
    $('#SetTemplate .serversConImg').click(function(){
        var videourl=$(this).attr('data-url');
        var videoimgurl=$(this).find('.videoBack').attr('src');
        $('#SetTemplate #VideoPlay').show();
        $('#SetTemplate .posterimg').show();
        var _width=$('#SetTemplate  .videoBox').width();
        var _height=_width*0.6;
        $('#SetTemplate #VideoPlay .videoBox .posterimg').attr('src',videoimgurl);
        thePlayer = jwplayer('videoall').setup({  
            flashplayer: '/cn/tres/NewWebUI/scripts/vender/player.swf',  
            file: videourl, 
            image: videoimgurl, 
            width: _width,  
            height: _height,  
            control: false,
            controlbar: 'bottom', 
            dock: false  
        });  
        $('#SetTemplate #videoall').css('background-color','none')
        
        $('#SetTemplate .posterimg').hide();
    })
    $('#VideoPlay .closevideo').click(function(){
        $('#SetTemplate #VideoPlay').hide();
        $('#SetTemplate #VideoPlay .videoBox video').attr('src','');
        $('#SetTemplate #VideoPlay .videoBox .posterimg').attr('src','');
    })
    // 解决方案部分移动端轮播  721行调节高度
    if(!$('body').hasClass('ie8') && $('#SetTemplate').length > 0){
        if($('#SetTemplate .swiper_SetSlove').length > 0){
            var swiper_SetSlove = new Swiper('.swiper_SetSlove',{
                grabCursor: true,
                pagination: '.SetSloveBtn',
                paginationClickable: true
            });
        }
        if($('#SetTemplate .swiper_SetSucc').length > 0){
            var swiper_SetSlove = new Swiper('.swiper_SetSucc',{
                grabCursor: true,
                pagination: '.SetSuccBtn',
                paginationClickable: true
            });
        }
        if($('#SetTemplate #videoWrapH5').length > 0){
            var swiper_SetSlove = new Swiper('.swiper-containerVidH5',{
                grabCursor: true,
                pagination: '.protechH5VidBtn',
                paginationClickable: true
            });
        }
        // 产品列表部分
        if($('#SetTemplate .swiper_Protech').length > 0){
            var swiper_SetSlove = new Swiper('.swiper_Protech',{
                grabCursor: true,
                pagination: '.ProtechBtn',
                paginationClickable: true
            });
        }
        if($('#SetTemplate .swiper-serCon').length > 0){
            var swiper_SetSlove = new Swiper('.swiper-serCon',{
                grabCursor: true,
                pagination: '.proSer_Btn',
                paginationClickable: true
            });
        }
        // 解决方案第二种
        if($('#SetTemplate .swiper_SetSloveTwo').length > 0){
            var swiper_SetSlove = new Swiper('.swiper_SetSloveTwo',{
                grabCursor: true,
                pagination: '.SetSloveTwoBtn',
                paginationClickable: true
            });
        }
        //普教职教部分
        if($('.education').length > 0){
            swiper_SetSlove_set_01 = new Swiper('.swiper_Set_01',{
                grabCursor: true,
                pagination: '.techH5SuccBtn_set01',
                paginationClickable: true
            });
            swiper_SetSlove_set_02 = new Swiper('.swiper_Set_02',{
                grabCursor: true,
                pagination: '.techH5SuccBtn_set02',
                paginationClickable: true
            });
            swiper_SetSlove_set_03 = new Swiper('.swiper_Set_03',{
                grabCursor: true,
                pagination: '.techH5SuccBtn_set03',
                paginationClickable: true
            });
            swiper_SetSlove_set_04 = new Swiper('.swiper_Set_04',{
                grabCursor: true,
                pagination: '.techH5SuccBtn_set04',
                paginationClickable: true
            });
        }
    }
    // 产品列表切换部分js控制
    $('.protechListNav .ListNavList li').click(function(){
        $('.protechListNav .ListNavList li').find('span').addClass('borderLeft');
        $('.protechListNav .ListNavList li').removeClass('backRed');
        $(this).addClass('backRed');
        $(this).next('li').find('span').removeClass('borderLeft');
        $(this).find('span').removeClass('borderLeft');
        setProList($(this).index());
        setH5ProList($(this).index());
    })
    // 产品列表内容切换函数
    function setProList(num){
        $('#SetTemplate .setListCon').removeClass('setListShow');
        $('#SetTemplate .setListCon').eq(num).addClass('setListShow');
    }
    // 移动端导航切换
    // 产品列表移动端导航开关设置
    $('#SetTemplate .protechList .setLisH5Box').each(function(i,ev){
        $(ev).on('click', function(){
            setH5ProList(i);
            setProList(i);
        })
    })
    // 移动端产品列表内容切换函数
    function setH5ProList(num){
        $('#SetTemplate .protechListNav .ListNavList li').removeClass('backRed');
        $('#SetTemplate .protechListNav .ListNavList li').eq(num).addClass('backRed');
        $('#SetTemplate .protechList .setLisH5Box').removeClass('detailsShow');
        $('#SetTemplate .protechList .setLisH5Box').eq(num).addClass('detailsShow');
    }
    // 普教职教部分切换
    function isliHight(father, boy){
        $(father).find(boy).css({height: 'auto'});
        var heightarr = [],lastHeight = $(father).find(boy).eq(0).height();
        $(father).find(boy).each(function(i,e){
            var _height = $(e).height();
            heightarr.push(_height);
        })
        for(var i = 1; i < heightarr.length; i ++){
            if(heightarr[i] > lastHeight){
                lastHeight = heightarr[i];
            }
        }
        $(father).find(boy).css({height:lastHeight + 4 + 'px'});
    }
    var swiper_SetSlove_set_01,swiper_SetSlove_set_02,swiper_SetSlove_set_03,swiper_SetSlove_set_04;
    $('#SetTemplate .education .educationNav li').click(function(){
        var thisNum = $(this).index();
        educationNav(thisNum);
        educationTxt(thisNum);
        solveCon(thisNum);
        isliHight('#SetTemplate .technicalSolve:eq(0) .techSolveConList','li');
        isliHight('#SetTemplate .technicalSolve:eq(1) .techSolveConList','li');
        isliHight('#SetTemplate .technicalSolve:eq(2) .techSolveConList','li');
        isliHight('#SetTemplate .technicalSolve:eq(3) .techSolveConList','li');
        if(!$('body').hasClass('ie8') && $('body,html').width() < 768){
            swiper_SetSlove_set_01.onResize();
            swiper_SetSlove_set_02.onResize();
            swiper_SetSlove_set_03.onResize();
            swiper_SetSlove_set_04.onResize();
    
            swiper_SetSlove_set_01.update();
            swiper_SetSlove_set_02.update();
            swiper_SetSlove_set_03.update();
            swiper_SetSlove_set_04.update();
        }
    })
    // 普教职教切换导航类名
    function educationNav(num){
        $('#SetTemplate .education .educationNav li').removeClass('active');
        $('#SetTemplate .education .educationNav li').eq(num).addClass('active');
    }
    // 普教职教文字切换
    function educationTxt(num){
        $('#SetTemplate .education .secondWrapBox .educatTxt').removeClass('Txtshow');
        $('#SetTemplate .education .secondWrapBox .educatTxt').eq(num).addClass('Txtshow');
    }
    // 下方内容切换
    function solveCon(num){
        $('#SetTemplate .education .technicalSolve').each(function(i,ev){
            $(ev).find('.techSolveCon').removeClass('active');
            $(ev).find('.techSolveCon').eq(num).addClass('active');
        })
        $('#SetTemplate .education .techH5Succ').each(function(i,ev){
            $(ev).find('.techH5SuccConBox').removeClass('active');
            $(ev).find('.techH5SuccConBox').eq(num).addClass('active');
        })
    }
    // 产品介绍部分切换控制
    var thisnum = 0;
    var setTemlength;
    setTemlength = $('#SetTemplate .introdBoxAnima .introdBoxList li').length;
    var thisnumberLength = Math.ceil(setTemlength/3) - 1;
    $('#SetTemplate .introdBoxAnima').css({width: Math.ceil(setTemlength/3)*100+'%'});
    var setMargin = Math.ceil(setTemlength/3)*2;
    $('#SetTemplate .introdBoxAnima .introdBoxList li').css({width: (90/(Math.ceil(setTemlength/3)*3))+'%','margin-left':10/setMargin + '%'});
    $('#SetTemplate .introdBoxAnima .introdBoxList li').each(function(i,ev){
        if(i%3 == 0){
            $(ev).css({'margin-left':'0'});
        }
    })
    if(setTemlength <= 3){
        $('#SetTemplate .introduction .proEntBtn').hide();
    }
    $('#SetTemplate .proEntBtnLeft').on({
        mouseenter:function(){
            if(thisnum > 0){
                $(this).addClass('hover');
            }
        },
        mouseleave:function(){
            $(this).removeClass('hover');
        }
    })
    $('#SetTemplate .proEntBtnRight').on({
        mouseenter:function(){
            if(thisnum < thisnumberLength){
                $(this).addClass('hover');
            }
        },
        mouseleave:function(){
            $(this).removeClass('hover');
        }
    })
    function ie8Swiper(type){
        type=="right"?thisnum+=1:thisnum-=1;
        var _width = $('#SetTemplate .introdBox .introdBoxAnima').width();
        $('#SetTemplate .introdBoxAnima').animate({left: -100 * thisnum+'%'},300,'linear',function(){
            if(thisnum == 0){
                $('#SetTemplate .proEntBtnLeft').removeClass('hover');
            } else if(thisnum == thisnumberLength) {
                $('#SetTemplate .proEntBtnRight').removeClass('hover');
            }
        });
    }
    $('#SetTemplate .proEntBtnRight').click(function(){
        if(thisnum < thisnumberLength){
            ie8Swiper("right");
        }
    })
    $('#SetTemplate .proEntBtnLeft').click(function(){
        if(thisnum > 0){
            ie8Swiper("left");
        }
    })
    // 填充数据控制
    var length_one = $('.centerDateBox .setListBox').length;
    var length_one_num = Math.ceil(length_one / 3);
    var length_two = $('.centerExchangeBox .setListBox').length;
    var length_two_num = Math.ceil(length_two / 3);
    var length_three = $('.centerEPONBox .setListBox').length;
    var length_three_num = Math.ceil(length_three / 3);
    var length_four = $('.centerIndustryBox .setListBox').length;
    var length_four_num = Math.ceil(length_four / 3);
    var num_one = 0,num_two = 0,num_three = 0,num_four = 0;
    for(var i = 0; i < length_one; i += length_one_num){
        $('.centerDateBoxData .cls-4').eq(num_one).append($('.centerDateBox .setListBox').slice(0,length_one_num));
        num_one += 1;
    }
    for(var i = 0; i < length_two; i += length_two_num){
        $('.centerExchange .cls-4').eq(num_two).append($('.centerExchangeBox .setListBox').slice(0,length_two_num));
        num_two += 1;
    }
    for(var i = 0; i < length_three; i += length_three_num){
        $('.centerEPON .cls-4').eq(num_three).append($('.centerEPONBox .setListBox').slice(0,length_three_num));
        num_three += 1;
    }
    for(var i = 0; i < length_four; i += length_four_num){
        $('.centerIndustry .cls-4').eq(num_four).append($('.centerIndustryBox .setListBox').slice(0,length_four_num));
        num_four += 1;
    }
    // 模板页面切换部分
    var swiper_SetSDN_01,
        swiper_SetSDN_02,
        swiper_SetSDN_03,
        swiper_SetSDN_04,
        swiper_SetSDN_05,
        swiper_SetSDN_06,
        swiper_SetSDN_07,
        swiper_SetSDN_08,
        swiper_SetSDN_09,
        swiper_SetSDN_10,
        swiper_SetSDN_11,
        swiper_SetSDN_12,
        swiper_SetSDN_13,
        swiper_SetSDN_14,
        swiper_SetSDN_15;
    if(!$('body').hasClass('ie8')){
        swiper_SetSDN_01 = new Swiper('.swiper_SDN_01',{
            grabCursor: true,
            pagination: '.SDN_01Btn',
            paginationClickable: true
        });
        swiper_SetSDN_02 = new Swiper('.swiper_SDN_02',{
            grabCursor: true,
            pagination: '.SDN_02Btn',
            paginationClickable: true
        });
        swiper_SetSDN_03 = new Swiper('.swiper_SDN_03',{
            grabCursor: true,
            pagination: '.SDN_03Btn',
            paginationClickable: true
        });
        swiper_SetSDN_04 = new Swiper('.swiper_SDN_04',{
            grabCursor: true,
            pagination: '.SDN_04Btn',
            paginationClickable: true
        });
        swiper_SetSDN_05 = new Swiper('.swiper_SDN_05',{
            grabCursor: true,
            pagination: '.SDN_05Btn',
            paginationClickable: true
        });
        swiper_SetSDN_06 = new Swiper('.swiper_SDN_06',{
            grabCursor: true,
            pagination: '.SDN_06Btn',
            paginationClickable: true
        });
        swiper_SetSDN_07 = new Swiper('.swiper_SDN_07',{
            grabCursor: true,
            pagination: '.SDN_07Btn',
            paginationClickable: true
        });
        swiper_SetSDN_08 = new Swiper('.swiper_SDN_08',{
            grabCursor: true,
            pagination: '.SDN_08Btn',
            paginationClickable: true
        });
        swiper_SetSDN_09 = new Swiper('.swiper_SDN_09',{
            grabCursor: true,
            pagination: '.SDN_09Btn',
            paginationClickable: true
        });
        swiper_SetSDN_10 = new Swiper('.swiper_SDN_10',{
            grabCursor: true,
            pagination: '.SDN_10Btn',
            paginationClickable: true
        });
        swiper_SetSDN_11 = new Swiper('.swiper-serCon-01',{
            grabCursor: true,
            pagination: '.proSer_Btn_01',
            paginationClickable: true
        });
        swiper_SetSDN_12 = new Swiper('.swiper-serCon-02',{
            grabCursor: true,
            pagination: '.proSer_Btn_02',
            paginationClickable: true
        });
        swiper_SetSDN_13 = new Swiper('.swiper-serCon-03',{
            grabCursor: true,
            pagination: '.proSer_Btn_03',
            paginationClickable: true
        });
        swiper_SetSDN_14 = new Swiper('.swiper-serCon-04',{
            grabCursor: true,
            pagination: '.proSer_Btn_04',
            paginationClickable: true
        });
        swiper_SetSDN_15 = new Swiper('.swiper-serCon-05',{
            grabCursor: true,
            pagination: '.proSer_Btn_05',
            paginationClickable: true
        });
    }
    // 修改SDN部分切换自适应
    $('.SDNPCNav li').css({width:100/$('.SDNPCNav li').length + '%'});
    $('.SDNPCNav li:last i').remove();
    $('.SDNPCNav li').click(function(){
        // 设置导航部分线条样式
        $('.SDNPCNav li').find('i').show();
        $(this).prev().find('i').hide();
        $(this).find('i').hide();
        conShowCha($(this).index());
    })
    // 内容切换函数
    function conShowCha(num){
        // 设置PC端部分导航样式
        $('#SetTemplate .SDNProtech .SDNPCNav li').removeClass('SDNPCAct');
        $('#SetTemplate .SDNProtech .SDNPCNav li').eq(num).addClass('SDNPCAct');
        // 设置移动端部分导航样式
        $('#SetTemplate .SDNProtech .setLisH5Box').removeClass('detailsShow');
        $('#SetTemplate .SDNProtech .setLisH5Box').eq(num).addClass('detailsShow');
        // 设置内容展示
        $('.SDNProtech .setListCon').removeClass('setListShow');
        $('.SDNProtech .setListCon').eq(num).addClass('setListShow');
        // 资源中心部分切换
        $('.SDNProtech .Resources').removeClass('ResourcesShow');
        $('.SDNProtech .Resources').eq(num).addClass('ResourcesShow');
    }
    // 大互联部分判断是否显示了解详情
    if($('#SetTemplate .SDNProtech').length > 0){
        $('#SetTemplate .SDNProtech .setListtxtBox').each(function(i,ev){
            if ($(ev).find('.setListTxt p').length <= 1) {
                $(ev).find('.protechSolveGoMore').hide();
            }
        })
    }
    // 移动端导航开关设置
    $('#SetTemplate .SDNProtech .setLisH5Box').each(function(i,ev){
        $(ev).on('click', function(){
            conShowCha(i);
            if(!$('body').hasClass('ie8') && $('body,html').width() < 768){
                swiper_SetSDN_01.onResize();
                swiper_SetSDN_02.onResize();
                swiper_SetSDN_03.onResize();
                swiper_SetSDN_04.onResize();
                swiper_SetSDN_05.onResize();
                swiper_SetSDN_06.onResize();
                swiper_SetSDN_07.onResize();
                swiper_SetSDN_08.onResize();
                swiper_SetSDN_09.onResize();
                swiper_SetSDN_10.onResize();
                swiper_SetSDN_11.onResize();
                swiper_SetSDN_12.onResize();
                swiper_SetSDN_13.onResize();
                swiper_SetSDN_14.onResize();
                swiper_SetSDN_15.onResize();
        
                swiper_SetSDN_01.update();
                swiper_SetSDN_02.update();
                swiper_SetSDN_03.update();
                swiper_SetSDN_04.update();
                swiper_SetSDN_05.update();
                swiper_SetSDN_06.update();
                swiper_SetSDN_07.update();
                swiper_SetSDN_08.update();
                swiper_SetSDN_09.update();
                swiper_SetSDN_10.update();
                swiper_SetSDN_11.update();
                swiper_SetSDN_12.update();
                swiper_SetSDN_13.update();
                swiper_SetSDN_14.update();
                swiper_SetSDN_15.update();
            }
        })
    })
    // 修改运营商添加
    if ($('#Operational').length > 0) {
        var operaTab = $('#Operational .OperationalTab .OperationalTabHead_4');
        operaTab.css({width:100/operaTab.length + '%'});
    }
    if ($('.secondPC').attr('src') === '' && $('.secondH5').attr('src') === '') {
        $('.secondPC').parents('.secondBanner').css({height:'0','overflow':'hidden'});
    }

    // 添加公司视频点击查看视频代码
    if($('#Focus_Moment').length > 0){
        $('#Focus_Moment .isClickVideo').click(function(){
            var videourl=$(this).attr('data-href');
            var videoimgurl=$(this).find('.ClickVideoImg').attr('src');
            $('#Focus_Moment #VideoPlay').show();
            $('#Focus_Moment .posterimg').show();
            var _width=$('#Focus_Moment  .videoBox').width();
            var _height=_width*0.6;
            $('#Focus_Moment #VideoPlay .videoBox .posterimg').attr('src',videoimgurl);
            thePlayer = jwplayer('videoall').setup({  
                flashplayer: '/cn/tres/NewWebUI/scripts/vender/player.swf',  
                file: videourl, 
                image: videoimgurl, 
                width: _width,  
                height: _height,  
                control: false,
                controlbar: 'bottom', 
                dock: false  
            });  
            $('#Focus_Moment #videoall').css('background-color','none')
            
            $('#Focus_Moment .posterimg').hide();
        })
        $('#VideoPlay .closevideo').click(function(){
            $('#Focus_Moment #VideoPlay').hide();
            $('#Focus_Moment #VideoPlay .videoBox video').attr('src','');
            $('#Focus_Moment #VideoPlay .videoBox .posterimg').attr('src','');
        })
    }
})()
// 调整嵌入四级页面之后的样式问题
if((typeof vScroll) !== 'undefined'){
    // 覆盖函数
    vScroll = null;
    vScroll = function(){
        return false;
    }
}
if ((typeof kodistsys) !== 'undefined') {
    kodistsys = function(){}    
}
// 这里是调整轮播方法报错  由于底部二次引入jquery  以后会去掉
if ((typeof vHome) !== 'undefined') {
    vHome.not = function(){};
    if((typeof $('.carousel').carousel) == 'undefined'){ 
        vHome.tab = function(){}
    }
}
$('.header').css({height:'100px','position':'relative','margin':'0 auto'});
// 调整logo大小
$('.header .logo').css({width:'100%'});
//调整webview底部样式
var footerMbl = setTimeout(function(){
    clearTimeout(footerMbl)
    if ($('.footerMbl .footerInnerRight>a').length == 2) {
        $('.footerMbl .footerInnerRight>a').eq(0).css({color:'#fff',display:'inline'});
    }
},500)
// // 调整展开收起
// $('.button.collapsed').text('展开');
// if ($('#prodcoll #collbody').length > 0) {
//     $('#prodcoll').css({height:'68px'});
//     if ($('#collbody').height() <= 68) {
//         $('.product-entry .button').show();
//     }
// } else {
//     $('#prodcoll').css({height:'auto'});
// }
// var thisHeight = $('#collbody').height();
// var thishieFalg= false;
// $('.button').click(function(){
//     if(thishieFalg){
//         $('#prodcoll').animate({height:'68px'},300,function(){
//             $('.button').addClass('collapsed');
//             $('.button').text('展开');
//             thishieFalg = false;
//         });
//     } else {
//         $('#prodcoll').animate({height:thisHeight},300,function(){
//             $('.button').removeClass('collapsed');
//             $('.button').text('收起');
//             thishieFalg = true;
//         });
//     }
// })
// 切换部分默认选中第一个
$('#myTab li').eq(0).addClass('active');
$('.tab-content .tab-pane').eq(0).addClass('active');
$('.popup.hidden-xs').hide();
// 覆盖报错
var H3C = H3C || {};
if((typeof H3C.getCookie) == 'undefined'){
    H3C.getCookie = function(){
        return 0;
    }
}

// 登录状态部分
;(function(){
    function GetCookie(sname)
    {
        var acookie=document.cookie.split(";");
                                                                 
        for(var i=0;i<acookie.length;i++)                        
        {                                                        
            var arr=acookie[i].split("=");                       
            if(sname==trim(arr[0]))                              
            {                                                                                          
                if(arr.length>1)  
            {                 
            userName = arr[1].substring(0,60);           
                    return unescape(userName);                         
                }
            else                                             
                {
            return "";
            }                                       
            }                                                    
        }                                                        
        return "";                                               
    }                                                            
     function trim (trimStr)                                     
    {                                                            
        return trimStr.replace(/(^\s*)|(\s*$)/g, "");            
    }  
    function GetCurUrl()
    {
     var curUrl = window.location.href;
     var arrayStr = curUrl.split("?ResponseTicket");
     return arrayStr[0];
    }                                                          
    with (document) {                          
        if(GetCookie("USER_ID").length>0)                          
        {                 
            $('.headRightBox .rigiHead').eq(0).hide();
            $('.headRightBox .rigiHead').eq(1).html("欢迎 <a href='javascript:volid(0);' class='red'>" + GetCookie("USER_ID") + "</a>&nbsp;|&nbsp;<a href='/cn/My_H3C/Commen_User/My_ProfileCenter/' title='修改您的个人信息、密码'>修改信息</a>&nbsp;|&nbsp;<a href='/cn/Aspx/Home/Login/LogOutPage.aspx?backurl=" + GetCurUrl() + "' title='退出登录'>退出&nbsp;</a>").css({ 'margin-right': '20px' });//修改昵称等内容
            $('.headRightBox').css({width:'auto'});//宽度增加    
        }                                  
    }
})()
// 回到顶部添加
;(function(){
    // 添加代码
    $('body').append('<div class="gotoTopBtn">'+
            '<img src="tres/NewWebUI/images/threeAll/scrollTopBtnBg.png" alt="回到顶部">'+
        '</div>')
    $(window).scroll(function(){
        var scrollHeight = $(window).height();
        if ($('html').scrollTop() > scrollHeight) {
            $('.gotoTopBtn').show();
        } else {
            $('.gotoTopBtn').hide();
        }
    })
    $('.gotoTopBtn').click(function(){
        $('html').animate({scrollTop: 0},300,'linear',function(){})
    })
})()

// 调整展开图片压缩问题
$('.serversCon .maintanBoxCon p img').css({height:'auto'})

// 管理团队部分修改
window.onload= function(){
    onscriptsJS();//调用一级页面js
    if($('.secondDiv').length > 0 && $('.secondDiv.threeDiv').length == 0){
        secondscriptsJS();//调用二级页面js
    }
    if($('.secondDiv.threeDiv').length > 0){
        threeScriptJs();
    }
}
; (function () {
    //修改面包屑问题
    //产品面包屑问题 新的三级页面
    if ($('#crumbs .secondWrapBox a[class="blue3"]').eq(2).text() == "产品介绍") {
        $('#crumbs .secondWrapBox a[class="blue3"]').eq(2).attr("href", "/cn/Products___Technology/EnterpriseProduct/");
        $('#crumbs .secondWrapBox a[class="blue3"]').eq(2).text("企业级产品");
    }
    //产品面包屑问题 老的页面
    if ($('.crumbs .koli a[class="blue3"]').eq(2).text() == "产品介绍") {
        $('.crumbs .koli a[class="blue3"]').eq(2).attr("href", "/cn/Products___Technology/EnterpriseProduct/");
        $('.crumbs .koli a[class="blue3"]').eq(2).text("企业级产品");
    }
    //新IT智慧产业联盟面包屑问题
    if (typeof ($('#crumbs .secondWrapBox').html()) != 'undefined' && $('#crumbs .secondWrapBox').html().indexOf('联盟介绍') != -1) {
        $('#crumbs .secondWrapBox').html($('#crumbs .secondWrapBox').html().replace('联盟介绍', '新IT智慧产业联盟'));
    }
    //添加评论路径/cn
    if (typeof ($('iframe').attr("src")) != 'undefined' && $('iframe').attr("src").indexOf('/Aspx/') != -1 && $('iframe').attr("src").indexOf('/cn/') == -1) {
        $('iframe').attr("src", 'http://www.h3c.com/cn' + $('iframe').attr('src'));
    }
    //添加反馈路径/cn
    if (typeof ($('.prolist_container .pro_right .pro_add a').attr("href")) != 'undefined' && $('.prolist_container .pro_right .pro_add a').attr("href").indexOf('/About_H3C/') != -1 && $('.prolist_container .pro_right .pro_add a').attr("href").indexOf('/cn/') == -1) {
        $('.prolist_container .pro_right .pro_add a').attr("href", 'http://www.h3c.com/cn' + $('.prolist_container .pro_right .pro_add a').attr('href'));
    }

    //修改公司动态链接
    if (typeof ($('.tab-content7 .quickTabContent .quickTabInner:eq(2) h3 a').attr("href")) != 'undefined' && $('.tab-content7 .quickTabContent .quickTabInner:eq(2) h3 a').attr("href").indexOf('/News_Media/News_Media/') != -1) {
        var href = $('.tab-content7 .quickTabContent .quickTabInner:eq(2) h3 a').attr("href");
        $('.tab-content7 .quickTabContent .quickTabInner:eq(2) h3 a').attr("href", href.substring(0, href.lastIndexOf("News_Media")));
    }

    // 右侧帮助咨询
    $(function () {
        $(".tabhelp").click(function () {
            if ($(this).hasClass("off")) {
                //智能终端产品
                if($(this).attr("id")=="rhelp")
                {
                    $(".righthelp").animate({ right: "0px", height: "200px" });
                }
                else
                {
                    $(".righthelp").animate({ right: "0px", height: "390px" });
                }
                $(this).removeClass("off");
            } else {
                $(".righthelp").animate({ right: "-240px", height: "200px" });
                $(this).addClass("off");
            }
        });
    })
    //企业级产品除了新网络(SDN&NFV)、云计算、大数据 、404页面 右侧添加帮助咨询  
    var url=window.location.href;
    if((url.indexOf('/Products___Technology/Products/')!=-1&&url.indexOf('/Products/H3Cloud/')==-1&&url.indexOf('/Products/New_network/')==-1&&url.indexOf('/Products/Big_Data/')==-1&&url.indexOf('/404.htm')==-1&&$('div').hasClass("righthelp")==false))
    {
        // 添加代码
        $('body').append('<div class="righthelp">'+
        '<div class="tabhelp off">'+
            '<img src="/cn/tres/WebUI/images/tabhelp.jpg">'+
        '</div>'+
        '<div class="pophelp">'+
            '<ul>'+
                '<li class="lih1">H3C 为您服务</li>'+
                '<li class="lih2">产品和解决方案售前咨询方式:</li>'+
                '<li class="lirow blueA">'+
                    '<img src="/cn/tres/WebUI/images/pophelp01.png" width="29" height="24">'+
                    '<a href="/cn/About_H3C/Contact_Us/Shopping/">网上提交购买意向</a> </li>'+
                '<li class="lirow blueA">'+
                    '<img src="/cn/tres/WebUI/images/pophelp02.png" width="29" height="24">'+
                    '<a href="/cn/About_H3C/Contact_Us/Office/">联络H3C办事处</a> </li>'+
                '<li class="lirow blueA">'+
                    '<img src="/cn/tres/WebUI/images/pophelp03.png" width="29" height="24">'+
                    '<a href="http://www.h3c.com/cn/BizPortal/ChannelPartner/AuthAgent/PartnerAgentSearch.aspx">'+
                        '联络H3C合作伙伴</a> </li>'+
                '<li class="lirow">'+
                    '<img src="/cn/tres/WebUI/images/pophelp04.png" width="29" height="24">'+
                    '<span>400-810-0504 转 1<span> </li>'+
                '<li class="liline"></li>'+
                '<li class="lirow">'+
                    '<img src="/cn/tres/WebUI/images/pophelp05.png" width="29" height="29">'+
                    '<p class="blueA">'+
                        '<span><b>售前咨询</b><span><br />'+
                            '<a style="cursor: pointer;" href="/cn/Home/Live800/">H3C售前工程师在线为您提供帮助</a>'+
                    '</p>'+
                '</li>'+
                '<li class="liline"></li>'+
                '<li class="lirow">'+
                    '<img src="/cn/tres/WebUI/images/pophelp05.png" width="29" height="29">'+
                    '<p class="blueA">'+
                        '<span><b>SOHO分销售后咨询</b><span><br />'+
                            '<a style="cursor: pointer;" href="http://help.h3c.com/daheng/chatClient/chatbox.jsp?companyID=8960&configID=14&enterurl=%e5%ae%98%e7%bd%91%e4%ba%a7%e5%93%81%e6%8a%80%e6%9c%af%e6%b5%ae%e5%8a%a8%e6%a1%86"'+
                                'target="_blank">提供7*24小时，一站式服务，自助查询等</a>'+
                    '</p>'+
                '</li>'+
            '</ul>'+
        '</div>'+
    '</div>')
  }  
  
  //智能终端产品右侧添加帮助咨询
  if((url.indexOf('/IntelligentTerminalProducts/Standard-Network/')!=-1||url.indexOf('/IntelligentTerminalProducts/Intelligence-Center/')!=-1||url.indexOf('/IntelligentTerminalProducts/Intelligence-Home/')!=-1)&&url.indexOf('/404.htm')==-1&&$('div').hasClass("righthelp")==false)
  {
        // 添加代码
        $('body').append('<div class="righthelp">'+
        '<div class="tabhelp off" id="rhelp">'+
            '<img src="/cn/tres/WebUI/images/tabhelp.jpg">'+
        '</div>'+
        '<div class="pophelp">'+
            '<ul>'+
                '<li class="lih1">H3C 为您服务</li>'+
                '<li class="lih2">产品售前售后咨询方式：</li>'+
                '<li class="lirow blueA">'+
                    '<img src="/cn/tres/WebUI/images/pophelp03.png" width="29" height="24">'+
                    '<a href="http://help.h3c.com/daheng/chatClient/chatbox.jsp?companyID=8960&configID=19&enterurl=%E5%AE%98%E7%BD%91%E5%94%AE%E5%89%8D">'+
                        '在线咨询</a> </li>'+
                '<li class="lirow">'+
                    '<img src="/cn/tres/WebUI/images/pophelp04.png" width="29" height="24">'+
                    '<span>400-600-6363<span> </li>'+
            '</ul>'+
        '</div>'+
       '</div>')
  }  
  
})()

