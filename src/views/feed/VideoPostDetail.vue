<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import YouTube from 'vue3-youtube'
import { videos } from '@/content/videos'

const route = useRoute()

const video = computed(() =>
  videos.find((v) => v.slug === route.params.slug)
)

const youtubeSrc = (id) => `https://www.youtube.com/watch?v=${id}`
</script>

<template>
  <main v-if="video" class="max-w-5xl mx-auto px-6 py-10">
    <RouterLink to="/videos" class="underline">
      Back to posts
    </RouterLink>

    <h1 class="text-3xl font-bold mt-4 mb-2">
      {{ video.title }}
    </h1>

    <p class="text-sm opacity-70 mb-6">
      {{ video.date }}
    </p>

    <div class="mb-6">
      <YouTube
        :src="youtubeSrc(video.youtubeId)"
        width="100%"
        height="700"
      />
    </div>

    <p class="whitespace-pre-line leading-7">
      {{ video.body }}
    </p>
  </main>

  <main v-else class="max-w-5xl mx-auto px-6 py-10">
    <h1 class="text-3xl font-bold mb-4">Post not found</h1>
    <RouterLink to="/videos" class="underline">Go back</RouterLink>
  </main>
</template>
