import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import slides from './slides'
import SlideView from '../views/SlideView.vue'
import PageView from '../views/PageView.vue'
import Reactividad from '../components/slides/Reactividad/Reactividad.mdx'




const staticRoutes = [
  {path: "/", component: HomeView}
]



const routes = staticRoutes.concat(slides)


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
  
})



export default router
