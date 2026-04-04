<script setup>
</script>

<template>
  <div class="mt-6 px-4">
    <!-- 🔥 HERO SECTION -->
    <section class="bg-linear-to-r from-blue-600 to-purple-600 text-white py-20 px-6 text-center rounded-3xl">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">
        Welcome to Smart Shop 🛍️
      </h1>

      <p class="text-lg mb-6">
        Discover amazing products at the best prices
      </p>

      <UButton
        label="Shop Now"
        size="lg"
        color="info"
        variant="solid"
        to="/products"
        class="mt-4" />
    </section>

    <!-- 1️⃣ Featured Categories -->
    <section class="mb-14">
      <h2 class="text-3xl font-bold text-center mb-8 mt-6 bg-linear-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
        Shop by Category
      </h2>
      <div class="grid grid-cols-4 gap-4">
        <div class="group overflow-hidden rounded-xl">
          <img
            src="/images/electronics.jpg"
            class="w-full h-48 object-cover bg-white rounded-xl transition duration-300 group-hover:scale-110">

          <p class="text-center mt-4 text-gray-300 font-semibold group-hover:text-purple-400 transition">
            Electronics
          </p>
        </div>

        <div class="group overflow-hidden rounded-xl">
          <img src="/images/clothing.jpg" class="w-full h-48 object-cover bg-white rounded-xl transition duration-300 group-hover:scale-110">
          <p class="text-center mt-4 text-gray-300 font-semibold group-hover:text-purple-400 transition">
            Clothing
          </p>
        </div>

        <div class="group overflow-hidden rounded-xl">
          <img src="/images/shoes.jpg" class="w-full h-48 object-cover bg-white rounded-xl transition duration-300 group-hover:scale-110">
          <p class="text-center mt-4 text-gray-300 font-semibold group-hover:text-purple-400 transition ">
            Shoes
          </p>
        </div>

        <div class="group overflow-hidden rounded-xl">
          <img src="/images/accessories.jpg" class="w-full h-48 object-cover bg-white rounded-xl transition duration-300 group-hover:scale-110">
          <p class="text-center mt-4 text-gray-300 font-semibold group-hover:text-purple-400 transition">
            Accessories
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
