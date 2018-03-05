<template>
	<div class="content_r">
			<div class="set">
					<div>
						<svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shezhi"></use>
            </svg>
						<span>设置</span>
					</div>
					<div>
						<svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-wenjian"></use>
            </svg>
						<span>文件</span>
					</div>
					<div>
						<svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fuwuqi"></use>
            </svg>
						<span>蜜罐</span>
					</div>
					<div>
						<svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-msnui-alarm-inverse"></use>
            </svg>
						<span>历史报告</span>
					</div>
			</div>
		<div class="user">
				<div class="topic">
					<svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-renyuanguanli"></use>
        	</svg>
					<span class="typeface">攻击者档案</span>
				</div>
				<div class="user_bg"></div>
				<div class="user_intro">
					<span>IP：218.76.52.43</span>
					<span>名称：XSDD</span>
					<span>攻击手法：APT</span>
				</div>
		</div>
		<div class="loophole">
			<div class="topic">
				<svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-erji-loudongguanli"></use>
        </svg>
				<span class="typeface">漏洞情况</span>
			</div>
			<card/>
		</div>
	
	</div>
  <!--<div class="conLeft">-->
  		<!--<con-center/>
  	<my-top/>
  	<m-slider id="mySlider"/>-->
      <!--
      <el-row>
        <el-col :span="24">
          
        </el-col>
      </el-row>
       <el-row>
        <el-col :span="18" :offset="6">
          
        </el-col>
      </el-row>-->
 <!-- </div>-->
</template>

<script>
/*import conCenter from './linkContent/layout';
import myTop from './top';*/

import card from './card/card';
export default {
  name: '',
  data () {
      return {
          
      }
  },
  computed: {
     
  },
  mounted () {
    
  },
  methods: {
     
  },
  components: {
   /* myTop,  
    mSlider,
    conCenter*/
   card
  }
}
</script>

<style scoped>
    /*.conLeft
        width 300px
        height: 244px;*/
    .content_r{
    	width: 620px;
    	height: 480px;
    	float: left;
    	margin-left: 14px;
    	margin-top: 14px;
    }
    .content_r .set{
    	width: 220px;
    	height: auto;
    	overflow: hidden;
    	float: left;
    	display: block;
    	box-sizing: border-box;
    	padding-top: 31px;
    }   
    .content_r .set div{
     	width: 100%;
     	height: 40px;
     	line-height: 40px;
     	background: #014465;
     	border: 2px solid #00a0e9;
    	box-sizing: border-box;
     	margin-bottom: 10px;
     	padding-left: 40px;
     	cursor: pointer;
    }
    .content_r .set div span{
    	color: #fff;
    	font-size: 16px;
    	margin-left: 10px;
    }
    .content_r .user{
    	position: relative;
	    border: 2px solid #008dce;
	    box-sizing: border-box;
	    width: 370px;
	    height: 195px;
	    margin-top: 26px;
	    float: left;
	    margin-left: 30px;
    }
   .content_r .user:before{
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
	.content_r .user:after{
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
		.content_r .user .topic{			
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
		.content_r .user .user_bg{
			width: 128px;
			height: 143px;
			float: left;
			background: url(../../../../../../../public/img/user.png) no-repeat center;
		}
		.content_r .user .user_intro{
			float: left;
			margin-left: 10px;
		}
		.content_r .user .user_intro span{
			font-size: 16px;
			color: #fff;
			display: block;
			line-height: 36px;
		}
		.content_r .loophole{
			width: 100%;
			height: 224px;
			position: relative;
	    border: 2px solid #008dce;
	    box-sizing: border-box;	   
	    margin-top: 20px;
	    float: left;  
		}
		.content_r .loophole:before{
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
	.content_r .loophole:after{
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
		.content_r .loophole .topic{
			background: #012940;
			box-sizing: border-box;
			width: 100%;
			padding-left: 20px;
		}
</style>
