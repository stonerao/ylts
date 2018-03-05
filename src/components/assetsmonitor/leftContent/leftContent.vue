<template>
  	<div class="content_l" id="leftCon">
  		<div class="topic">
  			<svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shuju"></use>
            </svg>
  			<span class="typeface">服务分类及其异常比例</span>
  		</div>
  		<ul class="left_list">
  			<li><v-block/></li>
  			<li><v-block/></li>
  			<li><v-block/></li>
  			<li><v-block/></li>
  			<li><v-block/></li>
  			<li><v-block/></li>
  			<li><v-block/></li>
  			<li><v-block/></li>
  		</ul>
  	</div>
   <!-- <el-row class="con">
          <v-block class="first-line block "/>
          <v-block class="first-line block "/>
          <v-block class="block  first-line second-line"/>
          <v-block class="block  first-line second-line"/>
          <v-block class="block  first-line second-line"/>
          <v-block class="block  first-line second-line"/>
          <v-block class="block  first-line second-line"/>
          <v-block class="block  first-line second-line"/>
          <v-block class="block  first-line second-line"/>
          <v-block class="block  first-line second-line"/>
   </el-row>-->
</template>

<script>
import block from './block';
import anime from 'animejs';
export default {
  name: 'leftContent',
  components: {
    'v-block': block
  },
  methods: {
    startAnimation2(){
      console.log('aa');
      
      let animation1 =  anime({
      targets: ' .block2',
      translateX: function(el,i,l){
        if(i%2==0){
          return -30
        }
        return 30
      },
      direction: 'alternate',
      loop: true,
      duration: function(el, i, l) {
        return 500 + (i * 500);
      },
      delay: function(el, i, l) {
        return (i * 300)
      }
})
    }
  },
  mounted () {
  let self = this  
  let animation1 =  anime({
        targets: ' .block',
        translateX: function(el,i,l){
          if(i%2!==0){
            return 140.5
          }
          return 0
        },
        translateY: function(el,i,l){
          return Math.floor(i/2) * 123
        },
        duration: function(el, i, l) {
          return 500 + (i * 500);
        },
        delay: function(el, i, l) {
          return (i * 200)+1200;
        }
  })

  }
}
</script>

<style scoped>
.con{
	width:100%;
  height:624px;
  position:relative;
}
.con .block{
	 position:absolute;
}      
.con .remove-ab{
	 position:relative ;
}
.typeface{
	color: #2cbaff;
	font-size: 20px;
	line-height: 44px;
	margin-left: 10px;
}
.content_l{
    position: relative;
    border: 2px solid #008dce;
    box-sizing: border-box;
    width: 380px;
    height: 480px;
    margin-top: 14px;
    float: left;
}
.content_l:before{
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
.content_l:after{
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
.content_l .topic{
	background: #012940;
	box-sizing: border-box;
	width: 100%;
	padding-left: 20px;
}
.content_l .left_list{
	width:100%;
	padding: 0;
}
.content_l .left_list li{
	overflow: hidden;
	width: 50%;
	height: auto;
	float: left;
	list-style: none;
}
</style>
