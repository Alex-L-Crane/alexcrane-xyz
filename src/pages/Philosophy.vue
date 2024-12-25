<template>
  <div>
    <PhilosophyBanner />
    <PhilosophyTagline />
    <PhilosophySummary />
    <PhilosophyManifesto />
    <Footer />
  </div>
</template>

<script>
import PhilosophyBanner from '~/components/philosophy/PhilosophyBanner.vue';
import PhilosophySummary from "../components/philosophy/PhilosophySummary.vue";
import PhilosophyTagline from "../components/philosophy/PhilosophyTagline.vue";
import PhilosophyManifesto from "../components/philosophy/PhilosophyManifesto.vue";
import Footer from '~/components/Footer.vue';

export default {
  name: 'Philosophy',
  components: {
    PhilosophyBanner,
    PhilosophyTagline,
    PhilosophySummary,
    PhilosophyManifesto,
    Footer
  }
}
</script>