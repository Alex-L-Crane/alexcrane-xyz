<script setup>
import projectsLandingBanner from '@/components/projects/ProjectsLandingBanner.vue'
import MainMenuHoverImages from '@/components/navigation/MainMenuHoverImages.vue'
</script>

<template>
  <div class="bg-[#00D2E0] pt-20 px-2 lg:px-8">
    <projects-landing-banner />
    <div class="mt-6">

      <MainMenuHoverImages :dark-theme="true"/>
    </div>
  </div>
</template>
