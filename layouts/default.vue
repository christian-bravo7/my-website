<template>
  <main class="site">
    <SidebarMenu
      v-if="isSidebarActive"
      @closeSidebar="closeSidebar"
    />
    <NavigationBar @openSidebar="openSidebar" />
    <header>
      <MovableFigures :current-route="currentRoute" />
      <PortalTarget
        name="page-banner"
        class="site__banner-content"
        slim
        :transition="transitionComponent"
      />
    </header>
    <Nuxt class="site__page" />
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

  get transitionComponent (): any {
    return {
      functional: true,
      render (h: any, context: any): any {
        return h('transition', {
          props: {
            name: 'flash-text',
            mode: 'out-in',
          },
        }, context.children);
      },
    };
  }

  openSidebar (): void {
    this.isSidebarActive = true;
  }

  closeSidebar (): void {
    this.isSidebarActive = false;
  }
}
</script>

<style lang="scss" scoped>
.site {
  display: grid;

  &__banner-content {
    min-height: 100vh;
  }
}

.flash-text-enter {
  opacity: 0;
}

.flash-text-enter-active {
  transition: 2s;
}

.flash-text-enter-to {
  opacity: 1;
}

.flash-text-leave {
  opacity: 0;
}

.flash-text-leave-active {
  transition: 2s;
}

.flash-text-leave-to {
  opacity: 1;
}
</style>
