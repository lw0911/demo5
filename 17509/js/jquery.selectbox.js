;
(function ($) {
	//template + data => html
	var text2val = function (str, obj) {
		return str.replace(/\{\{[a-zA-Z_]+\}\}/g, function (key) {
			return obj[key.substr(2, key.length - 4)];
		});
	};
	//下拉框隐藏。
	var _hide = function (eles) {
		eles.removeClass("hover").css({
			"z-index" : "100"
		}).children(".select_list").hide();
	};
	//下拉框显示。
	var _show = function (eles) {
		eles.addClass("hover").css({
			"z-index" : "101"
		}).children(".select_list").show();
	};

	$.fn.extend({
		selectbox : function (expr) {
			//html data merge handler
			expr = expr || "#J_SelectBoxHtml";
			var htmlEle = $(expr);
			if (!htmlEle[0]) {
				return this;
			}
			var _html = "<%WRAP%><span class='select_box' style='z-index:100;'></span><%/WRAP%><% BODY %><span class='select_up'><span class='select_up_text'></span><b></b></span><span class='select_list' style='display:none;'></span><% /BODY %><% OPTION %><a href='javascript:;' data-value='{{value}}'>{{text}}</a><% /OPTION %><% GROUPLABEl %><a href='javascript:;' data-group='J_Group{{index}}'>{{text}}<b class='icon' /></a><% /GROUPLABEl %><% GROUPWRAP %><div class='erji J_Group{{index}}' style='display:none;'><%= OPTION %></div><% /GROUPWRAP %>";

			var wrapReg = /<%\s*WRAP\s*%>(.+)<%\s*\/WRAP\s*%>/i,
			bodyReg = /<%\s*BODY\s*%>(.+)<%\s*\/BODY\s*%>/i,
			optionReg = /<%\s*OPTION\s*%>(.+)<%\s*\/OPTION\s*%>/i,
			groupLabelReg = /<%\s*GROUPLABEl\s*%>(.+)<%\s*\/GROUPLABEl\s*%>/i,
			groupWrapReg = /<%\s*GROUPWRAP\s*%>(.+)<%\s*\/GROUPWRAP\s*%>/i,
			optionBodyReg = /<%=\s*OPTION\s*%>/i;

			var _wrap = _html.match(wrapReg),
			_body = _html.match(bodyReg),
			_option = _html.match(optionReg),
			_optionLabel = _html.match(groupLabelReg),
			_optionWrap = _html.match(groupWrapReg);
			if (_wrap == null || _body == null || _option == null) {
				return this;
			}

			htmlEle = null;

			return this.each(function () {
				// var _attr = $(this).attr("data-value");
				// _attr != undefined && $(this).val(_attr);
				var select_str = _body[1],
				group_str = '';
				var isHas = $(this).parent().is(".select_box");
				$(this).hide();
				if (!isHas) {
					$(this).wrap(_wrap[1]).parent().append(select_str);
				}

				select_str = '';
				var _wid = $(this).width();
				//select disabled
				if ($(this).is(":disabled")) {
					$(this).parent().addClass("disabled");
				} else {
					$(this).parent().removeClass("disabled");
				}

				$(this).children("option,optgroup").each(function () {
					if ($(this).is("option")) {
						var optObj = {
							value : $(this).val(),
							text : $(this).text()
						};
						select_str += text2val(_option[1], optObj);
					} else {
						if (_optionLabel == null || _optionWrap == null) {
							alert("optgroup 缺少相对应的模拟块");
						} else {
							var _index = $(this).index(),
							optObj = {
								index : _index,
								text : $(this).attr("label")
							};
							select_str += text2val(_optionLabel[1], optObj);
							var temp_str = '';
							$(this).children("option").each(function () {
								optObj = {
									value : $(this).val(),
									text : $(this).text()
								};
								temp_str += text2val(_option[1], optObj);
							});
							group_str += text2val(_optionWrap[1], {
								index : _index
							}).replace(optionBodyReg, temp_str);
						}
					}
				}).end().parent().find(".select_list").empty().append(select_str + group_str).width(_wid).children(".erji").width(_wid)
				.end().end().children(".select_up").width(_wid).children(".select_up_text").text($(this).find("option:selected").text()).attr({
					"data-dval" : $(this).val()
				});

				/*
				if ($(this).find("option").length > 5) {
				$(this).parent().find(".select_list").css({ height: "130px", "overflow-y": "auto" });
				}
				 */

				//事件绑定
				if (!isHas) {
					$(this).parent().click(function (evt) {
						evt.stopPropagation();
						if ($(this).hasClass("disabled")) {
							return;
						}

						var slist = $(this).children(".select_list");
						if (slist.is(":visible")) {
							_hide($(this));
						} else {

							//用于比较以判断提示框显示位置在底部超出范围处理
							var _offset = $(this).offset(),
							toper = $(this).children(".select_up").outerHeight(),
							body_height = slist.outerHeight(),
							win_height = $(window).height() + $(window).scrollTop(),
							win_width = $(window).width() + $(window).scrollLeft();
							if (_offset.top + toper + body_height > win_height) {
								toper = -body_height;
							}
							slist.css({
								top : toper + "px"
							});

							_hide($(".select_box"));
							_show($(this));
						}
					}).find(".select_list").click(function (event) {
						event.stopPropagation();
						var _element = $(event.target).closest("[data-value]");
						if (_element.length <= 0) {
							return;
						}
						//selectbox 未change时不触发select的change事件。
						var defaultVal = $(this).siblings(".select_up").children(".select_up_text").attr("data-dval"),
						dataVal = _element.attr("data-value");
						if (defaultVal == dataVal && $(this).siblings("select:first").attr("data-change") != "click") { //值不变且data-change为click时，不执行后面的代码。
							_hide($(this).parent());
							return;
						}
						_element.parents(".erji:first").hide(); //ie7下_element.parent()背景色没有隐藏bug
						_hide($(this).parent());
						$(this).parent().find(".select_up .select_up_text").text(_element.text()).attr({
							"data-dval" : dataVal
						})
						.end().find("select").val(dataVal).trigger("change");
					}).children(".erji").hover(function () {
						$(this).show();
					}, function () {
						$(this).hide();
					}).end().children("[data-group]").hover(function () {
						
						var position = $(this).position(),
						offset = $(this).offset(),
						win_height = $(window).height() + $(window).scrollTop(),
						win_width = $(window).width() + $(window).scrollLeft();
						var groupEle = $(this).siblings("." + $(this).attr("data-group")),
						group_width = groupEle.outerWidth(),
						group_height = groupEle.outerHeight();
						var lefter = position.left + _wid,
						toper = position.top;
						//水平--用于比较以判断提示框显示位置在底部超出范围处理
						if (offset.left + _wid + group_width > win_width) {
							lefter = -group_width;
						}
						//垂直--用于比较以判断提示框显示位置在右侧超出范围处理
						if (offset.top + group_height > win_height) {
							toper = position.top + $(this).outerHeight() - group_height;
						}

						groupEle.css({
							top : toper + "px",
							left : lefter + "px"
						}).show();
					}, function () {
						$(this).siblings("." + $(this).attr("data-group")).hide();
					});
				}
			});
		}
	});

	//bind document event
	$(document).click(function (evt) {
		if ($(evt.target).closest(".select_box").length > 0) {
			return;
		}
		_hide($(".select_box"));
	});
})(jQuery);