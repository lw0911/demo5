$(function(){
    // 对分页的链接添加处理
    if (!tools.isEmptyValue($('.pagination').toArray())){
        $('.pagination>a ').each(function(index, el) {
            if ($(el).attr('href') !="#") {
                el.href+=location.search;
            };
        });
    };

    // 验证码
   $('input[name="captchas"]').one('focusin',function(e){
    img = $(this).next('img.captchas');
    if (tools.isEmptyValue(img)) {
        img = $(this).next().next('img.captchas');
    };
    if ($(img).attr('src') == "" || $(img).attr('src') == "#" || $(img).attr('src') == "/img/blank.png") {
        $(img).attr('src',SITE_URL+'captchas');
    };
	});


    if ($('img.captchas').attr('src') == "" || $('img.captchas').attr('src') == "#" || $('img.captchas').attr('src') == "/img/blank.png") {
    $('img.captchas').attr('src',SITE_URL+'captchas');
	};
// $('img.captchas').after('<a href="#">获取验证码</a>');

	$('img.captchas').click(function(e){
  	  $(this).attr('src','');
   	 $(this).attr('src',SITE_URL+'captchas');
	});


    
});

/**
 * @brief 创建表单验证
 * 注意引用  jquery.validate.js 和 jquery.validate.lang.cn.js
 * @param frm  表单 Id
 * @param rules 验证规则
 */
function make_validate(frm,rules,messages,inline){
    if (inline == 0) {
        inline = "block";
    }else{
        inline = "inline";
    }
    $('#'+frm).validate({
        ignore: ".ignore", // 忽略
        rules:rules,
        onchange: true,
        onblur: true,
        messages:messages,
        errorClass: "help-"+inline+" validate",
        errorElement: "span",
        highlight:function(element, errorClass, validClass) {
            $(element).removeClass('success');
            $(element).addClass('error');
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass('error');
            $(element).addClass('success');
        }
        // ,errorPlacement: function(error, element) {
        //     error.appendTo($(element).parents(".control-group"));
        // }
    });
}

/**
 * @brief 创建表单验证
          带有返回函数, 可以验证后直接用ajax处理
 * 注意引用  jquery.validate.js 和 jquery.validate.lang.cn.js
 * @param frm  表单 Id
 * @param rules 验证规则
 */
function make_validate_submit(frm,rules,messages,submit_fun,inline){
    if (inline == 0) {
        inline = "block";
    }else{
        inline = "inline";
    }
    $('#'+frm).validate({
        ignore: ".ignore", // 忽略
        rules:rules,
        onchange: true, 
        onblur: true,
        messages:messages,
        errorClass: "help-inline validate",
        errorElement: "span",
        highlight:function(element, errorClass, validClass) {
            $(element).removeClass('success');
            $(element).addClass('error');
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass('error');
            $(element).addClass('success');
        },
        submitHandler:function(form){
            form.preventDefault();
            submit_fun(form);
        }
    });
}
