<template>
<div class="wrapper">
  <el-col :span="16">
  <div class="radius-left">
    <h4 class="line-header-text">服务分类及其异常比例</h4>
  </div>
  </el-col>
  <el-col :span="4">
    <canvas id="polygonCanvas" width="85" height="45"></canvas>
  </el-col>
</div>
</template>

<script>
export default {
  name: 'radiusWithTrangle',
  data () {
    return {
    }
  },
  mounted () {
      var bg = document.getElementById('polygonCanvas');
      var ctx = bg.getContext('2d');
      //三角形
      this.drawLine(ctx, {x: 0, y: 45}, {x: 45, y:45 })
      this.drawLine(ctx, {x: 45, y: 45}, {x: 0, y:0 })
    //底部线
      this.drawLine(ctx, {x: 45, y: 45}, {x:85, y:45 })
      //第一条斜线
      this.drawLine(ctx, {x: 8, y: 0}, {x: 53, y:45 })

      //第二条斜线
      this.drawLine(ctx, {x: 16, y: 0}, {x: 61, y:45 })
      //第三条斜线
      this.drawLine(ctx, {x: 24, y: 0}, {x: 69, y:45 })
      //第四条斜线
      this.drawLine(ctx, {x: 32, y: 0}, {x: 77, y:45 })
     //第五条条斜线
      this.drawLine(ctx, {x: 40, y: 0}, {x: 85, y:45 })
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
    height 45px
    width 100%
    .radius-left
      width 100%
      height 43px
      border 1px solid #01FFFF
      border-top-left-radius 1.5em
      border-right: 0px
      .line-header-text
        -webkit-margin-before: 0;
        -webkit-margin-after: 0;
        -webkit-margin-start: 0px;
        -webkit-margin-end: 0px;
        margin-left: 0.5em;
        font-weight: bold;
        font-size: 1.16em;
        margin-top: 0.5em;
        color white
</style>
