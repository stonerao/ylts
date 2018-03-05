<template>
    <!--<el-col :span="18" :offset="1" id="conMainTop">
         <div class="con-main-top" >
             <div class="left-border"></div>
             <v-flow class="v-flow-class"/>
             <div class="right-border"></div>
             <div class="bottom-border"></div>
             <v-bottom/>
         </div>        
     </el-col>-->
    <div class="content_c">
    	 <div class="con-main-center">
     		<div class="column">资产监控</div>      		
            <v-cetner id="vCenter"/>
         </div>
         <div class="day">
         	<p>
         		<span>二月/February</span>
         		<label>星期二</label>
         	</p>
         	<h2>13</h2>
         </div>
         <div class="evaluate">
         	<p>
         		<span>资产等级</span>         		
         	</p>
         	<h2>良</h2>
         </div>
    </div>
</template>

<script>
//import flow from './topCharts/flow/flow';
//import bottom from './topCharts/flow/flowBottom/bottom';
import center from './centerPanel/main';
//import anime from 'animejs';
export default {
  name: 'centerContent',
  components: {
      //'v-flow': flow,
      /*'v-bottom': bottom,*/
      'v-cetner': center
  },
  mounted () {
      anime({
      targets: '#conMainTop ',
      scale: 1.06,
      direction: 'alternate',
      loop: true,
      duration: function(el, i, l) {
        return 7000 + (i * 7000);
      },
      delay: function(el, i, l) {
        return i * 100;
      }
})
  }
}
</script>

<style scoped>
    /*.con-main-top
        position relative
        overflow hidden
    .left-border
        position: absolute;
        height: 75px;
        left: 55px;
        background-color: #006070;
        width: 2px;
     .right-border
        position: absolute;
        height: 75px;
        background-color: #006070;
        width: 2px;
        top: 0px;
        left: 540px;
    .bottom-border
        position: absolute;
        top: 75px;
        left: 54px;
        width: 489px;
        height 2px
        background-color #006070;*/
    .content_c{
    	width:770px;
    	height: 480px;
    	float: left;
    	margin-left: 10px;
       	margin-top: 14px;
    }   
    .con-main-center{
    	width:770px;
        height: 360px;
       	position: relative;
       	float: left;
       	background:url(../../../../../../../public/img/bg_zc.png) no-repeat;
    }
    .con-main-center .column{
    	position: absolute;
		width: 800px;
		right: -240px;
		top: -30px;
		font-size:26px;
		color:#40c3ff;
		height:56px;
		line-height: 56px;
		text-align:center;
		background: url(../../../../../../../public/img/column.png) no-repeat;
		z-index: 99;
    }
    .content_c .day{
    	width: 380px;
    	height: 100px;
    	background: #012439;
    	box-sizing: border-box;
    	padding: 20px 30px;
    	float: left;
    	margin-top: 15px;
    	margin-right: 10px;
    }
    .content_c .evaluate{
    	width: 380px;
    	height: 100px;
    	background: #2e6e5e;
    	box-sizing: border-box;
    	padding: 20px 30px;
    	float: left;
    	margin-top: 15px;
    }
    .content_c .day p,.content_c .evaluate p{
    	width: 50%;
    	float: left;
    	height: 100%;
    	box-sizing: border-box;
    	border-right: 2px solid rgba(255,255,255,0.4);   	
    }
    .content_c .day p span{
    	color: #fff;
    	font-size: 18px;
    	display: block;
    }
    .content_c .evaluate p span{
    	color: #fff;
    	font-size: 18px;
    	display: block;
    	line-height: 60px;
    	padding-left: 30px;
    }
    .content_c .day p label{
    	color: #258dbf;
    	font-size: 18px;
    	font-weight: 200;
    }
    .content_c .day h2,.content_c .evaluate h2{
    	width: 50%;
    	float: left;
    	text-align: center;
    	font-size: 54px;
    	color: #fff;
    	box-sizing: border-box;
    	padding-left: 20px;
    }
</style>
