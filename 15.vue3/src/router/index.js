import { createRouter, createWebHashHistory } from 'vue-router'
import Mixin_test from '../views/Mixin-test.vue'

const routes = [
  {
    path: '/',
    name: 'Mixin-test',
    component: Mixin_test,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
