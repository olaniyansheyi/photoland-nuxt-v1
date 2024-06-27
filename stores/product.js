import { defineStore } from "pinia";
import { useNuxtApp } from "#app";

export const useProductsStore = defineStore("products", {
  // Data
  state: () => ({
    products: [],
    loading: false,
    error: null,
    currentSingleProduct: null,
  }),
  actions: {
    async getProducts() {
      this.loading = true;
      try {
        const { $supabase } = useNuxtApp();
        const { data, error } = await $supabase.from("products").select("*");

        if (error) {
          console.error("supabase error", error);
          this.error = "Products could not be loaded";
        } else {
          this.products = data || [];
          console.log(this.products);
        }
      } catch (error) {
        console.error("Unexpected error:", error);
        this.error = "An unexpected error occurred";
      } finally {
        this.loading = false;
      }
    },
    handleCurrentSingleProduct(curProduct) {
      this.currentSingleProduct = curProduct;
    },
  },

  getters: {
    latestProduct: (state) =>
      state.products.filter((product) => product.newArrival !== false),
  },
});
