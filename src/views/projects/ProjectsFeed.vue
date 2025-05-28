<script setup>
import { ref, computed } from 'vue'
import VideoPlayer from '@/components/formatting/VideoPlayer.vue'
const inspirationsLink = "/about/inspirations";

const posts = ref([
  {
    uri: "at://example.com/post/123",
      title: "Some title about something here. And more.",
      text: "I don’t believe in magic, but do believe in sound. Somehow simultaneously ubiquitous and subversive, deeply misunderstood and underappreciated, sound has permeated every aspect of my life and has been my gateway to learning about visual arts, computer science, electronics, culture, psychology, politics, and, of course, music.",
      video: "Avqj5Wl2h_E",
      facets: ["music"],
      author: { handle: "alexcrane.xyz" }
  },
  {
    uri: "at://example.com/post/123",
    title: "Some title about something here. And more.",
    text: "I don’t believe in magic, but do believe in sound. Somehow simultaneously ubiquitous and subversive, deeply misunderstood and underappreciated, sound has permeated every aspect of my life and has been my gateway to learning about visual arts, computer science, electronics, culture, psychology, politics, and, of course, music.",
    video: "Ks2xvsfmgOs",
    facets: ["tech"],
    author: { handle: "alexcrane.xyz" }
  },
  {
    uri: 'at://example.com/post/1',
    title: "Some title about something here. And more.",
    text: 'Here’s a new video I made about sound design.',
    facets: ['music'],
    author: { handle: 'alexcrane.xyz' }
  },
  {
    uri: 'at://example.com/post/2',
    title: "Some title about something here. And more.",
    text: 'Wrote a short essay on modular synthesis and creativity.',
    facets: ['tech'],
    author: { handle: 'alexcrane.xyz' }
  },
  {
    uri: 'at://example.com/post/3',
    title: "Some title about something here. And more.",
    text: 'Live jam using Max and a custom sequencer. Code included.',
    facets: ['research'],
    author: { handle: 'alexcrane.xyz' }
  },
  {
    uri: 'at://example.com/post/4',
    title: "Some title about something here. And more.",
    text: 'A visual breakdown of rhythmic structures in African drumming.',
    facets: ['tech'],
    author: { handle: 'alexcrane.xyz' }
  }
])

// Whitelisted facets
const allowedFacets = ['music', 'tech', 'research'] // plus "all"

// User-selected facet filter
const selectedFacet = ref('all')

const filteredPosts = computed(() => {
  return posts.value.filter(post => {
    const hasAllowedFacet = post.facets?.some(f => allowedFacets.includes(f))
    if (!hasAllowedFacet) return false

    if (selectedFacet.value === 'all') return true

    return post.facets?.includes(selectedFacet.value)
  })
})
</script>

<template>
  <div class="bg-[#F0EFD4] text-black p-8 border-b-2 border-b-white pt-32">
    <div class="flex pt-16 pb-4 relative snap-start z-0">
      <div class="sticky self-start top-16 w-1/4 pr-40">
        <p class="pb-2 mb-4 border-b border-b-almost-black">Filter Projects</p>
        <ul class="text-l/[2] font-thin lg:max-w-lg border-b border-b-almost-black">
          <li
            v-for="facet in ['all', ...allowedFacets]"
            :key="facet"
            @click="selectedFacet = facet"
            :class="[
              'cursor-pointer capitalize mb-4',
              selectedFacet === facet ? 'font-bold' : ''
            ]"
          >
            {{ facet }}
          </li>
        </ul>
        <hr/>
        <p class="text-xl/[1.4] lg:max-w-lg mt-16">
          <a :href='inspirationsLink' class="leading-tight">View&nbsp;&nbsp;&nbsp;<br>inspirations ><br>feed&nbsp;&nbsp;&nbsp;</a>
        </p>
      </div>

      <div class="flex flex-col w-1/2">
        <!-- Filtered Posts -->
        <div v-for="post in filteredPosts" class="mb-24">
          <h2 class="neogeo text-5xl/[1] mb-2 pr-8">{{ post.title }}</h2>
          <video-player v-if="post.video" :video-id="post.video" />
          <p class="text-l/[1.2] leading-tight font-thin pt-2">{{post.text}}</p>
        </div>
      </div>

      <div class="sticky top-0 self-start w-1/4 text-right">

      </div>
    </div>
  </div>
</template>
