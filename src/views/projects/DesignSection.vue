<script setup>
import DesignSummary from '@/components/design/DesignSummary.vue'
import garagePhoto from '@/assets/images/garage-photo-cropped.png'
import fieldAmp from '@/assets/images/alex-field-amp-cropped-1.png'
import cuneiformWestbeach from '@/assets/images/CuneiformWestbeachThnxgiving.png'
import phrygianBanner from '@/assets/images/phrygian-banner.png'
</script>

<template>
  <div class="atacamamedium bg-almost-black text-white pt-20">

    <div class="md:mx-8 relative">
      <!--<img :src="garagePhoto" alt="Garage music" width="auto" class="w-full h-auto"/> -->
      <div class="absolute w-full h-full top-0 left-0 flex">
        <div class="hidden lg:inline w-1/4 lg:pr-8">
        </div>
        <div class="w-full lg:w-3/4 flex flex-col pb-8">
          <!--<h2 class="neogeo text-5xl/[1] text-white md:max-w-[15ch] mt-auto">Evolving  <span class="hidden lg:inline"><br></span>processes.</h2>-->
        </div>
      </div>
      <img :src="phrygianBanner" alt="phrygian" width="full" class="w-full"/>
    </div>
    <div class="flex px-2 sm:px-4 md:px-8 ">
      <div class="hidden lg:inline w-1/4 lg:pr-8">
      </div>
      <div class="w-full lg:w-3/4">
        <div class="md:max-w-[15ch] mt-6 mb-8">
          <h2 class="neogeo text-5xl/[1] text-white md:max-w-[15ch] py-8">Evolving  <span class="hidden lg:inline"><br></span>processes.</h2>
          <p class="mb-8 text-xl leading-8">
            Projects are born, they grow, and then they die.
            Sometimes they don’t die right away, but they usually die.
            There's a tangible lifecycle.
            Sometimes they are just envisioned and then die before they are even born.
          </p>
          <p>

          </p>
        </div>

        <div class="md:max-w-[15ch] md:mb-8">
          <p class="mb-8 text-xl leading-8">
            I didn’t know the word “ideology” when I first felt it, but I knew it was everywhere.
            Trying to make sense of the world involves plodding through a web of conflicting beliefs.
            Each one louder than the last.<br><br>
            <em>That’s what makes life <strike>exhausting</strike> fascinating.<br>
              That’s what makes life exhausting <strike>fascinating</strike>.</em>
          </p>
          <p class="mb-8">
            <em class="alaska text-3xl">Maybe none of it is supposed to make sense...</em>
          </p>
          <p class="leading-10 mb-8 text-xl leading-10">
            I was born in upstate
            <span class="alaska text-3xl">New York,</span>
            spent my childhood in the mountains of western
            <span class="alaska text-3xl">Massachusetts,</span>
            then landed in rural
            <span class="alaska text-3xl">Arizona</span>
            at thirteen. The desert, border towns, a different world entirely.
          </p>

          <ul class="alaska mb-8 text-xl leading-8">
            <li>Since then:</li>
            <li class="text-3xl">San Francisco</li>
            <li class="text-3xl">Tucson</li>
            <li class="text-3xl">L.A.</li>
            <li class="text-3xl">Vegas</li>
            <li class="text-3xl">Eugene</li>
          </ul>
          <p class="text-xl leading-8">
            In these different situations, I’ve known an unclassifiable blend of people from drastically different walks of life.
            Still, I haven't found a believable ready-made worldview and I'm sure I won't. That feeling only gets stronger. I’m not wired for doctrine.
            Maybe that’s why I keep on living. Discovering meaning the only way I know how: through art, through logic, through rhythm.
          </p>
          <div class="flex align-baseline pb-4 relative z-0">
            <p class="atacama font-thin"><span class="text-3xl tracking-tight mr-2">kaizen</span>
              <em>- The practice of continually seeking improvement.</em></p>
          </div>
        </div>
      </div>
    </div>

    <div class="md:mx-8 relative">
      <img :src="garagePhoto" alt="Garage music" width="auto" class="w-full h-auto mb-4"/>
      <div class="w-full flex pb-4">
        <div class="md:w-[50%] pr-2">
          <img :src="fieldAmp" alt="Sitting in a field adjusting an amplifier" width="full"/>
        </div>
        <div class="md:w-[50%] pl-2">
          <img :src="cuneiformWestbeach" alt="Garage music" width="full"/>
        </div>
      </div>
      <span class="font-thin italic inline-block mb-4">2020: Dabbling with audio equipment in a field near Eugene, Oregon.</span>
    </div>
  </div>
  <div class="bg-almost-black text-white p-8 pt-32">
    <design-summary />
  </div>
</template>
