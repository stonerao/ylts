<template>
  <div class="content_b">
      <conCenter/>
  </div>
</template>

<script>
	import conCenter from './contentCenter';
/*import conLeft  from './contentLeft';

import conRight from './bottomRight/contentRight';
import anime from 'animejs';*/
export default {
  name: 'contentBottom',
  data () {
    return {
      
    }
  },
  components: {
  	 conCenter
   /* conLeft,
   
    conRight*/
  },
  mounted () {
   
	}
}
</script>

<style  scoped>
.content_b{
	width: 100%;
	height: 270px;
	margin-top: 10px;
	overflow: hidden;
	float: left;
}

</style>
