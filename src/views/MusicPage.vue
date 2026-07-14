<script setup>
import bearBaiting from '@/assets/images/music/bear-baiting-roosters.png'
import manifestoAbstract from '@/assets/images/manifesto-abstract.png'
import sreCover from '@/assets/images/music/SRE-cover.jpg'
import wavesCover from '@/assets/images/music/After-the-Waves-Devour-us-All_cover.jpg'
import whiteLightCover from '@/assets/images/music/White light.png'
import holyDoseCover from '@/assets/images/music/Holy-Dose-Album-Cover.jpg'
import cuneiformCover from '@/assets/images/music/Cuneiform-Tabula-Rasa-beach-cover.jpg'
import directActionCover from '@/assets/images/music/Direct-Action-Cassette-photo-1.jpg'
import cuneiformWestbeachDrums from '@/assets/images/music/Cuneiform-Westbeach-drums.jpg'
import suicidalTragedy from '@/assets/images/music/suicidal-tragedy-action-bw.png'
import fieldAmp from "@/assets/images/alex-field-amp-cropped-1.png";
import cuneiformWestbeach from "@/assets/images/CuneiformWestbeachThnxgiving.png";
import garagePhoto from "@/assets/images/garage-photo-cropped.png";

const discographyRows = [
  {
    id: 'row-1',
    margin: 'mb-8',
    albums: [
      { cover: sreCover, width: 1920, height: 1920, alt: 'TCA Soothing Rays of eternity album cover', title: 'Soothing Rays of Eternity', artist: 'TCA', year: '2017', url: 'https://thecruelestanimal.bandcamp.com/album/soothing-rays-of-eternity' },
      { cover: wavesCover, width: 1000, height: 1000, alt: 'TCA After the Waves Devour Us All album cover', title: 'After the Waves Devour Us All', artist: 'TCA', year: '2014', url: 'https://thecruelestanimal.bandcamp.com/album/after-the-waves-devour-us-all' },
      { cover: whiteLightCover, width: 1958, height: 1954, alt: 'TCA White Light and the Empire Collapse album cover', title: 'White Light and the Empire Collapse', artist: 'TCA', year: '2012', url: 'https://thecruelestanimal.bandcamp.com/album/white-light-and-the-empire-collapse' },
    ],
  },
  {
    id: 'row-2',
    margin: 'mb-4',
    albums: [
      { cover: holyDoseCover, width: 2700, height: 2700, alt: 'Holy Dose EP album cover', title: 'Holy Dose EP', artist: 'Holy Dose', year: '2008', url: 'https://holydose.bandcamp.com/album/holy-dose' },
      { cover: cuneiformCover, width: 2700, height: 2700, alt: 'Cuneiform Tabula Rasa album cover', title: 'Tabula Rasa', artist: 'Cuneiform', year: '2008', url: 'https://cuneiformband.bandcamp.com/album/tabula-rasa' },
      { cover: directActionCover, width: 1773, height: 1773, alt: 'Direct Action Free Him cassette cover', title: 'Free Him', artist: 'Direct Action', year: '1997', url: 'https://dissonantdreamland.bandcamp.com/album/direct-action-free-him' },
    ],
  },
]
</script>

