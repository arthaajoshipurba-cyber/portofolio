<template>
  <Section id="about" class="py-24">
    <Container>
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Column -->
        <div class="space-y-6">
          <h2 class="text-4xl sm:text-5xl font-bold">
            <span class="bg-gradient-to-r from-white to-primary-400 bg-clip-text text-transparent">
              Tentang Saya
            </span>
          </h2>
          
          <div class="space-y-4 text-gray-300">
            <p>
              Halo perkenal, saya Christian Artha Joshi Purba. Saya adalah seorang mahasiswa yang memiliki ketertarikan besar pada dunia teknologi dan pemrograman.
              Saat ini saya sedang mempelajari dasar-dasar coding dan terus mengembangkan kemampuan dalam pembuatan website serta pengembangan aplikasi.
              Saya senang mempelajari hal baru, menyelesaikan masalah, dan membangun proyek sebagai bagian dari proses belajar dan pengembangan diri di bidang teknologi.
            </p>
          </div>
          
          <!-- Stats -->
          <div class="grid grid-cols-3 gap-4 pt-6">
            <div class="text-center">
              <div class="text-3xl font-bold text-primary-400">7</div>
              <div class="text-sm text-gray-400">Bulan Pengalaman</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-primary-400">1</div>
              <div class="text-sm text-gray-400">Projek Selesai</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-primary-400">4.5</div>
              <div class="text-sm text-gray-400">Peringkat</div>
            </div>
          </div>
        </div>
        
        <!-- Right Column - Skills -->
        <div>
          <h3 class="text-2xl font-bold mb-6">Kemampuan</h3>
          <div class="flex flex-wrap gap-3">
            <SkillTag
              v-for="skill in skills"
              :key="skill.name"
              :name="skill.name"
              :level="skill.level"
              :icon="skill.icon"
            />
          </div>
        </div>
      </div>
    </Container>
  </Section>
</template>

<script setup lang="ts">
import Section from '@/components/common/Section.vue'
import Container from '@/components/common/Container.vue'
import SkillTag from '@/components/ui/SkillTag.vue'
import { skills } from '@/data/skills'
</script>
