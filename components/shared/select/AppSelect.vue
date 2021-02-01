<template>
  <div class="relative | select-none">
    <div
      ref="selectButton"
      tabindex="0"
      class="py-2 px-4 | bg-gray-100 | rounded-2xl | cursor-pointer"
      @click="openOptions"
      @keydown.enter="openOptions"
      @keydown.up="selectPreviousOption"
      @keydown.down="selectNextOption"
    >
      {{ value }}
    </div>
    <div
      v-show="isOptionListOpened"
      ref="optionsList"
      tabindex="0"
      class="absolute right-0 | w-full | bg-gray-50 | rounded-2xl shadow-lg focus:outline-none | app-select__options-list"
      @blur="closeOptions"
      @keydown.up="preparePreviousOption"
      @keydown.down="prepareNextOption"
      @keydown.esc="closeOptions"
      @keydown.enter="confirmPreparedOption"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide, Model, Emit, Watch, Ref } from 'nuxt-property-decorator';

import AppSelectOption from '@/components/shared/select/AppSelectOption.vue';

@Component
export default class AppSelect extends Vue {
  isOptionListOpened: boolean = false;
  activeIndex: number = 0;

  @Model('change') value!: any;

  @Ref('selectButton') readonly selectButton!: HTMLDivElement;
  @Ref('optionsList') readonly optionsList!: HTMLDivElement;

  get nextComponentIndex (): number {
    const nextIndex = this.activeIndex + 1;
    const index = nextIndex <= this.$children.length - 1 ? nextIndex : 0;

    return index;
  }

  get previousComponentIndex (): number {
    const previousIndex = this.activeIndex - 1;
    const index = previousIndex >= 0 ? previousIndex : this.$children.length - 1;

    return index;
  }

  get activeComponent (): any {
    return this.$children[this.activeIndex];
  }

  get nextActiveComponent (): any {
    return this.$children[this.nextComponentIndex];
  }

  get previousActiveComponent (): any {
    return this.$children[this.previousComponentIndex];
  }

  mounted (): void {
    this.updateActiveStyles(this.value);
  }

  selectPreviousOption (): void {
    this.preparePreviousOption();
    this.selectOption(this.activeComponent);
  }

  selectNextOption (): void {
    this.prepareNextOption();
    this.selectOption(this.activeComponent);
  }

  preparePreviousOption (): void {
    this.activeComponent.setInactive();
    this.previousActiveComponent.setActive();

    this.activeIndex = this.previousComponentIndex;
  }

  prepareNextOption (): void {
    this.activeComponent.setInactive();
    this.nextActiveComponent.setActive();

    this.activeIndex = this.nextComponentIndex;
  }

  confirmPreparedOption (): void {
    this.selectOption(this.activeComponent);
    this.selectButton.focus();
  }

  async openOptions (): Promise<void> {
    this.isOptionListOpened = true;
    await this.$nextTick();
    this.optionsList.focus();
  }

  closeOptions (): void {
    this.isOptionListOpened = false;
  }

  @Watch('value')
  updateActiveStyles (newValue: any): void {
    this.$children.forEach((element: Vue, index: number) => {
      const { value, setActive, setInactive } = element as AppSelectOption;

      if (value === newValue) {
        this.activeIndex = index;
        setActive();
      } else {
        setInactive();
      }
    });
  }

  @Provide()
  onSelectOptionClick (selectOption: AppSelectOption): void {
    this.selectOption(selectOption);
    this.selectButton.focus();
  }

  @Emit('change')
  selectOption ({ value }: AppSelectOption): void {
    this.closeOptions();

    return value;
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
