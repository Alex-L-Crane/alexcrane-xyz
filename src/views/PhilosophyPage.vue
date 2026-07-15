<script setup>
import EyebrowNav from '@/components/navigation/EyebrowNav.vue'
</script>

<template>
  <main class="atacamamedium bg-stock-chartreuse text-black pt-14 lg:pt-20">
    <div class="section-panel">
      <EyebrowNav parent-label="About" parent-href="/about" current-label="Philosophy" />
      <h1 class="hero-headline">Methodical non-utilitarianism</h1>
    </div>

    <div class="ledger-row">
      <div class="ledger-label">
        <h2 class="neogeo text-5xl/[1]">Mission</h2>
      </div>
      <div class="ledger-text">
        <div class="prose-col">
          <p class="body-copy">To showcase abstract drum-based soundscapes as a form of technology.</p>
        </div>
      </div>
    </div>

    <div class="ledger-row">
      <div class="ledger-label">
        <h2 class="neogeo text-5xl/[1] mb-6">Manifesto</h2>
      </div>
      <div class="ledger-text">
        <div class="prose-col">
          <ul class="p-0 m-0">
            <li class="body-copy">Daily minimal, hypnotic grooves - patterns that evolve over time.</li>
            <li class="body-copy">Improvise pieces from start to finish. In the moment. Repeatedly re-improvise the best ideas.</li>
            <li class="body-copy">Design broad interleaved fields of sound color, sweeping strokes, and repeated patterns  Allow for bursts of random energy and chaos. Discard perfection.</li>
            <li class="body-copy">Embrace the unusual and the understated. Highlight and draw from genre-less, underground, and under-appreciated sophistication within and beyond music.<br/>(The best cooks eat the best food.)</li>
            <li class="body-copy">Think about where you want this sound to fit in before and after you make it. Let that drive personal goals.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="ledger-row">
      <div class="ledger-label">
        <h2 class="neogeo text-5xl/[1] mb-6">My Why</h2>
      </div>
      <div class="ledger-text">
        <div class="prose-col">
          <p class="body-copy">I believe human purpose is unleashed through rhythm, repetition, logic, systems, and evolutionary processes, not via superficial ideas of progress, human-made belief systems, or human institutions.</p>
        </div>
      </div>
    </div>
  </main>
</template>
