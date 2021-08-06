// 是否上市1代表上市，0代表未上市，默认为1
var onMarket = 1;

$(document).ready(function () {
  // 提交按钮出发事件
  $("#submitBtn").click(function(){
    // 公司名称
    var companyName = $('#companyName')[0].value;
    // 主营产品
    var product = $('#product')[0].value;
    // 公司产值
    var outputValue = $('#outputValue')[0].value;
    // 工厂面积
    var companyArea = $('#companyArea')[0].value;
    // 工厂人数
    var workerNumber = $('#workerNumber')[0].value;
    // 联系人
    var contactPerson = $('#contactPerson')[0].value;
    // 联系电话
    var contactPhone = $('#contactPhone')[0].value;
    var data = {
      compay_name: companyName,
      product: product,
      on_market: onMarket,
      output_value: outputValue,
      factory_area: companyArea,
      factory_peopnum: workerNumber,
      name: contactPerson,
      phone: contactPhone,
    }

    if (validateForm(data)) {
      $.ajax({
        type: "post",
        data:data,
        url:"http://www.tvtb.cn/pc/pc/supplier-coop",
        dataType: "json",
        success: function(data){
          alert(data['msg']);
          if(data['code'] == "0"){
            $('.input').val("");
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
//   if (onMarket == 0 && id == 1) {
//     onMarket = 1;
//     $("#unChecked").attr("src","../assets/images/unchecked.png");
//     $("#checked").attr("src","../assets/images/checked.png");
//   }
//   if (onMarket == 1 && id == 2) {
//     onMarket = 0;
//     $("#unChecked").attr("src","../assets/images/checked.png");
//     $("#checked").attr("src","../assets/images/unchecked.png");
//   }
// }

// 表单验证
function validateForm(data) {
  var formIsOk = false;
  if (data.compay_name.length == 0) {
    alert('公司名称不能为空');
  } else if (data.name.length == 0) {
    alert('联系人不能为空');
  } else if (!checkPhoneNumber(data.phone)) {
    alert('联系人电话输入有误');
  } else if (data.product.length == 0) {
    alert('主营产品不能为空');
  } else if (data.factory_area.length == 0) {
    alert('工厂面积不能为空');
  } else if (data.output_value.length == 0) {
    alert('公司产值不能为空');
  } else if (data.factory_peopnum.length == 0) {
    alert('工厂人数不能为空');
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
