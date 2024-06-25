<script setup>
const props = defineProps({
  productCategory: {
    type: Array,
    required: true,
  },
});

const categoriesSet = new Set(
  props.productCategory.map((product) => product.category)
);
const uniqueCategories = Array.from(categoriesSet);
</script>

<template>
  <div
    class="py-16 lg:px-36 sm:px-6 px-4 gap-x-3 flex items-start justify-center flex-nowra text-white"
  >
    <ProductCategoryList />
    <div class="lg:w-[85%] sm:w-[80%]">
      <h2
        v-for="(category, index) in uniqueCategories"
        :key="index"
        class="text-2xl font-bold tracking-wide text-center sm:text-left"
      >
        {{ category }}
        <span class="text-accent"> camera</span>
      </h2>
      <div class="w-full flex flex-wrap items-center justify-center gap-5">
        <NuxtLink
          to="/product"
          v-for="product in productCategory"
          :key="product.id"
        >
          <div
            class="bg-gradient-to-t from-[#1F2126] to-[#33363D] drop-shadow-2xl rounded-lg p-4 sm:w-[16rem] lg:w-[15rem] w-[18rem] relative mt-10 sm:mt-3"
          >
            <div class="w-[8rem] mx-auto">
              <img :src="product.image" alt="" class="max-w-[100%]" />
            </div>
            <div class="mt-4 w-[85%]">
              <h6 class="font-normal text-accent tracking-wide text-md mb-2">
                {{ product.category }}
              </h6>
              <h3 class="tracking-wide font-semibold">{{ product.name }}</h3>
              <span class="flex gap-x-10">
                <h5 class="font-normal mt-10 text-accent tracking-wide text-lg">
                  ${{ product.originalPrice }}
                </h5>
                <h5
                  class="font-normal mt-10 tracking-wide text-yellow-100 text-lg line-through"
                >
                  ${{ product.discountPrice }}
                </h5>
              </span>
            </div>
            <button
              v-if="product.newArrival"
              class="text-primary bg-accent font-bold px-3 py-[0.5px] text-md rounded-3xl absolute top-4 right-4"
            >
              New
            </button>

            <div
              v-else
              class="text-primary font-bold h-[3rem] w-[3rem] flex items-center justify-center text-md rounded-md absolute bg-yellow-300/60 top-4 left-4"
            >
              -{{ product.percentageDiscount }}%
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
