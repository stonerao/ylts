<template>
    <div class="wmap">
        <div class="echarts" :style="style">

            <IEcharts :option="map" theme="macarons" :resizable="true"/>
        </div>

        <div class="right">
            <p>
                <router-link to="/home/">二维</router-link>
            </p>
            <p>
                <router-link to="/home/world3dmap">三维</router-link>
            </p>
        </div>
    </div>
</template>

<script>
import { nameMap, mapConfig } from "@/utils/map/config";

import IEcharts from "vue-echarts-v3/src/full.js";
import World from "echarts/map/json/world.json";
import "echarts/theme/macarons.js";
IEcharts.registerMap("world", World);
export default {
  components: {
    IEcharts
  },
  data() {
    // const that = this
    return {
      ins: null,
      style: {},
      map: {
        tooltip: {
          trigger: "item",
          formatter: "{b}",
          left: "center",
          top: "top"
        },
        backgroundColor: "#25499f",
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
      },
      loading: true
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style>
.echarts {
  width: 100%;
  height: 100%;
}
.wmap {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
.wmap div {
  position: relative;
}
.wmap div.right {
  position: absolute;
  top: 300px;
  right: 0px;
  width: 100px;
  height: 140px;
  z-index: 1000;
  background-color: rgba(218, 207, 207, 0.1);
}
.right p {
  width: 80px;
  height: 35px;
  line-height: 35px;
  margin: 20px 9px;
  text-align: center;
  background-color: rgba(50, 65, 87, 0.9);
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}
</style>
