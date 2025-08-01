<script setup>
import ArrowIcon from '@/components/icons/ArrowIcon.vue'

defineProps({
  to: {
    type: [String, Object],
    required: true
  },
  heading: {
    type: String,
    required: true
  },
  imageSrc: {
    type: String,
    default: ''
  },
  darkTheme: {
    type: Boolean,
    default: false,
  }
})

const emit = defineEmits(['close', 'hover', 'unhover'])
function handleClick() {
  emit('close')
}
function handleMouseEnter() {
  emit('hover')
}
function handleMouseLeave() {
  emit('unhover')
}
</script>

<template>
  <div class="w-1/2 group flex items-center justify-between list-none pr-2 last:pr-0 last:pl-2"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave">
    <RouterLink :to="to"
                @click="handleClick"
                class="nav-link hover:bg-transparent focus:bg-transparent active:bg-transparent">
      <div>
        <img :src="imageSrc" alt="Sitting in a field adjusting settings on an amplifier" width="full" class="w-full pb-2"/>
        <div :class="['flex', darkTheme ? 'text-white' : 'text-almost-black']">
          <p class='text-3xl font-light pr-4'>{{ heading }}</p>
          <ArrowIcon customClass="group-hover:translate-x-1"/>
        </div>
      </div>

    </RouterLink>
  </div>
</template>
