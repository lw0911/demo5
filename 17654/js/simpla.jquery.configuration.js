    $(function(){
        $(".check-all").click(function(){
            // 直接将其它选项的选中状态更改为当前全选框的状态即可。
            $("input[name='did']").attr('checked', this.checked);
        });
    });