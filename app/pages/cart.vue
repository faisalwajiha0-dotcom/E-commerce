<script setup>
/* eslint-disable */
import { ref, computed, onMounted } from 'vue'
import { useToast } from '#imports'

const toast = useToast()

// Cart state
const cart = ref([])

// Load cart from localStorage
onMounted(() => {
  const savedCart = localStorage.getItem('cart')
  if (savedCart) {
    cart.value = JSON.parse(savedCart)
  }
})

// Total price
const totalPrice = computed(() => {
  return cart.value
    .reduce((sum, item) => sum + (item.price * item.quantity), 0)
    .toFixed(2)
})

// Remove item
const removeItem = index => {
  const removed = cart.value[index]
  cart.value.splice(index, 1)
  localStorage.setItem('cart', JSON.stringify(cart.value))

  toast.add({
    title: 'Removed',
    description: `${removed.title} removed ❌`,
    color: 'error'
  })
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

// Checkout
const proceedToCheckout = () => {
  if (cart.value.length === 0) {
    toast.add({
      title: 'Cart Empty',
      description: 'Please add items before checkout 🛒',
      color: 'error'
    })
    return
  }

  toast.add({
    title: 'Coming Soon',
    description: 'Checkout feature coming soon 🚀',
    color: 'success'
  })
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-12">

    <h1 class="text-5xl font-bold mb-4 text-center flex items-center justify-center gap-3">
      <span class="bg-blue-500 bg-clip-text text-transparent">
        Your Cart
      </span>
      <UIcon name="i-lucide-shopping-cart" class="text-5xl text-blue-500" />

    </h1>

    <!-- ✅ Empty Cart -->
    <div v-if="cart.length === 0" class="text-center text-gray-400 space-y-4">
      <p class="text-lg text-gray-300">Your cart is empty </p>

      <NuxtLink to="/products"
        class="inline-block bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg transition">
        Shop Now
      </NuxtLink>
    </div>

    <!-- ✅ Cart Content -->
    <div v-else class="grid grid-cols-1 md:grid-cols-12 gap-6">

      <!-- Cart Items -->
      <div class="md:col-span-8 space-y-4">
        <div v-for="(item, index) in cart" :key="index" class="flex items-center bg-[#0f172a] p-4 rounded-xl shadow-md">

          <img :src="item.img || '/images/placeholder.png'" :alt="item.title"
            class="w-24 h-24 object-cover rounded-xl mr-4 transition duration-300 hover:scale-105">

          <div class="flex-1">
            <h2 class="text-gray-300 font-semibold text-lg">
              {{ item.title }}
            </h2>

            <p class="text-blue-400 font-bold mt-1">
              ${{ item.price }}
            </p>

            <!-- Quantity -->
            <div class="flex items-center mt-3 space-x-2">

              <button :disabled="item.quantity === 1"
                class="px-2 py-1 bg-gray-700 text-white rounded disabled:opacity-50" @click="decreaseQty(index)">
                -
              </button>

              <span class="text-gray-300 font-semibold">
                {{ item.quantity }}
              </span>

              <button class="px-2 py-1 bg-gray-700 text-white rounded" @click="increaseQty(index)">
                +
              </button>

            </div>
          </div>

          <!-- Remove -->
          <button class="text-red-500 ml-4 font-bold hover:underline" @click="removeItem(index)">
            Remove
          </button>
        </div>
      </div>

      <!-- Cart Summary -->
      <div class="md:col-span-4 bg-[#1f2937] p-6 rounded-xl shadow-md h-fit mt-14">

        <h2 class="text-gray-300 text-xl font-bold mb-4">
          Order Summary
        </h2>

        <div class="flex justify-between text-gray-300 mb-2">
          <span>Items:</span>
          <span>{{ cart.length }}</span>
        </div>

        <div class="flex justify-between text-gray-300 mb-4">
          <span>Total:</span>
          <span class="font-bold text-blue-400">
            ${{ totalPrice }}
          </span>
        </div>

        <button class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded transition"
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
