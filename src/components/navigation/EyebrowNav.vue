<script setup>
defineProps({
  parentLabel: { type: String, required: true },
  parentHref: { type: String, required: true },
  currentLabel: { type: String, required: true },
})
</script>

<template>
  <nav aria-label="Breadcrumb" class="alaska pt-4 flex items-center gap-2 text-base italic text-muted-ink">
    <a :href="parentHref" class="link-underline decoration-muted-ink/40 hover:decoration-muted-ink focus-visible:decoration-muted-ink py-2.5 -my-2.5">{{ parentLabel }}</a>
    <span aria-hidden="true">→</span>
    <span>{{ currentLabel }}</span>
  </nav>
</template>
