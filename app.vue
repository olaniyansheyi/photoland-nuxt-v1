<script setup>
import { useProductsStore } from "~/stores/product.js";
import { useCartStore } from "~/stores/cart.js";

const cartStore = useCartStore();

const productsStore = useProductsStore();

productsStore.getProducts();
</script>

<template>
  <mainLayout>
    <NuxtPage />
  </mainLayout>

  <Spinner v-if="productsStore.loading" />
  <CompleteCartOverview v-if="cartStore.openCart" />
</template>
