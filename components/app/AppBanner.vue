<template>
  <transition name="flash-text">
    <section class="relative flex justify-center items-center px-4">
      <h2 class="absolute font-bold text-8xl sm:text-10xl md:text-12xl leading-none select-none text-gray-200 dark:text-blue-700">
        <slot name="secondary-text" />
      </h2>
      <h1 class="max-w-screen-md text-3xl md:text-5xl z-10 text-gray-900 dark:text-white">
        <slot name="primary-text" />
      </h1>
    </section>
  </transition>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class AppBanner extends Vue {}

</script>

<style lang="scss" scoped>
.flash-text-enter {
  opacity: 0;
}

.flash-text-enter-active {
  transition: 2s;
}

.flash-text-enter-to {
  opacity: 1;
}

.flash-text-leave {
  opacity: 0;
}

.flash-text-leave-active {
  transition: 2s;
}

.flash-text-leave-to {
  opacity: 1;
}
</style>
