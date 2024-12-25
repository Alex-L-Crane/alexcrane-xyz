<template>
  <div class="w-full h-full">
    <Philosophy />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
  import Philosophy from "~/pages/Philosophy.vue";

  export default {
    components: {
      Philosophy
    }
  }
</script>
