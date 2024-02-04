import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import slides from './slides'
import SlideView from '../views/SlideView.vue'





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: slides.map((slide) => {
    return {
      path: slide.path,
      name: slide.name,
      component: SlideView,
      props: () => ({content: slide.content})
    }
  })
})



export default router
