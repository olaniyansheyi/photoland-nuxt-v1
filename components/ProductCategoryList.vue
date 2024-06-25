<script setup>

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
      <NuxtLink to="/products-dslr">Dslr Camera</NuxtLink>
      <NuxtLink to="/products-mirrorless">Mirrorless Camera</NuxtLink>
      <NuxtLink to="/products-compact">Compact Camera</NuxtLink>
      <NuxtLink to="/products-film">Film Camera</NuxtLink>
      <NuxtLink to="/products-professional">Professional Camera</NuxtLink>
    </div>
  </div>
</template>
