<script setup>
/* eslint-disable */
import { ref } from 'vue'

const cart = ref([])

const addToCart = product => {
  cart.value.push(product)
  alert(product + ' added to cart 🛒')
}
</script>

<template>
  <div class="mt-6 px-4">
    <!-- 🔥 HERO SECTION -->
    <section class="bg-linear-to-r from-blue-600 to-purple-600 text-white py-20 px-6 text-center rounded-3xl">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">
        Welcome to Smart Shop 🛍️
      </h1>

      <p class="text-lg mb-6 text-gray-300">
        Discover amazing products at the best prices
      </p>

      <UButton label="Shop Now" size="lg" color="info" variant="solid" to="/products"
        class="mt-6 hover:scale-105 transition duration-300" />
    </section>

    <!-- 1️⃣ Featured Categories -->
    <section class="mb-14">
      <h2
        class="text-3xl font-bold text-center mb-8 mt-6 bg-linear-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
        Shop by Category
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div class="group overflow-hidden rounded-xl">
          <img src="/images/electronics.jpg" alt="Electronics" loading="lazy"
            class="w-full h-48 object-cover bg-white rounded-xl transition duration-300 group-hover:scale-110">
          <p class="text-center mt-4 text-gray-300 font-semibold group-hover:text-purple-400 transition">
            Electronics
          </p>
        </div>

        <div class="group overflow-hidden rounded-xl">
          <img src="/images/clothing.jpg" alt="Clothing" loading="lazy"
            class="w-full h-48 object-cover bg-white rounded-xl transition duration-300 group-hover:scale-110">
          <p class="text-center mt-4 text-gray-300 font-semibold group-hover:text-purple-400 transition">
            Clothing
          </p>
        </div>

        <div class="group overflow-hidden rounded-xl">
          <img src="/images/shoes.jpg" alt="Shoes" loading="lazy"
            class="w-full h-48 object-cover bg-white rounded-xl transition duration-300 group-hover:scale-110">
          <p class="text-center mt-4 text-gray-300 font-semibold group-hover:text-purple-400 transition">
            Shoes
          </p>
        </div>

        <div class="group overflow-hidden rounded-xl">
          <img src="/images/accessories.jpg" alt="Accessories" loading="lazy"
            class="w-full h-48 object-cover bg-white rounded-xl transition duration-300 group-hover:scale-110">
          <p class="text-center mt-4 text-gray-300 font-semibold group-hover:text-purple-400 transition">
            Accessories
          </p>
        </div>
      </div>
    </section>

    <!-- ⭐ Featured Products -->
    <section class="mb-16">
      <h2
        class="text-3xl font-bold text-center mb-8 bg-linear-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
        Featured Products
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <!-- Product 1 -->
        <div class="bg-[#0f172a] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">
          <img src="/images/headphone.jpg" alt="Wireless Headphones" loading="lazy"
            class="w-full h-48 object-cover rounded-xl transition duration-300 group-hover:scale-110">

          <div class="text-center p-4">
            <h3 class="font-semibold mb-2 text-gray-300 group-hover:text-purple-400 transition">
              Wireless Headphones
            </h3>
            <p class="text-blue-400 font-bold mb-3">
              $99
            </p>

            <UButton label="Add to Cart" size="sm" color="primary" variant="solid"
              class="hover:scale-105 transition duration-300" @click="addToCart('Wireless Headphones')" />
          </div>
        </div>

        <!-- Product 2 -->
        <div class="bg-[#0f172a] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">
          <img src="/images/jacket.jpg" alt="Stylish Jacket" loading="lazy"
            class="w-full h-48 object-cover rounded-xl transition duration-300 group-hover:scale-110">

          <div class="p-4 text-center">
            <h3 class="text-gray-300 group-hover:text-purple-400 transition font-semibold mb-2">
              Stylish Jacket
            </h3>
            <p class="text-blue-400 font-bold mb-3">
              $79
            </p>

            <UButton label="Add to Cart" size="sm" color="primary" variant="solid"
              @click="addToCart('Stylish Jacket')" />
          </div>
        </div>

        <!-- Product 3 -->
        <div class="bg-[#0f172a] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">
          <img src="/images/shoe.jpg" alt="Running Shoes" loading="lazy"
            class="w-full h-48 object-cover rounded-xl transition duration-300 group-hover:scale-110">

          <div class="p-4 text-center">
            <h3 class="text-gray-300 group-hover:text-purple-400 transition font-semibold mb-2">
              Running Shoes
            </h3>
            <p class="text-blue-400 font-bold mb-3">
              $120
            </p>

            <UButton label="Add to Cart" size="sm" color="primary" variant="solid"
              @click="addToCart('Running Shoes')" />
          </div>
        </div>

        <!-- Product 4 -->
        <div class="bg-[#0f172a] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">
          <img src="/images/watch.jpg" alt="Luxury Watch" loading="lazy"
            class="w-full h-48 object-cover rounded-xl transition duration-300 group-hover:scale-110">

          <div class="p-4 text-center">
            <h3 class="text-gray-300 group-hover:text-purple-400 transition font-semibold mb-2">
              Luxury Watch
            </h3>
            <p class="text-blue-400 font-bold mb-3">
              $150
            </p>

            <UButton label="Add to Cart" size="sm" color="primary" variant="solid" @click="addToCart('Luxury Watch')" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
