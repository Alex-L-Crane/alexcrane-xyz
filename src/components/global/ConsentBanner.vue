<script setup>
import { useRoute } from 'vue-router'
import { useConsent } from '@/composables/useConsent.js'
import { firePageView } from '@/router/index.js'

const route = useRoute()
const { visible, accept, decline } = useConsent()

function handleAccept() {
  accept()
  // The initial pageview was skipped while consent was undecided --
  // fire the current page's now, so accepting visitors aren't invisible
  // in GA until their next navigation.
  firePageView(route)
}
</script>

<template>
  <div v-if="visible"
       role="region"
       aria-label="Privacy choices"
       class="fixed inset-x-0 bottom-0 z-40 bg-stock-coral text-almost-black
              px-4 py-4 lg:px-8 lg:py-6 flex flex-col sm:flex-row sm:items-center
              sm:justify-between gap-4">
    <p class="text-xl lg:text-2xl">
      This site uses Google Analytics to see how people find and use it.
    </p>
    <div class="flex gap-3 shrink-0">
      <button
        type="button"
        @click="decline"
        class="border border-almost-black px-6 py-3 min-h-11 hover:opacity-70 focus-visible:opacity-70 transition-opacity"
      >Decline</button>
      <button
        type="button"
        @click="handleAccept"
        class="border border-almost-black px-6 py-3 min-h-11 hover:opacity-70 focus-visible:opacity-70 transition-opacity"
      >Accept</button>
    </div>
  </div>
</template>
