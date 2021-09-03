import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../components/Test/Test.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    component: Home,
    children: [{ path: '/test', component: Test }],
  },
]

const router = new VueRouter({
  // mode: 'history', // 默认为hash模式
  base: process.env.BASE_URL,
  routes,
})

export default router
