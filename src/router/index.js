import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    alias: ['/home', '/casa', '/homepage', '/inicio']
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import( /* webpackChunkName: "admin" */ '../views/Admin.vue')
  },
  {
    path: '/table',
    name: 'Table',
    component: () => import( /* webpackChunkName: "table" */ '../views/OnlyTable.vue'),
    alias: ['/tabla']
  },
  {
    path: '/example',
    component: () => import( /* webpackChunkName: "examples" */ '../views/Examples.vue'),
    name: 'Example',
    
    alias: ['/ejemplo', '/ejemplos', '/examples']
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import( /* webpackChunkName: "NotFound" */ '../views/NotFound.vue'),
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
