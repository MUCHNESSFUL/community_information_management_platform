import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import center from '../views/center.vue'
import search from '../views/search.vue'
import message from '../views/search/message.vue'
import department from '../views/search/department.vue'
import departmentDetail from '../views/search/departmentDetail.vue'
import read from '../views/read.vue'
import searchList from '@/views/searchList.vue'
import login from '@/views/login.vue'
import top from '@/views/top.vue'
import signup from '@/views/signup.vue'
import error from  '@/views/404.vue'
import follow from '@/views/follow.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path:'/signup',
    name:'signup',
    component:signup
  },
  {
    path:'/404',
    name:'404',
    component:error
  },
  {
    path:'/home',
    name:'home',
    component:top,
    children:[
      {
        path:'HomeView',
        name:'HomeView',
        component:HomeView
      },
      {
        path: 'about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },
      {
        path: 'center',
        name: 'center',
        component: center
      },
      {
        path:'searchList',
        name:'searchList',
        component: searchList
      },
      {
        path:'follow',
        name:'follow',
        component:follow,
      },
      {
        path:'search',
        name:'search',
        component: search,
        children: [
          {
            path:'message',
            name:'message',
            component: message
          },
          {
            path:'department',
            name:'department',
            component: department
          },
          {
            path:'departmentDetail',
            name:'departmentDetail',
            component:departmentDetail
          }
      ],
      },
      {
        path:'read',
        name:'read',
        component:read
      },
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 全局前置路由守卫
router.beforeEach((to,from,next)=>{
  if(to.name === 'home' || 
    to.name === 'center' || 
    to.name === 'about' || 
    to.name === 'HomeView' || 
    to.name === 'message' || 
    to.name === 'department' || 
    to.name === 'departmentDetail' || 
    to.name === 'search' || 
    to.name === 'searchList' || 
    to.name === 'read'){
    if(localStorage.getItem('userName') == 'admin' && localStorage.getItem('password') == 123456){
    next()
  }else{
    next('/404')
  }
  }else{
    console.log(to)
    next()
  }
  
})

export default router
