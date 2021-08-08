$(function(){
  init();
  //设置中文
     videojs.addLanguage('zh-CN', {
       "Play": "播放",
       "Pause": "暂停",
       "Current Time": "当前时间",
       "Duration": "时长",
       "Remaining Time": "剩余时间",
       "Stream Type": "媒体流类型",
       "LIVE": "直播",
       "Loaded": "加载完毕",
       "Progress": "进度",
       "Fullscreen": "全屏",
       "Non-Fullscreen": "退出全屏",
       "Mute": "静音",
       "Unmute": "取消静音",
       "Playback Rate": "播放速度",
       "Subtitles": "字幕",
       "subtitles off": "关闭字幕",
       "Captions": "内嵌字幕",
       "captions off": "关闭内嵌字幕",
       "Chapters": "节目段落",
       "Close Modal Dialog": "关闭弹窗",
       "Descriptions": "描述",
       "descriptions off": "关闭描述",
       "Audio Track": "音轨",
       "You aborted the media playback": "视频播放被终止",
       "A network error caused the media download to fail part-way.": "网络错误导致视频下载中途失败。",
       "The media could not be loaded, either because the server or network failed or because the format is not supported.": "视频因格式不支持或者服务器或网络的问题无法加载。",
       "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.": "由于视频文件损坏或是该视频使用了你的浏览器不支持的功能，播放终止。",
       "No compatible source was found for this media.": "无法找到此视频兼容的源。",
       "The media is encrypted and we do not have the keys to decrypt it.": "视频已加密，无法解密。",
       "Play Video": "播放视频",
       "Close": "关闭",
       "Modal Window": "弹窗",
       "This is a modal window": "这是一个弹窗",
       "This modal can be closed by pressing the Escape key or activating the close button.": "可以按ESC按键或启用关闭按钮来关闭此弹窗。",
       ", opens captions settings dialog": ", 开启标题设置弹窗",
       ", opens subtitles settings dialog": ", 开启字幕设置弹窗",
       ", opens descriptions settings dialog": ", 开启描述设置弹窗",
       ", selected": ", 选择",
       "captions settings": "字幕设定",
       "Audio Player": "音频播放器",
       "Video Player": "视频播放器",
       "Replay": "重播",
       "Progress Bar": "进度小节",
       "Volume Level": "音量",
       "subtitles settings": "字幕设定",
       "descriptions settings": "描述设定",
       "Text": "文字",
       "White": "白",
       "Black": "黑",
       "Red": "红",
       "Green": "绿",
       "Blue": "蓝",
       "Yellow": "黄",
       "Magenta": "紫红",
       "Cyan": "青",
       "Background": "背景",
       "Window": "视窗",
       "Transparent": "透明",
       "Semi-Transparent": "半透明",
       "Opaque": "不透明",
       "Font Size": "字体尺寸",
       "Text Edge Style": "字体边缘样式",
       "None": "无",
       "Raised": "浮雕",
       "Depressed": "压低",
       "Uniform": "均匀",
       "Dropshadow": "下阴影",
       "Font Family": "字体库",
       "Proportional Sans-Serif": "比例无细体",
       "Monospace Sans-Serif": "单间隔无细体",
       "Proportional Serif": "比例细体",
       "Monospace Serif": "单间隔细体",
       "Casual": "舒适",
       "Script": "手写体",
       "Small Caps": "小型大写字体",
       "Reset": "重启",
       "restore all settings to the default values": "恢复全部设定至预设值",
       "Done": "完成",
       "Caption Settings Dialog": "字幕设定视窗",
       "Beginning of dialog window. Escape will cancel and close the window.": "开始对话视窗。离开会取消及关闭视窗",
       "End of dialog window.": "结束对话视窗"
     });

     var myPlayer = videojs('my-video');
     videojs("my-video").ready(function(){
       var myPlayer = this;
       myPlayer.play();
     });

})

