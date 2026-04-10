<script setup>
/* eslint-disable */
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useToast } from '#imports'

const toast = useToast()
const route = useRoute()
const router = useRouter()

const { data: products } = await useFetch('/api/products')

const productId = Number(route.params.id)

const product = computed(() =>
    products.value?.find(p => p.id === productId) || null
)

// 🔥 safe redirect
if (!product.value) {
    router.push('/products')
}

const addToCart = async (prod) => {
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

        <NuxtLink to="/products" class="text-blue-600 mb-6 block">
            ← Back to Products
        </NuxtLink>

        <!-- Product -->
        <div class="grid md:grid-cols-2 gap-8 mb-12">

            <img :src="product?.image || '/images/placeholder.png'" class="rounded-xl w-full object-cover" />

            <div>

                <h1 class="text-3xl font-bold">
                    {{ product?.title }}
                </h1>

                <p class="text-xl text-gray-400 mt-2">
                    ${{ product?.price }}
                </p>

                <p class="mt-2 text-gray-400">
                    Category: {{ product?.category }}
                </p>

                <p class="mt-4 text-gray-300">
                    {{ product?.description }}
                </p>

                <button class="bg-blue-600 text-white px-6 py-3 rounded-lg mt-5" @click="addToCart(product)">
                    Add to Cart
                </button>

            </div>
        </div>

        <!-- Related -->
        <h2 class="text-2xl font-bold mb-6">
            Related Products
        </h2>

        <div class="grid md:grid-cols-4 gap-6">

            <div v-for="item in relatedProducts" :key="item.id" class="bg-[#0f172a] p-4 rounded-xl">

                <img :src="item.image || '/images/placeholder.png'" class="w-full h-40 object-cover rounded" />

                <h3 class="text-white mt-2">
                    {{ item.title }}
                </h3>

                <p class="text-blue-400">
                    ${{ item.price }}
                </p>

                <NuxtLink :to="`/products/${item.id}`" class="text-blue-500 underline">
                    View
                </NuxtLink>

            </div>

        </div>

    </div>
</template>