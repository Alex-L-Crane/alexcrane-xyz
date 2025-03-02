import { createRouter, createWebHistory } from 'vue-router'
import AboutSection from '../views/AboutSection.vue'
import ProjectsSection from '../views/ProjectsSection.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'projects',
      component: ProjectsSection
    },
    {
      path: '/about',
      name: 'about',
      component: AboutSection
    },
  ],
})

export default router
