import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/home',
      component: () => import('@/components/Layout'),
      children:[
        {
          path: '/home',
          name: 'admin',
          component: () => import('@/views/Home')
        },
        {
          path: '/member',
          name: 'member',
          component: () => import('@/views/member')
        },
        {
          path: '/memberLevels',
          name: 'memberLevels',
          component: () => import('@/views/MemberLevels')
        },
        {
          path: '/setting',
          name: 'setting',
          component: () => import('@/views/Setting')
        }
      ]
    }
  ]
})
