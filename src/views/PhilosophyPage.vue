<script setup>
import EyebrowNav from '@/components/navigation/EyebrowNav.vue'
</script>

<template>
  <main class="atacamamedium bg-stock-chartreuse text-black pt-14 lg:pt-20">
    <div class="section-panel">
      <EyebrowNav parent-label="About" parent-href="/about" current-label="Philosophy" />
      <h1 class="hero-headline">Methodical<br>non-utilitarianism</h1>
    </div>

    <div class="flex mb-20 mt-5">
      <div class="w-1/4"></div>
      <div class="ledger-text">
        <div class="prose-col">
          <p class="italic-subhead italic-subhead-compact">Craft, growth, and depth, not utility. Slowing down and embracing nuance as an antidote to a world obsessed with short-sighted productivity and profit.</p>
        </div>
      </div>
    </div>

    <div class="ledger-row">
      <div class="ledger-label">
        <h2 class="neogeo text-3xl lg:text-5xl/[1]">Mission</h2>
      </div>
      <div class="ledger-text">
        <div class="prose-col">
          <p class="body-copy">To embody melodic rhythm as ritual and as technology, and to offer what comes of it.</p>
        </div>
      </div>
    </div>

    <div class="ledger-row">
      <div class="ledger-label">
        <h2 class="neogeo text-3xl lg:text-5xl/[1]">Manifesto</h2>
      </div>
      <div class="ledger-text">
        <div class="prose-col">
          <ul class="p-0 m-0">
            <li class="body-copy">Make daily minimal, hypnotic grooves: patterns that evolve over time.</li>
            <li class="body-copy">Improvise pieces from start to finish. In the moment. Repeatedly re-improvise the best ideas.</li>
            <li class="body-copy">Design broad interleaved fields of sound color, sweeping strokes, and repeated patterns.</li>
            <li class="body-copy">Allow for bursts of random energy and chaos. Discard perfection.</li>
            <li class="body-copy">Embrace the unusual and the understated. Explore the sophistication within the genre-less, the underground, and the under-appreciated.</li>
            <li class="body-copy">Think about where these sounds and ideas fit in the work and in the world.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="ledger-row">
      <div class="ledger-label">
        <h2 class="neogeo text-3xl lg:text-5xl/[1]">My Why</h2>
      </div>
      <div class="ledger-text">
        <div class="prose-col">
          <p class="body-copy">I believe human purpose is found through rhythm, repetition, logic, systems, and evolutionary processes. Not via superficial ideas of progress, human-made belief systems, or human institutions.</p>
        </div>
      </div>
    </div>

    <div class="flex">
      <div class="w-1/4"></div>
      <div class="ledger-text">
        <p class="body-copy mb-16">
          More about my
          <a href="/about" class="highlight-link">
            the rest of my story</a>.
          <br>and
          <a href="/" class="highlight-link">
            drumming
          </a>
        </p>
      </div>
    </div>
  </main>
</template>
