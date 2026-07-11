import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from '@/views/LandingPage.vue'

import ProjectsWrapper from '@/views/projects/ProjectsWrapper.vue'
import ProjectsLanding from '@/views/projects/ProjectsLanding.vue';
import ProjectsFeed from '@/views/projects/ProjectsFeed.vue';
import MusicSection from '@/views/projects/MusicSection.vue';
import DesignSection from '@/views/projects/DesignSection.vue';

import AboutWrapper from '@/views/about/AboutWrapper.vue'
import AboutLanding from '@/views/about/AboutLanding.vue';
import PhilosophySection from '@/views/about/PhilosophySection.vue';
import InspirationsSection from '@/views/about/InspirationsSection.vue';
import BackgroundSection from '@/views/about/BackgroundSection.vue';
import EquipmentSection from '@/views/EquipmentSection.vue'

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
    path: '/about',
    name: 'about',
    component: AboutWrapper,
    meta: { breadcrumb: 'About' },
    children: [
      {
        path: '',
        name: 'about-landing',
        component: AboutLanding,
        meta: { breadcrumb: 'About' }
      },
      {
        path: 'philosophy',
        name: 'philosophy',
        component: PhilosophySection,
        meta: { breadcrumb: 'Philosophy' }
      },
      {
        path: 'inspirations',
        name: 'inspirations',
        component: InspirationsSection,
        meta: { breadcrumb: 'Inspirations' }
      },
      {
        path: 'background',
        name: 'background',
        component: BackgroundSection,
        meta: { breadcrumb: 'Background' }
      }
    ]
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsWrapper,
    meta: { breadcrumb: 'Projects' },
    children: [
      {
        path: '',
        name: 'projects-landing',
        component: ProjectsLanding,
        meta: { breadcrumb: 'Projects' }
      },
      {
        path: 'feed',
        name: 'feed',
        component: ProjectsFeed,
        meta: { breadcrumb: 'Feed' }
      },
      {
        path: 'music',
        name: 'music',
        component: MusicSection,
        meta: { breadcrumb: 'Music' }
      },
      {
        path: 'design',
        name: 'tech/design',
        component: DesignSection,
        meta: { breadcrumb: 'Design' }
      }
    ]
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
