<script setup>
  /* import { RouterLink, RouterView } from 'vue-router' */
  import Banner from '@/components/philosophy/PhilosophyBanner.vue'
  import Tagline from '@/components/philosophy/PhilosophyTagline.vue'
  import Summary from '@/components/philosophy/PhilosophySummary.vue'
  import Manifesto from '@/components/ManifestoContent.vue'
  import Footer from '@/components/global/GlobalFooter.vue'

</script>

<template>
  <div>
    <!--<div>
      <RouterLink to="/">Projects</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div>
    <div>
      <strong>Current route path:</strong> {{ $route.fullPath }}
      <RouterView />
    </div>-->
    <Banner />
    <Tagline />
    <Summary />
    <Manifesto />

    <Footer />
  </div>
</template>
