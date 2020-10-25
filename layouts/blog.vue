<template>
  <main class="flex bg-gray-100 dark:bg-blue-600 min-h-screen">
    <AppFallbackLoad v-show="!isReady" />
    <template v-show="isReady">
      <ClientOnly>
        <NavigationBar :has-language-picker="false" />
      </ClientOnly>
      <Nuxt class="pt-20 px-4 w-full z-10" />
      <h1 class="absolute right-0 bottom-0 text-8xl sm:text-10xl md:text-12xl mr-8 font-bold text-gray-300 dark:text-blue-700">
        Welcome
      </h1>
    </template>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { MetaInfo } from 'vue-meta/types';
import { PortalTarget } from 'portal-vue';
import { mapGetters } from 'vuex';

import { guestStore } from '@/store';

import SiteLogo from '~/assets/img/logo.svg?inline';

@Component({
  head (): MetaInfo {
    return {
      bodyAttrs: {
        'data-theme': guestStore.theme,
      },
      titleTemplate: (titleChunk): string => {
        return titleChunk ? `${titleChunk} | Christian Bravo` : 'Christian Bravo';
      },
    };
  },
  components: {
    PortalTarget,
    SiteLogo,
  },
  computed: {
    ...mapGetters({
      isReady: 'guest/isReady',
    }),
  },
})
export default class BlogLayout extends Vue {}
</script>

<style lang="scss" scoped>
.blog-banner {
  min-height: 50vh;
}
</style>
