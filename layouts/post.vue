<template>
  <main class="bg-gray-50 dark:bg-blue-600">
    <AppFallbackLoad v-show="!isReady" />
    <template v-show="isReady">
      <SidebarMenu
        v-show="isSidebarActive"
        :only-english="true"
        :has-language-picker="false"
        @closeSidebar="closeSidebar"
      />
      <ClientOnly>
        <NavigationBar
          :only-white="true"
          :has-language-picker="false"
          @openSidebar="openSidebar"
        />
      </ClientOnly>
      <header>
        <PortalTarget
          name="blog-banner"
          class="blog-banner"
          slim
        />
      </header>
      <Nuxt />
    </template>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { MetaInfo } from 'vue-meta/types';
import { mapGetters } from 'vuex';

import { guestStore } from '@/store';

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
  computed: {
    ...mapGetters({
      isReady: 'guest/isReady',
    }),
  },
})
export default class BlogLayout extends Vue {
  isSidebarActive: boolean = false;

  openSidebar (): void {
    this.isSidebarActive = true;
  }

  closeSidebar (): void {
    this.isSidebarActive = false;
  }
}
</script>

<style lang="scss" scoped>
.blog-banner {
  min-height: 50vh;
}
</style>
