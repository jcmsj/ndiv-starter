// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "nuxt-icon",
    "@nuxtjs/tailwindcss",
    '@vueuse/nuxt',
  ],
  vue: {
    defineModel: true,
    propsDestructure: true,
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    injectPosition: "first",
    viewer: false,
  },
  devtools: { enabled: true },
})
