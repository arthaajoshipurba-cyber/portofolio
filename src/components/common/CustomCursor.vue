<template>
  <div v-if="isVisible" class="custom-cursor">
    <div ref="cursorRef" class="cursor-dot"></div>
    <div ref="cursorOutlineRef" class="cursor-outline"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const isVisible = ref(true)
const cursorRef = ref<HTMLElement>()
const cursorOutlineRef = ref<HTMLElement>()

let mouseX = 0
let mouseY = 0
let outlineX = 0
let outlineY = 0

const updateCursor = () => {
  if (cursorRef.value) {
    gsap.to(cursorRef.value, {
      x: mouseX,
      y: mouseY,
      duration: 0,
      ease: "power2.out"
    })
  }
  
  if (cursorOutlineRef.value) {
    gsap.to(cursorOutlineRef.value, {
      x: outlineX,
      y: outlineY,
      duration: 0.3,
      ease: "power2.out"
    })
  }
  
  requestAnimationFrame(updateCursor)
}

const onMouseMove = (e: MouseEvent) => {
  mouseX = e.clientX
  mouseY = e.clientY
  
  setTimeout(() => {
    outlineX = e.clientX
    outlineY = e.clientY
  }, 100)
}

const onMouseEnter = () => {
  isVisible.value = true
}

const onMouseLeave = () => {
  isVisible.value = false
}

onMounted(() => {
  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseenter', onMouseEnter)
  document.addEventListener('mouseleave', onMouseLeave)
  updateCursor()
})

onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseenter', onMouseEnter)
  document.removeEventListener('mouseleave', onMouseLeave)
})
</script>

<style scoped>
.custom-cursor {
  @apply fixed top-0 left-0 z-[9999] pointer-events-none;
}

.cursor-dot {
  @apply fixed w-2 h-2 bg-primary-500 rounded-full;
  transform: translate(-50%, -50%);
}

.cursor-outline {
  @apply fixed w-8 h-8 border-2 border-primary-500/50 rounded-full;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease;
}
</style>
