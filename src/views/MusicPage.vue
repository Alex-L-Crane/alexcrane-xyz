<script setup>
import bearBaiting from '@/assets/images/music/bear-baiting-roosters.png?w=1400&format=webp&quality=82'
import bearBaitingSrcset from '@/assets/images/music/bear-baiting-roosters.png?w=480;800;1400&format=webp&quality=82&as=srcset'
import manifestoAbstract from '@/assets/images/manifesto-abstract.png?w=1024&format=webp&quality=82'
import manifestoAbstractSrcset from '@/assets/images/manifesto-abstract.png?w=480;800;1024&format=webp&quality=82&as=srcset'
import sreCover from '@/assets/images/music/SRE-cover.jpg?w=800&format=webp&quality=82'
import sreCoverSrcset from '@/assets/images/music/SRE-cover.jpg?w=400;800&format=webp&quality=82&as=srcset'
import wavesCover from '@/assets/images/music/After-the-Waves-Devour-us-All_cover.jpg?w=800&format=webp&quality=82'
import wavesCoverSrcset from '@/assets/images/music/After-the-Waves-Devour-us-All_cover.jpg?w=400;800&format=webp&quality=82&as=srcset'
import whiteLightCover from '@/assets/images/music/White light.png?w=800&format=webp&quality=82'
import whiteLightCoverSrcset from '@/assets/images/music/White light.png?w=400;800&format=webp&quality=82&as=srcset'
import holyDoseCover from '@/assets/images/music/Holy-Dose-Album-Cover.jpg?w=800&format=webp&quality=82'
import holyDoseCoverSrcset from '@/assets/images/music/Holy-Dose-Album-Cover.jpg?w=400;800&format=webp&quality=82&as=srcset'
import cuneiformCover from '@/assets/images/music/Cuneiform-Tabula-Rasa-beach-cover.jpg?w=800&format=webp&quality=82'
import cuneiformCoverSrcset from '@/assets/images/music/Cuneiform-Tabula-Rasa-beach-cover.jpg?w=400;800&format=webp&quality=82&as=srcset'
import directActionCover from '@/assets/images/music/Direct-Action-Cassette-photo-1.jpg?w=800&format=webp&quality=82'
import directActionCoverSrcset from '@/assets/images/music/Direct-Action-Cassette-photo-1.jpg?w=400;800&format=webp&quality=82&as=srcset'
import cuneiformWestbeachDrums from '@/assets/images/music/Cuneiform-Westbeach-drums.jpg?w=800&format=webp&quality=82'
import cuneiformWestbeachDrumsSrcset from '@/assets/images/music/Cuneiform-Westbeach-drums.jpg?w=400;800&format=webp&quality=82&as=srcset'
import suicidalTragedy from '@/assets/images/music/suicidal-tragedy-action-bw.png?w=800&format=webp&quality=82'
import suicidalTragedySrcset from '@/assets/images/music/suicidal-tragedy-action-bw.png?w=400;800&format=webp&quality=82&as=srcset'
import EyebrowNav from '@/components/navigation/EyebrowNav.vue'

const albums = [
  { cover: sreCover, coverSrcset: sreCoverSrcset, width: 1920, height: 1920, alt: 'TCA Soothing Rays of eternity album cover', title: 'Soothing Rays of Eternity', artist: 'TCA', year: '2017', url: 'https://thecruelestanimal.bandcamp.com/album/soothing-rays-of-eternity' },
  { cover: wavesCover, coverSrcset: wavesCoverSrcset, width: 1000, height: 1000, alt: 'TCA After the Waves Devour Us All album cover', title: 'After the Waves Devour Us All', artist: 'TCA', year: '2014', url: 'https://thecruelestanimal.bandcamp.com/album/after-the-waves-devour-us-all' },
  { cover: whiteLightCover, coverSrcset: whiteLightCoverSrcset, width: 1958, height: 1954, alt: 'TCA White Light and the Empire Collapse album cover', title: 'White Light and the Empire Collapse', artist: 'TCA', year: '2012', url: 'https://thecruelestanimal.bandcamp.com/album/white-light-and-the-empire-collapse' },
  { cover: holyDoseCover, coverSrcset: holyDoseCoverSrcset, width: 2700, height: 2700, alt: 'Holy Dose EP album cover', title: 'Holy Dose EP', artist: 'Holy Dose', year: '2008', url: 'https://holydose.bandcamp.com/album/holy-dose' },
  { cover: cuneiformCover, coverSrcset: cuneiformCoverSrcset, width: 2700, height: 2700, alt: 'Cuneiform Tabula Rasa album cover', title: 'Tabula Rasa', artist: 'Cuneiform', year: '2008', url: 'https://cuneiformband.bandcamp.com/album/tabula-rasa' },
  { cover: directActionCover, coverSrcset: directActionCoverSrcset, width: 1773, height: 1773, alt: 'Direct Action Free Him cassette cover', title: 'Free Him', artist: 'Direct Action', year: '1997', url: 'https://dissonantdreamland.bandcamp.com/album/direct-action-free-him' },
]
</script>

