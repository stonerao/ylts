<template>
  <div :id="id" class="process" >

  </div>
</template>

<script>
import echarts from 'echarts';
export default {
  name: '',
  props: {
      id: '',
      ok:''
  },
  data () {
      return {
         rectData:[] ,
         one:1
      }
  },
  mounted () {
      console.log(this.ok)
      this.drawProgress(this.ok)
  },
  watch: {
     ok(newv,oldv) {
         if(oldv!==newv){
             this.drawProgress(newv)
         }
         
     }
  },
  methods: {
      drawProgress(num) {
                let charts = echarts.init(document.getElementById(this.id));
                 let scale = 24/100
                let total= Math.floor(scale*num)    
                var pogressData = [
                        [0, 5], [5, 0], [245, 0], [250, 5], [250, 25], [245, 30], [5, 30], [0, 25] 
                    ];
                let rectData =[]
                console.log('ok:'+total)
                for(var i=0; i<total; i++) {
                    // console.log(i);
                    var rect = {};
                    rect["type"] = 'rect';
                    rect["left"] = 5 + 10*i;
                    rect["top"] = 3
                    rect["z"] = 100;
                    rect["shape"] = {width: 6, height:20};
                    rect["style"] = {fill: '#53D319'};
                    // console.log(rect);
                    rectData.push(rect);
                }

                var option = {
                    graphic: [
                        {
                            type: 'polygon',
                            z: 50,
                            shape: {
                                points: pogressData,
                            },
                            style: {
                                fill: '#01081F',
                                stroke: '#53D319',
                                lineWidth: 3,
                            },
                            left: 68,
                            top: 3,
                            // left: 100,
                            // top: 500,
                        },
                        {
                            type: 'group',
                            z: 100,
                            children: rectData,
                            left: 75,
                            top: 10,
                            // left: 108,
                            // top: 506,
                        },

                    ],
                    series: [],
                };

                // this.myChart.setOption(option);
                charts.setOption(option);

            }, 
  }
}
</script>

<style scoped>
    .process{
    	width: 400px; 
      height: 36px;
    }
      
</style>
