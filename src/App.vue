<script setup>
import useCart from '@/composables/useCart.js'
import ProductsList from '@/components/ProductsList.vue'
import CartShopping from '@/components/CartShopping.vue'

const { cartOpen, toggleCart, cartTotal } = useCart()
</script>

<template>
  <div>
    <header style="display: flex; justify-content: space-around">
      <span>Logo</span>
      <div>
        <button @click="toggleCart">Cart</button>
        <span>{{ cartTotal }}</span>
      </div>
    </header>
    <main>
      <ProductsList />
    </main>
    <aside v-if="cartOpen">
      <CartShopping />
    </aside>
  </div>
</template>

<style scoped></style>
