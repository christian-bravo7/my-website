<template>
  <nav class="p-4 fixed top-0 left-0 right-0 z-20 bg-transparent navbar transition-all duration-150">
    <div class="mx-auto container flex justify-between">
      <NuxtLink
        class="flex w-12 h-12 text-black dark:text-white"
        :to="localePath({ name: 'index' })"
      >
        <SiteLogo class="w-full h-full fill-current" />
      </NuxtLink>
      <div class="hidden md:flex items-center">
        <div class="grid grid-cols-2 gap-x-6 content-center">
          <NuxtLink
            class="text-center text-pink-800 dark:text-blue-500"
            exact-active-class="font-bold"
            :to="localePath({ name: 'index' })"
          >
            {{ $t('navigation.home-label') }}
          </NuxtLink>
          <NuxtLink
            class="relative text-center text-pink-800 dark:text-blue-500"
            exact-active-class="font-bold"
            :to="localePath({ name: 'me' })"
          >
            {{ $t('navigation.about-me-label') }}
          </NuxtLink>
        </div>
        <div class="flex items-center ml-8">
          <div
            v-if="hasLanguagePicker"
            class="mr-8"
          >
            <LanguagePicker abbreviation />
          </div>
          <div class="flex justify-center items-center">
            <ThemeSwitch />
          </div>
        </div>
      </div>
      <button
        class="flex md:hidden justify-items-center items-center text-gray-900 dark:text-gray-50"
        @click="openSidebar"
        @keydown.enter="openSidebar"
      >
        <span class="material-icons text-5xl">
          menu
        </span>
      </button>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator';

import SiteLogo from '~/assets/img/logo.svg?inline';

@Component({
  components: {
    SiteLogo,
  },
})
export default class NavigationBar extends Vue {
  previousScroll: number = window.scrollY || document.documentElement.scrollTop;
  currentDirection: number = 0;
  previousDirection: number = 0;

  @Prop({ type: Boolean, default: true })
  readonly hasLanguagePicker!: boolean;

  @Emit('openSidebar')
  openSidebar (): void {}

  mounted (): void {
    this.checkScrollDown();
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
    const header = document.querySelector('.navbar') as HTMLElement;

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
.navbar {
  &.hide {
    top: rem(-100);
  }
}
</style>
