<template>
  <section :id="id" :class="['relative overflow-hidden', className]">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent"></div>
    </div>
    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps<{
  id?: string
  className?: string
}>()
</script>
