<template>
  <transition name="flash-text">
    <section class="app-banner">
      <h2 class="app-banner__gretting">
        <slot name="secondary-text" />
      </h2>
      <h1 class="app-banner__description">
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
.app-banner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &__gretting {
    position: absolute;
    color: var(--text-light);
    font-weight: bold;
    font-size: rem(200);
    line-height: 1;
    user-select: none;
  }

  &__description {
    z-index: 1;
    max-width: rem(800);
    color: var(--text);
    font-size: $size-1;
  }
}

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

@include mobile {
  .app-banner {
    padding: rem(15);

    &__gretting {
      font-size: 20vw;
    }

    &__description {
      font-size: $size-4;
    }
  }
}
</style>
