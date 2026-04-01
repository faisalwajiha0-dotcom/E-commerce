<script setup lang="ts">
const links = [
  { label: 'Home', to: '/' },
  { label: 'Product ', to: '/product' },
  { label: 'ProductCard ', to: '/productcard' },
]
</script>

<template>
  <UMain>
    <UHeader>
      <!-- logo -->
      <template #title>
        <Logo class="font-bold text-3xl">
          E-commerce
        </Logo>
      </template>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-6">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-sm font-medium hover:text-primary transition-colors"
          active-class="text-primary">
          {{ link.label }}
        </NuxtLink>
      </nav>

      <template #right>
        <UColorModeButton />
      </template>
    </UHeader>
  </UMain>
</template>
