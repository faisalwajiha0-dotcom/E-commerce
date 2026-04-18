<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useToast } from '#imports'

const route = useRoute()
const toast = useToast()

// 🔥 Fetch products
const { data } = await useFetch('/api/products')

// Safe list
const products = computed(() => {
    return Array.isArray(data.value)
        ? data.value
        : data.value?.data || []
})

// Current product
const product = computed(() => {
    return products.value.find(
        p => p.id == route.params.id
    )
})

// Related products
const relatedProducts = computed(() => {
    if (!product.value) return []

    return products.value.filter(
        p =>
            p.category === product.value.category &&
            p.id !== product.value.id
    )
})

// 🛒 Add to cart (localStorage version simple)
const addToCart = p => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')

    cart.push({
        productId: p.id,
        title: p.title,
        price: p.price,
        image: p.image,
        quantity: 1
    })

    localStorage.setItem('cart', JSON.stringify(cart))

    toast.add({
        title: 'Added',
        description: `${p.title} added 🛒`,
        color: 'success'
    })
}
</script>

<template>
    <div class="max-w-6xl mx-auto px-4 py-10">

        <NuxtLink to="/products" class="text-blue-500">
            ← Back
        </NuxtLink>

        <!-- If product not loaded -->
        <div v-if="!product" class="text-center mt-10">
            Product not found
        </div>

        <div v-else class="grid md:grid-cols-2 gap-8 mt-6">

            <img :src="product.image" class="rounded-xl w-full h-80 object-cover">

            <div>

                <h1 class="text-3xl font-bold text-white">
                    {{ product.title }}
                </h1>

                <p class="text-blue-400 text-xl mt-2">
                    ${{ product.price }}
                </p>

                <p class="text-gray-400 mt-2">
                    Category: {{ product.category }}
                </p>

                <p class="text-gray-300 mt-4">
                    {{ product.description }}
                </p>

                <button class="mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg" @click="addToCart(product)">
                    Add to Cart
                </button>

            </div>

        </div>

        <!-- Related -->
        <h2 class="text-2xl font-bold mt-10 mb-4">
            Related Products
        </h2>

        <div class="grid md:grid-cols-4 gap-4">

            <div v-for="r in relatedProducts" :key="r.id" class="bg-[#0f172a] p-3 rounded-lg">

                <img :src="r.image" class="h-32 w-full object-cover">

                <p class="text-white mt-2">{{ r.title }}</p>
                <p class="text-blue-400">${{ r.price }}</p>

                <NuxtLink :to="`/products/${r.id}`" class="text-blue-500">
                    View
                </NuxtLink>

            </div>

        </div>

    </div>
</template>