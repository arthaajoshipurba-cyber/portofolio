<template>
  <header class="fixed top-0 left-0 right-0 z-40 transition-all duration-300" :class="isScrolled ? 'bg-dark/80 backdrop-blur-xl border-b border-gray-800' : 'bg-transparent'">
    <Container>
      <nav class="flex items-center justify-between h-16">
        <a href="#" class="text-2xl font-bold bg-gradient-to-r from-white to-primary-400 bg-clip-text text-transparent">
          ATTCHX
        </a>
        
        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="item in menuItems"
            :key="item.label"
            :href="item.href"
            class="text-gray-300 hover:text-white transition-colors duration-300"
            @click.prevent="scrollTo(item.href)"
          >
            {{ item.label }}
          </a>
        </div>
        
        <div class="flex items-center gap-4">
          <button
            @click="toggleTheme"
            class="p-2 rounded-lg hover:bg-dark-200 transition-colors"
          >
            <Sun v-if="isDarkMode" class="w-5 h-5" />
            <Moon v-else class="w-5 h-5" />
          </button>
          
          <button
            @click="showCommandPalette"
            class="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-200 hover:bg-dark-300 transition-colors text-sm"
          >
            <Command class="w-4 h-4" />
            <span>Search</span>
            <kbd class="px-1.5 py-0.5 bg-dark-300 rounded text-xs">⌘K</kbd>
          </button>
          
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 rounded-lg hover:bg-dark-200 transition-colors"
          >
            <Menu v-if="!mobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>
      </nav>
      
      <Transition name="slide-down">
        <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-800">
          <div class="flex flex-col gap-3">
            <a
              v-for="item in menuItems"
              :key="item.label"
              :href="item.href"
              class="px-4 py-2 text-gray-300 hover:text-white hover:bg-dark-200 rounded-lg transition-colors"
              @click.prevent="scrollTo(item.href); mobileMenuOpen = false"
            >
              {{ item.label }}
            </a>
          </div>
        </div>
      </Transition>
    </Container>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Sun, Moon, Command, Menu, X } from 'lucide-vue-next'
import Container from '@/components/common/Container.vue'
import { useTheme } from '@/composables/useTheme'

const { isDarkMode, toggleTheme } = useTheme()
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'Tentang', href: '#about' },
  { label: 'Foto', href: '#projects' },
  { label: 'Riwayat Pendidikan', href: '#experience' },
  { label: 'Hubunngi Saya', href: '#contact' }
]

const scrollTo = (href: string) => {
  const element = document.querySelector(href)
  element?.scrollIntoView({ behavior: 'smooth' })
}

const showCommandPalette = () => {
  window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }))
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
