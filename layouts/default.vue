<template>
  <main class="bg-gray-50 dark:bg-blue-800">
    <AppFallbackLoad v-show="!isAppInitialized" />
    <AppSidebarMenu
      v-show="isSidebarActive"
      @onSidebarClose="onSidebarClose"
    />
    <ClientOnly>
      <AppNavigationBar
        :is-sidebar-active="isSidebarActive"
        @onSidebarToggle="onSidebarToggle"
      />
    </ClientOnly>
    <header>
      <BannerBackgroundFigures />
      <PortalTarget
        name="page-banner"
        class="min-h-screen"
        slim
      />
    </header>
    <Nuxt />
    <AppFooter />
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

  onSidebarToggle (): void {
    this.isSidebarActive = !this.isSidebarActive;
  }

  openSidebar (): void {
    this.isSidebarActive = true;
  }

  onSidebarClose (): void {
    this.isSidebarActive = false;
  }
}
</script>
