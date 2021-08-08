
if(!X5ServerSelect)
{
    var X5ServerSelect={};
}

X5ServerSelect.create=function(select_array, ext_opt_array, opt_array)
{
    return new MultiSelect.create(select_array, opt_array||X5ServerSelect.STD_DATA, ext_opt_array||[]);
}

X5ServerSelect.STD_DATA= 
[

    {t:"华南", v:"185", opt_data_array:[

        {t: "华南一区(电信)",v: "110",status:"1", display:"1", opt_data_array:[]}
	,
        {t: "华南二区(电信)",v: "111",status:"1", display:"1", opt_data_array:[]}
	,
        {t: "华南之约(电信)",v: "112",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"华东", v:"186", opt_data_array:[

        {t: "华东一区(电信)",v: "130",status:"1", display:"1", opt_data_array:[]}
	,
        {t: "华东二区(电信)",v: "131",status:"1", display:"1", opt_data_array:[]}
	,
        {t: "华东三区(电信)",v: "132",status:"1", display:"1", opt_data_array:[]}
	,
        {t: "华东四区(电信)",v: "134",status:"1", display:"1", opt_data_array:[]}
	,
        {t: "华东之恋(电信)",v: "135",status:"1", display:"1", opt_data_array:[]}
	,
        {t: "华东情缘(电信)",v: "136",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"西南", v:"187", opt_data_array:[

        {t: "西南一区(电信)",v: "140",status:"1", display:"1", opt_data_array:[]}
	,
        {t: "西南二区(电信)",v: "142",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"华北", v:"188", opt_data_array:[

        {t: "华北一区(网通)",v: "120",status:"1", display:"1", opt_data_array:[]}
	,
        {t: "华北二区(网通)",v: "121",status:"1", display:"1", opt_data_array:[]}
	,
        {t: "华北三区(网通)",v: "122",status:"1", display:"1", opt_data_array:[]}
	,
        {t: "华北天地(网通)",v: "123",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"东北", v:"189", opt_data_array:[

        {t: "东北一区(网通)",v: "150",status:"1", display:"1", opt_data_array:[]}
	,
        {t: "东北二区(网通)",v: "151",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"华中", v:"190", opt_data_array:[

        {t: "华中一区(电信)",v: "160",status:"1", display:"1", opt_data_array:[]}
	,
        {t: "华中二区(电信)",v: "133",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"西北", v:"191", opt_data_array:[

        {t: "西北一区(电信)",v: "141",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"广东专区", v:"192", opt_data_array:[

        {t: "广东专区(电信)",v: "113",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"北城之恋", v:"193", opt_data_array:[

        {t: "北城之恋(网通)",v: "124",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"邂逅南国", v:"194", opt_data_array:[

        {t: "邂逅南国(电信)",v: "114",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"鹊舞江南", v:"210", opt_data_array:[

        {t: "鹊舞江南(电信)",v: "137",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"蝶恋北风", v:"211", opt_data_array:[

        {t: "蝶恋北风(网通)",v: "125",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"烟雨江南", v:"223", opt_data_array:[

        {t: "烟雨江南(电信)",v: "115",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"雪瑞北国", v:"224", opt_data_array:[

        {t: "雪瑞北国(网通)",v: "126",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"浪漫惊喜", v:"265", opt_data_array:[

        {t: "浪漫惊喜",v: "116",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"甜蜜派对", v:"266", opt_data_array:[

        {t: "甜蜜派对",v: "127",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"七夕之恋", v:"299", opt_data_array:[

        {t: "七夕之恋",v: "128",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"浪漫之约", v:"300", opt_data_array:[

        {t: "浪漫之约",v: "117",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"红豆南国", v:"429", opt_data_array:[

        {t: "红豆南国",v: "118",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"北国恋歌", v:"430", opt_data_array:[

        {t: "北国恋歌",v: "129",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"一米阳光", v:"610", opt_data_array:[

        {t: "一米阳光",v: "119",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"陌上花开", v:"611", opt_data_array:[

        {t: "陌上花开",v: "170",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"执子之手", v:"740", opt_data_array:[

        {t: "执子之手",v: "180",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"与子偕老", v:"741", opt_data_array:[

        {t: "与子偕老",v: "171",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"须臾以南", v:"830", opt_data_array:[

        {t: "须臾以南",v: "182",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"光年以北", v:"831", opt_data_array:[

        {t: "光年以北",v: "152",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"浮生未歇", v:"1649874", opt_data_array:[

        {t: "浮生未歇",v: "138",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"彼岸流年", v:"1662315", opt_data_array:[

        {t: "彼岸流年",v: "153",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"舞动奇迹", v:"5303520", opt_data_array:[

        {t: "舞动奇迹",v: "139",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"乐动天音", v:"5303521", opt_data_array:[

        {t: "乐动天音",v: "183",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"花开半夏", v:"7609563", opt_data_array:[

        {t: "花开半夏",v: "190",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"浅末年华", v:"7609564", opt_data_array:[

        {t: "浅末年华",v: "191",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"梦工厂", v:"7609616", opt_data_array:[

        {t: "梦工厂",v: "888",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"三生三世", v:"7609710", opt_data_array:[

        {t: "三生三世",v: "193",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"指染浮华", v:"7609711", opt_data_array:[

        {t: "指染浮华",v: "194",status:"1", display:"1", opt_data_array:[]}

]}

];


//////////////////////////////////////////////////////////////////////////////////////////////////////////
X5ServerSelect.showzone=function(select_array, ext_opt_array, opt_array)
{
	//显示停机
	var arrOpt = opt_array||X5ServerSelect.STD_DATA;
	if(arrOpt && arrOpt.length > 0){
                var tempArrOpt = [];
		for(var i = 0; i < arrOpt.length; i++)
		{
			var tempObj = {"t":arrOpt[i].t, "v":arrOpt[i].v, "opt_data_array":[]};
			for(var j = 0; j < arrOpt[i].opt_data_array.length; j++)
			{
                                if(arrOpt[i].opt_data_array[j].display * 1 === 0)
                                {
					continue;
				}
				
				if(arrOpt[i].opt_data_array[j].status * 1 === 0 && arrOpt[i].opt_data_array[j].t.indexOf('(停机)') < 0 )
				{
					arrOpt[i].opt_data_array[j].t += "(停机)";
				}
				tempObj.opt_data_array.push(arrOpt[i].opt_data_array[j]);
			}
			if(tempObj.opt_data_array.length > 0){
				tempArrOpt.push(tempObj);
			}
		}
		arrOpt = tempArrOpt;
	}
    return new MultiSelect.create(select_array, arrOpt, ext_opt_array||[]);
};

X5ServerSelect.showzone2=function(select_array, ext_opt_array, opt_array)
{
	//停机隐藏
	var arrOpt = opt_array||X5ServerSelect.STD_DATA;
	if(arrOpt && arrOpt.length > 0){
		var tempArrOpt = [];
		
		for(var i = 0; i < arrOpt.length; i++){
			var tempObj = {"t":arrOpt[i].t, "v":arrOpt[i].v, "opt_data_array":[]};
			for(var j = 0; j < arrOpt[i].opt_data_array.length; j++){
				if(arrOpt[i].opt_data_array[j].status * 1 != 0 && arrOpt[i].opt_data_array[j].display * 1 != 0){
					tempObj.opt_data_array.push(arrOpt[i].opt_data_array[j]);
				}
			}
			if(tempObj.opt_data_array.length > 0){
				tempArrOpt.push(tempObj);
			}
		}
		arrOpt = tempArrOpt;
	}
    return new MultiSelect.create(select_array, arrOpt, ext_opt_array||[]);
};

X5ServerSelect.showStatusByServerId = function(serverId){
	if(!serverId){
		return "";
	}	
	var arrOpt = X5ServerSelect.STD_DATA;
	if(arrOpt && arrOpt.length > 0){
		for(var i = 0; i < arrOpt.length; i++){
			for(var j = 0; j < arrOpt[i].opt_data_array.length; j++){
				if(serverId == arrOpt[i].opt_data_array[j].v){
					return (arrOpt[i].opt_data_array[j].status);
				}
			}
		}
	}
	return "";
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////


X5ServerSelect.zoneToName=function(ssn)
{
    var data=this.STD_DATA;
    var len=data.length;
    var result = "";
    for(var i=0;i<len;i++)
    {
        var sub_data = data[i].opt_data_array;
        var sub_len = sub_data.length;
        for (var j=0; j<sub_len; j++)
        {
        	if(sub_data[j].v==String(ssn))
            {
                result=sub_data[j].t;
                break;
            }
        }
        if (result != "") {
           	break;
        }
    }
    return result || "";
}

X5ServerSelect.ssn2desc=X5ServerSelect.zoneToName;


/*  |xGv00|c14f9d27de96b8dd5354abbb50a482ab */
