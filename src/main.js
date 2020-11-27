import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
// Vue.prototype.$store = store //Vue实例中已加载store

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//支持Promise
// 请求服务器数据
//配置一些默认选项
axios.defaults.baseURL = 'http://175.24.121.184:8001'
// 超时时间
axios.defaults.timeout = 5000
axios({
  url: '/api/rank',
  method: 'get'

}).then(res => {
  console.log(res)
})