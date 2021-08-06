var websiteID = "4";

  var fileRandomFileUrl = "/";

  (function(window, $) {

    $(".shj_index_jsq_radio_bg").click(function() {

      var that = $(this).parent();

      $(that).siblings().find(".shj_index_jsq_ricon").removeClass("shj_index_jsq_ricon_check");

      $(that).find(".shj_index_jsq_ricon").addClass("shj_index_jsq_ricon_check");

      $(that).siblings('input').val($(that).attr("code"));

    });

    $(".shj_index_jsq_select_bg").click(function() {

      close_jsq_select();

      $(this).parent().css("border-color", "#75b43f");

      $(this).siblings(".shj_index_jsq_select_list").show();

    });

    $(".shj_index_jsq_select_list li").click(function() {

      $(this).parent().siblings(".shj_jsq_rst").html($(this).html()).attr("data-v", $(this).attr("data-v"));

      $(this).siblings('input').val($(this).attr("data-v"));

      close_jsq_select();

      changeCity();

    });

    $("body").click(function(e) {

      if (e.target.className != 'shj_index_jsq_select_bg') {

        close_jsq_select();

      }

    })

    function close_jsq_select() {

      $(".shj_index_jsq_select").css("border-color", "#c8c8c8");

      $(".shj_index_jsq_select").find(".shj_index_jsq_select_list").hide();

    };

    changeCity();

  })(window, window.jQuery);

  function changeCity() {

    var abc = $("#testForm input[name='city']").val();

    var that = "";

    that = $($(".two")[0]).parent(); //改

    $(that).siblings().find(".shj_index_jsq_ricon").removeClass("shj_index_jsq_ricon_check");

    $(that).find(".shj_index_jsq_ricon").addClass("shj_index_jsq_ricon_check");

    $(that).siblings('input').val($(that).attr("code"));

  }
  
var reg = new RegexKit();

  function checkRoomInspection() {

    $("#js_reg_size2 input[name='orignURL']").val(window.location.href);

    var bed = $("#js_reg_size2 select[name=bedRoomCnt]").val();

    var living = $("#js_reg_size2 select[name=livingRoomCnt]").val();

    var bath = $("#js_reg_size2 select[name=bathRoomCnt]").val();

    var area = $("#js_reg_size2 input[name=area]").val();

    var building = $("#js_reg_size2 input[name=build]").val();

    var name = $("#js_reg_size2 input[name=name]").val();

    var mobile = $("#js_reg_size2 input[name=phoneNo]").val();

    // 	var yzCode = $("#js_reg_size input[name=yzCode]").val();

    if (bed == "") {

      new Msg({
        id: 'js_msg1',
        icon: 'warning',
        text: "请选择室！"
      });

      return false;

    }

    if (living == "") {

      new Msg({
        id: 'js_msg1',
        icon: 'warning',
        text: "请选择厅！"
      });

      return false;

    }

    if (bath == "") {

      new Msg({
        id: 'js_msg1',
        icon: 'warning',
        text: "请选择卫！"
      });

      return false;

    }

    if (area == "") {

      new Msg({
        id: 'js_msg1',
        icon: 'warning',
        text: "面积不能为空！"
      });

      return false;

    }

    if (!reg.matchPositiveDigital(area)) {

      new Msg({
        id: 'js_msg12',
        icon: 'warning',
        text: "面积只能为大于0的数字！"
      });

      return false;

    }

    if (building == "") {

      new Msg({
        id: 'js_msg2',
        icon: 'warning',
        text: "楼盘信息不能为空！"
      });

      return false;

    }

    if (name == "" && mobile == "") {

      new Msg({
        id: 'js_msg3',
        icon: 'warning',
        text: "QQ和微信选填一个！"
      });

      return false;

    } else {

      if (name != "" && name.search(/^[1-9]\d{4,8}$/) == -1) {

        new Msg({
          id: 'js_msg3',
          icon: 'warning',
          text: "qq格式错误"
        });

        return false;

      }

      $.ajax({

        type: 'post',

        url: '/room/inspection/save',

        data: $("#js_reg_size2").serialize(),

        error: function(jqXHR, textStatus) {

          console.log(jqXHR);

          console.log(textStatus);

        },

        success: function(data) {

          if (data.flag == true) {

            var msg = new Msg({
              id: 'js_msg9',
              icon: 'warning',
              text: "登记成功！",
              cbOk: function() {

                $("#js_reg_size2 input[name=area]").val("");

                $("#js_reg_size2 input[name=build]").val("");

                $("#js_reg_size2 input[name=name]").val("");

                $("#js_reg_size2 input[name=phoneNo]").val("");

                $("#js_reg_size2 input[name=yzCode]").val("");

                msg.close();

              }
            });

          } else {

            new Msg({
              id: 'js_msg10',
              icon: 'warning',
              text: data.message
            });

          }

        }

      });

      return true;

    }

  };

  //热销商品轮播

  var mySwiperhot = new Swiper('#hot_banner_top', {

    //pagination: '.pagination',

    loop: true,

    grabCursor: false,

    paginationClickable: true,

    autoplay: 5000,

    nextButton: '#hot_banner_top_right',

  });

  var mySwiperhot = new Swiper('#hot_banner_top_2', {

    //pagination: '.pagination',

    loop: true,

    grabCursor: false,

    paginationClickable: true,

    autoplay: 5000,

    nextButton: '#hot_banner_top_right',

  });

  var mySwiper1 = new Swiper('#hot_banner_bottom', {

    //pagination: '.pagination',

    loop: true,

    grabCursor: false,

    paginationClickable: true,

    autoplay: 3000,

    prevButton: '#hot_banner_bottom_left',

  });
   function scroll(){ 

  $(".mybox ul").animate({"margin-left":"-110px"},function(){$(".mybox ul li:eq(0)").appendTo($(".mybox ul"));    

  $(".mybox ul").css({"margin-left":0})  })  }   

setInterval(scroll,3000) 




$(".shj_index_jsq_radio").click(function(){
	
	
	$("#fg").val()==($(this).text());
	
	})
	
