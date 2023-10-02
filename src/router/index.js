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
      // beforeEnter: async (to, from, next) => {
      //   try {
      //     const response = await axios.get(`${baseURL}/posts`);
      //     console.log('====================================');
      //     console.log(response.data);
      //     console.log('====================================');
      //     return response.data;
      //   } catch (error) {
      //     console.error('Error fetching posts:', error);
      //     throw error;
      //   }
      //   // Perform your function here before the page loads
      //   // For example, fetch data or execute some other logic
      //   fetchDataBeforePageLoad()
      //     .then(() => {
      //       // Continue with the route navigation
      //       next();
      //     })
      //     .catch((error) => {
      //       console.error('Error:', error);
      //       // You can also redirect or handle errors as needed
      //       next('/error');
      //     });
      // },
    },
    {
      path: '/view-post',
      name: 'viewPost',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PostDetails.vue')
    }
  ]
})

export default router
