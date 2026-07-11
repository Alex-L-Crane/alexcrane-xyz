<script setup>
import phrygianBanner from '@/assets/images/phrygian-banner.png'
import imaschine from '@/assets/images/iMaschine2.png'
import kineticBeatsUI from '@/assets/images/kinetic-beats.png'
</script>

<template>
  <div class="atacamamedium bg-almost-black text-white pt-20 border-b border-white">

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
      <h2 class="swissposters font-light text-[10rem]/[1] pb-8 w-full">Evolving Processes</h2>
    </div>
    <div class="flex px-2 sm:px-4 md:px-8 ">
      <div class="hidden lg:inline w-1/4 lg:pr-8">
      </div>
      <div class="w-full lg:w-3/4">
        <div class="md:max-w-[36rem] mt-6 mb-8">
          <p class="mb-8 text-2xl font-bold leading-8">
            <em>
              Splitting away from audio engineering, a career as a designer led me into the tech startup world and solidified my interest in thinking about the world in terms of systems.
            </em>
          </p>
        </div>
        <div class="md:max-w-[36rem] md:mb-8">
          <p class="mb-8 text-xl leading-8">
            Projects are born, they grow, and then they die.
            Sometimes they don’t die right away, but they usually die.
            There's a tangible lifecycle.
            Sometimes they are just envisioned and then die before they are even born.
          </p>

          <p class="mb-8 text-xl leading-8">
            For fifteen years I earned my living as a designer.
            Print design led to web design, then software user experience design and programming.
            I did a whole lot of freelance work and a few in-house jobs at tech startups.<br><br>
            <em>Design <strike>engineering</strike> is engineering <strike>Design</strike>.<br>
              Engineering <strike>Design</strike> is design <strike>engineering</strike>.</em>
          </p>
          <p class="mb-8">
            <em class="alaska text-3xl">Maybe none of it is supposed to make sense...</em>
          </p>

          <div class="mb-8">
            <img :src="kineticBeatsUI" alt="Garage music" width="full" class="mx-auto mb-4 max-w-sm"/>
          </div>

          <p class="text-xl mb-8">
            Yes, design is colors, shapes, proportions, and text arranged in ways driven by stylistic tastes.
            But, it's also experiences and engineering. Any good experience is designed.
            Design is an engineering process and engineering is a design process.
          </p>

          <p class="mb-8 text-xl">
            These days I still see design everywhere.
            Most things that humans interact with were designed.
            Experiences are designed. Including the experience of music.
            Design is a process of evolution and I see it as being connected to the realities of our own existence.
          </p>

          <ul class="space-y-6 md:mb-24 list-none">
            <li class="mb-8">
              I used my design and tech skills to help set the wheels in motion for the artist-friendly music streaming alternative
              <a href="https://resonate.coop/" target="_blank" rel="noopener noreferrer" class="alaska text-[#9A2C2C] hover:opacity-80">Resonate</a>.
            </li>
            <li class="mb-8">
              I collaborated with an engineer friend to create
              <a href="https://www.behance.net/gallery/58350023/KineticBeats-Music-App" target="_blank" rel="noopener noreferrer" class="alaska text-[#9A2C2C] hover:opacity-80">Kinetic Beats</a>, an iPhone app for air drumming.
            </li>
            <li class="mb-8">
              <p class="pb-2"><em>I was hired to build websites for some musicians I admire:</em></p>
              <p>
                <a href="https://daveelitch.com/" target="_blank" rel="noopener noreferrer" class="alaska text-[#9A2C2C] hover:opacity-80">Dave Elitch</a><br>
                <a href="https://www.trevordunn.net/" target="_blank" rel="noopener noreferrer" class="alaska text-[#9A2C2C] hover:opacity-80">Trevor Dunn</a><br>
                <a href="https://alokedutta.com/" target="_blank" rel="noopener noreferrer" class="alaska text-[#9A2C2C] hover:opacity-80">Aloke Dutta</a><br>
                Dunable Guitars
              </p>
            </li>
            <li class="mb-8">
              I spent years attempting to beautify equipment and software for positron emission tomography (PET) scans at a tech startup called
              <a href="https://sofie.com/" target="_blank" rel="noopener noreferrer" class="alaska text-[#9A2C2C] hover:opacity-80">Sofie Biosciences</a>.
            </li>
          </ul>
        </div>
        <div class="flex align-baseline pb-4 relative z-0">
          <p class="atacama font-thin"><span class="text-3xl tracking-tight mr-2">kaizen</span>
            <em>- The practice of continually seeking improvement.</em></p>
        </div>
      </div>
    </div>

    <div class="md:mx-8 relative">
      <div class="w-full">
        <div class="max-w-6xl mx-auto">
          <img :src="imaschine" alt="imaschine" width="auto" class="w-full h-auto"/>
          <span class="font-thin italic inline-block ml-12 mb-12">2020: Dabbling with audio equipment in a field near Eugene, Oregon.</span>
        </div>
      </div>
    </div>
  </div>
</template>
