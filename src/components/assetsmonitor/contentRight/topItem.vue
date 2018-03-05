<template>
    <div>
        <my-rt :id="id"/>
        <el-row>
          <el-col :span="24" class="main-con" >
              <el-row>
                <el-col :span="3">
                    <div class="main-left">
                        <div class="main-left-top"></div>
                        <div class="main-left-bottom"></div>
                    </div>
                </el-col>
                <el-col :span="18" class="main-con-center">
                    <el-row>
                      <el-col :span="24">
                          <el-row>
                            <el-col :span="12">
                                 <div class="con-block">
                               <div class="first-line-wrapper">
                              <div class="line-foucus"></div>
                            </div>
                            <div class="main-wrapper">
                                <div class="main-con1">
                                    <img src="./icon/user.png" alt="" width="60px">
                                </div>
                            </div>
                             <div class="second-line-wrapper">
                              <div class="second-line-foucus"></div>
                            </div>
                           </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="item-content">
                                    <div><span>姓名：{{this.firstname}}</span></div>
                                    <div><span>名称：{{this.lastname}}</span></div>
                                    <div><span>历史:{{this.history}}</span></div>
                                </div>
                            </el-col>
                          </el-row>
                      </el-col>
                    </el-row>
                </el-col>
                <el-col :span="3" class="main-right">
                    <div class="main-right-top"></div>
                    <div class="main-right-bottom"></div>
                </el-col>
              </el-row>
          </el-col>
        </el-row>

    </div>   
</template>

<script>
import rt from './radiusWithTrangle';
export default {
  name: '',
  props:{
      id: '',
      firstname:'',
      lastname:'',
      history:''
  },
  data () {
      return {
          
      }
  },
  mounted () {
      
  },
  components: {
    'myRt': rt
  }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
    .main-left
        width 37.5px
        height 200px
    .main-left-top  
        height 162.5px
        background-color rgba(5,139,177,0.29)
    .main-left-bottom
        width: 0;
        height: 0;
        background-color  rgba(5,139,177,0.29)
        border-bottom: 37.5px solid #011d33;
        border-right: 37.5px solid transparent;      
    .main-con
        margin-top -5px
    .main-con-center
      background-color rgba(5,139,177,0.29)
      height 200px
      width: 222px;
    .main-right-top
        width: 0;
        height: 0;
        border-bottom: 37.5px solid rgba(5,139,177,0.29);
        border-right: 37.5px solid transparent;
    .main-right
        height 200px
        width 37.5px
    .main-right-bottom
        height 162.5px
        background-color rgba(5,139,177,0.29)
    .con-block
        height 100px
        border 1px solid #01ffff
        width 100px
        cursor pointer
        box-shadow: 0 0 120px #999
        margin-top: 20px;
        margin-left: -20px;
    .first-line-wrapper
        .line-foucus
            height: 10px;
            width: 10px;
            border-top: 4px;
            border-top-style: solid;
            border-top-color: #01ffff;
            border-left: 4px;
            border-left-style: solid;
            border-left-color: #01ffff;
            margin-left: -2px;
            margin-top: -2px;
     .main-wrapper
        width 100%
        height 90px
        display flex
        justify-content center
        .main-con1
            .title
                display flex
                justify-content center
                span 
                 color #ffffffb0
                 font-size 12px
            .number
                .number-number
                    display flex
                    justify-content center
                    color white
                    font-size 16px
                .number-bottom-text
                    display flex
                    justify-content center
                    color #ffffffb0
                    font-size 9px
            .content-text
                margin-top  7px
                .first-line
                    display flex
                    justify-content center
                    color white
                    span
                        font-size 12px                       
                .second-line
                    display flex
                    justify-content center
                    color white
                    span
                        font-size 12px 
                .third-line
                    display flex
                    justify-content center
                    color white
                    span
                        font-size 12px 
  .second-line-wrapper
        height 10px
        widows 100%
        display flex
        justify-content flex-end
        margin-top: -10px;
  .second-line-foucus
        height: 10px;
        width: 10px;
        border-bottom: 4px;
        border-bottom-style: solid;
        border-bottom-color: #01ffff;
        border-right: 4px;
        border-right-style: solid;
        border-right-color: #01ffff;
        margin-left: -10px;
        margin-top: -4px;
     .item-content
        margin-top 40px
        color white    
</style>
