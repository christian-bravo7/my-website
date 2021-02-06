<template>
  <div class="relative flex select-none">
    <input
      id="dark-mode-switch"
      class="hidden dark-mode-switch__checkbox"
      type="checkbox"
      :checked="hasDarkTheme"
      @change="changeTheme"
    >
    <label
      class="relative | flex justify-center items-center | w-10 h-10 | text-yellow-500 dark:text-gray-50 bg-gray-100 dark:bg-blue-900 | cursor-pointer rounded-lg | dark-mode-switch__label"
      for="dark-mode-switch"
    >
      <TransitionGroup
        name="theme-icon"
        mode="out-in"
      >
        <i
          v-show="hasDarkTheme"
          key="dark"
          class="material-icons dark-mode-switch__icon"
        >
          mode_night
        </i>
        <i
          v-show="!hasDarkTheme"
          key="light"
          class="material-icons dark-mode-switch__icon"
        >
          wb_sunny
        </i>
      </TransitionGroup>
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class DarkModeSwitch extends Vue {
  get hasDarkTheme (): boolean {
    return this.$colorMode.value === 'dark';
  }

  changeTheme (): void {
    this.$colorMode.preference = this.hasDarkTheme ? 'light' : 'dark';
  }
}
</script>

<style lang="scss" scoped>
.dark-mode-switch {
  &__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.theme-icon-enter {
  transform: translate(-50%, -50%) scale(0.1);
}

.theme-icon-enter-to {
  transform: translate(-50%, -50%) scale(1);
}

.theme-icon-enter-active {
  transition-duration: 300ms;
  transition-property: transform;
}

.theme-icon-leave {
  transform: translate(-50%, -50%) scale(1);
}

.theme-icon-leave-to {
  transform: translate(-50%, -50%) scale(0.1);
}

.theme-icon-leave-active {
  transition-duration: 300ms;
  transition-property: transform;
}
</style>
