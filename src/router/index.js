import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Button',
    component: () => import(/* webpackChunkName: "about" */ '../views/ButtonsPage.vue')
  },
  {
    path: '/button',
    name: 'Button',
    component: () => import(/* webpackChunkName: "about" */ '../views/ButtonsPage.vue')
  },
  {
    path: '/color',
    name: 'Color',
    component: () => import(/* webpackChunkName: "about" */ '../views/ColorsPage.vue')
  },
  {
    path: '/dialog',
    name: 'Dialog',
    component: () => import(/* webpackChunkName: "about" */ '../views/DialogPage.vue')
  },
  {
    path: '/card',
    name: 'Card',
    component: () => import(/* webpackChunkName: "about" */ '../views/CardPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
