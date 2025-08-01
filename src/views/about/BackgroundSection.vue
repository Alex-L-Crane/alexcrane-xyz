<script setup>
import backgroundAbstract1 from '@/assets/images/background-abstract-1.png'
import backgroundAbstract2 from '@/assets/images/background-abstract-2.png'
import cuneiformWestbeach from '@/assets/images/CuneiformWestbeachThnxgiving.png'
import fieldAmp from '@/assets/images/alex-field-amp-cropped-1.png'
import garagePhoto from '@/assets/images/garage-photo-cropped.png'
</script>

<template>
  <div class="bg-[#F6D9CE] text-[#444244] pt-24">
    <div class="px-2 sm:px-4 md:px-8 lg:pb-16">
      <div class="lg:pt-78 pt-16">
        <h2 class="neogeo text-5xl/[1] mb-3">All tech and no music <span class="hidden lg:inline"><br></span>makes Alex a dull boy.</h2>
      </div>
      <img :src="garagePhoto" alt="Garage music" width="auto" class="w-full max-w-6xl h-auto"/>
    </div>

    <div class="flex px-2 sm:px-4 md:px-8 ">
      <div class="hidden lg:inline w-1/4 lg:pr-8">
      </div>
      <div class="w-full lg:w-3/4">
        <div class="md:max-w-[15ch] mt-8 lg:mt-24 mb-8">
          <p class="mb-8">
            <span class="text-3xl">Life.</span><br><br>
            A difficult balance of avoiding societal norms, while still having a pesky need to survive.
            On this long road, the outcome is unclear.
            Engaging and cultivating something real takes time.<br><br>
            <em class="text-3xl font-thin">It takes...&nbsp;&nbsp;&nbsp;&nbsp;
              <span class="inline lg:hidden"><br></span>
              So.&nbsp;&nbsp;&nbsp;&nbsp;
              Much.&nbsp;&nbsp;&nbsp;&nbsp;
              Time.</em>
          </p>
          <p>
            I’ve never liked being a cog in a soulless machine.
            I haven’t followed a straight professional path.
            Most things I've done that mattered were born from personal projects, from freelance work, and from figuring things out on the fly.
          </p>
        </div>
      </div>
    </div>

    <div class="flex px-2 md:px-8">
      <div class="invisible lg:w-1/4 lg:pr-8">
      </div>
      <div class="w-full lg:w-3/4">
        <img :src="backgroundAbstract1" alt="Garage music" width="full" class="w-full mb-4 lg:mb-24"/>
      </div>
    </div>

    <div class="lg:-mt-36 md:bg-[#FF7CEA] lg:rounded md:p-4 lg:p-16 lg:mr-16 mb-16 lg:mb-32 mx-2 md:mx-8">
      <h2 class="neogeo text-black text-5xl lg:text-7xl tracking-tight lg:mb-3">It's far better to subtly baffle and annoy than to pacify.</h2>
    </div>

    <div class="w-full flex flex-col lg:flex-row-reverse p-2 md:p-8">
      <!-- Right Side: Image Display -->
      <div class="md:w-[50%]">
        <div class="relative h-full">
          <div class="lg:sticky lg:top-32 z-10">
            <img :src="cuneiformWestbeach" alt="Garage music" width="full" class="mx-auto mb-4 md:mb-24"/>
          </div>
        </div>
      </div>

      <div class="md:w-[50%]">
        <div class="md:max-w-[15ch]">
          <h2 class="neogeo text-5xl/[1] mb-8">Swimming in Sound.</h2>
          <ul class="space-y-6 mb-24 list-none">
            <li class="mb-8 border-l-8 border-[#444244] pl-4">
              <p class="pb-2">I've been starting and joining underground bands since my teens. You haven't heard them, but there's been well over a dozen.
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
          <ul class="space-y-6 md:mb-24 list-none">
            <li class="mb-8 border-l-8 border-[#444244] pl-4">
              I used my design and tech skills to help set the wheels in motion for the artist-friendly music streaming alternative
              <a href="https://resonate.coop/" target="_blank" class="text-[#9A2C2C] underline hover:opacity-80">Resonate</a>.
            </li>
            <li class="mb-8 border-l-8 border-[#444244] pl-4">
              I collaborated with an engineer friend to create
              <a href="https://www.behance.net/gallery/58350023/KineticBeats-Music-App" target="_blank" class="text-[#9A2C2C] underline hover:opacity-80">Kinetic Beats</a>, an iPhone app for air drumming.
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
              I spent years attempting to beautify equipment and software for positron emission tomography (PET) scans at a tech startup called
              <a href="https://sofie.com/" target="_blank" class="text-[#9A2C2C] underline hover:opacity-80">Sofie Biosciences</a>.
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="max-w-5xl p-2 md:px-8">
      <img :src="backgroundAbstract2" alt="Garage music" width="full"/>
    </div>

    <div class="w-full mb-24 flex flex-col md:flex-row-reverse pt-8 pb-8 md:pl-8">
      <div class="md:w-[50%]">
        <div class="md:max-w-[15ch] pl-4 md:mb-8">
          <p class="mb-8">
            I didn’t know the word “ideology” when I first felt it, but I knew it was everywhere.
            Trying to make sense of the world involves plodding through a web of conflicting beliefs.
            Each one louder than the last.<br><br>
            <em>That’s what makes life <strike>exhausting</strike> fascinating.<br>
            That’s what makes life exhausting <strike>fascinating</strike>.</em>
          </p>
          <p class="mb-8">
            <em class="text-3xl font-thin">Maybe none of it is supposed to make sense...</em>
          </p>
          <p class="leading-10 mb-8">
            I was born in upstate
            <span class="text-3xl font-thin">New York,</span>
            spent my childhood in the mountains of western
            <span class="text-3xl font-thin">Massachusetts,</span>
            then landed in rural
            <span class="text-3xl font-thin">Arizona</span>
            at thirteen. The desert, border towns, a different world entirely.
          </p>

          <ul class="mb-8">
            <li>Since then:</li>
            <li class="text-3xl font-thin">San Francisco</li>
            <li class="text-3xl font-thin">Tucson</li>
            <li class="text-3xl font-thin">L.A.</li>
            <li class="text-3xl font-thin">Vegas</li>
            <li class="text-3xl font-thin">Eugene</li>
          </ul>
          <p>
            In these different situations, I’ve worked with an unclassifiable blend of people from drastically different walks of life.
            I haven't found a believable ready-made worldview. That feeling only gets stronger. I’m not wired for doctrine.
            Maybe that’s why I ended up here. Discovering meaning the only way I know how: through art, through work, through rhythm.
          </p>
        </div>
      </div>

      <div class="md:w-[50%]">
        <div class="relative h-full p-2 md:p-0">
          <div class="sticky top-32 z-10">
            <img :src="fieldAmp" alt="Sitting in a field adjusting an amplifier" width="full"/>
            <span class="font-thin italic">2020: Playing with an amplifier in a field.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
