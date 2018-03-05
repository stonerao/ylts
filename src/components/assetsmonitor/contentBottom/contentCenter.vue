<template>
  <div>
    <div class="chartbox">
    	<div class="topic">
    		<svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-erji-loudongguanli"></use>
        </svg>
				<span class="typeface">硬盘占用率</span>
    	</div>
    	<div id="show"></div>
    </div>
    <div class="chartbox">
    	<div class="topic">
    		<svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-erji-loudongguanli"></use>
        </svg>
				<span class="typeface">CUP占用率</span>
    	</div>
    	<div id="show2"></div>
    </div>
    <div class="chartbox">
    	<div class="topic">
    		<svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-erji-loudongguanli"></use>
        </svg>
				<span class="typeface">内存占用率</span>
    	</div> 
    	<div id="show3"></div>
    </div>
    <div class="chartbox" style="width:620px;margin-left: 4px;margin-right: 0;">
    	<div class="topic">
    		<svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-erji-loudongguanli"></use>
        </svg>
				<span class="typeface">流量</span>
    	</div> 
    	<div id="show4"></div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts';

export default {
  name: '',
  data () {
      return {
          
      }
  },
  mounted () {
     this.show();
     this.show2();
     this.show3();
     this.show4();
  		
	},
  methods: {
      show(){
  			let myChart = echarts.init(document.getElementById('show'));
// 绘制图表
				myChart.setOption({				   
				    tooltip: { },								   
				    xAxis: {
				        data: ['', '', '', '',''],
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
				    	data: [0,20,40,60,80,100],
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
				        data: [3, 1, 2, 1,1],
				        color: ['#329dd1'],
				        barWidth: 30
				    }]
				    
				});			
  		},
      show2(){
  			let myChart2 = echarts.init(document.getElementById('show2'));
// 绘制图表
				myChart2.setOption({           
				    tooltip: { },								   
				    xAxis: {
				        data: ['', '', '', '',''],
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
				    	data: [0,20,40,60,80,100],
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
				        data: [3, 1, 2, 1,2],
				        color: ['#329dd1'],
				        barWidth: 30
				    }]
				    
				});			
  		},
      show3(){
  			let myChart3 = echarts.init(document.getElementById('show3'));
// 绘制图表
				myChart3.setOption({				             
				    tooltip: { },								   
				    xAxis: {
				        data: ['', '', '', '',''],
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
				    	data: [0,20,40,60,80,100],
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
				        data: [3, 1, 2, 1,2],
				        color: ['#329dd1'],
				        barWidth: 30
				    }]
				    
				});			
  		},
      show4(){
  			let myChart4 = echarts.init(document.getElementById('show4'));
// 绘制图表
				myChart4.setOption({				  
				    tooltip: { },								   
				    xAxis: {
				        data: ['', '', '', '','','', '', '', ''],
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
				    	data: [0,20,40,60,80,100,120],
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
				        data: [3, 1, 2, 1,3,2,1,4,1],
				        color: ['#329dd1'],
				        barWidth: 30
				    }]
				    
				});			
  		}
  }
}  
</script>

<style scoped>
    .chartbox{
    	position: relative;
	    border: 2px solid #008dce;
	    box-sizing: border-box;
	    width: 380px;
	    height: 268px;
	    float: left;
	    margin-right: 10px;
    }
   .chartbox:before{
			content: "";
		 height:0;
     width:0;
     border-bottom:solid 12px transparent;
     border-left:solid 30px #020f1b;
     position:absolute;
     top:-2px;
     left:-2px;
     overflow:hidden;
     z-index: 99;
		}
	.chartbox:after{
		content: "";
		 height:0;
     width:0;
     border-bottom:solid 12px transparent;
     border-left:solid 30px #008fd1;
     position:absolute;
     top:0px;
     left:0px;
     overflow:hidden;
     z-index: 98;
		}
		.chartbox .topic{			
			background: #012940;
			box-sizing: border-box;
			width: 100%;
			padding-left: 20px;
		}
		.typeface{
		color: #2cbaff;
		font-size: 20px;
		line-height: 44px;
		margin-left: 10px;
		}
		#show,#show2,#show3,#show4{
			width: 100%;
			height: 300px;
			position: absolute;
			top:-6px;
			left: 10px;
		}
</style>
