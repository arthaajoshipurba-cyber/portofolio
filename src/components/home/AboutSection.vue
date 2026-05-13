<template>
  <Section id="about" class="py-24">
    <Container>
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Column -->
        <div class="space-y-6">
          <h2 class="text-4xl sm:text-5xl font-bold">
            <span class="bg-gradient-to-r from-white to-primary-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div class="space-y-4 text-gray-300">
            <p>
              I'm a passionate full-stack developer with over 6 years of experience in building 
              exceptional digital experiences. My journey in tech started with a curiosity about 
              how things work, which evolved into a deep love for creating elegant solutions to 
              complex problems.
            </p>
            <p>
              I specialize in modern JavaScript frameworks, cloud architecture, and creating 
              seamless user experiences. When I'm not coding, you can find me contributing to 
              open-source projects, mentoring aspiring developers, or exploring new technologies.
            </p>
          </div>
          
          <!-- Stats -->
          <div class="grid grid-cols-3 gap-4 pt-6">
            <div class="text-center">
              <div class="text-3xl font-bold text-primary-400">6+</div>
              <div class="text-sm text-gray-400">Years Experience</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-primary-400">50+</div>
              <div class="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-primary-400">20+</div>
              <div class="text-sm text-gray-400">Happy Clients</div>
            </div>
          </div>
        </div>
        
        <!-- Right Column - Skills -->
        <div>
          <h3 class="text-2xl font-bold mb-6">Tech Stack & Skills</h3>
          <div class="flex flex-wrap gap-3">
            <SkillTag
              v-for="skill in skills"
              :key="skill.name"
              :name="skill.name"
              :level="skill.level"
              :icon="skill.icon"
            />
          </div>
        </div>
      </div>
    </Container>
  </Section>
</template>

<script setup lang="ts">
import Section from '@/components/common/Section.vue'
import Container from '@/components/common/Container.vue'
import SkillTag from '@/components/ui/SkillTag.vue'
import { skills } from '@/data/skills'
</script>
