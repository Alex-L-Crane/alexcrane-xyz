<script setup>
// import abstractSpeakers from '@/assets/images/abstract-speakers-1.png'
import VideoPlayer from '@/components/formatting/VideoPlayer.vue'

// import fieldKnob from '@/assets/images/music/knob-field.png'
// import burningCar from '@/assets/images/music/burning-car.png'

import sreCover from '@/assets/images/music/SRE-cover.jpg'
import wavesCover from '@/assets/images/music/After-the-Waves-Devour-us-All_cover.jpg'
import whiteLightCover from '@/assets/images/music/White light.png'
import cuneiformWestbeachDrums from '@/assets/images/music/Cuneiform-Westbeach-drums.jpg'
import holyDoseCover from '@/assets/images/music/Holy-Dose-Album-Cover.jpg'
import cuneiformCover from '@/assets/images/music/Cuneiform-Tabula-Rasa-beach-cover.jpg'
import directActionCover from '@/assets/images/music/Direct-Action-Cassette-photo-1.jpg'
//import cuneiformWestbeach from '@/assets/images/CuneiformWestbeachThnxgiving.png'
//import backgroundAbstract1 from '@/assets/images/background-abstract-1.png'
import manifestoAbstract from '@/assets/images/manifesto-abstract.png'
// import fieldAmp from '@/assets/images/alex-field-amp-cropped-1.png'
//import backgroundAbstract1 from '@/assets/images/background-abstract-1.png'
import tcaBandPic from '@/assets/images/tca-silouhette-pic-2017.jpg'
import suicidalTragedy from '@/assets/images/music/tragedy-suicidal-wide-bw.png'
</script>

