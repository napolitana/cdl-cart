<script setup>
import CartShoppingItem from '@/components/CartShoppingItem.vue'
import useCart from '@/composables/useCart.js'

const { cartItems, cartTotal, toggleCart } = useCart()
</script>

<template>
  <div :class="$style.cart">
    <button @click="toggleCart" :class="$style.cart__close">x</button>

    <ul>
      <li v-for="item in cartItems" :key="item.id">
        <CartShoppingItem :item="item" />
      </li>
    </ul>
    <div v-if="!cartItems.length" :class="$style.cart__empty">
      Your cart is empty.
    </div>
    <div v-else :class="$style.cart__total">Total: {{ cartTotal }}</div>
  </div>
</template>

<style lang="scss" module>
.cart {
  position: relative;
  width: 250px;
  height: 100vh;
  padding: 4rem 2rem;
  background-color: white;
  border-left: 1px solid var(--border-color);

  &__close {
    position: absolute;
    top: 0;
    right: 0;
    margin: 1rem 1rem 0;
  }

  &__empty {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 1.6rem;
    font-weight: 600;
  }

  &__total {
    margin-top: 3.5rem;
    padding-top: 1rem;
    border-top: 1px solid var(--border-color);
    font-size: 2rem;
    font-weight: 600;
  }
}
</style>
