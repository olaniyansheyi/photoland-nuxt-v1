// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@pinia/nuxt"],
  css: ["~/assets/css/global.css"],
  plugins: [
    { src: "~/plugins/supabase.js", mode: "client" },
    "~/plugins/iconify.js",
  ],
  devtools: { enabled: true },
});
