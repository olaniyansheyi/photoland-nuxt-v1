<script setup>
import { useAuthStore } from "~/stores/auth.js";
import { useToast } from "vue-toastification";

const toast = useToast();

const authStore = useAuthStore();

async function handleSignUp() {
  try {
    const response = await authStore.signup({
      fullName: authStore.fullName,
      email: authStore.email,
      password: authStore.password,
    });
    if (response.error) {
      toast.error(`${response.error}`);
    } else {
      navigateTo("/login");
      toast.success(
        "refistration successfull, PLease make sure you verify your email before you log in!"
      );
    }
  } catch (error) {
    console.error("Sign-up failed:", error.message);
  }

  authStore.fullName = "";
  authStore.email = "";
  authStore.address = "";
  authStore.phoneNumber = "";
}
</script>

<template>
  <div class="w-full flex justify-center items-center h-[screen] px-5 py-20">
    <div
      class="bg-gradient-to-t from-[#1F2126] to-[#33363D] drop-shadow-2xl rounded-lg py-12 px-10 text-white"
    >
      <form
        @submit.prevent="
          () => {
            handleSignUp();
          }
        "
        class="flex flex-col items-start justify-end gap-y-6 w-full"
      >
        <h4
          class="text-center mx-auto font-semibold text-2xl text-accent tracking-wide"
        >
          Sign-up!
        </h4>
        <span class="flex flex-col">
          <label class="font-normal text-lg text-accent tracking-wide">
            Full Name
          </label>
          <input
            v-model="authStore.fullName"
            class="w-full text-primary py-2 mt-2 outline-none px-5 rounded-lg"
            type="mail"
            required
          />
        </span>
        <span class="flex flex-col">
          <label class="font-normal text-lg text-accent tracking-wide">
            Email
          </label>
          <input
            v-model="authStore.email"
            class="w-full text-primary py-2 mt-2 outline-none px-5 rounded-lg"
            type="mail"
            required
          />
        </span>
        <span class="flex flex-col">
          <label class="font-normal text-lg text-accent tracking-wide">
            Address
          </label>
          <input
            v-model="authStore.address"
            class="w-full text-primary py-2 mt-2 outline-none px-5 rounded-lg"
            type="mail"
            required
          />
        </span>
        <span class="flex flex-col">
          <label class="font-normal text-lg text-accent tracking-wide">
            Phone Number
          </label>
          <input
            v-model="authStore.phoneNumber"
            class="w-full text-primary py-2 mt-2 outline-none px-5 rounded-lg"
            type="mail"
            required
          />
        </span>
        <span class="flex flex-col">
          <label class="font-normal text-lg text-accent tracking-wide">
            Password
          </label>
          <input
            v-model="authStore.password"
            class="w-auto text-primary py-2 mt-2 outline-none px-5 rounded-lg"
            type="password"
            required
          />
        </span>
        <button
          type="submit"
          class="text-primary bg-accent hover:bg-accent-hover px-5 py-4 font-semibold rounded-lg mt-3 flex"
        >
          <span>Sign up</span>
          <SpinnerMini v-if="authStore.loading" />
        </button>
      </form>
      <h6 class="mt-3 font-normal text-sm text-white tracking-wide">
        Already have an account?
        <NuxtLink class="text-accent" to="/login">Login</NuxtLink>
      </h6>
    </div>
  </div>
</template>
