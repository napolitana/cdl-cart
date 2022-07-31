<script setup>
import CartShoppingItem from '@/components/CartShoppingItem.vue'
import useCart from '@/composables/useCart.js'

const { cartItems, cartTotal, toggleCart } = useCart()
</script>

<template>
  <div>
    <button @click="toggleCart">Close cart</button>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        <CartShoppingItem :item="item" />
      </li>
      <li>Total: {{ cartTotal }}</li>
    </ul>
    <span v-if="!cartItems.length">Your cart is empty.</span>
  </div>
</template>

<style lang="scss" module></style>
