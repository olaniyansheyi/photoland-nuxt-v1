<script setup>
import { useProductsStore } from "@/stores/product";

onMounted(async () => {
  await productsStore.getProducts();
});

const productsStore = useProductsStore();

const dslrProduct = computed(() =>
  productsStore.products
    ? productsStore.products.filter(
        (product) => product && product.category === "DSLR"
      )
    : []
);
</script>

<template>
  <ProductCategory :productCategory="dslrProduct" />
</template>
