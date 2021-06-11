<template>
  <main class="flex flex-col bg-gray-50 dark:bg-blue-800 min-h-screen">
    <AppFallbackLoad v-show="!isAppInitialized" />
    <AppSidebarMenu
      v-show="isSidebarActive"
      @closeSidebar="closeSidebar"
    />
    <ClientOnly>
      <AppNavigationBar
        :is-sidebar-active="isSidebarActive"
        @toggleSidebar="toggleSidebar"
      />
    </ClientOnly>
    <Nuxt class="pb-20 pt-14" />
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
