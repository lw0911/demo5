$(function(){
  setSouKW();
  $.ajax({
    url: "http://restapi.amap.com/v3/ip?key=cb31950af4f3e6ec0871b54db01c0ed9",
    dataType: 'jsonp',
    data: '',
    jsonp: 'callback',
    success: function(r) {
      var d = {
        isp: r.province + r.city,
        url: window.location.href,
        refer: document.referrer
      },
      data = JSON.stringify(d);
      $("<input>", {
        type: 'hidden',
        val: data,
        id: 'area',
      }).appendTo('body');
    },
  });
  var hoverMenu = $('#lineMenu li');
  for(var i = 0; i < hoverMenu.length; i++)
  {
    hoverMenu.eq(i).hoverTip({
      child: '.child',
      onClass: 'f-db a-fadeinB',
      leaveClass: 'f-db a-fadeout'
    });
  }
  navSlider();

  toggleMenu($('#hover_more_menu'), 'show');
  function toggleMenu (obj, cls) {
    obj.hover(function () {
      $(this).toggleClass(cls);
    }, function () {
      $(this).toggleClass(cls);
    });
  }

  var courseBox = $('.course .box'), levelBox = $('.level .box');

  for(var i = 0; i < courseBox.length; i++)
  {
    courseBox.eq(i).hover(function () {
      $(this).toggleClass('active');
    }, function () {
      $(this).toggleClass('active');
    });
  }

  for(var i = 0; i < levelBox.length; i++)
  {
    levelBox.eq(i).hover(function () {
      $(this).toggleClass('active');
    }, function () {
      $(this).toggleClass('active');
    });
  }
  

	$('.register').on('click', function(){
    var registerBox = layer.open({
      skin: 'ilayer',
      type: 1,
      title: false,
      closeBtn: 2,
      shade: 0.6,
      shadeClose: true,
      scrollbar: false,
      area: ['720px', '360px'],
      content: $('#register')
    });
  });

  $('.index-slider').unslider({
    dots: true,               //  Display dot navigation
    arrows: {
      prev: '<a class="unslider-arrow a-fadeinL iconfont prev">&#xe62a;</a>',
      next: '<a class="unslider-arrow a-fadeinR iconfont next">&#xe629;</a>'
    },
    nav: function() {
      return '<span class="iconfont">&#xe61a;</span>';
    },
    activeClass: 'active'
  });


  $('.equipment-slider').unslider({
    dots: true,               //  Display dot navigation
    arrows: false,
    autoplay: true,
    nav: function(index) {
      return '<span class="iconfont list' + (index + 1) + '"></span>';
    },
    activeClass: 'active'
  });

  $('.students-slider').unslider({
    dots: true,               //  Display dot navigation
    arrows: {
      prev: '<a class="unslider-arrow a-fadeinL iconfont prev">&#xe62a;</a>',
      next: '<a class="unslider-arrow a-fadeinR iconfont next">&#xe629;</a>'
    },
    nav: function(index) {
      return '<span class="iconfont list' + (index + 1) + '"></span>';
    },
    activeClass: 'active'
  });

  var aName = ['媒体报道', '企业荣誉'];
  $('.honor-slider').unslider({
    dots: true,               //  Display dot navigation
    arrows: false,
    nav: function(index) {
      return '<span>' + aName[index] + '</span>';
    },
    activeClass: 'active'
  });

	function navSlider(){
		var $t, leftX, newWidth;
		$('.nav-lists>ul').append('<div class="slide-block"></div>');
		var $block = $('.slide-block');
		$block.width($(".active").width()).css('left', $('.active a').position().left).data('rightLeft', $block.position().left).data('rightWidth', $block.width());
		$('.nav-lists>ul>li').find('a').hover(function() {
			$t = $(this);
			leftX = $t.position().left;
			newWidth = $t.parent().width();
			$block.stop().animate({
				left: leftX,
				width: newWidth
			},300);
		}, function() {
			$block.stop().animate({
				left: $block.data('rightLeft'),
				width: $block.data('rightWidth')
			},300)
		});
	}
  var sendBtn = $('#send_info');
  sendBtn.on('click', function () {
    var name = $('#reg_name').val(),
    tel = $('#reg_tel').val(),
    age = $('#reg_age').val(),
    sMark = $('#mark').val(),
    sKey = $('#keyword').val(),
    sArea = JSON.parse($('#area').val()),
    sIsp = sArea.isp,
    sUrl = sArea.url,
    sRefer = sArea.refer;

    if(name.length == 0){
      layer.msg('您好, 请输入您的称呼', function(){
        return false;
      });
      return false;
    }
    var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if (!myreg.test(tel)) {
      layer.msg('您好, 请输入正确的手机号码', function(){
        return false;
      });
      return false;
    }

    if(!age){
      layer.msg('您好, 请选择您的年龄段', function(){
        return false;
      });
      return false;
    }

    $.ajax({
      type: "post",
      dataType:'json',
      url: "http://zs.rockyenglish.com/reg/registForPinpai",
      data: {
        Name: name,
        Phone: tel,
        Age: age,
        SalesId: sUrl,
        ProductId: 'SC016',
        Remark: sMark,
        Keyword: sKey,
        Isp: sIsp,
        BURL: sRefer
      },
      success: function(data){
        layer.alert(data.msg, {
          skin: 'msg-layer',
          title: false,
          closeBtn: 0,
          shadeClose: false
        }, function(registerBox){
          window.location.reload();
        });
      }
    });
    return false;
  });

  var footSendBtn = $('#foot_send_info');
  footSendBtn.on('click', function () {
    var name = $('#foot_reg_name').val(),
    tel = $('#foot_reg_tel').val(),
    age = $('#foot_reg_age').val(),
    wechat = $('#foot_reg_wechat').val(),
    sMark = $('#mark').val(),
    sKey = $('#keyword').val(),
    sArea = JSON.parse($('#area').val()),
    sIsp = sArea.isp,
    sUrl = sArea.url,
    sRefer = sArea.refer;

    if(name.length == 0){
      layer.msg('您好, 请输入您的称呼', function(){
        return false;
      });
      return false;
    }
    var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if (!myreg.test(tel)) {
      layer.msg('您好, 请输入正确的手机号码', function(){
        return false;
      });
      return false;
    }

    if(!age){
      layer.msg('您好, 请选择您的年龄段', function(){
        return false;
      });
      return false;
    }

    $.ajax({
      type: "post",
      dataType:'json',
      url: "http://zs.rockyenglish.com/reg/registForPinpai",
      data: {
        Name: name,
        Phone: tel,
        Age: age,
        Wechat: wechat,
        SalesId: sUrl,
        ProductId: 'SC016',
        Remark: sMark,
        Keyword: sKey,
        Isp: sIsp,
        BURL: sRefer
      },
      success: function(data){
        layer.alert(data.msg, {
          skin: 'msg-layer',
          title: false,
          closeBtn: 0,
          shadeClose: false
        }, function(registerBox){
          window.location.reload();
        });
      }
    });
    return false;
  });
	
	//页面尾部滚动条
  $(window).scroll(function() {
    var e = $(".r-ft").position().top, f = $(".foot-reg").height(), g = $(window).height();
    $(window).scrollTop() >= e - g + f ? $(".foot-reg").removeClass("fixed") : $(".foot-reg").addClass("fixed")
  });
  // 后期添加的 start
  $(".course-tab").rTabs({
      bind : 'click',
      animation : 'left'
  });
  $('.development-slider').unslider({
      autoplay: false,
      selectors: {
          container: '.container',
          slides: '.box'
      },
      nav: function (index, label) {
          if (index === 0) {
              return '<i></i><span>' + 2003 + '</span><br />' + 2003;
          }
          else if (index === 12){
              return '<i></i><span>Yep</span><br />go ahead!';
              return '<i></i><br />go ahead!';
          }
          return '<i></i><span>' + (index + 2006) + '</span><br />' + (index + 2006);
      },
      index: 11,
      animation: 'fade',
      arrows: false
  });
  $('.tab-assess').easytabs();
  $('.list').unslider({
    nav: false,
    animation: 'fade'
  });
  $('.carolist ol>li').hover(function (){
    $(this).addClass('onhover');
  }, function () {
    $(this).removeClass('onhover');
  });
  $('.list').unslider({
    nav: false,
    animation: 'fade'
  });
  // 后期添加的 end
});
function setSouKW() {
  try {
      var domain = refer.match(/http:\/\/www\.([^\/]+)\//)[1];
      var kwArr = [{
          "dm": "google.com",
          "kw": "q",
          "name": "谷歌"
      }, {
          "dm": "google.cn",
          "kw": "q",
          "name": "谷歌中国"
      }, {
          "dm": "baidu.com",
          "kw": "wd|word",
          "name": "百度"
      }, {
          "dm": "soso.com",
          "kw": "q",
          "name": "搜搜"
      }, {
          "dm": "yahoo.com",
          "kw": "q",
          "name": "雅虎"
      }, {
          "dm": "bing.com",
          "kw": "q",
          "name": "bing"
      }, {
          "dm": "sogou.com",
          "kw": "query",
          "name": "搜狗"
      }, {
          "dm": "youdao.com",
          "kw": "q",
          "name": "雅虎"
      }];
      for (var item in kwArr) {
          var $dm = kwArr[item].dm;
          var $kw = kwArr[item].kw;
          var $name = kwArr[item].name;
          if (domain == $dm) {
              eval("var reg = /[?&](" + $kw + ")=(.+?)(&|$)/ig;");
              var keywordCollection = reg.exec(refer);
              var keyword = "";
              while (keywordCollection != null) {
                  keyword += RegExp.$2 + ",";
                  keywordCollection = reg.exec(refer);
              }
              if (keyword != "") {
                  keyword = keyword.substring(0, keyword.length - 1);
              }
              $('#mark').val('正常');
              $('#keyword').val(decodeURI(keyword));
              break;
          }
      }
  } catch (er) {
      $('#mark').val('异常，地址无效或者不是通过搜索引擎链接过来的访问');
  }
}