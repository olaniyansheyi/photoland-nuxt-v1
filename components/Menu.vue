<script setup>
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
      <NuxtLink @click="props.handleToggleMenu" to="/product/dslr">
        Dslr Camera
      </NuxtLink>
      <NuxtLink @click="props.handleToggleMenu" to="/product/mirrorless">
        Mirrorless Camera
      </NuxtLink>
      <NuxtLink @click="props.handleToggleMenu" to="/product/compact">
        Compact Camera
      </NuxtLink>
      <NuxtLink @click="props.handleToggleMenu" to="/product/film">
        Film Camera
      </NuxtLink>
      <NuxtLink @click="props.handleToggleMenu" to="/product/professional">
        Professional Camera
      </NuxtLink>

      <NuxtLink
        @click="props.handleToggleMenu"
        className="text-accent font-semibold "
        to="/"
      >
        Go Back to Home
      </NuxtLink>
    </div>
  </div>
</template>
