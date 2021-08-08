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

  //吸烟与慢病患病率分析
  var HistogramChartHabit1 = echarts.init(document.getElementById('HistogramChartHabit1'));
  HistogramChartHabit1.setOption({
    color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
    title:{
     text:'吸烟与慢病患病率分析',
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
       data: ['不吸烟患病率', '吸烟患病率'],
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
           data: ['高血压', '糖尿病','脑卒中', '慢阻肺', '慢性肾病']
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
           name: '不吸烟患病率',
           type: 'bar',
           barGap: 0,
           data: [23.1, 9.7, 7.6, 1.7, 0.11]
       },
       {
           name: '吸烟患病率',
           type: 'bar',
           data: [32.56, 17.6, 14.3, 3.04, 0.25]
       },
    ]
  });

  //饮酒与慢病患病率分析
  var HistogramChartHabit2 = echarts.init(document.getElementById('HistogramChartHabit2'));
  HistogramChartHabit2.setOption({
    color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
    title:{
      text:'饮酒与慢病患病率分析',
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
        data: ['不饮酒患病率', '饮酒患病率'],
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
            data: ['高血压', '糖尿病','脑卒中', '慢阻肺', '慢性肾病']
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
            name: '不饮酒患病率',
            type: 'bar',
            barGap: 0,
            data: [23.1, 9.7, 7.6, 1.7, 0.11]
        },
        {
            name: '饮酒患病率',
            type: 'bar',
            data: [33.1, 19.7, 17.6, 4.7, 0.21]
        },
    ]
  });

  //食盐摄入量和慢病患病率分析
  var HistogramChartDiet1 = echarts.init(document.getElementById('HistogramChartDiet1'));
  HistogramChartDiet1.setOption({
    color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
    title:{
     text:'食盐摄入量和慢病患病率分析',
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
       data: ['控盐', '高盐'],
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
           data: ['高血压', '冠心病', '脑卒中', '胃癌']
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
           name: '控盐',
           type: 'bar',
           barGap: 0,
           data: [22.6, 6.6, 3.9, 1.1]
       },
       {
           name: '高盐',
           type: 'bar',
           data: [53.2, 17.3, 4.5, 1.9]
       },
    ]
  });

  //食用油摄入量和慢病患病率分析
  var HistogramChartDiet2 = echarts.init(document.getElementById('HistogramChartDiet2'));
  HistogramChartDiet2.setOption({
    color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
    title:{
      text:'食用油摄入量和慢病患病率分析',
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
        data: ['控油', '高油'],
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
            data: ['脂肪肝', '冠心病', '脑卒中', '动脉硬化']
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
            name: '控油',
            type: 'bar',
            barGap: 0,
            data: [23.2, 14.3, 6.6, 3.9]
        },
        {
            name: '高油',
            type: 'bar',
            data: [36.2, 23.3, 11.6, 5.1]
        },
    ]
  });

  //运动与慢病患病率分析柱状图
  var lineChartMotion = echarts.init(document.getElementById('lineChartMotion'));
  lineChartMotion.setOption({
    color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
    title:{
     text:'运动与慢病患病率分析',
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
       data: ['运动充足患病率', '运动不足患病率'],
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
           data: ['高血压', '冠心病', '脑卒中', '动脉硬化']
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
           name: '运动充足患病率',
           type: 'bar',
           barGap: 0,
           data: [23.1, 10.6, 6.7, 8.6]
       },
       {
           name: '运动不足患病率',
           type: 'bar',
           data: [36.5, 17.3, 12.9, 18.1]
       },
    ]
  });

  //肥胖与慢病患病率分析柱状图
  var HistogramChartObesity = echarts.init(document.getElementById('HistogramChartObesity'));
  HistogramChartObesity.setOption({
    color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
    title:{
      text:'肥胖与慢病患病率分析',
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
        data: ['体重正常', '超重', '肥胖'],
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
            data: ['高血压患病率', '糖尿病患病率', '脂肪肝患病率', '高脂血症患病率']
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
            name: '体重正常',
            type: 'bar',
            barGap: 0,
            data: [22.6, 6.6, 3.9, 1.1]
        },
        {
            name: '超重',
            type: 'bar',
            data: [38.5, 12.7, 4.1, 1.6]
        },
        {
            name: '肥胖',
            type: 'bar',
            data: [53.2, 17.3, 4.5, 1.9]
        },
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
         data: ['2016', '2017', '2018'],
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
             data: ['高血压', '糖尿病', '脑卒中','慢阻肺','慢性肾病']
         }
     ],
     yAxis: [
         {
             type: 'value',
             axisLabel:{
               formatter:'{value}(万人)'
             }
         }
     ],
     series: [
         {
             name: '2016',
             type: 'bar',
             barGap: 0,
             data: [931157, 499823, 214653, 448458, 473092 ]
         },
         {
             name: '2017',
             type: 'bar',
             data: [1004161, 511795, 221308, 483789, 482500 ]
         },
         {
             name: '2018',
             type: 'bar',
             data: [1155352, 575306, 230823, 526614, 509791]
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
                  {value:32.5, name:'高血压'},
                  {value:20.9, name:'糖尿病'},
                  {value:7.2, name:'脑卒中'},
                  {value:19.8, name:'慢阻肺'},
                  {value:19.6, name:'慢性肾病'}
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
       data:['2016','2017','2018',],
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
           name:'2018',
           type:'line',
           smooth:true,
           data:bubbleSort([30.5, 34.4, 26.5, 24.8, 22.1, 23.6, 21.5, 36.1, 33.6, 35.9])
       },
       {
           name:'2017',
           type:'line',
           smooth:true,
           data:bubbleSort([19.5, 22.6, 24.1, 27.8, 32.2, 30.8, 33.6, 32.7, 23.4, 20.9])
       },
       {
           name:'2016',
           type:'line',
           smooth:true,
           data:bubbleSort([20.3, 27.4, 21.7, 24.9, 19.1, 26.2, 23.5, 18.3, 22.0, 25.9])
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
         data: ['2016', '2017', '2018'],
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
             data: ['知晓率', '治疗率', '控制率','治疗控制率']
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
             name: '2016',
             type: 'bar',
             barGap: 0,
             data: [43.5, 32.9, 15.3, 35.5]
         },
         {
             name: '2017',
             type: 'bar',
             barGap: 0,
             data: [45.4, 40.3, 17.2, 37.8]
         },
         {
             name: '2018',
             type: 'bar',
             barGap: 0,
             data: [46.9, 46.7, 18.2, 39.5]
         },
     ]
   });

  //近三年高血压患病率
  var lineChartHypertense = echarts.init(document.getElementById('lineChartHypertense'));
  lineChartHypertense.setOption( {
    color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
    title:{
      text:'各年龄高血压患病率',
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
      data:['2016','2017','2018',],
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
          name:'2016',
          type:'line',
          smooth:true,
          data:bubbleSort([20.2, 22.1, 22.8, 23.3, 20.4, 22.6, 22.7, 21.5, 20.9, 21.1])
      },
      {
          name:'2017',
          type:'line',
          smooth:true,
          data:bubbleSort([22.0, 22.8, 22.5, 24.1, 23.9, 24.7, 23.3, 24.4, 23.2, 22.6])
      },
      {
          name:'2018',
          type:'line',
          smooth:true,
          data:bubbleSort([22.3, 23.4, 23.8, 24.2, 24.1, 25.9, 24.0, 24.5, 24.1, 25.6])
      },
    ]
  })

 //高血压知晓率、治疗率、控制率、治疗控制率
  var HistogramChartHypertense = echarts.init(document.getElementById('HistogramChartHypertense'));
  HistogramChartHypertense.setOption({
    color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
    title:{
      text:'高血压治疗指标监测',
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
        data: ['2016', '2017', '2018'],
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
            data: ['知晓率', '治疗率', '控制率','治疗控制率']
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
            name: '2016',
            type: 'bar',
            barGap: 0,
            data: [46.2, 38.9, 13.5,41.3]
        },
        {
            name: '2017',
            type: 'bar',
            barGap: 0,
            data: [48.5, 40.7, 15.3,42.8]
        },
        {
            name: '2018',
            type: 'bar',
            barGap: 0,
            data: [49.6, 42.2, 18.3,44.5]
        },
    ]
  });

  //各年龄糖尿病患病率
  var lineChartDiabete = echarts.init(document.getElementById('lineChartDiabete'));
  lineChartDiabete.setOption( {
    color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
    title:{
      text:'各年龄糖尿病患病率',
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
      data:['2016','2017','2018',],
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
            name:'2016',
            type:'line',
            smooth:true,
            data:bubbleSort([13.4, 11.2, 11.5, 12.7, 12.8, 11.9, 13.6, 12.0, 11.3, 13.1])
        },
        {
            name:'2017',
            type:'line',
            smooth:true,
            data:bubbleSort([12.4, 13.8, 14.1, 13.2, 12.3, 13.5, 12.1, 14.7, 14.0, 13.9])
        },
        {
            name:'2018',
            type:'line',
            smooth:true,
            data:bubbleSort([13.8, 13.2, 15.5, 13.3, 15.7, 14.1, 14.2, 12.3, 13.9, 14.4])
        },
    ]
  })

 //糖尿病知晓率、治疗率、控制率、好转率
 var HistogramChartDiabete = echarts.init(document.getElementById('HistogramChartDiabete'));
 HistogramChartDiabete.setOption({
   color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
   title:{
     text:'糖尿病治疗指标监测',
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
       data: ['2016', '2017', '2018'],
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
           data: ['知晓率', '治疗率', '控制率','治疗控制率']
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
         name: '2016',
         type: 'bar',
         barGap: 0,
         data: [43.5, 32.9, 13.5, 38.3, ]
     },
     {
         name: '2017',
         type: 'bar',
         barGap: 0,
         data: [46.9, 40.7, 15.2, 40.2]
     },
     {
         name: '2018',
         type: 'bar',
         barGap: 0,
         data: [51.5, 41.1, 18.3, 44.4]
     },
   ]
 });

 //各年龄脑卒中患病率
 var lineChartBrain = echarts.init(document.getElementById('lineChartBrain'));
 lineChartBrain.setOption( {
   color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
   title:{
     text:'各年龄脑卒中患病率',
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
     data:['2016','2017','2018',],
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
           name:'2016',
           type:'line',
           smooth:true,
           data:bubbleSort([4.0, 5.9, 4.8, 6.6, 5.5, 5.3, 5.7, 4.1, 4.2, 5.1])
       },
       {
           name:'2017',
           type:'line',
           smooth:true,
           data:bubbleSort([5.0, 4.8, 5.1, 4.4, 5.5, 5.3, 5.9, 5.7, 4.2, 5.6])
       },
       {
           name:'2018',
           type:'line',
           smooth:true,
           data:bubbleSort([4.7, 4.9, 5.0, 5.5, 5.3, 4.8, 4.2, 6.6, 6.1, 6.4])
       },
   ]
 })

 //脑卒中知晓率、治疗率、控制率、治疗控制率
 var HistogramChartBrain = echarts.init(document.getElementById('HistogramChartBrain'));
 HistogramChartBrain.setOption({
   color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
   title:{
     text:'脑卒中治疗指标监测',
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
       data: ['2016', '2017', '2018'],
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
           data: ['知晓率', '治疗率', '控制率','治疗控制率']
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
         name: '2016',
         type: 'bar',
         barGap: 0,
         data: [43.5, 34.8, 13.7, 34.6]
     },
     {
         name: '2017',
         type: 'bar',
         barGap: 0,
         data: [45.9, 37.5, 15.2, 36.5]
     },
     {
         name: '2018',
         type: 'bar',
         barGap: 0,
         data: [49.1, 39.1, 16.8, 38.7]
     },
   ]
 });

 //各年龄慢阻肺患病率
 var lineChartLung = echarts.init(document.getElementById('lineChartLung'));
 lineChartLung.setOption( {
   color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
   title:{
     text:'各年龄慢阻肺患病率',
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
     data:['2016','2017','2018',],
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
           name:'2016',
           type:'line',
           smooth:true,
           data:bubbleSort([15.1, 12.8, 13.4, 14.6, 11.2, 16.1, 14.0, 13.3, 13.7, 14.5])
       },
       {
           name:'2017',
           type:'line',
           smooth:true,
           data:bubbleSort([15.2, 12.8, 11.6, 14.0, 12.3, 12.5, 15.4, 15.1, 16.7, 14.9])
       },
       {
           name:'2018',
           type:'line',
           smooth:true,
           data:bubbleSort([16.4, 16.0, 11.8, 14.9, 11.9, 15.1, 13.2, 16.3, 14.7, 16.6])
       },
   ]
 })

 //慢阻肺炎知晓率、治疗率、控制率、治疗控制率
 var HistogramChartLung = echarts.init(document.getElementById('HistogramChartLung'));
 HistogramChartLung.setOption({
   color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
   title:{
    text:'慢阻肺治疗指标监测',
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
      data: ['2016', '2017', '2018'],
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
          data: ['知晓率', '治疗率', '控制率','治疗控制率']
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
         name: '2016',
         type: 'bar',
         barGap: 0,
         data: [43.4, 39.9, 14.7, 37.2]
     },
     {
         name: '2017',
         type: 'bar',
         barGap: 0,
         data: [45.1, 40.6, 15.0, 39.2]
     },
     {
         name: '2018',
         type: 'bar',
         barGap: 0,
         data: [47.5, 42.7, 16.3, 40.8]
     },
   ]
 });

 //各年龄慢性肾炎患病率
 var lineChartKidney = echarts.init(document.getElementById('lineChartKidney'));
 lineChartKidney.setOption( {
   color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
   title:{
     text:'各年龄慢性肾炎患病率',
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
     data:['2016','2017','2018',],
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
           name:'2016',
           type:'line',
           smooth:true,
           data:bubbleSort([8.4, 12.3, 9.7, 7.9, 11.2, 9.1, 8.7, 11.2, 9.6, 13.4])
       },
       {
           name:'2017',
           type:'line',
           smooth:true,
           data:bubbleSort([8.7, 13.8, 11.6, 8.2, 8.5, 13.3, 12.1, 10.4, 11.0, 10.9])
       },
       {
           name:'2018',
           type:'line',
           smooth:true,
           data:bubbleSort([11.5, 12.8, 13.0, 13.2, 8.4, 12.9, 10.3, 12.6, 12.1, 11.7])
       },
   ]
 })

 //慢性肾炎知晓率、治疗率、控制率、治疗控制率
 var HistogramChartKidney = echarts.init(document.getElementById('HistogramChartKidney'));
 HistogramChartKidney.setOption({
   color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
   title:{
    text:'慢性肾炎治疗指标监测',
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
      data: ['2016', '2017', '2018'],
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
          data: ['知晓率', '治疗率', '控制率','治疗控制率']
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
         name: '2016',
         type: 'bar',
         barGap: 0,
         data: [45.5, 36.9, 13.5, 19.3]
     },
     {
         name: '2017',
         type: 'bar',
         barGap: 0,
         data: [48.9, 38.7, 16.2, 21.4]
     },
     {
         name: '2018',
         type: 'bar',
         barGap: 0,
         data: [50.5, 41.1, 18.3, 24.4]
     },
   ]
 });

}
