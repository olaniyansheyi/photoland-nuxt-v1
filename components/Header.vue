<script setup>
import logo from "~/public/logo.png";
import { useCartStore } from "~/stores/cart";
import { useRouter } from "#app";
import { useOrderStore } from "~/stores/order";
import { useMenuStore } from "~/stores/menu";

const router = useRouter();

const orderStore = useOrderStore();
const menuStore = useMenuStore();

const cartStore = useCartStore();

const searchQuery = ref("");

const extractNumbers = (str) => {
  str = String(str);
  const index = str.indexOf("-");
  if (index !== -1) {
    return str.substring(index + 1);
  }
  return str;
};

const handleSubmitSearch = () => {
  const productId = extractNumbers(searchQuery.value);
  Number(productId);
  orderStore.handleSetSearchId(productId);
  searchQuery.value = "";
  router.push("/order");
};
</script>

<template>
  <div>
    <Menu
      :handleToggleMenu="menuStore.handleToggleMenu"
      v-if="menuStore.openMenu"
      @toggleMenu="menuStore.handleToggleMenu"
    />
    <div
      v-else
      class="w-full py-5 bg-primary h-auto flex justify-between items-center lg:px-32 sm:px-6 px-3 flex-wrap gap-y-3 relative"
    >
      <span class="sm:hidden flex" @click="menuStore.handleToggleMenu">
        <font-awesome-icon
          class="text-white text-4xl cursor-pointer"
          :icon="['fas', 'bars']"
        />
      </span>
      <div class="sm:w-[15%] w-[40%]">
        <router-link to="/">
          <img :src="logo" alt="Logo" class="sm:w-28 w-full mx-auto" />
        </router-link>
      </div>
      <form
        @submit.prevent="handleSubmitSearch"
        class="sm:w-2/4 w-full sm:order-none order-last"
      >
        <span class="w-full flex items-center justify-center">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Track your order with your order id"
            class="outline-none bg-white placeholder:text-primary rounded-l-md py-3 px-2 text-center text-primary placeholder:text-sm w-full"
          />
          <button
            type="submit"
            class="bg-accent text-primary px-5 py-3 rounded-r-md"
          >
            <font-awesome-icon :icon="['fas', 'search']" />
          </button>
        </span>
      </form>
      <span
        class="flex sm:w-1/4 w-[12%] sm:gap-0 lg:gap-x-3 text-white items-center justify-center sm:justify-end"
      >
        <h6 class="lg:text-sm sm:text-xs font-semibold sm:flex hidden">
          NEED HELP: +2348135158754
        </h6>
        <div
          @click="cartStore.handleToggleCart"
          class="relative cursor-pointer"
        >
          <font-awesome-icon class="text-4xl" :icon="['fas', 'cart-plus']" />
          <span
            class="bg-accent rounded-full flex items-center justify-center h-5 w-5 absolute font-semibold text-sm right-0 top-0 text-primary"
          >
            {{ cartStore.cart.length }}
          </span>
        </div>
      </span>
    </div>
  </div>
</template>
