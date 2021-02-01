<template>
  <div
    ref="itemRef"
    class="p-2 | hover:text-pink-500 | rounded-2xl | cursor-pointer | transition-all duration-300 | app-select-option"
    :class="{ active }"
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
  &:hover {
    @apply pl-4;
  }

  &.active {
    @apply text-pink-500 bg-pink-50;
  }

  &.active:hover {
    @apply p-2;
  }
}
</style>
