<script setup>
import abstractSpeakers from '@/assets/images/abstract-speakers-1.png'
import VideoPlayer from '@/components/formatting/VideoPlayer.vue'

import fieldKnob from '@/assets/images/music/knob-field.png'
import burningCar from '@/assets/images/music/burning-car.png'

import sreCover from '@/assets/images/music/SRE-cover.jpg'
import wavesCover from '@/assets/images/music/After-the-Waves-Devour-us-All_cover.jpg'
import whiteLightCover from '@/assets/images/music/White light.png'
</script>

<template>
  <div class="flex flex-col lg:flex-row lg:pt-78 pt-16 pb-4 relative z-0">
    <div class="w-1/4 pr-8">
      <h2 class="neogeo text-5xl/[1] lg:text-[60pt] leading-[1] mb-4">Pulse +<br>impulse.</h2>
    </div>
    <div class="w-3/4">
      <p class="text-xl/[1.4] font-thin lg:max-w-lg">My music discipline is rooted in drumming and rhythm, but who doesn't love a nice dose of melody and harmony. Music often works best when performed collectively and I've joined and created a bunch of bands, but I increasingly enjoy the power of summoning sound as a solo musician. I like technical music, both from the standpoint of manipulating technology to craft sound and from the standpoint of making music that sounds technically intricate.</p>
    </div>
  </div>

  <div class="flex">
    <div class="w-1/4 pr-8"></div>
    <div class="w-3/4 flex flex-col pb-4">
      <img :src="abstractSpeakers" alt="Abstract photo shot through drums" width="full" class="w-full pb-16"/>
      <h3 class="neogeo text-4xl/[1] lg:text-[36pt] leading-[1] mb-4">Improvisation.</h3>
      <p class="text-xl/[1.4] font-thin lg:max-w-lg">My music discipline is rooted in drumming and rhythm, but who doesn't love a nice dose of melody and harmony. Music often works best when performed collectively and I've joined and created a bunch of bands, but I increasingly enjoy the power of summoning sound as a solo musician.</p>
    </div>
  </div>

  <div class="flex mb-4">
    <div class="w-1/4 pr-8"></div>
    <div class="w-3/4 flex flex-col">
      <video-player video-id="Avqj5Wl2h_E" />
    </div>
  </div>

  <div class="flex mb-16">
    <div class="w-1/4 pr-8">
      <ul class="text-xl/[1.4] font-thin lg:max-w-lg list-disc">
        <li>Drums as a primary songwriting tool</li>
        <li>Hybrid acoustic and computer music</li>
        <li>Odd time signature signature and repetetive rhythms</li>
        <li>Heavy and abastract sound</li>
        <li>Multi-instrumentalism</li>
      </ul>
    </div>
    <div class="w-3/4 flex">
      <div class="w-1/2 pr-2">
        <img :src="fieldKnob" alt="Sitting in a field adjusting settings on an amplifier" width="full" class="w-full pb-16"/>
      </div>
      <div class="w-1/2 pl-2">
        <img :src="burningCar" alt="A car on fire on I10 in Los Angeles" width="full" class="w-full pb-16"/>
      </div>
    </div>
  </div>

  <div class="flex">
    <div class="w-1/4 pr-4"></div>
    <div class="w-3/4 flex flex-col pb-4">
      <h3 class="neogeo text-4xl/[1] lg:text-[36pt] leading-[1] mb-4">TCA</h3>
      <p class="text-xl/[1.4] font-thin lg:max-w-lg">My music discipline is rooted in drumming and rhythm, but who doesn't love a nice dose of melody and harmony. Music often works best when performed collectively and I've joined and created a bunch of bands, but I increasingly enjoy the power of summoning sound as a solo musician.</p>
    </div>
  </div>

  <div class="flex mb-3">
    <div class="w-1/4 pr-8"></div>
    <div class="w-3/4 flex flex-col">
      <video-player video-id="oLMcug_N1PA" />
    </div>
  </div>

  <div class="flex mb-16">
    <div class="w-1/4 pr-8">
      <ul class="text-xl/[1.4] font-thin lg:max-w-lg list-disc">
        <li>Collaboration</li>
        <li>Live loping</li>
        <li>MIDI control</li>
        <li>Sample manipulation</li>
        <li>Thought provoking sounds over catchy pop songwriting.</li>
      </ul>
    </div>
    <div class="w-3/4 flex">
      <div class="w-1/3 pr-2">
        <img :src="sreCover" alt="TCA Soothing Rays of eternity album cover" width="full" class="w-full pb-16"/>
      </div>
      <div class="w-1/3 pl-1 pr-1">
        <img :src="wavesCover" alt="TCA After the Waves Devour Us All album cover" width="full" class="w-full pb-16"/>
      </div>
      <div class="w-1/3 pl-2">
        <img :src="whiteLightCover" alt="TCA White Light and the Empire Collapse album cover" width="full" class="w-full pb-16"/>
      </div>
    </div>
  </div>
</template>
