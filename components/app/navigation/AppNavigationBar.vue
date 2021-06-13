<template>
  <AppNavigationBarBase
    class="transform transition-transform duration-300"
    :class="{ '-translate-y-full': isHidden }"
  >
    <template #left>
      <div class="hidden md:flex">
        <AppLogo />
      </div>
    </template>
    <template #center>
      <div class="hidden | w-full | md:flex items-center justify-end col-span-3">
        <div class="flex content-center | mr-6">
          <AppNavigationBarLink
            :to="localePath({ name: 'index' })"
          >
            {{ $t('navigation.home-label') }}
          </AppNavigationBarLink>
          <AppNavigationBarLink
            :to="localePath({ name: 'me' })"
          >
            {{ $t('navigation.about-me-label') }}
          </AppNavigationBarLink>
          <AppNavigationBarLink
            :to="localePath({ name: 'blog' })"
          >
            Blog
          </AppNavigationBarLink>
        </div>
      </div>
    </template>
    <template #right>
      <div class="hidden | md:flex items-center justify-end col-span-1">
        <div class="mr-4">
          <LanguagePicker />
        </div>
        <div class="flex justify-center items-center">
          <DarkModeSwitch />
        </div>
      </div>
      <div class="flex md:hidden justify-end items-center">
        <AppBurgerButton
          :is-active="isSidebarActive"
          @onClick="onSidebarToggle"
        />
      </div>
    </template>
  </AppNavigationBarBase>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator';

@Component
export default class AppNavigationBar extends Vue {
  previousScroll: number = window.scrollY || document.documentElement.scrollTop;
  currentDirection: number = 0;
  previousDirection: number = 0;
  isHidden: boolean = false;

  @Prop({ type: Boolean, default: false })
  readonly isSidebarActive!: boolean;

  @Emit('onSidebarToggle')
  onSidebarToggle (): void {}

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
      this.toggleNavigationBar(this.currentDirection, currentScroll);
    }
    this.previousScroll = currentScroll;
  }

  checkScrollDown (): void {
    window.addEventListener('scroll', this.checkScroll);
  }

  toggleNavigationBar (direction: number, currentScroll: number): void {
    if (direction === 2 && currentScroll > 52) {
      this.isHidden = true;
      this.previousDirection = direction;
    } else if (direction === 1) {
      this.isHidden = false;
      this.previousDirection = direction;
    }
  }
}
</script>
