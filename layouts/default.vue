<template>
  <main class="layout">
    <SidebarMenu
      v-if="isSidebarActive"
      @closeSidebar="closeSidebar"
    />
    <div class="layout__navbar">
      <NuxtLink
        class="navbar__logo"
        :to="localePath({ name: 'index' })"
      >
        <SiteLogo />
      </NuxtLink>
      <div class="navbar__options">
        <div class="navbar__links">
          <NuxtLink
            class="navbar__link"
            exact-active-class="navbar__link--active"
            :to="localePath({ name: 'index' })"
          >
            {{ $t('navigation.home-label') }}
          </NuxtLink>
          <NuxtLink
            class="navbar__link"
            exact-active-class="navbar__link--active"
            :to="localePath({ name: 'me' })"
          >
            {{ $t('navigation.about-me-label') }}
          </NuxtLink>
        </div>
        <div class="navbar__user-preferences">
          <div>
            <LanguagePicker abbreviation />
          </div>
          <div class="navbar__theme-switch">
            <ThemeSwitch />
          </div>
        </div>
      </div>
      <div class="navbar__burger-button-wrapper">
        <button
          class="button navbar__burger-button"
          @click="openSidebar"
        >
          <span class="material-icons navbar__burger-button-icon">
            menu
          </span>
        </button>
      </div>
    </div>
    <header class="layout__banner">
      <MovableFigures :current-route="currentRoute" />
      <PortalTarget
        name="page-banner"
        class="layout__banner-content"
      />
    </header>
    <Nuxt class="layout__page" />
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { MetaInfo } from 'vue-meta/types';
import { PortalTarget } from 'portal-vue';

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
    PortalTarget,
  },
})
export default class Default extends Vue {
  isSidebarActive: boolean = false;
  previousScroll: number = window.scrollY || document.documentElement.scrollTop;
  currentDirection: number = 0;
  previousDirection: number = 0;

  get currentRoute (): string {
    const route = this.getRouteBaseName();
    return route;
  }

  mounted (): void {
    this.checkScrollDown();
  }

  openSidebar (): void {
    this.isSidebarActive = true;
  }

  closeSidebar (): void {
    this.isSidebarActive = false;
  }

  checkScroll (): void {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > this.previousScroll) {
      this.currentDirection = 2;
    } else if (currentScroll < this.previousScroll) {
      this.currentDirection = 1;
    }

    if (this.currentDirection !== this.previousDirection) {
      this.toggleHeader(this.currentDirection, currentScroll);
    }

    this.previousScroll = currentScroll;
  }

  checkScrollDown (): void {
    window.addEventListener('scroll', this.checkScroll);
  }

  toggleHeader (direction: number, currentScroll: number): void {
    const header = document.querySelector('.layout__navbar') as HTMLElement;

    if (direction === 2 && currentScroll > 52) {
      header.classList.add('hide');
      this.previousDirection = direction;
    } else if (direction === 1) {
      header.classList.remove('hide');
      this.previousDirection = direction;
    }
  }
}
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
    z-index: 5;
    display: grid;
    grid-template-columns: 1fr auto;
    width: 100%;
    padding: rem(24);
    transition: top 250ms;

    &.hide {
      top: rem(-100);
    }
  }

  &__banner {
    height: 100vh;
  }

  &__banner-content {
    height: 100%;

    > /deep/ * {
      height: 100%;
    }
  }

  &__page {
    &.left-slide-enter > .content {
      transform: translateX(-90%);
    }

    &.left-slide-enter-to > .content,
    &.right-slide-enter-to > .content {
      transform: translateX(0%);
    }

    &.left-slide-enter-active > .content,
    &.right-slide-enter-active > .content {
      transition: 750ms;
    }

    &.right-slide-enter > .content {
      transform: translateX(90%);
    }
  }

  .navbar {
    &__logo {
      width: rem(45);
      height: rem(45);

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

    &__options {
      display: grid;
      grid-column-gap: rem(80);
      grid-template-columns: auto auto;
      align-content: center;
    }

    &__burger-button-wrapper {
      display: flex;
      align-items: center;
    }

    &__burger-button {
      display: none;
      height: auto;
      padding: 0;
      background-color: transparent;
      border-color: transparent;
      transition-duration: 250ms;
      transition-property: background-color, color;
    }

    &__burger-button-icon {
      color: var(--text);
      font-size: rem(42);
    }

    &__user-preferences {
      display: grid;
      grid-column-gap: rem(8);
      grid-template-columns: auto auto;
      align-items: center;
    }

    &__links {
      display: grid;
      grid-column-gap: rem(40);
      grid-template-columns: auto auto;
    }

    &__link {
      position: relative;
      color: var(--asset-highlight);

      &::after {
        position: absolute;
        bottom: rem(-2);
        left: 50%;
        width: 0;
        height: rem(2);
        background-color: var(--asset-highlight);
        transform: translateX(-50%);
        transition: width 250ms;
        content: '';
      }

      &:hover::after {
        width: 100%;
      }

      &--active {
        &::after {
          width: 100%;
        }
      }
    }
  }
}

@include mobile {
  .layout {
    .navbar {
      &__options {
        display: none;
      }

      &__burger-button {
        display: flex;
      }
    }
  }
}
</style>
