<template>
  <div id="linkCon">
    <el-col :span="24" :offset="3" class="con-main">
    <el-row>
      <link-item 
        :link="'#'"
        :linkname="'设置'"
        class="mitme"
        />  
    </el-row>
      <el-row>
      <link-item 
        :link="'#'"
        :linkname="'文件'"
        class="mtop mitme"
        />  
    </el-row> 
    <el-row>
      <link-item 
        :link="'#'"
        :linkname="'历史告警'"
        class="mtop mitme"
        />  
    </el-row> 
     <el-row>
      <link-item 
        :link="'#'"
        :linkname="'蜜罐'"
        class="mtop mitme"
        />  
    </el-row>       
    </el-col>
  </div>
</template>

<script>
import linkItem from './linkItem/linkItem';
import anime from 'animejs';
export default {
  name: '',
  data () {
      return {
          
      }
  },
  mounted () {
      anime({
      targets: '#linkCon .mitme',
      translateX: 30,
      direction: 'alternate',
      loop: true,
      duration: function(el, i, l) {
        return 500 + (i * 500);
      },
      delay: function(el, i, l) {
        return i * 100;
      }
})
      
  },
  components: {
      linkItem
  }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
    .con-main
        margin-top 50px
    .mtop
        margin-top 35px
</style>
