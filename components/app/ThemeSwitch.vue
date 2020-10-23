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
      class="relative block w-8 h-4 cursor-pointer theme-switch__label"
      for="theme-switch"
    >
      <span class="absolute block w-full h-full bg-gray-300 rounded-xl border border-pink-800 dark:border-blue-500 theme-switch__bar" />
      <span class="absolute flex items-center justify-center w-6 h-6 bg-gray-50 rounded-full border border-pink-800 dark:border-blue-500 theme-switch__circle">
        <i
          v-if="hasDarkTheme"
          class="text-sm text-pink-800 dark:text-blue-500 theme-switch__icon material-icons"
        >
          brightness_2
        </i>
        <i
          v-else
          class="text-sm text-pink-800 dark:text-blue-500 theme-switch__icon material-icons"
        >
          wb_sunny
        </i>
      </span>
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class ThemeSwitch extends Vue {
  get hasDarkTheme (): boolean {
    // @ts-ignore
    return this.$colorMode.value === 'dark';
  }

  changeTheme (): void {
    // @ts-ignore
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
    left: calc(0% - 12px);
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
      .theme-switch__circle {
        left: calc(100% - 12px);
        transform: translateY(-50%);
      }
    }
  }
}
</style>
