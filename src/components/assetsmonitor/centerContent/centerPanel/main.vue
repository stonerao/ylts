<template>
  <div class="content-main ">
   <!-- <center-top/>-->
    <center-center/>
  </div>
</template>

<script>
/*import top from './radiusWithTrangle';*/
import center from './center';
export default {
  name: 'centerPanelMain',
  components: {
    /*'center-top': top,*/
    'center-center': center
  }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
    .content-main
        width 100%;
        height 100%
</style>
