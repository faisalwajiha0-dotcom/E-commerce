<script setup>
/* eslint-disable */
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useToast } from '#imports' // ✅ FIXED

const toast = useToast()

// Sample products array
const products = [
    { id: 1, title: 'Wireless Headphones', price: 99, category: 'Electronics', img: '/images/headphone.jpg', description: 'High-quality wireless headphones with noise cancellation and long battery life.' },
    { id: 2, title: 'Stylish Jacket', price: 79, category: 'Clothing', img: '/images/jacket.jpg', description: 'Trendy jacket made from premium materials, perfect for winter fashion.' },
    { id: 3, title: 'Running Shoes', price: 120, category: 'Shoes', img: '/images/shoe.jpg', description: 'Lightweight running shoes designed for comfort and performance.' },
    { id: 4, title: 'Luxury Watch', price: 150, category: 'Accessories', img: '/images/watch.jpg', description: 'Elegant wristwatch with leather strap and precise quartz movement.' },
    { id: 5, title: 'Smartphone', price: 500, category: 'Electronics', img: '/images/smartphone.jpg', description: 'Latest smartphone with high-resolution camera and fast processor.' },
    { id: 6, title: 'Denim Jeans', price: 60, category: 'Clothing', img: '/images/jeans.jpg', description: 'Comfortable and durable denim jeans suitable for casual wear.' },
    { id: 7, title: 'Sneakers', price: 110, category: 'Shoes', img: '/images/sneakers.jpg', description: 'Stylish sneakers with cushioned sole for everyday wear.' },
    { id: 8, title: 'Handbag', price: 130, category: 'Accessories', img: '/images/handbag.jpg', description: 'Fashionable handbag with multiple compartments and elegant design.' },
    { id: 9, title: 'Bluetooth Speaker', price: 80, category: 'Electronics', img: '/images/speaker.jpg', description: 'Portable Bluetooth speaker with deep bass and clear sound.' },
    { id: 10, title: 'Formal Shirt', price: 55, category: 'Clothing', img: '/images/shirt.jpg', description: 'Classic formal shirt made from soft fabric, ideal for office wear.' },
    { id: 11, title: 'Leather Boots', price: 140, category: 'Shoes', img: '/images/boots.jpg', description: 'Premium leather boots, perfect for style and durability.' },
    { id: 12, title: 'Sunglasses', price: 70, category: 'Accessories', img: '/images/sunglasses.jpg', description: 'Stylish sunglasses with UV protection for sunny days.' },
]

const route = useRoute()
const router = useRouter()

const productId = Number(route.params.id)
const product = ref(products.find(p => p.id === productId))

if (!product.value) {
    router.push('/products')
}

const cart = ref([])
onMounted(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) cart.value = JSON.parse(savedCart)
})

const addToCart = prod => {
    const existing = cart.value.find(i => i.id === prod.id)
    if (existing) {
        existing.quantity++
    } else {
        cart.value.push({ ...prod, quantity: 1 })
    }
    localStorage.setItem('cart', JSON.stringify(cart.value))

    toast.add({
        title: 'Success',
        description: `${prod.title} added to cart 🛒`,
        color: 'success'
    })
}

const relatedProducts = computed(() => {
    return products.filter(p => p.category === product.value.category && p.id !== product.value.id)
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

                        <p class="text-blue-400 font-bold mb-3">${{ related.price }}</p>

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
