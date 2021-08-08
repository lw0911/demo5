// JavaScript Document
var huameiV3 = {
	init: function() {
		var _this = this;
		_this.moreItems();
		_this.slideMenu();
		_this.footerSlide();
		if ($(".stage1").length > 0) {
			_this.indexAnliSlide();
			_this.expertSlide();
		};
		_this.topSearch();
		_this.searchItems();
		/*�����˵��ӳټ���*/
		setTimeout(function() {
			$(".menu ul").addClass("active");
		}, 500);
		setTimeout(function() {
			$(".topLogo .searchBox").fadeIn(600);
		}, 5000);
		/*��ҳ���Ź�������*/

		function AutoScroll(obj) {
			var objHeight = $(obj).height();
			$(obj).find("ul:first").animate({
				marginTop: -objHeight + "px"
			}, 500, function() {
				$(this).css({
					marginTop: "0px"
				}).find("li:first").appendTo(this);
			});
		};
		if ($(".newsScroll")) {
			setInterval(function() {
				AutoScroll(".newsScroll")
			}, 4500);
		}
		/*��ҳ��ʲô������ζ�Ч��*/
		$(".topNav .topSearchBtn").mouseenter(function(e) {
			$(this).addClass("blink")
			$(".searchBox").addClass("blink");
		}).mouseleave(function(e) {
			$(this).removeClass("blink")
			$(".searchBox").removeClass("blink");
		});

		/*��ʲô��������ư�ť*/
		$(".topSearchBtn").on("click", function() {
			setTimeout(function() {
				$(".searchBox").addClass("active").removeClass("off");
			}, 200)
		});
		/*��ʲô������رհ�ť*/
		$(".searchBox .closeBtn").on("click", function() {
			setTimeout(function() {
				$(".searchBox").removeClass("active").addClass("off");
			}, 200)
		});

	},
	/*������Ŀjs*/
	moreItems: function() {
		$(".seoMenus").slide({
			mainCell: '.seoContentBox',
			titCell: '.seoFocus a',
			effect: 'fade',
			mouseOverStop:true,
			titOnClassName: 'active'
		})
	},
	/*slideDownMenu  ���������˵�*/
	slideMenu: function() {
		$(".banner .menu ul").slide({
			type: "menu",
			titCell: '.subNav',
			targetCell: '.subMenu',
			effect: 'fade',
			titOnClassName: 'active',
			defaultPlay: false,
			triggerTime: 200,
			startFun: function(i, c) {
				$(".subMenu").eq(i).addClass("active");
			}
		});
		$(".banner .menu ul li").each(function(index, element) {
			var left = $(".banner .menu ul li").width() * index;
			$(".banner .menu ul li").eq(index).find(".subMenu").css({
				left: -left + 'px'
			});
			$(this).mouseleave(function(e) {
				e.preventDefault();
				$(this).removeClass("active").find(".subMenu").removeClass("active");
			});
		});
	},
	/*��ܵ�λ����Ȩ��������Ŀ�л�js*/
	footerSlide: function() {
		$(".footerSlides").slide({
			mainCell: '.slideBox',
			titCell: '.slideFocus span',
			effect: 'fade',
			titOnClassName: 'active',
			trigger: 'click',
			endFun:function(i,c){
					var slideBox = document.getElementById("slideBox");
					slideBox.style.height = slideBox.children[i].offsetHeight+'px';
					if(i>0)slideBox.style.transition = slideBox.style.mozTransition= slideBox.style.webkitTransition="200ms";//��Ӷ���Ч��
				}
		});
	},
	/*stage1 �����Ա��ֲ� ��ȫ��������   ����ר��*/
	indexAnliSlide: function() {
		/*�����Ա�*/
		$(".stage1_a").slide({
			mainCell: '.stage1_anliBox',
			titCell: '',
			effect: 'leftLoop',
			prevCell: '.preBtn',
			nextCell: '.nextBtn',
			autoPlay: true,
			mouseOverStop:true,
			interTime: 4500,
			delayTime:1200
		});
		/*��ȫ��������*/
		$(".stage1_b").slide({
			mainCell: '.securityBox',
			titCell: '',
			effect: 'leftLoop',
			prevCell: '.preBtn',
			nextCell: '.nextBtn',
			autoPlay: true,
			mouseOverStop:true,
			interTime: 5700,
			delayTime:1200
		});
		/*����ר��*/
		$(".stage1_c").slide({
			mainCell: '.slideBox',
			titCell: '.focus',
			effect: 'leftLoop',
			prevCell: '.preBtn',
			nextCell: '.nextBtn',
			autoPage: '<span></span>',
			autoPlay: true,
			mouseOverStop:true,
			titOnClassName: 'active',
			interTime: 6900,
			delayTime:1200
		});

	},
	/*stage2 �˽������ר���л�*/
	expertSlide: function() {
		/*�Ҳ�ר���л�*/
		/*���ȶ�����з���*/
		$(".doctorsWrapper li").each(function(i) {
			$(".doctorsWrapper li").slice(i * 12, i * 12 + 12).wrapAll("<ul></ul>");
		});
		$(".doctorsBox").slide({
			mainCell: '.doctorsWrapper',
			titCell: '',
			effect: 'leftLoop',
			prevCell: '.preBtn',
			nextCell: '.nextBtn',
		});
		/*�Ҳ�ר�����������Ч*/
		memberShow("doctorsBox");
		/*�Ҳ�ר��������л�*/
		$(".stage2 .stage_b").slide({
			mainCell: '.slides',
			titCell: '.focus span',
			effect: 'fold',
			titOnClassName: 'active',
			startFun: function(i, c) {
				$(".stage2 .stage_b .focus .active_bg").css({
					left: i * 50 + '%'
				});
			}
		});
		/*���ר�Ҵ�ͼ�л�*/
		$(".stage2 .stage_a").mouseenter(function() {
			$(".stage2 .stage_a").find(".preBtn,.nextBtn").fadeIn(600);
		}).mouseleave(function() {
			$(".stage2 .stage_a").find(".preBtn,.nextBtn").fadeOut(600);
		});
		$(".stage2").slide({
			mainCell: '.stage_a .slideBox',
			titCell: '.itemExperts a',
			effect: 'leftLoop',
			prevCell: '.stage_a .preBtn',
			nextCell: ' .stage_a .nextBtn',
			autoPlay: true,
			mouseOverStop:true,
			scroll: 1,
			vis: 1,
			interTime: 6500,
			titOnClassName: 'active'
		});

	},
	/*�����������л�js*/
	topSearch: function() {
		$(".searchSwitchs").slide({
			mainCell: '.switchBox',
			titCell: '.switchBtn li',
			effect: 'fade',
			prevCell: '',
			nextCell: '',
			autoPlay: false,
			scroll: 1,
			vis: 1,
			interTime: 6500,
			titOnClassName: 'active'
		});
	},
	/*���������������б�*/
	searchItems: function() {
		function itemFun() {
			this.items = {};
		};
		itemFun.prototype = {
			// body...
			add: function(id, iArray) {
				this.items[id] = iArray;
			},
			exist: function(id) {
				if (typeof(this.items[id]) == "undefined") return false;
				return true;
			}
		};
		/*��ʼ����������*/
		var itemsObj1 = new itemFun();
		/*itemsObj1.add("0", ["�沿���ữ", "�۲�����", "�ǲ�����", "�ز�����","�沿����", "�������", "Ƥ������", "΢����", "˽������", "��ǻ����", "ë����ֲ"]);*/
		itemsObj1.add("0", [{
			src: "/huameipro/young/#t1",
				txt: '�沿���ữ'
			}, {
				src: "/huameipro/yanbu/#t1",
				txt: '�۲�'
			}, {
				src: "/huameipro/bibu/#t1",
				txt: '�ǲ�'
			}, {
				src: "/huameipro/xiongbu/#t1",
				txt: '�ز�'
			}, {
				src: "/huameipro/mianbu/#t1",
				txt: '�沿'
			}, {
				src: "/huameipro/zhifang/#t1",
				txt: '֬��'
			}, {
				src: "/huameipro/weizhenx/#t1",
				txt: '΢����'
			}, {
				src: "/huameipro/pifu/#t1",
				txt: 'Ƥ��'
			}, {
				src: "/huameipro/simi/#t1",
				txt: '˽������'
			}, {
				src: "/huameipro/kouqiang/#t1",
				txt: '��ǻ'
			}, {
				src: "/huameipro/maofa/#t1",
				txt: 'ë��'
			}]);
		/*itemsObj1.add("0_1", [{
			src: "/glx/",
			txt: '������1'
		}, {
			src: "/xhj/",
			txt: '������'
		}]);
		itemsObj1.add("0_2", [{
			src: "/glx/",
			txt: '������2'
		}, {
			src: "/xhj/",
			txt: '������'
		}]);
		itemsObj1.add("0_3", [{
			src: "/glx/",
			txt: '������3'
		}, {
			src: "/xhj/",
			txt: '������'
		}]);
		itemsObj1.add("0_4", [{
			src: "/glx/",
			txt: '������4'
		}, {
			src: "/xhj/",
			txt: '������'
		}]);
		itemsObj1.add("0_5", [{
			src: "/glx/",
			txt: '������5'
		}, {
			src: "/xhj/",
			txt: '������'
		}]);
		itemsObj1.add("0_6", [{
			src: "/glx/",
			txt: '������6'
		}, {
			src: "/xhj/",
			txt: '������'
		}]);
		itemsObj1.add("0_7", [{
			src: "/glx/",
			txt: '������7'
		}, {
			src: "/xhj/",
			txt: '������'
		}]);
		itemsObj1.add("0_8", [{
			src: "/glx/",
			txt: '������8'
		}, {
			src: "/xhj/",
			txt: '������'
		}]);
		itemsObj1.add("0_9", [{
			src: "/glx/",
			txt: '������9'
		}, {
			src: "/xhj/",
			txt: '������'
		}]);
		itemsObj1.add("0_10", [{
			src: "/glx/",
			txt: '������10'
		}, {
			src: "/xhj/",
			txt: '������'
		}]);*/
		//��ר����������  $(".item3 ul")
		itemsObj1.add("0_11", [{
				src: "/experts/young/#t1",
				txt: '�沿���ữ'
			}, {
				src: "/experts/eyezhenx/#t1",
				txt: '�۲�����'
			}, {
				src: "/experts/bzhenx/#t1",
				txt: '�ǲ�����'
			}, {
				src: "/experts/xzhenx/#t1",
				txt: '�ز�����'
			}, {
				src: "/experts/zzhenx/#t1",
				txt: '֬������'
			}, {
				src: "/experts/mzhenx/#t1",
				txt: '�沿����'
			}, {
				src: "/experts/pzhenx/#t1",
				txt: 'Ƥ������'
			}, {
				src: "/experts/wzhenx/#t1",
				txt: '΢����'
			}, {
				src: "/experts/szhenx/#t1",
				txt: '˽������'
			}, {
				src: "/experts/kzhenx/#t1",
				txt: '��ǻ����'
			}, {
				src: "/experts/fzhenx/#t1",
				txt: 'ë����ֲ'
			}

		]);
		//console.log(itemsObj.items);

		var isOpen = false,
			/*Ĭ��һ���˵�δ���أ�������ֱ�ӳ������������б����*/
			hasLink = false,
			/*�����˵��Ƿ��������*/
			hasNextSelect = false,
			parentActiveIndex = 0,
			tempName = "0"; /*�Ƿ�����һ�������б�*/
		/*parseUlLists�����б��������*/

		function parseUlLists(obj, arrIndex, itemJson,hasLink) {
			var elementsStr = "";
			var dataSoure = itemJson.items[arrIndex];
			var ininLen = dataSoure.length;
			for (var i = 0; i < ininLen; i++) {
				if (hasLink) {
					elementsStr += "<li><a href='javascript:void(0)' data-src='" + dataSoure[i].src + "'>" + dataSoure[i].txt + "</a></li>";
				} else {
					elementsStr += "<li><a href='javascript:void(0)'>" + dataSoure[i] + "</a></li>";
				}

			}
			var dataDropLists = obj;
			dataDropLists.empty().append(elementsStr).css({
				position: "absolute",
				left: 0,
				top: dataDropLists.parent().height() + "px",
				width: dataDropLists.parent().width() + 'px'
			});

		};
		/*$(".item1 i").on("click", function() {
			var _self = $(this);
			hasLink = false;
			hasNextSelect = true;
			var obj = $(this).siblings("ul");
			var temp = "";
			parseUlLists(obj, tempName, itemsObj1);
			obj.find("li").each(function(index, element) {
				$(this).click(function(e) {
					isOpen = true;
					if (hasLink) {
						_self.attr("data-src", $(this).find("a").attr("data-src"));
					}
					_self.text($(this).text());
					if (hasNextSelect) {
						temp = tempName + "_" + $(this).index();
						var item2 = $(".item2 ul");
						$(".item2 i").text("��ѡ����岿λ");
						hasLink = true;
						parseUlLists(item2, temp, itemsObj1);
						obj.stop().slideUp(600);
					} else {
						obj.stop().slideUp(600);
						return;
					}
				}).parent().stop().slideToggle(600);
			});

		});
		$(".item2 i").on("click", function() {
			isOpen = true;
			if (isOpen) {
				var _self = $(this);
				hasNextSelect = false;
				var obj = $(this).siblings("ul");
				obj.slideDown(600);
				var temp = tempName + "_0_";
				obj.find("li").each(function(index, element) {
					$(this).click(function(e) {
						if (hasLink) {
							_self.attr("data-src", $(this).find("a").attr("data-src"));
						}
						_self.text($(this).text());
						if (hasNextSelect) {
							temp = temp + $(this).index();
							var item3 = $(".item3 ul"); //���������˵� �˴� $(".item3 ul")Ϊʾ����
							hasLink = true;
							parseUlLists(item3, temp, itemsObj1);
							obj.stop().slideUp(600);
						} else {
							obj.stop().slideUp(600);
							return;
						}
					}).parent().stop().slideToggle(600);
				});
			} else {
				alert("��ѡ������Ҫ�ı�Ĳ�λ��");
			}
		});*/
		$(".item1 i").on("click",function(){
				var _self = $(this);
				var hasLink = true;
				var obj = $(this).siblings("ul");
				parseUlLists(obj, '0', itemsObj1,hasLink);
				obj.stop().slideToggle(600);
				obj.find("li").each(function(index, element) {
				$(this).click(function(e) {
					if(hasLink){
							_self.attr("data-src", $(this).find("a").attr("data-src"));
						}
					_self.text($(this).text());
					obj.stop().slideUp(600);
				});
			});	console.log($(".item1 ul li").length);	
			});	
		
			$(".item3 i,.keywordSelect i").on("click",function(){
				var _self = $(this);
				var hasLink = true;
				var obj = $(this).siblings("ul");
				parseUlLists(obj, '0_11', itemsObj1,hasLink);
				obj.stop().slideToggle(600);
				obj.find("li").each(function(index, element) {
				$(this).click(function(e) {
					if(hasLink){
							_self.attr("data-src", $(this).find("a").attr("data-src"));
						}
					_self.text($(this).text());
					obj.stop().slideUp(600);
				});
			});		
			});	
		$(".switch1 .bt").on("click", function() {
			$(this).attr({
				"href": $(".item1 i").attr("data-src"),
				"target": "_blank"
			});
		});
		$(".switch2 .bt").on("click", function() {
			//alert()
			$(this).attr({
				"href": $(".item3 i").attr("data-src"),
				"target": "_blank"
			});
		});
		$(".keywordSelect .bt").on("click", function() {
			//alert()
			$(this).attr({
				"href": $(".keywordSelect i").attr("data-src"),
				"target": "_blank"
			});
		});
		$(".item3 ul li").each(function(index, element) {
            $(this).click(function(e) {
                alert($(this).index());
            });
        });
		$(".keywordSelect ul li").each(function(index, element) {
            $(this).click(function(e) {
                alert($(this).index());
            });
        });
		$(".item1 ,.item2 ,.item3 ,.keywordSelect ").mouseleave(function(e) {
                $(this).find("ul").slideUp();
            });
	},
	/*followNav js*/
	followNav: function() {
		var sTop = $(document).scrollTop();
		var followTop = 0;
		if ($(".popBox")) {
			if ($(".popBox").hasClass("popOpen")) {
				followTop += $(".popBox").height();
			}
		};
		followTop = followTop + $(".header").height() + $(".banner").height();
		if (sTop >= followTop) {
			$(".followNav").addClass("active");
		} else {
			$(".followNav").removeClass("active");
		}
		//console.log(followTop)
	}

};
$(function() {
	huameiV3.init();
	$(".bannerSlide").mouseenter(function(e) {
        $(this).find(".bt").fadeIn()
    }).mouseleave(function(e) {
         $(this).find(".bt").fadeOut()
    });
	//banner�ֲ�
	if ($(".bannerSlide li").length >1) {
			TouchSlide({
			slideCell: "#banner",
			titCell: '.focus',
			mainCell: '.slideBox ul',
			autoPage: '<span></span>',
			effect: 'leftLoop',
			delayTime: 600,
			interTime: 8000,
			autoPlay: true,
			titOnClassName: 'active',
			prevCell: '.preBtn',
			nextCell: '.nextBtn',
			//endFun: function(i, c) {
				//$(".bannerSlide .slideBox li").removeClass("active").eq(i + 1).addClass("active");
			//}
		});
	};
	if($("#sideNav").length>0){
			var pathUrl = window.location.pathname ;
			var hash = window.location.hash;
			var targetUl = $("#sideNav ul ");
			var urlArr=[];
			targetUl.find("li").each(function(index, element) {
                	urlArr.push($(this).find("a").attr("href"));
            });
			if(hash!=""){
					pathUrl=pathUrl+hash;
					hash = hash.split("#")[1];
					var i = $("."+hash).index();
					$(".expertWrapper .focus span").removeClass("active").eq(i).addClass("active");
				}
			for(var i=0,j=urlArr.length;i<j;i++){
					if(pathUrl ==urlArr[i] ){
						targetUl.find("li").eq(i).find("a").addClass("active");	
						}
				}
			
		}
		if($(".anliCon").length>0){
			var pathUrl = window.location.pathname ;
			var hash = window.location.hash;
			var targetUl = $(".anliCon .hd ul ");
			var urlArr=[];
			targetUl.find("li").each(function(index, element) {
                	urlArr.push($(this).find("a").attr("href"));
            });
			if(hash!=""){
							pathUrl=pathUrl+hash;
							hash = hash.split("#")[1];
							var i = $("."+hash).index();
							console.log(i)
							$(".anliCon .hd ul li").removeClass("on").eq(i).addClass("on");
								}
			for(var i=0,j=urlArr.length;i<j;i++){
					
					if(pathUrl ==urlArr[i] ){
						targetUl.find("li").removeClass("on").eq(i).addClass("on");	
						}
				}
		}
		
		
		
})
$(window).on("load scroll DomMouseScroll", function() {
	if ($(".followNav").length>0) {
		huameiV3.followNav();
	}
})