import { defineStore } from "pinia";
import { useNuxtApp } from "#app";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";

const toast = useToast();
const router = useRouter();

export const useOrderStore = defineStore("order", {
  // Data
  state: () => ({
    isLoading: false,
    currentOrderId: null,
    order: {},
    error: false,
  }),
  actions: {
    async createOrder(newOrder) {
      try {
        this.isLoading = true;
        const { $supabase } = useNuxtApp();
        const { data, error } = await $supabase
          .from("order")
          .insert([newOrder])
          .select("id")
          .single();

        if (error) {
          toast.error("order could not be created");
          this.error = true;
        }
        this.error = false;
        return data;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },

    async getOrder(currentOrderId) {
      const { $supabase } = useNuxtApp();
      const router = useRouter();
      this.isLoading = true;
      try {
        if (currentOrderId === null) {
          router.push("/");
          return null;
        }

        const { data, error } = await $supabase
          .from("order")
          .select("*")
          .eq("id", currentOrderId)
          .single();

        if (error || !data) {
          throw new Error("Order could not be fetched");
        }
        this.order = data;
        return data;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },

    handleSetCurrentOrderId(id) {
      this.currentOrderId = id;
    },

    handleSetSearchId(id) {
      this.currentOrderId = id;
    },
  },

  getters: {
    totalProductsPrice: (state) => {
      return state.order.products?.reduce(
        (acc, item) => acc + item.unitPrice * item.quantity,
        0
      );
    },
  },
});
