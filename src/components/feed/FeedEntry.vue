<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, default: '' },
  videoId: { type: String, required: true },
})

const isPlaying = ref(false)

const thumbUrl = computed(() => `https://img.youtube.com/vi/${props.videoId}/hqdefault.jpg`)

const embedUrl = computed(() =>
  `https://www.youtube-nocookie.com/embed/${props.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`
)

const play = () => { isPlaying.value = true }
const close = () => { isPlaying.value = false }
</script>

<template>
  <section class="mb-16">
    <div class="mb-4">
      <div class="relative w-full aspect-video bg-black">
        <button
          v-if="!isPlaying"
          type="button"
          class="absolute inset-0 w-full h-full text-left"
          @click="play"
          :aria-label="`Play ${title}`"
        >
          <img
            :src="thumbUrl"
            :alt="title"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-white text-4xl bg-black/50 px-4 py-2">
              ▶
            </div>
          </div>
        </button>

        <iframe
          v-else
          class="absolute inset-0 w-full h-full block"
          :src="embedUrl"
          :title="title"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          referrerpolicy="strict-origin-when-cross-origin"
        />
      </div>

      <button
        v-if="isPlaying"
        class="mt-2 underline"
        @click="close"
      >
        Close video
      </button>
    </div>

    <h2 class="text-2xl font-semibold mb-1">
      {{ title }}
    </h2>

    <p class="text-sm opacity-70 mb-4">
      {{ date }}
    </p>

    <p v-if="description" class="leading-7">
      {{ description }}
    </p>
  </section>
</template>
