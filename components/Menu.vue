<script setup>
import { useRouter, RouterLink } from "vue-router";
import { defineProps } from "vue";

const props = defineProps({
  handleToggleMenu: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <div className="fixed inset-0 z-[100]">
    <div
      className="h-full w-full bg-primary pt-20 flex flex-col items-start px-5 text-white relative z-50 gap-y-5"
    >
      <span @click="props.handleToggleMenu">
        <font-awesome-icon
          class="text-white text-3xl font-semibold absolute top-10 right-10 cursor-pointer"
          :icon="['fas', 'times']"
        />
      </span>
      <h3 className="text-accent font-bold text-2xl">Products Categories</h3>
      <RouterLink @click="props.handleToggleMenu" to="/products-dslr">
        Dslr Camera
      </RouterLink>
      <RouterLink @click="props.handleToggleMenu" to="/products-mirrorless">
        Mirrorless Camera
      </RouterLink>
      <RouterLink @click="props.handleToggleMenu" to="/products-compact">
        Compact Camera
      </RouterLink>
      <RouterLink @click="props.handleToggleMenu" to="/products-film">
        Film Camera
      </RouterLink>
      <RouterLink @click="props.handleToggleMenu" to="/products-professional">
        Professional Camera
      </RouterLink>

      <RouterLink
        @click="props.handleToggleMenu"
        className="text-accent font-semibold "
        to="/"
      >
        Go Back to Home
      </RouterLink>
    </div>
  </div>
</template>
