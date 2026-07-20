<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, default: '' },
  videoId: { type: String, required: true },
})

const isPlaying = ref(false)
const useFallbackThumb = ref(false)

const thumbUrl = computed(() => useFallbackThumb.value
  ? `https://img.youtube.com/vi/${props.videoId}/hqdefault.jpg`
  : `https://img.youtube.com/vi/${props.videoId}/maxresdefault.jpg`
)

const embedUrl = computed(() =>
  `https://www.youtube-nocookie.com/embed/${props.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`
)

const play = () => { isPlaying.value = true }

// YouTube serves a 120x90 placeholder for maxresdefault when no maxres
// thumbnail exists -- it loads successfully (no @error), so detection has
// to be dimensional, checked once on the real maxres attempt.
const onThumbLoad = (event) => {
  if (!useFallbackThumb.value && event.target.naturalWidth < 1000) {
    useFallbackThumb.value = true
  }
}
</script>

<template>
  <section class="mb-16">
    <div class="mb-2">
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
            loading="lazy"
            class="absolute inset-0 w-full h-full object-cover"
            @load="onThumbLoad"
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
    </div>

    <div class="flex flex-col lg:flex-row lg:justify-between lg:items-baseline gap-1 lg:gap-4 mb-2">
      <h2 class="alaska text-2xl">
        {{ title }}
      </h2>
      <span class="alaska text-sm font-thin text-muted-ink lg:whitespace-nowrap">
        {{ date }}
      </span>
    </div>

    <p v-if="description" class="photo-caption block">
      {{ description }}
    </p>
  </section>
</template>
