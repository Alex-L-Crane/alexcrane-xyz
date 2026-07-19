<script setup>
import FeedPage from '@/views/FeedPage.vue'
import { drumVideos } from '@/content/videos.js'

const masthead = {
  variant: 'creed',
  lines: ['Systems', 'Patterns', 'Perception'],
}

const filters = ['Solo', 'Logik Rift', 'TCA']
</script>

<template>
  <FeedPage :masthead="masthead" :entries="drumVideos" :filters="filters" />
</template>
