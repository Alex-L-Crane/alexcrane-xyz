<script setup>
import phrygianBanner from '@/assets/images/phrygian-banner.png'
import imaschine from '@/assets/images/iMaschine2.png'
import kineticBeatsUI from '@/assets/images/kinetic-beats.png'
import EyebrowNav from '@/components/navigation/EyebrowNav.vue'
</script>

<template>
  <main class="atacamamedium bg-stock-ink text-white pt-14 lg:pt-20 border-b border-white/20">

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
      <div class="mobile-gutter">
        <EyebrowNav parent-label="About" parent-href="/about" current-label="Design" />
        <h1 class="hero-headline">Evolving Processes</h1>
      </div>
    </div>
    <div class="flex px-2 sm:px-4 md:px-8 ">
      <div class="hidden lg:inline w-1/4 lg:pr-8">
      </div>
      <div class="w-full lg:w-3/4">
        <div class="md:max-w-[36rem] md:mb-8">
          <p class="body-copy">
            Projects are born, they grow, and then they die.
            Sometimes they don’t die right away, but they usually die.
            There’s a tangible lifecycle.
            Sometimes they are just envisioned and then die before they are even born.
          </p>

          <p class="body-copy">
            <em>Design <strike>engineering</strike> is engineering <strike>Design</strike>.<br>
              Engineering <strike>Design</strike> is design <strike>engineering</strike>.</em>
          </p>

          <p class="body-copy">
            To keep the audio alive, I earned my living as a designer.
            Over fifteen years, print design led to web design, then software user experience design and programming.
            Freelance work is where I developed my chops. A few in-house jobs at tech startups provided more stability.<br><br>
          </p>

          <figure class="exhibit-inline">
            <img :src="kineticBeatsUI" alt="Garage music" width="full" class="mx-auto max-w-sm"/>
            <figcaption class="photo-caption mb-2 inline-block">
              2017: Kinetic Beats, an iPhone app for air drumming.
            </figcaption>
          </figure>

          <p class="body-copy mt-16 md:mt-24 lg:mt-32">
            <em class="italic-subhead">
              Design is a process of evolution.<br>
              Design is sensory and experiential.<br>
              Design is an engineering process.</em>
          </p>

          <p class="body-copy">
            These days I still see design everywhere, but I focus more on the engineering side.
            Most things that humans interact with were intentionally designed.
          </p>

          <ul class="space-y-6 md:mb-24 list-none">
            <li class="body-copy">
              I designed and developed for the artist-friendly music streaming alternative
              <a href="https://resonate.coop/" target="_blank" rel="noopener noreferrer" class="link-list">Resonate</a>.
            </li>
            <li class="body-copy">
              I collaborated with an engineer friend to create
              <a href="https://www.behance.net/gallery/58350023/KineticBeats-Music-App" target="_blank" rel="noopener noreferrer" class="link-list">Kinetic Beats</a>, an iPhone app for air drumming.
            </li>
            <li class="body-copy">
              <p class="pb-2"><em>I was hired to build websites for some excellent musicians:</em></p>
              <ul>
                <li><a href="https://daveelitch.com/" target="_blank" rel="noopener noreferrer" class="link-list">Dave Elitch</a></li>
                <li><a href="https://www.trevordunn.net/" target="_blank" rel="noopener noreferrer" class="link-list">Trevor Dunn</a></li>
                <li><a href="https://alokedutta.com/" target="_blank" rel="noopener noreferrer" class="link-list">Aloke Dutta</a></li>
                <li class="list-entry">Dunable Guitars</li>
              </ul>
            </li>
            <li class="body-copy">
              I spent years designing, developing, and beautifying products for positron emission tomography (PET) scans at a tech startup called
              <a href="https://sofie.com/" target="_blank" rel="noopener noreferrer" class="link-list">Sofie Biosciences</a>.
            </li>
          </ul>
          <p class="body-copy mb-16">
            More about my
            <a href="/philosophy" class="highlight-link">
              philosophy</a> <br>and
            <a href="/about" class="highlight-link">
              the rest of my story</a>.
          </p>
        </div>
      </div>
    </div>

    <div class="md:mx-8 relative">
      <div class="w-full">
        <figure class="exhibit-full">
          <img :src="imaschine" alt="imaschine" width="auto" class="w-full h-auto"/>
          <figcaption class="photo-caption mb-2">
            2016: A UI design I created for as part of an interview process for Native Instruments.
          </figcaption>
        </figure>
      </div>
    </div>
  </main>
</template>
