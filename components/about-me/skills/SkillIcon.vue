<template>
  <div class="flex flex-col items-center justify-between | p-2 | bg-gray-100 dark:bg-transparent dark-hover:bg-blue-700 dark-hover:bg-opacity-25 | rounded-xl shadow-md hover:shadow-xl border border-transparent dark:border-blue-300 | select-none | group transition-all duration-300 | skill-icon">
    <span class="flex justify-center items-center flex-1 | w-16">
      <slot name="default" />
    </span>
    <span class="mt-2 | text-black dark:text-white group-hover:text-pink-500 dark-group-hover:text-white | text-base md:text-lg | font-bold leading-none | transition-colors duration-300">
      {{ name }}
    </span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class SkillIcon extends Vue {
  @Prop({ type: String, required: true })
  readonly name!: string;
}
</script>

<style lang="scss" scoped>
.skill-icon {
  min-width: rem(140);
  min-height: rem(120);

  svg {
    @apply fill-current;
  }
}
</style>
