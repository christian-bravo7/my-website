<template>
  <div class="relative | select-none | app-select">
    <div
      ref="selectButton"
      tabindex="0"
      class="flex items-center | py-2 pl-4 pr-1 | text-sm | text-gray-900 dark:text-gray-50 bg-gray-100 dark:bg-blue-900 | rounded-lg | transition-colors duration-300 cursor-pointer | app-select__button"
      :class="{ 'active' : isOptionListOpened }"
      @click="openOptions"
      @keydown.enter="openOptions"
      @keydown.up="selectPreviousOption"
      @keydown.down="selectNextOption"
      @focus.prevent="saveFocusElement"
    >
      <slot
        :label="label"
        name="placeholder"
      >
        {{ label }}
      </slot>
      <i
        class="material-icons ml-1 | transition-transform duration-300"
        :class="{ 'transform rotate-180': isOptionListOpened }"
      >
        keyboard_arrow_down
      </i>
    </div>
    <Transition name="option-list">
      <div
        v-show="isOptionListOpened"
        ref="optionsList"
        tabindex="0"
        class="absolute right-0 | p-1 | bg-gray-50 dark:bg-blue-900 | rounded-lg shadow-lg focus:outline-none | app-select__options-list"
        @blur="clearBlurFromOptions"
        @focus.prevent="saveFocusElement"
        @keydown.up.prevent="preparePreviousOption"
        @keydown.down.prevent="prepareNextOption"
        @keydown.esc="closeOptions"
        @keydown.enter="confirmPreparedOption"
      >
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Provide, Model, Emit, Watch, Ref } from 'nuxt-property-decorator';

import AppSelectOption from '@/components/shared/select/AppSelectOption.vue';

@Component
export default class AppSelect extends Vue {
  isOptionListOpened: boolean = false;
  activeIndex: number = 0;
  label: any = '';
  currentFocusElement: any;
  shouldClose: boolean = false;
  isOptionListFocusClear: boolean = false;

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
    if (this.shouldClose) {
      this.shouldClose = false;
      return;
    }

    this.isOptionListOpened = true;
    await this.$nextTick();
    this.optionsList.focus();
  }

  closeOptions (): void {
    this.isOptionListOpened = false;
  }

  saveFocusElement (element: any): void {
    this.isOptionListFocusClear = false;
    this.currentFocusElement = element.target;
  }

  clearBlurFromOptions (): void {
    this.isOptionListFocusClear = true;
    this.closeOptions();
  }

  @Watch('value')
  updateActiveStyles (newValue: any): void {
    this.$children.forEach((element: Vue, index: number) => {
      const { value, setActive, setInactive, label } = element as AppSelectOption;

      if (value === newValue) {
        this.activeIndex = index;
        this.label = label;
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
    $extra-width: rem(50);
    $extra-top: rem(8);

    top: calc(100% + #{$extra-top});
    min-width: calc(100% + #{$extra-width});
  }

  /deep/ .app-select-option {
    @apply mb-1;

    &:last-child {
      @apply mb-0;
    }
  }

  &__button {
    &.active {
      @apply bg-gray-50 shadow-md;
    }
  }
}

html.dark-mode {
  .app-select {
    &__button {
      &.active {
        @apply bg-blue-900;
      }
    }
  }
}

.option-list-enter {
  transform: translateY(-10%);
  opacity: 0;
}

.option-list-enter-active {
  transition-duration: 200ms;
  transition-property: opacity, transform;
}

.option-list-enter-to {
  transform: translateY(0%);
  opacity: 1;
}

.option-list-leave {
  transform: translateY(0%);
  opacity: 1;
}

.option-list-leave-active {
  transition-duration: 200ms;
  transition-property: opacity, transform;
}

.option-list-leave-to {
  transform: translateY(-10%);
  opacity: 0;
}
</style>
