<script setup>
import { ref } from 'vue'
import navElement from '@/components/navigation/NavElementImage.vue'

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

/*const temporaryLinks = [
  {
    to: '/projects/music',
    heading: 'Music',
    description: 'Overview and history',
    imageSrc: '/src/assets/images/nav-images/music-nav-1024x576.png'
  },
  {
    to: '/about/background',
    heading: 'Background',
    description: 'Who I am',
    imageSrc: '/src/assets/images/nav-images/background-nav-1024x576.png'
  }
]*/

const projectLinks = [
  {
    to: '/projects/feed',
    heading: 'Feed',
    description: 'Regularly updated',
    imageSrc: '/src/assets/images/nav-images/music-nav-1024x576.png'
  },
  {
    to: '/projects/music',
    heading: 'Music',
    description: 'Overview and history',
    imageSrc: '/src/assets/images/nav-images/music-nav-1024x576.png'
  },
  {
    to: '/projects/design',
    heading: 'Design',
    description: 'Tech and visual',
    imageSrc: '/src/assets/images/nav-images/music-nav-1024x576.png'
  }
]

const aboutLinks = [
  {
    to: '/about/philosophy',
    heading: 'Philosophy',
    description: 'My operation manual',
    imageSrc: '/src/assets/images/nav-images/background-nav-1024x576.png'
  },
  {
    to: '/about/inspirations',
    heading: 'Inspirations',
    description: 'Some motivation',
    imageSrc: '/src/assets/images/nav-images/background-nav-1024x576.png'
  },
  {
    to: '/about/background',
    heading: 'Background',
    description: 'Who I am',
    imageSrc: '/src/assets/images/nav-images/background-nav-1024x576.png'
  }
]
</script>

<template>
  <div class="w-full flex">
    <div class="pr-4">
      <h2>Projects</h2>
      <nav-element
        v-for="link in projectLinks"
        :key="link.to"
        @hover="hoveredLink = link"
        @unhover="hoveredLink = null"
        v-bind="link"
        @close="close"
        :darkTheme="darkTheme"
      />
    </div>

    <div class="pl-4">
      <h2>About</h2>
      <nav-element
        v-for="link in aboutLinks"
        :key="link.to"
        @hover="hoveredLink = link"
        @unhover="hoveredLink = null"
        v-bind="link"
        @close="close"
        :darkTheme="darkTheme"
      />
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
