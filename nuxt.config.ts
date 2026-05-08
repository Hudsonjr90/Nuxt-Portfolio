import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      enableVercelAnalytics: false,
      giscusRepo: '',
      giscusRepoId: '',
      giscusCategory: 'General',
      giscusCategoryId: ''
    }
  },
  routeRules: {
    '/articles/**': { isr: 3600 },
    '/': { isr: 3600 }
  },
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  },
  app: {
    head: {
      title: 'Engineering Blog',
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
          content: 'Blog de engenharia com artigos, notas de desenvolvimento e arquitetura front-end moderna em Nuxt.'
        }
      ]
    }
  },
  content: {
    build: {
      markdown: {
        toc: {
          depth: 3,
          searchDepth: 3
        }
      }
    }
  }
});
