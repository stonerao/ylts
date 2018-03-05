<template>
<div class="wrapper">
  <el-col :span="13" :offset="1">
  <div class="radius-left">
    <h4 class="line-header-text"><span>网</span><span>络</span><span>安</span><span>全</span><span>态</span><span>势</span><span>感</span><span>知</span></h4>
  </div>
  </el-col>
  <el-col :span="4">
    <canvas id="polygonCanvas1" width="202" height="62"></canvas>
  </el-col>
</div>
</template>

<script>
import anime from 'animejs';
export default {
  name: 'radiusWithTrangle',
  data () {
    return {
    }
  },
  mounted () {
      var bg = document.getElementById('polygonCanvas1');
      
      var ctx = bg.getContext('2d');
      //三角形
      this.drawLine(ctx, {x: 0, y: 62}, {x: 62, y:62 })
      this.drawLine(ctx, {x: 62, y: 62}, {x: 0, y:0 })
    // //底部线
      this.drawLine(ctx, {x: 62, y: 62}, {x:202, y:62 })
    //   //第一条斜线
      this.drawLine(ctx, {x: 20, y: 0}, {x: 82, y:62 })

    //   //第二条斜线
      this.drawLine(ctx, {x: 40, y: 0}, {x: 102, y:62 })
    //   //第三条斜线
      this.drawLine(ctx, {x: 60, y: 0}, {x: 122, y:62 })
    //   //第四条斜线
      this.drawLine(ctx, {x: 80, y: 0}, {x: 142, y:62 })
    //  //第五条条斜线
      this.drawLine(ctx, {x: 100, y: 0}, {x: 162, y:62 })
    // 第六条线
    this.drawLine(ctx, {x: 120, y: 0}, {x: 182, y:62 })
    //第七条
     this.drawLine(ctx, {x: 140, y: 0}, {x: 202, y:62 })

    anime({
      targets: ' .line-header-text span',
      scale: 1.06,
      color: function(el,i,l){
        switch(i){
          case 0: 
            return 'rgba(1,255,255,1.0)'
            break;
          case 1: 
            return 'rgba(1,255,255,0.9)'
            break;
          case 2: 
            return 'rgba(1,255,255,0.8)'
            break;
          case 3: 
            return 'rgba(1,255,255,0.7)'
            break;
          case 4: 
            return 'rgba(1,255,255,0.6)'
            break;
          case 5: 
            return 'rgba(1,255,255,0.5)'
            break;
          case 6: 
            return 'rgba(1,255,255,0.4)'
            break;
          case 7: 
            return ' rgba(1,255,255,0.2)'
            break;
        }
      },
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
  methods: {
    drawLine(ctx, A, B)  {
      ctx.beginPath();
      ctx.moveTo(A.x, A.y);
      ctx.lineTo(B.x,B.y);
      ctx.closePath();//闭合路径
      ctx.lineWidth=1;
      ctx.strokeStyle = '#01FFFF'
      ctx.stroke();
    }
  }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  .wrapper
    height 60px
    width 100%
    .radius-left
      width: 100%;
      height: 60px;
      border: 1px solid #01ffff;
      border-top-left-radius: 1.9em;
      border-right: 0px;
      .line-header-text
        -webkit-margin-before: 0;
        -webkit-margin-after: 0;
        -webkit-margin-start: 0px;
        -webkit-margin-end: 0px;
        margin-left: 0.5em;
        font-weight: bold;
        font-size: 2.5em;
        margin-top: .1em;
        color: #fff;
        text-shadow: 0 0 20px #999;
  .line-header-text 
    span
      margin-right 23px
      display inline-block
</style>