<template>
  <div class="atacamamedium flex flex-col lg:flex-row lg:pt-78 pt-16 pb-4 relative z-0">
    <div class="w-1/4 pr-8">
      <h2 class="neogeo text-5xl/[1] lg:text-[60pt] leading-[1] mb-4">Pulse +<br>impulse.</h2>
    </div>
    <div class="w-3/4 flex flex-col">
      <div class="lg:max-w-lg">
        <p class="mb-4 border-l-8 border-[#444244] pl-4">
          <span class="alaska font-bold text-2xl inline-block mb-2">Drumming.</span><br/>
          <span class="alaska text-2xl font-light inline-block mb-2">A guiding practice.</span><br/>
          <span class="alaska text-2xl font-light inline-block mb-2">A meditation.</span><br/>
          <span class="alaska text-2xl font-light inline-block">An art.</span><br/></p>
        <p class="mb-4 text-xl">A technology in which humans harness a rebounding drumstick to summon life-affirming, rhythmically induced trance states.</p>
      </div>
        <div class="mb-4 max-w-4xl">
          <video-player
            video-id="Avqj5Wl2h_E"
          />
        </div>
      <div class="lg:max-w-lg">
        <p class="text-xl">I've never pictured myself becoming a chops-heavy virtuoso drummer, but I do care about playing well and to I try to say something personal with my playing.
          Above all else, I'd like to think I've been sincere in my art.</p><br/>
      </div>
    </div>
  </div>

  <div class="flex">
    <div class="w-full lg:w-3/4">
      <img :src="manifestoAbstract" alt="Garage music" width="full" class="w-full"/>
    </div>
    <div class="invisible lg:w-1/4 lg:pr-8">
    </div>
  </div>

  <div class="flex align-baseline pb-4 relative z-0 mb-4 lg:mb-8">
    <p class="font-thin"><span class="text-3xl tracking-tight mr-4">
      wabi-sabi</span>
      <em>Finding beauty in imperfection, impermanence, or simplicity.</em></p>
  </div>

  <div class="flex align-baseline pb-4 relative z-0 mb-4 pb-24">
    <div class="lg:max-w-lg">
      <p class="text-xl">I was late to get my first drumset at age twenty, but became instantly obsessed.
        At the time of getting my first kit, I was working at Hyde Street Studios and spent my spare time practicing and recording drums in that classic analog studio environment.
        The fundamentals of rhythm, acoustics, and audio are where it's at for me.</p><br>
    </div>
  </div>

  <!--<div class="lg:-mt-36 md:bg-white lg:rounded md:p-4 lg:p-16 lg:ml-16 mb-16 lg:mb-32 mx-2 md:mx-8">
    <h2 class="neogeo font-thin text-almost-black text-5xl tracking-tight lg:mb-3">
      wabi-sabi</h2>
    <p><em>Finding beauty in imperfection, impermanence, or simplicity.</em></p>
  </div>-->

  <!--<div class="flex">
    <div class="invisible lg:w-1/4 lg:pr-8">
    </div>
    <div class="w-full lg:w-3/4">
      <img :src="manifestoAbstract" alt="Garage music" width="full" class="w-full mb-4 lg:mb-24"/>
    </div>
  </div>-->

  <div class="w-full flex flex-col lg:flex-row-reverse p-2">
    <!-- Right Side: Image Display -->
    <div class="md:w-[50%]">
      <div class="relative h-full">
        <div class="lg:sticky lg:top-32 z-10">
          <img :src="cuneiformWestbeachDrums" alt="Garage music" width="full" class="mx-auto mb-4 md:mb-24"/>
        </div>
      </div>
    </div>

    <div class="atacamamedium md:w-[50%]">
      <div class="md:max-w-[15ch]">
        <h2 class="neogeo text-5xl/[1] mb-8">Personal Music.</h2>
        <p class="pb-8">The longer I play, the more I'm interested in improvisation both as a soloist and in collaboration with other musicians.
          Increasingly, I find I want to make music in a way that is more like cooking than composing.</p>
        <p class="text-xl mb-8 border-l-8 border-[#444244] pl-4">
          <span class="alaska text-2xl font-light inline-block pb-4">I make what I want to eat.</span><br/>
          <span class="alaska text-2xl font-light inline-block pb-4">I use the available ingredients.</span><br/>
          <span class="alaska text-2xl font-light inline-block pb-4">I trust my senses.</span><br/>
          <span class="alaska text-2xl font-light inline-block pb-4">I cook with others in mind.</span><br/>
          <span class="alaska text-2xl font-light inline-block">I adapt as needed.</span>
        </p>
        <p class="pb-8 font-thin">Over the years leading-up to this improvised, constraint-driven minimalist approach to music, I was heavily focused on a project I created called The Cruelest Animal (TCA).</p>
        <p class="pb-8 font-thin">TCA started as a fairly typical metal band, then turned into a recording-only project, then morphed into a two piece live band where I both looped guitar and played drums. It was an exercise in finding my own sound and letting go of the traditional band format.</p>
      </div>
    </div>
  </div>

  <div class="flex w-full justify-start mt-24 mb-16">
    <div class="w-2/3 flex flex-col">
      <video-player
        video-id="oLMcug_N1PA"
        :custom-thumbnail="tcaBandPic"/>
    </div>
  </div>

  <div class="w-full flex space-x-16 mb-16">
    <div class="w-full flex flex-col">
      <div class="">
        <img :src="sreCover" alt="TCA Soothing Rays of eternity album cover" width="full" class="w-full"/>
      </div>
      <div>
        <div class="flex justify-between pt-2">
          <p class="leading-snug mb-2">Soothing Rays of Eternity<br/>
            <span class="font-thin">TCA</span><br/>
          </p>
          <span class="font-thin">2017</span>
        </div>
        <a href="https://thecruelestanimal.bandcamp.com/album/soothing-rays-of-eternity"
           target="_blank"
           class="inline-block border-t border-almost-black text-sm font-thin text-base pt-2">Bandcamp
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 135.0" class="inline h-[1em] w-[1em] align-text-bottom fill-current">
            <path d="m38.344 56.258 42.738-42.738h-18.137v-7.6367h27.355c2.1094 0 3.8164 1.7109 3.8164 3.8164v27.355h-7.6367v-18.137l-42.738 42.738zm47.102-1.9219h-7.6367v26.793c0 2.9375-2.418 5.3516-5.3516 5.3516h-53.586c-2.9375 0-5.3516-2.4141-5.3516-5.3516v-53.586c0-2.9375 2.4141-5.3516 5.3516-5.3516h26.793v-7.6367h-26.793c-7.1523 0-12.988 5.8359-12.988 12.988v53.586c0 7.1523 5.8398 12.988 12.988 12.988h53.586c7.1523 0 12.988-5.8359 12.988-12.988l0.003907-26.793z" fill-rule="evenodd"/>
          </svg>
        </a>
      </div>
    </div>
    <div class="w-full flex flex-col">
      <div class="">
        <img :src="wavesCover" alt="TCA After the Waves Devour Us All album cover" width="full" class="w-full"/>
      </div>
      <div>
        <div class="flex justify-between pt-2">
          <p class="leading-snug mb-2">After the Waves Devour Us All<br/>
            <span class="font-thin">TCA</span><br/>
          </p>
          <span class="font-thin">2014</span>
        </div>
        <a href="https://thecruelestanimal.bandcamp.com/album/after-the-waves-devour-us-all"
           target="_blank"
           class="inline-block border-t border-almost-black text-sm font-thin pt-2">Bandcamp
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 135.0" class="inline h-[1em] w-[1em] align-text-bottom fill-current">
            <path d="m38.344 56.258 42.738-42.738h-18.137v-7.6367h27.355c2.1094 0 3.8164 1.7109 3.8164 3.8164v27.355h-7.6367v-18.137l-42.738 42.738zm47.102-1.9219h-7.6367v26.793c0 2.9375-2.418 5.3516-5.3516 5.3516h-53.586c-2.9375 0-5.3516-2.4141-5.3516-5.3516v-53.586c0-2.9375 2.4141-5.3516 5.3516-5.3516h26.793v-7.6367h-26.793c-7.1523 0-12.988 5.8359-12.988 12.988v53.586c0 7.1523 5.8398 12.988 12.988 12.988h53.586c7.1523 0 12.988-5.8359 12.988-12.988l0.003907-26.793z" fill-rule="evenodd"/>
          </svg>
        </a>
      </div>
    </div>
    <div class="w-full flex flex-col">
      <div class="">
        <img :src="whiteLightCover" alt="TCA White Light and the Empire Collapse album cover" width="full" class="w-full"/>
      </div>
      <div>
        <div class="flex justify-between pt-2">
          <p class="leading-snug mb-2">White Light and the Empire Collapse<br/>
            <span class="font-thin">TCA</span><br/>
          </p>
          <span class="font-thin">2012</span>
        </div>
        <a href="https://thecruelestanimal.bandcamp.com/album/white-light-and-the-empire-collapse"
           target="_blank"
           class="inline-block border-t border-almost-black text-sm font-thin pt-2">Bandcamp
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 135.0" class="inline h-[1em] w-[1em] align-text-bottom fill-current">
            <path d="m38.344 56.258 42.738-42.738h-18.137v-7.6367h27.355c2.1094 0 3.8164 1.7109 3.8164 3.8164v27.355h-7.6367v-18.137l-42.738 42.738zm47.102-1.9219h-7.6367v26.793c0 2.9375-2.418 5.3516-5.3516 5.3516h-53.586c-2.9375 0-5.3516-2.4141-5.3516-5.3516v-53.586c0-2.9375 2.4141-5.3516 5.3516-5.3516h26.793v-7.6367h-26.793c-7.1523 0-12.988 5.8359-12.988 12.988v53.586c0 7.1523 5.8398 12.988 12.988 12.988h53.586c7.1523 0 12.988-5.8359 12.988-12.988l0.003907-26.793z" fill-rule="evenodd"/>
          </svg>
        </a>
      </div>
    </div>
  </div>

  <div class="lg:max-w-lg mx-auto mb-36">
    <p class="text-xl font-thin">“Man is the cruelest animal. At tragedies, bullfights, and crucifixions he has so far felt best on
      earth; and when he invented hell for himself, behold, that was his very heaven.”<br/>
      - Friedrich Nietzsche</p>
  </div>

  <!--<div class="flex pt-24">
    <div class="w-1/4 pr-8"></div>
    <div class="w-3/4 flex flex-col pb-4">
      <div class="lg:max-w-lg">
        <h3 class="neogeo text-4xl/[1] lg:text-[36pt] leading-[1] mb-4">Band Debacles.</h3>
        <img :src="abstractSpeakers" alt="Abstract photo shot through drums" width="full" class="w-full pb-16"/>
        <p class="">My music discipline is rooted in drumming and rhythm, but who doesn't love a nice dose of melody and harmony. Music often works best when performed collectively and I've joined and created a bunch of bands, but I increasingly enjoy the power of summoning sound as a solo musician.</p>
      </div>
    </div>
  </div>-->

  <div class="atacamamedium w-full mb-24 flex flex-col md:flex-row-reverse pt-8 pb-8">
    <div class="md:w-[50%]">
      <div class="md:max-w-[15ch] pl-4 md:mb-8">
        <h3 class="neogeo text-4xl/[1] lg:text-[36pt] leading-[1] mb-4">Band Endeavors.</h3>
        <p class="pb-8">If you're in my inner circle, you've probably heard me vent about hating bands.
        Yeah, maybe I've gone on a rant or two about preferring solo ambient noise artists to plain old four piece rock bands.
        It's true, I do tend to seek out the most personal and abstract acts, but I probably don't actually hate bands.
          When multiple humans can come into alignment and make compelling music together, it's the best.
          Still, it's safe to say that I just don't think everyone who ever picks up a guitar needs to start a band.
        </p>

        <p class="pb-8">So anyway, I've had a bunch of underground bands of my own. My first band, Direct Action, released our cassete in 1997.
          Being in a band is like trying to run a business that has little hope of ever making money.
          All of the personnel problems and endless responsibilities are real. The rewards tend to be less tangible.
          Still, there are rewards.
        </p>

        <p>The non-monetary dividends from being in a band are paid out over a long period of time.
          There's no better way to develop an understanding of creative process.
        There no better way to get over a fear of social situations.
        There's no better way to understand business and finance.
          There's no better way to make lifelong friends.
          There's no better way to make lifelong connections.
        There's no better way to learn how to avoid sketchy people and situations.
          There's no better way to party.
          There's no better way to develop the tools to figure out what to do with your life when plan A doesn't pan out.
        </p>
      </div>
    </div>

    <div class="md:w-[50%]">
      <div class="relative h-full p-2 md:p-0">
        <div class="sticky top-32 z-10">
          <img :src="suicidalTragedy" alt="Sitting in a field adjusting an amplifier" width="full"/>
          <span class="font-thin italic">2020: Playing with an amplifier in a field.</span>
        </div>
      </div>
    </div>
  </div>

  <div class="w-full flex space-x-16 mb-4">
    <div class="w-full flex flex-col">
      <div class="">
        <img :src="holyDoseCover" alt="TCA Soothing Rays of eternity album cover" width="full" class="w-full"/>
      </div>
      <div>
        <div class="flex justify-between pt-2">
          <p class="leading-snug mb-2">Holy Dose EP<br/>
            <span class="font-thin">Holy Dose</span><br/>
          </p>
          <span class="font-thin">2008</span>
        </div>
        <a href="https://holydose.bandcamp.com/album/holy-dose"
           target="_blank"
           class="inline-block border-t border-almost-black text-sm font-thin pt-2">Bandcamp
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 135.0" class="inline h-[1em] w-[1em] align-text-bottom fill-current">
            <path d="m38.344 56.258 42.738-42.738h-18.137v-7.6367h27.355c2.1094 0 3.8164 1.7109 3.8164 3.8164v27.355h-7.6367v-18.137l-42.738 42.738zm47.102-1.9219h-7.6367v26.793c0 2.9375-2.418 5.3516-5.3516 5.3516h-53.586c-2.9375 0-5.3516-2.4141-5.3516-5.3516v-53.586c0-2.9375 2.4141-5.3516 5.3516-5.3516h26.793v-7.6367h-26.793c-7.1523 0-12.988 5.8359-12.988 12.988v53.586c0 7.1523 5.8398 12.988 12.988 12.988h53.586c7.1523 0 12.988-5.8359 12.988-12.988l0.003907-26.793z" fill-rule="evenodd"/>
          </svg>
        </a>
      </div>
    </div>
    <div class="w-full flex flex-col">
      <div class="">
        <img :src="cuneiformCover" alt="TCA After the Waves Devour Us All album cover" width="full" class="w-full"/>
      </div>
      <div>
        <div class="flex justify-between pt-2">
          <p class="leading-snug mb-2">Tabula Rasa<br/>
            <span class="font-thin">Cuneiform</span><br/>
          </p>
          <span class="font-thin">2008</span>
        </div>
        <a href="https://cuneiformband.bandcamp.com/album/tabula-rasa"
           target="_blank"
           class="inline-block border-t border-almost-black text-sm font-thin pt-2">Bandcamp
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 135.0" class="inline h-[1em] w-[1em] align-text-bottom fill-current">
            <path d="m38.344 56.258 42.738-42.738h-18.137v-7.6367h27.355c2.1094 0 3.8164 1.7109 3.8164 3.8164v27.355h-7.6367v-18.137l-42.738 42.738zm47.102-1.9219h-7.6367v26.793c0 2.9375-2.418 5.3516-5.3516 5.3516h-53.586c-2.9375 0-5.3516-2.4141-5.3516-5.3516v-53.586c0-2.9375 2.4141-5.3516 5.3516-5.3516h26.793v-7.6367h-26.793c-7.1523 0-12.988 5.8359-12.988 12.988v53.586c0 7.1523 5.8398 12.988 12.988 12.988h53.586c7.1523 0 12.988-5.8359 12.988-12.988l0.003907-26.793z" fill-rule="evenodd"/>
          </svg>
        </a>
      </div>
    </div>
    <div class="w-full flex flex-col">
      <div class="">
        <img :src="directActionCover" alt="TCA White Light and the Empire Collapse album cover" width="full" class="w-full"/>
      </div>
      <div>
        <div class="flex justify-between pt-2">
          <p class="leading-snug mb-2">Free Him<br/>
            <span class="font-thin">Direct Action</span><br/>
          </p>
          <span class="font-thin">1997</span>
        </div>
        <a href="https://dissonantdreamland.bandcamp.com/album/direct-action-free-him"
           target="_blank"
           class="inline-block border-t border-almost-black text-sm font-thin pt-2">Bandcamp
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 135.0" class="inline h-[1em] w-[1em] align-text-bottom fill-current">
            <path d="m38.344 56.258 42.738-42.738h-18.137v-7.6367h27.355c2.1094 0 3.8164 1.7109 3.8164 3.8164v27.355h-7.6367v-18.137l-42.738 42.738zm47.102-1.9219h-7.6367v26.793c0 2.9375-2.418 5.3516-5.3516 5.3516h-53.586c-2.9375 0-5.3516-2.4141-5.3516-5.3516v-53.586c0-2.9375 2.4141-5.3516 5.3516-5.3516h26.793v-7.6367h-26.793c-7.1523 0-12.988 5.8359-12.988 12.988v53.586c0 7.1523 5.8398 12.988 12.988 12.988h53.586c7.1523 0 12.988-5.8359 12.988-12.988l0.003907-26.793z" fill-rule="evenodd"/>
          </svg>
        </a>
      </div>
    </div>
  </div>


  <!--<div class="flex mb-16">
    <div class="w-1/4 pr-8">
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
  </div>-->
</template>
