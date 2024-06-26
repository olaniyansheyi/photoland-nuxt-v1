<script setup>
import { useProductsStore } from "~/stores/product.js";
import { useCartStore } from "~/stores/cart.js";
import { onMounted } from "vue";

const cartStore = useCartStore();

const productsStore = useProductsStore();

onMounted(() => {
  productsStore.getProducts();
});
</script>

<template>
  <NuxtLayout>
    <Spinner v-if="productsStore.loading" />
    <CompleteCartOverview v-if="cartStore.openCart" />
    <NuxtPage />
  </NuxtLayout>
</template>
