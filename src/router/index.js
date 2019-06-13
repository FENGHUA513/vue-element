import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Home from '@/pages/home'
import User from '@/pages/userManagement'
import Execution from '@/pages/executionManagement'
import Info from '@/pages/infoManagement'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/user',
      children: [
        {
          path: '/user',
          name: 'User',
          component: User
        },
        {
          path: '/execution',
          name: 'Execution',
          component: Execution
        },
        {
          path: '/info',
          name: 'Info',
          component: Info
        }
      ]
    }
  ]
})
