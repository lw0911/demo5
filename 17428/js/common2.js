// JavaScript Document
function getStyle(a) {
    return document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(a, null) : a.currentStyle
}
var openBox = {
    show: function(a) {
        this.mask || this.createMask();
        var b = getW(),
            a = document.getElementById(a);
        a.style.display = "block";
        a.style.top = b.s + b.h / 2 - 0.5 * a.offsetHeight + "px";
        if (parseInt(a.style.top) <= 0) {
            a.style.top = "0px";
        };
        //document.title = b.s + b.h / 2 - 0.5 *parseInt($(a).height())+"px";
        a.style.zIndex = 99999;
        this.mask.style.display = "block"
    },
    createMask: function() {
        var a = getW();
        this.mask = document.createElement("div");
        a.s_h < a.h && (a.s_h = a.h);
        this.mask.style.height = a.s_h + "px";
        this.mask.style.top = "0px";
        this.mask.style.left = "0px";
        this.mask.style.position = "absolute";
        this.mask.style.width = a.w + "px";
        this.mask.style.zIndex = 9999;
        this.mask.style.background = "#000";
        this.mask.style.opacity = "0.5";
        this.mask.className = "mask_openBox";
        this.mask.style.filter = "alpha(opacity:80)";
        document.body.appendChild(this.mask)
    },
    hide: function(a) {
        this.mask && (this.mask.style.display = "none");
        document.getElementById(a)
            .style.display = "none"
    }
};

function getW() {
    var a, b;
    a = document.documentElement.clientHeight || document.body.clientHeight;
    b = document.documentElement.clientWidth || document.body.clientWidth;
    screen_h = document.documentElement.scrollHeight || document.body.scrollHeight;
    return o = {
        w: b,
        h: a,
        s: document.documentElement.scrollTop || document.body.scrollTop,
        s_h: screen_h
    }
}

function Showhdhl(o){
		
		//this.hllqWrapUl = $("#hllqWrapUl");
		this.hllqWrapUl = $("#"+o.ul);
		//this.li = this.hllqWrapUl.find(".hllqWrapUl222");
		this.li = this.hllqWrapUl.find(o.li);
		this.l =this.li.length;
		this.w  = this.li.outerWidth(true);
		this.hllqWrapUl.width(this.w*this.l);
		this.c = 0;
		//this.numLi = $("#hllqWrapUl_tab b");
		this.numLi = $("#"+o.bumLi).find("b");
		var that= this;
		this.numLi.bind("click",function(){
			if(that.c==$(this).index())return false;
			that.c = $(this).index();
			that.move();
		});
		//this.hllqWrapUl_pre = $("#hllqWrapUl_pre");
		this.hllqWrapUl_pre = $("#"+o.btnP);
		//this.hllqWrapUl_next = $("#hllqWrapUl_next");
		this.hllqWrapUl_next = $("#"+o.btnN);
		var that = this;
		that.timer = null;
		this.hllqWrapUl_pre.bind("click",function(){
			that.c > 0 ?that.c-- : that.c = that.l-1;
			clearInterval(that.timer);
			that.move(1);
		});
		
		this.hllqWrapUl_next.bind("click",function(){			
			that.c < that.l-1 ? that.c++ : that.c = 0;
			clearInterval(that.timer);
			that.move(1);
		});
		
		this.move();
		that.autoPlay();
}


Showhdhl.prototype = {
	autoPlay:function(){
		var that= this;
		that.timer = setInterval(function(){
			that.c < that.l-1 ? that.c++ : that.c = 0;
			that.move();
		},6000);
	},
	move:function(t){
		var that= this;
		var pos = this.c*this.w;
		this.numLi.removeClass("on");
		this.numLi.eq(this.c).addClass("on");
		this.hllqWrapUl.stop().animate({left:-pos},function(){
			if(t){
				that.autoPlay();
			};
		});		
	}
};

var showhdhl = {
	init:function(){
		this.hllqWrapUl = $("#hllqWrapUl");
		this.li = this.hllqWrapUl.find(".hllqWrapUl222");
		this.l =this.li.length;
		this.w  = this.li.outerWidth(true);
		this.hllqWrapUl.width(this.w*this.l);
		this.c = 0;
		this.numLi = $("#hllqWrapUl_tab b");
		var that= this;
		this.numLi.bind("click",function(){
			if(that.c==$(this).index())return false;
			that.c = $(this).index();
			that.move();
		});
		this.hllqWrapUl_pre = $("#hllqWrapUl_pre");
		this.hllqWrapUl_next = $("#hllqWrapUl_next");
		var that = this;
		that.timer = null;
		this.hllqWrapUl_pre.bind("click",function(){
			that.c > 0 ?that.c-- : that.c = that.l-1;
			clearInterval(that.timer);
			that.move(1);
		});
		
		this.hllqWrapUl_next.bind("click",function(){			
			that.c < that.l-1 ? that.c++ : that.c = 0;
			clearInterval(that.timer);
			that.move(1);
		});
		
		this.move();
		that.autoPlay();
	},
	autoPlay:function(){
		var that= this;
		that.timer = setInterval(function(){
			that.c < that.l-1 ? that.c++ : that.c = 0;
			that.move();
		},6000);
	},
	move:function(t){
		var that= this;
		var pos = this.c*this.w;
		this.numLi.removeClass("on");
		this.numLi.eq(this.c).addClass("on");
		this.hllqWrapUl.stop().animate({left:-pos},function(){
			if(t){
				that.autoPlay();
			};
		});		
	}
};



var loginFn = {
	init:function(){
		var l = (getW().w - 1000)*0.5;
		var t = (getW().h - 600)*0.5;
		$(".noLogin a").bind("click",function(){
			window.open ('denglu.html','newwindow','height=600,width=1000,top='+t+',left='+l+',toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no');
			return false;
		});
	}
}
























