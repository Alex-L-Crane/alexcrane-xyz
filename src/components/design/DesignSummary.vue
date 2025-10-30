<script setup>
import TextBlockRight from '@/components/formatting/TextBlockRight.vue'
import TextBlockLeft from '@/components/formatting/TextBlockLeft.vue'
import kineticBeatsUI from '@/assets/images/kinetic-beats.png'
import kineticBeatsSketch from '@/assets/images/kinetic-beats-sketch.png'
import imaschine from '@/assets/images/iMaschine2.png'
import phenyx from '@/assets/images/Phenyx-portfolio-mockup.png'
import phrygian from '@/assets/images/phrygian-sharp-4.png'
</script>

<template>
  <div class="atacamamedium flex flex-col lg:flex-row lg:pt-78 pt-16 relative z-0">
    <TextBlockLeft>
      <h2 class="neogeo text-5xl/[1] mb-6">Evolving processes.</h2>
      <div class="md:max-w-[15ch] mb-8 text-xl">
        <p class="mb-8">
          Projects are born, they grow, and then they die. Sometimes they don’t die right away, but they usually die. There's a tangible lifecycle. Sometimes they are just envisioned and then die before they are even born.
        </p>
      </div>
      <!--<p class="text-2xl/[1.4] leading-tight font-thin">Something</p>-->
    </TextBlockLeft>
    <TextBlockRight>
    </TextBlockRight>
  </div>
  <svg width="auto" height="auto" class="-mt-[140px]" viewBox="0 0 995 398" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_12096_396)">
      <path d="M995 332.586C927.509 345.643 773.172 410.931 883.838 281.838C994.503 152.745 1054.55 -63.5968 863.987 19.4977C673.424 102.592 797.133 136.773 809.895 195.183C822.798 254.239 803.94 311.812 735.456 344.753C658.812 381.619 424.798 208.835 396.511 142.656C368.225 76.4771 526.035 95.1726 588.564 131.675C651.092 168.177 552.833 240.293 434.227 281.839C357.717 308.639 362.035 444.745 325.05 379.473C264.011 271.749 139.448 392.235 208.925 267.593C272.943 152.746 224.309 101.999 123.569 118.024C42.976 130.845 7.60928 139.787 -2.55925e-05 142.656" stroke="white" stroke-width="2"/>
    </g>
  </svg>

  <div class="atacamamedium w-full">
    <div class="md:max-w-[18ch] mt-8 lg:mt-24 mb-24 mx-auto">
      <p class="text-xl">
        For fifteen years I earned my living as a designer.
        Print design led to web design, then software user experience design and programming.
        I did a whole lot of freelance work and a few in-house jobs at tech startups.
      </p>
    </div>
  </div>

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

  <div class="atacamamedium w-full">
    <div class="md:max-w-[18ch] my-36 mx-auto">
      <p class="text-xl">
        Yes, design is colors, shapes, proportions, and text arranged in ways driven by stylistic tastes.
        But, it's also experiences and engineering. Any good experience is designed.
        Design is an engineering process and engineering is a design process.
      </p>
    </div>
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

  <div class="w-full">
    <img :src="phrygian" alt="phrygian" width="auto" class="w-full max-w-5xl h-auto mx-auto"/>
  </div>

  <div class="atacamamedium w-full">
    <div class="md:max-w-[18ch] mt-8 lg:mt-24 mb-8 mx-auto">
      <p class="mb-8 text-xl">
        These days I still see design everywhere.
        Most things that humans interact with were designed.
        Experiences are designed. Including the experience of music.
        Design is a process of evolution and I see it as being connected to the realities of our own existence.
      </p>
    </div>
  </div>
</template>
