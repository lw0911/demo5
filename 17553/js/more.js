var _newsList1 = [],_newsList2 = [];//临时存储li循环内容
var news1 = {
  _default: 3, //默认显示图片个数
  _loading: 1, //每次点击按钮后加载的个数
  init: function () {
    var lis = $(".load-hide .row");
    $(".news_box_1>div").html("");
    for (var n = 0; n < news1._default; n++) {
      lis.eq(n).appendTo(".news_box_1>div");
    }
    for (var i = news1._default; i < lis.length; i++) {
      _newsList1.push(lis.eq(i));
    }
    $(".load-hide").html("");
  },
  loadMore: function () {
    for (var i = 0; i < news1._loading; i++) {
      var target = _newsList1.shift();
      if (!target) {
        $('.news_box_1 .btn_more').addClass('none').html("全部加载完毕...");
        break;
      }
      $(".news_box_1>div").append(target);
    }
  }
}
var news2 = {
  _default: 3, //默认显示图片个数
  _loading: 1, //每次点击按钮后加载的个数
  init: function () {
    var lis = $(".load-hidden .row");
    $(".news_box_2>div").html("");
    for (var n = 0; n < news2._default; n++) {
      lis.eq(n).appendTo(".news_box_2>div");
    }
    for (var i = news2._default; i < lis.length; i++) {
      _newsList2.push(lis.eq(i));
    }
    $(".load-hide").html("");
  },
  loadMore: function () {
    for (var i = 0; i < news2._loading; i++) {
      var target = _newsList2.shift();
      if (!target) {
        $('.news_box_2 .btn_more').addClass('none').html("全部加载完毕...");
        break;
      }
      $(".news_box_2>div").append(target);
    }
  }
}
news1.init();
news2.init();

var caseList = [];
var caseApp = {
  _default: 4, //默认显示图片个数
  _loading: 2, //每次点击按钮后加载的个数
  init: function () {
    var lis = $(".case-load .wow");
    $(".case-box .row").html("");
    for (var n = 0; n < caseApp._default; n++) {
      lis.eq(n).appendTo(".case-box .row");
      console.log(n);
    }
    for (var i = caseApp._default; i < lis.length; i++) {
      _newsList2.push(lis.eq(i));
    }
    $(".case-load").html("");
  },
  loadMore: function () {
    for (var i = 0; i < caseApp._loading; i++) {
      var target = _newsList2.shift();
      if (!target) {
        $('.case-box .btn_more').addClass('none').html("全部加载完毕...");
        break;
      }
      $(".case-box .row").append(target);
    }
  }
}
caseApp.init();