import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'home',
  meta: {
    layout: 'home'
  },
  component: () => import('../views/Home.vue')
},
{
  path: '/login',
  name: 'login',
  meta: {
    layout: 'empty'
  },
  component: () => import('../views/Login.vue')
},
{
  path: '/registration',
  name: 'login',
  meta: {
    layout: 'empty'
  },
  component: () => import('../views/Registration.vue')

},
{
  path: '/rafflr',
  name: 'rafflr',
  meta: {
    layout: 'home'
  },
  component: () => import('../views/Rafflr.vue')

},
{
  path: '/results',
  name: 'results',
  meta: {
    layout: 'home'
  },
  component: () => import('../views/Results.vue')

},
{
  path: '/payments',
  name: 'payments',
  meta: {
    layout: 'home'
  },
  component: () => import('../views/Payments.vue')

}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
