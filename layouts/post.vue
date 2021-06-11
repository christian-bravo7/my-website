<template>
  <main class="bg-gray-50 dark:bg-blue-800">
    <AppFallbackLoad v-show="!isAppInitialized" />
    <AppSidebarMenu
      v-show="isSidebarActive"
      @closeSidebar="closeSidebar"
    />
    <ClientOnly>
      <AppNavigationBar
        @openSidebar="openSidebar"
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
  computed: {
    ...mapGetters({
      isAppInitialized: 'guest/isAppInitialized',
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
