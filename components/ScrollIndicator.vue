<template>
  <div class="scroll-indicator">
    <span class="block | w-5 h-5 | -m-2 | border-r-2 border-b-2 border-gray-600 dark:border-gray-100 | transform rotate-45" />
    <span class="block | w-5 h-5 | -m-2 | border-r-2 border-b-2 border-gray-600 dark:border-gray-100 | transform rotate-45" />
    <span class="block | w-5 h-5 | -m-2 | border-r-2 border-b-2 border-gray-600 dark:border-gray-100 | transform rotate-45" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class ScrollIndicator extends Vue {}
</script>

<style lang="postcss" scoped>
.scroll-indicator {
  span {
    animation: scroll-indicator-animation 2s infinite backwards;
  }

  span:nth-child(1) {
    animation-delay: 0s;
  }

  span:nth-child(2) {
    animation-delay: 0.2s;
  }

  span:nth-child(3) {
    animation-delay: 0.4s;
  }
}

@keyframes scroll-indicator-animation {
  0% {
    opacity: 0;
  }

  50% {
    transform: rotate(45deg) translate(5px, 5px);
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>
