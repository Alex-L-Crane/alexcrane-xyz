<script setup>
defineProps({
  to: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'display', // 'display' | 'compact'
    validator: (v) => ['display', 'compact'].includes(v)
  },
  external: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])
function handleClick() {
  emit('close')
}
</script>

<template>
  <a v-if="external"
     :href="to"
     target="_blank"
     rel="noopener noreferrer"
     @click="handleClick"
     :class="[
       'text-black border-b-2 border-transparent hover:border-almost-black focus-visible:border-almost-black transition-colors',
       size === 'display' ? 'text-6xl py-2' : 'text-4xl py-3'
     ]">
    {{ label }}
  </a>
  <RouterLink v-else
              :to="to"
              custom
              v-slot="{ href, navigate, isExactActive }">
    <a :href="href"
       @click="navigate(); handleClick()"
       :class="[
         'text-black border-b-2 hover:border-almost-black focus-visible:border-almost-black transition-colors',
         size === 'display' ? 'text-6xl py-2' : 'text-4xl py-3',
         isExactActive ? 'border-almost-black' : 'border-transparent'
       ]">
      {{ label }}
    </a>
  </RouterLink>
</template>
