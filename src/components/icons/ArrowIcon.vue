<script setup>
defineProps({
  direction: {
    type: String,
    default: 'right',
    validator: (val) => ['left', 'right'].includes(val),
  },
  customClass: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 72 32.9"
    fill="currentColor"
    :class="[
      'w-6 h-auto transition-transform duration-300',
      direction === 'left' ? 'scale-x-[-1]' : '',
      customClass
    ]"
  >
    <path
      d="M55.5,32.9l16.5-16.5L55.5,0l-2.8,2.8,11.6,11.6H0v4h64.3l-11.6,11.6,2.8,2.8Z"
    />
  </svg>
</template>


