<script setup>
 // import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <div style="height: 100vh;" class="w-full overflow-hidden">
      <div class="absolute top-[45%] lg:top-[40%] left-1/2 -translate-y-1/2 -translate-x-1/2 w-full text-center p-6">
        <h1 id="variable-text" class="text-scramble crystal text-4xl lg:text-6xl text-punk-yellow">Perfectionism Kills.</h1>
      </div>
      <!--<image src="./images/about-abstract-header-1.png" width="3000" height="1685" class="w-full h-full object-cover object-left-top"/>-->
      <img :src="philosophyBanner" alt="Abstract Philosophy Banner" width="3000" height="1685" class="w-full h-full object-cover object-left-top"/>
    </div>
    <div class="w-full -mt-[168px] lg:-mt-[194px]">
      <svg width="100%" height="100%" viewBox="0 0 2561 1161" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>banner-waves</title>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Studio-Display-Copy" transform="translate(0, -1210)">
            <g id="banner-waves" transform="translate(1280.7503, 1790.2503) rotate(90) translate(-1280.7503, -1790.2503)translate(700.5007, 510)">
              <path d="M-703.002659,704.000659 L-703.001789,993.164112 C-702.48228,992.962267 -701.730451,992.766669 -700.740917,992.593466 L-700.302261,992.520655 L-699.813847,992.447969 C-696.031451,991.915959 -689.56206,991.688351 -680.203015,992.37284 C-588.725499,1002.30398 -472.237276,1007.09832 -340.674107,976.962457 C-285.609439,964.325944 -207.968257,942.709081 -122.296286,918.531667 L-64.871109,902.307715 C-43.6427633,896.31579 -22.1531,890.25131 -0.590390005,884.191939 L14.1205668,880.062253 L27.3688235,876.35141 L47.2343034,870.804582 C114.511453,852.059186 181.146247,833.921664 241.424394,818.749196 C422.323752,773.545407 851.617114,964.291698 950.632103,1008.12568 L954.743452,1009.83794 L955.835727,1010.34429 C959.763676,1012.17328 962.851946,1013.69054 965.364437,1014.63228 C970.503623,1016.687 975.300197,1018.74172 979.754159,1020.79643 L984.783534,1023.0108 C1023.53783,1040.03188 1028.08992,1040.43954 1094.52932,1026.96059 C1170.58928,1011.89266 1367.93403,953.675657 1494.70063,908.814321 C1605.70705,869.432232 1708.49078,871.48695 1798.59784,873.199214 C1810.53217,873.827045 1822.7544,873.879364 1833.68112,873.883724 L1836.62782,873.88412 C1847.45228,873.88412 1853.54336,875.066915 1856.00066,876.608187 L1856.00066,1856.00066 L-704.000659,1856.00066 L-704.000659,704.000659 L-703.002659,704.000659 Z" id="Path" fill="#1C1C1C" transform="translate(576, 1280.0007) rotate(-90) translate(-576, -1280.0007)"></path>
              <path d="M71.0317155,21.1916744 C70.0023635,119.850508 61.0813129,235.980176 106.029683,362.729371 C150.978053,489.478567 209.307999,686.796233 224.405162,762.84575 C239.502325,838.895268 237.100503,833.756787 211.709821,891.650338 C186.319138,949.54389 -32.9328355,1423.31183 15.4467081,1615.49101 C63.4831343,1807.6702 143.772589,2065.96451 173.966914,2197.16705 C204.16124,2328.71216 199.357597,2445.1844 189.407194,2536.64936 C186.662256,2569.53563 193.86772,2566.10998 197.985128,2540.41758 C202.102536,2514.72517 222.346458,2349.95122 181.858613,2195.11166 C141.370768,2040.2721 47.0135024,1731.27812 34.6612785,1629.19363 C21.9659373,1527.10914 23.3384067,1509.29574 36.0337479,1445.92114 C48.7290891,1382.54655 116.66632,1158.16621 228.52257,891.650338 C244.649084,852.255318 263.520538,846.431706 234.012447,736.468215 C204.16124,626.504724 147.889997,455.907158 114.264499,337.379532 C80.6390008,218.851906 76.5215928,204.46416 82.6977047,21.5342398 C83.7270567,2.69314321 71.0317155,-14.4351264 71.0317155,21.5342398 L71.0317155,21.1916744 Z" id="Path" fill="#FBC028" fill-rule="nonzero"></path>
              <path d="M170.031716,21.1916744 C169.002364,119.850508 160.081313,235.980176 205.029683,362.729371 C249.978053,489.478567 308.307999,686.796233 323.405162,762.84575 C338.845442,838.895268 336.100503,833.756787 310.709821,891.650338 C285.319138,949.54389 66.0671645,1423.31183 114.446708,1615.49101 C162.483134,1807.6702 242.772589,2065.96451 272.966914,2197.16705 C303.16124,2328.71216 298.357597,2445.1844 288.407194,2536.64936 C285.662256,2569.53563 292.86772,2566.10998 296.985128,2540.41758 C301.102536,2514.72517 321.346458,2349.95122 280.858613,2195.11166 C240.370768,2040.2721 146.013502,1731.27812 133.661279,1629.19363 C120.965937,1527.10914 122.338407,1509.29574 135.033748,1445.92114 C147.729089,1382.54655 215.66632,1158.16621 327.52257,891.650338 C343.649084,852.255318 362.520538,846.431706 333.012447,736.468215 C303.16124,626.504724 246.889997,455.907158 213.264499,337.379532 C179.639001,218.851906 175.521593,204.46416 181.697705,21.5342398 C182.727057,2.69314321 170.031716,-14.4351264 170.031716,21.5342398 L170.031716,21.1916744 Z" id="Path" fill="#FFFFFF" fill-rule="nonzero"></path>
              <path d="M440.031716,21.2559415 C439.002364,119.912278 430.081313,236.039007 475.029683,362.784994 C519.978053,489.530982 578.307999,686.843655 593.405162,762.891247 C608.845442,838.93884 606.100503,833.800489 580.709821,891.692575 C555.319138,949.584661 336.067165,1423.34061 384.446708,1615.51493 C432.483134,1807.68925 512.772589,2065.97702 542.966914,2197.17625 C573.16124,2328.71803 568.357597,2445.18731 558.407194,2536.64996 C555.662256,2569.53541 562.86772,2566.10984 566.985128,2540.41808 C571.102536,2514.72633 591.346458,2349.95655 550.858613,2195.12091 C510.370768,2040.28527 416.013502,1731.2991 403.661279,1629.2172 C390.965937,1527.1353 392.338407,1509.32235 405.033748,1445.94935 C417.729089,1382.57636 485.66632,1158.20171 597.52257,891.692575 C613.649084,852.298552 632.520538,846.475088 603.012447,736.514379 C573.16124,626.553671 516.889997,455.960423 483.264499,337.435797 C449.639001,218.911171 445.521593,204.523788 451.697705,21.5984982 C452.727057,2.75787841 440.031716,-14.3699577 440.031716,21.2559415 L440.031716,21.2559415 Z" id="Path" fill="#FFFFFF" fill-rule="nonzero"></path>
              <path d="M982.031716,21.1916744 C981.002364,119.850508 972.081313,235.980176 1017.02968,362.729371 C1061.97805,489.478567 1120.308,686.796233 1135.40516,762.84575 C1150.84544,838.895268 1148.1005,833.756787 1122.70982,891.650338 C1097.31914,949.54389 878.067165,1423.31183 926.446708,1615.49101 C974.483134,1807.6702 1054.77259,2065.96451 1084.96691,2197.16705 C1115.16124,2328.71216 1110.3576,2445.1844 1100.40719,2536.64936 C1097.66226,2569.53563 1104.86772,2566.10998 1108.98513,2540.41758 C1113.10254,2514.72517 1133.34646,2349.95122 1092.85861,2195.11166 C1052.37077,2040.2721 958.013502,1731.27812 945.661279,1629.19363 C932.965937,1527.10914 934.338407,1509.29574 947.033748,1445.92114 C959.729089,1382.54655 1027.66632,1158.16621 1139.52257,891.650338 C1155.64908,852.255318 1174.52054,846.431706 1145.01245,736.468215 C1115.16124,626.504724 1058.89,455.907158 1025.2645,337.379532 C991.639001,218.851906 987.521593,204.46416 993.697705,21.5342398 C994.383939,2.69314321 982.031716,-14.4351264 982.031716,21.5342398 L982.031716,21.1916744 Z" id="Path" fill="#FFFFFF" fill-rule="nonzero"></path>
            </g>
          </g>
        </g>
      </svg>
    </div>

    <!-- tagline -->
    <div class="p-4 lg:p-16">
      <div class="flex justify-center xl:justify-start my-16">
        <h2 class="neogeo text-5xl lg:text-7xl w-[42rem]">Methodical <br>non-utilitarianism.</h2>
      </div>
      <div class="flex justify-center xl:justify-end mb-32">
        <p class="text-2xl lg:text-3xl leading-normal max-w-2xl">Make things up. Make mistakes. Be wrong and enjoy learning. This is all part of the creative process. It’s not about utility, it’s about growth and development. It's hard to slow down and embrace nuance in a world obsessed with short-sighted productivity...</p>
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
      <div class="flex justify-center xl:justify-start mb-16 mt-[450px]">
        <h2 class="neogeo text-5xl lg:text-7xl w-[42rem]">Sound is the source. <br>Simultaneously ubiquitous and subversive.</h2>
      </div>
      <div class="flex justify-center xl:justify-end mb-32">
        <p class="text-2xl lg:text-3xl leading-normal max-w-2xl">I don’t believe in magic. I believe in the unfettered power of sound. Deeply misunderstood and underappreciated, sound permeates every aspect of life. For me, it has been the gateway to learning about visual arts, computer science, electronics, culture, psychology, politics, and, of course, music.</p>
      </div>
    </div>

    <!-- manifesto -->
    <div class="bg-white text-black p-4 lg:p-16">
      <img :src="garagePhoto" alt="Garage music" width="full" class="-mt-[24%] relative z-30"/>
      <div class="flex justify-center xl:justify-start mb-16 mt-16">
        <h2 class="neogeo text-5xl lg:text-7xl w-[42rem]">Dreaming in audio visual perception systems and noise patterns, a manifesto:</h2>
      </div>
      <div class="flex justify-center xl:justify-end mb-16">
        <p class="text-2xl lg:text-3xl leading-normal w-[42rem]">By default, the mainstream is not conducive to awareness. Subvert mainstream thinking and via both process and aesthetic.</p>
      </div>
      <div class="flex justify-center xl:justify-start flex-row mb-16">
        <p class="text-2xl lg:text-3xl leading-normal w-[42rem]">No genres. They are not useful.</p>
      </div>
      <div class="flex justify-center xl:justify-end mb-16">
        <p class="text-2xl lg:text-3xl leading-normal w-[42rem]">Professional quality work can be meaningful, but “buttoned up" is not an aesthetic worth pursuing.</p>
      </div>
      <div class="flex justify-center xl:justify-start mb-16">
        <p class="text-2xl lg:text-3xl leading-normal w-[42rem]">Improvisation is a core tenant of creativity. The unpredictable and fleeting nature is directly tied to the flow of reality.</p>
      </div>
      <div class="flex justify-center xl:justify-end mb-16">
        <p class="text-2xl lg:text-3xl leading-normal w-[42rem]">Always be open to experimentation, even if that means experimenting with embracing mainstream thinking.</p>
      </div>
      <div class="flex justify-center xl:justify-start mb-16">
        <p class="text-2xl lg:text-3xl leading-normal w-[42rem]">The idea of "progress" is irrelevant. Being present and grounded overrides black and white dogmas.</p>
      </div>
      <div class="flex justify-center xl:justify-end mb-16">
        <p class="text-2xl lg:text-3xl leading-normal w-[42rem]">Don't hesitate to throw away or redo work. Also, don't get stuck in a loop where nothing is ever finished.</p>
      </div>
      <div class="flex justify-center xl:justify-start mb-16">
        <p class="text-2xl lg:text-3xl leading-normal w-[42rem]">The act of developing and exploring a creative process is more valuable than any creative output.</p>
      </div>
      <div class="flex justify-center xl:justify-end mb-16">
        <p class="text-2xl lg:text-3xl leading-normal w-[42rem]">Art does not need to be accessible.</p>
      </div>
      <div class="flex justify-center xl:justify-start mb-32">
        <p class="text-2xl lg:text-3xl leading-normal w-[42rem]">There is nothing to work towards. You are already there and have always been there.</p>
      </div>
    </div>

    <!-- footer -->
    <div class="bg-almost-black h-[600px]">

    </div>
  </div>
