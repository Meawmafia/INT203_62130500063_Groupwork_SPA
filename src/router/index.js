import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// import Bruh from '../views/Bruh.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
  },
  {
    path: '/buddy',
    name: 'Buddy',
    component: () => import(/* webpackChunkName: "about" */ '../views/Buddy.vue')
  },
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