function init(){


  // var legendList = [];
  // var opData = [
  //   {
  //     name:'思明区',
  //     value:'13.6',
  //     trend:'2.2'
  //    },{
  //       name:'湖里区',
  //       value:'15.3',
  //       trend:'-1.0'
  //   },{
  //     name:'集美区',
  //     value:'28',
  //     trend:'0.8'
  //   },{
  //     name:'同安区',
  //     value:'20.1',
  //     trend:'-0.7'
  //   },{
  //     name:'海沧区',
  //     value:'23',
  //     trend:'-1.3'
  //   },{
  //     name:'翔安区',
  //     value:'23',
  //     trend:'-1.3'
  //   },
  // ]
  // for(var i=0;i<opData.length;i++){
  //    var topValue = i*20+60 +'px';
  //    var obj = {
  //       x:'right',
  //       top:topValue,
  //       textStyle:{
  //           color:'#333333',
  //           fontSize:16
  //       },
  //       data:[opData[i].name
  //     ],
  //       formatter:  function(name){
  //
  //         for (var i = 0, l = opData.length; i < l; i++) {
  //
  //            if (opData[i].name == name) {
  //                value = opData[i].value;
  //                trend = opData[i].trend;
  //                }
  //
  //            }
  //            console.log(trend)
  //           if(trend > 0){
  //               return name  + value + '%' +';同比'+'↑'+Math.abs(trend) + '%';
  //           }else{
  //               return name  + value + '%' +';同比'+'↓'+Math.abs(trend) + '%';
  //           }
  //
  //       }
  //
  //     }
  //     legendList.push(obj);
  // }

  var symptomName = last__10_day().reverse();
 //厦门市区域慢病统计饼图
  var pieChartRegion = echarts.init(document.getElementById('pieChartRegion'));
  pieChartRegion.setOption({

    color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
    title:{
      text:'厦门市区域慢病统计',
      left:'center',
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
                {value:28.5, name:'思明区'},
                {value:28.2, name:'湖里区'},
                {value:14.3, name:'集美区'},
                {value:14.1, name:'同安区'},
                {value:3.6, name:'海沧区'},
                {value:11.2, name:'翔安区'}

            ]
        }
    ]
  });

 //各年龄段慢病患病率折线图
  var lineChartPrevalence = echarts.init(document.getElementById('lineChartPrevalence'));
  lineChartPrevalence.setOption({

      color:["#3EA5F2","#EE59CC","#2B8378","#CD0C62","#CBC928","#65C762"],
    title:{
      text:'各年龄段慢病患病率',
      left:'left',
      textStyle:{
         color:'#333',
         fontStyle:'normal',
         fontWeight:'bold',
         fontFamily:'sans-serif',
 　　　　 fontSize:18
       }
     },
    legend: {
         data : ['高血压','糖尿病','脑卒中','慢阻肺','慢性肾炎'],
         y: 'bottom',
         x:'center',
         textStyle:{
             color:'#333333',
             fontSize:12
         }
    },
    calculable : false,
    tooltip : {
        trigger: 'item',
        formatter: "{a}<br/>{b}岁<br/>患病率{c}%"
    },
    yAxis: [
          {
              type: 'value',
              name:'患病率',
              nameLocation:'middle',
              nameTextStyle:{
                  color:"333",
                  fontSize:16,
                  padding:20
              },
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
                      return value + "%"
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
              data : ['0-9岁','10-19岁','20-29岁','30-39岁','40-49岁','50-59岁','60-69岁','70-79岁','>80岁'],
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
              right: '5%',
              bottom: '20%',
              containLabel: true
      },
      series : [
        {
            name:'高血压',
            type:'line',
            smooth:true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.4)'
                    }
                }
            },
            data:bubbleSort([27.8, 25.3, 21.4, 20.2, 24.4, 26.4, 19.3, 23.2, 30.8, 28.1])
        },
        {
            name:'糖尿病',
            type:'line',
            smooth:true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.4)'
                    }
                }
            },
            data:bubbleSort([11.8, 18.7, 13.0, 8.3, 9.7, 16.7, 14.3, 15.4, 12.3, 17.2])
        },
        {
            name:'脑卒中',
            type:'line',
            smooth:true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.4)'
                    }
                }
            },
            data:bubbleSort([6.5, 14.5, 15.8, 12.4, 8.5, 12.2, 10.9, 18.3, 18.4, 7.9])
        },
        {
            name:'慢阻肺',
            type:'line',
            smooth:true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.4)'
                    }
                }
            },
            data:bubbleSort([8.0, 15.5, 14.9, 13.2, 10.1, 16.3, 11.3, 12.6, 7.4, 9.5])
        },
        {
            name:'慢性肾炎',
            type:'line',
            smooth:true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.4)'
                    }
                }
            },
            data:bubbleSort([7.6, 14.4, 10.7, 8.7, 13.5, 12.0, 11.6, 16.9, 9.7, 6.1])
        },
    ]
  });

  //慢病占总死亡人数
  var labelFromatter = {
      normal : {
          label : {
             position : 'center',
             color:"#333333",
              formatter : function (params){
                if(params.name == "慢病"){
                  return "慢病占总死亡人数"+'\n'+(params.percent + '%')
                }else{
                  return ""
                }
              },
          },
          labelLine : {
              show : false
          }
      },
  };

  var pieChartDeath = echarts.init(document.getElementById('pieChartDeath'));
  pieChartDeath.setOption({
       color: ['#D8E8F8','#509DD4'],
       tooltip : {
           trigger: 'item',
           formatter: "{b}({c})<br/>{d}%"
       },

       series : [
           {
               type : 'pie',
               center : ['50%', '60%'],
               radius : [55, 80],
               x: '0%', // for funnel
               itemStyle : labelFromatter,
               data : [
                   {name:'其他', value:158},
                   {name:'慢病', value:742},
               ]
           },
       ],
  })


  //各疾病死亡占比
  var histogramChartProportion = echarts.init(document.getElementById('histogramChartProportion'));
   histogramChartProportion.setOption({
     color:["#509DD4"],
     title:{
       text:'各疾病死亡占比',
       left:'left',
       top:20,
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
         formatter: "{b}<br/>慢病占比{c}%"
     },
     grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
     xAxis: {
         show: false
     },
     yAxis: {
         type: 'category',
         data: ['高血压','糖尿病','心脏病','脑卒中'],
         inverse: true,
          axisLine: {
              show: false
          },
          splitLine: {
              show: false
          },
          axisTick: {
              show: false
          },
     },
     series: [
       {
           name:'死亡占比',
           type:'bar',
           data:['25.2', '9.9', '9.7', '8.6'],
           label: {
             normal: {
                 show: true,
                 position: 'insideRight',
                 formatter: '{c}%',
                 color:'#333333'
             }
         },
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
