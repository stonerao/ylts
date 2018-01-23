import Vue from 'vue';
import Vuex from 'vuex';
 
Vue.use(Vuex);
const state = {
  footer:"1",
  file:{
  	isFile:false,
  	src:""
  },
  isLoading:true,
};
export default new Vuex.Store({
  state,
});