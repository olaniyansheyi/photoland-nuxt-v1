<script setup>
import { useProductsStore } from "~/stores/product";

onMounted(async () => {
  await productsStore.getProducts();
});

const productsStore = useProductsStore();

const filmProduct = computed(() =>
  productsStore.products
    ? productsStore.products.filter(
        (product) => product && product.category === "FILM"
      )
    : []
);
</script>

<template>
  <ProductCategory :productCategory="filmProduct" />
</template>
