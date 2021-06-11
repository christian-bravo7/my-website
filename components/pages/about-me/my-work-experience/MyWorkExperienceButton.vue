<template>
  <button
    class="relative | px-4 py-4 | text-left | rounded-lg | text-black dark:text-white | whitespace-nowrap | transition-all duration-300 | my-work-experience-button"
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
  @apply border border-transparent;

  &--is-active,
  &:hover {
    @apply text-pink-500 dark:text-blue-400 bg-pink-50 bg-opacity-30 dark:bg-blue-700 dark:bg-opacity-25;
  }

  &--is-active {
    @apply border-pink-500 dark:border-blue-400;
  }
}

@screen md {
  .my-work-experience-button {
    &::before {
      width: 0;
      height: 100%;
      transition-duration: 300ms;
      transition-property: width;

      @apply absolute left-0 top-0 rounded-tr-2xl rounded-br-2xl bottom-0 bg-pink-500 dark:bg-blue-400;
    }

    &--is-active {
      @apply pl-6;

      &::before {
        width: 6px;
      }
    }
  }
}

</style>
