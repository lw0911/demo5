$(function() {
	/*选择年月日*/
	$('.ymd_date').datetimepicker({　
		minView: "month",
		format: "yyyy-mm-dd",
		language: 'zh-CN',
		autoclose: true,
		pickerPosition: "top-left",
		
	});
	$('.ymd_date2').datetimepicker({　
		minView: "month",
		format: "yyyy-mm-dd",
		language: 'zh-CN',
		autoclose: true,
		pickerPosition: "bottom-left",
		
	});
	/*只选择年月*/
	$('.Ym_date').datetimepicker({
		format: 'yyyy-mm',
		autoclose: true,
		todayBtn: true,
		startView: 'year',
		minView: 'year',
		maxView: 'decade',
		language: 'zh-CN',
		pickerPosition: "bottom-left"
	});
	/*只选择年份*/
	$('.y_date').datetimepicker({
			format: 'yyyy',
			autoclose: true,
			startView: 'decade',
			minView: 'decade',
			maxView: 'decade',
			language: 'zh-CN',
			pickerPosition: "bottom-left"
		})
	$('.y_date5').datetimepicker({　
		language: 'zh-CN',
		format: 'hh:ii',
        startView:1,
        autoclose: true,
	});
		/*开关控件*/
	var elem_2 = document.querySelector('.js-switch2');
	var switchery_2 = new Switchery(elem_2, {
		color: '#1AB394'
	});
	/*选择框:单选,多选*/
	$('.i-checks').iCheck({
		checkboxClass: 'icheckbox_square-green',
		radioClass: 'iradio_square-green',
	});
	//提示框
	$('.tooltip-demo').tooltip({
		selector: "[data-toggle=tooltip]",
		container: "body"
	});
	/*tab标签切换效果*/
	$('#tab_item>li').click(function() {
		var index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$('#tab_content').find('.tab-pane:eq(' + index + ')').addClass('active').siblings().removeClass('active');
	})
});