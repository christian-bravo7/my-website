<template>
  <section
    class="grid grid-cols-2 h-24"
  >
    <div
      class="h-full bg-gray-200 dark:bg-blue-700"
      :class="{ 'opacity-0': second }"
    />
    <div
      class="h-full bg-gray-200 dark:bg-blue-700"
      :class="{ 'opacity-0': first }"
    />
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class ContentDivider extends Vue {
  @Prop({ type: Boolean, default: false })
  readonly first!: boolean;

  @Prop({ type: Boolean, default: false })
  readonly second!: boolean;
}
</script>
