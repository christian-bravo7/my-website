<template>
  <button
    class="px-4 py-2 | text-left | rounded-lg | text-black dark:text-white | my-work-experience-button"
    :class="{ 'my-work-experience-button--is-active': isActive }"
    @click="onClick"
    @keydown.enter="onClick"
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

  @Emit('onClick')
  onClick (): void {}
}
</script>

<style lang="scss" scoped>
.my-work-experience-button {
  &--is-active,
  &:hover {
    @apply text-pink-500 dark:text-blue-500 bg-pink-50 bg-opacity-40 dark:bg-blue-700 dark:bg-opacity-25;
  }
}
</style>
