<template>
  <div class="mb-6">
    <div
      v-for="(description, index) in descriptionParagraphs"
      :key="index"
      class="flex mb-2"
    >
      <span class="text-light-theme-600 dark:text-dark-theme-300 | material-icons">
        arrow_right
      </span>
      <span class="leading-loose | font-base">
        {{ description }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class MyWorkExperienceCardDescription extends Vue {
  @Prop({ type: Array, required: true })
  readonly descriptionParagraphs!: Array<string>;
}
</script>
