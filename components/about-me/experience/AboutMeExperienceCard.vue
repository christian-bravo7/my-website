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
      <div class="flex flex-col | ml-5 | text-xs | capitalize">
        <span>
          {{ formattedStartYear }} {{ separatorSymbol }}
        </span>
        <span v-if="endYear">
          {{ formattedEndYear }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';

import dayjs from 'dayjs';

@Component
export default class AboutMeExperienceCard extends Vue {
  @Prop({ type: String, required: true })
  readonly company!: string;

  @Prop({ type: String, required: true })
  readonly jobRole!: string;

  @Prop({ type: Array, required: true })
  readonly startYear!: Array<number>;

  @Prop({ type: Array })
  readonly endYear!: Array<number>;

  get formattedStartYear (): string {
    return this.formattedYear(this.startYear);
  }

  get formattedEndYear (): string {
    return this.formattedYear(this.endYear);
  }

  get separatorSymbol (): string {
    return this.endYear ? '/' : '~';
  }

  formattedYear (date: any): string {
    return dayjs(date).format('MMM YYYY');
  }
}
</script>
