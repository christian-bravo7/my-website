<template>
  <transition
    name="flash-text"
    @enter="shuffleText"
  >
    <section class="flex justify-center items-center px-4">
      <div class="relative">
        <h2
          id="secondary"
          class="absolute font-bold text-center text-8xl sm:text-10xl md:text-12xl leading-none select-none text-gray-200 dark:text-blue-700 secondary-text"
        >
          <slot name="secondary-text" />
        </h2>
        <h1
          id="primary"
          class="relative max-w-screen-md text-center text-3xl md:text-5xl z-10 text-gray-900 dark:text-gray-50 primary-text"
        >
          <slot name="primary-text" />
        </h1>
      </div>
    </section>
  </transition>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

import baffle from 'baffle';

@Component
export default class AppBanner extends Vue {
  shuffleText (): void {
    // @ts-ignore
    const secondaryText = baffle('#secondary', { speed: 80 });
    secondaryText.reveal(1000);
  }
}

</script>

<style lang="scss" scoped>

.primary-text {
  transition-duration: 2000ms;
  transition-property: opacity;
}

.secondary-text {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.flash-text-enter {
  .primary-text {
    opacity: 0;
  }
}

.flash-text-enter-active {
  transition: 5s;
}

.flash-text-enter-to {
  .primary-text {
    opacity: 1;
  }
}
</style>
