<script setup>
import { useProductsStore } from "@/stores/product";
import { computed, onMounted } from "vue";

const productsStore = useProductsStore();
console.log(productsStore.products);

onMounted(async () => {
  await productsStore.getProducts();
});

const compactProduct = computed(() =>
  productsStore.products
    ? productsStore.products.filter(
        (product) => product && product.category === "COMPACT"
      )
    : []
);

console.log(compactProduct);
</script>

<template>
  <ProductCategory :productCategory="compactProduct" />
</template>
