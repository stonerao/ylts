<template>
     
        <div id="main"></div>
    
</template>

<script>
// 引入 ECharts 主模块
var echarts = require("echarts/lib/echarts");
// 引入柱状图
require("echarts/lib/chart/bar");
// 引入提示框和标题组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");

export default {
  data() {
    return {
      option: {
        tooltip: {},
        legend: {
          data: ["预算分配（Allocated Budget）", "实际开销（Actual Spending）"]
        },
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: "#fff",
              backgroundColor: "#999",
              borderRadius: 2,
              padding: [1, 2]
            }
          },
          indicator: [
            { name: "威胁指数", max: 2500 },
            { name: "基础指数", max: 1000 },
            { name: "脆弱指数", max: 3000 },
            { name: "综合指数", max: 3000 }
          ]
        },
        series: [
          {
            name: "预算 vs 开销（Budget vs spending）",
            type: "radar",
            // areaStyle: {normal: {}},
            data: [
              {
                value: [430, 1000, 2000, 350],
                name: "指数）"
              }
            ]
          }
        ]
      }
    };
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("main"));
    // 绘制图表
    myChart.setOption(this.option);
  }
};
</script>

<style lang="less" scoped>
#main {
  width: 330px;
  height: 230px;
}
</style>
