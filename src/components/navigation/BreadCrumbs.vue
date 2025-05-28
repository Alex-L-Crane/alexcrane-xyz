<script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import ArrowIcon from '@/components/icons/ArrowIcon.vue'

  defineProps({
    darkTheme: {
      type: Boolean,
      default: false
    }
  })

  const route = useRoute()

  const breadcrumbs = computed(() => {
    const matched = route.matched.filter(r => r.meta && r.meta.breadcrumb)
    return matched.map(r => ({
      label: r.meta.breadcrumb,
      to: r.path
    }))
  })
</script>

<template>
  <nav aria-label="Breadcrumb" class="breadcrumbs"
  :class="[ darkTheme ? 'text-white' : 'text-almost-black']">
    <ol class="flex items-center list-none gap-1 p-0">
      <template v-for="(crumb, index) in breadcrumbs" :key="index">
        <li v-if="index < breadcrumbs.length - 1" class="flex items-center">
          <router-link
            :to="crumb.to"
            class="relative inline-block group hover:bg-transparent focus:bg-transparent active:bg-transparent">
            <span class="relative z-10">{{ crumb.label }}</span>
            <span :class="['absolute bottom-0 left-0 h-0.5 w-full scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100 hidden sm:block',
                  darkTheme ? 'bg-white' : 'bg-almost-black']"></span>
          </router-link>
        </li>
        <li v-else>
          <span>{{ crumb.label }}</span>
        </li>
        <li v-if="index < breadcrumbs.length - 1"
            class="flex items-center px-1 lg:px-2" aria-hidden="true">
          <ArrowIcon />
        </li>
      </template>
    </ol>
  </nav>
</template>
