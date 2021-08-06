// 代理类别，0为皇冠代理，1为区域联合创始人
var agencyType = 2;

$(document).ready(function () {
  // 提交按钮出发事件
  $("#submitBtn").click(function(){
    // 姓名
    var name = $('#name')[0].value;
    // 手机
    var phone = $('#phone')[0].value;
    // 备注
    var remark = $('#remark')[0].value;
    var data = {
      name: name,
      phone: phone,
      remark: remark,
      agent_grade: agencyType,
    }
    if (validateForm(data)) {
      $.ajax({
        type: "post",
        data:data,
        url:"http://www.tvtb.cn/pc/pc/open-agent",
        dataType: "json",
        success: function(data){
          alert(data['msg']);
          if(data['code'] == "0"){
            $('.input').val("");
            $('.remarkInput').val("");
          }
        },
        error: function(data){
          alert("提交失败，请重新提交");
        } ,
      });
    }
  });
});

// 上市与未上市按钮切换
// function changeImg(id){
//   if (agencyType == 1 && id == 1) {
//     agencyType = 2;
//     $("#unChecked").attr("src","../assets/images/unchecked.png");
//     $("#checked").attr("src","../assets/images/checked.png");
//   }
//   if (agencyType == 2 && id == 2) {
//     agencyType = 1;
//     $("#unChecked").attr("src","../assets/images/checked.png");
//     $("#checked").attr("src","../assets/images/unchecked.png");
//   }
// }

// 表单验证
function validateForm(data) {
  var formIsOk = false;
  if (data.name.length == 0) {
    alert('姓名不能为空');
  } else if (!checkPhoneNumber(data.phone)) {
    alert('请输入正确的手机号');
  } else {
    formIsOk = true;
  }
  return formIsOk;
}

// 手机号码验证
function checkPhoneNumber(mobile) {
  var myreg = /^1(3|4|5|7|8)\d{9}$/;
  if(!myreg.test(mobile)) {
    return false;
  } else {
    return true;
  }
}
