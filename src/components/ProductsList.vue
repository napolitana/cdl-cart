<script setup>
import ProductListItem from '@/components/ProductListItem.vue'
import useCart from '@/composables/useCart.js'
const { products } = useCart()
</script>

<template>
  <div :class="$style.content">
    <h1 :class="$style.content__title">Products</h1>
    <p :class="$style.content__description">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab quas fuga
      praesentium aliquam odit suscipit.
    </p>
    <ul :class="$style.content__list">
      <li v-for="product in products" :key="product.id">
        <ProductListItem :product="product" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" module>
.content {
  padding-top: 3.5rem;

  &__title {
    font-size: 3.5rem;
    font-weight: 600;
    margin-bottom: 3.5rem;
  }

  &__description {
    font-size: 1.8rem;
    margin-bottom: 3.5rem;
  }

  &__list {
    display: flex;
    gap: 3rem;
  }
}
</style>
