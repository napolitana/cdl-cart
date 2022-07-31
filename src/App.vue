<script setup>
import useCart from '@/composables/useCart.js'
import ProductsList from '@/components/ProductsList.vue'
import CartShopping from '@/components/CartShopping.vue'

const { cartOpen, toggleCart, cartTotal } = useCart()
</script>

<template>
  <div>
    <header :class="$style.header">
      <span>Logo</span>
      <div>
        <button @click="toggleCart">Cart</button>
        <span>{{ cartTotal }}</span>
      </div>
    </header>
    <main :class="$style.main">
      <ProductsList />
    </main>
    <aside :class="$style.aside" v-if="cartOpen">
      <CartShopping />
    </aside>
  </div>
</template>

<style lang="scss" module>
.header {
  position: fixed;
  top: 0;
  height: 72px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid var(--border-color);
}

.main {
  height: calc(100vh - 72px);
  max-width: 1200px;
  margin: 72px auto 0 auto;
}

.aside {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
