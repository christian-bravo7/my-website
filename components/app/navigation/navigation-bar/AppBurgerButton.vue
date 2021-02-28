<template>
  <button
    class="w-12 h-12 | p-3 | rounded-full | bg-gray-100 | app-burger-button"
    :class="{ 'z-50': isActive }"
    @click="onClick"
    @keydown.enter="onClick"
  >
    <div
      class="flex flex-col items-end justify-center | relative | w-full h-full | app-burger-button__wrapper"
      :class="{ 'app-burger-button__wrapper--active': isActive }"
    >
      <span class="absolute | block | w-9/12 | bg-black" />
      <span class="absolute | block | w-full | bg-black" />
      <span class="absolute | block | w-7/12 | bg-black" />
    </div>
  </button>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'nuxt-property-decorator';

@Component
export default class AppBurgerButton extends Vue {
  isActive: boolean = false;

  @Emit('click')
  onClick (): void {
    this.isActive = !this.isActive;
  }
}
</script>

<style lang="scss" scoped>
.app-burger-button {
  &__wrapper {
    span {
      height: 2px;
      transition-duration: 300ms;
      transition-property: transform, opacity;
    }

    span:nth-child(1) {
      transform: translateY(-6px);
    }

    span:nth-child(2) {
      transform: translateY(0);
    }

    span:nth-child(3) {
      transform: translateY(6px);
    }

    &--active {
      span:nth-child(1) {
        @apply w-full;

        transform: rotate(45deg);
      }

      span:nth-child(2) {
        opacity: 0;
      }

      span:nth-child(3) {
        @apply w-full;

        transform: rotate(-45deg);
      }
    }
  }
}
</style>
