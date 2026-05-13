<template>
  <Section id="contact" class="py-24">
    <Container>
      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-5xl font-bold mb-4">
          <span class="bg-gradient-to-r from-white to-primary-400 bg-clip-text text-transparent">
            Hubungi saya
          </span>
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Punya proyek yang ingin diwujudkan? Mari wujudkan ide-ide Anda.
        </p>
      </div>
      
      <div class="max-w-2xl mx-auto">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Nama</label>
              <input
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 bg-dark-200 border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 transition-colors text-white"
                placeholder="Nama Lengkap"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 bg-dark-200 border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 transition-colors text-white"
                placeholder="email@domain.com"
              />
            </div>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">Subjek</label>
            <input
              v-model="form.subject"
              type="text"
              required
              class="w-full px-4 py-3 bg-dark-200 border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 transition-colors text-white"
              placeholder="Masukkan judul"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-2">Isi</label>
            <textarea
              v-model="form.message"
              rows="6"
              required
              class="w-full px-4 py-3 bg-dark-200 border border-gray-700 rounded-lg focus:outline-none focus:border-primary-500 transition-colors text-white resize-none"
              placeholder="Deskripsi..."
            ></textarea>
          </div>
          
          <Button
            type="submit"
            variant="primary"
            size="lg"
            class="w-full"
            :disabled="isSubmitting"
          >
            <span v-if="!isSubmitting">Kirim Pesan</span>
            <div v-else class="flex items-center justify-center gap-2">
              <div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Mengirim...
            </div>
          </Button>
        </form>
        
        <!-- Success Message -->
        <Transition name="fade">
          <div v-if="showSuccess" class="mt-6 p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-center text-green-400">
            Pesan berhasil terkirim! Saya akan segera menghubungi Anda kembali.
          </div>
        </Transition>
      </div>
    </Container>
  </Section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Section from '@/components/common/Section.vue'
import Container from '@/components/common/Container.vue'
import Button from '@/components/common/Button.vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  console.log('Form submitted:', form.value)
  
  isSubmitting.value = false
  showSuccess.value = true
  
  // Reset form
  form.value = { name: '', email: '', subject: '', message: '' }
  
  // Hide success message after 5 seconds
  setTimeout(() => {
    showSuccess.value = false
  }, 5000)
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
