<template>
  <div
    ref="itemRef"
    class="px-2 py-1 mb-1 | text-sm | hover:text-pink-500 | rounded-md | cursor-pointer | transition-all duration-300 | app-select-option"
    :class="{ 'app-select-option--active': active }"
    @click="selectOption"
    @keydown.enter="selectOption"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Inject, Prop } from 'nuxt-property-decorator';

@Component
export default class AppSelectOption extends Vue {
  active: boolean = false;

  @Prop()
  value!: any;

  @Prop()
  label!: any;

  @Inject()
  onSelectOptionClick!: Function;

  selectOption (): void {
    this.onSelectOptionClick(this);
  }

  setActive (): void {
    this.active = true;
  }

  setInactive (): void {
    this.active = false;
  }
}
</script>

<style lang="scss" scoped>
.app-select-option {
  &:last-child {
    @apply mb-0;
  }

  &:hover {
    @apply pl-3;
  }

  &--active {
    @apply text-pink-500 bg-pink-50;
  }

  &--active:hover {
    @apply px-2;
  }
}

@include dark-mode {
  .app-select-option {
    @apply bg-blue-900 text-white;

    &:hover {
      @apply text-blue-500;
    }

    &--active {
      @apply bg-blue-800 text-blue-500;
    }
  }
}
</style>
