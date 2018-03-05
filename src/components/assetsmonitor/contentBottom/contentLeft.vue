<template>
  <div class="left" >
    <el-col :span="4" > 
      <div id="charts1" class="charts">
      </div>
    </el-col>
    <el-col :span="4" :offset="4">
       <div id="charts2" class="charts">
      </div>
    </el-col>
    <el-col :span="4" :offset="4">
       <div id="charts3" class="charts">
      </div>
    </el-col>
    <el-row>
      <el-col :span="24">
        <v-progress id="'p3'" class="p3"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts';
import progress from './progress1';
import { getflowNum } from '../../../../fetch/home.js';
export default {
  name: '',
  data () {
      return {
          data: [50,70,30]
      }
  },
  mounted () {
    this.drawGragh('charts1')
    this.drawGragh('charts2')
    this.drawGragh('charts3')
  },
  methods: {
    drawGragh(id,datas) {
    let dataAxis = ['点', '击', '柱','2'];
    let data = [220, 182, 191,160];
    let option = {
        xAxis: {
            data: dataAxis,
            axisLabel: {
                inside: true,
                textStyle: {
                    color: 'rgba(0, 0, 0, 0)'
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
        grid: {
          // show: false,
          top:0,
          left:0,
          borderWidth: 0,
          show: true
        },
        yAxis: {
            axisLine: {
                show: true
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
 
        series: [

            {
                type: 'bar',
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
                data: data
            }
        ],
         tooltip:{
                show: true
        },
    };
    echarts.init(document.getElementById(id)).setOption(option)

    }
  },
  components: {
     'v-progress' :progress
  }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  .charts
    height 180px
    width 120px
  .p3 
    left: -65px;
    top: 170px;
    position: absolute;
</style>
