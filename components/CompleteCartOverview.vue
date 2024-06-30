<script setup>
import { useCartStore } from "~/stores/cart";

const cartStore = useCartStore();

// const totalProductsPrice = cartStore.cart.reduce(
//   (acc, item) => acc + item.unitPrice * item.quantity,
//   0
// );
</script>
<template>
  <div
    :class="
      cartStore.emptyCart
        ? 'fixed w-full sm:w-[50%] lg:w-[30%] top-0 bottom-0 right-0 z-[100]  px-5 text-white h-[100vh] flex justify-center gap-y-5 items- flex-col pt-5 bg-primary pb-12 sm:pb-10'
        : 'fixed w-full sm:w-[50%] lg:w-[30%] top-0 bottom-0 right-0 z-[100]  px-5 text-white h-[100vh] flex justify-start gap-y-5 items- flex-col pt-20 bg-primary pb-12 sm:pb-10 '
    "
  >
    <span class="bg-primary h-[2rem]">
      <NuxtLink to="/">
        <font-awesome-icon
          :icon="['fas', 'times']"
          @click.prevent="cartStore.handleToggleCart"
          class="text-white text-3xl font-semibold cursor-pointer"
        />
      </NuxtLink>
    </span>

    <div v-if="cartStore.cart.length === 0" class="pt-24 text-center">
      <h4 class="text-2xl tracking-wide font-semibold">Your Cart Is Empty</h4>
      <NuxtLink to="/">
        <button
          @click="cartStore.handleToggleCart"
          class="font-semibold bg-accent text-primary rounded-lg px-6 py-2 mt-5"
        >
          Shop Now
        </button>
      </NuxtLink>
    </div>

    <div
      v-else
      class="flex flex-col gap-y-5 overflow-y-scroll flex-1 items-start justify-start pt-5"
    >
      <div
        v-for="cartItem in cartStore.cart"
        :key="cartItem.id"
        class="w-full flex gap-x-2 relative border-b-[1px] gap-y-2 border-accent"
      >
        <div class="w-[22%]">
          <img :src="cartItem.image" class="w-[80%]" alt="" />
        </div>
        <div class="w-[70%]">
          <p class="text-xs font-normal tracking-wide">
            {{ cartItem.name }}
          </p>
          <span class="flex items-center justify-start gap-x-5 w-full mt-3">
            <select
              v-model="cartItem.quantity"
              :value="cartItem.quantity"
              class="outline-none w-[35%] rounded-lg py-1 px-1 text-primary"
            >
              <option :value="1">1</option>
              <option :value="2">2</option>
              <option :value="3">3</option>
              <option :value="4">4</option>
              <option :value="5">5</option>
            </select>
            <h4 class="text-lg tracking-wide font-semibold text-accent">
              ${{ cartItem.unitPrice * cartItem.quantity }}
            </h4>
          </span>
          <h4 class="text-md tracking-wide font-normal text-accent my-2">
            ${{ cartItem.unitPrice }} per 1 Unit
          </h4>
        </div>
        <font-awesome-icon
          :icon="['fas', 'times']"
          @click="cartStore.handleDeleteCart(cartItem.id)"
          class="text-white text-2xl font-bold absolute top-8 right-2 cursor-pointer"
        />
      </div>
    </div>

    <div v-if="cartStore.cart.length !== 0" class="h-auto bg-primary pt-2 px-5">
      <div class="flex items-center justify-between pb-6">
        <span class="flex flex-col gap-y-5">
          <h4 class="font-semibold text-2xl tracking-wide text-left">Total:</h4>
          <button
            @click="cartStore.handleClearCart"
            class="sm:px-8 py-2 px-5 rounded-lg bg-accent hover:bg-accent-hover tracking-wide font-semibold text-primary"
          >
            Clear Cart
          </button>
        </span>
        <span class="flex flex-col gap-y-5">
          <h4 class="font-semibold text-2xl tracking-wide text-right">
            ${{ cartStore.totalProductsPrice }}
          </h4>

          <NuxtLink to="/checkout">
            <button
              @click="
                () => {
                  cartStore.handleToggleCart();
                }
              "
              class="sm:px-8 px-5 py-2 rounded-lg bg-accent hover:bg-accent-hover tracking-wide font-semibold text-primary"
            >
              Order Now
            </button>
          </NuxtLink>
        </span>
      </div>
    </div>
  </div>
</template>
