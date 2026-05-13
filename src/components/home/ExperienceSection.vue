<template>
  <Section id="experience" class="py-24">
    <Container>
      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-5xl font-bold mb-4">
          <span class="bg-gradient-to-r from-white to-primary-400 bg-clip-text text-transparent">
            Riwayat Sekolah
          </span>
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Perjalanan hingga berada di titik sekarang
        </p>
      </div>
      
      <div class="relative">
        <!-- Vertical Line -->
        <div class="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary-500/50 to-transparent hidden lg:block"></div>
        
        <div class="space-y-12">
          <TimelineItem
            v-for="(item, index) in experiences"
            :key="item.id"
            :item="item"
            :is-left="index % 2 === 0"
            :delay="index * 0.2"
          />
        </div>
      </div>
    </Container>
  </Section>
</template>

<script setup lang="ts">
import Section from '@/components/common/Section.vue'
import Container from '@/components/common/Container.vue'
import TimelineItem from '@/components/ui/TimelineItem.vue'
import { experiences } from '@/data/experience'
</script>
