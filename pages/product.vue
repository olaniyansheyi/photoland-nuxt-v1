<script setup>
import { useProductsStore } from "@/stores/product";
import { useCartStore } from "~/stores/cart";

import { useRouter } from "#app";
import { onMounted } from "vue";

const router = useRouter();

const productsStore = useProductsStore();
const cartStore = useCartStore();

onMounted(() => {
  if (!productsStore.currentSingleProduct) {
    router.push("/");
  }
});
</script>

<template>
  <div class="my-10 lg:px-36 sm:px-6 px-4">
    <div class="flex flex-wrap justify-center items-center gap-5 sm:h-[30rem]">
      <div
        class="bg-gradient-to-t from-[#1F2126] to-[#33363D] drop-shadow-2xl rounded-lg sm:w-[40%] flex justify-center items-center p-10 sm:h-full"
      >
        <img
          :src="productsStore.currentSingleProduct.image"
          class="max-w-[80%]"
          alt=""
        />
      </div>
      <div
        class="bg-primary rounded-lg sm:w-[50%] flex justify-center items-center py-5 px-8 flex-col gap-y-5 text-left text-white sm:h-full"
      >
        <h5 class="font-semibold text-accent tracking-wide text-md">
          {{ productsStore.currentSingleProduct.category }} CAMERAS
        </h5>
        <h4 class="font-bold text-2xl tracking-wide">
          {{ productsStore.currentSingleProduct.name }}
        </h4>
        <p class="font-normal text-sm tracking-wide">
          {{ productsStore.currentSingleProduct.description }}
        </p>
        <div class="flex gap-x-5 mt-4 items-center justify-start">
          <h3 class="font-normal text-accent tracking-wide text-2xl">
            ${{ productsStore.currentSingleProduct.originalPrice }}
          </h3>

          <span v-if="cartStore.inCart" class="flex flex-nowrap gap-x-2">
            <NuxtLink to="/">
              <button
                class="bg-accent hover:bg-accent-hover text-primary font-semibold px-2 rounded-lg py-1"
              >
                Shop more
              </button>
            </NuxtLink>
            <button
              @click="cartStore.handleToggleCart"
              class="bg-accent hover:bg-accent-hover text-primary font-semibold px-3 py-1 rounded-lg"
            >
              View Cart
            </button>
          </span>
          <button
            @click="
              () => {
                cartStore.handleAddToCart(productsStore.currentSingleProduct);
                cartStore.checkInCart(productsStore.currentSingleProduct);
                cartStore.handleInCart(productsStore.currentSingleProduct);
              }
            "
            v-else
            class="bg-accent hover:bg-accent-hover text-primary font-semibold px-6 py-2 rounded-lg"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
    <!-- <RelatedProduct products={products} /> -->
  </div>
</template>
