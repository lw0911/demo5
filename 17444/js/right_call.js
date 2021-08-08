/*返回顶部*/
function pageScroll(){
//把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数）
window.scrollBy(0,-100);
//延时递归调用，模拟滚动向上效果速度
scrolldelay = setTimeout('pageScroll()',10);
//获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值
var sTop=document.documentElement.scrollTop+document.body.scrollTop;
//判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）
if(sTop==0) clearTimeout(scrolldelay);
}

document.write('<div class="swt-right" id="swt-right">')
document.write('<ul class="fd_u">')
document.write('<li class="swt-right1"><a onclick="openZoosUrl(\'chatwin\',\'\');return false;" href="javascript:void(0)"><span id="num"></span></a></li>')
document.write('<li class="swt-right2"><a onclick="openZoosUrl(\'chatwin\',\'\');return false;" href="javascript:void(0)"></a></li>')
document.write('<li class="swt-right3"><div><input type="text" class="text" onblur="if(!value)value=defaultValue" onfocus="value=\'\'" value="输入您的电话号码" id="tell_num"><input type="button" class="buinb"  name="cb_sub" id="sub_btn" alt="点击免费咨询，我们将有专家为您即时回电！"></div></li>')
document.write('<li class="swt-right4"><a><div class="wx" style="cursor:pointer;"><span class="wicon"></span></div></a></li>')
/*document.write('<li class="swt-right5"><a href="#nogo" class="iconShare"></a></li>')*/
document.write('<li class="swt-right6"><a href="/hfyjy/lylx.html" ></a></li>')
document.write('<li class="swt-right8"><a href=\"javascript:void(0);\" onclick=\"close_swt();\"></a></li>')
document.write('<li class="swt-right7"><a href="javascript:pageScroll();" target="_parent" id="back"></a></li>')
document.write('</ul>')

function close_swt(){
document.getElementById('swt-right').style.display="none";
}
$(document).ready(function() {
    $("#back").hide();
    $(function() {
        $(window).scroll(function() {
            if ($(window).scrollTop() > 550) {
                $("#back").fadeIn(500);
            }
            else
            {
                $("#back").fadeOut(500);
            }
        });
        $("#back").click(function() {
            $('body,html').animate({
                scrollTop: 0
            },
            1000);
            return false;
        });
    });
});

document.write('<div class="jShareArea">')
document.write('<ul>')
document.write('<li id="sinaminiblog" clstag="cxj4pc|keycount|cxj4pc|tools1"><span class="iconWeibo"></span><em class="jText">新浪微博</em></li>')
document.write('<li id="qqmb" clstag="cxj4pc|keycount|cxj4pc|tools2"><span class="iconQQ"></span><em class="jText">腾讯微博</em></li>')
document.write('<li id="neteasemb" clstag="cxj4pc|keycount|cxj4pc|tools3"><span class="icon163"></span><em class="jText">网易微博</em></li>')
document.write('<li id="renren" clstag="cxj4pc|keycount|cxj4pc|tools4"><span class="iconRenren"></span><em class="jText">人人网</em></li>')
document.write('<li id="qzone" clstag="cxj4pc|keycount|cxj4pc|tools5"><span class="iconQzone"></span><em class="jText">QQ空间</em></li>')
document.write('<li id="mogujie" clstag="cxj4pc|keycount|cxj4pc|tools6"><span class="iconMogujie"></span><em class="jText">蘑菇街</em></li>')
document.write('<li id="kaixin001" clstag="cxj4pc|keycount|cxj4pc|tools7"><span class="iconKaixin"></span><em class="jText">开心网</em></li>')
document.write('<li id="douban" clstag="cxj4pc|keycount|cxj4pc|tools8"><span class="iconDouban"></span><em class="jText">豆瓣</em></li>')
document.write('</ul>')
document.write('<ul class="jMoreShare">')
document.write('<li id="facebook" clstag="cxj4pc|keycount|cxj4pc|tools9"><span class="iconFacebook"></span><em class="jText">Facebook</em></li>')
document.write('<li id="twitter" clstag="cxj4pc|keycount|cxj4pc|tools10"><span class="iconTwitter"></span><em class="jText">Twitter</em></li>')
document.write('<li id="pinterest" clstag="cxj4pc|keycount|cxj4pc|tools11"><span class="iconPinterest"></span><em class="jText">Pinterest</em></li>')
document.write('<li id="googleplus" clstag="cxj4pc|keycount|cxj4pc|tools12"><span class="iconGoogleplus"></span><em class="jText">Google+</em></li>')
document.write('</ul>')
document.write('<div class="jLookMore">')
document.write('<span class="jAdd jCurrent" clstag="cxj4pc|keycount|cxj4pc|tools13"><em>+</em>查看全部</span>')
document.write('<span class="jReduce" clstag="cxj4pc|keycount|cxj4pc|tools14"><em>-</em>查看部分</span>')
document.write('</div>')
document.write('</div>')
document.write('</div>')

function GetRandomNum(Min,Max)
{   
  var Range = Max - Min;   
  var Rand = Math.random();   
  return(Min + Math.round(Rand * Range));   
}   
var num = GetRandomNum(4,9);
document.getElementById("num").innerHTML=num;
function show() {
  $("#num").css("display","block");
  var imgid = document.getElementById("num");
  if (imgid.style.visibility == "visible") imgid.style.visibility = "hidden";
  else imgid.style.visibility = "visible";
  setTimeout('show()', 800)
}
show();

