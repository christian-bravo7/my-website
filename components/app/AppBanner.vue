<template>
  <Transition
    name="flash-text"
    @enter="shuffleText"
    @after-enter="displayPrimaryText"
  >
    <section class="relative | flex justify-center items-center | px-4">
      <div class="relative">
        <h2
          id="secondary"
          class="absolute | font-bold text-center | text-6xl sm:text-8xl md:text-13xl | leading-none select-none | text-gray-200 dark:text-blue-900 | app-banner__secondary-text"
        >
          <slot name="secondary-text" />
        </h2>
        <Transition name="primary-text">
          <h1
            v-show="isPrimaryTextVisible"
            class="relative z-10 | max-w-xs sm:max-w-lg md:max-w-screen-md | text-center text-xl sm:text-3xl md:text-5xl | text-gray-900 dark:text-gray-50 | app-banner__primary-text"
          >
            <slot name="primary-text" />
          </h1>
        </Transition>
      </div>
      <slot v-if="isPrimaryTextVisible" />
    </section>
  </Transition>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

import baffle from 'baffle';

@Component
export default class AppBanner extends Vue {
  isPrimaryTextVisible: boolean = false;

  shuffleText (): void {
    // @ts-ignore
    const secondaryText = baffle('#secondary', { speed: 70 });
    secondaryText.reveal(1000);
  }

  displayPrimaryText (): void {
    this.isPrimaryTextVisible = true;
  }
}

</script>

<style lang="scss" scoped>

.app-banner {
  &__primary-text {
    transition-duration: 2000ms;
    transition-property: opacity;
  }

  &__secondary-text {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.flash-text-enter {
  .app-banner__primary-text {
    opacity: 0;
  }
}

.flash-text-enter-active {
  transition: 0.9s;
}

.flash-text-enter-to {
  .app-banner__primary-text {
    opacity: 1;
  }
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

.primary-text-leave {
  opacity: 1;
}

.primary-text-leave-to {
  opacity: 0;
}

.primary-text-leave-active {
  transition-duration: 1s;
  transition-property: opacity;
}
</style>
