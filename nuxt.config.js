export default {
  buildModules: ["@nuxtjs/fontawesome"],
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@pinia/nuxt"],

  fontawesome: {
    component: "fa",
    icons: {
      solid: true,
      regular: true,
      brands: true,
    },
  },

  runtimeConfig: {
    public: {
      stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    },
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  },

  css: ["~/assets/css/global.css"],
  plugins: [
    { src: "~/plugins/supabase.js", mode: "client" },
    "~/plugins/iconify.js",
    "~/plugins/fontawesome.js",
    "~/plugins/motion.js",
  ],
};
