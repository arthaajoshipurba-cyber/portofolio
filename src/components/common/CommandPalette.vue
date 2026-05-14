<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isOpen" class="fixed inset-0 z-50">
        <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" @click="$emit('close')"></div>
        
        <div class="relative min-h-screen flex items-center justify-center p-4">
          <div class="w-full max-w-2xl bg-dark-100 rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
            <!-- Search Input -->
            <div class="p-4 border-b border-gray-800">
              <div class="flex items-center gap-3">
                <Search class="w-5 h-5 text-gray-400" />
                <input
                  ref="inputRef"
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search commands..."
                  class="flex-1 bg-transparent outline-none text-white placeholder-gray-500"
                  @keydown.esc="$emit('close')"
                  @keydown.enter="executeCommand"
                />
                <kbd class="px-2 py-1 bg-dark-200 rounded text-xs text-gray-400">ESC</kbd>
              </div>
            </div>
            
            
            <div class="max-h-96 overflow-y-auto">
              <div v-if="filteredCommands.length === 0" class="p-8 text-center text-gray-400">
                No commands found
              </div>
              
              <div
                v-for="(command, index) in filteredCommands"
                :key="command.id"
                :ref="el => { if (index === selectedIndex) commandRef = el }"
                class="flex items-center justify-between p-3 mx-2 my-1 rounded-lg cursor-pointer transition-colors"
                :class="selectedIndex === index ? 'bg-primary-500/20 border border-primary-500/50' : 'hover:bg-dark-200'"
                @click="executeCommand(command)"
                @mouseenter="selectedIndex = index"
              >
                <div class="flex items-center gap-3">
                  <component :is="command.icon" class="w-5 h-5 text-gray-400" />
                  <div>
                    <div class="text-white font-medium">{{ command.title }}</div>
                    <div class="text-sm text-gray-400">{{ command.description }}</div>
                  </div>
                </div>
                <kbd class="px-2 py-1 bg-dark-200 rounded text-xs text-gray-400">{{ command.shortcut }}</kbd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { Search, Home, User, Briefcase, Mail, Sun, Moon, Github, Twitter } from 'lucide-vue-next'

const emit = defineEmits<{
  (e: 'close'): void
}>()

const isOpen = ref(true)
const searchQuery = ref('')
const selectedIndex = ref(0)
const inputRef = ref<HTMLInputElement>()
const commandRef = ref<any>()

const commands = [
  { id: 1, title: 'Go to Home', description: 'Navigate to home section', icon: Home, shortcut: 'H', action: () => scrollTo('home') },
  { id: 2, title: 'Go to Projects', description: 'View my work', icon: Briefcase, shortcut: 'P', action: () => scrollTo('projects') },
  { id: 3, title: 'Go to About', description: 'Learn about me', icon: User, shortcut: 'A', action: () => scrollTo('about') },
  { id: 4, title: 'Contact Me', description: 'Get in touch', icon: Mail, shortcut: 'C', action: () => scrollTo('contact') },
  { id: 5, title: 'Toggle Theme', description: 'Switch between light/dark mode', icon: Sun, shortcut: 'T', action: () => toggleTheme() },
  { id: 6, title: 'GitHub', description: 'View my GitHub profile', icon: Github, shortcut: 'G', action: () => window.open('https://github.com', '_blank') },
  { id: 7, title: 'Twitter', description: 'Follow me on Twitter', icon: Twitter, shortcut: 'W', action: () => window.open('https://twitter.com', '_blank') },
]

const filteredCommands = computed(() => {
  if (!searchQuery.value) return commands
  const query = searchQuery.value.toLowerCase()
  return commands.filter(cmd => 
    cmd.title.toLowerCase().includes(query) || 
    cmd.description.toLowerCase().includes(query)
  )
})

const scrollTo = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  element?.scrollIntoView({ behavior: 'smooth' })
  emit('close')
}

const toggleTheme = () => {
  emit('close')
}

const executeCommand = (command?: any) => {
  const cmd = command || filteredCommands.value[selectedIndex.value]
  if (cmd) {
    cmd.action()
  }
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    selectedIndex.value = (selectedIndex.value + 1) % filteredCommands.value.length
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    selectedIndex.value = (selectedIndex.value - 1 + filteredCommands.value.length) % filteredCommands.value.length
  }
}

watch(selectedIndex, async () => {
  await nextTick()
  commandRef?.scrollIntoView({ block: 'nearest' })
})

onMounted(() => {
  inputRef.value?.focus()
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
