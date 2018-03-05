<template>
  <div>
  	<div id="loophole" class="loopholebox"></div>
	  <div id="loophole2" class="loopholebox"></div>
	  <div id="loophole3" class="loopholebox"></div>
  </div>
 
</template>

<script>
	import echarts from 'echarts';
  export default {  
    name: '',
    props:{
      num: ''
    },
    data() {  
      return {
         
      }
  
    }, 
    mounted() {
  		this.draw(); 
  		this.draw2(); 
  		this.draw3(); 
   },
  methods:{
  		draw(){
  			let myChart = echarts.init(document.getElementById('loophole'));
// 绘制图表
				myChart.setOption({
				   title: {
				        text: '高危',
				         textStyle:{
                    color:'#fff',
                     fontSize:16
              },
               bottom:'10',
               left:"center"
				    },
				    tooltip: { },								   
				    xAxis: {
				        data: ['', '', '', ''],
				        splitArea : {show :false},
				        axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#329dd1',//左边线的颜色
                        width:'2'//坐标线的宽度
                    }
                }
				    },
				    yAxis: {
				    	data: [0,20,40,60,80],
				    	 axisLine: {
                   lineStyle: {
                       type: 'solid',
                       color:'#329dd1',
                       width:'2'
                   }               
               },
				    	 
				    },
				    series: [{				       
				        type: 'bar',
				        data: [3, 1, 2, 1],
				        color: ['#329dd1'],
				        barWidth: 15
				    }]
				    
				});			
  		},
  		
  		draw2(){
  			let myChart2 = echarts.init(document.getElementById('loophole2'));
// 绘制图表
				myChart2.setOption({
				   title: {
				        text: '中危',
				         textStyle:{
                    color:'#fff',
                     fontSize:16
              },
               bottom:'10',
               left:"center"
				    },
				    tooltip: { },								   
				    xAxis: {
				        data: ['', '', '', ''],
				        splitArea : {show :false},
				        axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#329dd1',//左边线的颜色
                        width:'2'//坐标线的宽度
                    }
                }
				    },
				    yAxis: {
				    	data: [0,20,40,60,80],
				    	 axisLine: {
                   lineStyle: {
                       type: 'solid',
                       color:'#329dd1',
                       width:'2'
                   }               
               },
				    	 
				    },
				    series: [{				       
				        type: 'bar',
				        data: [3, 1, 1, 1],
				        color: ['#329dd1'],
				        barWidth: 15
				    }]
				    
				});			
  		},
  		
  		draw3(){
  			let myChart3 = echarts.init(document.getElementById('loophole3'));
// 绘制图表
				myChart3.setOption({
				    title: {
				        text: '低危',
				         textStyle:{
                    color:'#fff',
                     fontSize:16
              },
               bottom:'10',
               left:"center"
				    },
				    tooltip: { },								   
				    xAxis: {
				        data: ['', '', '', ''],
				        splitArea : {show :false},
				        axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#329dd1',//左边线的颜色
                        width:'2'//坐标线的宽度
                    }
                }
				    },
				    yAxis: {
				    	data: [0,20,40,60,80],
				    	 axisLine: {
                   lineStyle: {
                       type: 'solid',
                       color:'#329dd1',
                       width:'2'
                   }               
               },
				    	 
				    },
				    series: [{				       
				        type: 'bar',
				        data: [3, 1, 3, 1],
				        color: ['#329dd1'],
				        barWidth: 15
				    }]
				    
				});			
  		}
  		
  		
  		
  } 
 }
</script>

<style scoped>
  .loopholebox{
  	width: 210px;
  	height: 230px;
  	float: left;
  	position: absolute;
  	top:0px
  }
 	#loophole{
 		left: 10px;
 	}
 	#loophole2{
 		left: 210px;
 	}
 	#loophole3{
 		left: 420px;
 	}
 	
</style>
