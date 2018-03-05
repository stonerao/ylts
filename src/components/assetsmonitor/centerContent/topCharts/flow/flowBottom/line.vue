<template>
  <div class="line" :style="{height: this.height}">
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    height: 0
  },
  data () {
      return {
          
      }
  }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
    .line
        width: 1px
        background-color #006070
        font-size 0

</style>