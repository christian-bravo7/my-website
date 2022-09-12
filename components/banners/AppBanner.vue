<template>
  <Transition
    name="flash-text"
    @enter="shuffleText"
    @after-enter="displayPrimaryText"
  >
    <section class="relative | flex justify-center items-center | px-4">
      <div class="relative">
        <Transition name="secondary-text">
          <h2
            v-show="isSecondaryTextVisible"
            id="secondary"
            class="absolute | font-bold text-center | text-6xl sm:text-8xl md:text-10xl xl:text-13xl | leading-none select-none | text-gray-100 dark:text-blue-900 | app-banner__secondary-text"
          >
            <slot name="secondary-text" />
          </h2>
        </Transition>
        <Transition name="primary-text">
          <h1
            v-show="isPrimaryTextVisible"
            class="relative z-10 | max-w-md sm:max-w-lg lg:max-w-screen-md xl:max-w-screen-lg | text-center text-xl sm:text-3xl md:text-4xl xl:text-5xl | text-gray-900 dark:text-gray-50 | app-banner__primary-text"
          >
            <slot name="primary-text" />
          </h1>
        </Transition>
      </div>
    </section>
  </Transition>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

import baffle from 'baffle';

@Component
export default class AppBanner extends Vue {
  isPrimaryTextVisible: boolean = false;
  isSecondaryTextVisible: boolean = false;

  shuffleText (): void {
    this.displaySecondaryText();
    // @ts-ignore
    const secondaryText = baffle('#secondary', { speed: 70 });
    secondaryText.reveal(1000);
  }

  displayPrimaryText (): void {
    this.isPrimaryTextVisible = true;
  }

  displaySecondaryText (): void {
    this.isSecondaryTextVisible = true;
  }
}

</script>

<style lang="scss" scoped>
.app-banner {
  &__secondary-text {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.flash-text-enter-active {
  transition: 0.9s;
}

.secondary-text-enter {
  opacity: 0;
}

.secondary-text-enter-to {
  opacity: 1;
}

.secondary-text-enter-active {
  transition-duration: 0.8s;
  transition-property: opacity;
}

.primary-text-enter {
  transform: translateY(50px);
  opacity: 0;
}

.primary-text-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.primary-text-enter-active {
  transition-duration: 1s;
  transition-property: opacity, transform;
}
</style>
