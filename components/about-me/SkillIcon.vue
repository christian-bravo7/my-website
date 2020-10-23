<template>
  <div class="flex flex-col group items-center justify-center w-full p-2 skill-icon hover:shadow-lg transition-shadow duration-150">
    <span class="w-16 text-pink-800 dark:text-blue-500">
      <slot name="default" />
    </span>
    <span class="mt-2 text-gray-300 dark:text-blue-700 group-hover:text-pink-800 dark-group-hover:text-blue-500 text-base md:text-lg font-bold transition-colors duration-150">
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
  svg {
    @apply fill-current;
  }
}
</style>
