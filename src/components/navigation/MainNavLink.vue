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
  description: {
    type: String,
    default: ''
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

const emit = defineEmits(['close'])

function handleClick() {
  emit('close')
}
</script>

<template>
  <li class="group flex items-center justify-between list-none ">
    <RouterLink :to="to"
                @click="handleClick"
                class="nav-link hover:bg-transparent focus:bg-transparent active:bg-transparent">
      <div>
        <div :class="['flex', darkTheme ? 'text-white' : 'text-almost-black']">
          <p class='text-4xl font-bold pr-4'>{{ heading }}</p>
          <ArrowIcon customClass="group-hover:translate-x-1"/>
        </div>
        <p :class="[
            'text-sm',
            darkTheme ? 'text-white' : 'text-black'
            ]"
           v-if="description">{{ description }}</p>
      </div>

    </RouterLink>
  </li>
</template>
