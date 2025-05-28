<script setup>
import { ref } from 'vue'
import MainNavLinkMinimal from '@/components/navigation/MainNavLinkMinimal.vue'

defineProps({
  darkTheme: {
    type: Boolean,
    default: false,
  }
})

const hoveredLink = ref(null)

const emit = defineEmits(['close'])
function close() {
  emit('close')
}

const projectLinks = [
  {
    to: '/projects/feed',
    heading: 'Feed',
    description: 'Regularly updated',
    imageSrc: '/src/assets/images/nav-images/feed-nav-image.png'
  },
  {
    to: '/projects/music',
    heading: 'Music',
    description: 'Overview and history',
    imageSrc: '/src/assets/images/nav-images/music-nav-image.png'
  },
  {
    to: '/projects/design',
    heading: 'Design',
    description: 'Tech and visual',
    imageSrc: '/src/assets/images/nav-images/design-nav-image.png'
  }
]

const aboutLinks = [
  {
    to: '/about/philosophy',
    heading: 'Philosophy',
    description: 'My operation manual',
    imageSrc: '/src/assets/images/design-nav.png'
  },
  {
    to: '/about/inspirations',
    heading: 'Inspirations',
    description: 'Some motivation',
    imageSrc: '/src/assets/images/design-nav.png'
  },
  {
    to: '/about/background',
    heading: 'Background',
    description: 'Who I am',
    imageSrc: '/src/assets/images/design-nav.png'
  }
]
</script>

<template>
  <div class="w-full min-h-screen flex items-start p-2 lg:px-4 py-12">
    <div class="flex flex-col justify-between max-w-4xl pr-16">
      <!-- Projects Group -->
      <div :class="[ 'flex mb-32',
           darkTheme ? 'text-white fill-white' : 'text-black fill-almost-black']">
        <div :class="['w-24 border-r  pr-4 mr-4 lg:pr-8 lg:mr-8 text-right',
              darkTheme ? 'border-white' : 'border-almost-black']">
          <h2 class="text-xl">Projects</h2>
        </div>
        <ul class="w-full">
          <main-nav-link-minimal
            v-for="link in projectLinks"
            :key="link.to"
            @hover="hoveredLink = link"
            @unhover="hoveredLink = null"
            v-bind="link"
            @close="close"
            :darkTheme="darkTheme"
          />
        </ul>
      </div>

      <!-- About Group -->
      <div :class="[ 'flex',
           darkTheme ? 'text-white fill-white' : 'text-black fill-almost-black']">
        <div :class="['w-24 border-r  pr-4 mr-4 lg:pr-8 lg:mr-8 text-right',
              darkTheme ? 'border-white' : 'border-almost-black']">
          <h2 class="text-xl">About</h2>
        </div>
        <ul class="w-full">
          <main-nav-link-minimal
            v-for="link in aboutLinks"
            :key="link.to"
            @hover="hoveredLink = link"
            @unhover="hoveredLink = null"
            v-bind="link"
            @close="close"
            :darkTheme="darkTheme"
          />
        </ul>
      </div>
    </div>

    <!-- Right Side: Image Display -->
    <div class="hidden sm:block max-w-[1000px] self-stretch">
      <div class="relative h-full">
        <div class="sticky top-32 z-10">
          <transition name="fade" mode="out-in">
            <img
              v-if="hoveredLink"
              :src="hoveredLink.imageSrc"
              class="w-full h-auto"
            />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
