<template>
    <div>
        <div class="login"> 
            <h1 class="color login-title">
                亿览态势
            </h1>
            <div class="login-box">
                <div class="login-box-inp">
                    <input type="text" placeholder="请输入账号">
                </div>
                <div class="login-box-inp">
                    <input type="password" placeholder="请输入账号">
                </div>
                <div class="login-box-btn ">
                    <button class="cur">登录</button>
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
import VueParticles from "vue-particles";
Vue.use(VueParticles);
export default {};
</script>

<style lang="less" scoped>
@import "../../styles/base.less";
@import "../../styles/login.less";
</style>
