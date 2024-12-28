// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-08-19',
  future: { compatibilityVersion: 4 },
  css: ['./app/assets/fonts/AvantGarde.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@nuxt/icon'
  ],
  icon: {
    customCollections: [
      { prefix: 'local', dir: './app/assets/icons' },
    ],
  },
  typescript: {
    shim: false
  }
})
