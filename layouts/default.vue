<template>
  <main class="bg-gray-50 dark:bg-blue-800">
    <template v-if="isAppInitialized">
      <SidebarMenu
        v-show="isSidebarActive"
        :has-language-picker="currentRoute !== 'blog'"
        :only-english="currentRoute === 'blog'"
        @closeSidebar="closeSidebar"
      />
      <ClientOnly>
        <AppNavigationBar
          :is-sidebar-active="isSidebarActive"
          @toggleSidebar="toggleSidebar"
        />
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
      <AppContactMe />
      <AppFooter />
    </template>
    <template v-else>
      <AppFallbackLoad />
    </template>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { mapGetters } from 'vuex';

@Component({
  computed: {
    ...mapGetters({
      isAppInitialized: 'guest/isAppInitialized',
    }),
  },
  head () {
    const metaColor = this.$colorMode.value === 'dark' ? '#080b19' : '#8a0541';

    return {
      meta: [
        { name: 'theme-color', content: metaColor },
      ],
    };
  },
})
export default class Default extends Vue {
  isSidebarActive: boolean = false;

  get currentRoute (): string {
    const route = this.getRouteBaseName();
    return route;
  }

  toggleSidebar (): void {
    this.isSidebarActive = !this.isSidebarActive;
  }

  openSidebar (): void {
    this.isSidebarActive = true;
  }

  closeSidebar (): void {
    this.isSidebarActive = false;
  }
}
</script>
