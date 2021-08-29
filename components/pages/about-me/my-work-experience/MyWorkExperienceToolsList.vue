<template>
  <div>
    <span class="block | font-bold | text-xs | mb-6">
      {{ label }}
    </span>
    <div class="flex flex-wrap">
      <div
        v-for="(tool, index) in tools"
        :key="index"
        class="mr-4 mb-4 py-2 px-4 | text-sm | font-bold | whitespace-nowrap | rounded-full | border border-pink-500 dark:border-blue-300 | bg-pink-50 bg-opacity-30 dark:bg-blue-700 dark:bg-opacity-25"
      >
        {{ tool }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class MyWorkExperienceToolsList extends Vue {
  @Prop({ type: Array, required: true })
  readonly tools!: Array<string>;

  @Prop({ type: String, required: true })
  readonly label!: Array<string>;
}
</script>
