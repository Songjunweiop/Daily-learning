import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import scroll from 'vue-seamless-scroll'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(scroll)
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

axios.defaults.baseURL = 'http://www.cd-rst.top:30303/' // 配置默认接口地址
