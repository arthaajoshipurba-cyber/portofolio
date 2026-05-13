<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-dark">
    <div class="text-center">
      <div class="relative">
        <div class="w-24 h-24 border-4 border-primary-500/20 rounded-full animate-spin">
          <div class="absolute inset-0 border-t-4 border-primary-500 rounded-full animate-spin-slow"></div>
        </div>
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full animate-pulse"></div>
        </div>
      </div>
      <p class="mt-8 text-2xl font-light tracking-wider text-white animate-pulse">
        Memuat...
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  gsap.fromTo('.animate-pulse', 
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
  )
})
</script>
