<script setup>
  import TextBlockLeft from '@/components/formatting/TextBlockLeft.vue'
  import TextBlockRightLowerRight from '@/components/formatting/TextBlockRightLowerRight.vue'
</script>

<template>
  <div class="flex flex-col lg:flex-row pt-16 pb-32">
    <text-block-left>
      <h2 class="neogeo text-5xl/[1] lg:text-[60pt] leading-[1] mb-4">Methodical <br>non-utilitarianism.</h2>
      <p class="text-xl/[1.4] font-thin lg:max-w-lg">A context where making things up, making mistakes, and being wrong are all part of the creative process. Growth, development, and enjoyment, not utility. Slowing down and embracing nuance as an antidote to a world obsessed with short-sighted productivity and profit.</p>
    </text-block-left>
    <TextBlockRightLowerRight>
      <!--<p>Get updates ></p>-->
    </TextBlockRightLowerRight>
  </div>
</template>
