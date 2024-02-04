import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import slides from './slides'
import SlideView from '../views/SlideView.vue'


const staticRoutes = [
  {path: "/", component: HomeView}
]

const slideRoutes = slides.map((slide) => {
  return {
    path: slide.path,
    name: slide.name,
    component: SlideView,
    props: () => ({content: slide.content})
  }
})

const routes = staticRoutes.concat(slideRoutes)


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
  
})



export default router
