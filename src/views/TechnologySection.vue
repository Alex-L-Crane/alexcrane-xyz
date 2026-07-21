<script setup>
import FeedPage from '@/views/FeedPage.vue'
import { techVideos } from '@/content/videos.js'

const masthead = {
  variant: 'muted',
  lines: ['The work behind', 'the work'],
}

const filters = ['Solo', 'Logik Rift', 'TCA']
</script>

<template>
  <FeedPage :masthead="masthead" :entries="techVideos" :filters="filters" />
</template>
