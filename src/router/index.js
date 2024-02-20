import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import center from '../views/center.vue'
import search from '../views/search.vue'
import message from '../views/search/message.vue'
import department from '../views/search/department.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/center',
    name: 'center',
    component: center
  },
  {
    path:'/search',
    name:'search',
    component: search,
    children: [
      {
        path:'message',
        component: message
      },
      {
        path:'department',
        component: department
      }
  ],
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