</template>

<style scoped>

</style>

<script>
  import philosophyBanner from '@/assets/images/about-abstract-header-1.png';
  import garagePhoto from '@/assets/images/garage-photo-3-31-24-v14.png';
  export default {
    name: 'PhilosophyBanner',
    mounted() {
      // browser only code

      // ——————————————————————————————————————————————————
      // Variable Text
      // ——————————————————————————————————————————————————
      window.addEventListener('mousemove', e => {
        const minFontWeight = 100
        const maxFontWeight = 800
        const minFontStretch = 70
        const maxFontStretch = 100
        const fontWeightPercent = (maxFontWeight - minFontWeight) / 100;
        const fontStretchPercent = (maxFontStretch - minFontStretch) / 100;

        let color1 = "FBC028";
        let color2 = "FA8072";
        let color3 = "d8f172";

        let x = e.screenX;
        let y = e.screenY;

        let xDecimal = x/window.innerWidth;
        let yDecimal = y/window.innerHeight;

        xDecimal = Math.round((xDecimal + Number.EPSILON) * 100) / 100;

        let hex1 = hexMix(color1, color2, xDecimal);
        let hex2 = hexMix(color1, color3, yDecimal);
        let hex3 = hexMix(hex2, hex1, 0.5);

        let xPercent = xDecimal * 100;
        let yPercent = yDecimal * 100;

        let newFontWeight = minFontWeight + ( Math.round(fontWeightPercent * yPercent) )
        let newFontStretch = minFontStretch + ( Math.round(fontStretchPercent * xPercent) )

        document.getElementById('variable-text').style.fontWeight = newFontWeight;
        document.getElementById('variable-text').style.fontStretch = newFontStretch + '%';
        document.getElementById('variable-text').style.color = "#" + hex3;
        // document.getElementById('variable-text').style.color = "#" + color2;

        function hexMix(colorFrom, colorTo, ratio) {
          const hex = function(x) {
            x = x.toString(16);
            return (x.length === 1) ? '0' + x : x;
          };

          let r = Math.ceil(parseInt(colorTo.substring(0, 2), 16) * ratio + parseInt(colorFrom.substring(0, 2), 16) * (1 - ratio)),
            g = Math.ceil(parseInt(colorTo.substring(2, 4), 16) * ratio + parseInt(colorFrom.substring(2, 4), 16) * (1 - ratio)),
            b = Math.ceil(parseInt(colorTo.substring(4, 6), 16) * ratio + parseInt(colorFrom.substring(4, 6), 16) * (1 - ratio));

          return hex(r) + hex(g) + hex(b);
        }
      });

      // ——————————————————————————————————————————————————
      // TextScramble
      // ——————————————————————————————————————————————————
      class TextScramble {
        constructor(el) {
          this.el = el
          this.chars = '!<>-_\\/[]{}—=+*^?#________'
          this.update = this.update.bind(this)
        }
        setText(newText) {
          const oldText = this.el.innerText
          const length = Math.max(oldText.length, newText.length)
          const promise = new Promise((resolve) => this.resolve = resolve)
          this.queue = []
          for (let i = 0; i < length; i++) {
            const from = oldText[i] || ''
            const to = newText[i] || ''
            const start = Math.floor(Math.random() * 40)
            const end = start + Math.floor(Math.random() * 40)
            this.queue.push({ from, to, start, end })
          }
          cancelAnimationFrame(this.frameRequest)
          this.frame = 0
          this.update()
          return promise
        }
        update() {
          let output = ''
          let complete = 0
          for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i]
            if (this.frame >= end) {
              complete++
              output += to
            } else if (this.frame >= start) {
              if (!char || Math.random() < 0.28) {
                char = this.randomChar()
                this.queue[i].char = char
              }
              output += `<span class="dud">${char}</span>`
            } else {
              output += from
            }
          }
          this.el.innerHTML = output
          if (complete === this.queue.length) {
            this.resolve()
          } else {
            this.frameRequest = requestAnimationFrame(this.update)
            this.frame++
          }
        }
        randomChar() {
          return this.chars[Math.floor(Math.random() * this.chars.length)]
        }
      }

      // ——————————————————————————————————————————————————
      // TextScramble Implementation
      // ——————————————————————————————————————————————————

      const phrases = [
        'Perfectionism kills.',
        'Life is a process.',
        'Culture is fluid.',
        'Media is currency.',
        'Technology is a tool.'
      ]

      const el = document.querySelector('.text-scramble')
      const fx = new TextScramble(el)

      let counter = 0
      const next = () => {
        fx.setText(phrases[counter]).then(() => {
          setTimeout(next, 6000)
        })
        counter = (counter + 1) % phrases.length
      }

      next()
    }
  }
</script>
