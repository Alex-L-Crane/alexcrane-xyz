import { createRouter, createWebHistory } from 'vue-router';

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
    component: DrummingFeed,
    meta: { title: 'Ritual :: Rhythm — Drumming & Technology' }
  },
  {
    path: '/technology',
    name: 'Technology',
    component: TechnologySection,
    meta: { title: 'Technology — Ritual :: Rhythm' }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutSection,
    meta: { title: 'About — Ritual :: Rhythm', section: 'about' }
  },
  {
    path: '/philosophy',
    name: 'philosophy',
    component: PhilosophyPage,
    meta: { title: 'Philosophy — Ritual :: Rhythm', section: 'about' }
  },
  {
    path: '/inspirations',
    name: 'inspirations',
    component: InspirationsPage,
    meta: { title: 'Inspirations — Ritual :: Rhythm' }
  },
  {
    path: '/feed',
    redirect: '/'
  },
  {
    path: '/music',
    name: 'music',
    component: MusicPage,
    meta: { title: 'Music — Ritual :: Rhythm', section: 'about' }
  },
  {
    path: '/design',
    name: 'tech/design',
    component: DesignPage,
    meta: { title: 'Design — Ritual :: Rhythm', section: 'about' }
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

router.afterEach((to) => {
  document.title = to.meta.title ?? 'Ritual :: Rhythm'
})

export default router;
