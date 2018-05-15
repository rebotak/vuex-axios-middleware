import Vue from 'vue'
import Router from 'vue-router'
import Home from './containers/Home.vue'
import About from './containers/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
