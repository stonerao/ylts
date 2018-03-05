<template>
  <div class="flow-main">
     <div id="flowCharts" ></div>
  </div>
</template>

<script>
import echarts from 'echarts';
import {getflowNum} from '../../../../../../fetch/home.js';
// let dataAxis = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
// let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90];
export default {
  name: 'flow',
  data () {
    return {
 
    }
  },

  mounted () {
      getflowNum('num=11').then(({data}) =>{
         let {seriesData,yAxisData} = this.getDataDone(data)
         this.drawCharts(seriesData,yAxisData)
      })
    
  },
  methods: {
    drawCharts (seriesData,yAxisData) {
      let bar  = echarts.init(document.getElementById('flowCharts'))
    let yMax = 100;
    let dataShadow = [];
    let zoomSize = 6;
    for (let i = 0; i < seriesData.length; i++) {
        dataShadow.push(yMax);
    }
      let   option ={
                        title: {
                            show: false
                    },
                    grid: {
                    height: 120,
                    show:true,
                    borderWidth: 0,
                    top: 0,
                    height: 60
                    },
                    tooltip:{
                                show: true
                            },
                    xAxis: {
                        data: yAxisData,
                        axisLabel: {
                            inside: true,
                            textStyle: {
                                color: 'transparent'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        z: 10
                    },
                    yAxis: {
                        show: false,
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#999'
                            }
                        }
                    },
                    dataZoom: [
                        {
                            type: 'inside'
                        }
                    ],
                    series: [
                        { // For shadow
                            type: 'bar',
                            itemStyle: {
                                normal: {color: '#006070'}
                            },
                            barGap:'-100%',
                            barCategoryGap:'40%',
                            data: dataShadow,
                            animation: true
                        },
                        {
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#01FFFF'},
                                            {offset: 0.5, color: '#01FFFF'},
                                            {offset: 1, color: '#01FFFF'}
                                        ]
                                    )
                                },
                                emphasis: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#01FFFF'},
                                            {offset: 0.7, color: '#01FFFF'},
                                            {offset: 1, color: '#01FFFF'}
                                        ]
                                    )
                                }
                            },
                            data: seriesData
                        }
                    ]
      }
       bar.setOption(option);
      bar.on('click', function (params) {
      bar.dispatchAction({
        type: 'dataZoom',
        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
        endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
    });
    
});
    },
     getDataDone(data){
        let seriesData = []
        let yAxisData = []
        data.flows.forEach((v) => {
            seriesData.push(v.num)
            yAxisData.push(v.name)
        });
        return{
            seriesData:seriesData,
            yAxisData:yAxisData
        }
    }  
  },
  }

</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
    .flow-main
        height 145px
        width 600px
        margin-top 1vh
        position relative
        overflow hidden
      #flowCharts
        height 60px
        width 100% 
</style>
