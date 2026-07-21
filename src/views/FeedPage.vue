<script setup>
import { ref, computed, watch } from 'vue'
import FeedEntry from '@/components/feed/FeedEntry.vue'

const PAGE_SIZE = 6

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
  <main class="atacamamedium bg-stock-paper text-black pt-14 lg:pt-20">
    <div class="flex flex-col lg:flex-row px-2 sm:px-4 md:px-8 pb-4 relative snap-start z-0">
      <div class="lg:w-1/4 pt-8 lg:pt-24 lg:pr-16 text-left lg:text-right mb-8 lg:mb-0">
        <div v-if="masthead">
          <h2 v-if="masthead.variant === 'creed'" class="neogeo text-3xl/[1.1] lg:text-5xl/[1.1] mb-8 lg:mb-24">
            <template v-for="(line, i) in masthead.lines" :key="i">{{ line }}<br v-if="i < masthead.lines.length - 1" /></template>
          </h2>
          <p v-else class="alaska text-black text-xl lg:text-3xl mb-8 lg:mb-24">
            <template v-for="(line, i) in masthead.lines" :key="i">{{ line }}<br v-if="i < masthead.lines.length - 1" /></template>
          </p>
        </div>

        <div class="lg:sticky lg:self-start lg:top-40">
          <ul class="flex flex-wrap gap-x-6 gap-y-1 lg:block alaska text-l/[2] font-thin lg:max-w-lg lg:ml-auto">
            <li v-for="facet in allFilters" :key="facet" class="lg:mb-2">
              <button
                type="button"
                class="capitalize border-b-2 transition-colors inline-flex items-center py-2.5 -my-2.5 lg:py-0 lg:my-0"
                :class="selectedFacet === facet
                  ? 'font-bold border-almost-black'
                  : 'border-transparent hover:border-almost-black focus-visible:border-almost-black'"
                @click="selectedFacet = facet"
              >{{ facet }}</button>
            </li>
          </ul>
        </div>
      </div>

      <div class="lg:w-3/4">
        <div class="body-column lg:max-w-4xl">
          <FeedEntry
            v-for="entry in pagedEntries"
            :key="entry.slug"
            :title="entry.title"
            :date="entry.date"
            :description="entry.description"
            :video-id="entry.youtubeId"
            :thumbnail="entry.thumbnail"
            :thumbnail-srcset="entry.thumbnailSrcset"
          />

          <div v-if="totalPages > 1" class="flex justify-between text-xl mb-16">
            <button
              v-if="page > 1"
              type="button"
              class="alaska hover:opacity-70 focus-visible:opacity-70 transition-opacity py-2.5 -my-2.5 lg:py-0 lg:my-0"
              @click="goNewer"
            >
              ← Newer
            </button>
            <span v-else></span>
            <button
              v-if="page < totalPages"
              type="button"
              class="alaska hover:opacity-70 focus-visible:opacity-70 transition-opacity py-2.5 -my-2.5 lg:py-0 lg:my-0"
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
