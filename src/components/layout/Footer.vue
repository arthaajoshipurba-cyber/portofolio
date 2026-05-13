<template>
  <footer class="relative z-10 border-t border-gray-800 bg-dark/50 backdrop-blur-sm">
    <Container>
      <div class="py-12">
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="text-center md:text-left">
            <p class="text-gray-400 italic max-w-md">
              "{{ currentQuote }}"
            </p>
            <p class="text-sm text-gray-500 mt-2">— Qoutes random</p>
          </div>
          
          <div class="flex gap-6">
            <a
              v-for="link in socialLinks"
              :key="link.name"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-primary-400 transition-all duration-300 transform hover:scale-110"
            >
              <component :is="link.icon" class="w-5 h-5" />
            </a>
          </div>
          
          <div class="text-center md:text-right">
            <p class="text-sm text-gray-500">
              © {{ currentYear }} Christian Artha Joshi Purba . All rights reserved.
            </p>
            <p class="text-xs text-gray-600 mt-1">
              Dibuat dengan Vue.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </Container>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Github, Tiktok, Instagram, Mail } from 'lucide-vue-next'
import socialLinks from '@/data/socialLinks'

const currentYear = new Date().getFullYear()

const quotes = [
  "Keep coding, keep growing.",
  "Learn, build, fail, repeat.",
  "Debugging adalah jalan ninja.",
  "Kopi, musik, dan barisan error.",
  "Syntax error dikit, mental error banyak."
]

const currentQuote = ref(quotes[0])

onMounted(() => {
  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    currentQuote.value = quotes[randomIndex]
  }, 5000)
})
</script>
