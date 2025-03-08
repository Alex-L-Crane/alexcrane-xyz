<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <div class="absolute left-1/2 z-10">
      <!--<ul class="list-none flex flex-row -ml-[50%] text-xl">
        <li><RouterLink to="/about/"><span class="nav">Philosophy</span></RouterLink></li>
        <li><RouterLink to="/about/inspirations"><span class="nav">Inspirations</span></RouterLink></li>
        <li><RouterLink to="/about/background"><span class="nav">Background</span></RouterLink></li>
      </ul>-->
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
@reference "../app.css";
span.nav {
  @apply block p-4 opacity-50;
}
a.router-link-exact-active > span.nav{
  @apply opacity-100;
}
</style>
