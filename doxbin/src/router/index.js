import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NewDox from '../views/NewDox.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dox/:id',
    name: 'Dox',
    component: () => import('../views/Dox.vue')
  },
  {
    path: '/dox',
    name: 'NewDox',
    component: NewDox
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
