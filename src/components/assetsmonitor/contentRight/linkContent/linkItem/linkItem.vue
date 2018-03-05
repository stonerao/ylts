<template>
  <div class="item-con">
     <div class="ib line-left">
         <a :href="link" class="linkname" >{{this.linkname}}</a>
     </div>
     <div class="ib line-center"></div>
     <div class="ib line-right"></div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
      link: '',
      linkname:''
  },
  data () {
      return {
          
      }
  },
  mounted () {
      
  },
  components: {
      
  }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
    .item-con
        position relative
    .ib
      display inline-block
      height 2px
    .line-left
      background-color  #01ffff 
      width 120px
      position absolute
    .line-center
        position: absolute;
        background-color: #fff;
        width: 30px;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        left: 116px;
        top: -10px;
    .line-right
        position: absolute;
        width: 95px;
        background-color: #fff;
        top: -20px;
        left: 140px;
    .linkname
        position: absolute;
        top: -30px;
        font-size: 20px;
        text-decoration: none;
        color: white;
        left: 21px;

</style>
