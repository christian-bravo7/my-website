<template>
  <div class="inline-block | p-4 | rounded-2xl select-none | bg-gray-100 dark:bg-transparent dark-hover:bg-blue-700 dark-hover:bg-opacity-25 | shadow-md border border-transparent hover:shadow-xl dark:border-blue-300 | transition-all duration-300">
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
