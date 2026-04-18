<script setup>
import { ref, computed } from 'vue'

// 🔥 Fetch products
const { data, pending, error } = await useFetch('/api/products')

// ✅ Safe products
const products = computed(() => {
  return Array.isArray(data.value)
    ? data.value
    : data.value?.data || []
})

// 🔍 Filters
const searchQuery = ref('')
const selectedCategory = ref('All')
const sortOption = ref('default')

// 📂 Categories
const categories = computed(() => {
  const cats = products.value.map(p => p.category).filter(Boolean)
  return ['All', ...new Set(cats)]
})

// 🔄 Filtered products
const filteredProducts = computed(() => {
  let list = [...products.value]

  if (selectedCategory.value !== 'All') {
    list = list.filter(p => p.category === selectedCategory.value)
  }

  if (searchQuery.value) {
    list = list.filter(p =>
      p.title?.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  if (sortOption.value === 'low') {
    list.sort((a, b) => a.price - b.price)
  }

  if (sortOption.value === 'high') {
    list.sort((a, b) => b.price - a.price)
  }

  return list
})
</script>

<template>
  <div class="px-4 py-10 max-w-7xl mx-auto">

    <h1 class="text-4xl font-bold text-center mb-8 text-blue-500">
      Products
    </h1>

    <!-- Filters -->
    <div class="flex flex-col sm:flex-row gap-4 mb-8">

      <input v-model="searchQuery" placeholder="Search..." class="border px-4 py-2 rounded-lg w-full sm:w-1/3">

      <select v-model="selectedCategory" class="border px-4 py-2 rounded-lg">
        <option v-for="c in categories" :key="c">{{ c }}</option>
      </select>

      <select v-model="sortOption" class="border px-4 py-2 rounded-lg">
        <option value="default">Sort</option>
        <option value="low">Low → High</option>
        <option value="high">High → Low</option>
      </select>

    </div>

    <!-- States -->
    <div v-if="pending" class="text-center">Loading...</div>
    <div v-else-if="error" class="text-red-500 text-center">Error loading products</div>

    <!-- Products -->
    <div v-else class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      <div v-for="p in filteredProducts" :key="p.id" class="bg-[#0f172a] p-4 rounded-xl">

        <img :src="p.image || '/images/placeholder.png'" class="h-40 w-full object-cover rounded">

        <h3 class="text-white mt-2">{{ p.title }}</h3>
        <p class="text-blue-400">${{ p.price }}</p>

        <NuxtLink :to="`/products/${p.id}`">
          <button class="mt-2 bg-blue-600 text-white px-3 py-1 rounded">
            View Detail
          </button>
        </NuxtLink>

      </div>

    </div>

  </div>
</template>