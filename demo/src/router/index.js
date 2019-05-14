import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: ' active',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home')
    },
    {
      path: '/dad',
      name: 'dad',
      component: () => import('@/views/dam')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('@/views/mine')
    },
    {
      path: '/icons',
      name: 'icon',
      component: () => import('@/views/icon')
    },
    {
      path: '/articalDetail/:id',
      name: 'detail',
      component: () => import('@/views/articalDetail')
    },
    {
      path: '/navDetail/:id',
      name: 'navdetail',
      component: () => import('@/views/medicalList')
    },
    {
      path: '/medicineDetail/:id',
      name: 'medicine',
      component: () => import('@/views/medicalBox')
    },
    {
      path: '/checkin',
      name: 'checkin',
      component: () => import('@/views/checkIn')
    }
  ]
})
