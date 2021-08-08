function ZoomPic2 ()
{
	this.initialize.apply(this, arguments)	
}
ZoomPic2.prototype = 
{
	initialize : function (id)
	{
		var _this1 = this;
		this.wrap1 = typeof id === "string" ? document.getElementById(id) : id;
		this.oUl1 = this.wrap1.getElementsByTagName("ul")[0];
		this.aLi1 = this.wrap1.getElementsByTagName("li");
		this.prev1 = this.wrap1.getElementsByTagName("span")[0];
		this.next1 = this.wrap1.getElementsByTagName("span")[1];
		this.timer1 = 1000;
		this.aSort1 = [];
		this.iCenter1 = 2;
		this._doPrev1 = function () {return _this1.doPrev1.apply(_this1)};
		this._doNext1 = function () {return _this1.doNext1.apply(_this1)};
		this.options = [
			{width:300, height:250, top:100, left:40, zIndex:1},
			{width:450, height:380, top:0, left:344, zIndex:3},
			{width:300, height:250, top:100, left:785, zIndex:1},
		
		];
		for (var i1 = 0; i1 < this.aLi1.length; i1++) this.aSort1[i1] = this.aLi1[i1];
		this.aSort1.unshift(this.aSort1.pop());
		this.setUp1();
		this.addEvent(this.prev1, "click", this._doPrev1);
		this.addEvent(this.next1, "click", this._doNext1);
		this.doImgClick1();		
		this.timer1 = setInterval(function ()
		{
			_this1.doNext1()	
		}, 5000);		
		this.wrap1.onmouseover = function ()
		{
			clearInterval(_this1.timer1)	
		};
		this.wrap1.onmouseout = function ()
		{
			_this1.timer1 = setInterval(function ()
			{
				_this1.doNext1()	
			}, 5000);	
		}
	},
	doPrev1 : function ()
	{
		this.aSort1.unshift(this.aSort1.pop());
		this.setUp1()
	},
	doNext1 : function ()
	{
		this.aSort1.push(this.aSort1.shift());
		this.setUp1()
	},
	doImgClick1 : function ()
	{
		var _this1 = this;
		for (var i = 0; i < this.aSort1.length; i++)
		{
			this.aSort1[i].onclick = function ()
			{
				if (this.index > _this1.iCenter1)
				{
					for (var i = 0; i < this.index - _this1.iCenter1; i++) _this1.aSort1.push(_this1.aSort1.shift());
					_this1.setUp1()
				}
				else if(this.index < _this1.iCenter1)
				{
					for (var i = 0; i < _this1.iCenter1 - this.index; i++) _this1.aSort1.unshift(_this1.aSort1.pop());
					_this1.setUp1()
				}
			}
		}
	},
	setUp1 : function ()
	{
		var _this1 = this;
		var i1 = 0;
		for (i1 = 0; i1 < this.aSort1.length; i1++) this.oUl1.appendChild(this.aSort1[i1]);
		for (i1 = 0; i1 < this.aSort1.length; i1++)
		{
			this.aSort1[i1].index = i1;
			if (i1 < 3)
			{
				this.css(this.aSort1[i1], "display", "block");
				this.doMove1(this.aSort1[i1], this.options[i1], function ()
				{
					_this1.doMove1(_this1.aSort1[_this1.iCenter1].getElementsByTagName("img")[0], {opacity:100}, function ()
					{
						_this1.doMove1(_this1.aSort1[_this1.iCenter1].getElementsByTagName("img")[0], {opacity:100}, function ()
						{
							_this1.aSort1[_this1.iCenter1].onmouseover = function ()
							{
								// _this1.doMove1(this.getElementsByTagName("div")[0], {bottom:0})
							};
							_this1.aSort1[_this1.iCenter1].onmouseout = function ()
							{
								// _this1.doMove1(this.getElementsByTagName("div")[0], {bottom:-100})
							}
						})
					})
				});
			}
			else
			{
				this.css(this.aSort1[i1], "display", "none");
				this.css(this.aSort1[i1], "width", 0);
				this.css(this.aSort1[i1], "height", 0);
				this.css(this.aSort1[i1], "top", 37);
				this.css(this.aSort1[i1], "left", this.oUl1.offsetWidth / 2)
			}
			if (i1 < this.iCenter1 || i1 > this.iCenter1)
			{
				this.css(this.aSort1[i1].getElementsByTagName("img")[0], "opacity", 100)
				this.aSort1[i1].onmouseover = function ()
				{
					_this1.doMove1(this.getElementsByTagName("img")[0], {opacity:100})	
				};
				this.aSort1[i1].onmouseout = function ()
				{
					_this1.doMove1(this.getElementsByTagName("img")[0], {opacity:100})
				};
				this.aSort1[i1].onmouseout();
			}
			else
			{
				this.aSort1[i1].onmouseover = this.aSort1[i1].onmouseout = null
			}
		}		
	},
	addEvent : function (oElement, sEventType, fnHandler)
	{
		return oElement.addEventListener ? oElement.addEventListener(sEventType, fnHandler, false) : oElement.attachEvent("on" + sEventType, fnHandler)
	},
	css : function (oElement, attr, value)
	{
		if (arguments.length == 2)
		{
			return oElement.currentStyle ? oElement.currentStyle[attr] : getComputedStyle(oElement, null)[attr]
		}
		else if (arguments.length == 3)
		{
			switch (attr)
			{
				case "width":
				case "height":
				case "top":
				case "left":
				case "bottom":
					oElement.style[attr] = value + "px";
					break;
				case "background":
					oElement.style[attr]="red";
					break;
				
				case "opacity" :
					oElement.style.filter = "alpha(opacity=" + value + ")";
					oElement.style.opacity = value / 100;
					break;
				default :
					oElement.style[attr] = value;
					break
			}	
		}
	},
	doMove1 : function (oElement, oAttr, fnCallBack)
	{
		var _this1 = this;
		clearInterval(oElement.timer1);
		oElement.timer1 = setInterval(function ()
		{
			var bStop1 = true;
			for (var property in oAttr)
			{
				var iCur1 = parseFloat(_this1.css(oElement, property));
				property == "opacity" && (iCur1 = parseInt(iCur1.toFixed(2) * 100));
				var iSpeed1 = (oAttr[property] - iCur1) / 3;
				iSpeed1 = iSpeed1 > 0 ? Math.ceil(iSpeed1) : Math.floor(iSpeed1);
				
				if (iCur1 != oAttr[property])
				{
					bStop1 = false;
					_this1.css(oElement, property, iCur1 + iSpeed1)
				}
			}
			if (bStop1)
			{
				clearInterval(oElement.timer1);
				fnCallBack && fnCallBack.apply(_this1, arguments)	
			}
		}, 30)
	}
};
window.onload = function ()
{
	new ZoomPic2("focus_Box");
};