$(document).ready(function() {
//首页商务通效果
//首页电话效果
if(document.getElementById('swt-right')){
$("#swt-right ul li.swt-right3").hover(function(){
$(this).children("div").addClass("swt-hover");
$(this).stop().animate({right:"204px"},200);
},function(){
$(this).animate({right:"0px"},200,function(){
$(this).stop().children("div").removeClass("swt-hover");
});
});
} 
});

document.write('<script type="text/javascript"  data-lxb-uid="5184272" data-lxb-gid="38595" src="http://lxbjs.baidu.com/api/asset/api.js?t=' + new Date().getTime() + '" charset="utf-8"></script>');

document.writeln("<script>");
document.writeln("document.getElementById(\"sub_btn\").onclick = function () { ");
document.writeln("lxb.call(document.getElementById(\"tell_num\"));");
document.writeln("};");
document.writeln("</script>");

(function(){
    		var _c_flag = false, _e_flag = false,
    			_con = $('.swt-right'), _share_c = _con.find('.jShareArea'),_share_e = _con.find('.iconShare'),
    			HREF = encodeURIComponent(window.location.href),
    			TITLE = document.title,
				CONTENT = encodeURIComponent('' == ''?'合肥XXX美容医院':''),
				    			
    			
    			MAP = {
    				sinaminiblog : 'http://v.t.sina.com.cn/share/share.php?appkey=583395093&title=' + TITLE + '&url=' + HREF + '&source=bshare&retcode=0&pic=',
    				qqmb : 'http://v.t.qq.com/share/share.php?title=' + TITLE + '&site=' + HREF + '&pic=&url='+ HREF + '&appkey=dcba10cb2d574a48a16f24c9b6af610c',
    				renren : 'http://widget.renren.com/dialog/share?resourceUrl=' + HREF + '&title=' + '&images=&description=' + TITLE,
    				qzone : 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + HREF + '&title=' + '&pics=&summary=' + TITLE,
    				kaixin001 : 'http://www.kaixin001.com/rest/records.php?url='+HREF +'&content=' + TITLE+'&pic=&aid=100013770&style=111',
    				douban : 'http://www.douban.com/recommend/?url=' + HREF  + '&title=' + TITLE + '&v=1',
    				neteasemb : 'http://t.163.com/article/user/checkLogin.do?source=' + encodeURIComponent('ubeauty.cn') + '&info=' + TITLE + ' ' + HREF + '&images=',
    				meilishuo : 'http://www.meilishuo.com/meilishuo_share?siteurl=' + HREF + '&content=' + TITLE,
    				mogujie : 'http://www.mogujie.com/mshare?url=' + HREF + '&content=' + TITLE + '&from=mogujie&pic=',
    				qqxiaoyou : 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?to=pengyou&url=' + HREF + '&pics=&title=' + '&summary=' + TITLE,
    				facebook : 'http://www.facebook.com/share.php?src=360buy&u=' + HREF,
    				twitter : 'http://twitter.com/intent/tweet?text=' + TITLE + ' ' + HREF,
    				googleplus : 'https://plus.google.com/share?url=' + HREF + '&hl=zh-CN',
    				pinterest : 'https://pinterest.com/login/?next=/pin/create/bookmarklet/?media=&url='+ HREF + '&alt=&title=' + TITLE + '&is_video=false'
    				
    			};
    			
    		if(jQuery.browser.msie&&jQuery.browser.version.match(/6\.0/)){
			_con.css({
				position : 'absolute'
			});
			var _w = $(window).height() - _con.height() - 10;
			$(window).scroll(function(){
				_con.css('top',_w + $(this).scrollTop() + 'px');
			});
		}
		
		function _event_init(){
    			_share_e.mouseenter(function(){
    			var _this = this;
    			_share_c.show();
    			$(_this).addClass('jCurrent');
    				_e_flag = true;
    			}).mouseleave(function(){
    				var _this = this;
    				_e_flag = false
    				setTimeout(function(){
    					if(!_e_flag && !_c_flag){
    						_share_c.hide();
    						$(_this).removeClass('jCurrent');
    					}
    				},0);
    			});
				
				
				_share_c.mouseenter(function(){
    				_c_flag = true;
    			}).mouseleave(function(){
    				_c_flag = false;
    				setTimeout(function(){
    					if(!_e_flag && !_c_flag){
    						_share_c.hide();
    						_share_e.removeClass('jCurrent');
    					}
    				},0)	
    			});
    			
    			_share_c.find('.jLookMore').click(function(e){
    				var __tar = $(e.srcElement || e.target),
					__cls = __tar.attr('class');
				if(__cls.match(/Add/g)){
					_share_c.find('.jMoreShare').show();
				}
				else{
					_share_c.find('.jMoreShare').hide();
				}
				__tar.hide().removeClass('jCurrent');
				__tar.siblings().show().addClass('jCurrent');
    			});
    			_share_c.find('li').click(function(){
    				var url = MAP[$(this).attr('id')],
    					top = $(window).height() > 400?($(window).height() - 400)/2 : 50,
    					left = $(window).width() > 600?($(window).width() - 600)/2 : 50;
    				window.open(url,'', 'height=400, width=600,left='+left+',top=' + top);
    			});
    			
    			_con.find('.iconTop').click(function(){
    				$(window).scrollTop(0);
    			});
    			
    		}	
    		_event_init();
    	})();