import { createRouter, createWebHistory } from 'vue-router'
import AboutLanding from '../views/about/AboutLanding.vue'
import ProjectsLanding from '../views/projects/ProjectsLanding.vue'
import PhilosophySection from '@/views/about/PhilosophySection.vue'
import InspirationsSection from '@/views/about/InspirationsSection.vue'
import BackgroundSection from '@/views/about/BackgroundSection.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*{
      path: '/',
      name: 'projects',
      component: ProjectsLanding
    },*/
    {
      path: '/',
      name: 'about',
      component: AboutLanding,
      children: [
        {
          path: '',
          name: 'philosophy',
          component: PhilosophySection
        },
        {
          path: '/about/inspirations',
          component: InspirationsSection
        },
        {
          path: '/about/background',
          name: 'background',
          component: BackgroundSection
        }
      ]
    },
  ]
})

export default router
