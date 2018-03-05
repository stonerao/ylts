<template>
   <el-col class="con-block item">
    <div>
       <div class="first-line-wrapper">
           <!--<div class="line-foucus"></div>-->
       </div>
       <div class="main-wrapper">
           <div class="main-con">
            <div class="title">
                <span>LOREM IPSUM</span>
            </div>
            <div class="number">
                <div class="number-number">
                    <span>2/15</span>
                </div>
                <div class="number-bottom-text">
                    <span >this  dolor sant antd</span>
                </div>
            </div>
            <div class="content-text">
                <div class="first-line"><span>DOLOR 6.7T</span></div>
                <div class="second-line"><span>LOREM IPSUM</span></div>
                <!-- <div class="third-line"><span>FREE SIZE: 3.1GB</span></div> -->
            </div>
  
         </div>
       </div>
    </div>
    <div class="item-mask ">
        <div class="item-mask-content">
            <div>BROKEN</div>
            <div>SECTION</div>
        </div>  
    </div>
   </el-col>
</template>

<script>
export default {
  name: 'content'
}
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
    .con-block
     height 108px
     border-bottom 1px solid #008dce
     border-left 1px solid #008dce 
     cursor pointer
     box-shadow: 0 0 5px #999  
     .first-line-wrapper
        /*.line-foucus
            height: 10px;
            width: 10px;
            border-top: 4px;
            border-top-style: solid;
            border-top-color: #01ffff;
            border-left: 4px;
            border-left-style: solid;
            border-left-color: #01ffff;
            margin-left: -2px;
            margin-top: -2px;*/
     .main-wrapper
        width 100%
        height 111px
        display flex
        justify-content center
        .main-con
            width 93%
            height 96%
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
                    font-size 14px
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
     .item-mask
        width: 100%;
        height: 125px;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
        opacity: 0.95;
        background: #85263D;
        text-align: center;
        color: #ffffff;
        -webkit-transform-origin: right bottom;
        -ms-transform-origin: right bottom;
        transform-origin: right bottom;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        -webkit-transition: all 0.35s;
        -o-transition: all 0.35s;
        transition: all 0.35s;
    .item
        overflow hidden
    .item:hover .item-mask
        -webkit-transform translate3d(0, -125px, 0)
        transform translate3d(0, -125px, 0)
    .item-mask
        display flex
        justify-content center
        align-items  center
        .item-mask-content
            color white
            font-weight 700
            font-size 20px
        
</style>
