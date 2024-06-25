<script setup>
import ProductCategory from "../components/ProductCategory.vue";
import { useProductsStore } from "@/stores/products";

const productsStore = useProductsStore();

const filmProduct = productsStore.products.filter(
  (product) => product.category === "FILM"
);
</script>

<template>
  <ProductCategory :productCategory="filmProduct" />
</template>
