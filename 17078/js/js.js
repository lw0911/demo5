// JavaScript Document
$(function(){
	var w;w=w||{},w.nuggets=w.nuggets||{},$(function(){!function(){function e(t){this.$nugget=t,this.setRegistered(),this.isMouseDown=!1;var n=1e5,i=w.feesVars.accountMinimumAmount,o=1e4,r=1e6;this.$cardFrame=t.find(".hp-fees-nugget-card-frame");var s=t.find(".hp-fees-nugget-calculator-control-value"),c=t.find(".hp-fees-nugget-card-back"),u=t.find(".hp-fees-nugget-calculator-control-progress"),a=t.find(".hp-fees-nugget-disclosure-control"),g=t.find(".hp-fees-nugget-calculator-value");this.$controlTrack=t.find(".hp-fees-nugget-calculator-control-track"),this.$controlTrack.on("mousedown touchstart",w.bind(this.moveTrackToCurrentPosition,this)),this.$controlTrack.on("mousedown touchstart",w.bind(this.mouseDown,this)),this.$nugget.on("mousemove touchmove",w.bind(this.mouseMoved,this)),$(window).on("mouseup touchend",w.bind(this.mouseUp,this)),c.find(".hp-fees-nugget-disclosure-closer").on("click",w.bind(this.flipDisclosureCard,this)),a.on("click",w.bind(this.flipDisclosureCard,this)),this.$r={},this.$r.currentPercent=$R.state(0),this.$r.accountValue=$R(e.reactiveFncs.accountValue).bindTo(this.$r.currentPercent,i,r),this.$r.trackPosition=$R(e.reactiveFncs.trackPosition).bindTo(this.$r.currentPercent,u),this.$r.fee=$R(e.reactiveFncs.fee).bindTo(this.$r.accountValue,o),$R.dom(g).bindAttributeTo("innerHTML",this.$r.fee,w.dollarAmount),$R.dom(s).bindAttributeTo("innerHTML",this.$r.accountValue,w.dollarAmount),$R(_.debounce(function(e){e!=n&&w.trackEvent("hp-fees-nugget","value",e)},500)).bindTo(this.$r.accountValue),this.$r.currentPercent((n-i)/(r-i)*100)}e.prototype={flipDisclosureCard:function(){var e=this.$cardFrame.is(".hp-fees-nugget-card-flipped");w.trackEvent("hp-fees","disclosure",e?"return":"turn"),this.$cardFrame.toggleClass("hp-fees-nugget-card-flipped")},getRelativePercentOffsetForTrack:function(e){var t=this.$controlTrack.offset().left,n=this.$controlTrack.outerWidth(),i=e-t,o=Math.min(100,Math.max(0,100*i/n));return o>99?100:1>o?0:o},mouseDown:function(){this.isMouseDown=!0},mouseMoved:_.throttle(function(e){this.isMouseDown&&this.moveTrackToCurrentPosition(e)},10),mouseUp:function(){this.isMouseDown=!1},moveTrackToCurrentPosition:function(e){var t=e.originalEvent.touches&&e.originalEvent.touches[0]?e.originalEvent.touches[0].pageX:e.pageX,n=this.getRelativePercentOffsetForTrack(t);this.$r.currentPercent(n)},setRegistered:function(){this.$nugget.data("_is_registered",!0)}},e.reactiveFncs={accountValue:function(e,t,n){return Math.floor(e/100*(n-t)+t)},fee:function(e,t){return Math.max(0,.0025*(e-t)/12)},trackPosition:function(e,t){var n=.95*e+5,i=100;t.css({left:n-i+"%"})}},e.isRegistered=function(e){return!!e.data("_is_registered")},e.registerAll=function(){$(".hp-fees-nugget").each(function(){var e=$(this);w.nuggets.HomepageFeesNugget.isRegistered(e)||new w.nuggets.HomepageFeesNugget(e)})},w.nuggets.HomepageFeesNugget=e}(),w.nuggets.HomepageFeesNugget.registerAll()});
		
	})
	
$(function(){
	$(".shaixuan").click(function(){
		$(this).toggleClass("top")
		})
	//.proeq li
	$(".proinfolist:first").show();
	$(".proeq li").click(function(){
		$(this).addClass("proeqCur").siblings("li").removeClass("proeqCur");
		var proindex=$(this).index();
		$(".proinfolist").eq(proindex).fadeIn().siblings(".proinfolist").hide();
		})
	//我们是谁
	$(".showandhide:first").fadeIn();
	$(".whoeq li").click(function(){
		$(this).addClass("whoeqcur").siblings("li").removeClass("whoeqcur");
		var whoindex=$(this).index();
		$(".showandhide").eq(whoindex).fadeIn().siblings(".showandhide").hide();
		})
	/*.whoteam dl*/
	$(".whoteam dt").click(function(){
		$(".bg100").fadeIn();
		$(this).next("dd").next(".whoteamposi").show();
		$(this).next("dd").next(".whoteamposi").animate({
			top:"50%"
			});
		})
	$(".whoteamposi h3").click(function(){
		$(".bg100").hide();
		$(this).parents(".whoteamposi").animate({
			top:"-320px"
			});
		$(this).parents(".whoteamposi").hide();
		})
	//产品
	/*.whoteam dl*/
	$(".proxiang").click(function(){
		$(".bg100").fadeIn();
		$(this).next(".whoteamposi").show();
		$(this).next(".whoteamposi").animate({
			top:"50%"
			});
		})
	$(".whoteamposi h3").click(function(){
		$(".bg100").hide();
		$(this).parents(".whoteamposi").animate({
			top:"-320px"
			});
		$(this).parents(".whoteamposi").hide();
		})
	})	
