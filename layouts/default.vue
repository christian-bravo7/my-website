<template>
  <main class="layout">
    <div class="layout__navbar">
      <div class="navbar__logo">
        <SiteLogo />
      </div>
      <div class="navbar__theme-switch">
        <ThemeSwitch />
      </div>
    </div>
    <Nuxt class="layout__page" />
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { MetaInfo } from 'vue-meta/types';

import { guestStore } from '@/store';
import SiteLogo from '~/assets/img/logo.svg?inline';

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
    SiteLogo,
  },
})
export default class Default extends Vue {}
</script>

<style lang="scss" scoped>
.layout {
  display: grid;
  min-height: 100vh;

  &__navbar {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: grid;
    grid-template-columns: 1fr auto;
    width: 100%;
    padding: rem(24);
  }

  .navbar {
    &__logo {
      width: rem(60);
      height: rem(60);

      svg {
        width: 100%;
        height: 100%;
        fill: var(--text);
      }
    }

    &__theme-switch {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 1rem;
    }
  }
}
</style>
