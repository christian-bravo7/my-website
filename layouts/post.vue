<template>
  <main class="bg-gray-50 dark:bg-blue-800">
    <AppFallbackLoad v-show="!isAppInitialized" />
    <AppSidebarMenu
      v-show="isSidebarActive"
      @closeSidebar="closeSidebar"
    />
    <AppNavigationBar
      @openSidebar="openSidebar"
    />
    <header>
      <PortalTarget
        name="blog-banner"
        class="blog-banner"
        slim
      />
    </header>
    <Nuxt />
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

<style lang="scss" scoped>
.blog-banner {
  min-height: 50vh;
}
</style>
