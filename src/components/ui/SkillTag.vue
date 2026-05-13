<template>
  <div class="group relative">
    <div
      class="px-4 py-2 rounded-full bg-gradient-to-br from-dark-200 to-dark border border-gray-800 hover:border-primary-500/50 transition-all duration-300 cursor-pointer"
      @mouseenter="showTooltip = true"
      @mouseleave="showTooltip = false"
    >
      <div class="flex items-center gap-2">
        <component :is="icon" class="w-4 h-4 text-primary-400" />
        <span class="text-sm font-medium text-gray-300">{{ name }}</span>
      </div>
    </div>
    
    <!-- Tooltip -->
    <Transition name="fade-up">
      <div
        v-if="showTooltip"
        class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 bg-dark-200 rounded-lg text-xs whitespace-nowrap"
      >
        Proficiency: {{ level }}%
        <div class="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
          <div class="w-2 h-2 bg-dark-200 rotate-45"></div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Code, Database, Cloud, Cpu, Layout, Server } from 'lucide-vue-next'

const props = defineProps<{
  name: string
  level: number
  icon: string
}>()

const showTooltip = ref(false)

const iconMap: Record<string, any> = {
  'Code': Code,
  'Database': Database,
  'Cloud': Cloud,
  'Cpu': Cpu,
  'Layout': Layout,
  'Server': Server
}

const icon = iconMap[props.icon] || Code
</script>

<style scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.2s ease;
}

.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translate(-50%, 10px);
}
</style>
