<script setup>
import { useAuthStore } from "~/stores/auth.js";

const authStore = useAuthStore();
</script>

<template>
  <div class="sm:w-[23%] bg-primary rounded-lg hidden sm:block h-[30rem]">
    <div
      class="w-full h-12 bg-accent flex items-center justify-center text-primary rounded-t-lg"
    >
      <h5 class="font-bold text-sm">BROWSE CATEGORIES</h5>
    </div>
    <div
      class="mt-5 flex flex-col gap-y-5 items-start text-white px-5 text-md font-normal"
    >
      <NuxtLink to="/products/dslr">Dslr Camera</NuxtLink>
      <NuxtLink to="/products/mirrorless">Mirrorless Camera</NuxtLink>
      <NuxtLink to="/products/compact">Compact Camera</NuxtLink>
      <NuxtLink to="/products/film">Film Camera</NuxtLink>
      <NuxtLink to="/products/professional">Professional Camera</NuxtLink>
      <button
        type="submit"
        class="text-primary bg-accent hover:bg-accent-hover px-5 py-3 font-semibold rounded-lg mt-3 flex"
      >
        <span
          >Logout
          <font-awesome-icon :icon="['fas', 'sign-out-alt']" />
        </span>
        <SpinnerMini v-if="authStore.loading" />
      </button>
    </div>
  </div>
</template>
