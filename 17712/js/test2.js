var careerism = {

	current_topic: 0,

	current_grade: 0,

	topic: [{

		t_n: '1',

		t_t: '注意力不集中或随境转移',

		t_o: {

			'是 ': '2',

			'否 ': '1'

		}



	}, {

		t_n: '2',

		t_t: '话语增多',

		t_o: {

			'是': '0',

			'否': '2'

		}

	}, {

		t_n: '3',

		t_t: '原发性妄想',

		t_o: {

			'是': '0',

			'否': '3'

		}

	}, {

		t_n: '4',

		t_t: '思维奔逸、联系加快或意念飘忽的体验',

		t_o: {

			'是': '2',

			'否': '5'

		}

	}, {

		t_n: '5',

		t_t: '自我评价过高或夸大',

		t_o: {

			'是': '1',

			'否': '3'

		}

	}, {

		t_n: '6',

		t_t: '精力充沛、不感疲乏、活动增多、难以安静、或不断改变计划活动',

		t_o: {

			'是': '0',

			'否': '2'

		}

	}, {

		t_n: '7',

		t_t: '鲁莽行为',

		t_o: {

			'是': '1',

			'否': '0'

		}

	}, {

		t_n: '8',

		t_t: '睡眠需要减少',

		t_o: {

			'是': '3',

			'否': '2'

		}

	}, {

		t_n: '9',

		t_t: '性欲亢进',

		t_o: {

			'是': '3',

			'否': '1'

		}

	}, {

		t_n: '10',

		t_t: '症状和不良影响≥1周 ',

		t_o: {

			'是': '2',

			'否': '3'
		}

	}],

	res: [[

		'智力超群的人。上知天文，下知地理，无所不能。有时候，为了掩盖你卓越的智商，你会把自己伪装成一个傻子，只为融入平凡人的圈子。有时候，明知道对方说错了做错了，你也只能把话藏在肚子里，因为你需要普通人的陪伴。其实，我想说，是时候秀出你比爱因斯坦还牛逼的智商了，宇宙等着你去拯救！！（仅供娱乐，愚人节快乐！）','霸道总裁|你无数次这样告诉自己。当你站在国贸的落地窗俯视紫禁城，当平凡之路的歌声在耳机里一遍遍循环，你暗暗告诉自己，总有一天，你也会让世界知道你的名字。（仅供娱乐，愚人节快乐！）','分分钟教马云重新做人|你精力充沛，天赋异禀，再苦再累也能在第二天起床时满血复活，你对所有情怀主义的电影，音乐欲罢不能，每天靠着梦想给自己打强心针，你知道你要去哪里，全世界都在给你让路。（仅供娱乐，愚人节快乐！）'],['跟着大哥有肉吃|此刻的你，就像闻到腥味的猫，像看到血的鲨鱼，像发现猎物的苍鹰，所有的成就离你有着一步之遥的距离；但是你只缺那么一口气，你的梦想，就这么死在了黎明前的黄昏里。等那最后一根稻草降临。（仅供娱乐，愚人节快乐！）','不成功，便成仁|你明白，这是最好的时代；你明白，曾经仰望的星空，已经唾手可及；你明白，你有着一颗不安份的心；但是你在等什么呢？也许你在等这个泰坦尼克号一样的大船撞上冰山的那一刻；也许你在等对着拖欠的工资条拍案而起的那一天；也许你在等雾霾已经严重影响到你的健康。终于等到你，揭竿而起的那一天。（仅供娱乐，愚人节快乐！）','绩优股|你一直很优秀，是同龄人中的佼佼者；你享受着家长的夸赞，同学的羡慕，后辈的崇拜，但是你不明白，一直做着优等生的你，为什么在社会上没有了曾经的光环，你一直不服输，不甘心，也许仅仅是因为，你选错了环境。条件太优越，想不起要奋起直击。（仅供娱乐，愚人节快乐！）'],['闷声发大财|你是一个务实的人，你明白那些鸡汤喝多了，会生病，你看破了很多事情，你认清了社会，认清了自己，你不想和别人比，你只要求每天比昨天进步一点点，日积月累，当别人突然有一天惊艳于你的改变，你微笑着沉默不语，闷声发大财，你心想，你的智慧，不知道比他们高到哪里去了。（仅供娱乐，愚人节快乐！）','文艺青年|你是一个纯粹的人，你的梦想其实很简单，也许是今年顺利考上心仪的研究生，拿到一份满意的Offer,也许只是找到一个喜欢的人，谈个恋爱结个小婚，也许只是希望得到一点领导的表扬，接一个可以展示实力的case，平凡人的光荣梦想，一样可以令我们在地铁口看到一个默默演唱的吉他手的时候湿了眼眶。（仅供娱乐，愚人节快乐！）','江湖传说|你也曾经豪情万丈，你也曾经醉笑陪君三千场，你也曾经满腔热血过，最终输给了现实，收藏起理想。可爱又迷人的命运之神，总是会给我们一个又一个打击，磨光了自己的棱角，耗尽了荷尔蒙，你再也找不到了当初会让你肾上腺素上升的事情，你忘记了，你也曾经胸前飘扬着鲜艳的红领巾。我想问你一句，你还记得大明湖畔的夏雨荷吗？（仅供娱乐，愚人节快乐！）'],['任性|哇，你就是传说中那个风流倜谠玉树临风今日有酒今日醉的江湖上久仰大名的楚留香！任性！实在是太任性了！你每天都在分享美食，美剧，美景，美女，你分分钟在朋友圈拉仇恨，但是他们不知道的是“他人笑我太疯癫，我笑他人看不穿，不见五陵豪 杰墓，无花无酒锄作田。”没关系，有人懂你。（仅供娱乐，愚人节快乐！）','不成功，便成仁!人类智商的新下限由你开拓。别说英语ABCD了，连一加一等于二你都要算上一整天的时间。问你北京奥运会在哪个城市举行，你都要苦恼半天。你身边的人为你捉急，我们也为你感到哀伤。孩子，你需要回炉重造一下了！（仅供娱乐，愚人节快乐！）']],

	init: function() {

		this.bindEvent();

	},

	initTopic: function () {

		var self = this;

		self.loadTopic(1);

	},

	loadTopic: function  (index) {

		var self = this;

		var topic = self.topic[index-1],

			topic_number = topic.t_n,

			topic_title = topic.t_t,

			topic_option = topic.t_o,

			option_html = '',

			i = 0;

		$('#curr_no').html(topic_number);

		$('#topic_title').html(topic_title);

		for(var id in topic_option){

			option_html += '<tr><td class="option_item" option_index="' + i + '" option_value="' + topic_option[id] + '">' + id + '</td><tr>';

			i++;

		}

		$('#topic_option').html(option_html);

		self.current_topic++;

	},

	loadOver: function () {

		var self = this;

		var grade = self.current_grade;

		var res = 100 - Number(grade);

		var show_data;

		var fanal_data;

		if(90 <= res && res <= 100){

			show_data = self.res[0];

		}else if(80 <= res && res < 90){

			show_data = self.res[1];

		}else if(70 <= res && res < 80){

			show_data = self.res[2];

		}else{

			show_data = self.res[3];

		}

		var ran = Math.random() * 3 + 1;

		if(ran < 2){

			fanal_data = show_data[0];

		}else if(ran >= 3){

			fanal_data = show_data[2];

		}else{

			fanal_data = show_data[1];

		}

		var key_word = fanal_data.split('|')[0];

		var detail = fanal_data.split('|')[1];

		$('.grade_detail').html(res);

		$('.des_keyword').html(key_word);

		$('.des_detail').html(detail);

	},

	bindEvent: function () {

		var self = this;

		$('.wrap').on('click','.enter_btn',function () {

			$('.enter_wrap').css('display','none');

			$('.topic_wrap').css('display','block');

			self.initTopic();

		});

		$('.wrap').on('click','.option_item', function () {

			var _this = $(this);

			var value = Number(_this.attr('option_value'));

			self.current_grade = self.current_grade + value;

			_this.addClass('select');

			if(self.current_topic < 10){

				$('.fade_wrap').fadeOut('normal',function () {

					self.loadTopic(self.current_topic+1);

					$(this).fadeIn('normal');

				});

			}else{

				$('.topic_wrap').css('display','none');

				self.loadOver();

				$('.over_wrap').css('display','block');

			}

			

		});

		$('.wrap').on('click','.over_share',function () {

			var grade = self.current_grade;

			var res = 100 - Number(grade);

			$('.share_wrap').css('display','block');

			document.title = '注意！有个智商指数达'+ res +'分的超人潜藏在你的朋友圈';

		})

	}

}