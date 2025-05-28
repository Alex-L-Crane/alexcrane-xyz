<script setup>
import aboutLandingBanner from '@/components/about/AboutLandingBanner.vue'
import MainMenuHoverImages from '@/components/navigation/MainMenuHoverImages.vue'
</script>

<template>
  <div class="bg-[#F24607] pt-20 px-2 lg:px-8">
    <about-landing-banner />
    <div class="mt-6">
      <MainMenuHoverImages :dark-theme="true"/>
    </div>
  </div>
</template>
