<template>
  <div class="navbar container">
    <NuxtLink
      class="navbar__logo"
      :to="localePath({ name: 'index' })"
    >
      <SiteLogo />
    </NuxtLink>
    <div class="navbar__options">
      <LanguagePicker
        class="navbar__language-picker"
        abbreviation
      />
    </div>
  </div>
</template>

<script lang="ts">

import { Vue, Component, Emit } from 'nuxt-property-decorator';

import SiteLogo from '~/assets/img/logo.svg?inline';

@Component({
  components: {
    SiteLogo,
  },
})
export default class CVNavigationBar extends Vue {
  previousScroll: number = window.scrollY || document.documentElement.scrollTop;
  currentDirection: number = 0;
  previousDirection: number = 0;

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

  &__logo {
    width: rem(45);
    height: rem(45);

    svg {
      width: 100%;
      height: 100%;
      fill: red;
    }
  }

  &__language-picker {
    color: red;
  }

  &__options {
    display: flex;
    align-items: center;
  }
}
</style>
