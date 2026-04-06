<script setup>
/* eslint-disable */
import { ref, computed, onMounted } from 'vue'

// SSR-safe cart
const cart = ref([])

onMounted(() => {
  const savedCart = localStorage.getItem('cart')
  if (savedCart) {
    cart.value = JSON.parse(savedCart)
  }
})

// Total price calculate
const totalPrice = computed(() => {
  return cart.value.reduce((sum, item) => {
    return sum + (Number(item.price) || 0) * (item.quantity || 1)
  }, 0)
})

// Remove item
const removeItem = index => {
  cart.value.splice(index, 1)
  localStorage.setItem('cart', JSON.stringify(cart.value))
}

// Increase quantity
const increaseQty = index => {
  cart.value[index].quantity++
  localStorage.setItem('cart', JSON.stringify(cart.value))
}

// Decrease quantity
const decreaseQty = index => {
  if (cart.value[index].quantity > 1) {
    cart.value[index].quantity--
    localStorage.setItem('cart', JSON.stringify(cart.value))
  }
}

// Proceed to checkout
const proceedToCheckout = () => {
  if (cart.value.length === 0) {
    alert('Your cart is empty!')
    return
  }
  alert('Proceeding to checkout... (integration pending)')
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-8 text-center">
      Your Cart 🛒
    </h1>

    <div v-if="cart.length === 0" class="text-center text-gray-400">
      Your cart is empty.
      <NuxtLink to="/products" class="text-blue-500 underline ml-2">Shop Now</NuxtLink>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-12 gap-6">
      <!-- Cart Items -->
      <div class="md:col-span-8 space-y-4">
        <div v-for="(item, index) in cart" :key="index" class="flex items-center bg-[#0f172a] p-4 rounded-xl shadow-md">
          <img :src="item.img || '/images/placeholder.png'" :alt="item.title"
            class="w-24 h-24 object-cover rounded-xl mr-4">

          <div class="flex-1">
            <h2 class="text-gray-300 font-semibold text-lg">
              {{ item.title }}
            </h2>
            <p class="text-blue-400 font-bold mt-1">
              ${{ item.price }}
            </p>

            <div class="flex items-center mt-2 space-x-2">
              <button class="px-2 py-1 bg-gray-700 text-white rounded" @click="decreaseQty(index)">
                -
              </button>
              <span class="text-gray-300">{{ item.quantity }}</span>
              <button class="px-2 py-1 bg-gray-700 text-white rounded" @click="increaseQty(index)">
                +
              </button>
            </div>
          </div>

          <button class="text-red-500 ml-4 font-bold" @click="removeItem(index)">
            Remove
          </button>
        </div>
      </div>

      <!-- Cart Summary -->
      <div class="md:col-span-4 bg-[#1f2937] p-6 rounded-xl shadow-md h-fit">
        <h2 class="text-gray-300 text-xl font-bold mb-4">
          Order Summary
        </h2>

        <div class="flex justify-between text-gray-300 mb-2">
          <span>Items:</span>
          <span>{{ cart.length }}</span>
        </div>

        <div class="flex justify-between text-gray-300 mb-4">
          <span>Total:</span>
          <span class="font-bold text-blue-400">${{ totalPrice }}</span>
        </div>

        <button class="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition"
          @click="proceedToCheckout">
          Proceed to Checkout
        </button>

        <NuxtLink to="/products" class="block mt-4 text-center text-blue-400 underline">
          Continue Shopping
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
