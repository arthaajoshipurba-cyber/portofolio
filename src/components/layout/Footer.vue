<template>
  <footer class="relative z-10 border-t border-gray-800 bg-dark/50 backdrop-blur-sm">
    <Container>
      <div class="py-12">
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
          <!-- Quote -->
          <div class="text-center md:text-left">
            <p class="text-gray-400 italic max-w-md">
              "{{ currentQuote }}"
            </p>
            <p class="text-sm text-gray-500 mt-2">— Random wisdom</p>
          </div>
          
          <!-- Social Links -->
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
          
          <!-- Copyright -->
          <div class="text-center md:text-right">
            <p class="text-sm text-gray-500">
              © {{ currentYear }} Alex Rivera. All rights reserved.
            </p>
            <p class="text-xs text-gray-600 mt-1">
              Built with Vue.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </Container>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Github, Twitter, Linkedin, Mail } from 'lucide-vue-next'
import socialLinks from '@/data/socialLinks'

const currentYear = new Date().getFullYear()

const quotes = [
  "Code is poetry written in logic.",
  "Design is not just what it looks like, it's how it works.",
  "Simplicity is the ultimate sophistication.",
  "Innovation distinguishes between a leader and a follower.",
  "The only way to do great work is to love what you do."
]

const currentQuote = ref(quotes[0])

onMounted(() => {
  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    currentQuote.value = quotes[randomIndex]
  }, 5000)
})
</script>
