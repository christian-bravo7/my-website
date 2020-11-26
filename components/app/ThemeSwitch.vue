<template>
  <div class="relative flex select-none">
    <input
      id="theme-switch"
      class="hidden theme-switch__checkbox"
      type="checkbox"
      :checked="hasDarkTheme"
      @change="changeTheme"
    >
    <label
      class="relative block w-10 h-2 cursor-pointer theme-switch__label"
      for="theme-switch"
    >
      <span class="absolute block w-full h-full bg-gray-300 rounded-xl border border-gray-400 dark:border-blue-500 theme-switch__bar" />
      <span class="absolute flex items-center justify-center w-5 h-5 bg-gray-50 rounded-full border border-pink-800 dark:border-blue-500 theme-switch__circle" />
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class ThemeSwitch extends Vue {
  get hasDarkTheme (): boolean {
    return this.$colorMode.value === 'dark';
  }

  changeTheme (): void {
    this.$colorMode.preference = this.hasDarkTheme ? 'light' : 'dark';
  }
}
</script>

<style lang="scss" scoped>
.theme-switch {
  &__bar {
    top: 50%;
    transform: translateY(-50%);
  }

  &__circle {
    top: 50%;
    left: 0%;
    transform: translateY(-50%);
    transition-duration: 250ms;
    transition-property: transform, box-shadow, background-color, left;

    & > i {
      transition-duration: 250ms;
      transition-property: color;
    }
  }

  &__checkbox {
    &:checked + .theme-switch__label {
      .theme-switch__bar {
        background-color: theme('colors.blue.500');
      }

      .theme-switch__circle {
        $full-width: rem(20);

        left: calc(100% - #{$full-width});
        transform: translateY(-50%);
      }
    }
  }
}
</style>
