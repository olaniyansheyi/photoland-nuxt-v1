<script setup>
import { useAuthStore } from "~/stores/auth.js";
import { useToast } from "vue-toastification";
// const toast = useToast();

const authStore = useAuthStore();
const props = defineProps({
  handleToggleMenu: {
    type: Function,
    required: true,
  },
});

// async function handleLogout() {
//   try {
//     const { error } = await authStore.logout();

//     if (error) {
//       toast.error(`${error}`);
//     } else {
//       props.handleToggleMenu();
//       toast.success("you are successfully logged out!");
//       console.log(authStore.user === null);
//     }
//   } catch (error) {
//     console.error("Login failed:", error.message);
//   }
// }
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
      <NuxtLink @click="props.handleToggleMenu" to="/products/dslr">
        Dslr Camera
      </NuxtLink>
      <NuxtLink @click="props.handleToggleMenu" to="/products/mirrorless">
        Mirrorless Camera
      </NuxtLink>
      <NuxtLink @click="props.handleToggleMenu" to="/products/compact">
        Compact Camera
      </NuxtLink>
      <NuxtLink @click="props.handleToggleMenu" to="/products/film">
        Film Camera
      </NuxtLink>
      <NuxtLink @click="props.handleToggleMenu" to="/products/professional">
        Professional Camera
      </NuxtLink>
      <!-- <button
        @click="handleLogout()"
        type="submit"
        class="text-primary bg-accent hover:bg-accent-hover px-5 py-3 font-semibold rounded-lg mt-3 flex"
      >
        <span class="mr-2"
          >Logout
          <font-awesome-icon :icon="['fas', 'sign-out-alt']" />
        </span>
        <SpinnerMini v-if="authStore.loading" />
      </button> -->

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
