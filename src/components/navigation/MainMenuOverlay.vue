<script setup>
import { ref, watch, nextTick } from 'vue'
import MainMenuLinks from '@/components/navigation/MainMenuLinks.vue'

const props = defineProps({
  visible: Boolean,
  // Shell is generic across consumers (the main menu, the colophon, any
  // future overlay): background/typography/alignment are the page-specific
  // bits, everything else (fade, ESC, tab-trap, click-outside, z-index) is
  // shared unconditionally.
  background: { type: String, default: 'bg-stock-coral' },
  textClass: { type: String, default: 'neogeo text-black' },
  ariaLabel: { type: String, default: 'Menu' },
  contentAlign: { type: String, default: 'center' }, // 'center' | 'top'
  showCloseButton: { type: Boolean, default: false },
})

const emit = defineEmits(['close'])

function close() {
  emit('close')
}

const overlayRef = ref(null)

function focusableEls() {
  if (!overlayRef.value) return []
  return Array.from(overlayRef.value.querySelectorAll('a[href], button:not([disabled])'))
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
  () => props.visible,
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
         role="dialog"
         aria-modal="true"
         :aria-label="ariaLabel"
         :class="[textClass, background, 'flex justify-center fixed inset-0 w-screen overflow-y-auto touch-none h-screen z-[1000] p-8']"
         @click.self="close">
      <!-- Close: the main menu's close affordance is the dots button in
           MainMenuBar.vue (external, higher z-index, morphed to an X) -- no
           internal control needed there. Other consumers (no persistent
           external trigger to morph) opt in via show-close-button. -->
      <button
        v-if="showCloseButton"
        type="button"
        @click="close"
        aria-label="Close"
        class="absolute z-10 top-4 right-4 lg:top-8 lg:right-8 text-3xl leading-none min-w-11 min-h-11 flex items-center justify-center -m-2 hover:opacity-70 focus-visible:opacity-70 transition-opacity"
      >✕</button>

      <div class="h-full w-full flex flex-col items-center relative">
        <div :class="['flex flex-col items-center', contentAlign === 'top' ? 'mt-16 lg:mt-24' : 'my-auto']">
          <slot>
            <MainMenuLinks @close="close" />
          </slot>
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
