<script setup>
import { useProductsStore } from "~/stores/product";
import { useCartStore } from "~/stores/cart";

const productsStore = useProductsStore();
const cartStore = useCartStore();
</script>

<template>
  <div class="py-12 text-white lg:px-36 sm:px-6 px-4">
    <h2 class="text-2xl font-bold tracking-wide text-center sm:text-left">
      Latest <span class="text-accent">Products</span>
    </h2>
    <div class="mt-10 w-full flex flex-wrap items-center justify-center gap-5">
      <div
        v-for="newProduct in productsStore.latestProduct"
        :key="newProduct.id"
      >
        <NuxtLink
          @click="
            () => {
              productsStore.handleCurrentSingleProduct(newProduct);
              cartStore.checkInCart(newProduct);
              cartStore.handleInCart(newProduct);
            }
          "
          to="/product"
        >
          <div
            class="bg-gradient-to-t from-[#1F2126] to-[#33363D] drop-shadow-2xl rounded-lg p-4 w-[18rem] relative"
          >
            <div class="w-[8rem] mx-auto">
              <img :src="newProduct.image" alt="" class="max-w-[100%]" />
            </div>
            <div class="mt-4 w-[85%]">
              <h6 class="font-normal text-accent tracking-wide text-md mb-2">
                {{ newProduct.category }}
              </h6>
              <h3 class="tracking-wide font-semibold">{{ newProduct.name }}</h3>
              <span class="flex gap-x-10">
                <h5 class="font-normal mt-10 text-accent tracking-wide text-lg">
                  ${{ newProduct.originalPrice }}
                </h5>
                <h5
                  class="font-normal mt-10 tracking-wide text-yellow-100 text-lg line-through"
                >
                  ${{ newProduct.discountPrice }}
                </h5>
              </span>
            </div>
            <button
              class="text-primary bg-accent font-bold px-3 py-[0.5px] text-md rounded-3xl absolute top-4 right-4"
            >
              New
            </button>
            <div
              class="text-primary font-bold h-[3rem] w-[3rem] flex items-center justify-center text-md rounded-md absolute bg-yellow-300/60 top-4 left-4"
            >
              -{{ newProduct.percentageDiscount }}%
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
