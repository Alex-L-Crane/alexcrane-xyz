<script setup>
  import { useRoute, useRouter } from 'vue-router';
  import { ref, watch, nextTick } from 'vue';

  import ArrowIcon from '@/components/icons/ArrowIcon.vue'
  import MainMenuOverlay from '@/components/navigation/MainMenuOverlay.vue'

  import { useNavigation } from '@/composables/useNavigation.js'
  import { useArrowNavigation } from '@/composables/useArrowNavigation.js'
  import { useSwipeNavigation } from '@/composables/useSwipeNavigation.js'

  const showMenu = ref(false)
  const menuButton = ref(null)
  const router = useRouter()
  const route = useRoute()

  let savedScrollY = 0

  // Locks background scroll with position:fixed (not just overflow:hidden) so
  // the scroll position is restored exactly on close, with no scrollbar-width
  // layout shift while the overlay is open.
  watch(showMenu, (isOpen) => {
    if (isOpen) {
      savedScrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${savedScrollY}px`
      document.body.style.width = '100%'
    } else {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      // Restoring position:fixed's un-lock needs a reflow before scrollTo takes
      // effect -- calling it synchronously in the same tick can clamp to the
      // pre-reflow document height and land short of the saved position.
      requestAnimationFrame(() => window.scrollTo(0, savedScrollY))
      nextTick(() => menuButton.value?.focus())
    }
  })

  const {
    prevPage,
    nextPage,
    darkTheme
  } = useNavigation()

  function goTo(path) {
    if (path) router.push(path)
  }

  useArrowNavigation({
    goLeft: () => goTo(prevPage.value),
    goRight: () => goTo(nextPage.value)
  })

  useSwipeNavigation({
    goLeft: () => goTo(prevPage.value),
    goRight: () => goTo(nextPage.value)
  })

  const links = [
    { to: '/', label: 'Drumming' },
    { to: '/technology', label: 'Technology' },
    { to: '/about', label: 'About', section: 'about' }
  ]
</script>

<template>
  <MainMenuOverlay :visible="showMenu" @close="showMenu = false" />
  <div :class="['w-full absolute top-0 left-0 flex justify-between p-2 lg:px-8 lg:py-4',
            darkTheme ? 'text-white' : 'text-almost-black ']">
    <div :class="[
            'flex items-center justify-start navtext',
            darkTheme ? 'fill-white' : 'fill-almost-black']">
      <!-- Face logo -->
      <a href="/"
         :class="[
            'hover:bg-transparent focus:bg-transparent active:bg-transparent',
            darkTheme ? 'text-white' : 'text-almost-black']">
        <svg width="43" height="42" viewBox="0 0 43 42" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_9837_606)">
            <path d="M0 0V42H43V0H0ZM27.4442 2.63386H40.2999V25.5687H27.4442V2.63386ZM13.7624 2.49204C20.0895 2.49204 25.2277 7.65847 25.2277 14.0203C25.2277 20.3821 20.0895 25.5485 13.7624 25.5485C7.43533 25.5485 2.29709 20.3821 2.29709 14.0203C2.27694 7.65847 7.41518 2.49204 13.7624 2.49204ZM40.3201 39.3054H2.15604V28.466H5.82334V28.4457H37.9021V28.466H40.3201V39.3054Z" fill="currentColor"/>
            <path d="M13.8647 18.3761C16.2827 18.3761 18.2373 16.4108 18.2373 13.9795C18.2373 11.5483 16.2827 9.58301 13.8647 9.58301C11.4467 9.58301 9.49219 11.5685 9.49219 13.9795C9.49219 16.3905 11.4669 18.3761 13.8647 18.3761ZM13.8647 10.7986C15.6178 10.7986 17.0283 12.2169 17.0283 13.9795C17.0283 15.7422 15.6178 17.1604 13.8647 17.1604C12.1117 17.1604 10.7012 15.7422 10.7012 13.9795C10.7012 12.2169 12.1318 10.7986 13.8647 10.7986Z" fill="currentColor"/>
            <path d="M37 11H31V17H37V11Z" fill="currentColor"/>
          </g>
          <defs>
            <clipPath id="clip0_9837_606">
              <rect width="43" height="42" fill="currentColor"/>
            </clipPath>
          </defs>
        </svg>
      </a>
      <!--<BreadCrumbs :darkTheme="darkTheme" class="pl-2 lg:pl-4"/>-->
      <span class="pl-4 font-bold whitespace-nowrap">Ritual :: Rhythm</span>
    </div>

    <div :class="[
      'flex gap-4 items-center',
      darkTheme ? 'text-white' : 'text-almost-black'
    ]">
      <RouterLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        custom
        v-slot="{ href, navigate, isExactActive }"
      >
        <a
          :href="href"
          @click="navigate"
          :class="[
            'hidden md:inline mr-4 hover:bg-transparent focus:bg-transparent active:bg-transparent border-b-2 transition-colors',
            darkTheme ? 'hover:border-white focus-visible:border-white' : 'hover:border-almost-black focus-visible:border-almost-black',
            (link.section ? route.meta.section === link.section : isExactActive)
              ? (darkTheme ? 'font-bold border-white' : 'font-bold border-almost-black')
              : 'border-transparent'
          ]"
        >
          {{ link.label }}
        </a>
      </RouterLink>

      <button @click="goTo(prevPage)" class="hidden lg:block ml-8">
        <arrow-icon direction="left" customClass="hover:-translate-x-1" />
      </button>
      <button ref="menuButton"
              @click="showMenu = !showMenu"
              :aria-expanded="showMenu"
              :aria-label="showMenu ? 'Close menu' : 'Open menu'"
              :class="['group p-2 overflow-visible text-[1.2rem] cursor-pointer bg-transparent border-none',
                       showMenu
                         ? 'fixed z-[1001] right-[48px] top-[29px] lg:right-[112px] lg:top-[37px] translate-x-1/2 -translate-y-1/2 text-almost-black'
                         : 'mx-4']">
        <svg
          v-if="!showMenu"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -4 75 24"
          class="w-8 h-auto overflow-visible"
          fill="currentColor">
          <circle
            cx="9.4"
            cy="9.4"
            r="9.4"
            class="origin-center transition-transform motion-safe:group-hover:animate-bounce-once" />
          <circle
            cx="37.5"
            cy="9.4"
            r="9.4"
            class="origin-center transition-transform motion-safe:group-hover:animate-bounce-once-delay-150" />
          <circle
            cx="65.6"
            cy="9.4"
            r="9.4"
            class="origin-center transition-transform motion-safe:group-hover:animate-bounce-once-delay-300" />
        </svg>
        <span v-else class="text-[1.8rem]">✕</span>
      </button>
      <button @click="goTo(nextPage)" class="hidden lg:block">
        <arrow-icon customClass="hover:translate-x-1" />
      </button>
    </div>
  </div>
</template>
