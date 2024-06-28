import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    loading: false,
    error: null,
    email: ref("olaniyansheyi1704@gmail.com"),
    password: ref("Sheyman(1704)"),
    fullName: ref(""),
    address: ref(""),
    phoneNumber: ref(""),
  }),
  actions: {
    async signup({ fullName, email, password }) {
      const { $supabase } = useNuxtApp();
      this.loading = true;
      this.error = null;
      try {
        const { data, error } = await $supabase.auth.signUp({
          email,
          password,
          options: {
            data: { fullName },
          },
        });
        console.log("success");
        if (error) throw error;
        this.user = data.user;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    async login({ email, password }) {
      const { $supabase } = useNuxtApp();
      this.loading = true;
      this.error = null;
      try {
        const { data, error } = await $supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        this.user = data.user;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    async logout() {
      const { $supabase } = useNuxtApp();
      this.loading = true;
      this.error = null;
      try {
        const { error } = await $supabase.auth.signOut();
        if (error) throw error;
        this.user = null;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    async getCurrentUser() {
      const { $supabase } = useNuxtApp();
      this.loading = true;
      this.error = null;
      try {
        const { data: session } = await $supabase.auth.getSession();
        if (session.session) {
          const { data, error } = await $supabase.auth.getUser();
          if (error) throw error;
          this.user = data.user;
        } else {
          this.user = null;
        }
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
});
