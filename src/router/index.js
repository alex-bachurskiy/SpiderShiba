import Vue from 'vue'
import VueRouter from 'vue-router'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueRouter);

Vue.use(VueScrollTo, {
  container: "body",
  duration: 1500,
  easing: "ease-in-out",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})


import home from "../views/home";

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  }
]

const router = new VueRouter({
  routes
})

export default router
