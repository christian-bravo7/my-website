<template>
  <main class="bg-gray-50 dark:bg-blue-800">
    <AppFallbackLoad v-if="!isReady" />
    <template v-else>
      <SidebarMenu
        v-show="isSidebarActive"
        :has-language-picker="currentRoute !== 'blog'"
        :only-english="currentRoute === 'blog'"
        @closeSidebar="closeSidebar"
      />
      <ClientOnly>
        <NavigationBar
          :has-language-picker="currentRoute !== 'blog'"
          :only-english="currentRoute === 'blog'"
          @openSidebar="openSidebar"
        />
      </ClientOnly>
      <PageSocialMedia />
      <header>
        <MovableFigures :current-route="currentRoute" />
        <PortalTarget
          name="page-banner"
          class="min-h-screen"
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
    };
  },
  computed: {
    ...mapGetters({
      isReady: 'guest/isReady',
    }),
  },
})
export default class Default extends Vue {
  isSidebarActive: boolean = false;

  get currentRoute (): string {
    const route = this.getRouteBaseName();
    return route;
  }

  openSidebar (): void {
    this.isSidebarActive = true;
  }

  closeSidebar (): void {
    this.isSidebarActive = false;
  }
}
</script>
