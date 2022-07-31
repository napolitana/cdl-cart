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
  <div :class="$style.item">
    <div>
      <img
        src="https://fakeimg.pl/80x60/"
        :alt="`Product thumbnail of ${item.name}`"
      />
    </div>
    <div :class="$style.item__info">
      <p>{{ item.name }}</p>
      <p>Unit price: {{ item.price }}</p>
      <div style="display: flex">
        <button @click="decreaseQuantity(item.id)">-</button>
        <p>{{ item.quantity }}</p>
        <button @click="addToCart(item)">+</button>
      </div>
      <p>Total: {{ item.total }}</p>
    </div>
  </div>
</template>

<style lang="scss" module>
.item {
  width: 210px;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 1.4rem;

  &__info {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
}
</style>
