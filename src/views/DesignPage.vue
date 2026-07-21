<script setup>
import phrygianBanner from '@/assets/images/phrygian-banner.png?w=1024&format=webp&quality=82'
import phrygianBannerSrcset from '@/assets/images/phrygian-banner.png?w=480;800;1024&format=webp&quality=82&as=srcset'
import imaschine from '@/assets/images/iMaschine2.png?w=1200&format=webp&quality=82'
import imaschineSrcset from '@/assets/images/iMaschine2.png?w=480;800;1200&format=webp&quality=82&as=srcset'
import kineticBeatsUI from '@/assets/images/kinetic-beats.png?w=900&format=webp&quality=82'
import kineticBeatsUISrcset from '@/assets/images/kinetic-beats.png?w=450;900&format=webp&quality=82&as=srcset'
import EyebrowNav from '@/components/navigation/EyebrowNav.vue'
</script>

<template>
  <main class="atacamamedium bg-stock-ink text-white pt-14 lg:pt-20 border-b border-white/20">

    <div class="section-panel">
      <!--<img :src="garagePhoto" alt="Garage music" width="auto" class="w-full h-auto"/> -->
      <div class="absolute w-full h-full top-0 left-0 flex">
        <div class="hidden lg:inline w-1/4 lg:pr-8">
        </div>
        <div class="w-full lg:w-3/4 flex flex-col pb-8">
          <!--<h2 class="neogeo text-5xl/[1] text-white md:max-w-[15ch] mt-auto">Evolving  <span class="hidden lg:inline"><br></span>processes.</h2>-->
        </div>
      </div>
      <img :src="phrygianBanner" :srcset="phrygianBannerSrcset" sizes="(min-width: 1024px) 1400px, 100vw" alt="phrygian" width="1024" height="248" class="aspect-[3/2] md:aspect-[21/9] md:max-h-[40vh] lg:aspect-[1024/248] lg:max-h-none w-full object-cover object-center"/>
      <EyebrowNav parent-label="About" parent-href="/about" current-label="Design" />
      <h1 class="hero-headline">Evolving Processes</h1>
    </div>
    <div class="flex px-2 sm:px-4 md:px-8 ">
      <div class="hidden lg:inline w-1/4 lg:pr-8">
      </div>
      <div class="w-full lg:w-3/4">
        <div class="md:max-w-[36rem]">
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

          <figure class="exhibit-inline mb-0">
            <img :src="kineticBeatsUI" :srcset="kineticBeatsUISrcset" sizes="384px" alt="Garage music" width="653" height="1326" loading="lazy" class="mx-auto w-full max-w-sm"/>
            <figcaption class="photo-caption mb-2 inline-block">
              2017: Kinetic Beats, an iPhone app for air drumming.
            </figcaption>
          </figure>
        </div>
      </div>
    </div>

    <div class="px-2 sm:px-4 md:px-0 lg:px-0 body-column lg:pl-48 mt-16 md:mt-24 lg:mt-40">
      <p class="body-copy">
        <em class="italic-subhead text-2xl md:text-3xl">
          Design is a process of evolution.<br>
          Design is sensory and experiential.<br>
          Design is an engineering process.</em>
      </p>
    </div>

    <div class="flex px-2 sm:px-4 md:px-8">
      <div class="hidden lg:inline w-1/4 lg:pr-8">
      </div>
      <div class="w-full lg:w-3/4">
        <div class="md:max-w-[36rem] md:mb-8">
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

    <div class="section-panel">
      <div class="w-full">
        <figure class="exhibit-full">
          <img :src="imaschine" :srcset="imaschineSrcset" sizes="(min-width: 1024px) 1152px, 100vw" alt="imaschine" width="1154" height="865" loading="lazy" class="w-full h-auto"/>
          <figcaption class="photo-caption mb-2">
            2016: A UI design I created for as part of an interview process for Native Instruments.
          </figcaption>
        </figure>
      </div>
    </div>
  </main>
</template>
