//留言板
$(function () {
    $("#btnPost").bind("click", function () {
        var bbb = true;
       
    
        if ($('#message').val().length < 5) {
            bbb = false;
            layer.tips('请填写需求描述。', '#message', {
                tips: [1, '#3595CC'],
                time: 4000
            });
        }
        if ($('#tel').val().length < 5) {
            bbb = false;
            layer.tips('请填写联系电话。', '#tel', {
                tips: [1, '#3595CC'],
                time: 4000
            });
        }
        if ($('#names').val().length < 1) {
            bbb = false;
            layer.tips('请填写姓名。', '#names', {
                tips: [1, '#3595CC'],
                time: 4000
            });
        }
        if ( bbb==true) {
            $.post("http://www.Tiunion.com.cn/inc/SaveMessage.ashx",
                        { name: $('#names').val(), tel: $('#tel').val(), message: $('#message').val() },
                        function (data) {
                            layer.alert(data);
                            $('#names').val("");
                            $('#tel').val("");
                            $('#message').val("");
                        }
                 );
        }
      
    })
});