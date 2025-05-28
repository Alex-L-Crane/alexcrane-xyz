<script setup>
import { ref, onMounted } from 'vue'
import landingBanner from '@/assets/images/landing-banner-1.png'

const variableText = ref(null)

onMounted(() => {
  const el = variableText.value
  if (!el) return

  // Skip font animation on small screens
  if (window.innerWidth < 640) return // Tailwind's `sm` breakpoint

  // ——— Variable Font Manipulation ———
  window.addEventListener('mousemove', e => {
    const minFontWeight = 100
    const maxFontWeight = 800
    const minFontStretch = 50
    const maxFontStretch = 100

    const width = window.innerWidth
    const height = window.innerHeight
    const xDecimal = e.clientX / width
    const yDecimal = e.clientY / height

    const fontWeight = minFontWeight + Math.round((maxFontWeight - minFontWeight) * yDecimal)
    const fontStretch = minFontStretch + Math.round((maxFontStretch - minFontStretch) * xDecimal)

    el.style.fontWeight = fontWeight
    el.style.fontStretch = `${fontStretch}%`
  })

  // ——— Text Scramble Effect ———
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

  const phrases = [
    'Perfectionism<br/>kills.',
    'Life is a<br/>process.',
    'Culture is<br/>fluid.',
    'Media is<br/>currency.',
    'Technology<br/>is a tool.'
  ]

  const fx = new TextScramble(el)

  let counter = 0
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 6000)
    })
    counter = (counter + 1) % phrases.length
  }

  next()
})
</script>

<template>
  <div>
    <div class="min-h-48">
      <h1 ref="variableText" class="text-scramble crystal text-7xl">Perfectionism Kills.</h1>
    </div>
    <img :src="landingBanner" alt="Equipment in a garage studio" width="auto" height="auto" class="w-full"/>
  </div>
</template>

<!--<script>
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

      let x = e.screenX;
      let y = e.screenY;

      x = x/2;
      y = y/2;

      let width = window.innerWidth;
      let height = window.innerHeight;

      let xDecimal = x/width;
      let yDecimal = y/height;

      xDecimal = Math.round((xDecimal + Number.EPSILON) * 100) / 100;

      let xPercent = xDecimal * 100;
      let yPercent = yDecimal * 100;

      let newFontWeight = minFontWeight + ( Math.round(fontWeightPercent * yPercent) )
      let newFontStretch = minFontStretch + ( Math.round(fontStretchPercent * xPercent) )

      document.getElementById('variable-text').style.fontWeight = newFontWeight;
      document.getElementById('variable-text').style.fontStretch = newFontStretch + '%';
      // document.getElementById('variable-text').style.color = "#" + color2;
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
      'Perfectionism<br/>kills.',
      'Life is a<br/>process.',
      'Culture is<br>fluid.',
      'Media is<br/>currency.',
      'Technology<br/>is a tool.'
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
</script>-->
