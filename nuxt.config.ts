// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
    '@vueuse/nuxt',
  ],
  vue: {
    propsDestructure: true,
  },
  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    viewer: false,
  },
  icon: {
    serverBundle: {
      collections: ['material-symbols'] 
    },
  },
  devtools: { enabled: true },
  compatibilityDate: "2024-09-27",
})
