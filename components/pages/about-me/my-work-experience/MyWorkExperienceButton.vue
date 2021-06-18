<template>
  <button
    :id="id"
    class="relative | px-4 py-4 | text-left | rounded-tr-lg rounded-br-lg | outline-none focus:outline-none | text-black dark:text-white | whitespace-nowrap | transition-all duration-300 | my-work-experience-button"
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
    @apply text-pink-500 dark:text-blue-400 bg-pink-50 bg-opacity-40 dark:bg-blue-700 dark:bg-opacity-30;
  }
}
</style>
