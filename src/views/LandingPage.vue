<script setup>
import landingBanner from '@/assets/images/landing-banner-1.png'
import scrambleText from '@/components/landing/ScrambleText.vue'
import mainMenu from '@/components/navigation/MainMenuImageGrid.vue'
</script>

<template>
  <div class="bg-white text-black">
    <div class="h-screen flex flex-col px-8 pt-8">
      <div class="flex-grow flex items-center justify-center">
        <scramble-text />
      </div>
      <img :src="landingBanner" alt="Equipment in a garage studio" width="auto" height="auto" class="w-full"/>
    </div>

    <projects-feed/>

    <div class="pt-4 px-8 pb-8 border-b border-white">
      <main-menu :light-theme="true"/>
    </div>
  </div>
</template>

<!-- <script setup>
import BackgroundSection from '@/views/about/BackgroundSection.vue'
</script>

<template> -->
  <!--<div class="bg-[#F2C4B3] text-black p-8 pt-24">-->
  <!-- <div class="bg-[#F2C4B3] text-black">
    <background-section />
  </div>
</template>-->

