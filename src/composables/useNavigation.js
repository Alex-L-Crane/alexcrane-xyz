import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { pageSections } from '@/constants/sections.js'

export function useNavigation() {
  const route = useRoute()

  const navSections = computed(() =>
    pageSections.filter(section => !section.skipNav)
  )

  const currentIndex = computed(() =>
    navSections.value.findIndex(section => section.path === route.path)
  )

  // Helper: first sub-page in a section
  function getSectionStart(sectionName) {
    return navSections.value.find(section =>
      section.path.startsWith(`/${sectionName}/`)
    )
  }

  function getSectionEnd(sectionName) {
    const matches = navSections.value.filter(section =>
      section.path.startsWith(`/${sectionName}/`)
    )
    return matches.at(-1) // last sub-page in section
  }

  const prevPage = computed(() => {
    const index = currentIndex.value
    if (index === -1) {
      // On a landing page
      if (route.path === '/projects') return getSectionEnd('projects')?.path
      if (route.path === '/about') return getSectionEnd('about')?.path
      return navSections.value.at(-1).path // fallback: last overall page
    }

    return navSections.value[
    (index - 1 + navSections.value.length) % navSections.value.length
      ].path
  })

  const nextPage = computed(() => {
    const index = currentIndex.value
    if (index === -1) {
      // On a landing page
      if (route.path === '/projects') return getSectionStart('projects')?.path
      if (route.path === '/about') return getSectionStart('about')?.path
      return navSections.value[0].path // fallback: first overall page
    }

    return navSections.value[
    (index + 1) % navSections.value.length
      ].path
  })

  const darkTheme = computed(() => {
    const current = pageSections
      .slice()
      .sort((a, b) => b.path.length - a.path.length)
      .find(section => route.path.startsWith(section.path))
    return current?.dark ?? false
  })

  return {
    navSections,
    currentIndex,
    prevPage,
    nextPage,
    darkTheme,
  }
}
