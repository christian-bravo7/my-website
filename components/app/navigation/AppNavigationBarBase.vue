<template>
  <nav
    class="fixed top-0 left-0 right-0 z-20 | p-4 md:py-3 md:px-8  | bg-transparent | transition-all duration-150 | navbar"
  >
    <div class="navbar__content">
      <div class="flex items-center">
        <slot name="left" />
      </div>
      <div class="flex items-center">
        <slot name="center" />
      </div>
      <div class="flex items-center">
        <slot name="right" />
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class AppNavigationBarBase extends Vue { }
</script>

<style lang="scss" scoped>
.navbar {
  &__content {
    @apply grid;

    grid-template-columns: auto 1fr auto;
  }
}

@screen md {
  .navbar {
    backdrop-filter: blur(100px);
  }
}
</style>
