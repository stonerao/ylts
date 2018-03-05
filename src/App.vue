<template>
<div id="app">
	<Menu/>
	<router-view></router-view>
</div>
</template>
<script>
import Menu from './components/menu/menu.vue';	
import Fonts from './assets/js/iconfont.js'

export default{
    components:{
    	Menu
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
     
}
</script>
<style>
	body{
		height:100%;
		background: #020610;
		min-width: 1346px;		
	}
	#app{
		box-sizing: border-box;
		padding: 0 15px;
		width:100%;
		height:100%;
	}			
	/*------图标基础css-------*/
	.icon {
	   width: 1em; height: 1em;
	   vertical-align: -0.15em;
	   fill: currentColor;
	   overflow: hidden;
	   font-size: 26px;
	   padding-top: 4px;
	}
</style>
