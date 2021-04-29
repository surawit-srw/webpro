import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue') // set home as path '/'
  },
  {
    path: '/regis',
    name: 'register',
    component: () => import('../views/register.vue') // set home as path '/'
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('../views/store.vue') // set home as path '/'
  },
  {
    path: '/userprofile',
    name: 'userprofile',
    component: () => import('../views/userprofile.vue') // set home as path '/'
  },
  {
    path: '/booking',
    name: 'booking',
    component: () => import('../views/booking.vue') // set home as path '/'
  },
  {
    path: '/Adminbooking',
    name: 'Adminbooking',
    component: () => import('../views/admin/Adminbooking.vue') // set home as path '/'
  },
  {
    path: '/AdminHome',
    name: 'AdminHome',
    component: () => import('../views/admin/AdminHome.vue') // set home as path '/'
  },
  {
    path: '/Adminstore',
    name: 'Adminstore',
    component: () => import('../views/admin/Adminstore.vue') // set home as path '/'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router