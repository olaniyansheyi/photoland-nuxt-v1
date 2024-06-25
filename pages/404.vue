<script setup></script>

<template>
  <div
    class="flex justify-center items-center text-center flex-col px-5 text-white my-16"
  >
    <h3 class="font-semibold text-2xl tracking-wide">
      Page not found,please go back to the home page.
    </h3>
    <NuxtLink
      to="/"
      class="px-6 py-3 rounded-lg text-primary font-semibold bg-accent hover:bg-accent-hover mt-8"
    >
      Go Back Home
    </NuxtLink>
  </div>
</template>
import type { NuxtLink } from "#build/components";
