
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

    {t:"����", v:"185", opt_data_array:[

        {t: "����һ��(����)",v: "110",status:"1", display:"1", opt_data_array:[]}
	,
        {t: "���϶���(����)",v: "111",status:"1", display:"1", opt_data_array:[]}
	,
        {t: "����֮Լ(����)",v: "112",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"����", v:"186", opt_data_array:[

        {t: "����һ��(����)",v: "130",status:"1", display:"1", opt_data_array:[]}
	,
        {t: "��������(����)",v: "131",status:"1", display:"1", opt_data_array:[]}
	,
        {t: "��������(����)",v: "132",status:"1", display:"1", opt_data_array:[]}
	,
        {t: "��������(����)",v: "134",status:"1", display:"1", opt_data_array:[]}
	,
        {t: "����֮��(����)",v: "135",status:"1", display:"1", opt_data_array:[]}
	,
        {t: "������Ե(����)",v: "136",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"����", v:"187", opt_data_array:[

        {t: "����һ��(����)",v: "140",status:"1", display:"1", opt_data_array:[]}
	,
        {t: "���϶���(����)",v: "142",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"����", v:"188", opt_data_array:[

        {t: "����һ��(��ͨ)",v: "120",status:"1", display:"1", opt_data_array:[]}
	,
        {t: "��������(��ͨ)",v: "121",status:"1", display:"1", opt_data_array:[]}
	,
        {t: "��������(��ͨ)",v: "122",status:"1", display:"1", opt_data_array:[]}
	,
        {t: "�������(��ͨ)",v: "123",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"����", v:"189", opt_data_array:[

        {t: "����һ��(��ͨ)",v: "150",status:"1", display:"1", opt_data_array:[]}
	,
        {t: "��������(��ͨ)",v: "151",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"����", v:"190", opt_data_array:[

        {t: "����һ��(����)",v: "160",status:"1", display:"1", opt_data_array:[]}
	,
        {t: "���ж���(����)",v: "133",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"����", v:"191", opt_data_array:[

        {t: "����һ��(����)",v: "141",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"�㶫ר��", v:"192", opt_data_array:[

        {t: "�㶫ר��(����)",v: "113",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"����֮��", v:"193", opt_data_array:[

        {t: "����֮��(��ͨ)",v: "124",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"�����Ϲ�", v:"194", opt_data_array:[

        {t: "�����Ϲ�(����)",v: "114",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"ȵ�轭��", v:"210", opt_data_array:[

        {t: "ȵ�轭��(����)",v: "137",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"��������", v:"211", opt_data_array:[

        {t: "��������(��ͨ)",v: "125",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"���꽭��", v:"223", opt_data_array:[

        {t: "���꽭��(����)",v: "115",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"ѩ�𱱹�", v:"224", opt_data_array:[

        {t: "ѩ�𱱹�(��ͨ)",v: "126",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"������ϲ", v:"265", opt_data_array:[

        {t: "������ϲ",v: "116",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"�����ɶ�", v:"266", opt_data_array:[

        {t: "�����ɶ�",v: "127",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"��Ϧ֮��", v:"299", opt_data_array:[

        {t: "��Ϧ֮��",v: "128",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"����֮Լ", v:"300", opt_data_array:[

        {t: "����֮Լ",v: "117",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"�춹�Ϲ�", v:"429", opt_data_array:[

        {t: "�춹�Ϲ�",v: "118",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"��������", v:"430", opt_data_array:[

        {t: "��������",v: "129",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"һ������", v:"610", opt_data_array:[

        {t: "һ������",v: "119",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"İ�ϻ���", v:"611", opt_data_array:[

        {t: "İ�ϻ���",v: "170",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"ִ��֮��", v:"740", opt_data_array:[

        {t: "ִ��֮��",v: "180",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"��������", v:"741", opt_data_array:[

        {t: "��������",v: "171",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"��������", v:"830", opt_data_array:[

        {t: "��������",v: "182",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"�����Ա�", v:"831", opt_data_array:[

        {t: "�����Ա�",v: "152",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"����δЪ", v:"1649874", opt_data_array:[

        {t: "����δЪ",v: "138",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"�˰�����", v:"1662315", opt_data_array:[

        {t: "�˰�����",v: "153",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"�趯�漣", v:"5303520", opt_data_array:[

        {t: "�趯�漣",v: "139",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"�ֶ�����", v:"5303521", opt_data_array:[

        {t: "�ֶ�����",v: "183",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"��������", v:"7609563", opt_data_array:[

        {t: "��������",v: "190",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"ǳĩ�껪", v:"7609564", opt_data_array:[

        {t: "ǳĩ�껪",v: "191",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"�ι���", v:"7609616", opt_data_array:[

        {t: "�ι���",v: "888",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"��������", v:"7609710", opt_data_array:[

        {t: "��������",v: "193",status:"1", display:"1", opt_data_array:[]}

]}
,
    {t:"ָȾ����", v:"7609711", opt_data_array:[

        {t: "ָȾ����",v: "194",status:"1", display:"1", opt_data_array:[]}

]}

];


//////////////////////////////////////////////////////////////////////////////////////////////////////////
X5ServerSelect.showzone=function(select_array, ext_opt_array, opt_array)
{
	//��ʾͣ��
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
				
				if(arrOpt[i].opt_data_array[j].status * 1 === 0 && arrOpt[i].opt_data_array[j].t.indexOf('(ͣ��)') < 0 )
				{
					arrOpt[i].opt_data_array[j].t += "(ͣ��)";
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
	//ͣ������
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
