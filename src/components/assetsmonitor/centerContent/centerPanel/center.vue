<template>
   <!-- <el-col :span="24" :offset="1" class="">-->
       <!-- <div class="content-left">
            <div class="content-left-top"></div>
            <div class="content-left-bottom">
            </div>
        </div>-->
        <div class="con-center">
            <my-progress id="'p1'" class="progress p1" :ok="this.ok"></my-progress>           
            <my-progress1 id="'p2'" class="progress p2" :alert="this.alert"></my-progress1>
            <my-center :ok="this.ok" :alert="this.alert"></my-center>
        </div>
       <!-- <div class="content-right">
            <div class="right-top">
            </div>
            <div class="right-bottom"></div>
        </div>-->
  <!--  </el-col>-->
</template>

<script>
import progress from './progress';
import progress1 from './progress1';
import center from './contentPanel';
import {getOkAndAlert} from '../../../../../fetch/home.js';
export default {
  name: '',
  data () {
      return {
          ok: '',
          alert: '',
      }
  },
  created () {
     this.fetchData()
     let self =this

    //  setInterval(function(){
    //      self.fetchData()
    //  },1000*30)
  },
  methods: {
      fetchData() {
          getOkAndAlert('').then(({data})=>{
         this.ok = data.ok
         this.alert = data.alert
     }) 
      }
  },
  components: {
      'my-progress': progress,
      'my-progress1': progress1,
      'my-center': center
  }
 
}
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
    .con-center
        width: 100%;
        height: 100%;
        background-color transparent;
        box-shadow 0 0 10 #999;
        /*margin-top: -4px;*/
        position relative
        display flex
        flex-wrap nowrap
        justify-content space-between
       
    .content-left
        position relative
        display inline-block
        .content-left-top
            width: 70px;
            height: 380px;
            // border-left 1px solid #01ffff;
        .content-left-bottom
            width: 0;
            height: 0;
            border-bottom: 100px solid #011d33;
            border-right: 100px solid transparent;  
    .content-center
          width: 670px;
          height 380px
    .content-right
        width 88px
        .right-top
            width: 0;
            height: 0;
            border-top: 90px solid #011d33;
            border-left: 90px solid transparent; 
        .right-bottom
            width 89px
            height 390px
            border-bottom-right-radius: 3.5em
    .process
        transform: rotate(-90deg);
        position: absolute;
    .p1
        left: -100px;
        top: 180px;
    .p2
        right -100px
        top: 180px

</style>
