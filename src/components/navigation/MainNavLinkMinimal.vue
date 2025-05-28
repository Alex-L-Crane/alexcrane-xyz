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
  <li class="w-full group flex items-center justify-between list-none pb-8 last:pb-0"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave">
    <RouterLink :to="to"
                @click="handleClick"
                class="nav-link hover:bg-transparent focus:bg-transparent active:bg-transparent">
      <div>
        <div :class="['flex', darkTheme ? 'text-white' : 'text-almost-black']">
          <p class='text-4xl font-bold pr-4'>{{ heading }}</p>
          <ArrowIcon customClass="group-hover:translate-x-1"/>
        </div>
      </div>

    </RouterLink>
  </li>
</template>
