<template>
  <button
    :class="[
      'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg',
      'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      variants[variant],
      sizes[size],
      className
    ]"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}>()

defineEmits<{
  (e: 'click'): void
}>()

const variants = {
  primary: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 shadow-lg shadow-primary-500/25',
  secondary: 'bg-dark-200 text-white hover:bg-dark-300',
  outline: 'border-2 border-primary-500 text-primary-400 hover:bg-primary-500/10',
  ghost: 'text-gray-400 hover:text-white hover:bg-dark-200'
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg'
}
</script>
