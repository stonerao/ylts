<template>
  <div class="bottom-line">
    <template>
        <line-group class="line-group" v-for="i in 15" :key="i"/>
    </template>
  </div>
</template>

<script>
import lineGroup from './lineGroup';
export default {
  name: '',
  data () {
    return {
      hHeight: '15px',
      lHeight: '12px'
    }
  },
  components: {
    lineGroup
  }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
    .bottom-line
      position: absolute;
      top: 82px;
      left: 52px;
    .line-group
      display inline-block
      margin-left 3px
</style>
