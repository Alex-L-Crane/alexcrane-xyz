<script setup>
import MainNavLinkMinimal from '@/components/navigation/MainNavLinkMinimal.vue'

const emit = defineEmits(['close'])
function close() {
  emit('close')
}

const displayLinks = [
  { to: '/', label: 'Drumming' },
  { to: '/technology', label: 'Technology' },
  { to: '/about', label: 'About' },
]

const compactLinks = [
  { to: '/music', label: 'Music' },
  { to: '/design', label: 'Design' },
  { to: '/philosophy', label: 'Philosophy' },
  { to: '/AlexCrane-Resume.pdf', label: 'Resume', external: true },
]
</script>

<template>
  <div class="flex flex-col items-center text-center">
    <main-nav-link-minimal
      v-for="link in displayLinks"
      :key="link.to"
      :to="link.to"
      :label="link.label"
      size="display"
      @close="close"
    />
    <main-nav-link-minimal
      v-for="link in compactLinks"
      :key="link.to"
      :to="link.to"
      :label="link.label"
      size="compact"
      :external="link.external"
      @close="close"
    />
  </div>
</template>
