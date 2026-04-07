<script setup>
/* eslint-disable */
import { ref, onMounted } from 'vue'

// Reactive variable
const isDarkMode = ref(false)

// Toggle function
const toggleColorMode = () => {
  isDarkMode.value = !isDarkMode.value
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }
  else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

// Load saved theme
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    isDarkMode.value = true
    document.documentElement.classList.add('dark')
  }
})
</script>

<template>
  <header class="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow border-b border-gray-200 dark:border-gray-800">
    <UContainer class="flex items-center justify-between h-16">
      <!-- Left: Logo / Title -->
      <h1 class="text-4xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Smart Shop
      </h1>

      <!-- Center: Navigation links -->
      <nav class="flex-1 flex justify-center gap-6  ">
        <NuxtLink class="bg-blue-400 bg-clip-text text-transparent hover:text-blue-600" to="/">Home</NuxtLink>
        <NuxtLink class="bg-blue-400 bg-clip-text text-transparent hover:text-blue-600" to="/products">Products
        </NuxtLink>
        <NuxtLink class="bg-blue-400 bg-clip-text text-transparent hover:text-blue-600" to="/cart">Cart</NuxtLink>
        <NuxtLink class="bg-blue-400 bg-clip-text text-transparent hover:text-blue-600" to="/checkout">Checkout
        </NuxtLink>
        <NuxtLink class="bg-blue-400 bg-clip-text text-transparent hover:text-blue-600" to="/about">About</NuxtLink>
        <NuxtLink class="bg-blue-400 bg-clip-text text-transparent hover:text-blue-600" to="/contact">Contact
        </NuxtLink>
      </nav>

      <!-- Right: Color Mode Button -->
      <button @click="toggleColorMode" class="text-xl transition-colors duration-300
                                       text-blue-800 dark:text-blue-200">
        {{ isDarkMode ? '🌙' : '☀️' }}
      </button>
    </UContainer>
  </header>
</template>
