(function () {
	$.json = function (url, data, success, ignoreerr, sync, processdata) {
		var w = sync == true && $('iframe#crossframe').length > 0 ? $('iframe#crossframe')[0].contentWindow : window;
		w.$.ajax({
			type: "POST",
			url: url,
			cache: false,
			async: (typeof sync == 'undefined') ? true : !sync,
			data: data,
			success: function (r) { if (typeof success == 'function') success(r); },
			error: function (xhr, ts, tr) {
				if (typeof ignoreerr != 'undefined' && ignoreerr) return;
				var s = null;
				if (ts == 'timeout') s = ts;
				else if (ts == 'error') s = xhr.status;
				switch (s) {
					case 404: alert('操作失败，请刷新页面重新尝试！'); break;
					case 500: alert('操作失败，服务器出现了错误！'); break;
					case 'timeout': alert('操作超时！'); break;
					default: alert('操作失败，可能网络出现错误！');
				}
			},
			dataType: 'json',
			processData: (typeof processdata == 'undefined') ? true : processdata
		});
	};

	if (!window._g) {
		var _g = {
			rawurl: function () { return window.location.pathname + window.location.search },
			me: true,
			take: function (e) {
				_g.me = false;
				if (typeof e == 'undefined') e = $(document);

				e.find('form[guestbook]').each(function () {
					if (this.name) $(this.name).prop('maxlength', 20);
					if (this.phone) $(this.phone).prop('maxlength', 20);
					if (this.email) $(this.email).prop('maxlength', 200);
					if (this.body) $(this.body).prop('maxlength', 500);
					$(this).removeAttr('method', '').submit(function () {
						_g.book(this); return false;
					})[0].onsubmit = null;
				});

				_g.me = true;
				return e;
			},
			viewport: {
				belowthefold: function (element, settings) {
					var fold;
					if (settings.container === undefined || settings.container === window) fold = (window.innerHeight ? window.innerHeight : $(window).height()) + $(window).scrollTop();
					else fold = $(settings.container).offset().top + $(settings.container).height();
					return fold <= $(element).offset().top - settings.threshold;
				},
				rightoffold: function (element, settings) {
					var fold;
					if (settings.container === undefined || settings.container === window) fold = $(window).width() + $(window).scrollLeft();
					else fold = $(settings.container).offset().left + $(settings.container).width();
					return fold <= $(element).offset().left - settings.threshold;
				},
				abovethetop: function (element, settings) {
					var fold;
					if (settings.container === undefined || settings.container === window) fold = $(window).scrollTop();
					else fold = $(settings.container).offset().top;
					return fold >= $(element).offset().top + settings.threshold + $(element).height();
				},
				leftofbegin: function (element, settings) {
					var fold;
					if (settings.container === undefined || settings.container === window) fold = $(window).scrollLeft();
					else fold = $(settings.container).offset().left;
					return fold >= $(element).offset().left + settings.threshold + $(element).width();
				},
				$in: function (e, threshold, c) {
					return !this.rightoffold(e, { threshold: threshold === undefined ? 0 : threshold, container: c }) && !this.leftofbegin(e, { threshold: threshold === undefined ? 0 : threshold, container: c }) &&
						   !this.belowthefold(e, { threshold: threshold === undefined ? 0 : threshold, container: c }) && !this.abovethetop(e, { threshold: threshold === undefined ? 0 : threshold, container: c });
				}
			},
			scroll: function (v, f) {
				$('html,body').animate({ scrollTop: v }, 300, function () { if (typeof f == 'function') { f(); } });
			},
			delay: function (d, f) { window.setTimeout(f, d); },
			pageload: function (gpage, url, data, success, idxstart) {
				var gtip = gpage.find('>p.tip').length > 0 ? gpage.find('>p.tip') : gpage;
				gpage.attr('s', 'loading'); gtip.text('Loading...');
				var idx = typeof idxstart == 'function' ? idxstart(gpage) : parseInt(gpage.attr('p') ? gpage.attr('p') : 1) + 1;
				if (typeof gpage.attr('n') != 'undefined' && gpage.attr('n') != '') data = $.isArray(data) ? $.merge(data, [{ "name": gpage.attr('n'), "value": idx }]) : $.extend(data, $.parseJSON('{"' + gpage.attr('n') + '":' + idx + '}'));
				$.ajax({
					url: url,
					data: data,
					success: function (r) {
						if ($.trim(r) == '') { gpage.attr('s', 'none'); gtip.text('没有了'); }
						else {
							if (/<body\s*[^>]*?>([\s\S]*)<[/]body\s*>/i.test(r)) r = $('<div>' + RegExp.$1 + '</div>');
							else r = $(r);
							gtip.text('');
							if (typeof success == 'function') try { success(gpage, r); } catch (_e) { }
							if ((r.find('script').length + r.filter('script').length) <= 0) _g.take(r);
							$(window).scroll();
						}
						$(window).resize();
					},
					error: function (xhr, ts, tr) {
						gpage.attr('s', 'err');
						gtip.text((ts == 'timeout' ? '超时了' : '出错了') + '，点击重试！').one('click', function () { gpage.trigger('next'); });
						$(window).resize();
					}
				});
			},
			book: function (f) {
				$(f).find('input[type=text],textarea').each(function () { $(this).val($.trim($(this).val())); });
				if (!$(f).is('[own]')) {
					if (!f.name) { alert('缺少名称输入项。'); return; }
					if (f.name.value == '') { f.name.focus(); return; }
					if (!f.phone) { alert('缺少手机输入项。'); return; }
					if (f.phone.value == '') { f.phone.focus(); return; }
					if (!f.body) { alert('缺少内容输入项。'); return; }
					if (f.body.value == '') { f.body.focus(); return; }
				}
				else {
					var r = false;
					$(f).find('[must]').each(function () { if ($(this).val() == '') { r = true; $(this).focus(); return false; } });
					if (r) return;
				}
				$.json((typeof $(f).attr('root') == 'undefined' ? '/' : $(f).attr('root')) + 'g/do?book', $(f).serializeArray(), function (r) {
					if (r.s == 0) alert($(f).attr('suc') ? $(f).attr('suc') : '留言已成功提交。');
					else if (r.s == -1) alert('您的操作太过频繁，请稍后！');
					f.reset(); $(f).prop('disabled', true).find('input[type=submit],input[type=image]').prop('disabled', true);
				});
			},
			upfile: {
				create: function (e, n, create, complete, data) {
					if (typeof e != 'object' || e.length <= 0) return;
					var root = (typeof e.attr('root') == 'undefined' ? '/' : e.attr('root'));
					var h = '';
					$.ajax({ url: root + 'g/up?new', type: 'POST', cache: false, async: false, data: data ? $.extend({ n: n }, (typeof data == 'string' ? $.parseJSON(data) : data)) : { n: n }, success: function (r) { h = r; } });
					if (h == '') { alert('失败'); return; }
					if (typeof create == 'function') create();
					e.find('>p,>iframe').remove();
					var um = $('<p></p>').appendTo(e);
					var uf = $('<iframe style="display:none;"></iframe>').appendTo(e);
					var ud = $(uf[0].contentWindow.document); ud[0].write(h); ud[0].close();
					ud.find('form input[type=file]').change(function () {
						var g = $(this.form).attr('g');
						this.form.submit();
						um.html('正在上传');
						var i = function () {
							if (uf.parents('body').length <= 0) return; //已移除
							$.json(root + 'g/up?status', { g: g }, function (r) {
								if (r == null) {
									uf.remove();
									um.html('已取消');
								}
								else if (r.status == 'Uploading') {
									um.html('<em class="progress"><i class="p" style="width:' + r.progress + '%;"></i><i class="t">' + r.progress + '%</i></em>');
									window.setTimeout(i, 1000);
								}
								else if (r.status == 'Completed') {
									uf.remove();
									um.html('已完成');
									if (typeof complete == 'function') complete(r);
								}
								else if (r.status == 'Destroyed') {
									uf.remove();
									um.html('已取消 [' + r.error + ']');
								}
							});
						};
						window.setTimeout(i, 1000);
					}).click();
				}
			}
		}
		window._g = _g;
	}


	$(function () {
		$(window)
			.scroll(function () {
				$('.g_page:visible').each(function () {
					var t = $(this);
					if (t.find('>p.tip').length < 1 || !t.find('>p.tip').is(':visible') || t.attr('s')) return;
					if (t.offset().top - ($(window).scrollTop() + $(window).height()) <= 30) t.trigger('next');
				});
			})
			.resize(function () {
				$('.g_content:visible').each(function () {
					$(this).find('img').css({ maxWidth: '100%', height: 'auto' }); //正文图片溢出处理
				});
				$(window).scroll();
			})
		;

		$(window).resize();
	});

})(window);