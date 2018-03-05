<template>
  <div class="con-main">
    <el-row>
      <el-col :span="9" :offset="2">
        <div class="col-main-content img-con">
             <img src="./img/1.jpg" alt="" width="120px" height="120px" class="img-left">
        </div>
        <div class="col-main-content">
             <div class="systerm-btn">
            <span class="systerm-btn-span">SYSTERM OK</span>
         </div>
        <div class="col-main-content">
          <h1 class="percentage">{{this.ok}}%</h1>
        </div>
         <div class="col-main-content">
          <el-progress :text-inside="true" :show-text="false" 
          :stroke-width="10" :percentage="this.ok" status="success" 
          class="process"></el-progress>
        </div>
        </div>
      </el-col>
       <el-col :span="9" :offset="2">
        <div class="col-main-content img-con">
             <img src="./img/1.jpg" alt="" width="120px" height="120px" class="img-left"
             style="transform: rotate(-180deg);"
             >
        </div>
        <div class="col-main-content">
             <div class="systerm-btn">
            <span class="systerm-btn-span  systerm-btn-span-right" >AlERT</span>
         </div>
        <div class="col-main-content">
          <h1 class="percentage percentage-right">{{this.alert}}%</h1>
        </div>
         <div class="col-main-content">
          <el-progress :text-inside="true" :show-text="false" 
          :stroke-width="10" :percentage="this.alert" status="exception" 
          class="process"></el-progress>
        </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts';
require('echarts-liquidfill')

export default {
  name: '',
  props:{
    ok:'',
    alert: ''
  },
  data () {
    return {
     
    }
  },
  mounted () {
   
  }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  .con-main 
    height: 355px
    width: 450px
    margin 40px auto
    /*background-color: #000
    -webkit-box-shadow: 0 0 140px #fff
    box-shadow: 0 0 140px #fff*/
    /*margin-left: 38px
    margin-top: 38px*/
    /*border-radius: 1em*/
    position relative
    .img-left
      // margin-left: 45px
      margin-top: 15px
      margin-left: 33px
    .systerm-btn
      margin-top: 10px
      font-size: 20px
      margin-left: 40px
      .systerm-btn-span
          padding 10px
          color white
          border 1px solid #53D319
          font-size 14px
    .percentage
      color #53D319
      font-size 60px
      margin-top: 5px
      margin-left: 35px
    .process
      margin-right: 0
      margin-top: 0px

    // .systerm-btn-span-right
    //   border 1px solid red
    .percentage-right
      color: #f56c6c 
    .systerm-btn-span-right
        padding 10px
        color white
        border 1px solid #f56c6c !important 
        font-size 14px
        margin-left: 20px
</style>
