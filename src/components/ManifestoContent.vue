<script setup>
import manifestoAbstract from '@/assets/images/manifesto-abstract.png'
import StylizedListItem from '@/components/formatting/StylizedListItem.vue'
</script>


<template>
  <div class="flex mb-16">
    <div class="w-1/4 pr-8">
    </div>
    <div class="w-3/4">
      <img :src="manifestoAbstract" alt="Methodical Non-Utilitarianism Manifesto Abstract" width="full" class="w-full mb-6"/>
      <div class="max-w-[50%]">
        <h2 class="neogeo text-5xl/[1] mb-6">Philosophy&nbsp; <span class="font-thin"><s>Manifesto</s></span>:</h2>
        <ul>
          <stylized-list-item>By default, the mainstream is not conducive to awareness. Subvert mainstream thinking via both process and aesthetic.</stylized-list-item>
          <stylized-list-item>No genres. They are not useful.</stylized-list-item>
          <stylized-list-item>Professional quality work can be meaningful, but “buttoned up" is not an aesthetic worth pursuing.</stylized-list-item>
          <stylized-list-item>Improvisation is a core tenant of creativity. The unpredictable and fleeting nature is directly tied to the flow of reality.</stylized-list-item>
          <stylized-list-item>Always be open to experimentation, even if that means experimenting with embracing mainstream thinking.</stylized-list-item>
          <stylized-list-item>The idea of "progress" is irrelevant. Being present and grounded overrides black and white dogmas.</stylized-list-item>
          <stylized-list-item>Don't hesitate to throw away or redo work. Also, don't get stuck in a loop where nothing is ever finished.</stylized-list-item>
          <stylized-list-item>The act of developing and exploring a creative process is more valuable than any creative output.</stylized-list-item>
          <stylized-list-item>Art does not need to be accessible.</stylized-list-item>
          <stylized-list-item>There is nothing to work towards. You are already there and have always been there.</stylized-list-item>
        </ul>
      </div>
    </div>
  </div>
</template>
