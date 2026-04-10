<script setup>
/* eslint-disable */
import { ref, computed } from 'vue'

// 🔥 Fetch products from API
const { data, pending, error } = await useFetch('/api/products')

// ✅ Ensure products is always an array
const products = computed(() => {
  if (Array.isArray(data.value)) {
    return data.value
  }
  // If API returns { data: [...] }
  if (data.value && Array.isArray(data.value.data)) {
    return data.value.data
  }
  return []
})

// 🔍 Filters
const searchQuery = ref('')
const selectedCategory = ref('All')
const sortOption = ref('default')

// 📂 Dynamic categories from products
const categories = computed(() => {
  const unique = new Set(
    products.value
      .map((p) => p.category)
      .filter(Boolean)
  )
  return ['All', ...unique]
})

// 🔄 Filtered & Sorted Products
const filteredProducts = computed(() => {
  let filtered = [...products.value]

  // Filter by category
  if (selectedCategory.value !== 'All') {
    filtered = filtered.filter(
      (p) => p.category === selectedCategory.value
    )
  }

  // Search by title
  if (searchQuery.value) {
    filtered = filtered.filter((p) =>
      p.title?.toLowerCase().includes(
        searchQuery.value.toLowerCase()
      )
    )
  }

  // Sorting
  if (sortOption.value === 'low') {
    filtered.sort((a, b) => Number(a.price) - Number(b.price))
  } else if (sortOption.value === 'high') {
    filtered.sort((a, b) => Number(b.price) - Number(a.price))
  }

  return filtered
})
</script>

<template>
  <div class="px-4 py-10 max-w-7xl mx-auto">
    <!-- Page Title -->
    <h1 class="text-5xl font-bold mb-10 text-center bg-blue-500 bg-clip-text text-transparent">
      Products
    </h1>

    <!-- 🔍 Filters -->
    <div class="flex flex-col sm:flex-row gap-4 mb-8">
      <!-- Search -->
      <input v-model="searchQuery" type="text" placeholder="Search products..."
        class="w-full sm:w-1/3 px-4 py-2 rounded-xl border" />

      <!-- Category Filter -->
      <select v-model="selectedCategory" class="px-4 py-2 rounded-xl border">
        <option v-for="cat in categories" :key="cat" :value="cat">
          {{ cat }}
        </option>
      </select>

      <!-- Sorting -->
      <select v-model="sortOption" class="px-4 py-2 rounded-xl border">
        <option value="default">Sort By</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>
    </div>

    <!-- ⏳ Loading State -->
    <div v-if="pending" class="text-center text-gray-400">
      Loading products...
    </div>

    <!-- ❌ Error State -->
    <div v-else-if="error" class="text-center text-red-500">
      Failed to load products. Please try again.
    </div>

    <!-- 📭 Empty State -->
    <div v-else-if="filteredProducts.length === 0" class="text-center text-gray-400">
      No products available.
    </div>

    <!-- 🛍️ Products Grid -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div v-for="product in filteredProducts" :key="product.id"
        class="bg-[#0f172a] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
        <!-- Product Image -->
        <img :src="product.image || '/images/placeholder.png'" :alt="product.title" class="w-full h-48 object-cover" />

        <!-- Product Info -->
        <div class="p-4 text-center">
          <h3 class="text-gray-300 font-semibold mb-2">
            {{ product.title }}
          </h3>

          <p class="text-blue-400 font-bold mb-3">
            ${{ product.price }}
          </p>

          <NuxtLink :to="`/products/${product.id}`"
            class="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            View Details
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>