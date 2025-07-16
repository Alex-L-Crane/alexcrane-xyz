<script setup>
import garagePhoto from '@/assets/images/garage-photo-cropped.png'
import TextBlockRight from '@/components/formatting/TextBlockRight.vue'
import TextBlockLeft from '@/components/formatting/TextBlockLeft.vue'
</script>

<template>
  <div class="flex flex-col lg:flex-row lg:pt-78 pt-16 relative z-0">
    <div class="w-full lg:w-1/2 grow">
      <h2 class="neogeo text-5xl/[1] mb-3">All tech and no music<br>makes Alex a dull boy.</h2>
    </div>
    <div class="w-full lg:w-1/2 grow">
      </div>
    </div>
    <img :src="garagePhoto" alt="Garage music" width="auto" class="max-w-6xl"/>
</template>
