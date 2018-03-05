<template>
  <div id="cpu" class="cpu">
      
  </div>
</template>

<script>
import echarts from 'echarts';
import { getCPUUsage } from '../../../../../fetch/home.js';
export default {
  name: '',
  data () {
      return {
          
      }
  },
  beforeCreate () {
      
  } ,
  methods: {
    draw() {

    } ,
    getDataDone(data){
        let seriesData = []
        let yAxisData = []
        data.cpus.forEach((v) => {
            seriesData.push(v.num)
            yAxisData.push(v.name)
        });
        return{
            seriesData:seriesData,
            yAxisData:yAxisData
        }
    } 
  },
  mounted () {
        getCPUUsage('num=4').then((result) => {
            let {data} = result 
            let { seriesData,yAxisData} = this.getDataDone(data)
            let  option = {
                grid: {
                    top:0,
                    width:500,
                    height:200
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01],
                    axisLabel:{
                        show: true
                    },
                },
                tooltip:{
                    show: true
                },
                yAxis: {
                    type: 'category',
                    data: yAxisData,
                    axisLabel:{
                        show: false
                    },
                    splitLine: {
                        show: false
                    }
                    
                },
                series: [
                    {
                        name:'cpu使用率',
                        type: 'bar',
                        data: seriesData,
                        itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#003646'},
                                    {offset: 0.5, color: '#01ffff'},
                                    {offset: 1, color: '#01ffff'}
                                ]
                            )
                        },
                        emphasis: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#003646'},
                                    {offset: 0.7, color: '#01ffff'},
                                    {offset: 1, color: '#01ffff'}
                                ]
                            )
                        }
                    },
                    barWidth: 20
                    }
                ]
        };
         echarts.init(document.getElementById('cpu')).setOption(option)
        })
  },
  components: {
      
  }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
     .cpu
        height 200px
        width 500px
</style>
