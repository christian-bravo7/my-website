<template>
  <div class="inline-block | p-4 | rounded-2xl select-none | bg-gray-100 dark:bg-blue-700 | shadow-md hover:shadow-xl | transition-shadow duration-300">
    <div class="flex items-center | text-black dark:text-white">
      <div class="flex flex-col flex-1">
        <span class="text-lg | font-bold">
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
export default class AboutMeJobCard extends Vue {
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
