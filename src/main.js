// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import 'babel-polyfill';
import App from './App'
import router from './router'
import store from '@/vuex/index';

import '@/styles/reset.css'
import '@/mock/index'

Vue.config.productionTip = false
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = [function(data) {
    let ret = '';
    for (let it in data) {
        ret += `${encodeURIComponent(it)}=${encodeURIComponent(data[it])}&`
    }
    return ret;
}]
Vue.prototype.$http = axios;

router.beforeEach((to, from, next) => {
        next();
    })
    // 路由结束之后执行
router.afterEach(() => {});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router, //router
    store, //vuex
    template: '<App/>',
    components: { App },
    render: h => h(App)
})