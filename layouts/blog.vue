<template>
  <main class="flex flex-col bg-gray-100 dark:bg-blue-800 min-h-screen">
    <AppFallbackLoad v-show="!isReady" />
    <template v-if="isReady">
      <SidebarMenu
        v-show="isSidebarActive"
        :only-english="true"
        :has-language-picker="false"
        @closeSidebar="closeSidebar"
      />
      <ClientOnly>
        <NavigationBar
          :has-language-picker="false"
          :only-english="true"
          @openSidebar="openSidebar"
        />
      </ClientOnly>
      <Nuxt class="pt-0 md:pt-20 px-4 w-full z-10 order-2" />
    </template>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { mapGetters } from 'vuex';

import { MetaInfo } from 'vue-meta/types';

@Component({
  head (): MetaInfo {
    return {
      titleTemplate: (titleChunk): string => {
        return titleChunk ? `${titleChunk} | Christian Bravo` : 'Christian Bravo';
      },
    };
  },
  computed: {
    ...mapGetters({
      isReady: 'guest/isReady',
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
/* stylelint-disable */

.text-min-content {
  width: 100%;
  line-height: normal;

  @screen md {
    width: min-content;
  }
}
</style>
