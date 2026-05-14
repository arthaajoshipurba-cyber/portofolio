<template>
  <div 
    class="group relative bg-gradient-to-br from-dark-100 to-dark rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/20"
  >
    <div class="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    
    <div class="relative overflow-hidden h-48">
      <img 
        :src="project.image" 
        :alt="project.title"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
    </div>
    
    <div class="relative p-6">
      <div class="flex flex-wrap gap-2 mb-3">
        <span 
          v-for="tech in project.tech.slice(0, 3)" 
          :key="tech"
          class="text-xs px-2 py-1 bg-dark-200 rounded-full text-gray-400"
        >
          {{ tech }}
        </span>
      </div>
      
      <h3 class="text-xl font-bold mb-2 text-white group-hover:text-primary-400 transition-colors">
        {{ project.title }}
      </h3>
      
      <p class="text-gray-400 mb-4 line-clamp-2">
        {{ project.description }}
      </p>
      
      <div class="flex gap-3">
        <a 
          :href="project.github" 
          target="_blank"
          class="flex-1 text-center px-4 py-2 bg-dark-200 rounded-lg text-sm font-medium hover:bg-dark-300 transition-colors"
        >
          GitHub
        </a>
        <a 
          :href="project.liveDemo" 
          target="_blank"
          class="flex-1 text-center px-4 py-2 bg-primary-500 rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors"
        >
          Live Demo
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Project {
  id: number
  title: string
  description: string
  image: string
  tech: string[]
  category: string
  github: string
  liveDemo: string
}

defineProps<{
  project: Project
}>()
</script>
