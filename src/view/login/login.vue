<template>
    <div>
        <div class="login">
            <h1 class="color login-title">
                亿览态势
            </h1>
            <div class="login-box">
                <div class="login-box-inp">
                    <input type="text" placeholder="请输入账号" v-model="form.name">
                </div>
                <div class="login-box-inp">
                    <input type="password" placeholder="请输入账号" v-model="form.password">
                </div>
                <div class="login-box-btn ">
                    <button class="cur" @click="submit">登录</button>
                </div>
                <div class="login-more overflow">
                    <router-link to="/reg" class="f-left">注册</router-link>
                    <router-link to="/" class="f-right">忘记密码？</router-link>
                </div>
            </div>
        </div>
        <vue-particles class="login-b" color="#dedede" :particleOpacity="0.7" :particlesNumber="80" shapeType="circle" :particleSize="4" linesColor="#dedede" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push">
        </vue-particles>
    </div>
</template>

<script>
import Vue from "vue";
/* 背景图 */
import VueParticles from "vue-particles";
import { isUserName } from "@/utils/verification/index";
Vue.use(VueParticles);
export default {
  data() {
    return {
      form: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    async submit() {
      /* 验证账号是否正确 */
      if (!isUserName(this.form.name)) {
        this.$notify.error({
          title: "错误",
          message: "账号格式错误"
        });
        return;
      }
      this.$notify({
        title: "成功",
        message: "登录成功",
        type: "success"
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../styles/base.less";
@import "../../styles/login.less";
</style>
