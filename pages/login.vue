<script setup>
import { useAuthStore } from "~/stores/auth.js";
import { useToast } from "vue-toastification";

const toast = useToast();

const authStore = useAuthStore();

async function handleLogin() {
  if (authStore.email === "" || authStore.password === "")
    return toast.error("All feild is required!");
  try {
    const { error } = await authStore.login({
      email: authStore.email,
      password: authStore.password,
    });

    if (error) {
      toast.error(`${error}`);
    } else {
      navigateTo("/");
      toast.success("you are successfully logged in!");
    }
  } catch (error) {
    console.error("Login failed:", error.message);
  }

  authStore.email = "";
  authStore.password = "";
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
            handleLogin();
          }
        "
        class="flex flex-col items-start justify-end gap-y-6 w-full"
      >
        <h4
          class="text-center mx-auto font-semibold text-2xl text-accent tracking-wide"
        >
          Login!
        </h4>
        <span class="flex flex-col">
          <label class="font-normal text-lg text-accent tracking-wide">
            Email
          </label>
          <input
            v-model="authStore.email"
            class="w-full text-primary py-2 mt-2 outline-none px-5 rounded-lg"
            type="mail"
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
          class="text-primary bg-accent hover:bg-accent-hover px-5 py-4 font-semibold rounded-lg mt-3 flex gap-x-4"
        >
          <span>Login</span>
          <SpinnerMini v-if="authStore.loading" />
        </button>
      </form>
      <h6 class="mt-3 font-normal text-sm text-white tracking-wide">
        Dont have an account yet?
        <NuxtLink class="text-accent" to="/sign-up">Sign up</NuxtLink>
      </h6>
    </div>
  </div>
</template>
