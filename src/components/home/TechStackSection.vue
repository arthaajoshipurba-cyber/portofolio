<template>
  <Section id="tech-stack" class="py-24 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent">
    <Container>
      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-5xl font-bold mb-4">
          <span class="bg-gradient-to-r from-white to-primary-400 bg-clip-text text-transparent">
            Technologies I Work With
          </span>
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Constantly exploring and mastering modern tools and frameworks
        </p>
      </div>
      
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        <TechIcon
          v-for="tech in techStack"
          :key="tech.name"
          :name="tech.name"
          :icon="tech.icon"
          :color="tech.color"
        />
      </div>
    </Container>
  </Section>
</template>

<script setup lang="ts">
import Section from '@/components/common/Section.vue'
import Container from '@/components/common/Container.vue'
import TechIcon from '@/components/ui/TechIcon.vue'

const techStack = [
  { name: 'Vue.js', icon: 'vue', color: '#42b883' },
  { name: 'React', icon: 'react', color: '#61dafb' },
  { name: 'TypeScript', icon: 'typescript', color: '#3178c6' },
  { name: 'Node.js', icon: 'nodejs', color: '#339933' },
  { name: 'Python', icon: 'python', color: '#3776ab' },
  { name: 'Tailwind', icon: 'tailwind', color: '#06b6d4' },
  { name: 'GraphQL', icon: 'graphql', color: '#e10098' },
  { name: 'Docker', icon: 'docker', color: '#2496ed' },
  { name: 'AWS', icon: 'aws', color: '#ff9900' },
  { name: 'MongoDB', icon: 'mongodb', color: '#47a248' },
  { name: 'PostgreSQL', icon: 'postgresql', color: '#336791' },
  { name: 'Figma', icon: 'figma', color: '#f24e1e' }
]
</script>
