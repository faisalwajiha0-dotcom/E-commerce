<template>
  <header class="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow border-b border-gray-200 dark:border-gray-800">
    <UContainer class="flex items-center justify-between h-16">
      <!-- Left: Logo / Title -->
      <h1 class="text-3xl font-bold">
        E-commerce
      </h1>

      <!-- Center: Navigation links -->
      <nav class="flex-1 flex justify-center gap-6">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/products">Products</NuxtLink>
        <NuxtLink to="/productCard">ProductCard</NuxtLink>
      </nav>

      <!-- Right: Color Mode Button -->
      <div>
        <UColorModeButton />
      </div>
    </UContainer>
  </header>
</template>
