<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div class="text-center max-w-4xl mx-auto">
        <div class="mb-6 opacity-0 animate-fade-in-up">
          <span class="inline-block px-4 py-2 text-sm font-medium text-primary-400 bg-primary-500/10 rounded-full backdrop-blur-sm">
            ✨ Digital Craftsman
          </span>
        </div>
        
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-in-up delay-100">
          <span class="bg-gradient-to-r from-white via-primary-400 to-purple-400 bg-clip-text text-transparent">
            {{ name }}
          </span>
        </h1>
        
        <div class="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-400 mb-8 opacity-0 animate-fade-in-up delay-200">
          <span class="typing-container">
            {{ currentTypedText }}
            <span class="cursor-blink">|</span>
          </span>
        </div>
        
        <p class="text-lg text-gray-400 max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in-up delay-300">
          Building exceptional digital experiences with cutting-edge technology.
          Specialized in creating beautiful, performant, and scalable applications.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up delay-400">
          <Button 
            @click="scrollToProjects" 
            variant="primary" 
            size="lg"
            class="group"
          >
            <span>Explore My Work</span>
            <ArrowRight class="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            @click="scrollToContact" 
            variant="outline" 
            size="lg"
          >
            Let's Connect
          </Button>
        </div>
        
        <div class="flex gap-6 justify-center mt-12 opacity-0 animate-fade-in-up delay-500">
          <a 
            v-for="link in socialLinks" 
            :key="link.name"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <component :is="link.icon" class="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div class="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
        <div class="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-scroll"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Button from '@/components/common/Button.vue'
import { ArrowRight, Github, Twitter, Linkedin, Mail } from 'lucide-vue-next'
import { useTypingAnimation } from '@/composables/useTypingAnimation'
import socialLinks from '@/data/socialLinks'

const name = "Alex Rivera" // Ganti dengan nama Anda

const roles = [
  "Full Stack Developer",
  "UI/UX Architect",
  "Tech Entrepreneur",
  "Open Source Contributor"
]

const { currentTypedText } = useTypingAnimation(roles, 100)

const scrollToProjects = () => {
  const projectsSection = document.getElementById('projects')
  projectsSection?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToContact = () => {
  const contactSection = document.getElementById('contact')
  contactSection?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  // Add scroll animation class
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, { threshold: 0.1 })
  
  document.querySelectorAll('.animate-fade-in-up').forEach(el => {
    observer.observe(el)
  })
})
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-400 { animation-delay: 0.4s; }
.delay-500 { animation-delay: 0.5s; }

.cursor-blink {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes scroll {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(10px); opacity: 0; }
}

.animate-scroll {
  animation: scroll 1.5s ease-in-out infinite;
}
</style>
