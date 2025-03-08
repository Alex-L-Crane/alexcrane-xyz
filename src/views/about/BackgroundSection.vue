<script setup>
import garagePhoto from '@/assets/images/garage-photo-3-31-24-v14.png'
import TextBlockRight from '@/components/formatting/TextBlockRight.vue'
import TextBlockLeft from '@/components/formatting/TextBlockLeft.vue'
</script>

<template>
  <div>
    <div class="h-[320px] w-full bg-punk-yellow"></div>
    <div class="bg-white text-black p-4 lg:p-16">

      <img :src="garagePhoto" alt="Garage music" width="full" class="-mt-[280px]"/>

      <div class="flex flex-col lg:flex-row p-8 lg:p-32">
        <text-block-left>
          <h2 class="neogeo text-5xl/[1] mb-3">Systems. <br/>Patterns. <br/>Perception.</h2>
          <p class="text-2xl/[1.4] font-thin">Something</p>
          <div class="my-20">
            <p>Some call to action text</p>
          </div>
        </text-block-left>
        <TextBlockRight>

        </TextBlockRight>
      </div>
    </div>
  </div>

</template>
