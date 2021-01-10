import { NuxtConfig } from '@nuxt/types';
import Locales from './lang';

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  // mode: 'spa',
  ssr: true,
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  generate: {
    fallback: true,
  },
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Christian Bravo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Frontend Developer with a passion for create beautiful and functional user experiences.' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700&display=swap' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
    ],
  },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    { src: '@/plugins/persistedState.ts', ssr: false },
    { src: '@/plugins/scrollReveal.ts', ssr: false },
    { src: '@/plugins/portalVue.ts', ssr: false },
    { src: '@/plugins/markdown.ts', ssr: false },
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt/typescript
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // Doc: https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
    // Doc: https://github.com/nuxt-community/analytics-module
    '@nuxtjs/google-analytics',
    // Doc: https://tailwindcss.nuxtjs.org/setup
    '@nuxtjs/tailwindcss',
    // Doc: https://color-mode.nuxtjs.org/
    '@nuxtjs/color-mode',
  ],
  styleResources: {
    scss: '@/assets/scss/global-resources.scss',
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://content.nuxtjs.org/installation
    '@nuxt/content',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/i18n-module
    'nuxt-i18n',
    // Doc: https://github.com/nuxt-community/sitemap-module - Conserve this module at the end
    '@nuxtjs/sitemap',
  ],
  googleAnalytics: {
    id: 'UA-167467888-1',
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  i18n: {
    locales: Locales,
    seo: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
    },
    defaultLocale: 'en',
    strategy: 'prefix_and_default',
    langDir: 'lang/',
    lazy: true,
    vueI18n: {
      fallbackLocale: 'en',
      preserveState: false,
    },
    vuex: {
    // Module namespace
      moduleName: 'i18nStore',
      // If enabled, current app's locale is synced with nuxt-i18n store module
      syncLocale: false,
      // If enabled, current translation messages are synced with nuxt-i18n store module
      syncMessages: false,
      // Mutation to commit to set route parameters translations
      syncRouteParams: true,
    },
  },
  axios: {},
  sitemap: {
    i18n: true,
    routes: [
      'hello-world',
    ],
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
} as NuxtConfig;
