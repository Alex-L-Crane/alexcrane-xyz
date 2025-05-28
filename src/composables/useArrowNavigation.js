import { onMounted, onBeforeUnmount } from 'vue'

export function useArrowNavigation({ goLeft, goRight }) {
  function handleKeydown(e) {
    if (e.key === 'ArrowRight') goRight()
    if (e.key === 'ArrowLeft') goLeft()
  }

  onMounted(() => {
    document.addEventListener('keydown', handleKeydown)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleKeydown)
  })
}
