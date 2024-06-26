<script setup>
import { useProductsStore } from "~/stores/product";

const productsStore = useProductsStore();

const mirrorlessProduct = productsStore.products.filter(
  (product) => product.category === "MIRRORLESS"
);
</script>

<template>
  <ProductCategory :productCategory="mirrorlessProduct" />
</template>
