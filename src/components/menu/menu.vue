<template>
	<div class="menu">
		<div class="logo">
			<img src="../../assets/menu/logo.png" /> 
			<span class="topic">网络安全态势分析系统</span>
		</div>
		<div class="menulist">
			<el-menu :default-active="activeIndex" :unique-opened=true :router=true class="el-menu-demo" 
	 	mode="horizontal" @select="handleSelect" v-show="this.$route.name!=='Hello'">	
			    <el-submenu index="/home">
			      <template slot="title">
			      	<svg class="icon" aria-hidden="true">
			            <use xlink:href="#icon-tongji"></use>
			       </svg>态势中心</template>      
			      <el-menu-item index="/home">态势概览</el-menu-item>   
			    </el-submenu>
			    <el-submenu index="/analyse">
			      <template slot="title">
			      	<svg class="icon" aria-hidden="true">
			          <use xlink:href="#icon-fangdajing1"></use>
			        </svg>详情查询
			      </template>
			      <el-menu-item index="/events">安全事件</el-menu-item>
			      <el-menu-item index="/alarms">安全告警</el-menu-item>    
			    </el-submenu>  
			    <el-submenu index="/threatanalyse">
			      <template slot="title">
			      	<svg class="icon" aria-hidden="true">
			            <use xlink:href="#icon-mubiao"></use>
			        </svg>威胁分析</template>
			      <el-menu-item index="/topo">深度威胁检测</el-menu-item>
			      <el-menu-item index="/assetsmonitor">资产监控</el-menu-item>
			      <el-menu-item index="/backtracking">攻击回溯</el-menu-item>
			      <el-menu-item index="/ooda">OODA视图</el-menu-item>
			    </el-submenu>
			    <el-submenu index="/knowlwdgebase">
			      <template slot="title">
			      	<svg class="icon" aria-hidden="true">
			            <use xlink:href="#icon-wenjian1"></use>
			        </svg>知识库</template>
			      <el-menu-item index="/knowledge">安全本体</el-menu-item>
			      <el-menu-item index="/relation">知识图谱</el-menu-item>
		    	</el-submenu>
  			</el-menu>
		</div>
	</div>
</template>

<script>
	export default{
   data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
   },   
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
     
}
</script>

<style>
	.menu{
		background: url(../../assets/menu/border.png)no-repeat;
		display: -webkit-flex;
   		display: flex;
   		background-size:100% 100%;
   		height:78px; 
   		padding-top: 7px;
   		box-sizing: border-box;	
   		margin-top: 10px;
	}
	.logo{
		-webkit-flex: 1;
    	flex: 1;      
	}
	.logo img{
		float:left;
		display: block;
		margin:0 20px 0 40px;
	}
	.logo .topic{
		float:left;
		font-size:32px;
		color:#fff;	
		margin-top: 10px;	
	}
	.menulist{
		-webkit-flex: 1;
    	flex: 1;
    	box-sizing: border-box;
	}
	.el-menu--horizontal{
		border: none;
		background: transparent;
		float: right;
		margin-right: 6%;		
	}
	.menu .el-menu--horizontal>.el-submenu .el-submenu__title{
		color: #eee
	}	
	.el-menu--horizontal li .el-submenu__title:hover{
    	color: #eee !important;
	}
	.el-menu--horizontal .el-submenu .el-submenu__title {
    height: 52px;
    line-height: 60px;
    border: none;
	}
	.el-menu--horizontal .el-submenu .el-submenu__title:hover{
		border: none;
		background: transparent;
	}
</style>