<template>
  <div
    class="relative | select-none | app-select"
    @blur.capture="handleBlur"
  >
    <div
      ref="selectButton"
      tabindex="0"
      class="flex items-center | py-1 pl-4 pr-1 | text-base | text-gray-900 dark:text-gray-50 bg-gray-100 dark:bg-dark-theme-900 | rounded-lg | cursor-pointer | app-select__button"
      :class="{ 'app-select__button--active' : isOptionListOpened }"
      @click="toggleOptions"
      @keydown.enter="toggleOptions"
      @keydown.up="selectPreviousOption"
      @keydown.down="selectNextOption"
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
        :class="{ 'app-select__options-list--top-right': isTopRight }"
        class="absolute right-0 | p-1 | bg-gray-50 dark:bg-dark-theme-900 | rounded-lg shadow-lg focus:outline-none | app-select__options-list"
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
import { Vue, Component, Provide, Model, Emit, Watch, Ref, Prop } from 'nuxt-property-decorator';

import AppSelectOption from '@/components/ui/select/AppSelectOption.vue';

@Component
export default class AppSelect extends Vue {
  isOptionListOpened: boolean = false;
  activeIndex: number = 0;
  label: string = '';

  @Prop({ type: Boolean, default: false })
  readonly isTopRight!: boolean;

  @Model('change') value!: string;

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

  get activeComponent (): AppSelectOption {
    return this.$children[this.activeIndex] as AppSelectOption;
  }

  get nextActiveComponent (): AppSelectOption {
    return this.$children[this.nextComponentIndex] as AppSelectOption;
  }

  get previousActiveComponent (): AppSelectOption {
    return this.$children[this.previousComponentIndex] as AppSelectOption;
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

  toggleOptions (): void {
    this.isOptionListOpened ? this.closeOptions() : this.openOptions();
  }

  clearBlurFromOptions (): void {
    this.closeOptions();
  }

  handleBlur (event: MouseEvent): void {
    if (this.$el.contains(event.relatedTarget as Node)) {
      return;
    }

    this.closeOptions();
  }

  @Watch('value')
  updateActiveStyles (value: string): void {
    this.$children.forEach((component: Vue, index: number) => {
      const selectOption = component as AppSelectOption;

      if (selectOption.value === value) {
        this.activeIndex = index;
        this.label = selectOption.label;
        selectOption.setActive();
      } else {
        selectOption.setInactive();
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
    top: calc(100% + 8px);
    min-width: calc(100% + 50px);

    &--top-right {
      top: initial;
      bottom: calc(100% + 8px);
    }
  }

  &__button {
    &--active {
      @apply bg-gray-50 shadow-md dark:bg-dark-theme-900;
    }
  }
}

.option-list-enter,
.option-list-leave-to {
  transform: translateY(-10%);
  opacity: 0;
}

.option-list-enter-active,
.option-list-leave-active {
  transition-duration: 200ms;
  transition-property: opacity, transform;
}

.option-list-enter-to,
.option-list-leave {
  transform: translateY(0%);
  opacity: 1;
}
</style>
