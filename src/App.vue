<script setup>
  import { RouterView } from 'vue-router';
  import MainMenuBar from '@/components/navigation/MainMenuBar.vue'
  import Footer from '@/components/global/GlobalFooter.vue';
  import ConsentBanner from '@/components/global/ConsentBanner.vue';

</script>

<template>
  <div>
    <main-menu-bar />
    <RouterView />
    <Footer />
    <ConsentBanner />
  </div>
</template>

