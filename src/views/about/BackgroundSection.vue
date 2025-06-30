<script setup>
import BackgroundSummary from '@/components/background/BackgroundSummary.vue'
import backgroundAbstract1 from '@/assets/images/background-abstract-1.png'
import backgroundAbstract2 from '@/assets/images/background-abstract-2.png'
import cuneiformWestbeach from '@/assets/images/CuneiformWestbeachThnxgiving.png'
import fieldAmp from '@/assets/images/alex-field-amp-cropped-1.png'
import geometricLines from '@/assets/images/geometric-diagonal-lines.svg'
</script>

<template>
  <div class="bg-[#F6D9CE] text-[#444244] pt-24">
    <div class="px-8 pb-16">
      <background-summary />
    </div>

    <div class="flex px-8">
      <div class="w-1/4 pr-8">
      </div>
      <div class="w-3/4">
        <div class="max-w-[50%]">
          <div class="max-w-[15ch] mx-auto mt-24 mb-8">
            <p>
              <span class="text-3xl">Life.</span><br><br>
              A difficult balance of avoiding societal norms, while still having a pesky need to survive.
              On this long road, the end goal is mostly unclear.
              Engaging and cultivating something real takes time.<br><br>
              <em class="text-3xl font-thin">It takes...&nbsp;&nbsp;&nbsp;&nbsp;
                So.&nbsp;&nbsp;&nbsp;&nbsp;
                Much.&nbsp;&nbsp;&nbsp;&nbsp;
                Time.</em>

              <br><br>
              I’ve never liked being a cog in a soulless machine.
              I haven’t followed a straight professional path.
              Most things I've done that mattered were born from freelance work, personal projects, and from figuring things out on the fly.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex px-8">
      <div class="w-1/4 pr-8">
      </div>
      <div class="w-3/4">
        <img :src="backgroundAbstract1" alt="Garage music" width="full" class="w-full mb-24"/>
      </div>
    </div>

    <div class="-mt-36 bg-[#c6ccd7] rounded p-16 mr-16 mb-32 mx-8">
      <h2 class="neogeo text-[#3E3D3F] text-7xl tracking-tight mb-3">It's far better to subtly baffle and annoy than to pacify.</h2>
    </div>

    <div class="w-full flex p-8">
      <div class="w-[50%]">
        <div class="max-w-[15ch]">
          <h2 class="neogeo text-5xl/[1] mb-8">Swimming in Sound.</h2>
          <ul class="space-y-6 mb-24 list-none">
            <li class="mb-8 border-l-8 border-[#444244] pl-4">
              <p class="pb-2">I've been starting and joining underground bands since my teens. Probably none you've heard of, but there's been well over a dozen.
                I go into more depth on the music page, here I'll just brag about the fact that my bands have had the pleasure of sharing the stage with some more successful bands that I really like.
                <em>To name a few:</em></p>
              <a href="https://en.wikipedia.org/wiki/Suicidal_Tendencies" target="_blank" class="text-[#9A2C2C] underline hover:opacity-80">Suicidal Tendencies</a><br>
              <a href="https://en.wikipedia.org/wiki/Qui_(band)" target="_blank" class="text-[#9A2C2C] underline hover:opacity-80">Qui (with David Yow on vocals)</a><br>
              <a href="https://en.wikipedia.org/wiki/Dwarves_(band)" target="_blank" class="text-[#9A2C2C] underline hover:opacity-80">Dwarves (with Nick Oliveri on bass)</a><br>
              <a href="https://en.wikipedia.org/wiki/Author_&amp;_Punisher" target="_blank" class="text-[#9A2C2C] underline hover:opacity-80">Author and Punisher</a><br>
              <a href="https://www.instagram.com/yearofthecobra/" target="_blank" class="text-[#9A2C2C] underline hover:opacity-80">Year of the Cobra</a><br>
              <a href="https://www.instagram.com/mammothgrinder/" target="_blank" class="text-[#9A2C2C] underline hover:opacity-80">Mammoth Grinder</a><br>
              <a href="https://www.instagram.com/electrichawkband/" target="_blank" class="text-[#9A2C2C] underline hover:opacity-80">Electric Hawk</a>
            </li>
            <li class="mb-8 border-l-8 border-[#444244] pl-4">
              <p class="pb-2"><em>I have some musical mentors:</em></p>
              <p>
                <a href="http://www.treygunn.com/bio/" target="_blank" class="text-[#9A2C2C] underline hover:opacity-80">Trey Gunn</a> - virtuoso music coach<br>
                <a href="https://alokedutta.com/" target="_blank" class="text-[#9A2C2C] underline hover:opacity-80">Aloke Dutta</a> - tabla guru<br>
                <a href="https://daveelitch.com/" target="_blank" class="text-[#9A2C2C] underline hover:opacity-80">Dave Elitch</a> - drumset master<br>
                <a href="https://patrickworley.com/about/" target="_blank" class="text-[#9A2C2C] underline hover:opacity-80">Patrick Worley</a> - guitar expert</p>
            </li>
            <li class="mb-8 border-l-8 border-[#444244] pl-4">
              <p class="pb-2">I engineered in-house at the legendary San Francisco recording studio Hyde Street Studios and worked as a live sound engineer at Club Congress in Tucson’s Congress Hotel.
                <em>The artists I’ve worked with have included:</em></p>
              <p>
                <a href="https://en.wikipedia.org/wiki/George_Clinton_(funk_musician)" target="_blank" class="text-[#9A2C2C] underline hover:opacity-80">George Clinton and the P-Funk All Stars</a><br>
                <a href="https://en.wikipedia.org/wiki/Hieroglyphics_(group)" target="_blank" class="text-[#9A2C2C] underline hover:opacity-80">Michael Manring</a><br>
                <a href="https://en.wikipedia.org/wiki/Michael_Manring" target="_blank" class="text-[#9A2C2C] underline hover:opacity-80">Hieroglyphics</a><br>
                <a href="https://en.wikipedia.org/wiki/Ziggy_Modeliste" target="_blank" class="text-[#9A2C2C] underline hover:opacity-80">Ziggy Modeliste</a><br>
                <a href="https://en.wikipedia.org/wiki/Sage_Francis" target="_blank" class="text-[#9A2C2C] underline hover:opacity-80">Sage Francis</a>
              </p>
            </li>
          </ul>
          <h2 class="neogeo text-5xl/[1] mb-8">Design/Tech Entanglements.</h2>
          <ul class="space-y-6 mb-24 list-none">
            <li class="mb-8 border-l-8 border-[#444244] pl-4">
              I used my design and tech skills to help set the wheels in motion for the artist-friendly music streaming alternative
              <a href="https://resonate.coop/" target="_blank" class="text-[#9A2C2C] underline hover:opacity-80">Resonate</a>.
            </li>
            <li class="mb-8 border-l-8 border-[#444244] pl-4">
              I collaborated with an engineer friend to create the
              <a href="https://alexcrane.xyz/kinetic-beats/" target="_blank" class="text-[#9A2C2C] underline hover:opacity-80">Kinetic Beats</a> air drumming iPhone app.
            </li>
            <li class="mb-8 border-l-8 border-[#444244] pl-4">
              <p class="pb-2"><em>I was hired to build websites for some musicians I admire:</em></p>
              <p>
                <a href="https://daveelitch.com/" target="_blank" class="text-[#9A2C2C] underline hover:opacity-80">Dave Elitch</a><br>
                <a href="https://www.trevordunn.net/" target="_blank" class="text-[#9A2C2C] underline hover:opacity-80">Trevor Dunn</a><br>
                <a href="https://alokedutta.com/" target="_blank" class="text-[#9A2C2C] underline hover:opacity-80">Aloke Dutta</a><br>
                Dunable Guitars
              </p>
            </li>
            <li class="mb-8 border-l-8 border-[#444244] pl-4">
              I spent years as part of a team designing equipment for positron emission tomography (PET) scans at a tech startup called
              <a href="https://sofie.com/" target="_blank" class="text-[#9A2C2C] underline hover:opacity-80">Sofie Biosciences</a>.
            </li>
          </ul>
        </div>
      </div>

      <!-- Right Side: Image Display -->
      <div class="w-[50%]">
        <div class="relative h-full">
          <div class="sticky top-32 z-10">
            <img :src="cuneiformWestbeach" alt="Garage music" width="full" class="mx-auto mb-24"/>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-5xl px-8">
      <img :src="backgroundAbstract2" alt="Garage music" width="full"/>
    </div>

    <div class="w-full mb-24 flex pt-8 pb-8 pl-8">
      <div class="w-[50%]">
        <div class="relative h-full">
          <div class="sticky top-32 z-10">
            <img :src="fieldAmp" alt="Sitting in a field adjusting an amplifier" width="full"/>
          </div>
        </div>
      </div>
      <div class="w-[50%]">
        <div class="max-w-[15ch] pl-4 mb-[36rem]">
          <p class="mb-8">
            I didn’t know the word “ideology” when I first felt it, but I knew it was everywhere.
            Trying to make sense of the world involves plodding through a web of conflicting beliefs. Each one louder than the last. That’s what makes life fascinating. And exhausting.
          </p>
          <p class="mb-8">
            I was born in upstate New York, spent my childhood in the mountains of western Massachusetts, then landed in rural Arizona at thirteen. The desert, border towns, a different world entirely.
            Since then: San Francisco. Tucson. L.A. Vegas. Eugene.
          </p>
          <p>
            I’ve worked with people from just about every walk of life. That’s been one of the great joys.
            But what they believe? That’s the puzzle.
            I’ve never done well with ready-made worldviews. I’m not wired for doctrine.
            Maybe that’s why I ended up here — chasing meaning the only way I know how: through art, through work, through rhythm.
          </p>
        </div>
        <span class="pl-4 font-thin italic">2020: Playing with an amplifier in a field.</span>
      </div>
    </div>
  </div>
</template>
