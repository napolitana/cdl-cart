<script setup>
import useCart from '@/composables/useCart.js'

defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const { addToCart, decreaseQuantity, cartItems } = useCart()

const getProductQuantity = (product) => {
  const item = JSON.parse(JSON.stringify(cartItems.value)).find(
    (x) => x.id === product.id
  )
  return item ? item.quantity : 0
}
</script>

<template>
  <div style="border: 1px solid black">
    <p>{{ product.name }}</p>
    <p>Price: {{ product.price }}</p>
    <div v-if="getProductQuantity(product) > 0" style="display: flex">
      <button @click="decreaseQuantity(product.id)">-</button>
      <p>
        {{ getProductQuantity(product) }}
      </p>
      <button @click="addToCart(product)">+</button>
    </div>
    <div v-else>
      <button @click="addToCart(product)">Add</button>
    </div>
  </div>
</template>

<style lang="scss" module></style>
