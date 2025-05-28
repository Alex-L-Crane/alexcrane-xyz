<script setup>
import garagePhoto from '@/assets/images/garage-photo-cropped.png'
import TextBlockRight from '@/components/formatting/TextBlockRight.vue'
import TextBlockLeft from '@/components/formatting/TextBlockLeft.vue'
</script>

<template>
  <div class="flex flex-col lg:flex-row lg:pt-78 pt-16 relative z-0">
    <TextBlockLeft>
      <h2 class="neogeo text-5xl/[1] mb-3">All tech and no music<br>makes Alex a dull boy.</h2>
      <!--<p class="text-2xl/[1.4] leading-tight font-thin">Something</p>-->
    </TextBlockLeft>
    <TextBlockRight>
    </TextBlockRight>
  </div>
  <img :src="garagePhoto" alt="Garage music" width="full" class=""/>
</template>
