import { onMounted, onUnmounted } from 'vue'

// Touch devices already use horizontal/vertical drag for native scrolling --
// layering swipe-to-navigate on top of that collides with real scroll
// gestures (a long vertical scroll routinely drifts 50px+ horizontally from
// hand movement alone, with no way to distinguish that from swipe intent).
// Restricting this to fine-pointer/hover-capable devices (desktop) avoids
// the collision entirely; mobile keeps the tap arrows and the full-page menu
// overlay as its navigation affordances instead.
const SWIPE_CAPABLE = '(hover: hover) and (pointer: fine)'

export function useSwipeNavigation({ goLeft, goRight }) {
  let touchStartX = 0
  let touchEndX = 0

  function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX
  }

  function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX
    const delta = touchEndX - touchStartX
    if (Math.abs(delta) < 50) return
    if (delta < 0) goRight()
    else goLeft()
  }

  onMounted(() => {
    if (!window.matchMedia(SWIPE_CAPABLE).matches) return
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('touchstart', handleTouchStart)
    window.removeEventListener('touchend', handleTouchEnd)
  })
}
