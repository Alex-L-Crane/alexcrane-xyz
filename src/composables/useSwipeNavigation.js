import { onMounted, onUnmounted } from 'vue'

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
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('touchstart', handleTouchStart)
    window.removeEventListener('touchend', handleTouchEnd)
  })
}
