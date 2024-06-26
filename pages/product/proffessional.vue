<script setup>
import { useProductsStore } from "@/stores/product";

const productsStore = useProductsStore();

const professionalProduct = productsStore.products.filter(
  (product) => product.category === "PROFESSIONAL"
);
</script>

<template>
  <ProductCategory :productCategory="professionalProduct" />
</template>
