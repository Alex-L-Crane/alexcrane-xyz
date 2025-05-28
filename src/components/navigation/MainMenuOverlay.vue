<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import MainMenuHoverImages from '@/components/navigation/MainMenuHoverImages.vue'

const { visible } = defineProps({
  visible: Boolean
})

const emit = defineEmits(['close'])

function close() {
  emit('close')
}

function handleKeydown(e) {
  if (e.key === 'Escape') close()
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})
onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div v-if="visible"
       class="neogeo text-black flex justify-center fixed inset-0 w-screen overflow-hidden touch-none h-screen bg-[#FA8072] z-[1000] p-8"
       @click.self="close">

    <button @click="close"
            class="absolute top-4 lg:top-6 right-5 lg:right-10 bg-none border-none text-[1.2rem] cursor-pointer">✕</button>

    <MainMenuHoverImages @close="close"/>
  </div>
</template>
