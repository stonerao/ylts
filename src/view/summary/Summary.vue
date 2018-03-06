<template>
  <div class="wmap">
    <!-- 指数展示 -->
    <ul class="numlist">
      <li v-for="(item,index) in nulList" :key="index" :data-id="index">
        <p>{{item.name}}</p>
        <p>{{item.num}}</p>
      </li>
    </ul>
    <!-- 指数表 -->
    <div class="RadarVue">
      <RadarVue/>
    </div>
    <!-- 攻擊事件 -->
    <div class="events">
      <div>
        <p>Top-10事件</p>
        <ul>
          <li v-for="(item,index) in attackEvent()" :key="index">
            <span> {{item.time}}</span>
            <span> {{item.name}}</span>
          </li>
        </ul>
      </div>
      <div>
        <p>Top-10攻擊</p>
        <ul>
          <li v-for="(item,index) in attackEvent()" :key="index">
            <span> {{item.time}}</span>
            <span> {{item.name}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="right">
      <p>
        <router-link to="/home/index">二维</router-link>
      </p>
      <p>
        <router-link to="/home/map3d">三维</router-link>
      </p>
    </div>
    <!-- map --> 
      <router-view class="echarts" ></router-view>  
  </div>
</template>

<script>
import RadarVue from "@/components/summaryEchart/radar"; 
export default { 
  components: { 
    RadarVue
  },
  data() {
    return {  
      nulList: [
        { name: "基础维指数", num: 0 },
        { name: "脆弱维指数", num: 0 },
        { name: "威胁维指数", num: 0 },
        { name: "综合维指数", num: 0 }
      ],
      attackEvent() {
        let arr = [];
        for (let i = 0; i < 9; i++) {
          arr.push({ time: "2018-3-6 10:49:10", name: "被攻擊" });
        }
        return arr;
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
  },
  mounted() {},
  destroyed(){
    console.log(window)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.events {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #fff;
  font-size: 12px;
  z-index: 10;
  > div {
    margin-top: 20px;
    width: 200px;
    height: 200px;

    ul {
      border-left: 1px solid #eee;
      border-top: 1px solid #eee;
      padding-top: 5px;
    }
    > p {
      text-align: center;
    }
    li {
      line-height: 20px;
      padding-left: 10px;
      display: flex;
      justify-content: space-between;
    }
  }
}
.numlist {
  overflow: hidden;
  position: absolute;
  left: 15px;
  li {
    float: left;
    text-align: center;
    line-height: 24px;
    height: 60px;
    padding: 0 15px;
    color: #fff;
  }
}
.RadarVue {
  position: absolute;
  color: #fff;
  right: 20px;
  z-index: 5;
}
.echarts {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}
.wmap {
  position: fixed;
  top: 95px;
  right: 0;
  left: 0;
  bottom: 0;
}
.wmap div.right {
  position: absolute;
  top: 300px;
  right: 0px;
  width: 100px;
  height: 140px;
  z-index: 1;
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
