<template>
    <div>
        <IEcharts :option="bar" :resizable="true" @ready="onReady" @resize="onResize" @click="onClick" />
    </div>
</template>

<script>
import { nameMap, mapConfig } from "@/utils/map/config";
import IEcharts from "vue-echarts-v3/src/full.js";
import World from "echarts/map/json/world.json";

IEcharts.registerMap("world", World);
export default {
  components: {
    IEcharts
  },
  data() {
    return {
      style: {},
      bar: {
        tooltip: {
          trigger: "item",
          formatter: "{b}",
          left: "center",
          top: "top"
        },
        // backgroundColor: "#25499f",
        tooltip: {
          trigger: "item",
          formatter: function(params) {
            var value = (params.value + "").split(".");
            value =
              value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") +
              "." +
              value[1];
            return params.seriesName + "<br/>" + params.name + " : " + value;
          }
        },
        series: mapConfig
      }
    };
  },
  methods: {
    onReady(ins) {
      console.dir(ins);
    },
    onResize(width, height) {
      console.log(width, height);
    },
    onClick(event, instance, echarts) {
      console.log(arguments);
    }
  }
};
</script>

<style>

</style>
