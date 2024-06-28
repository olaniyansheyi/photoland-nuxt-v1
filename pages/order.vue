<script setup>
import { watchEffect } from "vue";
import { useOrderStore } from "~/stores/order.js";

const orderStore = useOrderStore();

// onMounted(async () => {
//   await orderStore.getOrder(orderStore.currentOrderId)
// })

watchEffect(async () => {
  Number(orderStore.currentOrderId);
  await orderStore.getOrder(orderStore.currentOrderId);
});

definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <div
    v-if="orderStore.error || !orderStore.currentOrderId"
    class="px-4 py-5 h-[50vh] text-white text-center"
  >
    <h2 class="text-xl font-semibold mb-4 tracking-wide">Error</h2>
    <p class="text-red-500 text-lg font-semibold py-3 tracking-wide">
      please make sure you entered your product order Id correctly.
    </p>
    <div class="flex justify-center items-center gap-x-5 mt-5">
      <NuxtLink to="/">
        <button
          class="text-primary bg-accent hover:bg-accent-hover px-5 py-2 font-semibold rounded-lg"
        >
          Go to Home
        </button>
      </NuxtLink>
    </div>
  </div>
  <div v-else class="px-4 space-y-8 text-white py-5 sm:py-20">
    <div class="flex items-center justify-between flex-wrap gap-2">
      <h2 class="text-xl font-semibold mb-4 sm:mb-0">
        Your orderId: #se1y-{{ orderStore.order.id }}
      </h2>

      <div class="space-x-2">
        <h2 class="text-xl font-semibold mb-4 sm:mb-0">Your order status:</h2>
        <span
          class="bg-green-500 rounded-full py-1 px-3 text-sm uppercase font-semibold text-green-50"
        >
          {{ orderStore.order.status }}
        </span>
      </div>
    </div>

    <div
      class="bg-gradient-to-t from-[#1F2126] to-[#33363D] drop-shadow-2xlflex flex-wrap items-center justify-between gap-2 py-5 px-5"
    >
      <p class="font-medium">{{ orderStore.order.hoursLeft }}Hours left 😃</p>
      <p class="text-xs text-accent">
        (Estimated delivery: {{ orderStore.order.deliveryDay }}, 08:31 AM)
      </p>
      <p class="text-sm capitalize italic text-accent mt-3">
        Your calling number: {{ orderStore.order.phoneNumber }}
      </p>
    </div>

    <ul class="divide-y divide-yellow-500 border-b border-t px-5">
      <li
        v-for="product in orderStore.order.products"
        :key="product.id"
        class="py-3 space-y-1"
      >
        <div class="flex text-sm items-center justify-between gap-4">
          <p>
            <span class="font-bold">{{ product.quantity }}&times;</span
            >{{ product.name }}
          </p>
          <p class="font-bold">
            ${{ product.quantity * product.unitPrice }}.00
          </p>
        </div>
        <p class="text-sm capitalize italic text-accent">
          {{ orderStore.order.name }}
        </p>
      </li>
    </ul>

    <div
      class="bg-gradient-to-t from-[#1F2126] to-[#33363D] drop-shadow-2xl space-y-2 px-6 py-5"
    >
      <p class="text-sm font-normal text-accent">
        Total Price: ${{ orderStore.totalProductsPrice }}.00
      </p>
      <p class="text-sm font-normal text-accent">
        Your address: {{ orderStore.order.address }}
      </p>
      <p class="font-bold">
        To pay on delivery: ${{ orderStore.totalProductsPrice }}.00
      </p>
    </div>
    <div class="flex justify-center items-center gap-x-5">
      <NuxtLink to="/">
        <button
          class="text-primary bg-accent hover:bg-accent-hover px-5 py-2 font-semibold rounded-lg mt-3"
        >
          Continue shoping
        </button>
      </NuxtLink>
      <a href="https://wa.me/8135158754">
        <button
          class="text-primary bg-accent hover:bg-accent-hover px-5 py-2 font-semibold rounded-lg mt-3"
        >
          Contact for Help
        </button>
      </a>
    </div>
  </div>
</template>