<template>
  <main class="atacamamedium bg-stock-yellow text-[#444244] pt-14 lg:pt-20 text-black">

    <div class="section-panel">
      <img :src="manifestoAbstract" :srcset="manifestoAbstractSrcset" sizes="(min-width: 1024px) 1400px, 100vw" alt="Garage music" width="1024" height="248" class="aspect-[3/2] md:aspect-[21/9] md:max-h-[40vh] lg:aspect-[1024/248] lg:max-h-none w-full object-cover object-[70%_center]"/>
      <EyebrowNav parent-label="About" parent-href="/about" current-label="Music" />
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
            <p class="text-xl pb-2">I’ve engineered for some artists:</p>
            <ul class="text-xl mb-8">
              <li><a href="https://en.wikipedia.org/wiki/George_Clinton_(funk_musician)" target="_blank" rel="noopener noreferrer" class="link-list">George Clinton and the P-Funk All Stars</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Michael_Manring" target="_blank" rel="noopener noreferrer" class="link-list">Michael Manring</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Hieroglyphics_(group)" target="_blank" rel="noopener noreferrer" class="link-list">Hieroglyphics</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Ziggy_Modeliste" target="_blank" rel="noopener noreferrer" class="link-list">Ziggy Modeliste</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Sage_Francis" target="_blank" rel="noopener noreferrer" class="link-list">Sage Francis</a></li>
            </ul>
          </div>
        </div>

        <div class="prose-col md:mb-8">
          <p class="body-copy">
            Underground music has been part of who I am since my teens.
            DIY bands like Fugazi were the blueprint: book it yourself, record it yourself, answer to no one.
            I’ve played in a long line of little-known bands. None of them made me famous. All of them made me who I am.
          </p>
          <p class="text-xl pb-2">I’ve opened for some bands I like:</p>
          <ul class="text-xl mb-8">
            <li><a href="https://en.wikipedia.org/wiki/Suicidal_Tendencies" target="_blank" rel="noopener noreferrer" class="link-list">Suicidal Tendencies</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Author_&amp;_Punisher" target="_blank" rel="noopener noreferrer" class="link-list">Author and Punisher</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Qui_(band)" target="_blank" rel="noopener noreferrer" class="link-list">Qui (with David Yow on vocals)</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Dwarves_(band)" target="_blank" rel="noopener noreferrer" class="link-list">Dwarves (with Nick Oliveri on bass)</a></li>
            <li><a href="https://www.instagram.com/yearofthecobra/" target="_blank" rel="noopener noreferrer" class="link-list">Year of the Cobra</a></li>
            <li><a href="https://www.instagram.com/mammothgrinder/" target="_blank" rel="noopener noreferrer" class="link-list">Mammoth Grinder</a></li>
            <li><a href="https://www.instagram.com/electrichawkband/" target="_blank" rel="noopener noreferrer" class="link-list">Electric Hawk</a></li>
          </ul>
          <p class="body-copy">A few of the more interesting releases from my discography:
          </p>
        </div>
      </div>
    </div>

    <div class="px-10 md:max-w-[90%] md:px-16 mx-auto mb-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
        <div v-for="album in albums" :key="album.title" class="flex flex-col">
          <div>
            <img :src="album.cover" :srcset="album.coverSrcset" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" :alt="album.alt" :width="album.width" :height="album.height" loading="lazy" class="w-full"/>
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
    </div>

    <div class="flex px-2 sm:px-4 md:px-8 mt-16 md:mt-24 lg:mt-32">
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
          <p class="text-xl pb-2">I’ve had some musical mentors:</p>
          <ul class="text-xl mb-8">
            <li><a href="http://www.treygunn.com/bio/" target="_blank" rel="noopener noreferrer" class="link-list">Trey Gunn</a> <span class="text-muted-ink">virtuoso and music coach</span></li>
            <li><a href="https://alokedutta.com/" target="_blank" rel="noopener noreferrer" class="link-list">Aloke Dutta</a> <span class="text-muted-ink">tabla guru</span></li>
            <li><a href="https://daveelitch.com/" target="_blank" rel="noopener noreferrer" class="link-list">Dave Elitch</a> <span class="text-muted-ink">drumset master</span></li>
            <li><a href="https://patrickworley.com/about/" target="_blank" rel="noopener noreferrer" class="link-list">Patrick Worley</a> <span class="text-muted-ink">guitar expert</span></li>
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
          <a href="/design" class="highlight-link">
            design background</a> <br>and my
          <a href="/philosophy" class="highlight-link">
            philosophy</a>.
        </p>
      </div>
    </div>
    <div class="section-panel">
      <div class="w-full flex flex-col md:flex-row pb-0 md:pb-2">
        <div class="mb-4 md:mb-0 md:w-[50%] md:pr-2">
          <img :src="suicidalTragedy" :srcset="suicidalTragedySrcset" sizes="(min-width: 768px) 50vw, 100vw" alt="Playing Drums for The Great American Tragedy opening for Suicidal Tendencies in Tucson, AZ" width="1600" height="1200" loading="lazy" class="w-full"/>
          <span class="photo-caption">
            2007: Playing drums for The Great American Tragedy opening for Suicidal Tendencies, Tucson, AZ
          </span>
        </div>
        <div class="mb-4 md:mb-0 md:w-[50%] md:pl-2">
          <img :src="cuneiformWestbeachDrums" :srcset="cuneiformWestbeachDrumsSrcset" sizes="(min-width: 768px) 50vw, 100vw" alt="Recording drums for Cuneiform at Westbeach Studios in Hollywood, CA" width="1600" height="1200" loading="lazy" class="w-full"/>
          <span class="photo-caption">
           2007: Recording drums for Cuneiform at Westbeach Studios, Hollywood, CA
          </span>
        </div>
      </div>
      <img :src="bearBaiting" :srcset="bearBaitingSrcset" sizes="(min-width: 1024px) 1400px, 100vw" alt="Hanging out with recording equipment in a home garage studio, Eugene, OR" width="3000" height="1346" loading="lazy" class="w-full h-auto"/>
      <span class="photo-caption mb-2">
        2013: Drumming with Bear Baiting, Oakland, CA
      </span>
    </div>
  </main>
</template>
