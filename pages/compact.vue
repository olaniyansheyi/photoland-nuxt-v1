<script setup>
import ProductCategory from "../components/ProductCategory.vue";
import { useProductsStore } from "@/stores/products";

const productsStore = useProductsStore();

const compactProduct = productsStore.products.filter(
  (product) => product.category === "COMPACT"
);
</script>

<template>
  <ProductCategory :productCategory="compactProduct" />
</template>
