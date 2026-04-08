<script setup>
/* eslint-disable */
import { ref, onMounted } from 'vue'
import { useToast } from '#imports'

const toast = useToast()

// ✅ Products array (image + price included)
const products = [
  { title: 'Wireless Headphones', price: 99, img: '/images/headphone.jpg' },
  { title: 'Stylish Jacket', price: 79, img: '/images/jacket.jpg' },
  { title: 'Running Shoes', price: 120, img: '/images/shoe.jpg' },
  { title: 'Luxury Watch', price: 150, img: '/images/watch.jpg' }
]

const cart = ref([])

onMounted(() => {
  if (localStorage.getItem('cart')) {
    cart.value = JSON.parse(localStorage.getItem('cart'))
  }
})

// ✅ Updated function (full product save + toast)
const addToCart = (product) => {
  const existing = cart.value.find(item => item.title === product.title)

  if (existing) {
    existing.quantity++
  } else {
    cart.value.push({ ...product, quantity: 1 })
  }

  localStorage.setItem('cart', JSON.stringify(cart.value))

  toast.add({
    title: 'Added to Cart',
    description: `${product.title} added successfully 🛒`,
    color: 'success'
  })
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
      <UButton label="Shop Now" size="lg" to="/products"
        class="mt-4 hover:scale-105 transition  bg-linear-to-r from-blue-500 to-purple-600 text-white duration-300" />
    </section>

    <!-- 1️⃣ Featured Categories -->
    <section class="mb-14">
      <h2
        class="text-3xl font-bold text-center mb-8 mt-6 bg-linear-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
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

        <div v-for="product in products" :key="product.title"
          class="bg-[#0f172a] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">
          <img :src="product.img" :alt="product.title" loading="lazy"
            class="w-full h-48 object-cover rounded-xl transition duration-300 group-hover:scale-110">

          <div class="text-center p-4">
            <h3 class="font-semibold mb-2 text-gray-300 group-hover:text-purple-400 transition">
              {{ product.title }}
            </h3>

            <p class="text-blue-400 font-bold mb-3">
              ${{ product.price }}
            </p>

            <UButton label="Add to Cart" size="sm"
              class="hover:scale-105 transition bg-blue-600 hover:bg-blue-700 text-white duration-300"
              @click="addToCart(product)" />
          </div>
        </div>

      </div>
    </section>
  </div>
</template>
