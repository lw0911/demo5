/*点击按钮弹出框打开独立页面*/
function add_user() {
	$.dialog({
		title: '添加人员',
		width: 600,
		height: 280,
		lock:true,
		content: 'url:add_user.html',
		init: function() {
			
			//var ul = iframe.document.getElementById('right_list');
			var iframe = this.iframe.contentWindow;
			
		},
		button: [{
			name: '保存',
			callback: function() {
				var iframe = this.iframe.contentWindow;
				if(!iframe.document.body) {
					alert('iframe还没加载完毕呢')
					return false;
				}
				console.log($(iframe.document.body).find('#cleck_me'));
			},
			focus: true

		}, {
			name: '取消',
			callback: function() {

			}
		}]
	});
}
/*配置警示框和弹出确认框*/
toastr.options = {
	"closeButton": true, //是否显示关闭按钮
	"debug": false, //是否使用debug模式
	"positionClass": "toast-top-center", //弹出窗的位置
	"showDuration": "300", //显示的动画时间
	"hideDuration": "100", //消失的动画时间
	"timeOut": "1000", //展现时间
	"showEasing": "swing", //显示时的动画缓冲方式
	"hideEasing": "linear", //消失时的动画缓冲方式
	"showMethod": "fadeIn", //显示时的动画方式
	"hideMethod": "fadeOut", //消失时的动画方式
	"progressBar": true
};

function alertNew(msg, issuccess) {
	if(issuccess) {
		toastr.success(msg);
	} else {
		toastr.warning(msg);
	}
}

function alertinfo(msg, issuccess, action) {
	alertNew(msg, issuccess);
	if(action != null) {
		setTimeout(action, 1000);
	}
}

function confirminfo(title, msg, action) {
	return art.dialog({
		id: 'Confirm',
		icon: 'question',
		fixed: true,
		lock: true,
		opacity: 0.5,
		content: title,
		ok: function(here) {
			action();
		},
		cancel: function(here) {
			art.dialog.close();
		}
	});
}
/*点击按钮从右侧划出iframe页面*/
function r_swiper(e) {

	var expanded = false;
	if(expanded) {
		$('#ifr').animate({
			right: '-780'
		}, 500);
	} else {
		$('#ifr').animate({
			right: '0px'
		}, 500);
		$("#ifr").contents().find(".form-close-icon").click(function() {
			$('#ifr').animate({
				right: '-780'
			}, 500);
		});
	}
	expanded = !expanded;
}
/*点击其他地方收起右侧划出页面*/
$(document).click(function(e) {
	if($(e.target).closest('#ifr').length == 0 && $(e.target).closest($('.table>tbody tr td:first-child>a')).length == 0) {
		$('#ifr').animate({
			right: '-780px'
		}, 500);
		$('#test2').animate({
			height: '0px'
		}, 500);
	}
});
/*警示框效果*/
function alert_t() {
	alertNew("你点击了搜索按钮！", true);
	setTimeout(reload,1000)
//	confirminfo("你点击了搜索按钮！");
	//prompt('请输入内容');
}
function reload(){
	window.location.href=window.location.href;
}
/*点击上边表格显示下面表格*/
var trs=$('#top_table tbody tr');
for(var i=0;i<trs.length;i++){
	$(trs[i]).find('td:eq(3)').find('a').click(function(){
		$(this).parent().parent().addClass('tr_active').siblings().removeClass('tr_active');
	})
}
//$('#top_table tbody tr').click(function() {
//	var inner = $(this).find('td:eq(1)').html();
//	$(this).addClass('tr_active').siblings().removeClass('tr_active');
//})