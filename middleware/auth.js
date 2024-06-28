import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore();
  await authStore.getCurrentUser();

  if (authStore.user === null) {
    return navigateTo("/login");
  }
});
