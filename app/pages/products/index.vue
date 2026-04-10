<script setup>
/* eslint-disable */
import { ref, computed } from 'vue'

// 🔥 products from API
const { data: products } = await useFetch('/api/products')

const searchQuery = ref('')
const selectedCategory = ref('All')
const sortOption = ref('default')

const categories = ['All', 'Electronics', 'Clothing', 'Shoes', 'Accessories']

const filteredProducts = computed(() => {
  let filtered = products.value || []

  if (selectedCategory.value !== 'All') {
    filtered = filtered.filter(p => p.category === selectedCategory.value)
  }

  if (searchQuery.value) {
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  if (sortOption.value === 'low') {
    filtered = [...filtered].sort((a, b) => a.price - b.price)
  }

  if (sortOption.value === 'high') {
    filtered = [...filtered].sort((a, b) => b.price - a.price)
  }

  return filtered
})
</script>

<template>
  <div class="px-4 py-10 max-w-7xl mx-auto">

    <h1 class="text-5xl font-bold mb-10 text-center bg-blue-500 bg-clip-text text-transparent">
      Products
    </h1>

    <!-- Filters -->
    <div class="flex flex-col sm:flex-row gap-4 mb-8">
      <input v-model="searchQuery" type="text" placeholder="Search products..."
        class="w-full sm:w-1/3 px-4 py-2 rounded-xl border">

      <select v-model="selectedCategory" class="px-4 py-2 rounded-xl border">
        <option v-for="cat in categories" :key="cat">
          {{ cat }}
        </option>
      </select>

      <select v-model="sortOption" class="px-4 py-2 rounded-xl border">
        <option value="default">Sort By</option>
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
      </select>
    </div>

    <!-- Products Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      <div v-for="product in filteredProducts" :key="product.id"
        class="bg-[#0f172a] rounded-xl overflow-hidden shadow-md">

        <!-- 🔥 FIX: image -->
        <img :src="product.image || '/images/placeholder.png'" class="w-full h-48 object-cover" />

        <div class="p-4 text-center">

          <h3 class="text-gray-300 font-semibold mb-2">
            {{ product.title }}
          </h3>

          <p class="text-blue-400 font-bold mb-3">
            ${{ product.price }}
          </p>

          <NuxtLink :to="`/products/${product.id}`" class="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg">
            View Details
          </NuxtLink>

        </div>
      </div>

    </div>
  </div>
</template>
