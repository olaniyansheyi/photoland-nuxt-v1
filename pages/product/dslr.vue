<script setup>
import { useProductsStore } from "@/stores/product";

const productsStore = useProductsStore();

const dslrProduct = productsStore.products.filter(
  (product) => product.category === "DSLR"
);
</script>

<template>
  <ProductCategory :productCategory="dslrProduct" />
</template>
