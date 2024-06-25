<script setup>
import { onMounted, ref } from "vue";
import { useOrderStore } from "@/stores/order";
import { useCartStore } from "@/stores/cart";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";

const toast = useToast();
const router = useRouter();

const orderStore = useOrderStore();
const cartStore = useCartStore();

const name = ref(null);
const address = ref(null);
const phoneNo = ref(null);
const dateTime = ref("");

onMounted(() => {
  const calculateDateTime = () => {
    const now = new Date();
    now.setHours(now.getHours() + 24);

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;
    dateTime.value = formattedDateTime;
  };

  calculateDateTime();
});

const handleSubmitOrder = async () => {
  if (!name.value || !address.value || !phoneNo.value) {
    return toast.error("Please fill the form with your correct details");
  }

  if (cartStore.cart.length === 0) {
    return cartStore.handleToggleCart();
  }

  const newOrder = {
    status: "preparing order",
    hoursLeft: 24,
    deliveryDay: dateTime.value,
    products: [...cartStore.cart],
    name: name.value,
    address: address.value,
    phoneNumber: phoneNo.value,
  };

  try {
    const orderId = await orderStore.createOrder(newOrder);

    if (orderId) {
      name.value = null;
      address.value = null;
      phoneNo.value = null;
      cartStore.cart = [];
      orderStore.handleSetCurrentOrderId(orderId.id);
      router.push(`/order`);
    }
  } catch (error) {
    toast.error("Failed to place the order");
  }
};
</script>

<template>
  <div class="w-full flex justify-center items-center h-[screen] px-5">
    <div
      class="bg-gradient-to-t from-[#1F2126] to-[#33363D] drop-shadow-2xl rounded-lg py-12 px-10 text-white"
    >
      <form
        @submit.prevent="
          () => {
            handleSubmitOrder();
          }
        "
        class="flex flex-col items-start justify-end gap-y-6 w-full"
      >
        <h4
          class="text-center mx-auto font-semibold text-2xl text-accent tracking-wide"
        >
          Ready to order? Let go!
        </h4>
        <span class="flex flex-col">
          <label class="font-normal text-lg text-accent tracking-wide">
            Full Name
          </label>
          <input
            v-model="name"
            class="w-full text-primary py-2 mt-2 outline-none px-5 rounded-lg"
            type="text"
          />
        </span>
        <span class="flex flex-col">
          <label class="font-normal text-lg text-accent tracking-wide">
            Phoner Number
          </label>
          <input
            v-model="phoneNo"
            class="w-auto text-primary py-2 mt-2 outline-none px-5 rounded-lg"
            type="number"
          />
        </span>
        <span class="flex flex-col">
          <label class="font-normal text-lg text-accent tracking-wide">
            Address
          </label>
          <input
            v-model="address"
            class="w-auto text-primary py-2 mt-2 outline-none px-5 rounded-lg"
            type="text"
          />
        </span>
        <button
          type="submit"
          class="text-primary bg-accent hover:bg-accent-hover px-5 py-2 font-semibold rounded-lg mt-3"
        >
          {{ orderStore.isLoading ? "placing order...." : "Order Now" }}
        </button>
      </form>
    </div>
  </div>
</template>
