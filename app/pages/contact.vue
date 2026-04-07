<script setup>
/* eslint-disable */
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const submitForm = () => {
  alert('Message Sent Successfully! ✅')

  // Reset form
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>

<template>
  <section class="max-w-7xl mx-auto px-6 py-16">
    <!-- 🔥 Header -->
    <div class="text-center mb-16">
      <h1
        class="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
        Contact Us
      </h1>
      <p class="text-gray-600 dark:text-gray-300 text-lg">
        Have questions? We'd love to hear from you!
      </p>
    </div>

    <!-- 🔥 Contact Section -->
    <div class="grid md:grid-cols-2 gap-12 items-start">
      <!-- 📍 Contact Info -->
      <div class="space-y-6">
        <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">
          Get in Touch
        </h2>

        <p class="text-gray-600 dark:text-gray-300">
          Feel free to reach out to us anytime. Our team is always here to help you.
        </p>

        <div class="space-y-4">
          <p class="text-gray-700 dark:text-gray-300">
            📧 Email: support@smartshop.com
          </p>
          <p class="text-gray-700 dark:text-gray-300">
            📞 Phone: +92 300 1234567
          </p>
          <p class="text-gray-700 dark:text-gray-300">
            📍 Location: Faisalabad, Pakistan
          </p>
        </div>
      </div>

      <!-- 📝 Contact Form -->
      <form class="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg space-y-6" @submit.prevent="submitForm">
        <div>
          <label class="block mb-2 text-gray-700 dark:text-gray-300">Name</label>
          <input v-model="name" type="text"
            class="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>

        <div>
          <label class="block mb-2 text-gray-700 dark:text-gray-300">Email</label>
          <input v-model="email" type="email"
            class="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>

        <div>
          <label class="block mb-2 text-gray-700 dark:text-gray-300">Message</label>
          <textarea v-model="message" rows="4"
            class="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <button type="submit"
          class="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition">
          Send Message
        </button>
      </form>
    </div>
  </section>
</template>
