<template>
  <div class="group relative">
    <div
      class="aspect-square bg-gradient-to-br from-dark-200 to-dark rounded-2xl flex items-center justify-center border border-gray-800 group-hover:border-primary-500/50 transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-2"
    >
      <!-- Placeholder icon (in real implementation, use proper SVG icons) -->
      <div class="w-12 h-12 flex items-center justify-center text-4xl group-hover:animate-float">
        🔧
      </div>
    </div>
    
    <!-- Tooltip -->
    <div class="absolute inset-x-0 -bottom-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span class="text-xs font-medium text-gray-400 bg-dark-200 px-2 py-1 rounded">
        {{ name }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  icon: string
  color: string
}>()
</script>
