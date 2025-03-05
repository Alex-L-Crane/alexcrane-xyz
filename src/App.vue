<script setup>
  /* import { RouterLink, RouterView } from 'vue-router' */
  import Banner from '@/components/PhilosophyBanner.vue'
  import garagePhoto from '@/assets/images/garage-photo-3-31-24-v14.png';
</script>

<template>
  <div>
    <!--<div>
      <RouterLink to="/">Projects</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </div>
    <div>
      <strong>Current route path:</strong> {{ $route.fullPath }}
      <RouterView />
    </div>-->
    <Banner />

    <!-- tagline -->
    <div class="p-4 lg:p-16">
      <div class="flex justify-center mt-16 mb-6">
        <h2 class="neogeo text-5xl/[1] w-[42rem]">Methodical <br>non-utilitarianism.</h2>
      </div>
      <div class="flex justify-center mb-32">
        <p class="text-2xl/[1.4] font-thin max-w-2xl pl-32">A context where making things up, making mistakes, and being wrong are all part of the creative process. Growth, development, and enjoyment, not utility. Slowing down and embracing nuance as an antidote to a world obsessed with short-sighted productivity.</p>
      </div>
    </div>

    <!-- summary -->
    <div class="bg-punk-yellow text-black px-4 lg:px-16 pt-4 lg:pt-16 pb-[16%] overflow-hidden relative z-0">
      <div class="w-[1000px] absolute top-[-200px] right-[-240px]">
        <svg width="auto" height="auto" viewBox="0 0 1868 1577" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Studio-Display-Copy-2" transform="translate(-561, -4061)">
              <g id="Group-12" transform="translate(561.5, 3431.5)">
                <g id="Group-3" transform="translate(0, 630)">
                  <ellipse id="Oval" fill="#000000" transform="translate(941.6589, 788.6652) rotate(15) translate(-941.6589, -788.6652)" cx="941.658933" cy="788.665183" rx="340" ry="269.5"></ellipse>
                  <g id="circle-ring" transform="translate(933.5, 788) rotate(90) translate(-933.5, -788)translate(145.5, -145.5)" fill="#1C1C1C">
                    <path d="M474.184532,1831.9127 C873.26761,1971.44664 1337.28439,1682.33335 1510.59909,1186.15395 C1683.91379,689.974549 1500.8944,174.624681 1101.81132,35.0880514 C702.732715,-104.44813 238.715936,184.667846 65.4007898,680.847249 C-107.913461,1177.02665 75.1054818,1692.37428 474.184532,1831.9127 Z M479.690422,1816.14818 C871.768038,1953.23683 1327.64684,1669.19327 1497.92211,1181.72018 C1668.1929,694.247093 1488.38752,187.938089 1096.30543,50.8498872 C704.22781,-86.2387626 248.353483,197.805247 78.0782152,685.281021 C-92.1957097,1172.75411 87.6123589,1679.05953 479.690422,1816.14818 Z" id="Shape"></path>
                    <path d="M529.344311,1672.57522 C858.280193,1787.59983 1240.74109,1549.27667 1383.5923,1140.26792 C1526.44798,731.259174 1375.59621,306.445789 1046.65586,191.42386 C717.719973,76.4014821 335.259075,314.724195 192.406077,723.732943 C49.5535262,1132.74169 200.403955,1557.55508 529.344311,1672.57522 Z M534.848054,1656.81983 C856.785681,1769.3954 1231.1073,1536.14047 1370.92027,1135.83546 C1510.73323,735.530455 1363.09421,319.756606 1041.15211,207.180589 C719.214486,94.6059152 344.892862,327.860399 205.079899,728.165405 C65.2651455,1128.47041 212.905952,1544.24426 534.848054,1656.81983 Z" id="Shape"></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div class="flex justify-center mt-[450px] mb-6">
        <h2 class="neogeo text-5xl/[1] w-[42rem]">Sound. <br>Simultaneously<br/>ubiquitous and<br/>subversive.</h2>
      </div>
      <div class="flex justify-center mb-32">
        <p class="text-2xl/[1.4] font-thin max-w-2xl pl-32">I don’t believe in magic, but I've seen the unfettered power of sound. Deeply misunderstood and underappreciated, it has permeated every aspect of my life and has been my gateway to learning about visual arts, computer science, electronics, culture, psychology, politics, and, of course, music.</p>
      </div>
    </div>

    <!-- manifesto -->
    <div class="bg-white text-black p-4 lg:p-16">
      <img :src="garagePhoto" alt="Garage music" width="full" class="-mt-[24%] relative z-30"/>

      <div class="flex justify-center mt-16 mb-12">
        <h2 class="neogeo text-5xl/[1] w-[42rem]">Systems. <br/>Patterns. <br/>Perception.</h2>
      </div>
      <div class="flex justify-center mb-6">
        <div class="max-w-2xl">
          <h2 class="neogeo text-5xl/[1] w-[42rem] pl-32">A Manifesto:</h2>
        </div>
      </div>
      <div class="flex justify-center mb-16">
        <p class="text-2xl/[1.4] font-thin max-w-2xl pl-32">By default, the mainstream is not conducive to awareness. Subvert mainstream thinking via both process and aesthetic.</p>
      </div>
      <div class="flex justify-center mb-16">
        <p class="text-2xl/[1.4] font-thin max-w-2xl pl-32">No genres. They are not useful.</p>
      </div>
      <div class="flex justify-center mb-16">
        <p class="text-2xl/[1.4] font-thin max-w-2xl pl-32">Professional quality work can be meaningful, but “buttoned up" is not an aesthetic worth pursuing.</p>
      </div>
      <div class="flex justify-center mb-16">
        <p class="text-2xl/[1.4] font-thin max-w-2xl pl-32">Improvisation is a core tenant of creativity. The unpredictable and fleeting nature is directly tied to the flow of reality.</p>
      </div>
      <div class="flex justify-center mb-16">
        <p class="text-2xl/[1.4] font-thin max-w-2xl pl-32">Always be open to experimentation, even if that means experimenting with embracing mainstream thinking.</p>
      </div>
      <div class="flex justify-center mb-16">
        <p class="text-2xl/[1.4] font-thin max-w-2xl pl-32">The idea of "progress" is irrelevant. Being present and grounded overrides black and white dogmas.</p>
      </div>
      <div class="flex justify-center mb-16">
        <p class="text-2xl/[1.4] font-thin max-w-2xl pl-32">Don't hesitate to throw away or redo work. Also, don't get stuck in a loop where nothing is ever finished.</p>
      </div>
      <div class="flex justify-center mb-16">
        <p class="text-2xl/[1.4] font-thin max-w-2xl pl-32">The act of developing and exploring a creative process is more valuable than any creative output.</p>
      </div>
      <div class="flex justify-center mb-16">
        <p class="text-2xl/[1.4] font-thin max-w-2xl pl-32">Art does not need to be accessible.</p>
      </div>
      <div class="flex justify-center mb-32">
        <p class="text-2xl/[1.4] font-thin max-w-2xl pl-32">There is nothing to work towards. You are already there and have always been there.</p>
      </div>
    </div>

    <!-- footer -->
    <div class="bg-almost-black h-[600px]">
      <p>Sign up to receive occasional emails.<br/>
      I share projects, learnings, and inspirations.</p>



    </div>
  </div>
</template>
