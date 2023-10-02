import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/BlogListings.vue'
import axios from "axios"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/view-post/:id',
      name: 'viewPost',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PostDetails.vue')
    }
  ]
})

export default router
