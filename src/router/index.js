import Vue from 'vue'
import VueRouter from 'vue-router'
import Page from '../views/Page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'page',
    component: Page,
    redirect:'/home',
    children:[
      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "order" */ '../views/Home.vue'),
        children:[
          {
            path: ':id',
            name: 'details',
            component: () => import(/* webpackChunkName: "details" */ '../views/details.vue'),
          }
        ]
      },
      {
        path: '/order',
        name: 'Order',
        component: () => import(/* webpackChunkName: "order" */ '../views/Order.vue')
      },
      {
        path: '/discover',
        name: 'Discover',
        component: () => import(/* webpackChunkName: "discover" */ '../views/Discover.vue')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import(/* webpackChunkName: "my" */ '../views/My.vue')
      }
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
