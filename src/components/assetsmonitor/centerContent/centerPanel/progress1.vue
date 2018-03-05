<template>
  <div :id="id" class="process">

  </div>
</template>

<script>
import echarts from 'echarts';
export default {
  name: '',
  props: {
      id: '',
      alert:''
  },
  data () {
      return {
      }
  },
   watch: {
     alert(newv,oldv) {
         console.log(newv,oldv);
         
         if(oldv!==newv){
             this.drawProgress(newv)     
         }
         
     },
   },
  mounted () {
   this.drawProgress(this.alert)
  },
  methods: {
      drawProgress(num) {
                let charts = echarts.init(document.getElementById(this.id));
                let scale = 24/100
                let total= Math.floor(scale*num)
                console.log('alert:'+total);
                
                var pogressData = [
                        [0, 5], [5, 0], [245, 0], [250, 5], [250, 25], [245, 30], [5, 30], [0, 25] 
                    ];
                let rectData=  []
                for(var i=0; i<total; i++) {
                    // console.log(i);
                    var rect = {};
                    rect["type"] = 'rect';
                    rect["left"] = 5 + 10*i;
                    rect["top"] = 3
                    rect["z"] = 70;
                    rect["shape"] = {width: 6, height:20};
                    rect["style"] = {fill: '#F6312E'};
                    rectData.push(rect);
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
                                stroke: '#F6312E',
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
                //                 fill: '#F6312E',
                //                 stroke: '#F6312E',
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
                //                 stroke: '#F6312E',
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
                //                 stroke: '#F6312E',
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
        width: 400px; 
        height: 36px; 
</style>
