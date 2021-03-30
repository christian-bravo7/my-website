<template>
  <main class="flex flex-col bg-gray-100 dark:bg-blue-800 min-h-screen">
    <AppFallbackLoad v-show="!isAppInitialized" />
    <AppSidebarMenu
      v-show="isSidebarActive"
      @closeSidebar="closeSidebar"
    />
    <AppNavigationBar
      :is-sidebar-active="isSidebarActive"
      @toggleSidebar="toggleSidebar"
    />
    <Nuxt class="pt-0 md:pt-20 px-4 w-full z-10 order-2" />
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