<template>
  <main class="atacamamedium bg-stock-yellow text-[#444244] pt-14 lg:pt-20 text-black">

    <div class="section-panel">
      <img :src="manifestoAbstract" alt="Garage music" width="1024" height="248" class="w-full"/>
      <nav aria-label="Breadcrumb" class="alaska pt-4 flex items-center gap-2 text-base italic text-muted-ink">
        <a href="/about" class="link-underline decoration-muted-ink/40 hover:decoration-muted-ink focus-visible:decoration-muted-ink">About</a>
        <span aria-hidden="true">→</span>
        <span>Music</span>
      </nav>
      <h1 class="hero-headline">A Mess of Bands</h1>
    </div>
    <div class="flex px-2 sm:px-4 md:px-8">
      <div class="hidden lg:inline w-1/4 lg:pr-8">
      </div>
      <div class="w-full body-column lg:w-3/4">
        <div class="mt-6 mb-8">
          <div class="prose-col">
            <p class="body-copy">
              I played guitar in my first band for a few years, then I got my first drumset at age twenty.
              I was instantly obsessed. By then I was already an audio engineer at Hyde Street Studios in San Francisco.
              I spent my days working sessions in that classic analog room. I spent my nights there too, practicing and recording my own drums.
              That obsession, rhythm, acoustics, how sound actually works, has driven everything since.
            </p>
            <ul>
              <li class="text-xl mb-8">
                <p class="pb-2">I’ve engineered for some artists:</p>
                <p>
                  <a href="https://en.wikipedia.org/wiki/George_Clinton_(funk_musician)" target="_blank" rel="noopener noreferrer" class="alaska text-[#9A2C2C] link-underline decoration-[#9A2C2C]/40 hover:decoration-[#9A2C2C] focus-visible:decoration-[#9A2C2C]">George Clinton and the P-Funk All Stars</a><br>
                  <a href="https://en.wikipedia.org/wiki/Hieroglyphics_(group)" target="_blank" rel="noopener noreferrer" class="alaska text-[#9A2C2C] link-underline decoration-[#9A2C2C]/40 hover:decoration-[#9A2C2C] focus-visible:decoration-[#9A2C2C]">Michael Manring</a><br>
                  <a href="https://en.wikipedia.org/wiki/Michael_Manring" target="_blank" rel="noopener noreferrer" class="alaska text-[#9A2C2C] link-underline decoration-[#9A2C2C]/40 hover:decoration-[#9A2C2C] focus-visible:decoration-[#9A2C2C]">Hieroglyphics</a><br>
                  <a href="https://en.wikipedia.org/wiki/Ziggy_Modeliste" target="_blank" rel="noopener noreferrer" class="alaska text-[#9A2C2C] link-underline decoration-[#9A2C2C]/40 hover:decoration-[#9A2C2C] focus-visible:decoration-[#9A2C2C]">Ziggy Modeliste</a><br>
                  <a href="https://en.wikipedia.org/wiki/Sage_Francis" target="_blank" rel="noopener noreferrer" class="alaska text-[#9A2C2C] link-underline decoration-[#9A2C2C]/40 hover:decoration-[#9A2C2C] focus-visible:decoration-[#9A2C2C]">Sage Francis</a>
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div class="prose-col md:mb-8">
          <p class="body-copy">
            Underground music has been part of who I am since my teens.
            DIY bands like Fugazi were the blueprint: book it yourself, record it yourself, answer to no one.
            I’ve played in a long line of little-known bands. None of them made me famous. All of them made me who I am.
          </p>
          <ul class="text-xl space-y-6 list-none mb-8">
            <li>
              <p class="pb-2">I’ve opened for some bands I like:</p>
              <p>
                <a href="https://en.wikipedia.org/wiki/Suicidal_Tendencies" target="_blank" rel="noopener noreferrer" class="alaska text-[#9A2C2C] link-underline decoration-[#9A2C2C]/40 hover:decoration-[#9A2C2C] focus-visible:decoration-[#9A2C2C] inline-block">Suicidal Tendencies</a><br>
                <a href="https://en.wikipedia.org/wiki/Author_&amp;_Punisher" target="_blank" rel="noopener noreferrer" class="alaska text-[#9A2C2C] link-underline decoration-[#9A2C2C]/40 hover:decoration-[#9A2C2C] focus-visible:decoration-[#9A2C2C] inline-block">Author and Punisher</a><br>
                <a href="https://en.wikipedia.org/wiki/Qui_(band)" target="_blank" rel="noopener noreferrer" class="alaska text-[#9A2C2C] link-underline decoration-[#9A2C2C]/40 hover:decoration-[#9A2C2C] focus-visible:decoration-[#9A2C2C] inline-block">Qui (with David Yow on vocals)</a><br>
                <a href="https://en.wikipedia.org/wiki/Dwarves_(band)" target="_blank" rel="noopener noreferrer" class="alaska text-[#9A2C2C] link-underline decoration-[#9A2C2C]/40 hover:decoration-[#9A2C2C] focus-visible:decoration-[#9A2C2C] inline-block">Dwarves (with Nick Oliveri on bass)</a><br>
                <a href="https://www.instagram.com/yearofthecobra/" target="_blank" rel="noopener noreferrer" class="alaska text-[#9A2C2C] link-underline decoration-[#9A2C2C]/40 hover:decoration-[#9A2C2C] focus-visible:decoration-[#9A2C2C] inline-block">Year of the Cobra</a><br>
                <a href="https://www.instagram.com/mammothgrinder/" target="_blank" rel="noopener noreferrer" class="alaska text-[#9A2C2C] link-underline decoration-[#9A2C2C]/40 hover:decoration-[#9A2C2C] focus-visible:decoration-[#9A2C2C] inline-block">Mammoth Grinder</a><br>
                <a href="https://www.instagram.com/electrichawkband/" target="_blank" rel="noopener noreferrer" class="alaska text-[#9A2C2C] link-underline decoration-[#9A2C2C]/40 hover:decoration-[#9A2C2C] focus-visible:decoration-[#9A2C2C] inline-block">Electric Hawk</a>
              </p>
            </li>
          </ul>
          <p class="body-copy">A few of the more interesting releases from my discography:
          </p>
        </div>
      </div>
    </div>

    <div v-for="row in discographyRows" :key="row.id" :class="['max-w-[90%] flex space-x-8 px-16 mx-auto', row.margin]">
      <div v-for="album in row.albums" :key="album.title" class="w-full flex flex-col">
        <div>
          <img :src="album.cover" :alt="album.alt" :width="album.width" :height="album.height" loading="lazy" class="w-full"/>
        </div>
        <div>
          <div class="flex justify-between pt-2">
            <p class="leading-snug mb-2">{{ album.title }}<br/>
              <span class="font-thin">{{ album.artist }}</span><br/>
            </p>
            <span class="font-thin">{{ album.year }}</span>
          </div>
          <a :href="album.url"
             target="_blank"
             rel="noopener noreferrer"
             class="inline-block border-t border-almost-black text-sm font-thin pt-2 hover:opacity-80">Bandcamp
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 135.0" class="inline h-[1em] w-[1em] align-text-bottom fill-current">
              <path d="m38.344 56.258 42.738-42.738h-18.137v-7.6367h27.355c2.1094 0 3.8164 1.7109 3.8164 3.8164v27.355h-7.6367v-18.137l-42.738 42.738zm47.102-1.9219h-7.6367v26.793c0 2.9375-2.418 5.3516-5.3516 5.3516h-53.586c-2.9375 0-5.3516-2.4141-5.3516-5.3516v-53.586c0-2.9375 2.4141-5.3516 5.3516-5.3516h26.793v-7.6367h-26.793c-7.1523 0-12.988 5.8359-12.988 12.988v53.586c0 7.1523 5.8398 12.988 12.988 12.988h53.586c7.1523 0 12.988-5.8359 12.988-12.988l0.003907-26.793z" fill-rule="evenodd"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div class="flex px-2 sm:px-4 md:px-8 mt-32">
      <div class="hidden lg:inline w-1/4 lg:pr-8">
      </div>
      <div class="w-full body-column lg:w-3/4">
        <div class="prose-col mt-6 mb-16">
          <h2 class="movement-heading">Personal Music</h2>
          <p class="body-copy">The work now is subtler. I’m focused on the things that take decades.
            In the practice room I’m chasing feel, sound, technique, and vocabulary.
            Always tightening.</p>
          <p class="body-copy">
            <em class="alaska text-3xl">A guiding practice.<br>
              <span class="inline lg:hidden"><br></span>
              A meditation.<br>
              An art.</em>
          </p>
          <ul>
            <li class="text-xl mb-8">
              <p class="pb-2">I’ve had some musical mentors:</p>
              <p>
                <a href="http://www.treygunn.com/bio/" target="_blank" rel="noopener noreferrer" class="alaska text-[#9A2C2C] link-underline decoration-[#9A2C2C]/40 hover:decoration-[#9A2C2C] focus-visible:decoration-[#9A2C2C]">Trey Gunn</a> <span class="text-muted-ink">virtuoso and music coach</span><br>
                <a href="https://alokedutta.com/" target="_blank" rel="noopener noreferrer" class="alaska text-[#9A2C2C] link-underline decoration-[#9A2C2C]/40 hover:decoration-[#9A2C2C] focus-visible:decoration-[#9A2C2C]">Aloke Dutta</a> <span class="text-muted-ink">tabla guru</span><br>
                <a href="https://daveelitch.com/" target="_blank" rel="noopener noreferrer" class="alaska text-[#9A2C2C] link-underline decoration-[#9A2C2C]/40 hover:decoration-[#9A2C2C] focus-visible:decoration-[#9A2C2C]">Dave Elitch</a> <span class="text-muted-ink">drumset master</span><br>
                <a href="https://patrickworley.com/about/" target="_blank" rel="noopener noreferrer" class="alaska text-[#9A2C2C] link-underline decoration-[#9A2C2C]/40 hover:decoration-[#9A2C2C] focus-visible:decoration-[#9A2C2C]">Patrick Worley</a> <span class="text-muted-ink">guitar expert</span></p>
            </li>
          </ul>
          <p class="body-copy">When it’s time to actually make music, solo or with other players, I want it to work more like cooking than composing:</p>
          <ul class="alaska body-copy">
            <li class="text-3xl">I make what I want to eat.</li>
            <li class="text-3xl">I use the available ingredients.</li>
            <li class="text-3xl">I trust my senses.</li>
            <li class="text-3xl">I cook with others in mind.</li>
          </ul>
        </div>
        <p class="body-copy mb-16">
          More about my
          <a href="/philosophy" class="highlight-link">
            philosophy
          </a>
          <br>and
          <a href="/design" class="highlight-link">
            design background</a>.
        </p>
      </div>
    </div>
    <div class="section-panel">
      <div class="w-full flex flex-col md:flex-row pb-0 md:pb-2">
        <div class="mb-4 md:mb-0 md:w-[50%] md:pr-2">
          <img :src="suicidalTragedy" alt="Playing Drums for The Great American Tragedy opening for Suicidal Tendencies in Tucson, AZ" width="1024" height="761" loading="lazy" class="w-full"/>
          <span class="photo-caption">
            2007: Playing drums for The Great American Tragedy opening for Suicidal Tendencies, Tucson, AZ
          </span>
        </div>
        <div class="mb-4 md:mb-0 md:w-[50%] md:pl-2">
          <img :src="cuneiformWestbeachDrums" alt="Recording drums for Cuneiform at Westbeach Studios in Hollywood, CA" width="1024" height="761" loading="lazy" class="w-full"/>
          <span class="photo-caption">
           2007: Recording drums for Cuneiform at Westbeach Studios, Hollywood, CA
          </span>
        </div>
      </div>
      <img :src="bearBaiting" alt="Hanging out with recording equipment in a home garage studio, Eugene, OR" width="3000" height="1346" loading="lazy" class="w-full h-auto border border-gray-400"/>
      <span class="photo-caption mb-2">
        2013: Drumming with Bear Baiting, Oakland, CA
      </span>
    </div>
  </main>
</template>
