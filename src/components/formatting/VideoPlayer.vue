<template>
  <div class="video-wrapper" @click="loadVideo">
    <template v-if="!isPlayerLoaded">
      <img
        :src="thumbnailUrl"
        alt="Video thumbnail"
        class="video-thumbnail"
      />

      <!-- Centered SVG Play Button -->
      <div class="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <svg
          class="w-20 h-20 text-white opacity-80"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <circle cx="12" cy="12" r="12" fill="black" fill-opacity="0.6" />
          <polygon points="10,8 16,12 10,16" fill="white" />
        </svg>
      </div>
    </template>

    <YouTube
      v-if="isPlayerLoaded"
      ref="youtube"
      :src="`https://www.youtube.com/watch?v=${videoId}`"
      :width="videoWidth"
      :height="videoHeight"
      :vars="{
        autoplay: 1,        // Do not autoplay
        controls: 1,        // Show player controls
        rel: 0,             // Don’t show related videos at the end
        modestbranding: 1,  // Hide YouTube logo
        playsinline: 1,      // iOS plays inline
        showinfo: 0
      }"
      @ready="onReady" />
  </div>
</template>

<script>
import { computed, defineComponent, ref } from 'vue'
import YouTube from 'vue3-youtube'

export default defineComponent({
  name: 'VideoPlayer',
  components: { YouTube },
  props: {
    videoId: {
      type: String,
      required: true
    },
    videoWidth: {
      type: String,
      default: '100%'
    },
    videoHeight: {
      type: String,
      default: '100%'
    }
  },
  setup(props) {
    const isPlayerLoaded = ref(false)
    const youtube = ref(null)

    const thumbnailUrl = computed(() =>
      `https://img.youtube.com/vi/${props.videoId}/maxresdefault.jpg`
    )

    function loadVideo() {
      isPlayerLoaded.value = true
    }

    function onReady() {
      youtube.value?.playVideo()
    }

    return {
      ytVideoId: props.videoId,
      isPlayerLoaded,
      youtube,
      thumbnailUrl,
      loadVideo,
      onReady
    }
  }
})
</script>

<style scoped>
.video-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9; /* Native CSS aspect ratio */
  cursor: pointer;
  overflow: hidden;
}
.video-wrapper :deep(div) {
  width: 100% !important;
  height: 100% !important;
}

.video-thumbnail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  padding: 0.5rem 0.75rem;
  pointer-events: none;
}
</style>
