<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Footer from '@/components/global/GlobalFooter.vue'
</script>

<template>
  <div>
    <!--<div class="absolute right-0 z-10">
      <ul class="list-none flex flex-row text-2xl">
        <li><RouterLink to="/"><span class="nav">Projects</span></RouterLink></li>
        <li><RouterLink to="/about"><span class="nav">About</span></RouterLink></li>
      </ul>
    </div>-->
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped>
@reference "../app.css";
span.nav {
  @apply block p-4 opacity-50;
}
a.router-link-active > span.nav{
  @apply opacity-100;
}
</style>
