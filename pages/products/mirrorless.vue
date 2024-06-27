<script setup>
import { useProductsStore } from "~/stores/product";

onMounted(async () => {
  await productsStore.getProducts();
});

const productsStore = useProductsStore();

const mirrorlessProduct = computed(() =>
  productsStore.products
    ? productsStore.products.filter(
        (product) => product && product.category === "MIRRORLESS"
      )
    : []
);
</script>

<template>
  <ProductCategory :productCategory="mirrorlessProduct" />
</template>
