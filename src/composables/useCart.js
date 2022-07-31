import { reactive, ref, computed } from 'vue'

const products = ref([
  {
    id: 'A',
    name: 'Product A',
    price: 50,
    quantity: 0,
    total: 0,
    offer: {
      minQuantity: 3,
      total: 130,
    },
  },
  {
    id: 'B',
    name: 'Product B',
    price: 30,
    quantity: 0,
    total: 0,
    offer: {
      minQuantity: 3,
      total: 45,
    },
  },
  {
    id: 'C',
    name: 'Product C',
    price: 20,
    quantity: 0,
    total: 0,
  },
  {
    id: 'D',
    name: 'Product D',
    price: 15,
    quantity: 0,
    total: 0,
  },
])

const cart = reactive({
  items: [],
  open: false,
})

export default function useCart() {
  const cartOpen = computed(() => cart.open)
  const toggleCart = () => (cart.open = !cart.open)

  const addToCart = (product) => {
    const index = cart.items.findIndex((item) => item.id === product.id)
    if (index > -1) cart.items.push({ ...product, quantity: 1 })
    else cart.items[index].quantity++
  }

  const decreaseQuantity = (id) => {
    const index = cart.items.findIndex((item) => item.id === id)
    if (cart.items[index].quantity > 0) cart.items[index].quantity--
    else cart.items.splice(index, 1)
  }

  // return items in cart with total price per product calculated
  const cartItems = computed(() => {
    return cart.items.map((item) => {
      const combos = item.quantity / item?.offer?.minQuantity
      const units = item.quantity % item?.offer?.minQuantity

      return {
        ...item,
        total: item.offer
          ? item.offer.total * combos + item.price * units
          : item.price * item.quantity,
      }
    })
  })

  const cartTotal = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.total, 0)
  })

  return {
    products,
    cartOpen,
    toggleCart,
    addToCart,
    decreaseQuantity,
    cartItems,
    cartTotal,
  }
}
