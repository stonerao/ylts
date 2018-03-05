<template>
  <div class="v-line-g">
      <v-line
      :height="h"
      class="v-line-l"
      />
      <v-line
      :height="l"
      class="v-line-l"
      />
      <v-line
      :height="l"
      class="v-line-l"
      />
      <v-line
      :height="l"
      class="v-line-l"
      />
      <v-line
      :height="l"
      class="v-line-l"
      />
      <v-line
      :height="h"
      class="v-line-l"
      />
  </div>
</template>

<script>
import line from './line';
export default {
  name: 'lineGroup',
  data () {
      return {
          h: '17px',
          l: '12px'
      }
  },
  components: {
      'v-line': line
  }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
    .v-line-l
        display inline-block
        vertical-align top
        
</style>
