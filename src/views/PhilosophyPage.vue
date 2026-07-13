<script setup>
  import philosophyDrums from '@/assets/images/philosophy-drums.png'
  import burningcar from '@/assets/images/burning-car.png'
</script>

<template>
  <div class="bg-[#D8F172] text-black  p-8 border-b-2 pt-32  border-b-white">
    <div class="flex flex-col lg:flex-row pt-16 pb-32">
      <div class="w-full lg:w-1/2 grow">
        <h2 class="neogeo text-5xl/[1] lg:text-[60pt] leading-[1] mb-4">Methodical <br>non-utilitarianism.</h2>
        <p class="atacamamedium text-xl/[1.4] lg:max-w-lg">A context where making things up, making mistakes, and being wrong are all part of the creative process. Growth, development, and enjoyment, not utility. Slowing down and embracing nuance as an antidote to a world obsessed with short-sighted productivity and profit.</p>
      </div>
    </div>

    <div class="flex mb-16">
      <div class="w-1/4 pr-8">
      </div>
      <div class="w-3/4">
        <img :src="philosophyDrums" alt="Methodical Non-Utilitarianism Manifesto Abstract" width="full" class="w-full mb-6"/>
      </div>
    </div>

    <div class="atacamamedium flex mb-32">
      <div class="w-1/4 text-right border-r-[2px] border-almost-black pr-8">
        <h2 class="neogeo text-5xl/[1]">Mission</h2>
      </div>
      <div class="w-3/4">
        <div class="max-w-[36rem]">
          <p class="text-2xl/[1.24] pl-8">To showcase abstract drum-based soundscapes as a form of technology.</p>
        </div>
      </div>
    </div>

    <div class="atacamamedium flex h-full mb-32">
      <div class="w-1/4 text-right border-r-[2px] border-almost-black pr-8">
        <h2 class="neogeo text-5xl/[1] mb-6">Manifesto</h2>
      </div>
      <div class="w-3/4">
        <div class="max-w-[36rem]">
          <ul class="p-0 m-0">
            <li class="text-2xl/[1.24] mb-16 pl-8 ">Make daily minimal, hypnotic grooves - patterns that evolve over time. [break-beat, drum n bass, and prog]</li>
            <li class="text-2xl/[1.24] mb-16 pl-8">Improvise pieces from start to finish. In the moment. Repeatedly re-improvise the best ideas.</li>
            <li class="text-2xl/[1.24] mb-16 pl-8">Design broad interleaved fields of sound color, sweeping strokes, and repeated patterns  Allow for bursts of random energy and chaos. Discard perfection.</li>
            <li class="text-2xl/[1.24] mb-16 pl-8">Embrace the unusual and the understated. Highlight and draw from genre-less, underground, and under-appreciated sophistication within and beyond music.<br/>(The best cooks eat the best food.)</li>
            <li class="text-2xl/[1.24] pl-8">Think about where you want this sound to fit in before and after you make it. Let that drive personal goals.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="atacamamedium flex mb-64">
      <div class="w-1/4 text-right border-r-[2px] border-almost-black pr-8">
        <h2 class="neogeo text-5xl/[1] mb-6">My Why</h2>
      </div>
      <div class="w-3/4">
        <div class="max-w-[36rem]">
          <p class="text-2xl/[1.4] pl-8">I believe human purpose is unleashed through rhythm, repetition, logic, systems, and evolutionary processes, not via superficial ideas of progress, human-made belief systems, or human institutions.</p>
        </div>
      </div>
    </div>

    <div class="atacama w-full flex flex-col lg:flex-row-reverse p-2">
      <!-- Right Side: Image Display -->
      <div class="md:w-[50%]">
        <div class="relative h-full">
          <div class="lg:sticky lg:top-32 z-10">
            <img :src="burningcar" alt="Burning Car" width="full" class="mx-auto mb-4 md:mb-24"/>
          </div>
        </div>
      </div>

      <div class="md:w-[50%] pr-16">
        <h2 class="neogeo text-5xl/[1] mb-6">Philosophy&nbsp; <span class="font-thin">(De-Manifesto?)</span>:</h2>
        <ul>
          <li class="text-2xl/[1.24] mb-16">By default, the mainstream is not conducive to awareness. Subvert mainstream thinking via both process and aesthetic.</li>
          <li class="text-2xl/[1.24] mb-16">No genres. They are not useful.</li>
          <li class="text-2xl/[1.24] mb-16">Professional quality work can be meaningful, but “buttoned up" is not an aesthetic worth pursuing.</li>
          <li class="text-2xl/[1.24] mb-16">Improvisation is a core tenant of creativity. The unpredictable and fleeting nature is directly tied to the flow of reality.</li>
          <li class="text-2xl/[1.24] mb-16">Always be open to experimentation, even if that means experimenting with embracing mainstream thinking.</li>
          <li class="text-2xl/[1.24] mb-16">The idea of “progress” is irrelevant. Being present and grounded overrides black and white dogmas.</li>
          <li class="text-2xl/[1.24] mb-16">Don’t hesitate to throw away or redo work. Also, don’t get stuck in a loop where nothing is ever finished.</li>
          <li class="text-2xl/[1.24] mb-16">The act of developing and exploring a creative process is more valuable than any creative output.</li>
          <li class="text-2xl/[1.24] mb-16">Art does not need to be accessible.</li>
          <li class="text-2xl/[1.24]">There is nothing to work towards. You are already there and have always been there.</li>
        </ul>
      </div>
    </div>
  </div>
</template>


