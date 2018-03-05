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
import '@/utils/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = [function (data) {
  let ret = '';
  for (let it in data) {
    ret += `${encodeURIComponent(it)}=${encodeURIComponent(data[it])}&`
  }
  return ret;
}]
Vue.prototype.$http = axios;

// 白名单设置
import {
  whileList
} from '@/router/while';
import {
  getToken
} from '@/utils/cookie';
router.beforeEach((to, from, next) => {  
  if (!whileList().includes(to.path)) { 
    if (!getToken()) {
      router.push('/login') 
    }
  }
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
  components: {
    App
  },
  render: h => h(App)
})
