<template>
    <div class="wmap">
    <div>
              <router-view></router-view>
        </div>
        <div class="right">
            <p>
                <router-link to="/home/">二维</router-link>
              </p>
            <p >
              <router-link to="/home/world3dmap">三维</router-link>
            </p>
        </div> 
    </div>
</template>

<script>
 export default {
//  name: 'dashboard',
//  data() {
//      return {
//      }
//  },
//  created (){
//    this.$store.commit('isLoginChange',true)
//  },
//  methods: {
//
//  },
//  components: {
//  }
} 
</script>

<style>

.wmap {
    position: relative;
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
    background-color: rgba(50,65,87,.9);
    color: #fff;
    font-size: 16px;
    cursor: pointer;
}
</style>
