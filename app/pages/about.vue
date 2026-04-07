<script setup>
/* eslint-disable */
const teamMembers = [
  { name: 'Wajiha Faisal', role: 'Founder & CEO', img: '/images/wajiha.jpg', alt: 'wajiha' },
  { name: 'Ali Khan', role: 'Lead Developer', img: '/images/ali.jpg', alt: 'ali' },
  { name: 'Sara Ahmed', role: 'Designer', img: '/images/sara.jpg', alt: 'sara' },
]
</script>

<template>
  <section class="max-w-7xl mx-auto px-6 py-16">
    <!-- Hero / About Header -->
    <div class="text-center mb-16">
      <h1 class="text-5xl font-extrabold bg-clip-text text-transparent bg-blue-500 mb-4">
        About Us
      </h1>
      <p class="text-gray-600 dark:text-blue-200 max-w-2xl mx-auto text-lg">
        Smart Shop is your ultimate online destination for high-quality products.
        We combine style, simplicity, and a seamless shopping experience for everyone.
      </p>
    </div>

    <!-- Mission & Values -->
    <div class="grid md:grid-cols-2 gap-12 mb-16 items-center">
      <div>
        <h2 class="text-4xl font-bold mb-4 text-blue-500">
          Our Mission
        </h2>
        <p class="text-blue-200 text-lg">
          Our mission is to provide our customers with high-quality products at the best possible prices,
          combined with exceptional customer service and a seamless shopping experience. We aim to make
          online shopping simple, reliable, and enjoyable for everyone.

          We are committed to continuous innovation, bringing the latest trends and products to our platform
          while maintaining trust and transparency with our customers. Our goal is to build a strong connection
          with our community by delivering value, convenience, and satisfaction in every purchase.
        </p>
      </div>

      <img src="/images/our-mission.jpg" alt="Our Mission" class="rounded-xl shadow-lg mt-6">
    </div>

    <!-- Team Section -->
    <div class="py-16">
      <h2 class="text-4xl font-bold mb-12 text-center text-blue-500">
        Meet Our Team
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div v-for="member in teamMembers" :key="member.name"
          class="group bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

          <!-- Full Image -->
          <div class="relative h-80 overflow-hidden">
            <img :src="member.img" :alt="member.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            <!-- Optional subtle overlay -->
            <div
              class="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            </div>
          </div>

          <!-- Content -->
          <div class="p-6 text-center">
            <h3 class="text-2xl font-semibold text-white mb-1">
              {{ member.name }}
            </h3>
            <p class="text-blue-400 font-medium">
              {{ member.role }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="mt-16 text-center">
      <h2 class="text-3xl font-bold mb-4 text-blue-400">
        Join Our Journey
      </h2>
      <p class="text-blue-200">
        Explore our products and experience the Smart Shop difference!
      </p>
    </div>
  </section>
</template>
