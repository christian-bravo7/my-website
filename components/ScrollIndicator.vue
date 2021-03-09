<template>
  <div class="scroll-indicator">
    <div class="relative | h-12 w-8 | rounded-3xl border-2 border-gray-300 dark:border-gray-400 | scroll-indicator__content" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class ScrollIndicator extends Vue {}
</script>

<style lang="scss" scoped>
.scroll-indicator {
  &__content {
    &::before {
      @apply absolute top-3 w-1 h-1 rounded-full bg-gray-500;

      left: calc(50% - theme('width.1') / 2);
      animation: scroll-animation 4s infinite;
      content: '';
    }
  }
}

@include dark-mode {
  .scroll-indicator {
    &__content {
      &::before {
        @apply bg-gray-200;
      }
    }
  }
}

@keyframes scroll-animation {
  0% {
    opacity: 0;
  }

  20% {
    transform: translateY(0);
    opacity: 1;
  }

  40% {
    opacity: 1;
  }

  100% {
    transform: translateY(16px);
    opacity: 0;
  }
}
</style>
