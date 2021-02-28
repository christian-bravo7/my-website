<template>
  <div class="flex flex-col items-center justify-between | group transition-all duration-300 | card skill-icon">
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
  min-width: 140px;
  min-height: 120px;

  svg {
    @apply fill-current;
  }
}
</style>
