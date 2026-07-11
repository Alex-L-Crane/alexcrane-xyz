<script setup>
import { ref, computed } from 'vue'
import { drumVideos } from '@/content/videos.js'

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

// Whitelisted facets
const allowedFacets = ['Solo', 'Logik Rift', 'TCA'] // plus "all"

// User-selected facet filter
const selectedFacet = ref('all')

const filteredPosts = computed(() => {
  if (selectedFacet.value === 'all') {
    return drumVideos
  }

  return drumVideos.filter((post) => {
    const facets = post.facets ?? []
    return facets.includes(selectedFacet.value)
  })
})
</script>

<template>
  <main class="bg-white text-black p-8 pt-20">
    <div class="flex pb-4 relative snap-start z-0">
      <div class="w-1/4 pt-24 pr-40">
        <h2 class="neogeo text-5xl/[1] mb-24">
          Ritual ::<br/>Rhythm
        </h2>

        <div class="sticky self-start top-40">
          <p class=" inline-block pb-2 mb-4 border-b border-b-almost-black">Projects:</p>
          <ul class="text-l/[2] font-thin lg:max-w-lg">
            <li
                v-for="facet in ['all', ...allowedFacets]"
                :key="facet"
                @click="selectedFacet = facet"
                :class="[
            'cursor-pointer capitalize mb-2',
            selectedFacet === facet ? 'font-bold' : ''
          ]"
            >
              {{ facet }}
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col w-3/4">
        <div class="max-w-4xl">
          <section
            v-for="video in filteredPosts"
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
        </div>
      </div>
    </div>
  </main>
</template>
