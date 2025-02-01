import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/icon",
    '@vueuse/nuxt',
  ],
  css: ['~/assets/css/main.css'],
  icon: {
    serverBundle: {
      collections: ['material-symbols'],
    },
  },
  devtools: { enabled: true },
  compatibilityDate: "2025-02-01",
  vite: {
    plugins: [
      tailwindcss(),
    ],
  }
})
