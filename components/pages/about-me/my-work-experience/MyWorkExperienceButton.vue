<template>
  <button
    :id="id"
    class="relative | px-4 py-4 | text-center md:text-left | rounded-lg md:rounded-tl-none md:rounded-bl-none | outline-none focus:outline-none | text-black dark:text-white | whitespace-nowrap | transition-all duration-300 | my-work-experience-button"
    :class="{ 'my-work-experience-button--is-active': isActive }"
    @click="click"
    @keydown.enter="click"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'nuxt-property-decorator';

@Component
export default class MyWorkExperienceButton extends Vue {
  @Prop({ type: Boolean, default: false })
  readonly isActive!: boolean;

  @Prop({ type: String, required: true })
  readonly id!: string;

  @Emit('click')
  click (): void {}
}
</script>

<style lang="scss" scoped>
.my-work-experience-button {
  &--is-active,
  &:hover {
    @apply text-light-theme-500 dark:text-dark-theme-400 bg-light-theme-50 bg-opacity-40 dark:bg-dark-theme-700 dark:bg-opacity-30;
  }
}
</style>
