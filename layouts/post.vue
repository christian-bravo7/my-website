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
    <header class="pt-14">
      <PortalTarget
        name="blog-banner"
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
  middleware: 'wipMiddleware',
  computed: {
    ...mapGetters({
      isAppInitialized: 'guest/isAppInitialized',
    }),
  },
})
export default class BlogLayout extends Vue {
  isSidebarActive: boolean = false;

  onSidebarToggle (): void {
    this.isSidebarActive = !this.isSidebarActive;
  }

  onSidebarClose (): void {
    this.isSidebarActive = false;
  }
}
</script>
