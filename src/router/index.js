import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/login'
import Home from '@/pages/home'
import Deal from '@/pages/deal'
import Work from '@/pages/work'
import Order from '@/pages/order'
import Info from '@/pages/info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/deal',
          name: 'Deal',
          component: Deal
        },
        {
          path: '/work',
          name: 'Work',
          component: Work
        },{
          path: '/order',
          name: 'Order',
          component: Order
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
