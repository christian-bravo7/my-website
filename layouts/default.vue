<template>
  <main class="site bg-white dark:bg-blue-600">
    <SidebarMenu
      v-if="isSidebarActive"
      @closeSidebar="closeSidebar"
    />
    <ClientOnly>
      <NavigationBar @openSidebar="openSidebar" />
    </ClientOnly>
    <header>
      <MovableFigures :current-route="currentRoute" />
      <PortalTarget
        name="page-banner"
        class="min-h-screen"
        slim
      />
    </header>
    <Nuxt />
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { MetaInfo } from 'vue-meta/types';
import { PortalTarget } from 'portal-vue';

import { guestStore } from '@/store';

@Component({
  head (): MetaInfo {
    return {
      bodyAttrs: {
        'data-theme': guestStore.theme,
      },
      titleTemplate: (titleChunk): string => {
        return titleChunk ? `${titleChunk} - Christian Bravo` : 'Christian Bravo';
      },
    };
  },
  components: {
    PortalTarget,
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
