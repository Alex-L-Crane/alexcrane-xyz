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

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: LandingPage
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


/* ---------------------------------------

import { createRouter, createWebHistory } from 'vue-router';
import { useNavStore } from '@/stores/navStore';
import Home from '@/views/Home.vue';

const routes = [
  {
    path: '/:primary',
    component: Home,
    children: [
      { path: ':secondary', component: () => import('@/views/Secondary.vue') }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Global navigation Guard
router.beforeEach((to, from, next) => {
  const navStore = useNavStore();
  const { primary, secondary } = to.params;

  if (primary && !secondary) {
    // Redirect to the last visited sub-route or default ('1')
    const lastVisited = navStore.getLastVisited(primary);
    next(`/${primary}/${lastVisited}`);
  } else {
    if (primary && secondary) {
      navStore.setLastVisited(primary, secondary);
    }
    next();
  }
});

export default router;

*/
