<script setup>
/* eslint-disable */
import { ref, computed, onMounted } from 'vue'
import { useToast } from '#imports'
import { useRouter } from 'vue-router'

const toast = useToast()
const router = useRouter()

const cart = ref([])

// Load cart
onMounted(() => {
  const savedCart = localStorage.getItem('cart')
  if (savedCart) {
    cart.value = JSON.parse(savedCart)
  }
})

// Total
const totalPrice = computed(() => {
  return cart.value
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2)
})

// Form Data
const form = ref({
  name: '',
  email: '',
  address: '',
  city: '',
  phone: ''
})

// Place Order
const placeOrder = () => {
  if (!form.value.name || !form.value.email || !form.value.address || !form.value.city || !form.value.phone) {
    toast.add({
      title: 'Missing Info',
      description: 'Please fill all fields ❗',
      color: 'error'
    })
    return
  }

  if (cart.value.length === 0) {
    toast.add({
      title: 'Cart Empty',
      description: 'Add items before placing order 🛒',
      color: 'error'
    })
    return
  }

  // Clear cart
  localStorage.removeItem('cart')
  cart.value = []

  toast.add({
    title: 'Order Placed 🎉',
    description: 'Your order has been placed successfully!',
    color: 'success'
  })

  // Redirect after 2 sec
  setTimeout(() => {
    router.push('/products')
  }, 2000)
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-12">


    <h1 class="text-4xl font-bold text-center bg-blue-500 bg-clip-text text-transparent mb-10">
      Checkout 🧾
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

      <!-- 📝 Form -->
      <div class="md:col-span-7 bg-[#0f172a] p-6 rounded-xl shadow-md space-y-4">

        <h2 class="text-xl text-gray-300 font-bold mb-4">
          Billing Details
        </h2>

        <input v-model="form.name" type="text" placeholder="Full Name"
          class="w-full px-4 py-2 rounded-lg bg-gray-800 text-white outline-none">

        <input v-model="form.email" type="email" placeholder="Email"
          class="w-full px-4 py-2 rounded-lg bg-gray-800 text-white outline-none">

        <input v-model="form.phone" type="text" placeholder="Phone Number"
          class="w-full px-4 py-2 rounded-lg bg-gray-800 text-white outline-none">

        <input v-model="form.city" type="text" placeholder="City"
          class="w-full px-4 py-2 rounded-lg bg-gray-800 text-white outline-none">

        <textarea v-model="form.address" placeholder="Address"
          class="w-full px-4 py-2 rounded-lg bg-gray-800 text-white outline-none" />

      </div>

      <!-- 💳 Order Summary -->
      <div class="md:col-span-5 bg-[#1f2937] p-6 rounded-xl shadow-md h-fit mt-8 md:mt-18">

        <h2 class="text-xl text-gray-300 font-bold mb-4">
          Order Summary
        </h2>

        <div v-for="item in cart" :key="item.id" class="flex justify-between text-gray-300 mb-2">
          <span>{{ item.title }} (x{{ item.quantity }})</span>
          <span>${{ item.price * item.quantity }}</span>
        </div>

        <hr class="my-4 border-gray-600">

        <div class="flex justify-between text-lg text-white font-bold">
          <span>Total:</span>
          <span>${{ totalPrice }}</span>
        </div>

        <button class="w-full mt-6 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition"
          @click="placeOrder">
          Place Order
        </button>

      </div>
    </div>
  </div>
</template>
