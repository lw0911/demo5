$(function(){


			$("#CalculBox").click(function(){
				//页面层
				layer.open({
				  type: 1,
				  title:['计算器','font-size:18px;height:60px;line-height:60px;'],
				  skin: 'layui-layer-rim', //加上边框
				  area: ['800px', '540px'], //宽高
				  content: $("#calculatorBox")
				});
			});


			/*
			 *开始计算
			 */
			$("#calcuBtn").click(function(){
				var calcuMoney = $("#calcuMoney").val();  //投资金额
				var calcuInterest = $("#calcuInterest").val();  //年华利率
				var calcuTime = $("#calcuTime").val();   //投资期限
				var calcuRepay = $("#calcuRepay").val();   //还款方式


				/*不能为空*/
				if(!nullNum(calcuMoney))
				{
					layerTc("投资金额不能为空","我知道了");
					return false;
				};

				if(!nullNum(calcuInterest))
				{
					layerTc("年华利率不能为空","我知道了");
					return false;
				};

				if(!nullNum(calcuTime))
				{
					layerTc("投资期限不能为空","我知道了");
					return false;
				};
				

				/*必须保留两位小数*/
				if(!decimal(calcuMoney))
				{
					layerTc("投资金额必须为有效数字(最多保留两位小数)","我知道了");
					return false;
				};

				if(!decimal(calcuInterest))
				{
					layerTc("年华利率必须为有效数字(最多保留两位小数)","我知道了");
					return false;
				};

				/*必须为整数*/
				if(!numble(calcuTime))
				{
					layerTc("投资期限必须为整数","我知道了");
					return false;
				};

				/*不能小于等于0*/
				if(calcuMoney<=0)
				{
					layerTc("投资金额不能小于等于0","我知道了");
					return false;
				};
				if(calcuInterest<=0)
				{
					layerTc("年华利率额不能小于等于0","我知道了");
					return false;
				};
				if(calcuTime<=0)
				{
					layerTc("投资期限不能小于等于0","我知道了");
					return false;
				};
				

				/*不大于*/
				if(calcuInterest>100)
				{
					layerTc("年华利率额不能大于等于100%","我知道了");
					return false;
				};
				
				/*
				 *开始计算
				 */			
				var moneyBX = Math.floor(calcuMoney * calcuInterest * 0.01 / 360 * calcuTime * 100) / 100; //利息
				var moneyAdd = moneyBX + parseFloat(calcuMoney); //总收益
				console.log(num_k(moneyBX.toString()))
				$("#resultSY").html(num_k(moneyBX.toString()));
				$("#resultBX").html(num_k(moneyAdd.toString()));
				
			});

	})


	function num_k(num){
		var numArr=num.split(".");
		var numOne=numArr[0];
		var numTwo=numArr[1];
		var j=0;
		var str_num="";
		var mycars = new Array(1,2)
		for(var i=numOne.length-1;i>=0;i--){

			j++;
			if(j%3==0 && i!=0)
			{
				str_num=","+numOne.charAt(i)+str_num;	
			}
			else
			{
				str_num=numOne.charAt(i)+str_num;
			}
			
		}
		if(numTwo)
		{
			var numA = str_num+"."+numTwo;
		}
		else
		{
			var numA = str_num;
		}

		return numA;
		
	}
	/*
	 *判断是否是保留两位小数的有效数字
	 */
	function decimal(num){
	    var fix_amountTest=/^(([1-9]\d*)|\d)(\.\d{1,2})?$/;
	    if(fix_amountTest.test(num))
	    {
	      return true;
	    }
	    else
	    {
	      return false;
	    }
	};

	/*
	 *判断是否是纯数字
	 */
	function numble(num){
	    var fix_amountTest=/^[0-9]+[0-9]*]*$/;
	    if(fix_amountTest.test(num))
	    {
	      return true;
	    }
	    else
	    {
	      return false;
	    }
	};



	/*
	 *判断不为空
	 */
	function nullNum(num){
	    if(num == "" || $.trim(num) == ""){
	        return false;
	    }
	    else
	    {
	        return true;
	    }
	};

	/*
	 *弹出框
	 */
	function layerTc(txt,btn){
	    layer.open({
	        content: txt
	        ,btn: btn
	      });
	};
