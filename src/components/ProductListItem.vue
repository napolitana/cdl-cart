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
  <div :class="$style.card">
    <div :class="$style.card__thumb">
      <img
        src="https://fakeimg.pl/170x130/"
        :alt="`Product thumbnail of ${product.name}`"
      />
      <span v-if="product.offer" :class="$style.card__offer"
        >{{ product.offer.minQuantity }} for {{ product.offer.total }}!</span
      >
    </div>
    <div :class="$style.info">
      <p :class="$style.info__title">{{ product.name }}</p>
      <p :class="$style.info__price">{{ product.price }}</p>
      <div v-if="getProductQuantity(product) > 0" style="display: flex">
        <button @click="decreaseQuantity(product.id)">-</button>
        <p>
          {{ getProductQuantity(product) }}
        </p>
        <button @click="addToCart(product)">+</button>
      </div>
      <div v-else>
        <button :class="$style.info__button" @click="addToCart(product)">
          Add
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
.card {
  --width: 200px;
  --padding-card: 1.5rem;

  width: var(--width);
  padding: var(--padding-card);
  border-radius: 0.4rem;
  border: 1px solid var(--border-color);
  font-size: 1.4rem;

  &__thumb {
    width: calc(var(--width) - var(--padding-card) * 2);
    position: relative;
  }

  &__offer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.3rem 0;
    background-color: var(--offer-color);
    color: white;
    text-align: center;
  }
}

.info {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  &__title {
    font-weight: 600;
  }

  &__price {
    font-weight: 600;
    font-size: 2rem;
  }

  &__button {
    width: calc(var(--width) - var(--padding-card) * 2);
    padding: 1rem;
    border: none;
    background-color: black;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #494949;
    }
  }
}
</style>
