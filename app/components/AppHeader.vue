<template>
  <header class="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow border-b border-gray-200 dark:border-gray-800">
    <UContainer class="flex items-center justify-between h-16">
      <!-- Left: Logo / Title -->
      <h1 class="text-4xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Smart Shop
      </h1>

      <!-- Center: Navigation links -->
      <nav class="flex-1 flex justify-center gap-6  ">
        <NuxtLink class="bg-blue-400 bg-clip-text text-transparent hover:text-purple-300" to="/">Home</NuxtLink>
        <NuxtLink class="bg-blue-400 bg-clip-text text-transparent hover:text-purple-300" to="/products">Products
        </NuxtLink>
        <NuxtLink class="bg-blue-400 bg-clip-text text-transparent hover:text-purple-300" to="/cart">Cart</NuxtLink>
        <NuxtLink class="bg-blue-400 bg-clip-text text-transparent hover:text-purple-300" to="/checkout">Checkout
        </NuxtLink>
        <NuxtLink class="bg-blue-400 bg-clip-text text-transparent hover:text-purple-300" to="/about">About</NuxtLink>
        <NuxtLink class="bg-blue-400 bg-clip-text text-transparent hover:text-purple-300" to="/contact">Contact
        </NuxtLink>
      </nav>

      <!-- Right: Color Mode Button -->
      <div class="bg-blue-400 bg-clip-text text-transparent hover:text-purple-600">
        <UColorModeButton />
      </div>
    </UContainer>
  </header>
</template>
