<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div className="sm:w-[23%] bg-primary rounded-lg hidden sm:block h-[30rem] ">
    <div
      className=" w-full h-12 bg-accent  flex items-center justify-center text-primary rounded-t-lg "
    >
      <h5 className="font-bold text-sm">BROWSE CATEGORIES</h5>
    </div>
    <div
      className="mt-5 flex flex-col gap-y-5 items-start text-white px-5 text-md font-normal  "
    >
      <RouterLink to="/products-dslr">Dslr Camera</RouterLink>
      <RouterLink to="/products-mirrorless">Mirrorless Camera</RouterLink>
      <RouterLink to="/products-compact">Compact Camera</RouterLink>
      <RouterLink to="/products-film">Film Camera</RouterLink>
      <RouterLink to="/products-professional">Professional Camera</RouterLink>
    </div>
  </div>
</template>
