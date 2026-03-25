import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  build: {
    transpile: ['quasar']
  },
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  },
  app: {
    head: {
      title: 'Hudson Kennedy | Portfólio',
      htmlAttrs: {
        lang: 'pt-BR'
      },
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          name: 'description',
          content: 'Portfólio moderno em Nuxt com projetos, skills e contato.'
        }
      ]
    }
  }
});
