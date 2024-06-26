<script setup>

import { useProductsStore } from "@/stores/product";

const productsStore = useProductsStore();

const compactProduct = productsStore.products.filter(
  (product) => product.category === "COMPACT"
);
</script>

<template>
  <ProductCategory :productCategory="compactProduct" />
</template>
