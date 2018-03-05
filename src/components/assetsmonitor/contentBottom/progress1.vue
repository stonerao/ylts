<template>
  <div :id="id" class="process">

  </div>
</template>

<script>
import echarts from 'echarts';
import {getflowNum} from '../../../../fetch/home.js';
export default {
  name: '',
  props: {
      id: ''
  },
  data () {
      return {
         rectData:[] 
      }
  },
  mounted () {
      console.log('aaa');
      getflowNum('num=10').then(({data})=>{
          this.drawProgress(data.hardware)
      })
    //   this.drawProgress()
  },
  methods: {
      drawProgress(num) {

                let charts = echarts.init(document.getElementById(this.id));
                    let scale = 34/100
                    let total= Math.floor(scale*num)
                var pogressData = [
                        [0, 5], [5, 0], [345, 0], [350, 5], [350, 25], [345, 30], [5, 30], [0, 25] 
                    ];
                for(var i=0; i<total; i++) {
                    // console.log(i);
                    var rect = {};
                    rect["type"] = 'rect';
                    rect["left"] = 5 + 10*i;
                    rect["top"] = 3
                    rect["z"] = 100;
                    rect["shape"] = {width: 8, height:20};
                    rect["style"] = {fill: '#53D319'};
                    // console.log(rect);
                    this.rectData.push(rect);
                }
                // console.log(this.rectData);

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
                            children: this.rectData,
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

                var p = 0;
                
                // setInterval(function () {
                //     var tempData = [];
                    
                //     p += 1;
                //     if(p == 34) {
                //         p = 0;
                //     }
                //     for(var i=0; i<34; i++) {
                //         if(i <= p) {  
                //             var rect = {};                      
                //             rect["type"] = 'rect';
                //             rect["left"] = 5 + 10*i;
                //             rect["top"] = 5
                //             rect["z"] = 100;
                //             rect["shape"] = {width: 8, height:20};
                //             rect["style"] = {
                //                 fill: '#53D319',
                //                 stroke: '#53D319',
                //             };
                //             // console.log(this.rectData[i]);
                //             tempData.push(rect);
                //         }
                //         else {
                //             // console.log(i);
                //             var rect = {};
                //             rect["type"] = 'rect';
                //             rect["left"] = 5 + 10*i;
                //             rect["top"] = 5
                //             rect["z"] = 100;
                //             rect["shape"] = {width: 8, height:20};
                //             rect["style"] = {
                //                 fill: '#01081F',
                //                 stroke: '#53D319',
                //             };
                //             // console.log(rect);
                //             tempData.push(rect);
                //         }
                //         // this.rectData.push(rect);
                //     }

                //     charts.setOption({
                //         graphic: [
                //         {
                //             type: 'polygon',
                //             z: 50,
                //             shape: {
                //                 points: pogressData,
                //             },
                //             style: {
                //                 fill: '#01081F',
                //                 stroke: '#53D319',
                //                 lineWidth: 3,
                //             },
                //             left: 68,
                //             top: 3,
                //             // left: 100,
                //             // top: 500,
                //         },
                //         {
                //             type: 'group',
                //             z: 100,
                //             children: tempData,
                //             left: 75,
                //             top: 10,
                //             // left: 108,
                //             // top: 506,
                //         },

                //     ],
                //     });
                // }, 1000);
            }, 
  }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
    .process
        width: 500px; 
        height: 35px; 
</style>
