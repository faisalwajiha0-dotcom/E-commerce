<script setup>
/* eslint-disable */
import { ref, computed } from 'vue'

const products = ref([
  { id: 1, title: 'Wireless Headphones', price: 99, category: 'Electronics', img: '/images/headphone.jpg' },
  { id: 2, title: 'Stylish Jacket', price: 79, category: 'Clothing', img: '/images/jacket.jpg' },
  { id: 3, title: 'Running Shoes', price: 120, category: 'Shoes', img: '/images/shoe.jpg' },
  { id: 4, title: 'Luxury Watch', price: 150, category: 'Accessories', img: '/images/watch.jpg' },
  { id: 5, title: 'Smartphone', price: 500, category: 'Electronics', img: '/images/smartphone.jpg' },
  { id: 6, title: 'Denim Jeans', price: 60, category: 'Clothing', img: '/images/jeans.jpg' },
  { id: 7, title: 'Sneakers', price: 110, category: 'Shoes', img: '/images/sneakers.jpg' },
  { id: 8, title: 'Handbag', price: 130, category: 'Accessories', img: '/images/handbag.jpg' },
  { id: 9, title: 'Bluetooth Speaker', price: 80, category: 'Electronics', img: '/images/speaker.jpg' },
  { id: 10, title: 'Formal Shirt', price: 55, category: 'Clothing', img: '/images/shirt.jpg' },
  { id: 11, title: 'Leather Boots', price: 140, category: 'Shoes', img: '/images/boots.jpg' },
  { id: 12, title: 'Sunglasses', price: 70, category: 'Accessories', img: '/images/sunglasses.jpg' },
])

const searchQuery = ref('')
const selectedCategory = ref('All')
const sortOption = ref('default')
const categories = ['All', 'Electronics', 'Clothing', 'Shoes', 'Accessories']

const filteredProducts = computed(() => {
  let filtered = products.value

  if (selectedCategory.value !== 'All') filtered = filtered.filter(p => p.category === selectedCategory.value)
  if (searchQuery.value) filtered = filtered.filter(p => p.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
  if (sortOption.value === 'low') filtered = filtered.sort((a, b) => a.price - b.price)
  if (sortOption.value === 'high') filtered = filtered.sort((a, b) => b.price - a.price)

  return filtered
})
</script>

<template>
  <div class="px-4 py-10 max-w-7xl mx-auto">
    <h1 class="text-5xl font-bold mt-0 mb-18 text-center bg-blue-500 bg-clip-text text-transparent">
      Products
    </h1>

    <!-- 🔍 Search + Filters -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
      <input v-model="searchQuery" type="text" placeholder="Search products..."
        class="w-full sm:w-1/3 px-4 py-2 rounded-xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">

      <select v-model="selectedCategory" class="px-4 py-2 rounded-xl border border-gray-600">
        <option v-for="cat in categories" :key="cat" :value="cat">
          {{ cat }}
        </option>
      </select>

      <select v-model="sortOption" class="px-4 py-2 rounded-xl border border-gray-600">
        <option value="default">
          Sort By
        </option>
        <option value="low">
          Price: Low to High
        </option>
        <option value="high">
          Price: High to Low
        </option>
      </select>
    </div>

    <!-- 🛍 Product Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div v-for="product in filteredProducts" :key="product.id" loading="lazy"
        class="bg-[#0f172a] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">
        <img :src="product.img"
          class="w-full h-48 object-cover rounded-t-xl transition duration-300 group-hover:scale-105">

        <div class="p-4 text-center">
          <h3 class="text-gray-300 font-semibold mb-2 group-hover:text-purple-400 transition">
            {{ product.title }}
          </h3>

          <p class="text-blue-400 font-bold mb-3">
            ${{ product.price }}
          </p>

          <!-- 🔹 View Details Button -->
          <NuxtLink :to="`/products/${product.id}`"
            class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition">
            View Details
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
