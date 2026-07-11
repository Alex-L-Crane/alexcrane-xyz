import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from '@/views/LandingPage.vue'
import EquipmentSection from '@/views/EquipmentSection.vue'

import ProjectsFeed from '@/views/projects/ProjectsFeed.vue';
import MusicSection from '@/views/projects/MusicSection.vue';
import DesignSection from '@/views/projects/DesignSection.vue';

import PhilosophySection from '@/views/about/PhilosophySection.vue';
import InspirationsSection from '@/views/about/InspirationsSection.vue';
import BackgroundSection from '@/views/about/BackgroundSection.vue';

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: LandingPage
  },
  {
    path: '/equipment',
    name: 'Equipment',
    component: EquipmentSection
  },
  {
    path: '/philosophy',
    name: 'philosophy',
    component: PhilosophySection
  },
  {
    path: '/inspirations',
    name: 'inspirations',
    component: InspirationsSection
  },
  {
    path: '/background',
    name: 'background',
    component: BackgroundSection
  },
  {
    path: '/feed',
    name: 'feed',
    component: ProjectsFeed
  },
  {
    path: '/music',
    name: 'music',
    component: MusicSection
  },
  {
    path: '/design',
    name: 'tech/design',
    component: DesignSection
  },
  {
    path: '/:pathMatch(.*)*', // Catch-all for 404
    redirect: '/' // Redirect invalid routes
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router;
