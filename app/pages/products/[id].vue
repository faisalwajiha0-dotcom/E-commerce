<script setup>
/* eslint-disable */
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useToast } from '#imports'

const toast = useToast()
const route = useRoute()
const router = useRouter()

// 🔥 all products from API (same as index page)
const { data: products } = await useFetch('/api/products')

const productId = Number(route.params.id)

const product = computed(() =>
    products.value?.find(p => p.id === productId)
)

if (!product.value) {
    router.push('/products')
}

const addToCart = async prod => {
    await $fetch('/api/cart', {
        method: 'POST',
        body: {
            userId: 1,
            productId: prod.id,
            quantity: 1
        }
    })

    toast.add({
        title: 'Success',
        description: `${prod.title} added to cart 🛒`,
        color: 'success'
    })
}

const relatedProducts = computed(() => {
    if (!products.value || !product.value) return []

    return products.value.filter(
        p => p.category === product.value.category && p.id !== product.value.id
    )
})
</script>

<template>
    <div class="max-w-7xl mx-auto px-4 py-8">
        <NuxtLink to="/products" class="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 font-medium">
            ← Back to Products
        </NuxtLink>

        <!-- Product Details -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
                <img :src="product.img" :alt="product.title" class="rounded-xl shadow-lg w-full object-cover">
            </div>

            <div class="space-y-4">
                <h1 class="text-3xl md:text-4xl font-bold">
                    {{ product.title }}
                </h1>
                <p class="text-xl text-gray-500 font-semibold">
                    ${{ product.price }}
                </p>
                <p class="text-gray-400">
                    Category: {{ product.category }}
                </p>
                <p class="text-gray-400">
                    {{ product.description }}
                </p>

                <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
                    @click="addToCart(product)">
                    Add to Cart
                </button>
            </div>
        </div>

        <!-- ✅ FIXED Related Products -->
        <div>
            <h2 class="text-2xl font-bold mb-6">
                Related Products
            </h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div v-for="related in relatedProducts" :key="related.id"
                    class="bg-[#0f172a] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">
                    <img :src="related.img"
                        class="w-full h-48 object-cover rounded-t-xl transition duration-300 group-hover:scale-105">

                    <div class="p-4 text-center">
                        <h3 class="text-gray-300 font-semibold mb-2 group-hover:text-purple-400 transition">
                            {{ related.title }}
                        </h3>

                        <p class="text-blue-400 font-bold mb-3">
                            ${{ related.price }}
                        </p>

                        <!-- ✅ SINGLE LINK -->
                        <NuxtLink :to="`/products/${related.id}`"
                            class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition">
                            View Details
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
