<template>
  <button
    class="px-4 py-4 | text-left | rounded-lg | text-black dark:text-white | transition-all duration-300 | my-work-experience-button"
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
  &::before {
    @apply absolute left-0 top-0 rounded-tr-2xl rounded-br-2xl bottom-0 bg-pink-500 dark:bg-blue-500;

    width: 0;
    height: 100%;
    transition-duration: 300ms;
    transition-property: width;
    content: '';
  }

  &--is-active,
  &:hover {
    @apply relative text-pink-500 dark:text-blue-500 bg-pink-50 bg-opacity-30 dark:bg-blue-700 dark:bg-opacity-25;
  }

  &--is-active {
    @apply pl-6;

    &::before {
      width: 6px;
    }
  }
}
</style>
