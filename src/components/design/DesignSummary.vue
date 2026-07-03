<script setup>
import kineticBeatsUI from '@/assets/images/kinetic-beats.png'
import kineticBeatsSketch from '@/assets/images/kinetic-beats-sketch.png'
import imaschine from '@/assets/images/iMaschine2.png'
import phenyx from '@/assets/images/Phenyx-portfolio-mockup.png'
</script>

<template>
  <div class="w-full flex flex-col lg:flex-row max-w-7xl justify-center items-center mx-auto">
    <!-- Right Side: Image Display -->
    <div class="relative h-full mr-4">
      <img :src="kineticBeatsSketch" alt="Garage music" width="full" class="mx-auto max-w-xl"/>
    </div>

    <div class="relative h-full ml-4">
      <img :src="kineticBeatsUI" alt="Garage music" width="full" class="mx-auto mb-4 max-w-sm"/>
    </div>
  </div>

  <div class="atacamamedium w-full">
    <div class="md:max-w-[18ch] my-24  mx-auto">
      <p class="text-xl">
        I like design. I love the creative process. However, I don't like graphic design as a career.
        There is still an element of design in everything I do,
        but being "a Designer" (a role I now understand at an expert level), wasn't for me.
      </p>
    </div>
  </div>

  <div class="w-full">
    <img :src="imaschine" alt="imaschine" width="auto" class="w-full max-w-6xl h-auto mx-auto"/>
  </div>

  <div class="w-full">
    <img :src="phenyx" alt="phenyx" width="auto" class="w-full max-w-5xl h-auto mx-auto"/>
  </div>

  <div class="atacamamedium w-full">
    <div class="md:max-w-[18ch] my-36 mx-auto">
      <p class="text-xl">
        Is design art? I don't think so.
        It is an artisan craft. It can be artistic, but I wouldn't say it's art.
        It's too utilitarian. Too driven by the finance of aesthetics.
        In all of my years working as a designer, I learned much more about business and power structures than I did about art.
      </p>
    </div>
  </div>

  <div class="atacamamedium w-full">

  </div>
</template>
