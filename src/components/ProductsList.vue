<script setup>
import ProductListItem from '@/components/ProductListItem.vue'
import useCart from '@/composables/useCart.js'
const { products } = useCart()
</script>

<template>
  <div>
    <h1>Products</h1>
    <ul style="display: flex; gap: 30px">
      <li v-for="product in products" :key="product.id">
        <ProductListItem :product="product" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" module></style>
