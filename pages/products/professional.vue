<script setup>
import { useProductsStore } from "@/stores/product";

onMounted(async () => {
  await productsStore.getProducts();
});

const productsStore = useProductsStore();

const professionalProduct = computed(() =>
  productsStore.products
    ? productsStore.products.filter(
        (product) => product && product.category === "PROFESSIONAL"
      )
    : []
);
</script>

<template>
  <ProductCategory :productCategory="professionalProduct" />
</template>
