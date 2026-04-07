<script setup>
/* eslint-disable */
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  await new Promise(r => setTimeout(r, 1200))

  alert('✅ Thank you! Your message has been sent.')

  formData.value = { name: '', email: '', message: '' }
  isSubmitting.value = false
}
</script>

<template>

  <section class="py-16 px-6">
    <div class="max-w-2xl mx-auto">
      <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl p-10 shadow-xl">
        <!-- Heading -->
        <div class="text-center mb-12">
          <h1
            class="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-3">
            Contact Us
          </h1>
          <p class="text-gray-500 dark:text-gray-300">
            Have questions? We'd love to hear from you!
          </p>
        </div>

        <!-- Form Container -->
        <form class="space-y-6" @submit.prevent="handleSubmit">
          <div>

            <input v-model="formData.name" type="text" placeholder="Enter your name"
              class="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none">
          </div>

          <div>

            <input v-model="formData.email" type="email" placeholder="Enter your email"
              class="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none">
          </div>

          <div>

            <textarea v-model="formData.message" rows="4" placeholder="Write your message..."
              class="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none" />
          </div>

          <button type="submit" :disabled="isSubmitting"
            class="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition">
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>
        </form>
      </div>
    </div>

  </section>
</template>
