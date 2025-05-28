<script setup>
import MainNavLink from '@/components/navigation/MainNavLink.vue'

defineProps({
  darkTheme: {
    type: Boolean,
    default: false,
  }
})

const emit = defineEmits(['close'])
function close() {
  emit('close')
}

const projectLinks = [
  {
    to: '/projects/feed',
    heading: 'Feed',
    description: 'Regularly updated',
    imageSrc: '/src/assets/images/design-nav.png'
  },
  {
    to: '/projects/music',
    heading: 'Music',
    description: 'Overview and history',
    imageSrc: '/src/assets/images/design-nav.png'
  },
  {
    to: '/projects/design',
    heading: 'Design',
    description: 'Tech and visual',
    imageSrc: '/src/assets/images/design-nav.png'
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
  <div class="w-full min-h-screen flex flex-col items-center p-2 lg:px-4 py-12">
    <div class="flex flex-col md:flex-row justify-between w-full max-w-4xl">
      <!-- Projects Group -->
      <div :class="[ 'flex',
           darkTheme ? 'text-white fill-white' : 'text-black fill-almost-black']">
        <div :class="['w-24 border-r  pr-4 mr-4 lg:pr-8 lg:mr-8 text-right',
              darkTheme ? 'border-white' : 'border-almost-black']">
          <h2 class="text-xl">Projects</h2>
        </div>
        <ul class="space-y-6">
          <main-nav-link
            v-for="link in projectLinks"
            :key="link.to"
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
        <ul class="space-y-6">
          <main-nav-link
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
</template>
