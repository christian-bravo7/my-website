<template>
  <div class="relative">
    <div
      class="py-2 px-4 | bg-gray-300 | rounded-2xl | cursor-pointer"
      @click="toggleOptions"
      @keydown.enter="toggleOptions"
    >
      Boton
    </div>
    <div
      v-show="areOptionsOpened"
      ref=" "
      class="absolute right-0 app-select__options-list"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class AppSelect extends Vue {
  areOptionsOpened: boolean = false;

  toggleOptions (): void {
    this.areOptionsOpened = !this.areOptionsOpened;
  }

  openOptions (): void {
    this.areOptionsOpened = true;
  }

  closeOptions (): void {
    this.areOptionsOpened = false;
  }
}
</script>

<style lang="scss" scoped>
.app-select {
  &__options-list {
    top: 100%;
  }
}
</style>
