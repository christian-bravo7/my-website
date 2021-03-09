<template>
  <div class="inline-block | transition-all duration-300 | card">
    <div class="flex items-center | text-black dark:text-white">
      <div class="flex flex-col flex-1">
        <span class="mb-1 | text-lg | font-bold">
          {{ jobRole }}
        </span>
        <span class="text-sm">
          {{ company }}
        </span>
      </div>
      <div class="flex flex-col | ml-5 | text-xs">
        <span>
          {{ startYear }} {{ separatorSymbol }}
        </span>
        <span v-if="endYear">
          {{ endYear }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class AboutMeExperienceCard extends Vue {
  @Prop({ type: String, required: true })
  readonly company!: string;

  @Prop({ type: String, required: true })
  readonly jobRole!: string;

  @Prop({ type: String, required: true })
  readonly startYear!: string;

  @Prop({ type: String })
  readonly endYear!: string;

  get separatorSymbol (): string {
    return this.endYear ? '/' : '~';
  }
}
</script>
