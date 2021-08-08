$(window).on('scroll', function () {
  if ($(window).scrollTop() > 400) {
    $('.float_bottom').removeClass('on');
    if (!$('body').hasClass('index') || !$('body').hasClass('body_pro')) {
      $('.fixed_left').addClass('active');
    }
  } else {
    $('.fixed_left').removeClass('active');
  }
  if ($('body').hasClass('body_pro')) {
    var cp_nav = $('.cp_nav').offset().top - $('.header').height() / 2;
    if ($(window).scrollTop() > cp_nav) {
      $('.fixed_left').addClass('active');
    } else {
      $('.fixed_left').removeClass('active');
    }
  }
});

// 表单城市选择
$('.app_sl,.bottom_choose_list').click(function (e) {
  e.stopPropagation();
  $(this).find('ul').show().parent().siblings().find('ul').hide();
});
$('.app_sl,.bottom_choose_list').on('click', 'li', function (e) {
  e.stopPropagation();
  var text = $(this).text();
  $(this).parent().hide().siblings('p').text(text);
});
$(window).click(function () {
  $('.app_sl ul,.bottom_choose_list ul').hide();
});


$('.float_bottom_max .submit').hover(function () {
  $(this).removeClass('active');
}, function () {
  $(this).addClass('active');
});

// 预约表单
$('.yy_now').click(function () {
  var name = $('.apointment_show input[name=name]').val();
  var tel = $('.apointment_show input[name=tel]').val();
  var state = $('.apointment_show .state p').text();
  var city = $('.apointment_show .city p').text();
  sts = 'ok';
  if (name.length < 1 && sts == 'ok') {
    msg = '请填写姓名';
    sts = 'bad';
  }
  if (tel.length < 1 && sts == 'ok') {
    msg = '请填写手机号';
    sts = 'bad';
  }
  if (city == '城市' && sts == 'ok') {
    msg = '请选择城市';
    sts = 'bad';
  }
  if (sts == 'ok') {
    $.post();
  } else {
    alert(msg);
  }
});

// 加盟表单
$('.zsjm .jmsubmit').click(function () {
  var name = $('.zsjm input[name=name]').val();
  var tel = $('.zsjm input[name=tel]').val();
  var state = $('.zsjm .state p').text();
  var city = $('.zsjm .city p').text();
  sts = 'ok';
  if (name.length < 1 && sts == 'ok') {
    msg = '请填写称呼';
    sts = 'bad';
  }
  if (tel.length < 1 && sts == 'ok') {
    msg = '请填写手机号';
    sts = 'bad';
  }
  if ((city == '加盟城市' || city == '城市') && sts == 'ok') {
    msg = '请选择城市';
    sts = 'bad';
  }
  if (sts == 'ok') {
    $.post();
  } else {
    alert(msg);
  }
});

// 预约表单获取对应省份城市
function yycity(id, t) {
  if (t == 's') {
    $('.yyform .city ul').html('');
    $('.yyform .city p').text('城市');
    // <!-- run:$data = phpsys_datalink('省份/城市') -->
    // $data[id][sonlist] as $key=>$value
    // $('.yyform .city ul').append("<li>" + {{$value[title]}} + "</li>");
    // end
  }
}

// 加盟表单获取对应省份城市
function jmcity(id, t) {
  if (t == 's') {
    $('.zsjm .city ul').html('');
    $('.zsjm .city p').text('城市');
    // <!-- run:$data = phpsys_datalink('省份/城市') -->
    // $data[id][sonlist] as $key=>$value
    // $('.zsjm .city ul').append("<li>" + {{$value[title]}} + "</li>");
    // end
  }
}

// 返回顶部
$('.retrun_top').click(function () {
  $('html,body').animate({scrollTop:0},400);
});