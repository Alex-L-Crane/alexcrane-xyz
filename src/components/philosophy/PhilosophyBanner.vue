<script setup>
  import abstractHeader from '@/assets/images/abstract-header-drumhead.png';
  import MainMenu from '@/components/navigation/MainMenu.vue'
</script>

<template>
  <div>
    <div style="height: 60vh;" class="w-full relative overflow-hidden -z-10">
      <div class="absolute top-[45%] lg:top-[50%] left-1/2 -translate-y-1/2 -translate-x-1/2 w-full text-center p-6">
        <h1 id="variable-text" class="text-scramble crystal text-6xl">Perfectionism Kills.</h1>
      </div>
      <img :src="abstractHeader" alt="Abstract Philosophy Banner" width="3000" height="1685" class="w-full h-full object-cover object-left-top"/>
      <!--<div class="w-full h-2/5 absolute bottom-[-1px]">
        <svg width="100%" height="100%" viewBox="0 0 2561 452" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <title>banner-waves-short</title>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="banner-waves-short" transform="translate(-0.0027, 0)">
              <path d="M1.48268505,0 L1.48268505,289.19 C2.00268505,288.99 2.75268505,288.79 3.74268505,288.62 L4.18268505,288.55 L4.67268505,288.48 C8.45268505,287.94 14.922685,287.72 24.282685,288.4 C115.762685,298.33 232.252685,303.13 363.812685,272.99 C418.882685,260.35 496.522685,238.74 582.192685,214.56 L639.622685,198.34 C660.852685,192.34 682.342685,186.28 703.902685,180.22 L718.612685,176.09 L731.862685,172.38 L751.732685,166.83 C819.012685,148.08 885.642685,129.94 945.922685,114.77 C1126.82269,69.57 1556.12269,260.32 1655.13269,304.15 L1659.24269,305.86 L1660.33269,306.37 C1664.26269,308.2 1667.35269,309.72 1669.86269,310.66 C1675.00269,312.71 1679.80269,314.77 1684.25269,316.82 L1689.28269,319.03 C1728.04269,336.05 1732.59269,336.46 1799.03269,322.98 C1875.09269,307.91 2072.43269,249.69 2199.20269,204.83 C2310.21269,165.44 2412.99269,167.5 2503.10269,169.21 C2515.03269,169.83 2527.25269,169.89 2538.18269,169.89 L2541.13269,169.89 C2551.95269,169.89 2558.04269,171.07 2560.50269,172.61 L2560.502,452 L0.502,452 L0.502685046,0 L1.48268505,0 Z" id="Combined-Shape" fill="#1C1C1C"></path>
              <path d="M2539.31269,71.03 C2440.65269,70 2324.52269,61.08 2197.77269,106.03 C2071.02269,150.98 1873.70269,209.31 1797.65269,224.41 C1721.60269,239.51 1726.74269,237.11 1668.85269,211.71 C1610.96269,186.31 1137.19269,-32.93 945.012685,15.45 C752.832685,63.49 494.542685,143.78 363.332685,173.97 C231.782685,204.16 115.312685,199.36 23.852685,189.41 C-9.03731495,186.67 -5.60731495,193.87 20.082685,197.99 C45.772685,202.11 210.552685,222.35 365.392685,181.86 C520.232685,141.37 829.222685,47.01 931.312685,34.66 C1033.39269,21.96 1051.21269,23.34 1114.58269,36.03 C1177.95269,48.73 1402.33269,116.66 1668.85269,228.52 C1708.25269,244.65 1714.07269,263.52 1824.03269,234.01 C1933.99269,204.16 2104.59269,147.89 2223.12269,114.26 C2341.65269,80.63 2356.04269,76.52 2538.97269,82.69 C2557.81269,83.72 2574.94269,71.02 2538.97269,71.02 L2539.31269,71.02 L2539.31269,71.03 Z" id="Path" fill="#FBC028" fill-rule="nonzero"></path>
              <path d="M2539.31269,170.03 C2440.65269,169 2324.52269,160.08 2197.77269,205.03 C2071.02269,249.98 1873.70269,308.31 1797.65269,323.41 C1721.60269,338.85 1726.74269,336.11 1668.85269,310.71 C1610.96269,285.32 1137.19269,66.07 945.012685,114.45 C752.832685,162.49 494.542685,242.78 363.332685,272.97 C231.782685,303.16 115.312685,298.36 23.852685,288.41 C-9.03731495,285.67 -5.60731495,292.87 20.082685,296.99 C45.772685,301.11 210.552685,321.35 365.392685,280.86 C520.232685,240.37 829.222685,146.01 931.312685,133.66 C1033.39269,120.96 1051.21269,122.34 1114.58269,135.03 C1177.95269,147.72 1402.33269,215.66 1668.85269,327.52 C1708.25269,343.65 1714.07269,362.52 1824.03269,333.01 C1933.99269,303.16 2104.59269,246.89 2223.12269,213.26 C2341.65269,179.63 2356.04269,175.52 2538.97269,181.69 C2557.81269,182.72 2574.94269,170.02 2538.97269,170.02 L2539.31269,170.02 L2539.31269,170.03 Z" id="Path-2" fill="#FFFFFF" fill-rule="nonzero"></path>
            </g>
          </g>
        </svg>
      </div>-->
    </div>
    <MainMenu :dark-theme="true"/>
  </div>
</template>

<script>
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
      const minFontStretch = 50
      const maxFontStretch = 100
      const fontWeightPercent = (maxFontWeight - minFontWeight) / 100;
      const fontStretchPercent = (maxFontStretch - minFontStretch) / 100;

      let color1 = "FFFFFF";
      let color2 = "FA8072";
      let color3 = "d8f172";

      let x = e.screenX;
      let y = e.screenY;

      x = x/2;
      y = y/2;

      let width = window.innerWidth;
      let height = window.innerHeight;

      let xDecimal = x/width;
      let yDecimal = y/height;

      /* console.log("Width = " + width + " Height = " + height + " X = " + x + " Y = " + y);*/



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
