<template>
  <h6 class="text-xl | mb-2">
    <span class="font-bold">
      {{ jobPosition }}
    </span>
    <span>{{ $t('home.at-label') }}</span>
    <a
      class="text-pink-500 dark:text-blue-400 | font-bold | hover:underline | transition-all duration-300"
      :href="websiteUrl"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ company }}
    </a>
  </h6>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class MyWorkExperienceCardTitle extends Vue {
  @Prop({ type: String, required: true })
  readonly jobPosition!: string;

  @Prop({ type: String, required: true })
  readonly websiteUrl!: string;

  @Prop({ type: String, required: true })
  readonly company!: string;
}
</script>
