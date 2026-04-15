<script setup>
import { ref } from 'vue'
import { videos } from '@/content/videos'

const activeSlug = ref(null)
const brokenThumbs = ref({})

const embedUrl = (id) =>
  `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`

const maxresThumb = (id) =>
  `https://img.youtube.com/vi/${id}/maxresdefault.jpg`

const hqThumb = (id) =>
  `https://img.youtube.com/vi/${id}/hqdefault.jpg`

const thumbUrl = (id) =>
  brokenThumbs.value[id] ? hqThumb(id) : maxresThumb(id)

const onThumbError = (id) => {
  brokenThumbs.value = { ...brokenThumbs.value, [id]: true }
}

const openVideo = (slug) => {
  activeSlug.value = slug
}

const closeVideo = () => {
  activeSlug.value = null
}
</script>

<template>
  <main class="max-w-4xl mx-auto px-6 py-10">
    <h1 class="text-3xl font-bold mb-10">Posts</h1>

    <section
      v-for="video in videos"
      :key="video.slug"
      class="mb-16"
    >

      <div class="mb-4">
        <div class="relative w-full aspect-video bg-black">
          <template v-if="activeSlug !== video.slug">
            <button
              type="button"
              class="absolute inset-0 w-full h-full text-left"
              @click="openVideo(video.slug)"
              :aria-label="`Play ${video.title}`"
            >
              <img
                :src="thumbUrl(video.youtubeId)"
                :alt="video.title"
                class="absolute inset-0 w-full h-full object-cover"
                @error="onThumbError(video.youtubeId)"
              />

              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-white text-4xl bg-black/50 px-4 py-2">
                  ▶
                </div>
              </div>
            </button>
          </template>

          <template v-else>
            <iframe
              class="absolute inset-0 w-full h-full block"
              :src="embedUrl(video.youtubeId)"
              :title="video.title"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              referrerpolicy="strict-origin-when-cross-origin"
            />
          </template>
        </div>

        <button
          v-if="activeSlug === video.slug"
          class="mt-2 underline"
          @click="closeVideo"
        >
          Close video
        </button>
      </div>

      <h2 class="text-2xl font-semibold mb-1">
        {{ video.title }}
      </h2>

      <p class="text-sm opacity-70 mb-4">
        {{ video.date }}
      </p>

      <p v-if="video.description" class="leading-7">
        {{ video.description }}
      </p>
    </section>
  </main>
</template>
