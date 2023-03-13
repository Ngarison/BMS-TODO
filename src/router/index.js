import { createRouter, createWebHistory } from 'vue-router'
import DashBoard from '../views/DashBoard.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: DashBoard
  },
  {
    path: '/MyProjects',
    name: 'MyProjects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MyProject.vue')
  },
  {
    path: '/Team',
    name: 'Team',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MyTeam.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
