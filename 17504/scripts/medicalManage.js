function last__10_day() {
    var list = [];
    var date = getFormatDate(new Date());
    var year = date.split("-")[0];
    var mouth = date.split("-")[1];
    var day = date.split("-")[2];
    for (var i=0;i<10;i++){
        var objM = mouth;
        var objD = day-i;
        if(objD<=0){
            objD = objD+30;
            objM = mouth -1;
            objM = "0"+objM
        }
        if(objD<10){
            objD = "0"+objD;
        }
        var obj = year+"-"+objM +"-"+objD;
        list.push(obj)
    }
    return list;
}
function getFormatDate(date){
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    if(month<10){
        month = '0'+month.toString();
    }
    month = month.toString();
    if(day<10){
        day = '0'+day.toString();
    }
    day = day.toString();
    return year+'-'+month+'-'+day;
}

function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {        //相邻元素两两对比
                var temp = arr[j+1];        //元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

$(function(){
  init();
})

function init(){
  var symptomName = last__10_day().reverse();
  //血压监测情况
  var lineChartPressure = echarts.init(document.getElementById('lineChartPressure'));
  lineChartPressure.setOption({
    color:["#65C762","#CBC928","#CD0C62"],
    title:{
    text:'血压监测情况',
    left:'center',
    textStyle:{
      color:'#333',
      fontStyle:'normal',
      fontWeight:'bold',
      fontFamily:'sans-serif',
    　　　　 fontSize:16
    }
    },
    legend: {
      data : ['绿标','黄标','红标'],
      x:'right',
      textStyle:{
          color:'#333333',
          fontSize:12
      }
    },
    calculable : false,
    tooltip : {
     trigger: 'item',
     formatter: "{a}<br/>{b}<br/>{c}人"
    },
    yAxis: [
       {
           type: 'value',
           axisLine : {onZero: false},
           axisLine:{
               lineStyle:{
                   color: '#333'
               },
           },

           axisLabel: {
               textStyle: {
                   color: '#333'
               },
               formatter: function (value) {
                   return value + "人"
               },
           },
           splitLine:{
               lineStyle:{
                   width:0,
                   type:'solid'
               }
           }
       }
    ],
    xAxis: [
       {
           type: 'category',
           name:'日期',
           nameLocation:'middle',
           nameTextStyle:{
               color:"333",
               fontSize:16,
               padding:20
           },
           data : symptomName,
           axisLine:{
               lineStyle:{
                   color: '#333'
               },
           },
           splitLine: {
               "show": false
           },
           axisLabel: {
               textStyle: {
                   color: '#333'
               },
               formatter: function (value) {
                   return value + ""
               },
           },
           splitLine:{
               lineStyle:{
                   width:0,
                   type:'solid'
               }
           },
       }
    ],
    grid:{
           left: '5%',
           right:'0',
           bottom: '20%',
           containLabel: true
    },
    series : [
     {
         name:'绿标',
         type:'line',
         smooth:true,
         itemStyle: {
             normal: {
                 lineStyle: {
                     shadowColor : 'rgba(0,0,0,0.4)'
                 }
             }
         },
         data:[4583, 5341, 4638, 5324, 4646, 4837, 5063, 4831, 4639, 5486]
     },
     {
         name:'黄标',
         type:'line',
         smooth:true,
         itemStyle: {
             normal: {
                 lineStyle: {
                     shadowColor : 'rgba(0,0,0,0.4)'
                 }
             }
         },
         data:[241, 185, 312, 372, 334, 138, 402, 328, 147, 286]
     },
     {
         name:'红标',
         type:'line',
         smooth:true,
         itemStyle: {
             normal: {
                 lineStyle: {
                     shadowColor : 'rgba(0,0,0,0.4)'
                 }
             }
         },
         data:[195, 127, 150, 80, 18, 25, 148, 153, 68, 196]
     },
    ]
  });

  //血糖监测情况
  var lineChartSugar = echarts.init(document.getElementById('lineChartSugar'));
  lineChartSugar.setOption({
    color:["#65C762","#CBC928","#CD0C62"],
    title:{
    text:'血糖监测情况',
    left:'center',
    textStyle:{
     color:'#333',
     fontStyle:'normal',
     fontWeight:'bold',
     fontFamily:'sans-serif',
    　　　　 fontSize:16
    }
    },
    legend: {
     data : ['绿标','黄标','红标'],
     x:'right',
     textStyle:{
         color:'#333333',
         fontSize:12
     }
    },
    calculable : false,
    tooltip : {
    trigger: 'item',
    formatter: "{a}<br/>{b}<br/>{c}人"
    },
    yAxis: [
      {
          type: 'value',
          axisLine : {onZero: false},
          axisLine:{
              lineStyle:{
                  color: '#333'
              },
          },

          axisLabel: {
              textStyle: {
                  color: '#333'
              },
              formatter: function (value) {
                  return value + "人"
              },
          },
          splitLine:{
              lineStyle:{
                  width:0,
                  type:'solid'
              }
          }
      }
    ],
    xAxis: [
      {
          type: 'category',
          name:'日期',
          nameLocation:'middle',
          nameTextStyle:{
              color:"333",
              fontSize:16,
              padding:20
          },
          data : symptomName,
          axisLine:{
              lineStyle:{
                  color: '#333'
              },
          },
          splitLine: {
              "show": false
          },
          axisLabel: {
              textStyle: {
                  color: '#333'
              },
              formatter: function (value) {
                  return value + ""
              },
          },
          splitLine:{
              lineStyle:{
                  width:0,
                  type:'solid'
              }
          },
      }
    ],
    grid:{
          left: '5%',
          right:'0',
          bottom: '20%',
          containLabel: true
    },
    series : [
    {
        name:'绿标',
        type:'line',
        smooth:true,
        itemStyle: {
            normal: {
                lineStyle: {
                    shadowColor : 'rgba(0,0,0,0.4)'
                }
            }
        },
        data:[3050, 2825, 3347, 3047, 2587, 3077, 3171, 3407, 2675, 2661]
    },
    {
        name:'黄标',
        type:'line',
        smooth:true,
        itemStyle: {
            normal: {
                lineStyle: {
                    shadowColor : 'rgba(0,0,0,0.4)'
                }
            }
        },
        data:[245, 212, 167, 282, 109, 234, 166, 71, 115, 158]
    },
    {
        name:'红标',
        type:'line',
        smooth:true,
        itemStyle: {
            normal: {
                lineStyle: {
                    shadowColor : 'rgba(0,0,0,0.4)'
                }
            }
        },
        data:[81, 43, 20, 74, 97, 15, 51, 12, 39, 77]
    },
    ]
  });


  //BMI监测情况
  var lineChartWeight = echarts.init(document.getElementById('lineChartWeight'));
  lineChartWeight.setOption({
    color:["#65C762","#CBC928","#CD0C62"],
    title:{
    text:'BMI监测情况',
    left:'center',
    textStyle:{
      color:'#333',
      fontStyle:'normal',
      fontWeight:'bold',
      fontFamily:'sans-serif',
    　　　　 fontSize:16
    }
    },
    legend: {
      data : ['绿标','黄标','红标'],
      x:'right',
      textStyle:{
          color:'#333333',
          fontSize:12
      }
    },
    calculable : false,
    tooltip : {
     trigger: 'item',
     formatter: "{a}<br/>{b}<br/>{c}人"
    },
    yAxis: [
       {
           type: 'value',
           axisLine : {onZero: false},
           axisLine:{
               lineStyle:{
                   color: '#333'
               },
           },

           axisLabel: {
               textStyle: {
                   color: '#333'
               },
               formatter: function (value) {
                   return value + "人"
               },
           },
           splitLine:{
               lineStyle:{
                   width:0,
                   type:'solid'
               }
           }
       }
    ],
    xAxis: [
       {
           type: 'category',
           name:'日期',
           nameLocation:'middle',
           nameTextStyle:{
               color:"333",
               fontSize:16,
               padding:20
           },
           data : symptomName,
           axisLine:{
               lineStyle:{
                   color: '#333'
               },
           },
           splitLine: {
               "show": false
           },
           axisLabel: {
               textStyle: {
                   color: '#333'
               },
               formatter: function (value) {
                   return value + ""
               },
           },
           splitLine:{
               lineStyle:{
                   width:0,
                   type:'solid'
               }
           },
       }
    ],
    grid:{
           left: '5%',
           right:'0',
           bottom: '20%',
           containLabel: true
    },
    series : [
     {
         name:'绿标',
         type:'line',
         smooth:true,
         itemStyle: {
             normal: {
                 lineStyle: {
                     shadowColor : 'rgba(0,0,0,0.4)'
                 }
             }
         },
         data:[10883, 11468, 10645, 10893, 10901, 11862, 10712, 11930, 10788, 11015]
     },
     {
         name:'黄标',
         type:'line',
         smooth:true,
         itemStyle: {
             normal: {
                 lineStyle: {
                     shadowColor : 'rgba(0,0,0,0.4)'
                 }
             }
         },
         data:[2075, 1863, 2103, 1861, 2010, 2074, 1715, 1531, 2122, 1752]
     },
     {
         name:'红标',
         type:'line',
         smooth:true,
         itemStyle: {
             normal: {
                 lineStyle: {
                     shadowColor : 'rgba(0,0,0,0.4)'
                 }
             }
         },
         data:[838, 853, 1093, 1051, 854, 933, 824, 861, 924, 1097]
     },
    ]
  });

  //慢病死亡人数
  var lineChartOverallDeath = echarts.init(document.getElementById('lineChartOverallDeath'));
  lineChartOverallDeath.setOption({
    color:["#3EA5F2"],
    title:{
    text:'慢病死亡人数',
    left:'center',
    textStyle:{
       color:'#333',
       fontStyle:'normal',
       fontWeight:'bold',
       fontFamily:'sans-serif',
    　　　　 fontSize:16
     }
    },
    calculable : false,
    tooltip : {
      trigger: 'item',
      formatter: "{a}<br/>{b}<br/>{c}人"
    },
    yAxis: [
        {
            type: 'value',
            axisLine : {onZero: false},
            axisLine:{
                lineStyle:{
                    color: '#333'
                },
            },

            axisLabel: {
                textStyle: {
                    color: '#333'
                },
                formatter: function (value) {
                    return value + "人"
                },
            },
            splitLine:{
                lineStyle:{
                    width:0,
                    type:'solid'
                }
            }
        }
    ],
    xAxis: [
        {
            type: 'category',
            name:'日期',
            nameLocation:'middle',
            nameTextStyle:{
                color:"333",
                fontSize:16,
                padding:20
            },
            data : symptomName,
            axisLine:{
                lineStyle:{
                    color: '#333'
                },
            },
            splitLine: {
                "show": false
            },
            axisLabel: {
                textStyle: {
                    color: '#333'
                },
                formatter: function (value) {
                    return value + ""
                },
            },
            splitLine:{
                lineStyle:{
                    width:0,
                    type:'solid'
                }
            },
        }
    ],
    grid:{
            left: '5%',
            right:'0',
            bottom: '20%',
            containLabel: true
    },
    series : [
      {
          name:'死亡人数',
          type:'line',
          smooth:true,
          itemStyle: {
              normal: {
                  lineStyle: {
                      shadowColor : 'rgba(0,0,0,0.4)'
                  }
              }
          },
          data:[11, 21, 8, 34, 33, 28, 34, 50, 34, 28]
      },
    ]
  });

  //常见慢性病死亡人数占比
  var pieChartOverallDeath = echarts.init(document.getElementById('pieChartOverallDeath'));
  pieChartOverallDeath.setOption({
    color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
    title:{
     text:'常见慢性病死亡人数占比',
     left:'center',
     textStyle:{
        color:'#333',
        fontStyle:'normal',
        fontWeight:'bold',
        fontFamily:'sans-serif',
    　　　　 fontSize:16
      }
    },
    // legend:legendList,
    tooltip : {
       trigger: 'item',
       formatter: "{a}<br/>{b}<br/>{c}%"
    },
    calculable : false,
    series : [
       {
           name:'死亡人数占比',
           type:'pie',
           radius : ['30%', '60%'],
           center : ['50%', '50%'],
           itemStyle: {
              normal: {
                label: {
                    show: true,
                    position: 'top',
                    formatter: '{b}\n{c}%'　　　　
                }
              }
            },
           data:[
             {value:30.1, name:'癌症'},
             {value:20.2, name:'脑卒中'},
             {value:17.8, name:'慢阻肺'},
             {value:1.3, name:'糖尿病'},
             {value:30.6, name:'其他'},
           ]
       }
    ]
  });

  //厦门市区域慢病死亡人数占比
  var pieChartRegionDeath = echarts.init(document.getElementById('pieChartRegionDeath'));
  pieChartRegionDeath.setOption({
    color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
    title:{
      text:'厦门市区域慢病死亡人数占比',
      left:'center',
      textStyle:{
         color:'#333',
         fontStyle:'normal',
         fontWeight:'bold',
         fontFamily:'sans-serif',
      　　　　 fontSize:16
       }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a}<br/>{b}<br/>{c}%"
    },
    calculable : false,
    series : [
      {
          name:'死亡人数占比',
          type:'pie',
          radius : ['30%', '60%'],
          center : ['50%', '55%'],
          itemStyle: {
             normal: {
               label: {
                   show: true,
                   position: 'top',
                   formatter: '{b}\n{c}%'　　　　
               }
             }
           },
          data:[
              {value:27.6, name:'思明区'},
              {value:26.8, name:'湖里区'},
              {value:14.2, name:'集美区'},
              {value:14.5, name:'同安区'},
              {value:3.8, name:'海沧区'},
              {value:13.1, name:'翔安区'}
          ]
      }
    ]
  });

  //慢病门诊人数
  var lineChartOverallOutpatient = echarts.init(document.getElementById('lineChartOverallOutpatient'));
  lineChartOverallOutpatient.setOption({
    color:["#3EA5F2"],
    title:{
     text:'慢病门诊人数',
     left:'center',
     textStyle:{
        color:'#333',
        fontStyle:'normal',
        fontWeight:'bold',
        fontFamily:'sans-serif',
    　　　　 fontSize:16
      }
    },
    calculable : false,
    tooltip : {
       trigger: 'item',
       formatter: "{a}<br/>{b}<br/>{c}人"
    },
    yAxis: [
         {
             type: 'value',
             axisLine : {onZero: false},
             axisLine:{
                 lineStyle:{
                     color: '#333'
                 },
             },

             axisLabel: {
                 textStyle: {
                     color: '#333'
                 },
                 formatter: function (value) {
                     return value + "人"
                 },
             },
             splitLine:{
                 lineStyle:{
                     width:0,
                     type:'solid'
                 }
             }
         }
     ],
    xAxis: [
       {
           type: 'category',
           name:'日期',
           nameLocation:'middle',
           nameTextStyle:{
               color:"333",
               fontSize:16,
               padding:20
           },
           data : symptomName,
           axisLine:{
               lineStyle:{
                   color: '#333'
               },
           },
           splitLine: {
               "show": false
           },
           axisLabel: {
               textStyle: {
                   color: '#333'
               },
               formatter: function (value) {
                   return value + ""
               },
           },
           splitLine:{
               lineStyle:{
                   width:0,
                   type:'solid'
               }
           },
       }
    ],
    grid:{
           left: '5%',
           right:'0',
           bottom: '20%',
           containLabel: true
    },
    series : [
       {
           name:'门诊人数',
           type:'line',
           smooth:true,
           itemStyle: {
               normal: {
                   lineStyle: {
                       shadowColor : 'rgba(0,0,0,0.4)'
                   }
               }
           },
           data:[2809, 3757, 2984, 3735, 2885, 3067, 3013, 3326, 2876, 3262]
       },
    ]
  });

  //常见慢性病门诊人数占比
  var pieChartOverallOutpatient = echarts.init(document.getElementById('pieChartOverallOutpatient'));
  pieChartOverallOutpatient.setOption({
    color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
    title:{
      text:'常见慢性病门诊人数占比',
      left:'center',
      textStyle:{
         color:'#333',
         fontStyle:'normal',
         fontWeight:'bold',
         fontFamily:'sans-serif',
    　　　　 fontSize:16
       }
     },
    // legend:legendList,
    tooltip : {
        trigger: 'item',
        formatter: "{a}<br/>{b}<br/>{c}%"
    },
    calculable : false,
    series : [
      {
          name:'门诊人数占比',
          type:'pie',
          radius : ['30%', '60%'],
          center : ['50%', '50%'],
          itemStyle: {
             normal: {
               label: {
                   show: true,
                   position: 'top',
                   formatter: '{b}\n{c}%'　　　　
               }
             }
           },
          data:[
            {value:23.2, name:'高血压'},
            {value:12.4, name:'糖尿病'},
            {value:5.2, name:'脑卒中'},
            {value:13.7, name:'慢阻肺'},
            {value:10.8, name:'慢性肾病'},
            {value:34.7, name:'其他'}
          ]
      }
    ]
  });

  //厦门市区域慢病门诊人数占比
  var pieChartRegionOutpatient = echarts.init(document.getElementById('pieChartRegionOutpatient'));
    pieChartRegionOutpatient.setOption({
    color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
    title:{
     text:'厦门市区域慢病门诊人数占比',
     left:'center',
     textStyle:{
        color:'#333',
        fontStyle:'normal',
        fontWeight:'bold',
        fontFamily:'sans-serif',
    　　　　 fontSize:16
      }
    },
    tooltip : {
       trigger: 'item',
       formatter: "{a}<br/>{b}<br/>{c}%"
    },
    calculable : false,
    series : [
     {
         name:'门诊人数占比',
         type:'pie',
         radius : ['30%', '60%'],
         center : ['50%', '55%'],
         itemStyle: {
            normal: {
              label: {
                  show: true,
                  position: 'top',
                  formatter: '{b}\n{c}%'　　　　
              }
            }
          },
         data:[
             {value:38.5, name:'思明区'},
             {value:32.3, name:'湖里区'},
             {value:11.8, name:'集美区'},
             {value:8.1, name:'同安区'},
             {value:3.2, name:'海沧区'},
             {value:6.1, name:'翔安区'}

         ]
       }
    ]
  });

  //慢病门诊费用
  var lineChartOverallCost = echarts.init(document.getElementById('lineChartOverallCost'));
  lineChartOverallCost.setOption({
    color:["#3EA5F2"],
    title:{
     text:'慢病门诊费用',
     left:'center',
     textStyle:{
        color:'#333',
        fontStyle:'normal',
        fontWeight:'bold',
        fontFamily:'sans-serif',
    　　　　 fontSize:16
      }
    },
    calculable : false,
    tooltip : {
       trigger: 'item',
       formatter: "{a}<br/>{b}<br/>{c}元"
    },
    yAxis: [
         {
             type: 'value',
             axisLine : {onZero: false},
             axisLine:{
                 lineStyle:{
                     color: '#333'
                 },
             },

             axisLabel: {
                 textStyle: {
                     color: '#333'
                 },
                 formatter: function (value) {
                     return value + "元"
                 },
             },
             splitLine:{
                 lineStyle:{
                     width:0,
                     type:'solid'
                 }
             }
         }
     ],
    xAxis: [
       {
           type: 'category',
           name:'日期',
           nameLocation:'middle',
           nameTextStyle:{
               color:"333",
               fontSize:16,
               padding:20
           },
           data : symptomName,
           axisLine:{
               lineStyle:{
                   color: '#333'
               },
           },
           splitLine: {
               "show": false
           },
           axisLabel: {
               textStyle: {
                   color: '#333'
               },
               formatter: function (value) {
                   return value + ""
               },
           },
           splitLine:{
               lineStyle:{
                   width:0,
                   type:'solid'
               }
           },
       }
    ],
    grid:{
           left: '5%',
           right:'0',
           bottom: '20%',
           containLabel: true
    },
    series : [
       {
           name:'门诊费用',
           type:'line',
           smooth:true,
           itemStyle: {
               normal: {
                   lineStyle: {
                       shadowColor : 'rgba(0,0,0,0.4)'
                   }
               }
           },
           data:[3130, 3256, 3295, 2879, 3699, 3643, 3628, 3178, 3138, 3365]
       },
    ]
  });

  //常见慢性病门诊费用占比
  var pieChartOverallCost = echarts.init(document.getElementById('pieChartOverallCost'));
  pieChartOverallCost.setOption({
    color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
    title:{
      text:'常见慢性病门诊费用占比',
      left:'center',
      textStyle:{
         color:'#333',
         fontStyle:'normal',
         fontWeight:'bold',
         fontFamily:'sans-serif',
    　　　　 fontSize:16
       }
     },
    // legend:legendList,
    tooltip : {
        trigger: 'item',
        formatter: "{a}<br/>{b}<br/>{c}%"
    },
    calculable : false,
    series : [
      {
          name:'门诊费用占比',
          type:'pie',
          radius : ['30%', '60%'],
          center : ['50%', '50%'],
          itemStyle: {
             normal: {
               label: {
                   show: true,
                   position: 'top',
                   formatter: '{b}\n{c}%'　　　　
               }
             }
           },
          data:[
              {value:0.8, name:'挂号费'},
              {value:2.3, name:'诊疗费'},
              {value:28.7, name:'药费'},
              {value:9.2, name:'注射费'},
              {value:30.4, name:'输液费'},
              {value:18.6, name:'手术费'}

          ]
      }
    ]
  });

  //厦门市区域慢病门诊费用占比
  var pieChartRegionCost = echarts.init(document.getElementById('pieChartRegionCost'));
    pieChartRegionCost.setOption({
    color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
    title:{
     text:'厦门市区域慢病费用人数占比',
     left:'center',
     textStyle:{
        color:'#333',
        fontStyle:'normal',
        fontWeight:'bold',
        fontFamily:'sans-serif',
    　　　　 fontSize:16
      }
    },
    tooltip : {
       trigger: 'item',
       formatter: "{a}<br/>{b}<br/>{c}%"
    },
    calculable : false,
    series : [
     {
         name:'门诊费用占比',
         type:'pie',
         radius : ['30%', '60%'],
         center : ['50%', '55%'],
         itemStyle: {
            normal: {
              label: {
                  show: true,
                  position: 'top',
                  formatter: '{b}\n{c}%'　　　　
              }
            }
          },
         data:[
             {value:35.6, name:'思明区'},
             {value:33.4, name:'湖里区'},
             {value:12.8, name:'集美区'},
             {value:8.2, name:'同安区'},
             {value:3.2, name:'海沧区'},
             {value:6.8, name:'翔安区'}

         ]
       }
    ]
  });


 //常见慢性病统计柱状图
  var HistogramChartOverall = echarts.init(document.getElementById('HistogramChartOverall'));
  HistogramChartOverall.setOption({
    color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
    title:{
      text:'常见慢性病人数',
      left:'left',
      textStyle:{
         color:'#333',
         fontStyle:'normal',
         fontWeight:'bold',
         fontFamily:'sans-serif',
 　　　　 fontSize:18
       }
     },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['高血压', '糖尿病', '冠心病', '脑卒中', '慢阻肺','慢性肾病'],
        y: 'bottom',
        x:'center',
        textStyle:{
            color:'#333333',
            fontSize:12
        }
    },

    calculable: true,
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: ['2018-08', '2018-09', '2018-10', '2018-11', '2018-12']
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel:{
              formatter:'{value}(人)'
            }
        }
    ],
    series: [
        {
            name: '高血压',
            type: 'bar',
            barGap: 0,
            data: [85289, 117143, 84808, 84245, 109611]
        },
        {
            name: '糖尿病',
            type: 'bar',
            data: [53215, 48739, 58997, 51208, 47585]
        },
        {
            name: '脑卒中',
            type: 'bar',
            data: [21486, 24973, 26184, 27663, 29257]
        },
        {
            name: '慢阻肺',
            type: 'bar',
            data: [36253, 40479, 49507, 33648, 30406]
        },
        {
            name: '慢性肾病',
            type: 'bar',
            data: [32125, 44394, 35774, 33165, 37563]
        },
    ]
  });

  //常见慢性病人数占比
   var pieChartOverall = echarts.init(document.getElementById('pieChartOverall'));
   pieChartOverall.setOption({

     color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
     title:{
       text:'常见慢性病人数占比',
       left:'left',
       textStyle:{
          color:'#333',
          fontStyle:'normal',
          fontWeight:'bold',
          fontFamily:'sans-serif',
  　　　　 fontSize:18
        }
      },
     // legend:legendList,
     tooltip : {
         trigger: 'item',
         formatter: "{a}<br/>{b}<br/>{c}%"
     },
     calculable : false,
     series : [
         {
             name:'慢病比例',
             type:'pie',
             radius : ['30%', '60%'],
             center : ['50%', '50%'],
             itemStyle: {
                normal: {
                  label: {
                      show: true,
                      position: 'top',
                      formatter: '{b}\n{c}%'　　　　
                  }
                }
              },
             data:[
                 {value:35.1, name:'高血压'},
                 {value:22.8, name:'糖尿病'},
                 {value:7.6, name:'脑卒中'},
                 {value:18.1, name:'慢阻肺'},
                 {value:16.4, name:'慢性肾病'}
             ]
         }
     ]
   });

  //各年龄慢性病患病率
  var lineChartOverall = echarts.init(document.getElementById('lineChartOverall'));
  lineChartOverall.setOption( {
    color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
    title:{
      text:'各年龄慢病患病率',
      left:'left',
      textStyle:{
         color:'#333',
         fontStyle:'normal',
         fontWeight:'bold',
         fontFamily:'sans-serif',
  　　　　 fontSize:18
       }
     },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
     legend: {
      data:['男性','女性','合计',],
      y: 'bottom',
      x:'center',
      textStyle:{
          color:'#333333',
          fontSize:12
      }
    },
    calculable : true,
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: ['18-24岁', '25-29岁', '30-34岁', '35-39岁', '40-44岁', '45-49岁', '50-54岁', '55-59岁', '60-64岁', '65-69岁']
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel:{
              formatter:'{value}(%)'
            }
        }
    ],
    series : [
        {
            name:'男性',
            type:'line',
            smooth:true,
            data:bubbleSort([30.5, 34.4, 26.5, 24.8, 22.1, 23.6, 21.5, 38.1, 33.6, 36.9])
        },
        {
            name:'女性',
            type:'line',
            smooth:true,
            data:bubbleSort([20.3, 27.4, 21.7, 24.9, 19.1, 26.2, 23.5, 18.3, 22.0, 25.9])
        },
        {
            name:'合计',
            type:'line',
            smooth:true,
            data:bubbleSort([19.5, 22.6, 24.1, 27.8, 32.2, 30.8, 33.6, 32.7, 23.4, 20.9])
        },
    ]
  })

 //慢病知晓率、治疗率、控制率、治疗控制率
  var HistogramChartOverall2 = echarts.init(document.getElementById('HistogramChartOverall2'));
  HistogramChartOverall2.setOption({
    color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
    title:{
      text:'慢病治疗指标监测',
      left:'left',
      textStyle:{
         color:'#333',
         fontStyle:'normal',
         fontWeight:'bold',
         fontFamily:'sans-serif',
 　　　　 fontSize:18
       }
     },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['知晓率', '治疗率', '控制率','治疗控制率'],
        y: 'bottom',
        x:'center',
        textStyle:{
            color:'#333333',
            fontSize:12
        }
    },

    calculable: true,
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: ['高血压', '糖尿病', '脑卒中', '慢阻肺','慢性肾病']
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel:{
              formatter:'{value}(%)'
            }
        }
    ],
    series: [
        {
            name: '知晓率',
            type: 'bar',
            barGap: 0,
            data: [43.5, 46.9, 42.7, 39.5, 36.7]
        },
        {
            name: '治疗率',
            type: 'bar',
            barGap: 0,
            data: [32.9, 40.7, 38.3,35.7, 34.3]
        },
        {
            name: '控制率',
            type: 'bar',
            barGap: 0,
            data: [18.3, 15.3, 14.5, 25.6, 22.3]
        },
        {
            name: '治疗控制率',
            type: 'bar',
            barGap: 0,
            data: [16.3, 24.2, 38.0, 25.6, 21.2]
        },
    ]
  });

  //各年龄段吸烟率折线图
  var lineChartSmoke = echarts.init(document.getElementById('lineChartSmoke'));
  lineChartSmoke.setOption( {
    color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
    title:{
      text:'各年龄段吸烟率',
      left:'center',
      textStyle:{
         color:'#333',
         fontStyle:'normal',
         fontWeight:'bold',
         fontFamily:'sans-serif',
  　　　　 fontSize:18
       }
     },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
     legend: {
      data:['男性','女性','合计',],
      y: 'bottom',
      x:'center',
      textStyle:{
          color:'#333333',
          fontSize:12
      }
    },
    calculable : true,
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: ['18-24岁', '25-29岁', '30-34岁', '35-39岁', '40-44岁', '45-49岁', '50-54岁', '55-59岁', '60-64岁', '65-69岁']
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel:{
              formatter:'{value}(%)'
            }
        }
    ],
    series : [
        {
            name:'男性',
            type:'line',
            smooth:true,
            data:[30.1, 48.2, 53.2, 56.7, 58.3, 59.6, 60.5, 56.4, 48.0, 38.2]
        },
        {
            name:'女性',
            type:'line',
            smooth:true,
            data:[5.1, 5.4, 5.7, 6.1, 6.6, 6.8, 7.1, 8.3, 9.2, 10.0]
        },
        {
            name:'合计',
            type:'line',
            smooth:true,
            data:[18.2, 26.6, 29.1, 31.3, 32.2, 32.8, 33.6, 32.7, 28.4, 23.9]
        },
    ]
  })

  //各年龄段饮酒率折线图
  var lineChartDrink = echarts.init(document.getElementById('lineChartDrink'));
  lineChartDrink.setOption( {
    color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
    title:{
      text:'各年龄段饮酒率',
      left:'center',
      textStyle:{
         color:'#333',
         fontStyle:'normal',
         fontWeight:'bold',
         fontFamily:'sans-serif',
  　　　　 fontSize:18
       }
     },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
     legend: {
      data:['男性','女性','合计',],
      y: 'bottom',
      x:'center',
      textStyle:{
          color:'#333333',
          fontSize:12
      }
    },
    calculable : true,
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: ['18-24岁', '25-29岁', '30-34岁', '35-39岁', '40-44岁', '45-49岁', '50-54岁', '55-59岁', '60-64岁', '65-69岁']
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel:{
              formatter:'{value}(%)'
            }
        }
    ],
    series : [
        {
            name:'男性',
            type:'line',
            smooth:true,
            data:[2.6, 14.9, 26.7, 38.5, 46.6, 48.3, 42.2, 36.6 , 30.6, 25.4]
        },
        {
            name:'女性',
            type:'line',
            smooth:true,
            data:[1.6, 1.8, 2.9, 3.9, 5.4, 6.3, 6.8, 7.5, 8.6, 7.7]
        },
        {
            name:'合计',
            type:'line',
            smooth:true,
            data:[0.7, 7.9, 14.3, 20.7, 23.7, 25.8, 24.1, 21.8, 19.4, 16.2]
        },
    ]
  })

  //人均食盐、食用油摄入量
  var HistogramChartEat = echarts.init(document.getElementById('HistogramChartEat'));
  HistogramChartEat.setOption({
    color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
    title:{
     text:'人均食盐、食用油摄入量',
     left:'center',
     textStyle:{
        color:'#333',
        fontStyle:'normal',
        fontWeight:'bold',
        fontFamily:'sans-serif',
    　　　　 fontSize:18
      }
    },
    tooltip: {
       trigger: 'axis',
       axisPointer: {
           type: 'shadow'
       }
    },
    legend: {
       data: ['食盐', '食用油'],
       y: 'bottom',
       x:'center',
       textStyle:{
           color:'#333333',
           fontSize:12
       }
    },

    calculable: true,
    xAxis: [
       {
           type: 'category',
           axisTick: {show: false},
           data: ['2014', '2015', '2016', '2017', '2018']
       }
    ],
    yAxis: [
       {
           type: 'value',
           axisLabel:{
             formatter:'{value}(克)'
           }
       }
    ],
    series: [
       {
           name: '食盐',
           type: 'bar',
           barGap: 0,
           data: [13.2, 14.1, 13.7, 12.5, 10.6]
       },
       {
           name: '食用油',
           type: 'bar',
           barGap: 0,
           data: [18, 29.5, 41.6, 49.1, 57.3]
       },
    ]
  });

  //各年龄段肥胖率折线图
  var lineChartObesity = echarts.init(document.getElementById('lineChartObesity'));
  lineChartObesity.setOption( {
    color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
    title:{
      text:'各年龄段肥胖率',
      left:'center',
      textStyle:{
         color:'#333',
         fontStyle:'normal',
         fontWeight:'bold',
         fontFamily:'sans-serif',
  　　　　 fontSize:18
       }
     },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
     legend: {
      data:['肥胖率','超重率'],
      y: 'bottom',
      x:'center',
      textStyle:{
          color:'#333333',
          fontSize:12
      }
    },
    calculable : true,
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: ['18-24岁', '25-29岁', '30-34岁', '35-39岁', '40-44岁', '45-49岁', '50-54岁', '55-59岁', '60-64岁', '65-69岁']
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel:{
              formatter:'{value}(%)'
            }
        }
    ],
    series : [
        {
            name:'肥胖率',
            type:'line',
            smooth:true,
            data:[6.1, 10.2, 11.7, 12.8, 14.3, 15.9, 15.6, 14.1 , 14.7, 14.3]
        },
        {
            name:'超重率',
            type:'line',
            smooth:true,
            data:[16.5, 26.2, 27.8, 32.1, 35.3, 36.8, 37.5, 36.3, 35.7, 34.2]
        },
    ]
  })


  //中国睡眠指数
  var lineChartSleep = echarts.init(document.getElementById('lineChartSleep'));
  lineChartSleep.setOption( {
    color:["#3EA5F2","#2B8378","#CBC928","#EE59CC","#CD0C62",],
    title:{
      text:'2018中国睡眠指数',
      left:'center',
      textStyle:{
         color:'#333',
         fontStyle:'normal',
         fontWeight:'bold',
         fontFamily:'sans-serif',
  　　　　 fontSize:18
       }
     },
     tooltip : {
       trigger: 'item',
       formatter: "{b}<br/>{c}%"
   },
    xAxis: {
        type : 'category',
        splitLine: {show:false},
        data : ['甜美(90-100分)','舒适(75-90分)','苦涩(65-75分)','烦躁(50-65分)','不眠(0-50分)']
    },
    yAxis: {
        type : 'value',
        axisLabel:{
          formatter:'{value}(%)'
        }
    },
    series: [
        {
            name: '辅助',
            type: 'bar',
            stack:  '总量',
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [ 94.5, 75.1, 45.5, 12.2, 0]
        },
        {
            name: '甜美',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}%'
                }
            },
            data:[ 5.5, '-', '-', '-', '-']
        },
        {
            name: '舒适',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}%'
                }
            },
            data:[ '-', 19.4, '-', '-', '-']
        },
        {
            name: '苦涩',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}%'
                }
            },
            data:[ '-', '-', 29.6, '-', '-']
        },
        {
            name: '烦躁',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}%'
                }
            },
            data:[ '-', '-', '-', 33.3, '-']
        },
        {
            name: '不眠',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}%'
                }
            },
            data:[ '-', '-', '-', '-', 12.2]
        },
    ]
  })



  //各年龄段经常锻炼率折线图
  var HistogramChartMotion = echarts.init(document.getElementById('HistogramChartMotion'));
  HistogramChartMotion.setOption( {
    color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
    title:{
      text:'各年龄段经常锻炼率',
      left:'center',
      textStyle:{
         color:'#333',
         fontStyle:'normal',
         fontWeight:'bold',
         fontFamily:'sans-serif',
  　　　　 fontSize:18
       }
     },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
     legend: {
      data:['2016年','2017年','2018年',],
      y: 'bottom',
      x:'center',
      textStyle:{
          color:'#333333',
          fontSize:12
      }
    },
    calculable : true,
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: [ '20-29岁', '30-39岁',  '40-49岁',  '50-59岁', '60-69岁', '70岁以上']
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel:{
              formatter:'{value}(%)'
            }
        }
    ],
    series : [
        {
            name:'2016年',
            type: 'bar',
            barGap: 0,
            data:[48.2,  41.7, 41.1,  40.0 , 36.2, 26.0]
        },
        {
            name:'2017年',
            type: 'bar',
            barGap: 0,
            data:[50.1, 43.3, 42.7, 44.5, 37.3, 37.6]
        },
        {
            name:'2018年',
            type: 'bar',
            barGap: 0,
            data:[51.6, 44.6, 43.9, 45.8, 38.4, 38.7]
        }
    ]
  })

  //慢病双向转诊人数
  var lineChartOverallReferral = echarts.init(document.getElementById('lineChartOverallReferral'));
  lineChartOverallReferral.setOption({
    color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
    title:{
    text:'慢病双向转诊人数',
    left:'center',
    textStyle:{
       color:'#333',
       fontStyle:'normal',
       fontWeight:'bold',
       fontFamily:'sans-serif',
    　　　　 fontSize:16
     }
    },
    calculable : false,
    tooltip : {
      trigger: 'item',
      formatter: "{a}<br/>{b}<br/>{c}人"
    },
    legend: {
     data:['向上转诊人数','向下转诊人数'],
     y: 'bottom',
     x:'center',
     textStyle:{
         color:'#333333',
         fontSize:12
     }
   },
    yAxis: [
        {
            type: 'value',
            axisLine : {onZero: false},
            axisLine:{
                lineStyle:{
                    color: '#333'
                },
            },

            axisLabel: {
                textStyle: {
                    color: '#333'
                },
                formatter: function (value) {
                    return value + "人"
                },
            },
            splitLine:{
                lineStyle:{
                    width:0,
                    type:'solid'
                }
            }
        }
    ],
    xAxis: [
        {
            type: 'category',
            name:'日期',
            nameLocation:'middle',
            nameTextStyle:{
                color:"333",
                fontSize:16,
                padding:20
            },
            data : symptomName,
            axisLine:{
                lineStyle:{
                    color: '#333'
                },
            },
            splitLine: {
                "show": false
            },
            axisLabel: {
                textStyle: {
                    color: '#333'
                },
                formatter: function (value) {
                    return value + ""
                },
            },
            splitLine:{
                lineStyle:{
                    width:0,
                    type:'solid'
                }
            },
        }
    ],
    grid:{
            left: '5%',
            right:'0',
            bottom: '20%',
            containLabel: true
    },
    series : [
      {
          name:'向上转诊人数',
          type:'line',
          smooth:true,
          itemStyle: {
              normal: {
                  lineStyle: {
                      shadowColor : 'rgba(0,0,0,0.4)'
                  }
              }
          },
          data:[166, 136, 154, 183, 197, 192, 199, 105, 193, 115]
      },
      {
          name:'向下转诊人数',
          type:'line',
          smooth:true,
          itemStyle: {
              normal: {
                  lineStyle: {
                      shadowColor : 'rgba(0,0,0,0.4)'
                  }
              }
          },
          data:[16, 16, 14, 13, 17, 12, 19, 15, 13, 11]
      },
    ]
  });

  //常见慢性病双向转诊人数占比
  var pieChartOverallReferral = echarts.init(document.getElementById('pieChartOverallReferral'));
  pieChartOverallReferral.setOption({
    color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
    title:{
     text:'常见慢性病双向转诊人数占比',
     left:'center',
     textStyle:{
        color:'#333',
        fontStyle:'normal',
        fontWeight:'bold',
        fontFamily:'sans-serif',
    　　　　 fontSize:16
      }
    },
    // legend:legendList,
    tooltip : {
       trigger: 'item',
       formatter: "{a}<br/>{b}<br/>{c}%"
    },
    calculable : false,
    series : [
       {
           name:'双向转诊人数占比',
           type:'pie',
           radius : ['30%', '60%'],
           center : ['50%', '50%'],
           itemStyle: {
              normal: {
                label: {
                    show: true,
                    position: 'top',
                    formatter: '{b}\n{c}%'　　　　
                }
              }
            },
           data:[
               {value:16.6, name:'高血压'},
               {value:15.3, name:'糖尿病'},
               {value:29.2, name:'脑卒中'},
               {value:20.4, name:'慢阻肺'},
               {value:18.5, name:'慢性肾病'}
           ]
       }
    ]
  });

  //厦门市区域慢病双向转诊人数占比
  var pieChartRegionReferral = echarts.init(document.getElementById('pieChartRegionReferral'));
  pieChartRegionReferral.setOption({
    color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
    title:{
      text:'厦门市区域慢病双向转诊人数占比',
      left:'center',
      textStyle:{
         color:'#333',
         fontStyle:'normal',
         fontWeight:'bold',
         fontFamily:'sans-serif',
      　　　　 fontSize:16
       }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a}<br/>{b}<br/>{c}%"
    },
    calculable : false,
    series : [
      {
          name:'双向转诊人数占比',
          type:'pie',
          radius : ['30%', '60%'],
          center : ['50%', '55%'],
          itemStyle: {
             normal: {
               label: {
                   show: true,
                   position: 'top',
                   formatter: '{b}\n{c}%'　　　　
               }
             }
           },
          data:[
              {value:32.3, name:'思明区'},
              {value:31.4, name:'湖里区'},
              {value:14.7, name:'集美区'},
              {value:9.6, name:'同安区'},
              {value:3.1, name:'海沧区'},
              {value:8.9, name:'翔安区'}
          ]
      }
    ]
  });


}
