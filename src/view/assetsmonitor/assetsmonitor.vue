<template>
  <div class="index-main">
		<div class="index-content">
			<leftContent/>
			<centerContent/>
			<right-content/>
			<!--<contentBottom/>-->
		</div>   
  </div>
</template>

<script>
import leftContent from '../../components/assetsmonitor/leftContent';
import centerContent from '../../components/assetsmonitor/centerContent';
import rightContent from '../../components/assetsmonitor/rightContent';
//import contentBottom from './contentBottom/mainLayout';

export default {
  mounted () {
    
  },
  components: {
   //radiusWithTrangle,
    leftContent,
	 	centerContent,
 		rightContent
//  contentBottom
    

  }
}
</script>

<style scoped="scoped">
 	.index-main{
	 		width: 100%;
	    margin: 0 ;
	    padding: 0 ;
 	}
    .index-header{
    	padding-top:20px;
    }
  	.index-header .text {
  		color: #01FFFF;
	    font-size: 3.9em;
	    text-align: center;
	    text-shadow: -10px 4px 16px #999;
	    padding: 20px 0;
	    border-bottom: 1px;
	    border-bottom-color: #01FFFF;
	    border-bottom-style: dashed;
  	} 
  .index-content{	  
	    overflow: hidden;
	    width: 100%;
	    -webkit-box-sizing: border-box;
	    box-sizing: border-box;
	    display: flex;
  }   
  .header-text{
	  	display:flex;
	    justify-content: center;
  }     
  .left-con{
	  	width: 300px;
	    min-width: 300px; 
 	 }
 
</style>
