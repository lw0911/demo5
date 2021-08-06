function newcheckform() {

    var hx = "";
    hx = $(".hx_1").text() + $(".hx_2").text() + $(".hx_3").text();

    if ($("#name").val() == "") {
      alert("请填写您的称呼");
      return false;

    }
    if ($("#xq").val() == "") {
      alert("请填写小区名称或地址");
      return false;

    }
    if ($("#mj").val() == "") {
      alert("请填写房屋面积");
      return false;

    }
    if ($("#tel").val() == "" || $("#tel").val().length != 11) {
      alert("请正确填写您的手机号");
      return false;

    }
    var dataString = 'hx=' + hx + '&mj=' + $("#mj").val() + '&xq=' + $("#xq").val() + '&ch=' + $("#name").val() + '&tel=' + $("#tel").val() + '&fg=' + $("#fg").val() + '&action=post' + '&diyid=1&do=2&dede_fields=hx,text;mj,text;xq,text;ch,text;tel,text;fg,text&dede_fieldshash=b1ccc4fd17d3ec6b7e27bc66453ad17b';

    $.ajax({
      type: 'post',
      url: '/plus/diy.php',
      dataType: 'text',
      data: dataString,
      success: function(data) {
        $('#name').val('');
        $('#tel').val('');
        $('#mj').val('');
        $('#xq').val('');

        alert("提交成功，我们将尽快与您联系");

      }

    });

  }