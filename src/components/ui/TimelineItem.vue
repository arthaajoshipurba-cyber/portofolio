<template>
  <div
    :class="[
      'relative flex flex-col lg:flex-row gap-8 opacity-0',
      isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse',
      'animate-on-scroll'
    ]"
    :style="{ animationDelay: `${delay}s` }"
  >
    <!-- Content -->
    <div class="flex-1">
      <div class="bg-gradient-to-br from-dark-200 to-dark rounded-2xl p-6 border border-gray-800 hover:border-primary-500/50 transition-all duration-300">
        <div class="flex items-start justify-between mb-4">
          <div>
            <h3 class="text-xl font-bold text-white">{{ item.title }}</h3>
            <p class="text-primary-400">{{ item.company }}</p>
          </div>
          <span class="text-sm text-gray-400">{{ item.period }}</span>
        </div>
        <p class="text-gray-300 mb-4">{{ item.description }}</p>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in item.technologies"
            :key="tech"
            class="px-2 py-1 text-xs bg-dark-300 rounded-full text-gray-400"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
    
    <!-- Timeline Dot -->
    <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark hidden lg:block"></div>
    
    <!-- Empty spacer for alignment -->
    <div class="flex-1 hidden lg:block"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ExperienceItem {
  id: number
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}

defineProps<{
  item: ExperienceItem
  isLeft: boolean
  delay: number
}>()

onMounted(() => {
  gsap.fromTo('.animate-on-scroll',
    {
      opacity: 0,
      y: 50
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.animate-on-scroll',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  )
})
</script>
