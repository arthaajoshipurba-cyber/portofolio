<template>
  <div class="app" :class="{ 'dark': isDarkMode }">
    <LoadingScreen v-if="isLoading" />
    <CustomCursor v-if="!isLoading" />
    <CommandPalette v-if="showCommandPalette" @close="showCommandPalette = false" />
    
    <div class="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark dark:to-dark-100">
      <!-- Animated Background -->
      <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <!-- Noise Texture -->
      <div class="fixed inset-0 pointer-events-none opacity-5">
        <div class="absolute inset-0 bg-noise"></div>
      </div>

      <Navigation />
      
      <main class="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <TechStackSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import LoadingScreen from '@/components/common/LoadingScreen.vue'
import CustomCursor from '@/components/common/CustomCursor.vue'
import CommandPalette from '@/components/common/CommandPalette.vue'
import Navigation from '@/components/layout/Navigation.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import ProjectsSection from '@/components/home/ProjectsSection.vue'
import TechStackSection from '@/components/home/TechStackSection.vue'
import ExperienceSection from '@/components/home/ExperienceSection.vue'
import ContactSection from '@/components/home/ContactSection.vue'
import Footer from '@/components/layout/Footer.vue'
import { useTheme } from '@/composables/useTheme'

const { isDarkMode } = useTheme()
const isLoading = ref(true)
const showCommandPalette = ref(false)

onMounted(() => {
  // Simulate loading
  setTimeout(() => {
    isLoading.value = false
  }, 2000)

  // Keyboard shortcut for command palette
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      showCommandPalette.value = !showCommandPalette.value
    }
  })
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
  cursor: none;
}

@media (max-width: 768px) {
  * {
    cursor: auto;
  }
}

.bg-noise {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  opacity: 0.04;
}
</style>
