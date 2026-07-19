<script setup>
import { ref, computed, watch } from 'vue'
import FeedEntry from '@/components/feed/FeedEntry.vue'

const PAGE_SIZE = 10

const props = defineProps({
  masthead: { type: Object, default: null },
  entries: { type: Array, required: true },
  filters: { type: Array, default: () => [] },
})

const allFilters = computed(() => ['all', ...props.filters])
const selectedFacet = ref('all')
const page = ref(1)

const filteredEntries = computed(() => {
  if (selectedFacet.value === 'all') return props.entries
  return props.entries.filter((entry) => (entry.facets ?? []).includes(selectedFacet.value))
})

watch(selectedFacet, () => {
  page.value = 1
})

const totalPages = computed(() => Math.max(1, Math.ceil(filteredEntries.value.length / PAGE_SIZE)))

const pagedEntries = computed(() => {
  const start = (page.value - 1) * PAGE_SIZE
  return filteredEntries.value.slice(start, start + PAGE_SIZE)
})

const goNewer = () => { if (page.value > 1) page.value-- }
const goOlder = () => { if (page.value < totalPages.value) page.value++ }
</script>

<template>
  <main class="bg-white text-black p-8 pt-20">
    <div class="flex pb-4 relative snap-start z-0">
      <div class="w-1/4 pt-24 pr-40">
        <div v-if="masthead">
          <h2 class="neogeo text-5xl/[1] mb-24">
            <template v-for="(line, i) in masthead.lines" :key="i">{{ line }}<br v-if="i < masthead.lines.length - 1" /></template>
          </h2>
        </div>

        <div class="sticky self-start top-40">
          <p class="inline-block pb-2 mb-4 border-b border-b-almost-black">Projects:</p>
          <ul class="text-l/[2] font-thin lg:max-w-lg">
            <li
              v-for="facet in allFilters"
              :key="facet"
              @click="selectedFacet = facet"
              :class="[
                'cursor-pointer capitalize mb-2',
                selectedFacet === facet ? 'font-bold' : ''
              ]"
            >
              {{ facet }}
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-col w-3/4">
        <div class="max-w-4xl">
          <FeedEntry
            v-for="entry in pagedEntries"
            :key="entry.slug"
            :title="entry.title"
            :date="entry.date"
            :description="entry.description"
            :video-id="entry.youtubeId"
          />

          <div v-if="totalPages > 1" class="flex justify-between text-xl mb-16">
            <button
              v-if="page > 1"
              type="button"
              class="link-underline decoration-almost-black/40 hover:decoration-almost-black focus-visible:decoration-almost-black"
              @click="goNewer"
            >
              ← Newer
            </button>
            <span v-else></span>
            <button
              v-if="page < totalPages"
              type="button"
              class="link-underline decoration-almost-black/40 hover:decoration-almost-black focus-visible:decoration-almost-black"
              @click="goOlder"
            >
              Older →
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
