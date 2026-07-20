import { createRouter, createWebHistory } from 'vue-router';
import { hasAnalyticsConsent } from '@/composables/useConsent.js'

import TechnologySection from '@/views/TechnologySection.vue'

import DrummingFeed from '@/views/DrummingFeed.vue';
import MusicPage from '@/views/MusicPage.vue';
import DesignPage from '@/views/DesignPage.vue';

import PhilosophyPage from '@/views/PhilosophyPage.vue';
import InspirationsPage from '@/views/InspirationsPage.vue';
import AboutSection from '@/views/AboutSection.vue';
import NotFoundPage from '@/views/NotFoundPage.vue';

const SITE_URL = 'https://alexcrane.systems'
const DEFAULT_TITLE = 'Ritual :: Rhythm'
const DEFAULT_DESCRIPTION = 'Drumming and audio engineering. Performance studies, improvisations, and the work behind the work. Alex Crane, Eugene, Oregon.'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: DrummingFeed,
    meta: {
      title: 'Ritual :: Rhythm',
      description: 'Drumming. Improvisations. Sound, rhythm, syncopation, groove, and minimalism. Alex Crane, Eugene, Oregon.'
    }
  },
  {
    path: '/technology',
    name: 'Technology',
    component: TechnologySection,
    meta: {
      title: 'Technology — Ritual :: Rhythm',
      description: 'Recording equipment, drums, microphones, midi, engineering, and signal processing. Alex Crane, Eugene, Oregon.'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutSection,
    meta: {
      title: 'About — Ritual :: Rhythm',
      description: 'Drums, art, and technology. Discovery, process, and survival. Alex Crane, Eugene, Oregon.',
      section: 'about'
    }
  },
  {
    path: '/philosophy',
    name: 'philosophy',
    component: PhilosophyPage,
    meta: {
      title: 'Philosophy — Ritual :: Rhythm',
      description: 'Creative practice, routine, and artistic growth. Drumming as a way of life. Alex Crane, Eugene, Oregon.',
      section: 'about'
    }
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
    meta: {
      title: 'Music — Ritual :: Rhythm',
      description: 'Underground DIY music. Indie bands, live performance, and studio work. Alex Crane, Eugene, Oregon.',
      section: 'about'
    }
  },
  {
    path: '/design',
    name: 'tech/design',
    component: DesignPage,
    meta: {
      title: 'Design — Ritual :: Rhythm',
      description: 'Visual and user experience design. Tech design and development. Alex Crane, Eugene, Oregon.',
      section: 'about'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundPage,
    meta: {
      title: 'Nothing here — Ritual :: Rhythm',
      noindex: true
    }
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

// Creates the tag if index.html doesn't already have it, otherwise updates
// the existing one in place -- works the same whether a tag was seeded
// statically (the site-wide defaults, for JS-less scrapers) or not.
function setMeta(selector, tagName, attrs, contentAttr, contentValue) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement(tagName)
    Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value))
    document.head.appendChild(el)
  }
  el.setAttribute(contentAttr, contentValue)
}

// Manual pageview -- the GA snippet in index.html sends send_page_view:
// false specifically so this is the only source of pageview events.
// window.gtag only exists at all in production (see index.html), so this
// is naturally a no-op in dev with no separate env check needed here.
// Exported so useConsent()'s accept() can fire the current page's pageview
// immediately on consent -- otherwise an EU/UK visitor who accepts is
// invisible in GA until their next navigation, since the initial load's
// pageview was skipped while undecided.
export function firePageView(to) {
  if (!window.gtag) return
  const title = to.meta?.title ?? DEFAULT_TITLE
  window.gtag('event', 'page_view', {
    page_path: to.path,
    page_title: title,
    page_location: `${SITE_URL}${to.path}`
  })
}

router.afterEach((to) => {
  const title = to.meta.title ?? DEFAULT_TITLE
  const description = to.meta.description ?? DEFAULT_DESCRIPTION
  const url = `${SITE_URL}${to.path}`

  document.title = title

  setMeta('meta[name="description"]', 'meta', { name: 'description' }, 'content', description)
  setMeta('link[rel="canonical"]', 'link', { rel: 'canonical' }, 'href', url)
  setMeta('meta[name="robots"]', 'meta', { name: 'robots' }, 'content', to.meta.noindex ? 'noindex, nofollow' : 'index, follow')

  setMeta('meta[property="og:title"]', 'meta', { property: 'og:title' }, 'content', title)
  setMeta('meta[property="og:description"]', 'meta', { property: 'og:description' }, 'content', description)
  setMeta('meta[property="og:url"]', 'meta', { property: 'og:url' }, 'content', url)

  if (hasAnalyticsConsent()) firePageView(to)
})

export default router;
