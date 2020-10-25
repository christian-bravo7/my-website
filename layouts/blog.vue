<template>
  <main class="flex flex-col bg-gray-100 dark:bg-blue-600 min-h-screen">
    <AppFallbackLoad v-show="!isReady" />
    <template v-show="isReady">
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
      <h1
        id="greeting"
        class="static md:absolute max-w-screen-sm md:max-w-none right-0 bottom-0 text-4xl sm:text-6xl md:text-12xl mx-auto md:mr-8 pt-24 px-4 md:pt-0 md:px-0 font-bold text-right text-gray-300 dark:text-blue-700 select-none text-min-content order-1"
      >
        {{ grettingWord }}
      </h1>
    </template>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { MetaInfo } from 'vue-meta/types';
import { PortalTarget } from 'portal-vue';
import { mapGetters } from 'vuex';
import baffle from 'baffle';

import { guestStore } from '@/store';

import SiteLogo from '~/assets/img/logo.svg?inline';

@Component({
  head (): MetaInfo {
    return {
      bodyAttrs: {
        'data-theme': guestStore.theme,
      },
      titleTemplate: (titleChunk): string => {
        return titleChunk ? `${titleChunk} | Christian Bravo` : 'Christian Bravo';
      },
    };
  },
  components: {
    PortalTarget,
    SiteLogo,
  },
  computed: {
    ...mapGetters({
      isReady: 'guest/isReady',
    }),
  },
})
export default class BlogLayout extends Vue {
  isSidebarActive: boolean = false;

  get grettingWord (): string {
    const now = new Date();
    const hours = now.getHours();

    const greetings: any = [
      {
        greet: 'Good night!',
        test: hours >= 21 && hours <= 24,
      },
      {
        greet: 'Good evening!',
        test: hours >= 18 && hours <= 20,
      },
      {
        greet: 'Good afternoon!',
        test: hours >= 13 && hours <= 17,
      },
      {
        greet: 'Good noon!',
        test: hours === 12,
      },
      {
        greet: 'Have a nice day!',
        test: hours >= 9 && hours <= 11,
      },
      {
        greet: 'Good morning!',
        test: hours >= 1 && hours <= 8,
      },
    ];

    return greetings.find((el: any) => el.test).greet;
  }

  mounted (): void {
    this.shuffleText();
  }

  openSidebar (): void {
    this.isSidebarActive = true;
  }

  closeSidebar (): void {
    this.isSidebarActive = false;
  }

  shuffleText (): void {
    // @ts-ignore
    const greetingText = baffle('#greeting', { speed: 80 });
    greetingText.reveal(1000);
  }
}
</script>

<style lang="scss" scoped>
/* stylelint-disable */

.blog-banner {
  min-height: 50vh;
}

.text-min-content {
  width: 100%;
  line-height: normal;

  @screen md {
    width: min-content;
  }
}
</style>
