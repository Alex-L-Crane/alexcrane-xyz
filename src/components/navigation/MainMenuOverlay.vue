<script setup>
import { ref, watch, nextTick } from 'vue'
import MainMenuLinks from '@/components/navigation/MainMenuLinks.vue'

const { visible } = defineProps({
  visible: Boolean
})

const emit = defineEmits(['close'])

function close() {
  emit('close')
}

const overlayRef = ref(null)

function focusableEls() {
  if (!overlayRef.value) return []
  return Array.from(overlayRef.value.querySelectorAll('a[href]'))
}

function handleKeydown(e) {
  if (e.key === 'Escape') {
    close()
    return
  }
  if (e.key === 'Tab') {
    const els = focusableEls()
    if (!els.length) return
    const first = els[0]
    const last = els[els.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }
}

watch(
  () => visible,
  (isVisible) => {
    if (isVisible) {
      document.addEventListener('keydown', handleKeydown)
      nextTick(() => focusableEls()[0]?.focus())
    } else {
      document.removeEventListener('keydown', handleKeydown)
    }
  }
)
</script>

<template>
  <Transition name="menu-fade">
    <div v-if="visible"
         ref="overlayRef"
         class="neogeo text-black flex justify-center fixed inset-0 w-screen overflow-hidden touch-none h-screen bg-stock-coral z-[1000] p-8"
         @click.self="close">
      <!-- Close is the dots button in MainMenuBar.vue, morphed to an X -- no separate close control here. -->

      <div class="h-full w-full flex flex-col items-center relative">
        <div class="flex flex-col items-center my-auto">
          <MainMenuLinks @close="close" />
        </div>

        <!-- Bottom slot: reserved for a future small centered block (socials, post-launch).
             Positioned absolutely so it stays out of the centering flex group above --
             adding real content here later won't shift the link column's vertical center. -->
        <!-- <div class="absolute bottom-8 flex justify-center w-full">...</div> -->
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.15s ease;
}
.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
}
@media (prefers-reduced-motion: reduce) {
  .menu-fade-enter-active,
  .menu-fade-leave-active {
    transition: none;
  }
}
</style>
