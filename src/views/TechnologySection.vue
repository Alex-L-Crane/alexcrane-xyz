<script setup>
import FeedPage from '@/views/FeedPage.vue'
import { techVideos } from '@/content/videos.js'

const masthead = {
  lines: ['Systems.', 'Patterns.', 'Perception.'],
}

const filters = ['Solo', 'Logik Rift', 'TCA']
</script>

<template>
  <FeedPage :masthead="masthead" :entries="techVideos" :filters="filters" />
</template>
