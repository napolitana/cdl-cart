<script setup>
import useCart from '@/composables/useCart.js'

defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const { addToCart, decreaseQuantity } = useCart()
</script>

<template>
  <div>
    <p>{{ item.name }}</p>
    <p>Unit price: {{ item.price }}</p>
    <div style="display: flex">
      <button @click="decreaseQuantity(item.id)">-</button>
      <p>{{ item.quantity }}</p>
      <button @click="addToCart(item)">+</button>
    </div>
    <p>Total: {{ item.total }}</p>
  </div>
</template>

<style lang="scss" module></style>
