import { createRouter, createWebHistory } from 'vue-router';

import MainLanding from '@/views/MainLanding.vue'
import TechnologySection from '@/views/TechnologySection.vue'

import DrummingFeed from '@/views/DrummingFeed.vue';
import MusicPage from '@/views/MusicPage.vue';
import DesignPage from '@/views/DesignPage.vue';

import PhilosophyPage from '@/views/PhilosophyPage.vue';
import InspirationsPage from '@/views/InspirationsPage.vue';
import AboutSection from '@/views/AboutSection.vue';

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: MainLanding
  },
  {
    path: '/technology',
    name: 'Technology',
    component: TechnologySection
  },
  {
    path: '/about',
    name: 'about',
    component: AboutSection
  },
  {
    path: '/philosophy',
    name: 'philosophy',
    component: PhilosophyPage
  },
  {
    path: '/inspirations',
    name: 'inspirations',
    component: InspirationsPage
  },
  {
    path: '/feed',
    name: 'feed',
    component: DrummingFeed
  },
  {
    path: '/music',
    name: 'music',
    component: MusicPage
  },
  {
    path: '/design',
    name: 'tech/design',
    component: DesignPage
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
