import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
// 导入路由模块，目的：拿到路由的实例对象
import router from '@/router/index.js'

Vue.config.productionTip = false

// 全局配置 axios 的请求根路径
axios.defaults.baseURL='http://www.liulongbin.top:3006'
// 把 axios 挂载到 Vue.prototype 上，供每个 .vue 组件的实例直接使用
Vue.prototype.axios = axios

// 全局自定义指令
Vue.directive('color', (el, binding) => {
  el.style.color = binding.value
})

new Vue({
  render: h => h(App),
  // 在 vue 项目中，要想把路由用起来，必须要把路由的实例对象，通过下面的方法进行挂载
  // router：路由的实例对象
  router
}).$mount('#app')
