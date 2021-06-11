import { NuxtConfig } from '@nuxt/types';
import Locales from './lang/index';

export default {
  target: 'static',
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  // server: {
  //   port: 3000,
  //   host: '0.0.0.0',
  // },

  // Page headers: https://nuxtjs.org/api/configuration-head
  head: {
    titleTemplate: (chunk): string => chunk ? `${chunk} - Christian Bravo` : 'Christian Bravo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700&display=swap' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
    ],
  },

  css: [
    '@/assets/scss/main.scss',
  ],

  tailwindcss: {
    jit: true,
  },

  plugins: [
    { src: '@/plugins/persistedState.ts', ssr: false },
    { src: '@/plugins/portalVue.ts', ssr: true },
    { src: '@/plugins/markdown.ts', ssr: true },
    { src: '@/plugins/dayjs.ts', ssr: true },
    { src: '@/plugins/i18n.ts', ssr: true },
  ],

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

  modules: [
    // Doc: https://content.nuxtjs.org/installation
    '@nuxt/content',
    // Doc: https://github.com/nuxt-community/i18n-module
    'nuxt-i18n',
    // Doc: https://github.com/nuxt-community/sitemap-module - Conserve this module at the end
    '@nuxtjs/sitemap',
  ],

  generate: {
    fallback: true,
    async routes (): Promise<any> {
      const { $content } = require('@nuxt/content');

      const content = await $content().fetch();

      return content.map(({ path }: any) => path);
    },
  },

  styleResources: {
    scss: '@/assets/scss/global-resources.scss',
  },

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },

  i18n: {
    locales: Locales,
    seo: true,
    defaultLocale: 'en',
    strategy: 'prefix_and_default',
    langDir: 'lang/',
    lazy: true,
    vueI18n: {
      fallbackLocale: 'en',
    },
  },

  // router: {
  //   middleware: ['wipMiddleware'],
  // },

  sitemap: {
    hostname: process.env.HOSTNAME,
    i18n: true,
    routes: [
      'hello-world',
    ],
  },

  // env variables
  env: {
    hostname: process.env.HOSTNAME || 'http://localhost:3000',
  },

  // Build configuration: https://nuxtjs.org/api/configuration-build/
  build: {
    postcss: {
      plugins: {
        'postcss-each-variables': {},
        'postcss-each': {},
        'postcss-pxtorem': {
          propList: ['*'],
        },
        'postcss-nested': {},
      },
    },
  },
} as NuxtConfig;
