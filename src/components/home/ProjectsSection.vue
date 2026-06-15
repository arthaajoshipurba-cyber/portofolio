<template>
  <Section id="projects" class="py-24">
    <Container>
      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Pencapaian Artha
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Berisi foto - foto Pencapaian Artha.
        </p>
      </div>
      
      <div class="flex flex-wrap gap-3 justify-center mb-12">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
          :class="selectedCategory === category 
            ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25' 
            : 'bg-dark-100 text-gray-400 hover:text-white hover:bg-dark-200'"
        >
          {{ category }}
        </button>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
        />
      </div>
    </Container>
  </Section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Section from '@/components/common/Section.vue'
import Container from '@/components/common/Container.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import { projects } from '@/data/projects'

const selectedCategory = ref('All')
const categories = ['All', ...new Set(projects.map(p => p.category))]

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') return projects
  return projects.filter(p => p.category === selectedCategory.value)
})
</script>
